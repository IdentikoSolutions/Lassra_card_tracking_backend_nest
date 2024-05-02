import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Retrival } from './retrival.entity';

export class CardRetrival {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  lassraId: string;
  @Column()
  status: number;
  @ManyToOne(() => Retrival)
  retrival: Retrival;
}
