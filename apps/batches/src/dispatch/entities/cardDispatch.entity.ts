import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Dispatch } from './dispatch.entity';
@Entity()
export class CardDispatch {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  lassraId: string;
  @Column({ nullable: true })
  destination: string;

  @Column({ nullable: true })
  dispatchStatus: number; //0 is initial,1 is out for dispatch,2 is dispatched

  @ManyToOne(() => Dispatch)
  // @Column({ foreignKey: true, name: "dispatchId" })
  dispatch: Dispatch;
}
