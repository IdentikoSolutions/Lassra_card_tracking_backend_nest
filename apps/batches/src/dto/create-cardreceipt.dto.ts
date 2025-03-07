import { IsDefined, IsNotEmpty, IsString } from 'class-validator';
import { CreateCardDto } from './create-card.dto';
import { CreateReceiptDto } from './create-receipt.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateCardReceiptDto {
  @IsString()
  @IsNotEmpty()
  lassraId: string;
  @IsDefined()
  @Type(() => CreateCardDto)
  card: CreateCardDto;

  @IsDefined()
  @Type(() => CreateReceiptDto)
  receipt: CreateReceiptDto;
}
