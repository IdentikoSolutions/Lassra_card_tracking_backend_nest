import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { CreateCardDispatchDto } from './create-card-dispatch.dto';

export class CreateDispatchDto {
  @IsString()
  @IsNotEmpty()
  destination: string;
  @IsString()
  dispatchStatus: string; //0 is initial,1 is out for dispatch,2 is dispatched
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
  @IsNotEmpty()
  dispatcher?: string;

  @IsNotEmpty()
  @Type(() => CreateCardDispatchDto)
  cardDispatch: CreateCardDispatchDto[];
}
