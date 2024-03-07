import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
    cors: true,
  });
  const options = new DocumentBuilder()
    .setTitle('Lasra card tracking Api')
    .setDescription('Api for the card tracking project')
    .addServer('http://localhost:4000/', 'local dev')
    .addTag('Test')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useLogger(app.get(Logger));
  const configService = app.get(ConfigService);
  console.log(configService.get('PORT'), 'port');
  // await app.listen(configService.get('PORT'));
  await app.listen(configService.get('PORT'));
}
bootstrap();
