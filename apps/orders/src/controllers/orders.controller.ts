import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from '../services/orders.service';
import { CreateOrderRequest } from '../dto/create-order.request';


@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  getHello(): string {
    return this.ordersService.getHello();
  }

  @Post('create_order')
  async createOrder(@Body() request: CreateOrderRequest) {
    return this.ordersService.createOrder(request);
  }
  
}
