import { PartialType } from '@nestjs/swagger';
import { CreateRetrivalDto } from './create-retrival.dto';

export class UpdateRetrivalDto extends PartialType(CreateRetrivalDto) {}
