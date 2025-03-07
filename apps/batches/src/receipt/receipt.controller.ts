import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { ReceiptService } from './receipt.service';
import { BatchService } from '../batch/batch.service';
import { CreateBatchDto } from '../dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('receipts')
@Controller('receipt')
export class ReceiptController {
  constructor(
    private readonly receiptService: ReceiptService,
    private readonly batchService: BatchService,
  ) {}

  @Post()
  async createReceipt(@Body() createReceiptDto: any) {
    try {
      const currentBatch = await this.batchService.findOne(
        createReceiptDto.batchNo,
      );
      createReceiptDto.batch = currentBatch as unknown as Omit<
        CreateBatchDto,
        'id'
      >;
      return await this.receiptService.createReceipt(createReceiptDto);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }
  @Patch('complete/:id')
  async completeRequest(@Param('id') id: number) {
    try {
      return await this.receiptService.completedReceipt(id);
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
}
