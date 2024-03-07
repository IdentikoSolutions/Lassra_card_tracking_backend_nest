import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Card } from './card.entity';
import { Receipt } from './receipt.entity';

@Entity('batches')
export class Batch {
  @PrimaryGeneratedColumn({})
  id: number;

  @Column({ unique: true })
  batchNo: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  noRecords: number;
  // @Column()
  // not_produced: number;

  @Column({ nullable: true })
  perso: string;

  @Column()
  bankDataCreatedOn: Date;

  @Column()
  idDataCreatedOn: Date;

  @Column({ nullable: true })
  notes: string;

  @Column()
  cancelledStatus: number;

  @Column({ nullable: true })
  bankJobNo: string;

  @Column({ nullable: true })
  bankJobFilename: string;

  @Column()
  expMth: number;

  @Column()
  expYear: number;

  @Column()
  enrolLG: string;

  // @Column({ unique: true })
  // batchId: string;

  @Column({ nullable: true })
  count: number;

  @OneToMany(() => Card, (card) => card.batchNo, { cascade: true })
  cards: Card[];
  // @OneToMany(() => Receipt, (receipt) => receipt.batchNo, {
  //   eager: true,
  // })
  // receipt: Receipt[];
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
