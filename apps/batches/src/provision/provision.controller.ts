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
} from '@nestjs/common';
import { ProvisionService } from './provision.service';
import { CreateProvisionDto } from './dto/create-provision.dto';
import { UpdateProvisionDto } from './dto/update-provision.dto';
import { BatchService } from '../batch/batch.service';
import { CreateBatchDto } from '../dto';

@Controller('provision')
export class ProvisionController {
  constructor(
    private readonly provisionService: ProvisionService,
    private readonly batchService: BatchService,
  ) {}

  @Post()
  async create(@Body() createProvisionDto: CreateProvisionDto) {
    try {
      const currentBatch = await this.batchService.findOne(
        createProvisionDto.batchNo,
      );
      createProvisionDto.batch = currentBatch as unknown as Omit<
        CreateBatchDto,
        'id'
      >;
      return await this.provisionService.createProvision(createProvisionDto);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  findAll(@Query('batchNo') batchNo: string) {
    return this.provisionService.findAll(batchNo);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.provisionService.findOne(+id);
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
    return this.provisionService.search(
      batchNo,
      jobNo,
      lassraId,
      page,
      pageSize,
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProvisionDto: UpdateProvisionDto,
  ) {
    return this.provisionService.update(+id, updateProvisionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.provisionService.remove(+id);
  }
}
