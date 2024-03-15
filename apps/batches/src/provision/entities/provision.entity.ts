import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Batch } from '../../entities';
import { CardProvision } from '../../cardprovision/entities/cardprovision.entity';

@Entity('provision')
export class Provision {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  batchNo: string;

  @Column()
  provisionedBy?: string;

  @OneToMany(() => CardProvision, (cardProvision) => cardProvision.provision, {
    cascade: true,
  })
  cardProvision: CardProvision[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  provisionedAt: Date;

  @ManyToOne(() => Batch)
  batch: Batch;
}
