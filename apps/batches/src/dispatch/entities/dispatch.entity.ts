import { Column, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CardDispatch } from './cardDispatch';

export class Dispatch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  destination: string;
  @Column()
  cardsCount: string;
  @Column()
  dispatchStatus: string; //0 is initial,1 is out for dispatch,2 is dispatched
  @Column()
  createdBy?: string;

  @Column()
  createdAt?: Date;
  @Column()
  dispatchedAt: Date;
  @Column()
  acknowlegdedAt: Date;
  @Column()
  dispatcher?: string;

  @ManyToMany(() => CardDispatch, (cardDispatch) => cardDispatch.dispatch, {
    cascade: true,
  })
  cardDispatch: CardDispatch[];
}
