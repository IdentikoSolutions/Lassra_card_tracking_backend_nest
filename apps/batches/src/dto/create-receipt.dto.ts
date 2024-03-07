import { Type } from 'class-transformer';
import {
  IsDate,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { CreateBatchDto } from './create-batch.dto';
import { ApiProperty } from '@nestjs/swagger';
import { CreateCardReceiptDto } from './create-cardreceipt.dto';
export class CreateReceiptDto {
  @IsNumber()
  @Type(() => Number)
  @ApiProperty({
    example: 1,
    required: true,
  })
  receivedStatus?: number;

  @IsString()
  @ApiProperty({
    example: 'Jome',
    required: true,
  })
  receivedBy: string;

  @IsDate()
  @Type(() => Date)
  @ApiProperty({
    example: Date.now(),
    required: true,
  })
  receivedAt: Date;

  @IsString()
  @IsNotEmpty()
  @Type(() => String)
  @ApiProperty({
    example: '32',
    required: true,
  })
  batchNo: string;

  @Type(() => CreateBatchDto)
  batch?: CreateBatchDto;
  @IsDefined()
  @Type(() => CreateCardReceiptDto)
  cardReceipt: CreateCardReceiptDto[];
}
