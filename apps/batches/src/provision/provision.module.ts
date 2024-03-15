import { Module, forwardRef } from '@nestjs/common';
import { ProvisionService } from './provision.service';
import { ProvisionController } from './provision.controller';
import { DatabaseModule } from '@app/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receipt, Batch, Card, CardReceipt } from '../entities';
import { Provision } from './entities/provision.entity';
import { CardProvision } from '../cardprovision/entities/cardprovision.entity';
// import { BatchModule } from '../batch/batch.module';
import { BatchService } from '../batch/batch.service';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([
      Receipt,
      Batch,
      Card,
      CardReceipt,
      Provision,
      CardProvision,
    ]),
    // forwardRef(() => BatchModule),
  ],
  controllers: [ProvisionController],
  providers: [ProvisionService, BatchService],
})
export class ProvisionModule {}
