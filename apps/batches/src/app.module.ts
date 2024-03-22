import { Module, forwardRef } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { DatabaseModule, LoggerModule } from '@app/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Batch, Receipt, Card, CardReceipt } from './entities';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CardModule } from './card/card.module';
import { CardReceiptModule } from './cardreceipt/cardreceipt.module';
import { ReceiptModule } from './receipt/receipt.module';
import { BatchModule } from './batch/batch.module';
import { DevtoolsModule } from '@nestjs/devtools-integration';
// import { CorsModule } from '@nestjs/platform-express';
import { ProvisionModule } from './provision/provision.module';
import { CardprovisionModule } from './cardprovision/cardprovision.module';
import { DispatchModule } from './dispatch/dispatch.module';

@Module({
  imports: [
    // DatabaseModule,
    // CorsModule.forRoot({
    //   origin: '*',
    //   methods: ['GET', 'POST', 'PUT', 'DELETE'],
    //   allowedHeaders: ['Content-Type', 'Authorization'],
    // }),
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: parseInt(configService.get('POSTGRES_PORT')), // Convert string to number
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        autoLoadEntities: true,
        synchronize: true,
        logging: true,
      }),
      inject: [ConfigService],
    }),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'card_tracker',
    //   password: 'card_tracker',
    //   database: 'card_tracker',
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   synchronize: true, // In development, set to true; in production, set to false
    // }),
    TypeOrmModule.forFeature([Batch, Card, Receipt, CardReceipt]),
    BatchModule,
    ReceiptModule,
    CardModule,
    CardReceiptModule,
    ProvisionModule,
    CardprovisionModule,
    DispatchModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
  exports: [ConfigService],
})
export class AppModule {}
