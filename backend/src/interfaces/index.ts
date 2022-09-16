import { PartialType } from '@nestjs/mapped-types';

export class BaseTransactionDto<T> {
  _id?: string;
  items: T[];
}

export class CreateTransactionDto<T> extends BaseTransactionDto<T> {}

export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {}

export class BaseItemDto {
  _id?: string;
  name: string;
  basePrice: number;
}

export class CreateItemDto extends BaseItemDto {}

export class UpdateItemDto extends PartialType(CreateItemDto) {}

export type ResponseStatus = 'success' | 'fail';
export type ResponseMessage = string;
export type ResponseData<T> = T[];

export interface HttpResponse<T> {
  status: ResponseStatus;
  message: ResponseMessage;
  data?: ResponseData<T>;
}
