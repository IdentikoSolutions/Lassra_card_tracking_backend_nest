import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Receipt } from '../entities/receipt.entity';
@Injectable()
export class ReceiptRepository extends Repository<Receipt> {}
