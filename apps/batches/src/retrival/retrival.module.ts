import { Module } from '@nestjs/common';
import { RetrivalService } from './retrival.service';
import { RetrivalController } from './retrival.controller';
import { DatabaseModule } from 'libs/common/src';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Retrival } from './entities/retrival.entity';
import { CardLocation } from '../dispatch/entities/location.entity';
import { CardRetrival } from './entities/cardRetrival.entity';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([Retrival, CardRetrival, CardLocation]),
  ],
  controllers: [RetrivalController],
  providers: [RetrivalService],
})
export class RetrivalModule {}
