import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Batch } from './batch.entity';
import { CardReceipt } from './cardreceipt.entity';

@Entity('receipts')
export class Receipt {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  batchNo: string;

  @Column({ default: 0 })
  receivedStatus?: number; // 0=initiated,1 created

  @Column()
  receivedBy?: string;

  @OneToMany(() => CardReceipt, (cardReceipt) => cardReceipt.receipt, {
    cascade: true,
  })
  cardReceipt: CardReceipt[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  receivedAt: Date;

  @ManyToOne(() => Batch)
  batch: Batch;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
