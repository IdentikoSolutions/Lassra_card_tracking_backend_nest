import { Module, forwardRef } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { LoggerModule } from '@app/common';
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
import { RetrivalModule } from './retrival/retrival.module';
import { DeliveryModule } from './delivery/delivery.module';
import { BackupModule } from './backup/backup.module';
import { BackupCron } from './backup/backup.cron';
import { BackupService } from './backup/backup.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ScheduleModule.forRoot(),
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
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([Batch, Card, Receipt, CardReceipt]),
    BatchModule,
    ReceiptModule,
    CardModule,
    CardReceiptModule,
    ProvisionModule,
    CardprovisionModule,
    DispatchModule,
    RetrivalModule,
    DeliveryModule,
    BackupModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ConfigService,
    // BackupCron,
    BackupService,
    // RmqService,
    // { provide: 'WEBHOOK_SERVICE', useValue: RmqService },

    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // },
  ],
  exports: [ConfigService],
})
export class AppModule {}
