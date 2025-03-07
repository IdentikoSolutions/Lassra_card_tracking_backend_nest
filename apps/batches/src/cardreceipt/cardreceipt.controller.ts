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
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateCardReceiptDto } from '../dto';
@ApiTags('card receipt')
@Controller('cardreceipt')
export class CardReceiptController {
  constructor(private readonly cardReceiptService: CardReceiptService) {}

  @Post()
  @ApiOperation({ summary: 'Create card receipt' })
  @ApiBody({ type: CreateCardReceiptDto })
  async create(@Body() body: { lassraId: string; receiptId: number }) {
    try {
      const { lassraId, receiptId } = body;
      return await this.cardReceiptService.create(lassraId, receiptId);
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  @ApiOperation({ summary: 'Fetch card receipts' })
  async findAll(@Query('receipt_id') receipt_id: number) {
    return await this.cardReceiptService.findAll(receipt_id);
  }
}
