import { Module } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { DeliveryController } from './delivery.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardLocation } from '../dispatch/entities/location.entity';
import { Card } from '../entities';
import { CardService } from '../card/card.service';
import { Delivery } from './entities/delivery.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CardLocation, Card, Delivery])],
  controllers: [DeliveryController],
  providers: [DeliveryService, CardService],
})
export class DeliveryModule {}
