import { PartialType } from '@nestjs/swagger';
import { CreateCardReceiptDto } from './create-cardreceipt.dto';

export class UpdateCardReceiptDto extends PartialType(CreateCardReceiptDto) {}
