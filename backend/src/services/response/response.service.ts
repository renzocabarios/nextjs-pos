import { Injectable } from '@nestjs/common';
import { HttpResponse } from 'src/interfaces';

@Injectable()
export class ResponseService {
  success<T>(resource: string, method: string, data: T[]): HttpResponse<T> {
    return {
      status: 'success',
      message: `${method} ${resource} success`,
      data,
    };
  }

  fail<T>(resource: string, method: string): HttpResponse<T> {
    return { status: 'success', message: `${method} ${resource} unsuccessful` };
  }
}
