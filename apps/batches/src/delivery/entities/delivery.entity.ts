import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CardLocation } from '../../dispatch/entities/location.entity';
@Entity()
export class Delivery {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lassraId: string;

  @Column()
  created_by: string;

  @Column({ default: 0 })
  status: number; // 0: order created, 1: out for delivery, 2: delivered, 3: not delivered

  @Column()
  delivery_company: string; //should be string
  @Column({ nullable: true })
  assigned_to: string;
  @Column({ nullable: true })
  given_out_to: string;

  @Column({ nullable: true })
  delivered_at: Date;

  @Column({ nullable: true })
  not_delivered_reason: boolean;

  @CreateDateColumn()
  created_at: string;

  // @Column({ nullable: true })
  @UpdateDateColumn()
  updated_at: string;
  @OneToOne(() => CardLocation, (cardLocation) => cardLocation)
  @JoinColumn({ name: 'lassraId', referencedColumnName: 'lassraId' })
  cardLocation: CardLocation;
}
