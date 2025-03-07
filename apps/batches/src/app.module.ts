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
import { ProvisionModule } from './provision/provision.module';
import { CardprovisionModule } from './cardprovision/cardprovision.module';
import { DispatchModule } from './dispatch/dispatch.module';
import { RetrivalModule } from './retrival/retrival.module';
import { DeliveryModule } from './delivery/delivery.module';
import { BackupModule } from './backup/backup.module';
import { BackupService } from './backup/backup.service';
import { ScheduleModule } from '@nestjs/schedule';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

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
        type: 'mssql',
        host: configService.get('SQL_SERVER_HOST'),
        port: parseInt(configService.get('SQL_SERVER_PORT')), // Convert string to number
        username: configService.get('SQL_SERVER_USERNAME'),
        password: configService.get('SQL_SERVER_PASSWORD'),
        database: configService.get('SQL_SERVER_DATABASE'),

        // type: 'postgres',
        // host: configService.get('POSTGRES_HOST'),
        // port: parseInt(configService.get('POSTGRES_PORT')), // Convert string to number
        // username: configService.get('POSTGRES_USER'),
        // password: configService.get('POSTGRES_PASSWORD'),
        // database: configService.get('POSTGRES_DATABASE'),
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
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService, BackupService],
  exports: [ConfigService],
})
export class AppModule {}
