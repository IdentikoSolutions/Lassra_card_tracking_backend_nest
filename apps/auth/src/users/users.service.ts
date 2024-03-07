import {
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './dto/users.repository';
import * as bcrypt from 'bcryptjs';
import { GetUserDto } from './dto/get-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}
  // async create(createUserDto: CreateUserDto) {
  //   await this.validateCreateUserDto(createUserDto);
  //   return this.usersRepository.create({
  //     ...createUserDto,
  //     password: await bcrypt.hash(createUserDto.password, 10),
  //   });
  // }
  // private async validateCreateUserDto(createUserDto: CreateUserDto) {
  //   try {
  //     await this.usersRepository.findOne({ email: createUserDto.email });
  //   } catch (err) {
  //     return;
  //   }
  //   throw new UnprocessableEntityException('Email already exists');
  // }
  async verifyUser(email: string, password: string) {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (user) {
      const passwordIsValid = await bcrypt.compare(password, user.password);
      if (!passwordIsValid) {
        throw new UnauthorizedException('Credentials are not valid');
      }
      return user;
    }
  }
  // async getUser(getUserDto: GetUserDto) {
  //   return this.usersRepository.findOne(getUserDto);
  // }
}
