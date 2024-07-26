import { IsNumber, IsString } from 'class-validator';
import { CardLocation } from '../../dispatch/entities/location.entity';
import { Type } from 'class-transformer';

export class CreateDeliveryDto {
  @IsString()
  lassraId: string;
  @IsString()
  created_by: string;
  @IsNumber()
  status?: number; // 0: default, 1: out for delivery, 2: delivered, 3: not delivered

  @IsString()
  delivery_company: string; //should be string
  @IsString()
  assigned_to: string;
  @IsString()
  given_out_to: string;

  @Type(() => CardLocation)
  cardLocation?: CardLocation;
}
