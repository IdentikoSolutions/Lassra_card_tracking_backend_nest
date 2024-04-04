import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Card } from '../../entities';
@Entity()
export class CardLocation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  currentLocation: string;
  @Column()
  collectionCenter: string;
  @Column()
  requestedDelivery: boolean;
  @Column()
  previousLocations: string;
  @Column({ unique: true })
  lassraId: string;
  @OneToOne(() => Card)
  @JoinColumn()
  card: Card;
}
