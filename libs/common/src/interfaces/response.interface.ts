export interface ApiResponse<T> {
  status: 'success' | 'error';
  message: string;
  status_code: number;
  data?: T;
} 