import { PartialType } from '@nestjs/swagger';
import { CreateCardProvisionDto } from './create-cardprovision.dto';

export class UpdateCardprovisionDto extends PartialType(
  CreateCardProvisionDto,
) {}
