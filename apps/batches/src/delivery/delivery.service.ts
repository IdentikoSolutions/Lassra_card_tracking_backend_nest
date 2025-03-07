import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Transaction } from 'typeorm';
import { CardLocation } from '../dispatch/entities/location.entity';
import { Delivery } from './entities/delivery.entity';
import { EntityManager } from 'typeorm';
import { Card } from '../entities';

@Injectable()
export class DeliveryService {
  private entityManager: EntityManager;
  constructor(
    @InjectRepository(CardLocation)
    private readonly cardLocationRepository: Repository<CardLocation>,
    @InjectRepository(Delivery)
    private readonly deliveryRepository: Repository<Delivery>,
    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,
  ) {}
  //Can get all cards that requested delivery, all cards whose delivery other
  //has been created OR ALL CARDS whose delivery other has not been created
  async getRequestForDelivery(created: string): Promise<CardLocation[]> {
    if (created === undefined) {
      return this.getAllCardLocationsWithRequestedDelivery();
    }
    let create;
    if (created === 'false') {
      create = false;
    } else if (created === 'true') {
      create = true;
    }
    return create === true
      ? this.getAllCardLocationsRequestWithDeliveryOrder()
      : this.getAllCardLocationsWithNoDelivery();
  }

  private async getAllCardLocationsWithRequestedDelivery(): Promise<
    CardLocation[]
  > {
    return this.cardLocationRepository
      .createQueryBuilder('cardLocation')
      .where('cardLocation.requestedDelivery = true')
      .getMany();
  }

  private async isDeliveryOrderCreated(lassraId: string) {
    const isdeliveryorderCreated = await this.deliveryRepository.findOne({
      where: { lassraId },
    });
    return isdeliveryorderCreated;
  }
  private async getAllCardLocationsRequestWithDeliveryOrder(): Promise<
    CardLocation[]
  > {
    const cards = await this.getAllCardLocationsWithRequestedDelivery();
    const result = await Promise.all(
      cards.map(async (card) => {
        const isOrdered = await this.isDeliveryOrderCreated(card.lassraId);
        return isOrdered ? card : null;
      }),
    );

    return result.filter((card) => card !== null);
  }

  private async getAllCardLocationsWithNoDelivery(): Promise<CardLocation[]> {
    const cards = await this.getAllCardLocationsWithRequestedDelivery();

    const result = await Promise.all(
      cards.map(async (card) => {
        const isOrdered = await this.isDeliveryOrderCreated(card.lassraId);
        return isOrdered ? null : card;
      }),
    );

    return result.filter((card) => card !== null);
  }
  async create(data) {
    try {
      const newOrders = await Promise.all(
        data.map(async (item) => {
          const location = await this.cardLocationRepository.findOne({
            where: { lassraId: item.lassraId },
          });
          item.cardLocation = location;
          return item;
        }),
      );
      return await this.deliveryRepository.insert(newOrders);
    } catch (err) {
      console.log(err);
      throw new HttpException(err.message, HttpStatus.EXPECTATION_FAILED);
    }
  }
  //Find delivery orders by status and a given range by date
  async findDeliveryByStatus(status?: number, start?: Date, end?: Date) {
    console.log(start, end, status);
    const query = await this.deliveryRepository.createQueryBuilder('delivery');
    if (status !== undefined) {
      console.log('executed 1');
      query.where('delivery.status = :status', { status });
    }
    if (start && end) {
      console.log('executed 2');

      query.andWhere('delivery.created_at BETWEEN :start AND :end', {
        start,
        end,
      });
    } else if (start) {
      console.log('executed 3');

      query.andWhere('delivery.created_at >= :start', { start });
    } else if (end) {
      query.andWhere('delivery.created_at <= :end', { end });
    }

    // const deliveries =

    return await query.getMany();
    // return deliveries;
  }

  // findAll() {
  //   return `This action returns all delivery`;
  // }

  async update(id: number, updateDeliveryDto: UpdateDeliveryDto) {
    try {
      const deliveryToUpdate = await this.deliveryRepository.findOne({
        where: { id },
      });
      const newValues = { ...deliveryToUpdate, ...updateDeliveryDto };
      return await this.deliveryRepository.save(newValues);
    } catch (err) {
      throw new Error(err);
    }
  }
  //Update a list of cards
  async updateMany(updateList: UpdateDeliveryDto[]) {
    await this.deliveryRepository.manager.transaction(
      async (transactionManager) => {
        // Use for...of loop instead of map to handle async/await correctly
        for (const order of updateList) {
          const orderToUpdate = await this.deliveryRepository.findOne({
            where: { lassraId: order.lassraId },
          });

          if (orderToUpdate) {
            // Perform the update within the transac
            orderToUpdate.status = order.status;
            orderToUpdate.delivery_company = order.delivery_company;
            orderToUpdate.assigned_to = order.assigned_to;
            orderToUpdate.given_out_to = order.given_out_to;
            await transactionManager.save(orderToUpdate);
          }
        }

        // After all updates are processed, save the entire updateList in one go
      },
    );
  }
  async completeDelivery(id: number) {
    try {
      await this.deliveryRepository.manager.transaction(
        async (transactionManager) => {
          const orderToUpdate = await transactionManager.findOne(
            this.deliveryRepository.target,
            {
              where: { id },
            },
          );
          if (!orderToUpdate) {
            throw new Error('No delivery order found');
          }
          orderToUpdate.status = 2;
          orderToUpdate.updated_at = new Date(Date.now()).toISOString();
          await transactionManager.save(
            this.deliveryRepository.target,
            orderToUpdate,
          );

          const CardLoc = await transactionManager.findOne(
            this.cardLocationRepository.target,
            {
              where: { lassraId: orderToUpdate.lassraId },
            },
          );
          if (!CardLoc) {
            throw new Error('No card location found');
          }
          CardLoc.requestedDelivery = false;
          await transactionManager.save(
            this.cardLocationRepository.target,
            CardLoc,
          );
          const card = await transactionManager.findOne(
            this.cardRepository.target,
            { where: { lassraId: orderToUpdate.lassraId } },
          );
          card.status = 5;
          await transactionManager.save(this.cardRepository.target, card);
        },
      );
      //******Dispatch a message to the external service to update the card status
      return 'Card delivered and received successfully';
    } catch (err) {
      throw new Error(err);
    }
  }
}
