import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { CreateDispatchDto } from './dto/create-dispatch.dto';
import { UpdateDispatchDto } from './dto/update-dispatch.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dispatch } from './entities/dispatch.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { CardLocation } from './entities/location.entity';
import { CardDispatch } from './entities/cardDispatch.entity';
import { AppController } from '../app.controller';
import amqp, { ChannelWrapper } from 'amqp-connection-manager';
import { ConfirmChannel } from 'amqplib';
import { CardRepository } from '../repository/card.repository';
import { Card } from '../entities';
import { DataSource } from 'typeorm';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';

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
  ) {
    // const connection = amqp.connect(['amqp://localhost']);
    // this.channelWrapper = connection.createChannel();
  }

  // public async onModuleInit() {
  //   try {
  //     await this.channelWrapper.addSetup(async (channel: ConfirmChannel) => {
  //       await channel.assertQueue('webhook', { durable: true });
  //       await channel.consume('webhook', async (message) => {
  //         if (message) {
  //           const content = JSON.parse(message.content.toString());
  //           this.logger.log('Received message:', content);
  //           // await this.emailService.sendEmail(content);
  //           // channel.ack(message);
  //         }
  //       });
  //     });
  //     // this.logger.log('Consumer service started and listening for messages.');
  //   } catch (err) {
  //     this.logger.error('Error starting the consumer:', err);
  //   }
  // }
  async UpdateCardRelocationStatus(data: any) {
    console.log(data, 'dispathc  service');

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
    const dispatchToUpdate = await this.dispatchRepository.findOne({
      where: { id },
      relations: ['cardDispatch'],
    });
    // console.log(dispatchToUpdate, 'updateCardSDisppappe');
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
