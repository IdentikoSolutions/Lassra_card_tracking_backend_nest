import { Module } from '@nestjs/common';
import { CardprovisionService } from './cardprovision.service';
import { CardprovisionController } from './cardprovision.controller';
import { DatabaseModule } from '@app/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receipt, Batch, Card } from '../entities';
import { Provision } from '../provision/entities/provision.entity';
import { CardProvision } from './entities/cardprovision.entity';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([Receipt, Batch, Provision, CardProvision, Card]),
    // forwardRef(() => BatchModule),
  ],
  controllers: [CardprovisionController],
  providers: [CardprovisionService],
})
export class CardprovisionModule {}
