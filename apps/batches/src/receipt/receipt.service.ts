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
  async createReceipt(createReceiptDto: CreateReceiptDto) {
    // console.log(createReceiptDto, 'createReceipt');
    try {
      const queryBuilder = await this.dataSource.manager.transaction(
        async (transactionManager) => {
          const newReceipt = this.receiptRepository.create(createReceiptDto);

          await transactionManager.save(newReceipt);
          for (const card of createReceiptDto.cardReceipt) {
            const cardtoUpdate = await this.cardRepository.findOne({
              where: { lassraId: card.lassraId },
            });
            if (cardtoUpdate) {
              (await cardtoUpdate).status = 1;
              await transactionManager.save(cardtoUpdate);
            }
          }
          return newReceipt;
        },
      );
      return 'Receipt created successfully';
    } catch (e) {
      throw new Error(e.message);
    }

    // try {
    //   const newReceipt = this.receiptRepository.create(createReceiptDto);
    //   return await this.receiptRepository.save(newReceipt);
    // } catch (err) {
    //   throw new Error(err);
    // }
    // return 'This action adds a new card';
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
        relations: ['batch'],
      });
      return receipts[0];
    } catch (e) {
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
