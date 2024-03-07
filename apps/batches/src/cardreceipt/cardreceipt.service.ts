import { Injectable } from '@nestjs/common';
import { CreateCardReceiptDto } from '../dto/create-cardreceipt.dto';
import { UpdateCardReceiptDto } from '../dto/update-cardreceipt.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CardReceipt } from '../entities';
import { CardReceiptRepository } from '../repository';

@Injectable()
export class CardReceiptService {
  constructor(
    @InjectRepository(CardReceipt)
    private readonly cardReceiptRepository: CardReceiptRepository,
  ) {}
  create(createCardReceiptDto: CreateCardReceiptDto) {
    return 'This action adds a new cardreceipt';
  }

  async findAll(receipt_id: number) {
    if (!receipt_id) {
      return await this.cardReceiptRepository.find({});
    }
    const cards = await this.cardReceiptRepository
      .createQueryBuilder('cardReceipt')
      .where('cardReceipt.receiptId =:receipt_id', { receipt_id })
      .getManyAndCount();
    return cards;
    // return await this.cardReceiptRepository.find({
    //   where: {
    //     receiptId: receipt_id,
    //   },
    // });
  }

  findOne(id: number) {
    return `This action returns a #${id} cardreceipt`;
  }

  update(id: number, updateCardReceiptDto: UpdateCardReceiptDto) {
    return `This action updates a #${id} cardreceipt`;
  }

  remove(id: number) {
    return `This action removes a #${id} cardreceipt`;
  }
}
