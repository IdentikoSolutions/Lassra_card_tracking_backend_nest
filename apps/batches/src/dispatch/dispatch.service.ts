import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateDispatchDto } from './dto/create-dispatch.dto';
import { UpdateDispatchDto } from './dto/update-dispatch.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dispatch } from './entities/dispatch.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { CardLocation } from './entities/location.entity';
import { CardDispatch } from './entities/cardDispatch.entity';
import { AppController } from '../app.controller';
import { CardRepository } from '../repository/card.repository';
import { Card } from '../entities';
import { DataSource } from 'typeorm';

@Injectable()
export class DispatchService {
  constructor(
    @InjectRepository(Dispatch)
    private readonly dispatchRepository: Repository<Dispatch>,
    @InjectRepository(CardDispatch)
    private readonly cardDispatchRepository: Repository<CardDispatch>,
    @InjectRepository(Card)
    private readonly cardRepository: CardRepository,
    @InjectRepository(CardLocation)
    private readonly cardLocationRepository: Repository<CardLocation>,
    private readonly dataSource: DataSource,
  ) {}
  // (1)
  async getCardforDispatch(
    batchNo: number,
    lassraId: string,
    collectionCenter: string,
  ) {
    const status = 2;
    const currentLocation = 'Head office';
    if (batchNo > 0 && collectionCenter) {
      const searchresult = await this.cardLocationRepository
        .createQueryBuilder('cardLocation')
        .leftJoinAndSelect('cardLocation.card', 'card')
        .where('card.batchNo = :batchNo', { batchNo })
        .andWhere('card.status = :status', { status })
        .andWhere('cardLocation.currentLocation = :currentLocation', {
          currentLocation,
        })
        .andWhere('cardLocation.collectionCenter = :collectionCenter', {
          collectionCenter,
        })
        .select(['cardLocation.lassraId', 'cardLocation.collectionCenter'])
        .getMany();
      return searchresult;
    } else if (lassraId) {
      return await this.cardLocationRepository.find({
        where: { lassraId, currentLocation },
        select: ['lassraId', 'collectionCenter'],
      });
    } else if (batchNo < 1 && collectionCenter) {
      const searchresult = await this.cardLocationRepository
        .createQueryBuilder('cardLocation')
        .leftJoinAndSelect('cardLocation.card', 'card')
        .where('card.status= :status', { status })
        .andWhere('cardLocation.collectionCenter = :collectionCenter', {
          collectionCenter,
        })
        .andWhere('cardLocation.currentLocation= :currentLocation', {
          currentLocation,
        })
        .select(['cardLocation.lassraId', 'cardLocation.collectionCenter'])
        .getMany();
      return searchresult;
    }
  }
  //(2)Gett all cards
  async createDispatch(createDispatchDto: CreateDispatchDto) {
    const cardData = createDispatchDto.cardDispatch.map((item) => ({
      ...item,
      dispatchStatus: 0,
    }));

    const DispData = { ...createDispatchDto, cardDispatch: cardData };
    try {
      const newDispatch = await this.dispatchRepository.create(DispData);
      return await this.dispatchRepository.save(newDispatch);
    } catch (e) {
      throw new Error(e.message);
    }
  }
  async ackDispatch(updateDispatchDto: UpdateDispatchDto, id: number) {
    const cardToUpdate = await this.dispatchRepository.findOne({
      where: { id },
      relations: ['cardDispatch'],
    });
    // console.log(cardToUpdate, 'updateCardSDisppappe');
    if (cardToUpdate?.dispatchStatus === 1) {
      throw new ConflictException('Dispatch already acknowledged.');
    }
    if (!cardToUpdate) {
      throw new NotFoundException('Dispatch order  not found');
    }
    try {
      const queryBuilder = await this.dispatchRepository.manager.transaction(
        async (transactionManager) => {
          cardToUpdate.acknowledgedAt = updateDispatchDto.acknowledgedAt;
          cardToUpdate.acknowledgedBy = updateDispatchDto.acknowledgedBy;
          cardToUpdate.dispatchStatus = 1;
          cardToUpdate.cardDispatch.forEach(async (cardDispatch) => {
            const currentCard = updateDispatchDto.cardDispatch.find(
              (card) => card.lassraId === cardDispatch.lassraId,
            );
            if (currentCard) {
              cardDispatch.destination = currentCard.destination;
              cardDispatch.dispatchStatus = 1;
              const newLocation = await this.cardLocationRepository.findOne({
                where: { lassraId: currentCard.lassraId },
              });
              if (newLocation) {
                newLocation.currentLocation = newLocation.collectionCenter;
              }
              return cardDispatch;
            } else {
              return cardDispatch;
            }
          });
          const updated = await this.dispatchRepository.save(cardToUpdate);
          console.log(updated);
          await transactionManager.save(updated);
        },
      );
      return 'updated successfully';
    } catch (e) {
      throw new Error('not ccompleted');
    }
  }
  // (4)
  async findAll() {
    console.log('rom findALL');
    try {
      return await this.dispatchRepository.find({});
    } catch (e) {
      throw new Error(e);
    }
  }
  // (5)
  async findOneCardDispatch(id: number, lassraId: string) {
    const dispatch = await this.dispatchRepository.find({
      where: {
        id,
      },
    });
    console.log(dispatch);
    try {
      if (dispatch) {
        return await this.cardDispatchRepository.find({
          where: { dispatch, lassraId: lassraId },
        });
      }
    } catch (e) {
      throw new Error('this is my err' + e.message);
    }
  }
  // (6)
  async findOne(id: number) {
    try {
      const oneDispatch = await this.dispatchRepository.find({
        where: { id },
        relations: ['cardDispatch'],
      });
      return oneDispatch[0];
    } catch (e) {
      throw new Error(e);
    }
  }
  // (7)
  // update(id: number, updateDispatchDto: UpdateDispatchDto) {
  //   return `This action updates a #${id} dispatch`;
  // }
  // (8)
  remove(id: number) {
    return `This action removes a #${id} dispatch`;
  }
}
