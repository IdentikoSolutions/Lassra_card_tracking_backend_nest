import { Module, forwardRef } from '@nestjs/common';
import { ReceiptService } from './receipt.service';
import { ReceiptController } from './receipt.controller';
import { DatabaseModule } from '@app/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardReceipt } from '../entities/cardreceipt.entity';
import { BatchService } from '../batch/batch.service';
import { BatchModule } from '../batch/batch.module';
import { Batch, Card, Receipt } from '../entities';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([Receipt, Batch, Card, CardReceipt]),
    forwardRef(() => BatchModule),
  ],
  controllers: [ReceiptController],
  providers: [ReceiptService, BatchService],
})
export class ReceiptModule {}
