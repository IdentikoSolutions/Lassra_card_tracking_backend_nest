import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { Batch } from './batch.entity';
import { CardReceipt } from './cardreceipt.entity';
// import { CardReceipt } from '../../cardreceipt/entities/cardreceipt.entity';

@Entity('cards')
export class Card extends BaseEntity {
  @PrimaryGeneratedColumn({})
  id: number;

  @Column({})
  batchNo: string;

  @Column()
  contact_LGA: string;

  @Column()
  country_code: string;

  @Column()
  current_house_number: string;
  @Column()
  current_street: string;
  @Column()
  current_town: string;

  @Column()
  date_of_birth: Date;

  @Column({ nullable: true })
  duplicate_PAN: boolean;

  @Column({ nullable: true })
  email_address: string;

  @Column()
  first_name: string;

  @Column({ nullable: true })
  flat_number: string;

  @Column({ unique: true })
  lassraId: string;

  @Column()
  middle_name: string;

  @Column({ nullable: true })
  primary_phone_no: string;

  @Column()
  registration_date: Date;

  @Column()
  state_of_residence: string;

  @Column({  default: 0 })
  status: number; // for now 0 is defaultstatus, 1 is produced and 2 is provisioned

  @Column()
  surname: string;
  // @OneToOne('CardRecceipt')
  // cardreceipt: Relation<CardReceipt>;
  @ManyToOne(() => Batch, (batch) => batch.cards, { eager: true })
  batch: Batch;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
