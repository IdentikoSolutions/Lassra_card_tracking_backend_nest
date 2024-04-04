import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { CreateDispatchDto } from './create-dispatch.dto';
import { Type } from 'class-transformer';

export class CreateCardDispatchDto {
  @IsString()
  @IsNotEmpty()
  lassraId: string;
  // @IsNotEmpty()
  @IsString()
  destination: string;
  @IsNumber()
  @IsNotEmpty()
  dispatchStatus: number; //0 is initial,1 is out for dispatch,2 is dispatched
  @IsString()
  @IsNotEmpty()
  @Type(() => CreateDispatchDto)
  dispatch: CreateDispatchDto;
}
