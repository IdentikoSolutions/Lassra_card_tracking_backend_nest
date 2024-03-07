import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Card } from '../entities/card.entity';
@Injectable()
export class CardRepository extends Repository<Card> {}
