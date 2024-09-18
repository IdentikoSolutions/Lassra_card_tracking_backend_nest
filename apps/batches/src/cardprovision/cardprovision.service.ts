import { Injectable } from '@nestjs/common';
import { UpdateCardprovisionDto } from './dto/update-cardprovision.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CardProvision } from './entities/cardprovision.entity';
import { Provision } from '../provision/entities/provision.entity';
import { Card } from '../entities';

@Injectable()
export class CardprovisionService {
  constructor(
    @InjectRepository(CardProvision)
    private readonly cardProvisionRepository: Repository<CardProvision>,
    @InjectRepository(Provision)
    private readonly provisionRepository: Repository<Provision>,
    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,
  ) {}

  async create(lassraId: string, provisionId: number) {
    console.log('creater cardProvisom', lassraId, provisionId);
    try {
      //find receipt
      const provision = await this.provisionRepository.findOne({
        where: { id: provisionId },
      });
      console.log(provision, 'first comnsole');
      if (provision && provision.provisionStatus === 1) {
        throw new Error('Provision receipt already completed');
      }
      //find card to update
      const cardtoUpdate = await this.cardRepository.findOne({
        where: { lassraId: lassraId },
      });
      console.log(cardtoUpdate, 'second comnsole');

      if (cardtoUpdate && cardtoUpdate.batchNo === provision.batchNo) {
        if (cardtoUpdate.status === 2) {
          throw new Error('Card already added to the provision receipt');
        }
        cardtoUpdate.status = 2;
        const result = await this.cardRepository.save(cardtoUpdate);
        console.log(result, 'third comnsole');
      } else {
        throw new Error('Card not Added');
      }
      const newcardReceipt = await this.cardProvisionRepository.create({
        lassraId,
        provision,
      });
      const result2 = await this.cardProvisionRepository.save(newcardReceipt);
      console.log(result2, 'fourth comnsole');

      return `Card with lassraId: ${lassraId} added to Receipt: ${provisionId} successfully`;
    } catch (e: any) {
      throw new Error(e.message);
    }
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

  // findOne(id: number) {
  //   return `This action returns a #${id} cardprovision`;
  // }

  // update(id: number, updateCardprovisionDto: UpdateCardprovisionDto) {
  //   return `This action updates a #${id} cardprovision`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} cardprovision`;
  // }
}
