import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Batch, Receipt } from '../../entities';
import { CardProvision } from '../../cardprovision/entities/cardprovision.entity';

@Entity('provision')
export class Provision {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  batchNo: string;

  @Column()
  provisionedBy: string;
  @Column()
  receivedBy: string;
  @Column({ default: 0 })
  provisionStatus: number; // 0=initiated,1 created
  @OneToMany(() => CardProvision, (cardProvision) => cardProvision.provision, {
    cascade: true,
  })
  cardProvision: CardProvision[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  provisionedAt: Date;

  @ManyToOne(() => Receipt)
  batch: Batch;

  @CreateDateColumn()
  createdAt: Date; // Automatically captures the creation date of the report

  @UpdateDateColumn()
  updatedAt: Date; // Automatically updates when the report is modified
}
