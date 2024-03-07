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
    console.log(batchNo, jobNo, lassraId, page, pageSize);
    const queryBuilder = this.batchRepository.createQueryBuilder('batch');
    if (!batchNo && !jobNo && !lassraId)
      throw new HttpException(
        'supply your query params',
        HttpStatus.BAD_REQUEST,
      );
    if (batchNo) {
      queryBuilder.where('batch.batchNo = :batchNo', { batchNo });
    }
    if (jobNo) {
      queryBuilder.orWhere('batch.bankJobNo = :jobNo', { jobNo });
    }
    if (lassraId) {
      queryBuilder.orWhere('batch.cards.lassraId = :lassraId', { lassraId });
    }

    // Execute the query and return the results
    return await queryBuilder
      // .leftJoinAndSelect('batch.cards', 'cards')
      .getOne();

    // const receipts = await this.batchRepository
    //   .createQueryBuilder('batch')
    //   .leftJoinAndSelect('batch.cards', 'card')
    //   .where('batch.batchNo = :batchNo', { batchNo })
    //   .orWhere('batch.bankJobNo = :jobNo', { jobNo })
    //   .orWhere('cards.lassraId = :lassraId', {
    //     lassraId,
    //   })
    //   // .select([
    //   //   'receipt.receivedBy',
    //   //   'receipt.receivedAt',
    //   //   'receipt.batchNo',
    //   //   'receipt.id',
    //   //   'receipt.receivedStatus',
    //   //   'receipt.createdAt',
    //   // ])
    //   .orderBy('batch.id', 'ASC') // Order by id in ascending order

    //   .skip((page - 1) * pageSize)
    //   .take(pageSize)
    //   .getManyAndCount();

    // return receipts;
  }

  // @(2) get All receipt in a ?????
  async findAll() {
    try {
      // return this.batchRepository
      //   .createQueryBuilder('batch')
      //   .leftJoinAndSelect('batch.cards', 'card')
      //   .getMany();
      return await this.batchRepository.find({});
    } catch (err) {
      throw new HttpException(err, HttpStatus.NOT_FOUND);
    }
  }
  // async findNotReceivedCards(batchNo){
  //   await this.batchRepository.find({batchNo,{

  //   }})
  // }
  // (3) Get a single batch by batchNo
  async findOne(id: string) {
    // console.log('EXECUTING',id);
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
      // Delete the batch entity and its related entities
      await this.batchRepository.remove(batch);
      return 'Deleted successfully';
    }
  }
}
