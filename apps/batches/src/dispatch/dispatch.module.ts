import { Module } from '@nestjs/common';
import { DispatchService } from './dispatch.service';
import { DispatchController } from './dispatch.controller';
import { DatabaseModule } from '@app/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from '../entities';
import { CardDispatch } from './entities/cardDispatch.entity';
import { Dispatch } from './entities/dispatch.entity';
import { CardLocation } from './entities/location.entity';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([Card, Dispatch, CardDispatch, CardLocation]),
  ],
  controllers: [DispatchController],
  providers: [DispatchService],
})
export class DispatchModule {}
