import { PartialType } from '@nestjs/swagger';
import { CreateCardDispatchDto } from './create-card-dispatch.dto';

export class UpdateCardDispatchDto extends PartialType(CreateCardDispatchDto) {}
