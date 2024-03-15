import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
} from 'typeorm';
import { Card } from '../../entities';
import { Provision } from '../../provision/entities/provision.entity';

@Entity()
export class CardProvision {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  lassraId: string;
  @OneToOne(() => Card)
  card: Card;
  @ManyToOne(() => Provision, (provision) => provision.cardProvision)
  // @Column()
  provision: Provision;
}
