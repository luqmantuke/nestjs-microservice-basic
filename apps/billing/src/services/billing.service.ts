import { Injectable, Logger } from '@nestjs/common';
import { RmqContext } from '@nestjs/microservices';

@Injectable()
export class BillingService {
  private readonly logger = new Logger(BillingService.name);
  
  getHello(): string {
    return 'Hello World!';
  }

  async processOrderCreated(data: any, ctx: RmqContext) {
    this.logger.log('Processing order created', data);
    this.logger.log('Context', ctx);

    return {
      status: 'success',
      message: 'Order created',
      data,
    };
  }
}
