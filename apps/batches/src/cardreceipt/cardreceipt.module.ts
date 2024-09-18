import { Module, forwardRef } from '@nestjs/common';
import { CardReceiptService } from './cardreceipt.service';
import { CardReceiptController } from './cardreceipt.controller';
import { DatabaseModule } from '@app/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Batch } from 'typeorm';
import { Receipt } from '../entities/receipt.entity';
import { CardReceipt } from '../entities/cardreceipt.entity';
import { Card } from '../entities';
// import { Card } from '../entities/card.entity';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([CardReceipt, Receipt, Card]),
  ],
  controllers: [CardReceiptController],
  providers: [CardReceiptService],
})
export class CardReceiptModule {}
