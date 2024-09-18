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
import { CardprovisionService } from './cardprovision.service';
// import { CreateCardProvisionDto } from './dto/create-cardprovision.dto';
// import { UpdateCardprovisionDto } from './dto/update-cardprovision.dto';

@Controller('cardprovision')
export class CardprovisionController {
  constructor(private readonly cardprovisionService: CardprovisionService) {}

  @Post()
  async create(@Body() body: { lassraId: string; provisionId: string }) {
    console.log(body);
    const { lassraId, provisionId } = body;
    try {
      const result = await this.cardprovisionService.create(
        lassraId,
        +provisionId,
      );
      console.log(result);
      return result;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  findAll(@Query('provision_id') provision_id: number) {
    return this.cardprovisionService.findAll(provision_id);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.cardprovisionService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateCardprovisionDto: UpdateCardprovisionDto,
  // ) {
  //   return this.cardprovisionService.update(+id, updateCardprovisionDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.cardprovisionService.remove(+id);
  // }
}
