import { Injectable } from '@nestjs/common';
import { CreateCardProvisionDto } from './dto/create-cardprovision.dto';
import { UpdateCardprovisionDto } from './dto/update-cardprovision.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CardProvision } from './entities/cardprovision.entity';

@Injectable()
export class CardprovisionService {
  @InjectRepository(CardProvision)
  private readonly cardProvisionRepository: Repository<CardProvision>;
  create(createCardProvisionDto: CreateCardProvisionDto) {
    return 'This action adds a new cardprovision';
  }
  async findAll(provision_id: number) {
    if (!provision_id) {
      return await this.cardProvisionRepository.find({});
    }
    const cards = await this.cardProvisionRepository
      .createQueryBuilder('cardProvision')
      .where('cardProvision.provisionId =:provision_id', { provision_id })
      .getManyAndCount();
    return cards;
  }

  findOne(id: number) {
    return `This action returns a #${id} cardprovision`;
  }

  update(id: number, updateCardprovisionDto: UpdateCardprovisionDto) {
    return `This action updates a #${id} cardprovision`;
  }

  remove(id: number) {
    return `This action removes a #${id} cardprovision`;
  }
}
