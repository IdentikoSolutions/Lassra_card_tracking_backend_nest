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
import { CardService } from './card.service';
import { CreateCardDto, UpdateCardDto } from '../dto';

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

  @Get()
  findAll(@Query('batchNo') batchNo?: string) {
    console.log('called');
    return this.cardService.findAll(batchNo);
  }
  @Get('retrival')
  getCardForRetrival(@Query('collectionCenter') collectionCenter?: string) {
    return this.cardService.getCardForRetrivalByCollectionCenter(
      collectionCenter,
    );
  }
  @Get('one/:lassraId')
  findOne(
    @Param('lassraId') lassraId: string,
    @Query('batchNo') batchNo: string,
  ) {
    console.log(lassraId, batchNo);
    try {
      return this.cardService.findOne(batchNo, lassraId);
    } catch (e) {
      throw new HttpException(e, HttpStatus.EXPECTATION_FAILED);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCardDto: UpdateCardDto) {
    return this.cardService.update(+id, updateCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardService.remove(+id);
  }
}
