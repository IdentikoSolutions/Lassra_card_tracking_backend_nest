import { PartialType } from '@nestjs/mapped-types';
import { CreateCardReceiptDto } from './create-cardreceipt.dto';

export class UpdateCardReceiptDto extends PartialType(CreateCardReceiptDto) {}
