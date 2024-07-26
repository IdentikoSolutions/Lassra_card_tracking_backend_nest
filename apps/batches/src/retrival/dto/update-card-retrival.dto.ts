// import { PartialType } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

import { CreateCardRetrivalDto } from './create-card-retrival.dto';

export class UpdateCardRetrivalDto extends PartialType(CreateCardRetrivalDto) {}
