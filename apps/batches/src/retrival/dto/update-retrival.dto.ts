// import { PartialType } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

import { CreateRetrivalDto } from './create-retrival.dto';

export class UpdateRetrivalDto extends PartialType(CreateRetrivalDto) {}
