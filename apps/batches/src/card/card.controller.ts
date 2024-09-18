import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Res,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { CardService } from './card.service';
import { CreateCardDto, UpdateCardDto } from '../dto';
// import { EventPattern, Payload } from '@nestjs/microservices';
import { Response } from 'express';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  // @Post()
  // create(@Body() createCardDto: CreateCardDto) {
  //   return this.cardService.create(createCardDto);
  // }

  @Get('count')
  async getCardsStatusCount(
    @Query('batchNo') batchNo: string,
    @Query('status') status: number,
  ) {
    // console.log('bstv', batchNo);
    try {
      return await this.cardService.getCardCountByBatchNoAndStatus(
        batchNo,
        status,
      );
    } catch (e) {
      throw new HttpException(e, HttpStatus.EXPECTATION_FAILED);
    }
  }

  // @EventPattern('card_created')
  // async CreateCard(@Payload() data: CreateCardDto) {
  //   console.log('This will create a card');
  // }
  @Get()
  findAll(@Query('batchNo') batchNo?: string) {
    console.log('called');
    return this.cardService.findAll(batchNo);
  }
  @Get('retrival')
  getCardForRetrival(@Query('collectionCenter') collectionCenter: string) {
    try {
      if (!!collectionCenter) {
        return this.cardService.getCardForRetrivalByCollectionCenter(
          collectionCenter,
        );
      }
      return this.cardService.getAllCardForRetrival();
    } catch (err) {
      throw new Error(err);
    }
  }
  @Get('one/:lassraId')
  findOne(@Param('lassraId') lassraId: string) {
    try {
      return this.cardService.findOne(lassraId);
    } catch (e) {
      throw new HttpException(e, HttpStatus.EXPECTATION_FAILED);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCardDto: UpdateCardDto) {
    return this.cardService.update(+id, updateCardDto);
  }
  //this endpoint is called by external service to update card location information when a fresident request relocation.
  @Post('relocation')
  async relocateCard(
    @Query('lassraId') lassraId: string,
    @Query('newLocation') newLocation: string,
  ) {
    return await this.cardService.relocationRequest(lassraId, newLocation);
  }
  @Post('request_delivery')
  async requestDeliveryCard(
    @Query('lassraId') lassraId: string,
    // @Query('newLocation') newLocation: string,
  ) {
    return await this.cardService.requestDelivery(lassraId);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardService.remove(+id);
  }
}
