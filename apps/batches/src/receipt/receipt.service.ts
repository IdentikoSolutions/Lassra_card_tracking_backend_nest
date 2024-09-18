import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Card, Receipt } from '../entities';
import { CardRepository, ReceiptRepository } from '../repository';
import { CreateReceiptDto, UpdateReceiptDto } from '../dto';
import { HttpStatusCode } from 'axios';
import { DataSource } from 'typeorm';

@Injectable()
export class ReceiptService {
  constructor(
    @InjectRepository(Receipt)
    private readonly receiptRepository: ReceiptRepository,
    @InjectRepository(Card)
    private readonly cardRepository: CardRepository,
    private readonly dataSource: DataSource,
  ) {}
  // create receipt is now modified to create request without cards . Need to create add cards method to daad cards to a reaquest and a method to complete are request.
  async createReceipt(createReceiptDto: CreateReceiptDto) {
    try {
      const newReceipt = await this.receiptRepository.create(createReceiptDto);
      console.log(newReceipt);
      return await this.receiptRepository.save(newReceipt);
    } catch (e) {
      throw new Error(e.message);
    }
  }
  async completedReceipt(id: number) {
    try {
      const receipt = await this.receiptRepository.findOne({
        where: { id },
      });
      if (!receipt) {
        throw new Error(`Cannot find receipt`);
      }
      if (receipt.receivedStatus === 1) {
        throw new Error('Receipt already completed');
      }
      receipt.receivedStatus = 1;
      return await this.receiptRepository.save(receipt);
    } catch (e) {
      throw new Error(e.message);
    }
  }
  async addCard(batchNo: number, lassraId: string) {
    //check in cardReceipt service
  }
  async findAll(batchNo: string) {
    try {
      if (batchNo) {
        return await this.receiptRepository.find({
          where: { batchNo },
        });
      } else {
        return await this.receiptRepository.find({});
      }
    } catch (e) {
      throw new Error(e);
    }
  }

  async findOne(id: string) {
    try {
      const receipts = await this.receiptRepository.find({
        where: { id: +id },
        relations: ['cardReceipt'],
      });
      console.log(receipts);
      return receipts[0];
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }
  //ind receipt by batchNo and/or jobNo and/or lassraid
  async search(
    batchNo: string,
    jobNo: string,
    lassraId: string,
    page: number,
    pageSize: number,
  ) {
    const receipts = await this.receiptRepository
      .createQueryBuilder('receipt')
      .leftJoinAndSelect('receipt.batch', 'batch')
      .leftJoinAndSelect('receipt.cardReceipt', 'cardReceipt')
      .where('receipt.batchNo = :batchNo', { batchNo })
      .orWhere('batch.bankJobNo LIKE :jobNo', { jobNo: `%${jobNo}%` })
      .orWhere('cardReceipt.lassraId = :lassraId', {
        lassraId,
      })
      .select([
        'receipt.receivedBy',
        'receipt.receivedAt',
        'receipt.batchNo',
        'receipt.id',
        'receipt.receivedStatus',
        'receipt.createdAt',
        'receipt.cardReceipt',
        // 'COUNT(cardReceipt) AS cardCount',
      ])
      .orderBy('receipt.id', 'ASC') // Order by id in ascending order
      .addGroupBy('receipt.id') // Group by receipt id
      .skip((page - 1) * pageSize)
      .take(pageSize)
      .getManyAndCount();

    return receipts;
  }

  update(id: number, updateReceiptDto: UpdateReceiptDto) {
    return `This action updates a #${id} card`;
  }

  remove(id: number) {
    return `This action removes a #${id} card`;
  }
}
