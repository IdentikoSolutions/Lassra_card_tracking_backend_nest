import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  NotFoundException,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { CardService } from '../card/card.service';
import { Response, response } from 'express';
@Controller('delivery')
export class DeliveryController {
  constructor(
    private readonly deliveryService: DeliveryService,
    private readonly cardService: CardService,
  ) {}
  @Post('collect')
  async collectCard(@Body() body: { lassraId: string }, @Res() res: Response) {
    const result = await this.cardService.findOne(body.lassraId);
    if (!result) {
      throw new NotFoundException('Card not found');
    }
    if (result.status < 2) {
      throw new HttpException(
        'Card not ready for collection',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (result.status === 3 || result.status === 4) {
      throw new HttpException(
        'Card is damaged and needs reprinting',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (result.status === 5) {
      throw new HttpException(
        'Card is already collected',
        HttpStatus.BAD_REQUEST,
      );
    }
    this.cardService.update(result.id, { status: 5 });
    res.status(200).send('Card collection updated successfully');
  }
  @Get('filter')
  async filterDeliveryOrders(
    @Query('status') status?: string,
    @Query('start') start?: string,
    @Query('end') end?: string,
  ) {
    // console.log('START', start, end, 'END', status, 'STATS');
    const args = [undefined, undefined, undefined];
    if (status) {
      args[0] = parseInt(status);
    }
    if (start) {
      args[1] = new Date(start);
    }
    if (end) {
      args[2] = new Date(end);
    }
    return await this.deliveryService.findDeliveryByStatus(...args);
  }
  @Get() // get delivery all delivery request. if a query 'created' is added it get request by status true/false true for delivery order created and false for not created.
  getRequest(@Query('created') created: string) {
    return this.deliveryService.getRequestForDelivery(created);
  }
  @Post()
  create(@Body() createDeliveryDto: CreateDeliveryDto[]) {
    return this.deliveryService.create(createDeliveryDto);
  }

  // @Get()
  // findAll() {
  //   return this.deliveryService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliveryService.findOne(+id);
  }

  @Patch('update/:id')
  update(
    @Param('id') id: string,
    @Body() updateDeliveryDto: UpdateDeliveryDto,
  ) {
    return this.deliveryService.update(+id, updateDeliveryDto);
  }
  @Post('update/:id/complete')
  completeDelivery(@Param('id') id: string, @Res() response: Response) {
    try {
      response.status(200);
      return this.deliveryService.completeDelivery(+id);
    } catch (e) {
      response.status(400).send(e.message);
    }
  }
  @Patch('batch-update')
  updateMany(@Body() updateDeliveryDto: any[]) {
    console.log('updateMany');
    return this.deliveryService.updateMany(updateDeliveryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliveryService.remove(+id);
  }
}
