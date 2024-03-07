import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Card } from './card.entity';
import { Receipt } from './receipt.entity';

@Entity()
export class CardReceipt {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  lassraId: string;
  @OneToOne(() => Card)
  card: Card;
  @ManyToOne(() => Receipt, (receipt) => receipt.cardReceipt)
  // @Column()
  receipt: Receipt;
}
