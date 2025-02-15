import { applyDecorators } from '@nestjs/common';
import { ApiResponse as SwaggerResponse } from '@nestjs/swagger';

export function ApiResponseDecorator() {
  return applyDecorators(
    SwaggerResponse({ 
      status: 200,
      description: 'Operation successful'
    }),
    SwaggerResponse({ 
      status: 400,
      description: 'Bad request'
    })
  );
}