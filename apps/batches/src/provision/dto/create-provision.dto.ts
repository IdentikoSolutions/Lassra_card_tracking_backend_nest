import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNumber,
  IsString,
  IsDate,
  IsNotEmpty,
  IsDefined,
} from 'class-validator';
import { CreateBatchDto } from '../../dto';
import { CreateCardProvisionDto } from '../../cardprovision/dto/create-cardprovision.dto';

export class CreateProvisionDto {
  @IsString()
  @ApiProperty({
    example: 'Jome',
    required: true,
  })
  provisionedBy: string;
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
  provisionedAt: Date;

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


  // @IsDefined()
  // @Type(() => CreateCardProvisionDto)
  // cardProvision: CreateCardProvisionDto[];
}
