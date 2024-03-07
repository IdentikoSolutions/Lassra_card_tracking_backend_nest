import { Repository } from 'typeorm';
import { Batch } from '../entities/batch.entity';
import { Injectable } from '@nestjs/common';
@Injectable()
export class BatchRepository extends Repository<Batch> {}
