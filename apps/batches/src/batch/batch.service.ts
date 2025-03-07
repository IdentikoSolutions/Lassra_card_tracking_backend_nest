import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BatchRepository } from '../repository';
import { DataSource } from 'typeorm';
import { Batch } from '../entities';
import { CreateBatchDto } from '../dto';
import { ids } from 'webpack';

@Injectable()
export class BatchService {
  constructor(
    @InjectRepository(Batch)
    private readonly batchRepository: BatchRepository,
    private dataSource: DataSource,
  ) {}
  //(1) create a batch receipt for a batch.
  // one batch can have multiple receipt
  async createBatch(createBatchDto: CreateBatchDto) {
    try {
      const newBatch = this.batchRepository.create(createBatchDto);
      const newBatchItem = await this.batchRepository.save(newBatch);
      return newBatchItem;
    } catch (e) {
      throw new Error(e + ' from Batch');
    } finally {
      // await queryRunner.release();
    }
  }
  async search(
    batchNo: string,
    jobNo: string,
    lassraId: string,
    page: number,
    pageSize: number,
  ) {
    try {
      const queryBuilder = this.batchRepository.createQueryBuilder('batch');

      if (batchNo) {
        queryBuilder.where('batch.batchNo = :batchNo', { batchNo });
      }
      if (jobNo) {
        queryBuilder.orWhere('batch.bankJobNo = :jobNo', { jobNo });
      }
      if (lassraId) {
        queryBuilder.orWhere('batch.cards.lassraId = :lassraId', { lassraId });
      }

      const result = await queryBuilder.getOne();
      if (result) {
        return result;
      } else {
        console.log('check external record');
        return 
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  // @(2) get All receipt in a ?????
  async findAll() {
    try {
      return await this.batchRepository.find({});
    } catch (err) {
      throw new HttpException(err, HttpStatus.NOT_FOUND);
    }
  }
  // (3) Get a single batch by batchNo
  async findOne(id: string) {
    const batches = await this.batchRepository.find({
      where: { batchNo: id },
    });
    if (batches.length) {
      return batches[0];
    }
  }

  async remove(_id: string) {
    const idtoDelete = Number(_id);
    const batch = await this.batchRepository.findOneBy({ id: idtoDelete });
    if (!batch) {
      throw new NotFoundException(`Batch with ID ${_id} not found`);
    } else {
      await this.batchRepository.remove(batch);
      return 'Deleted successfully';
    }
  }
}
