import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { OrdersService } from '../services/orders.service';
import { CreateOrderRequest } from '../dto/create-order.request';
import { IsOptional, IsString } from 'class-validator';
import { SearchOrdersDto } from '../dto/search/search-order-dto';


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
  
  @Get('get_orders')
  async getOrders() {
    return  await this.ordersService.getAllOrders();
  }


  @Post('search')  // Changed to POST
  async searchOrders(@Body() searchParams: SearchOrdersDto) {

      const orders = await this.ordersService.searchOrder(searchParams);
      return orders;
   
  }
}
