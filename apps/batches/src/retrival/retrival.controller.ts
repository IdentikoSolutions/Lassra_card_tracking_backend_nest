import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RetrivalService } from './retrival.service';
import { CreateRetrivalDto } from './dto/create-retrival.dto';
import { UpdateRetrivalDto } from './dto/update-retrival.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('retrival')
@Controller('retrival')
export class RetrivalController {
  constructor(private readonly retrivalService: RetrivalService) {}

  @Post()
  async create(@Body() createRetrivalDto: CreateRetrivalDto) {
    return await this.retrivalService.create(createRetrivalDto);
  }

  @Get()
  findAll() {
    return this.retrivalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.retrivalService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRetrivalDto: any, //UpdateRetrivalDto, this updateRetrival is throwing error so
  ) {
    return this.retrivalService.update(+id, updateRetrivalDto);
  }
}
