import { Type } from 'class-transformer';
import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateCardRetrivalDto } from './create-card-retrival.dto';

export class CreateRetrivalDto {
  @IsString()
  @IsNotEmpty()
  collectionCenter: string;
  @IsNumber()
  @IsNotEmpty()
  retrivalStatus: number; //0 is initial,1 is out for dispatch,2 is dispatched
  @IsString()
  createdBy: string;
  @IsDateString()
  createdAt?: Date = new Date();
  @IsString()
  retrivedBy?: string;
  @IsDateString()
  retrivedAt?: Date;
  @IsString()
  acknowledgedBy?: string;
  @IsNotEmpty()
  @Type(() => CreateCardRetrivalDto)
  cardRetrival: CreateCardRetrivalDto[];
}
