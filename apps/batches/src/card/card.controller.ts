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
  UseGuards,
  Request,
} from '@nestjs/common';
import { CardService } from './card.service';
import { UpdateCardDto } from '../dto';
import JwtAuthGuard from '../auth/jwt-auth.guards';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('card')
@ApiBearerAuth('JWT')
@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get('count')
  @ApiOperation({ summary: 'Get counts of cards by status' })
  async getCardsStatusCount(
    @Query('batchNo') batchNo: string,
    @Query('status') status: number,
  ) {
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
  @UseGuards(JwtAuthGuard)
  @Get('one/:lassraId')
  findOne(@Param('lassraId') lassraId: string, @Request() req) {
    console.log(req.user);
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
  async requestDeliveryCard(@Query('lassraId') lassraId: string) {
    return await this.cardService.requestDelivery(lassraId);
  }
}
