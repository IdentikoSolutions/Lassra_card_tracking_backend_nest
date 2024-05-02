import { PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CardRetrival } from './cardRetrival.entity';

export class Retrival {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  collectionCenter: string;
  @Column({ default: 0 })
  retrivalStatus: number; //0 is initial,1 is out for dispatch,2 is dispatched
  @Column()
  createdBy?: string;
  //
  @Column({ nullable: true })
  createdAt?: Date = new Date();
  @Column({ nullable: true })
  //
  retrivedAt: Date;
  @Column({ nullable: true })
  //
  acknowledgedAt: Date;
  @Column({ nullable: true })
  acknowledgedBy: string;
  @Column({})
  retrivedBy: string;

  @OneToMany(() => CardRetrival, (cardRetrival) => cardRetrival.retrival, {
    cascade: true,
  })
  cardRetrival: CardRetrival[];
}
