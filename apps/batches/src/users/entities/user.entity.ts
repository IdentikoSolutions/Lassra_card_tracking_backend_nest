import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Unit } from '../../enum/unit.enum';
import { Role } from '../../enum/role.enum';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  @ApiProperty({
    description: 'user registered email',
    type: String,
  })
  email: string;
  @Column()
  @ApiProperty({
    description: 'user password',
    type: String,
  })
  password: string;
  @Column({ default: Unit.CardDistribution })
  unit: string;
  @Column({ default: Role.Staff })
  role: string;
  @Column({ default: true })
  active: boolean;
}
