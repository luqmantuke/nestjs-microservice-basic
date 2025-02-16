import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderRequest } from '../dto/create-order.request';
import { OrdersRepository } from '../repository/orders.repository';
import { BILLING_SERVICE } from 'apps/billing/src/constants/services';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository, @Inject(BILLING_SERVICE) private billingClient: ClientProxy) {}
  getHello(): string {
    return 'Hello World!';
  }
  async createOrder(request: CreateOrderRequest) {

    try {
      const order = await this.ordersRepository.create(request);
      await lastValueFrom(
        this.billingClient.emit('order_created', {
          request,
        }),
      );
      return order;
    } catch (error) {

      throw error;
    }
  }
  async getAllOrders() {
    return await this.ordersRepository.find({});
  }
  async searchOrder(params: any) {
    return await this.ordersRepository.find(params);
  }
}
