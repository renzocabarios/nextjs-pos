import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import {
  BaseItemDto,
  BaseTransactionDto,
  CreateTransactionDto,
} from '../interfaces';
import { InjectConnection } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { RESOURCE, METHOD } from '../constant';
import { ResponseService } from 'src/services/response/response.service';

@Controller('transaction')
export class TransactionController {
  constructor(
    private readonly service: TransactionService,
    private readonly response: ResponseService,
    @InjectConnection() private readonly connection: mongoose.Connection,
  ) {}

  @Post()
  async create(@Body() dto: CreateTransactionDto<BaseItemDto>) {
    let message = {};

    const session = await this.connection.startSession();

    await session.withTransaction(async () => {
      const data = await this.service.create(dto, session);
      message = this.response.success<BaseTransactionDto<any>>(
        RESOURCE.TRANSACTION,
        METHOD.CREATE,
        data,
      );
    });

    session.endSession();
    return message;
  }

  @Get()
  async findAll() {
    const data = await this.service.findAll();
    return this.response.success<BaseTransactionDto<any>>(
      RESOURCE.TRANSACTION,
      METHOD.FETCH,
      data,
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.service.findOne(id);
    return this.response.success<BaseTransactionDto<any>>(
      RESOURCE.TRANSACTION,
      METHOD.FETCH,
      [data],
    );
  }
}
