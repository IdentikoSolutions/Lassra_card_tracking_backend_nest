import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BatchService } from './batch.service';
import axios from 'axios';
import { CreateBatchDto } from '../dto';

@Controller('batch')
export class BatchController {
  constructor(private readonly batchService: BatchService) {}

  @Post()
  async createBatchReceipt(@Body() createBatchDto: CreateBatchDto) {
    try {
      return this.batchService.createBatch(createBatchDto);
    } catch (e) {
      throw new Error(e);
    }
  }
  @Get('seed')
  async Seed() {
    try {
      const Axios = axios.create({
        baseURL: 'http://10.65.10.7/cartrackerapi/api/',
        headers: {
          accept: 'text/plain',
          'Content-Type': 'application/json',
          XApikey: 'pgH7QzFHJx4w46fI~5Uzi4RvtTwlEXp',
        },
      });
      const isBatchEmpty = await this.batchService.findAll();
      // console.log(isBatchEmpty, 'Is batch Empty');
      if (isBatchEmpty.length) {
        throw new Error('Database already seeded');
      }
      const result = await Axios.get('/Batch/GetValidBatches');
      const resultModified = await Promise.allSettled(
        result.data.map(async (item) => {
          item.cards = await (
            await Axios.get(`/batch/getcardbybatchid?id=${item.batchNo}`)
          ).data.cards.map((item) => {
            const editedResident = {
              id: item.id,
              batchNo: item.batch,
              contact_LGA: item.contacT_LGA,
              country_code: item.countrY_CODE,
              current_house_number: item.currenT_HOUSE_NUMBER,
              current_street: item.currenT_STREET,
              current_town: item.currenT_TOWN,
              date_of_birth: item.datE_BIRTH,
              duplicate_PAN: item.duplicatePAN,
              email_address: item.emaiL_ADDRESS,
              first_name: item.firstname,
              flat_number: item.flaT_NUMBER,
              lassraId: item.lasrraId,
              middle_name: item.middlename,
              primary_phone_no: item.primarY_PHONE_NO,
              registration_date: item.registratioN_DATE,
              state_of_residence: item.statE_OF_RESIDENCE,
              surname: item.surname,
              status: 0,
              cardLocation: {
                lassraId: item.lasrraId,
                currentLocation: 'Head office',
                collectionCenter: item.contacT_LGA,
              },
              //item.status,
            };
            return editedResident;
          });
          // console.log(item, ' ITEM');
          return item;
        }),
      );
      // const rows = resultModified
      //   .filter((row) => row.status === 'fulfilled')
      //   .map((row) => row.value);
      // // console.log(rows);
      // const x = resultModified[0];
      // console.log(x, 'this is my x');
      // x.status === 'fulfilled' && (await this.batchService.createBatch(x.value));
      // // console.log(resultModified, 'THZEDGSHH');
      for (const x of resultModified) {
        // console.log(x, 'XXXX');
        try {
          x.status === 'fulfilled' &&
            (await this.batchService.createBatch(x.value));
        } catch (e) {
          throw new HttpException(e, HttpStatus.CONFLICT);
        }
      }
      // const create = await this.batchService.createBatch(resultModified[0]);
      // console.log(create, 'create');
      return 'seeding successful';
    } catch (e) {
      throw new HttpException('Database already seeded', HttpStatus.FORBIDDEN);
    }
  }
  @Get('search')
  search(
    @Query('batchNo') batchNo?: string | undefined,
    @Query('jobNo') jobNo?: string | undefined,
    @Query('lassraId') lassraId?: string | undefined,
    @Query('page') page: number | undefined = 1,
    @Query('pageSize') pageSize: number | undefined = 10,
  ) {
    // if (!batchNo && !jobNo && !lassraId)
    //   throw new HttpException(
    //     'Provide bathcNo, JobNo or lassraId',
    //     HttpStatus.BAD_REQUEST,
    //   );
    return this.batchService.search(batchNo, jobNo, lassraId, page, pageSize);
  }

  @Get()
  findAll() {
    return this.batchService.findAll();
  }
  // @Post('card')
  // createCard(@Body() createCardDto: CreateCardDto) {
  //   return this.batchService.createCard(createCardDto);
  // }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.batchService.findOne(id);
  }
  // @Put(':id')
  // async updateCardReceiptStatus(
  //   @Param() id: number,
  //   @Query('lassraid') lassraid: string,
  // ) {
  //   console.log(id, lassraid, 'param and query');
  //   return this.batchService.updateCard(id, lassraid);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBatchDto: UpdateBatchDto) {
  //   return this.batchService.update(id, updateBatchDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.batchService.remove(id);
  }
}
