import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { DatabaseModule } from '@app/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Batch } from '../entities/batch.entity';
import { Card } from '../entities/card.entity';
import { CardReceipt } from '../entities/cardreceipt.entity';
import { Receipt } from '../entities/receipt.entity';
import { CardLocation } from '../dispatch/entities/location.entity';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([Batch, Card, Receipt, CardReceipt, CardLocation]),
  ],
  controllers: [CardController],
  providers: [CardService],
})
export class CardModule {}
