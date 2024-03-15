import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsDefined } from 'class-validator';
import { CreateCardDto } from '../../dto';
import { CreateProvisionDto } from '../../provision/dto/create-provision.dto';

export class CreateCardProvisionDto {
  @IsString()
  @IsNotEmpty()
  lassraId: string;

  @IsDefined()
  @Type(() => CreateCardDto)
  card: CreateCardDto;

  @IsDefined()
  @Type(() => CreateProvisionDto)
  provision: CreateProvisionDto;
}
