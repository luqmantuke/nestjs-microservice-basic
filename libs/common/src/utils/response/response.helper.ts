import { ApiResponse } from '../../interfaces/response.interface';

export class ResponseHelper {
  static success<T>(data?: T, message: string = 'Operation successful', statusCode: number = 200): ApiResponse<T> {
    return {
      status: 'success',
      message,
      status_code: statusCode,
      data
    };
  }

  static error(message: string = 'Operation failed', statusCode: number = 400): ApiResponse<null> {
    return {
      status: 'error',
      message,
      status_code: statusCode,
      data: null
    };
  }
} 