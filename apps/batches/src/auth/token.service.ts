import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SessionToken } from './session-token.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { SessionTokenDto } from './session-token.dto';

@Injectable()
export class TokenService {
  constructor(
    @InjectRepository(SessionToken)
    private readonly sessionTokenRepository: Repository<SessionToken>,
  ) {}

  async create(token: SessionTokenDto) {
    try {
      const newSession = this.sessionTokenRepository.create(token);
      return await this.sessionTokenRepository.save(newSession);
    } catch (e) {
      throw new Error('Error creating' + e);
    }
  }
  async checkToken(token: string) {
    const tokenExist = await this.sessionTokenRepository.findOne({
      where: { token: token },
    });
    if (!tokenExist || tokenExist.expiredAt.getTime() < new Date().getTime()) {
      return false;
    }
    return true;
  }
  async remove(token: string) {
    try {
      const { id } = await this.sessionTokenRepository.findOne({
        where: { token: token },
      });
      return await this.sessionTokenRepository.delete({ id });
    } catch (e: any) {
      throw new Error(e.message);
    }
  }
}
