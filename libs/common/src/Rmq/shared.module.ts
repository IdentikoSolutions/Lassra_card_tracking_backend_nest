// import { DynamicModule, Module } from '@nestjs/common';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { ClientProxyFactory, Transport } from '@nestjs/microservices';
// import { SharedService } from './shared.service';

// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       isGlobal: true,
//       envFilePath: './.env',
//     }),
//   ],
//   providers: [SharedService],
//   exports: [SharedService],
// })
// export class SharedModule {
//   static registerRmq(service: string, queue: string): DynamicModule {
//     console.log(service, 'and', queue);
//     const providers = [
//       {
//         provide: service,
//         useFactory: (configService: ConfigService) => {
//           const url = configService.get('RABBIT_MQ_URI');
//           return ClientProxyFactory.create({
//             transport: Transport.RMQ,
//             options: {
//               urls: [url],
//               queue,
//               noAck: false,
//               queueOptions: {
//                 durable: true, // queue survives broker restart
//                 arguments: {
//                   'x-message-ttl': 30 * 24 * 60 * 60 * 1000, // 30 days TTL
//                   'x-dead-letter-exchange': '', // Default exchange
//                   'x-dead-letter-routing-key': 'dead_letter_queue', // DLQ routing key
//                 },
//               },
//             },
//           });
//         },
//         inject: [ConfigService],
//       },
//     ];

//     return {
//       module: SharedModule,
//       providers,
//       exports: providers,
//     };
//   }
// }
