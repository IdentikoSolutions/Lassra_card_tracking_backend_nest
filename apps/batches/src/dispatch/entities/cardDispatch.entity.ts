import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  Unique,
} from 'typeorm';
import { Dispatch } from './dispatch.entity';
@Entity()
export class CardDispatch {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  lassraId: string;
  @Column()
  destination: string;

  @Column()
  dispatchStatus: number; //0 is initial,1 is out for dispatch,2 is dispatched

  @ManyToOne(() => Dispatch)
  // @Unique(['lassraId', 'dispatchId'])

  // @JoinColumn({ name: 'dispatchId' })
  dispatch: Dispatch;

  // uniqueConstraints: [string, number];
  // @PrimaryColumn("lassraId_dispatchId",['lassraId','dispatchId']);
}
