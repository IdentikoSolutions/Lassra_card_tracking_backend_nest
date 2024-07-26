import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
// import { SharedService } from '@app/common';
import { RmqOptions, Transport } from '@nestjs/microservices';
import { ResponseInterceptor } from 'libs/common/src/auth/interceptors/response.interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
    cors: true,
  });
  const options = new DocumentBuilder()
    .setTitle('Lasra card tracking Api')
    .setDescription('Api for the card tracking project')
    .addServer('http://localhost:4000/', 'local dev')
    .addTag('Lassra internal Card Tracking portals')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  const configService = app.get(ConfigService);
  // const sharedService = new SharedService()
  // app.get(SharedService);
  // console.log(sharedService)
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useLogger(app.get(Logger));
  // const queue = configService.get('RABBIT_MQ_WEBHOOK_QUEUE');
  // // app.connectMicroservice(sharedService.getRmqOptions(queue));
  // app.connectMicroservice({
  //   name: 'WEBHOOK_SERVICE',
  //   transport: Transport.RMQ,
  //   options: {
  //     urls: [process.env.RABBIT_MQ_URI],
  //     queue: 'webhook',
  //     noAck: false,
  //     queueOptions: {
  //       durable: true, // queue survives broker restart
  //       arguments: {
  //         'x-message-ttl': 30 * 24 * 60 * 60 * 1000, // 30 days TTL
  //         'x-dead-letter-exchange': '', // Default exchange
  //         'x-dead-letter-routing-key': 'dead_letter_queue', // DLQ routing key
  //       },
  //     },
  //   },
  // });
  // await app.startAllMicroservices();
  await app.listen(configService.get('PORT'));
}
bootstrap();
