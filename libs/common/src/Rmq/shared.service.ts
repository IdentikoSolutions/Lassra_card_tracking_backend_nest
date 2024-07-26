import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RmqContext, RmqOptions, Transport } from '@nestjs/microservices';
import { SharedServiceInterface } from '../interface/shared.service.interface';

@Injectable()
export class SharedService implements SharedServiceInterface {
  constructor(private readonly configService: ConfigService) {}

  getRmqOptions(queue: string): RmqOptions {
    console.log(queue, 'queue')
    const url = this.configService.get('RABBIT_MQ_URI');
    return {
      transport: Transport.RMQ,
      options: {
        urls: [url],
        noAck: false,
        queue,
        prefetchCount:1,
        queueOptions: {
          durable: true,
          arguments: {
            'x-message-ttl': 30 * 24 * 60 * 60 * 1000, // 30 days TTL
            'x-dead-letter-exchange': '', // Default exchange
            'x-dead-letter-routing-key': 'dead_letter_queue', // DLQ routing key
          }
          // deadLetterExchange: 'dlx',
          // messageTtl: 60 * 60 * 1000, 
        }
      },
    };
  }

  acknowledgeMessage(context: RmqContext) {
    const channel = context.getChannelRef();
    const message = context.getMessage();
    channel.ack(message);
  }
}
