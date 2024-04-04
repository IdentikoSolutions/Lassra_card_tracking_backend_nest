import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CardDispatch } from './cardDispatch.entity';
@Entity()
export class Dispatch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  destination: string;
  @Column({ default: 0 })
  dispatchStatus: number; //0 is initial,1 is out for dispatch,2 is dispatched
  @Column()
  createdBy?: string;
  //
  @Column({ nullable: true })
  createdAt?: Date = new Date();
  @Column({ nullable: true })
  //
  dispatchedAt: Date;
  @Column({ nullable: true })
  //
  acknowledgedAt: Date;
  @Column({ nullable: true })
  acknowledgedBy: string;
  @Column({})
  dispatcher: string;

  @OneToMany(() => CardDispatch, (cardDispatch) => cardDispatch.dispatch, {
    cascade: true,
  })
  cardDispatch: CardDispatch[];
}
