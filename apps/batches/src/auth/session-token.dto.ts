import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SessionTokenDto {
  @IsNumber()
  userId: number;
  @IsString()
  @IsNotEmpty()
  token: string;
  @IsDate()
  expiredAt: Date;
}
