import { Column, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Card } from '../../entities';

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
  previousLocations: string; //0 is initial,1 is out for dispatch,2 is dispatched
  @Column()
  lassraId?: string;

//   @OneToOne(() => Card)
//   card: Card;
}
