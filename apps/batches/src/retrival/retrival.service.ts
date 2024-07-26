import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  // OnModuleInit,
} from '@nestjs/common';
import { CreateRetrivalDto } from './dto/create-retrival.dto';
import { UpdateRetrivalDto } from './dto/update-retrival.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Retrival } from './entities/retrival.entity';
import { CardLocation } from '../dispatch/entities/location.entity';
import { CardRetrival } from './entities/cardRetrival.entity';
// import { ProducerService } from '../procuder/producer.service';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RetrivalService {
  // private webhookClient: ClientProxy;
  constructor(
    @InjectRepository(Retrival)
    private readonly retrivalRepository: Repository<Retrival>,
    @InjectRepository(CardRetrival)
    private readonly cardRetrivalRepository: Repository<CardRetrival>,
    @InjectRepository(CardLocation)
    private readonly cardLocationRepository: Repository<CardLocation>,
    private configService: ConfigService,
    @Inject('WEBHOOK_SERVICE') private readonly webhookClient: ClientProxy,
  ) {
    // this.webhookClient = ClientProxyFactory.create({
    //   transport: Transport.RMQ,
    //   options: {
    //     urls: [
    //       configService.get('RABBIT_MQ_URI'),
    //       // 'amqps://jzzeeyil:7KLJorTAsikZBbvXSt9eJ8xizBcYouuK@lionfish.rmq.cloudamqp.com/jzzeeyil',
    //     ],
    //     queue: 'webhook',
    //     noAck: false,
    //     queueOptions: {
    //       durable: true,
    //       arguments: {
    //         'x-message-ttl': 30 * 24 * 60 * 60 * 1000, // 30 days TTL
    //         'x-dead-letter-exchange': '', // Default exchange
    //         'x-dead-letter-routing-key': 'dead_letter_queue', // DLQ routing key
    //       },
    //     },
    //   },
    // });
  }
  async requestDelivery(data: any) {
    console.log(data, 'retrival service');

    try {
      this.webhookClient.emit({ cmd: 'relocation_request' }, data);
    } catch (e) {
      throw new Error(e);
    }
  }

  async create(createRetrivalDto: CreateRetrivalDto) {
    try {
      const newRetrival = this.retrivalRepository.create(createRetrivalDto);
      console.log(newRetrival);

      return await this.retrivalRepository.save(newRetrival);
    } catch (e) {
      throw new Error(e);
    }
  }

  async findAll() {
    try {
      return await this.retrivalRepository.find();
    } catch (e) {
      throw new Error(e);
    }
  }

  async findOne(id: number) {
    // try {
    //   const queryBuilder = await this.retrivalRepository.createQueryBuilder(
    //     'retrival',
    //   );
    //   queryBuilder
    //     .leftJoinAndSelect('retrival.cardRetrival', 'cardRetrival')
    //     .where('retrival.id= :id', { id })
    //     .getOne();
    //   return queryBuilder;
    // } catch (e) {
    //   throw new Error(e);
    // }
    try {
      const retrival = await this.retrivalRepository.findOne({
        where: { id: id },
      });
      const card = await this.cardRetrivalRepository.find({
        where: { retrival: retrival },
      });
      return { ...retrival, cardRetrival: card };
    } catch (e) {
      throw new Error(e);
    }
  }

  async update(id: number, updateRetrivalDto: UpdateRetrivalDto) {
    // console.log(this.webhookClient?.emit(),'WEBHOOK client');
    // this.producerService.addToMessage('testing');
    // this.webhookClient.emit('update', 'Update');
    try {
      const retrivalToUpdate = await this.retrivalRepository.findOne({
        where: { id },
        relations: ['cardRetrival'],
      });
      if (!retrivalToUpdate)
        throw new NotFoundException('Retrival order not found');
      if (retrivalToUpdate.retrivalStatus > 0)
        throw new BadRequestException('Retrival already acknowledged.');
      await this.retrivalRepository.manager.transaction(
        async (transactionManager) => {
          retrivalToUpdate.acknowledgedBy = updateRetrivalDto.acknowledgedBy;
          retrivalToUpdate.retrivedBy = updateRetrivalDto.retrivedBy;
          retrivalToUpdate.acknowledgedAt = new Date();
          retrivalToUpdate.retrivedAt = updateRetrivalDto.retrivedAt;
          retrivalToUpdate.retrivalStatus = 1;
          retrivalToUpdate.cardRetrival.forEach(async (cardRetrivalItem) => {
            const currentcard = updateRetrivalDto.cardRetrival?.find(
              (card) => card.lassraId === cardRetrivalItem.lassraId,
            );
            if (currentcard) {
              cardRetrivalItem.status = 1;
              const locationdetail = await this.cardLocationRepository.findOne({
                where: { lassraId: currentcard.lassraId },
              });
              if (locationdetail) {
                // throw new NotFoundException('location detail not found');
                const dup = { ...locationdetail };
                locationdetail.currentLocation = 'Head office';
                locationdetail.previousLocations =
                  dup.previousLocations + '->' + dup.currentLocation;
                const cardlocation = await this.cardLocationRepository.save(
                  locationdetail,
                );
              }
              // this.webhookClient.emit(
              //   { cmd: 'card_relocated' },
              //   cardRetrivalItem,
              // );

              return cardRetrivalItem;
            }
            return cardRetrivalItem;
          });
          const updatedretrival = await this.retrivalRepository.save(
            retrivalToUpdate,
          );
          await transactionManager.save(updatedretrival);
        },
      );
      return 'acknowledgements of retrival successful';
    } catch (e) {
      throw new Error(e);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} retrival`;
  }
}
