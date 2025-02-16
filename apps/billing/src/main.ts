import { NestFactory } from '@nestjs/core';
import { BillingModule } from './billing.module';
import { RmqService } from '@app/common/rmq/rmq.service';

async function bootstrap() {
  const app = await NestFactory.create(BillingModule);
  const rmqService = app.get<RmqService>(RmqService);
  
  const maxRetries = 5;
  let currentRetry = 0;
  
  while (currentRetry < maxRetries) {
    try {
      app.connectMicroservice(rmqService.getOptions('BILLING'));
      await app.startAllMicroservices();
      console.log('Billing microservice is listening');
      break;
    } catch (error) {
      console.log(`Failed to connect to RabbitMQ. Retry ${currentRetry + 1}/${maxRetries}`);
      currentRetry++;
      if (currentRetry === maxRetries) {
        console.error('Failed to connect to RabbitMQ after maximum retries');
        process.exit(1);
      }
      // Wait for 5 seconds before retrying
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  }
}
bootstrap();
