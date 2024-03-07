import { Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateCardDto } from './create-card.dto';

export class CreateBatchDto {
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  // @ApiProperty({
  //   example: 5,
  //   required: true,
  // })
  count: number;

  // @IsNumber()
  // @IsNotEmpty()
  // @Type(() => Number)
  // @ApiProperty({
  //   example: 30,
  //   required: true,
  // })
  // not_produced: number;

  // @IsNumber()
  // @IsNotEmpty()
  // @Type(() => Number)
  // @ApiProperty({
  //   example: 2470,
  //   required: true,
  // })
  // produced: number;

  @IsString()
  @IsNotEmpty()
  // @ApiProperty({
  //   example: '32',
  //   required: true,
  // })
  batchNo: string;

  @IsString()
  // @IsNotEmpty()
  // @ApiProperty({
  //   example: 'Shola',
  //   required: true,
  // })
  name: string;

  @IsString()
  // @IsNotEmpty()
  // @ApiProperty({
  //   example: 'Very usique descriptions of batch',
  //   required: true,
  // })
  description: string;

  @IsNumber()
  @IsNotEmpty()
  // @ApiProperty({
  //   example: 2500,
  //   required: true,
  // })
  noRecords: number;

  @IsString()
  // @IsNotEmpty()
  // @ApiProperty({
  //   example: '5hskfkfher',
  //   required: true,
  // })
  perso: string;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  // @ApiProperty({
  //   example: Date.now(),
  //   required: true,
  // })
  bankDataCreatedOn: Date;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  // @ApiProperty({
  //   example: Date.now(),
  //   required: true,
  // })
  idDataCreatedOn: Date;

  @IsString()
  // @IsNotEmpty()
  // @ApiProperty({
  //   example: 'You need to note down somthing',
  //   required: true,
  // })
  notes: string;

  @IsNumber()
  // @IsNotEmpty()
  // @ApiProperty({
  //   example: 0,
  //   required: true,
  // })
  cancelledStatus: number;

  @IsString()
  @IsNotEmpty()
  // @Type(() => Number)
  @Type(() => String)
  // @ApiProperty({
  //   example: 'Gflsjji3',
  //   required: true,
  // })
  bankJobNo: string;
  //numerical string

  @IsString()
  // @IsNotEmpty()
  // @ApiProperty({
  //   example: 'Obaelegusi',
  //   required: true,
  // })
  bankJobFilename: string;

  @IsNumber()
  @IsNotEmpty()
  // @ApiProperty({
  //   example: 5,
  //   required: true,
  // })
  expMth: number;

  @IsNumber()
  // @IsNotEmpty()
  // @ApiProperty({
  //   example: 7,
  //   required: true,
  // })
  expYear: number;

  @IsString()
  // @IsNotEmpty()
  @Type(() => String)
  // @ApiProperty({
  //   example: 103,
  //   required: true,
  // })
  enrolLG: string;

  @IsDefined()
  @IsArray()
  // @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateCardDto)
  // @ApiProperty({
  //   type: () => CreateCardDto,
  //   required: true,
  // })
  cards: [card?: CreateCardDto];
}
