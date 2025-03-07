import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { Role } from '../../enum/role.enum';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'user email',
    type: String,
  })
  email: string;
  @IsString()
  @ApiProperty({
    description: 'user email',
    type: String,
  })
  password: string;
  @IsString()
  @ApiProperty({
    description: 'user email',
    type: String,
  })
  unit: string;
  @IsEnum(Role)
  @ApiProperty({
    description: 'user email',
    type: String,
  })
  role: Role;
  active: boolean;
}
