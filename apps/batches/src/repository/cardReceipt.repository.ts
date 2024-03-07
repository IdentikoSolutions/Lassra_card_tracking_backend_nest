import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CardReceipt } from '../entities/cardreceipt.entity';
@Injectable()
export class CardReceiptRepository extends Repository<CardReceipt> {}
