import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateRetrivalDto } from './create-retrival.dto';
import { Type } from 'class-transformer';

export class CreateCardRetrivalDto {
  @IsString()
  @IsNotEmpty()
  lassraId: string;
  @IsNumber()
  @IsNotEmpty()
  status: number;
  @Type(() => CreateRetrivalDto)
  retrival: CreateRetrivalDto;
}
