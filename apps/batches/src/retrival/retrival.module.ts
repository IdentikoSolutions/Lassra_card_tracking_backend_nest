import { Module } from '@nestjs/common';
import { RetrivalService } from './retrival.service';
import { RetrivalController } from './retrival.controller';
import { DatabaseModule } from '@app/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Retrival } from './entities/retrival.entity';
import { CardLocation } from '../dispatch/entities/location.entity';
import { CardRetrival } from './entities/cardRetrival.entity';
import { WEBHOOK_SERVICE } from 'libs/common/src/constants/services';
// import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([Retrival, CardRetrival, CardLocation]),
    // ClientsModule.register([
    //   {
    //     name: 'WEBHOOK_SERVICE',
    //     transport: Transport.RMQ,
    //     options: {
    //       urls: [process.env.RABBIT_MQ_URI],
    //       queue: 'webhook',
    //       noAck: false,
    //       queueOptions: {
    //         durable: true, // queue survives broker restart
    //         arguments: {
    //           'x-message-ttl': 30 * 24 * 60 * 60 * 1000, // 30 days TTL
    //           'x-dead-letter-exchange': '', // Default exchange
    //           'x-dead-letter-routing-key': 'dead_letter_queue', // DLQ routing key
    //         },
    //       },
    //     },
    //   },
    // ]),
    // SharedModule.registerRmq(
    //   'WEBHOOK_SERVICE',
    //   process.env.RABBIT_MQ_WEBHOOK_QUEUE,
    // ),
  ],
  controllers: [RetrivalController],
  providers: [
    RetrivalService,
    // { provide: 'WEBHOOK_SERVICE', useValue: SharedService },
  ],
})
export class RetrivalModule {}
