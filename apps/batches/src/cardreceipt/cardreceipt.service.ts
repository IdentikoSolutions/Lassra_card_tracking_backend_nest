import { Injectable } from '@nestjs/common';
import { CreateCardReceiptDto } from '../dto/create-cardreceipt.dto';
// import { UpdateCardReceiptDto } from '../dto/update-cardreceipt.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Card, CardReceipt, Receipt } from '../entities';
import { CardReceiptRepository } from '../repository';
import { ReceiptRepository } from '../repository/receipt.repository';
import { CardRepository } from '../repository/card.repository';

@Injectable()
export class CardReceiptService {
  constructor(
    @InjectRepository(CardReceipt)
    private readonly cardReceiptRepository: CardReceiptRepository,
    @InjectRepository(Receipt)
    private readonly receiptRepository: ReceiptRepository,
    @InjectRepository(Card)
    private readonly cardRepository: CardRepository,
  ) {}
  //creates new card receipt
  async create(lassraId: string, receiptId: number) {
    try {
      //find receipt
      const receipt = await this.receiptRepository.findOne({
        where: { id: receiptId },
      });
      if (receipt && receipt.receivedStatus === 1) {
        throw new Error('Receipt already completed');
      }
      //find card to update
      const cardtoUpdate = await this.cardRepository.findOne({
        where: { lassraId: lassraId },
      });
      if (cardtoUpdate && cardtoUpdate.batchNo === receipt.batchNo) {
        if (cardtoUpdate.status === 1) {
          throw new Error('Card already added to the receipt');
        }
        cardtoUpdate.status = 1;
        await this.cardRepository.save(cardtoUpdate);
        // await transactionManager.save(cardtoUpdate);
      } else {
        throw new Error('Card not Added');
      }
      const newcardReceipt = await this.cardReceiptRepository.create({
        lassraId,
        receipt,
      });
      await this.cardReceiptRepository.save(newcardReceipt);
      return `Card with lassraId: ${lassraId} added to Receipt: ${receiptId} successfully`;
    } catch (e: any) {
      throw new Error(e.message);
    }
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

  // findOne(id: number) {
  //   return `This action returns a #${id} cardreceipt`;
  // }

  // update(id: number, updateCardReceiptDto: UpdateCardReceiptDto) {
  //   return `This action updates a #${id} cardreceipt`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} cardreceipt`;
  // }
}
