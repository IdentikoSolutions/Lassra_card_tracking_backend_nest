import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Dispatch } from './dispatch.entity';

export class CardDispatch {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  lassraId: string;
  @Column()
  destination: string;

  @Column()
  dispatchStatus: string; //0 is initial,1 is out for dispatch,2 is dispatched

  @ManyToOne(() => Dispatch)
  dispatch: Dispatch;
}
