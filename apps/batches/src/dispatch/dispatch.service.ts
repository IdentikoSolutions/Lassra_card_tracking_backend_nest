import { Injectable } from '@nestjs/common';
import { CreateDispatchDto } from './dto/create-dispatch.dto';
import { UpdateDispatchDto } from './dto/update-dispatch.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dispatch } from './entities/dispatch.entity';
import { Repository } from 'typeorm';
import { CardLocation } from './entities/location.entity';
import { CardDispatch } from './entities/cardDispatch';
import { AppController } from '../app.controller';

@Injectable()
export class DispatchService {
  constructor(
    @InjectRepository(Dispatch)
    private readonly dispatchRepository: Repository<Dispatch>,
    @InjectRepository(CardDispatch)
    private readonly cardDispatchRepository: Repository<CardDispatch>,
    @InjectRepository(CardLocation)
    private readonly cardLocationRepository: Repository<CardLocation>,
  ) {}
  async getCardforDispatch(
    batchNo: number,
    lassraId: string,
    collectionCenter: string,
  ) {
    if (batchNo > 0 && collectionCenter) {
      const searchresult = await this.cardLocationRepository
        .createQueryBuilder('cardLocation')
        .leftJoinAndSelect('cardLocation.card', 'card')
        .where('card.batchNo = :batchNo', { batchNo })
        .andWhere('cardLocation.collectionCenter = :collectionCenter', {
          collectionCenter,
        })
        .select(['cardLocation.lassraId', 'cardLocation..collectionCenter'])
        .getMany();
      return searchresult;
    } else if (lassraId) {
      return await this.cardLocationRepository.find({ where: { lassraId } });
    } else if (!batchNo && collectionCenter) {
      const searchresult = await this.cardLocationRepository
        .createQueryBuilder('cardLocation')
        .leftJoinAndSelect('cardLocation.card', 'card')
        // .where('card.batchNo = :batchNo', { batchNo })
        .where('cardLocation.collectionCenter = :collectionCenter', {
          collectionCenter,
        })
        .select(['cardLocation.lassraId', 'cardLocation..collectionCenter'])
        .getMany();
      return searchresult;
    }
    //   const provision = await this.provisionRepository
    //   .createQueryBuilder('provision')
    //   .leftJoinAndSelect('provision.batch', 'batch')
    //   .leftJoinAndSelect('provision.cardProvision', 'cardProvision')
    //   .where('provision.batchNo = :batchNo', { batchNo })
    //   .orWhere('batch.bankJobNo LIKE :jobNo', { jobNo: `%${jobNo}%` })
    //   .orWhere('cardProvision.lassraId = :lassraId', {
    //     lassraId,
    //   })
    //   .select([
    //     'provision.provisionedBy',
    //     'provision.provisionedAt',
    //     'provision.batchNo',
    //     'provision.id',
    //     'provision.createdAt',
    //     'provision.cardProvision',
    //     // 'COUNT(cardReceipt) AS cardCount',
    //   ])
    //   .orderBy('provision.id', 'ASC') // Order by id in ascending order
    //   .addGroupBy('provision.id') // Group by receipt id
    //   .skip((page - 1) * pageSize)
    //   .take(pageSize)
    //   .getManyAndCount();

    // return provision;
  }
  async createDispatch(createDispatchDto: CreateDispatchDto) {
    const newDispatch = await this.dispatchRepository.create(createDispatchDto);
    return await this.dispatchRepository.save(newDispatch);
  }
  async updateDispatch(updateDispatchDto: UpdateDispatchDto, id: number) {
    const dispatchToUpdate = await this.dispatchRepository.find({
      where: { id: id },
    })[0];
    if (dispatchToUpdate === undefined) {
      throw new Error('required Dispatch not found');
    }
    const updatedDispatch = {
      ...dispatchToUpdate,
      dispatchStatus: updateDispatchDto.dispatchStatus,
      acknowledgedBy: updateDispatchDto.acknowledgedBy,
    };
    await this.dispatchRepository.save(updatedDispatch);
    for (const card of updateDispatchDto.cardDispatch) {
     const updatedCard =  await this.cardDispatchRepository.find({where:{lassraId:card.lassraId}})
     await this.cardDispatchRepository.save(updatedCard);
     //this schould be done in transaction
  }
  findAll() {
    return `This action returns all dispatch`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dispatch`;
  }

  update(id: number, updateDispatchDto: UpdateDispatchDto) {
    return `This action updates a #${id} dispatch`;
  }

  remove(id: number) {
    return `This action removes a #${id} dispatch`;
  }
}
