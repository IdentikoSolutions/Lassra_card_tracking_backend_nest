import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { DispatchService } from './dispatch.service';
import { CreateDispatchDto } from './dto/create-dispatch.dto';
import { UpdateDispatchDto } from './dto/update-dispatch.dto';
import axios from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CardLocation } from './entities/location.entity';
import { Card } from '../entities';

@Controller('dispatch')
export class DispatchController {
  constructor(
    private readonly dispatchService: DispatchService,
    @InjectRepository(CardLocation)
    private readonly cardLocationRepository: Repository<CardLocation>,
    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,
  ) {}

  @Post()
  create(@Body() createDispatchDto: CreateDispatchDto) {
    return this.dispatchService.createDispatch(createDispatchDto);
  }
  @Get('seed')
  async seedcardLocation() {
    console.log('seeding started');
    try {
      const seed = await this.cardLocationRepository.find({});
      if (seed.length) throw new Error('Locations seeded');
      const cards = await this.cardRepository.find({});
      const locationsData = cards.map((card) => ({
        lassraId: card.lassraId,
        currentLocation: 'Head office',
        collectionCenter: card.contact_LGA,
        requestedDelivery: false,
        previousLocations: 'head',
        card,
      }));
      for (const x of locationsData) {
        const newLocData = this.cardLocationRepository.create(x);
        await this.cardLocationRepository.save(newLocData);
        console.log(newLocData);
      }
      return 'seeding successful';
    } catch (e) {
      throw new HttpException('Database already seeded', HttpStatus.FORBIDDEN);
    }
  }
  @Get()
  getCardForDispatch(
    @Query('batchNo') batchNo: number,
    @Query('lassraId') lassraId: string,
    @Query('collectionCenter') collectionCenter: string,
  ) {
    // console.log(batchNo, collectionCenter);
    try {
      return this.dispatchService.getCardforDispatch(
        batchNo,
        lassraId,
        collectionCenter,
      );
    } catch (e) {
      throw new HttpException(e, HttpStatus.BAD_REQUEST);
    }
  }
  @Get('orders')
  async findAll() {
    console.log('COmtrollers');
    return await this.dispatchService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dispatchService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDispatchDto: UpdateDispatchDto,
  ) {
    return this.dispatchService.update(+id, updateDispatchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dispatchService.remove(+id);
  }
}
