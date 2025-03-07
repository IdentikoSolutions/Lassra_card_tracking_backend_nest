import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SessionToken {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userId: number;
  @Column()
  token: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dateTime: Date;
  @Column()
  expiredAt: Date;
}
