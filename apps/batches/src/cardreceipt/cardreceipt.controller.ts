import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  // Param,
  // Delete,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CardReceiptService } from './cardreceipt.service';
// import { CreateCardReceiptDto } from '../dto/create-cardreceipt.dto';
// import { UpdateCardReceiptDto } from '../dto/update-cardreceipt.dto';

@Controller('cardreceipt')
export class CardReceiptController {
  constructor(private readonly cardReceiptService: CardReceiptService) {}

  @Post()
  async create(@Body() body: { lassraId: string; receiptId: number }) {
    try {
      const { lassraId, receiptId } = body;
      return await this.cardReceiptService.create(lassraId, receiptId);
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async findAll(@Query('receipt_id') receipt_id: number) {
    return await this.cardReceiptService.findAll(receipt_id);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.cardReceiptService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateCardReceiptDto: UpdateCardReceiptDto,
  // ) {
  //   return this.cardReceiptService.update(+id, updateCardReceiptDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.cardReceiptService.remove(+id);
  // }
}
