import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCardDto } from '../dto/create-card.dto';
import { UpdateCardDto } from '../dto/update-card.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from '../entities';
import { CardRepository } from '../repository';
import { CardLocation } from '../dispatch/entities/location.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card) private readonly cardRepository: CardRepository,
    @InjectRepository(CardLocation)
    private readonly cardLocationRepository: Repository<CardLocation>,
  ) {}
  // create(createCardDto: CreateCardDto) {
  //   return 'This action adds a new card';
  // }
  //get all the card or get all cards for a batch when you supply batchNo as queryParam
  async findAll(batchNo: string) {
    try {
      if (!batchNo) {
        return await this.cardRepository.find({});
      } else {
        return await this.cardRepository.find({
          where: {
            batchNo,
          },
        });
      }
    } catch (e) {
      throw new Error(e);
    }
  }
  async getCardForRetrivalByCollectionCenter(currentLocation: string) {
    console.log('selecting requests');
    //this will get card that requested relocation and/or home delivery by collectionCenter
    const queryBuilder = await this.cardLocationRepository.createQueryBuilder(
      'cardLocation',
    );
    queryBuilder
      .leftJoinAndSelect('cardLocation.card', 'card')
      .where('cardLocation.currentLocation= :currentLocation', {
        currentLocation,
      })
      .andWhere(
        '(cardLocation.requestedDelivery = :requestedDelivery OR cardLocation.requestedRelocation = :requestedRelocation)',
        { requestedDelivery: true, requestedRelocation: true },
      );
    return queryBuilder.getMany();
  }
  //get only the list of cards that have not been received
  // default status should be 0 and should be status of cards not received
  async getCardCountByBatchNoAndStatus(
    batchNo: string,
    status: number,
  ): Promise<[Card[], number]> {
    const queryBuilder = await this.cardRepository.createQueryBuilder('card');
    queryBuilder
      .where('card.batchNo =:batchNo', { batchNo })
      .andWhere('card.status =:status', { status });
    return await queryBuilder.getManyAndCount();
  }

  async findOne(batchNo: string, lassraId: string) {
    try {
      const queryBuilder = await this.cardRepository.createQueryBuilder('card');
      queryBuilder.andWhere('card.lassraId =:lassraId', { lassraId });
      console.log(queryBuilder, 'QueryBuilder');
      return queryBuilder.getOne();
    } catch (e) {
      throw new Error(e);
    }
    // try {
    //   const queryBuilder = await this.cardLocationRepository
    //     .createQueryBuilder('cardLocation')
    //     .leftJoinAndSelect('cardLocation.card', 'card')
    //     .where('card.lassraId =:lassraId', { lassraId });
    //   console.log(queryBuilder, 'QueryBuilder');
    //   return queryBuilder.getOne();
    // } catch (e) {
    //   throw new Error(e);
    // }
  }

  async update(id: number, updateCardDto: UpdateCardDto) {
    const cardToUpdate = await this.cardRepository.findOne({
      where: { id: id },
    });
    if (!cardToUpdate) {
      throw new NotFoundException('Card Not found.');
    }
    const updated = Object.assign(cardToUpdate, updateCardDto);
    return await this.cardRepository.save(updated);
  }

  remove(id: number) {
    return `This action removes a #${id} card`;
  }
}
