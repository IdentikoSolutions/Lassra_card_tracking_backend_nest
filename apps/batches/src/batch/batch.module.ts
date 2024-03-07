import { Module } from '@nestjs/common';
import { BatchService } from './batch.service';
import { BatchController } from './batch.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Batch } from '../entities/batch.entity';
import { Receipt } from '../entities/receipt.entity';
import { Card } from '../entities/card.entity';
// import { CardReceipt } from '../entities/cardreceipt.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Batch, Receipt, Card])],
  controllers: [BatchController],
  providers: [BatchService],
  exports: [BatchService],
})
export class BatchModule {}
