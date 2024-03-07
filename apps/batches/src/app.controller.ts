import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateBatchDto } from './dto/create-batch.dto';
import { ApiTags } from '@nestjs/swagger';
import axios from 'axios';
import { createParamDecorator } from '@nestjs/common';
@ApiTags('Batch')
@Controller('batch')
export class AppController {
  constructor(private readonly appService: AppService) {}
}
