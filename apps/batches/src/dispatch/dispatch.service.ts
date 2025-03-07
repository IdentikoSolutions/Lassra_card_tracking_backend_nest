import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateDispatchDto } from './dto/create-dispatch.dto';
import { UpdateDispatchDto } from './dto/update-dispatch.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dispatch } from './entities/dispatch.entity';
import { Repository } from 'typeorm';
import { CardLocation } from './entities/location.entity';
import { CardDispatch } from './entities/cardDispatch.entity';
import { ChannelWrapper } from 'amqp-connection-manager';
import { CardRepository } from '../repository/card.repository';
import { Card } from '../entities';
import { DataSource } from 'typeorm';

@Injectable()
export class DispatchService {
  private channelWrapper: ChannelWrapper;
  private readonly logger = new Logger(DispatchService.name);
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

  async UpdateCardRelocationStatus(data: any) {
    try {
      const reqCard = await this.cardLocationRepository.findOneBy({
        lassraId: data.lassraId,
      });
      if (reqCard) {
        reqCard.requestedRelocation = true;
        reqCard.collectionCenter = data.newCollectionCenter;
        await this.cardLocationRepository.save(reqCard);
      }
    } catch (e) {
      throw new Error(e);
    }
  }
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
        .where('card.status = :status', { status })
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
    const DispData = {
      ...createDispatchDto,
    };
    try {
      const newDispatch = await this.dispatchRepository.create(DispData);
      return await this.dispatchRepository.save(newDispatch);
    } catch (e) {
      throw new Error(e.message);
    }
  }
  async addCardToDispatch(lassraId: string, dispatchId: number) {
    try {
      const dispatchOrder = await this.dispatchRepository.findOne({
        where: {
          id: dispatchId,
        },
      });
      if (dispatchOrder.dispatchStatus !== 0) {
        throw new Error(`Cannot add card to dispatch that is prepared`);
      } else {
        const cardDispatch = this.cardDispatchRepository.create({
          lassraId,
          destination: dispatchOrder.destination,
          dispatchStatus: 0,
          dispatch: dispatchOrder,
        });
        const result = await this.cardDispatchRepository.save(cardDispatch);
        console.log(cardDispatch, result, 'from creat dispatch');

        return result;
      }
    } catch (e) {
      console.log(e);

      throw new Error(e.massage);
    }
  }
  async removeCardToDispatch(id: number, dispatchId: number) {
    console.log(id, dispatchId);
    try {
      const dispatchOrder = await this.dispatchRepository.findOneBy({
        id: dispatchId,
      });
      if (!dispatchOrder) {
        throw new Error('Dispatch order not found');
      }
      if (dispatchOrder.dispatchStatus !== 0) {
        throw new Error('Dispatched preparation completed already');
      }
      const cardDispatch = await this.cardDispatchRepository.findOneBy({ id });
      if (!cardDispatch) {
        throw new Error('Card dispatch not found');
      }
      return await this.cardDispatchRepository.remove(cardDispatch);
    } catch (e) {
      console.log(e);

      throw new Error(e.message);
    }
  }
  async ackDispatch(updateDispatchDto: UpdateDispatchDto, id: number) {
    const dispatchToUpdate = await this.dispatchRepository.findOne({
      where: { id },
      relations: ['cardDispatch'],
    });
    if (!dispatchToUpdate) {
      throw new NotFoundException('Dispatch order  not found');
    }
    if (dispatchToUpdate.dispatchStatus === 1) {
      throw new ConflictException('Dispatch already acknowledged.');
    }

    try {
      const queryBuilder = await this.dispatchRepository.manager.transaction(
        async (transactionManager) => {
          dispatchToUpdate.acknowledgedAt = updateDispatchDto.acknowledgedAt;
          dispatchToUpdate.acknowledgedBy = updateDispatchDto.acknowledgedBy;
          dispatchToUpdate.dispatchStatus = 1;
          dispatchToUpdate.cardDispatch.forEach(async (cardDispatch) => {
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
                await this.cardLocationRepository.save(newLocation);
              } else {
                throw new Error('card location detail not found');
              }
              return cardDispatch;
            } else {
              return cardDispatch;
            }
          });
          const updated = await this.dispatchRepository.save(dispatchToUpdate);
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
    try {
      if (dispatch) {
        return await this.cardDispatchRepository.find({
          where: { dispatch, lassraId: lassraId },
        });
      }
    } catch (e) {
      throw new Error('Error: ' + e.message);
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
}
