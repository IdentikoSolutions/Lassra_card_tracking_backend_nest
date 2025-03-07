import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCardDto } from '../dto/create-card.dto';
import { UpdateCardDto } from '../dto/update-card.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from '../entities';
import { CardRepository } from '../repository';
import { CardLocation } from '../dispatch/entities/location.entity';
import { Not, Repository } from 'typeorm';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card) private readonly cardRepository: CardRepository,
    @InjectRepository(CardLocation)
    private readonly cardLocationRepository: Repository<CardLocation>,
  ) {}
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
  //this method is called by external service to update card location information
  async relocationRequest(lassraId: string, newLocation: string) {
    try {
      const cardToReloc = await this.cardLocationRepository.findOne({
        where: { lassraId: lassraId },
      });
      if (!cardToReloc) {
        throw new NotFoundException('user not found');
      }
      if (cardToReloc.currentLocation === newLocation) {
        throw new Error('The card location is same as current location');
      }
      cardToReloc.requestedRelocation = true;
      cardToReloc.collectionCenter = newLocation;

      return await this.cardLocationRepository.save(cardToReloc);
    } catch (e) {

      throw new Error('Requested could nt be completed');
    }
  }
  async requestDelivery(lassraId: string) {
    try {
      const cardToDeliver = await this.cardLocationRepository.findOne({
        where: { lassraId: lassraId },
      });
      if (!cardToDeliver) {
        throw new NotFoundException('User not found');
      }
      if (cardToDeliver.requestedDelivery === true) {
        return;
      }
      cardToDeliver.requestedDelivery = true;
      return await this.cardLocationRepository.save(cardToDeliver);
    } catch (err) {
      throw new Error(err.message);
    }
  }
  async getCardForRetrivalByCollectionCenter(currentLocation: string) {
    console.log('selecting requests', currentLocation);
    //this will get card that requested relocation and/or home delivery by collectionCenter
    const queryBuilder =
      this.cardLocationRepository.createQueryBuilder('cardLocation');
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

  async findOne(lassraId: string) {
    try {
      const loc = await this.cardLocationRepository.findOne({
        where: { lassraId: lassraId },
      });
      const queryBuilder = this.cardRepository.createQueryBuilder('card');
      queryBuilder.andWhere('card.lassraId =:lassraId', { lassraId });
      const card = await queryBuilder.getOne();
      if (loc) {
        card.cardLocation = loc;
      }
      return await card;
    } catch (e) {
      throw new Error(e);
    }
  }
  // async collectCard(lassraId: string, collectionCenter: string) {
  //   try {
  //     const result = await this.findOne(lassraId);
  //     //   where: { lassraId },
  //     //   relations: ['card'],
  //     // });
  //     console.log(result);
  //   } catch (e) {
  //     throw new NotFoundException(e.message);
  //   }
  // }
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

  async getAllCardForRetrival() {
    const queryBuilder =
      this.cardLocationRepository.createQueryBuilder('cardLocation');
    queryBuilder
      .leftJoinAndSelect('cardLocation.card', 'card')
      .where(
        '(cardLocation.requestedDelivery = :requestedDelivery OR cardLocation.requestedRelocation = :requestedRelocation)',
        { requestedDelivery: true, requestedRelocation: true },
      );
    // return
    const results = await queryBuilder.getMany();

    const groupedResults = {};
    results.forEach((result) => {
      if (!groupedResults[result.currentLocation]) {
        groupedResults[result.currentLocation] = [];
      }
      groupedResults[result.currentLocation].push(result);
    });

    const formattedResults = Object.keys(groupedResults).map((location) => {
      return {
        location,
        data: groupedResults[location],
      };
    });

    return formattedResults;
  }
}
