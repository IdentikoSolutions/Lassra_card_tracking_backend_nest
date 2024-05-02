import { PartialType } from '@nestjs/mapped-types';
import { CreateCardDispatchDto } from './create-card-dispatch.dto';

export class UpdateCardDispatchDto extends PartialType(CreateCardDispatchDto) {}
