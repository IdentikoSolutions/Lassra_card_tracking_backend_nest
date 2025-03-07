import { Injectable } from '@nestjs/common';
import { CreateProvisionDto } from './dto/create-provision.dto';
import { UpdateProvisionDto } from './dto/update-provision.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Provision } from './entities/provision.entity';
import { Card } from '../entities';

@Injectable()
export class ProvisionService {
  constructor(
    @InjectRepository(Provision)
    private readonly provisionRepository: Repository<Provision>,
    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,
    private readonly dataSource: DataSource,
  ) {}
  async createProvision(createProvisionDto: CreateProvisionDto) {
    try {
      const newProvision = this.provisionRepository.create(createProvisionDto);

      await this.provisionRepository.save(newProvision);
      return newProvision;
    } catch (e) {
      throw new Error(e.message + 'Service error');
    }
  }
  async complete(id: number) {
    try {
      const provision = await this.provisionRepository.findOne({
        where: { id },
      });
      if (!provision) {
        throw new Error('Provision receipt not found');
      }
      provision.provisionStatus = 1;
      await this.provisionRepository.save(provision);
    } catch (e) {
      return e;
    }
  }
  async findAll(batchNo: string) {
    try {
      if (batchNo) {
        return await this.provisionRepository.find({
          where: { batchNo },
        });
      } else {
        return await this.provisionRepository.find({});
      }
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async findOne(id: number) {
    try {
      const provision = await this.provisionRepository.find({
        where: { id: +id },
        relations: ['batch'],
      });
      return provision[0];
    } catch (e) {
      throw new Error(e);
    }
  }

  async search(
    batchNo: string,
    jobNo: string,
    lassraId: string,
    page: number,
    pageSize: number,
  ) {
    try {
      const provision = await this.provisionRepository
        .createQueryBuilder('provision')
        .leftJoinAndSelect('provision.batch', 'batch')
        .leftJoinAndSelect('provision.cardProvision', 'cardProvision')
        .where('provision.batchNo = :batchNo', { batchNo })
        .orWhere('batch.bankJobNo LIKE :jobNo', { jobNo: `%${jobNo}%` })
        .orWhere('cardProvision.lassraId = :lassraId', {
          lassraId,
        })
        .select([
          'provision.provisionedBy',
          'provision.provisionedAt',
          'provision.batchNo',
          'provision.id',
          'provision.createdAt',
          'provision.cardProvision',
          // 'COUNT(cardReceipt) AS cardCount',
        ])
        .orderBy('provision.id', 'ASC') // Order by id in ascending order
        .addGroupBy('provision.id') // Group by receipt id
        .skip((page - 1) * pageSize)
        .take(pageSize)
        .getManyAndCount();

      return provision;
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
