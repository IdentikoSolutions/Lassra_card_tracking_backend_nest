import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { CreateCardDispatchDto } from './create-card-dispatch.dto';

export class CreateDispatchDto {
  @IsString()
  @IsNotEmpty()
  destination: string;
  @IsNumber()
  dispatchStatus: number; //0 is initiated,1 =created,2= out for dispatch,3 is dispatched, 4= cancelled
  @IsString()
  createdBy?: string;
  @IsDate()
  @Type(() => Date)
  createdAt?: Date;
  @IsDate()
  @Type(() => Date)
  dispatchedAt: Date;
  @IsDate()
  @Type(() => Date)
  acknowledgedAt: Date;
  @IsString()
  acknowledgedBy: string;
  @IsString()
  // @IsNotEmpty()
  dispatcher?: string;
  @IsNotEmpty()
  @Type(() => CreateCardDispatchDto)
  cardDispatch: CreateCardDispatchDto[];
}
