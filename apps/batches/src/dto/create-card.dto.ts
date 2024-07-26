import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateCardDto {
  @IsString()
  // @IsNotEmpty()
  @ApiProperty({
    example: '26',
    required: true,
  })
  batchNo: string;

  @IsString()
  // @IsNotEmpty()
  @ApiProperty({
    example: 'Isolo',
    required: true,
  })
  contact_LGA: string;

  @IsString()
  // @IsNotEmpty()
  @ApiProperty({
    example: 'NGN',
    required: true,
  })
  country_code: string;

  @IsString()
  // @IsNotEmpty()
  @ApiProperty({
    example: '19',
    required: true,
  })
  current_house_number: string;
  @IsString()
  // @IsNotEmpty()
  @ApiProperty({
    example: 'Oyemomi',
    required: true,
  })
  current_street: string;
  @IsString()
  // @IsNotEmpty()
  @ApiProperty({
    example: 'Ogba',
    required: true,
  })
  current_town: string;

  @IsString()
  // @IsNotEmpty()
  @ApiProperty({
    example: '26',
    required: true,
  })
  @Type(() => Date)
  date_of_birth: Date;

  @IsBoolean()
  // @IsNotEmpty()
  @ApiProperty({
    example: false,
    required: true,
  })
  duplicate_PAN: boolean;

  @IsEmail()
  // @IsNotEmpty()
  @ApiProperty({
    example: 'lassra@identiko.dev',
    required: true,
  })
  email_address: string;

  @IsString()
  // @IsNotEmpty()
  @ApiProperty({
    example: 'John',
    required: true,
  })
  first_name: string;

  @IsString()
  // @IsNotEmpty()
  @ApiProperty({
    example: '26',
    required: true,
  })
  @Type(() => String)
  flat_number: string;

  @IsString()
  // @IsNotEmpty()
  @ApiProperty({
    example: 'LAEXAMPLE2',
    required: true,
  })
  @Type(() => String)
  lassraId: string;

  @IsString()
  // @IsNotEmpty()
  @ApiProperty({
    example: 'Oluwa',
    required: true,
  })
  @Type(() => String)
  middle_name: string;

  @IsString()
  // @IsNotEmpty()
  @ApiProperty({
    example: '+2345679020',
    required: true,
  })
  @Type(() => String)
  primary_phone_no: string;

  @IsString()
  // @IsNotEmpty()
  @ApiProperty({
    example: Date.now(),
    required: true,
  })
  @Type(() => Date)
  registration_date: Date;

  @IsString()
  // @IsNotEmpty()
  @ApiProperty({
    example: 'Lagos',
    required: true,
  })
  @Type(() => String)
  state_of_residence: string;

  @IsNumber()
  // @IsNotEmpty()
  @ApiProperty({
    example: 0,
    required: true,
  })
  @Type(() => Number)
  status: number; // for now 0 is defaultstatus, 1 is produced and 2 is provisioned,3 is for missing, 4 is for damaged
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Doe',
    required: true,
  })
  @Type(() => String)
  surname: string;
  // @IsNumber()
  // cardStatus: number
}
