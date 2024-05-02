import { Injectable } from '@nestjs/common';
import { CreateRetrivalDto } from './dto/create-retrival.dto';
import { UpdateRetrivalDto } from './dto/update-retrival.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Retrival } from './entities/retrival.entity';
import { CardLocation } from '../dispatch/entities/location.entity';

@Injectable()
export class RetrivalService {
  @InjectRepository(Retrival)
  private readonly retrivalRepository: Repository<Retrival>;
  @InjectRepository(CardLocation)
  private readonly cardLocationRepository: Repository<CardLocation>;
  async create(createRetrivalDto: CreateRetrivalDto) {
    try {
      console.log(createRetrivalDto);
      const newRetrival = await this.retrivalRepository.create(
        createRetrivalDto,
      );
      return await this.retrivalRepository.save(newRetrival);
    } catch (e) {
      console.log(e);
    }
  }

  findAll() {
    return `This action returns all retrival`;
  }

  findOne(id: number) {
    return `This action returns a #${id} retrival`;
  }

  update(id: number, updateRetrivalDto: UpdateRetrivalDto) {
    return `This action updates a #${id} retrival`;
  }

  remove(id: number) {
    return `This action removes a #${id} retrival`;
  }
}
