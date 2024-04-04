import { Injectable } from '@nestjs/common';
import { CreateDispatchDto } from './dto/create-dispatch.dto';
import { UpdateDispatchDto } from './dto/update-dispatch.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dispatch } from './entities/dispatch.entity';
import { Repository } from 'typeorm';
import { CardLocation } from './entities/location.entity';
import { CardDispatch } from './entities/cardDispatch.entity';
import { AppController } from '../app.controller';
import { CardRepository } from '../repository/card.repository';
import { Card } from '../entities';
import { DataSource } from 'typeorm';

@Injectable()
export class DispatchService {
  constructor(
    @InjectRepository(Dispatch)
    private readonly dispatchRepository: Repository<Dispatch>,
    @InjectRepository(CardDispatch)
    private readonly cardDispatchRepository: Repository<CardDispatch>,
    @InjectRepository(Card)
    private readonly cardRepository: CardRepository,
    @InjectRepository(CardLocation)
    private readonly cardLocationRepository: Repository<CardLocation>,
    private readonly dataSource: DataSource,
  ) {}
  async getCardforDispatch(
    batchNo: number,
    lassraId: string,
    collectionCenter: string,
  ) {
    const status = 2;
    const currentLocation = 'Head office';
    if (batchNo > 0 && collectionCenter) {
      const searchresult = await this.cardLocationRepository
        .createQueryBuilder('cardLocation')
        .leftJoinAndSelect('cardLocation.card', 'card')
        .where('card.batchNo = :batchNo', { batchNo })
        .andWhere('card.status = :status', { status })
        .andWhere('cardLocation.currentLocation = :currentLocation', {
          currentLocation,
        })
        .andWhere('cardLocation.collectionCenter = :collectionCenter', {
          collectionCenter,
        })
        .select(['cardLocation.lassraId', 'cardLocation.collectionCenter'])
        .getMany();
      return searchresult;
    } else if (lassraId) {
      return await this.cardLocationRepository.find({
        where: { lassraId, currentLocation },
        select: ['lassraId', 'collectionCenter'],
      });
    } else if (batchNo < 1 && collectionCenter) {
      const searchresult = await this.cardLocationRepository
        .createQueryBuilder('cardLocation')
        .leftJoinAndSelect('cardLocation.card', 'card')
        .where('card.status= :status', { status })
        .andWhere('cardLocation.collectionCenter = :collectionCenter', {
          collectionCenter,
        })
        .andWhere('cardLocation.currentLocation= :currentLocation', {
          currentLocation,
        })
        .select(['cardLocation.lassraId', 'cardLocation.collectionCenter'])
        .getMany();
      return searchresult;
    }
  }
  //Gett all cards
  async createDispatch(createDispatchDto: CreateDispatchDto) {
    const cardData = createDispatchDto.cardDispatch.map((item) => ({
      ...item,
      dispatchStatus: 0,
    }));

    const DispData = { ...createDispatchDto, cardDispatch: cardData };
    try {
      const newDispatch = await this.dispatchRepository.create(DispData);
      return await this.dispatchRepository.save(newDispatch);
    } catch (e) {
      throw new Error(e.message);
    }
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
      const updatedCard = await this.cardDispatchRepository.find({
        where: { lassraId: card.lassraId },
      });
      await this.cardDispatchRepository.save(updatedCard);
      //this schould be done in transaction
    }
  }
  async findAll() {
    console.log('rom findALL');
    try {
      return await this.dispatchRepository.find({});
    } catch (e) {
      throw new Error(e);
    }
  }

  async findOne(id: number) {
    return await this.dispatchRepository.find({ where: { id } });
  }

  update(id: number, updateDispatchDto: UpdateDispatchDto) {
    return `This action updates a #${id} dispatch`;
  }

  remove(id: number) {
    return `This action removes a #${id} dispatch`;
  }
}
