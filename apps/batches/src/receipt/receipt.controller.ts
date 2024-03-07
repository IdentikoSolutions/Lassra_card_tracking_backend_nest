import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  Query,
  HttpCode,
} from '@nestjs/common';
import { ReceiptService } from './receipt.service';
import { BatchService } from '../batch/batch.service';
import { CreateBatchDto, CreateReceiptDto, UpdateReceiptDto } from '../dto';
import { Batch } from '../entities';

@Controller('receipt')
export class ReceiptController {
  constructor(
    private readonly receiptService: ReceiptService,
    private readonly batchService: BatchService,
  ) {}

  @Post()
  async createReceipt(@Body() createReceiptDto: CreateReceiptDto) {
    try {
      const currentBatch = await this.batchService.findOne(
        createReceiptDto.batchNo,
      );
      // console.log(currentBatch, 'current batch');
      createReceiptDto.batch = currentBatch as unknown as Omit<
        CreateBatchDto,
        'id'
      >;
      return await this.receiptService.createReceipt(createReceiptDto);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  findAll(@Query('batchNo') batchNo: string) {
    return this.receiptService.findAll(batchNo);
  }
  @Get('search')
  search(
    @Query('batchNo') batchNo?: string | undefined,
    @Query('jobNo') jobNo?: string | undefined,
    @Query('lassraId') lassraId?: string | undefined,
    @Query('page') page: number | undefined = 1,
    @Query('pageSize') pageSize: number | undefined = 10,
  ) {
    if (!batchNo && !jobNo && !lassraId)
      throw new HttpException(
        'Provide bathcNo, JobNo or lassraId',
        HttpStatus.BAD_REQUEST,
      );
    return this.receiptService.search(batchNo, jobNo, lassraId, page, pageSize);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.receiptService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReceiptDto: UpdateReceiptDto) {
    return this.receiptService.update(+id, updateReceiptDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.receiptService.remove(+id);
  }
}
