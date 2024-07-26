import { Module } from '@nestjs/common';
import { DispatchService } from './dispatch.service';
import { DispatchController } from './dispatch.controller';
import { DatabaseModule } from '@app/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from '../entities';
import { CardDispatch } from './entities/cardDispatch.entity';
import { Dispatch } from './entities/dispatch.entity';
import { CardLocation } from './entities/location.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([Card, Dispatch, CardDispatch, CardLocation]),
    ClientsModule.register([
      {
        name: 'WEBHOOK_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBIT_MQ_URI],
          queue: 'webhook',
          noAck: false,
          queueOptions: {
            durable: true, // queue survives broker restart
            arguments: {
              'x-message-ttl': 30 * 24 * 60 * 60 * 1000, // 30 days TTL
              'x-dead-letter-exchange': '', // Default exchange
              'x-dead-letter-routing-key': 'dead_letter_queue', // DLQ routing key
            },
            // deadLetterExchange: 'dlx',
            // messageTtl: 60 * 60 * 1000,
          },
        },
      },
    ]),
  ],
  controllers: [DispatchController],
  providers: [DispatchService],
})
export class DispatchModule {}
