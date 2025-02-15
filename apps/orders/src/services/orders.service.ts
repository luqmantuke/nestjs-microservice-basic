import { Injectable } from '@nestjs/common';
import { CreateOrderRequest } from '../dto/create-order.request';
import { OrdersRepository } from '../repository/orders.repository';
@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository) {}
  getHello(): string {
    return 'Hello World!';
  }
  async createOrder(request: CreateOrderRequest) {
    await this.ordersRepository.create(request);
  }
}
