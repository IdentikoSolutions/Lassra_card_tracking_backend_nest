import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Retrival } from './retrival.entity';
@Entity()
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
