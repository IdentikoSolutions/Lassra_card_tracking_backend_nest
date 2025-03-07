import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { DispatchService } from './dispatch.service';
import { CreateDispatchDto } from './dto/create-dispatch.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CardLocation } from './entities/location.entity';
import { Card } from '../entities';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('dispatch')
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
  @Post('addcard')
  async addCardToDispatch(
    @Query() data: { lassraId: string; dispatchId: number },
  ) {
    const { lassraId, dispatchId } = data;
    try {
      return await this.dispatchService.addCardToDispatch(lassraId, dispatchId);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }
  @Post('remove')
  async removeCardToDispatch(
    @Query() data: { id: number; dispatchId: number },
  ) {
    const { id, dispatchId } = data;
    try {
      return await this.dispatchService.removeCardToDispatch(id, dispatchId);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
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
    return await this.dispatchService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.dispatchService.findOne(+id);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.EXPECTATION_FAILED);
    }
  }
  @Get('onecarddispatch')
  async findOneCard(
    @Query('id') id: string,
    @Query('lassraId') lassraId: string,
  ) {
    console.log(id);
    return await this.dispatchService.findOneCardDispatch(+id, lassraId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDispatchDto: Partial<CreateDispatchDto>,
  ) {
    try {
      return this.dispatchService.ackDispatch(updateDispatchDto, +id);
      // return this.dispatchService.updateDispatch(updateDispatchDto, +id);
    } catch (e) {
      throw new Error(e);
    }
  }
}
