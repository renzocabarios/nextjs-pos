import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectConnection } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { STATUS, MESSAGE } from '../constant';

@Controller('transaction')
export class TransactionController {
  constructor(
    private readonly service: TransactionService,
    @InjectConnection() private readonly connection: mongoose.Connection,
  ) {}

  @Post()
  async create(@Body() dto: CreateTransactionDto) {
    let response = {
      status: STATUS.SUCCESS,
      message: MESSAGE.SUCCESS_CREATE,
      data: [],
    };

    const session = await this.connection.startSession();

    await session
      .withTransaction(async () => {
        const data = await this.service.create(dto, session);
        response = {
          status: STATUS.SUCCESS,
          message: MESSAGE.SUCCESS_CREATE,
          data: [data],
        };
      })
      .catch((e) => {
        response = {
          status: STATUS.FAIL,
          message: e,
          data: [],
        };
      });

    session.endSession();

    return response;
  }

  @Get()
  async findAll() {
    const data = await this.service.findAll();
    return {
      status: STATUS.SUCCESS,
      message: MESSAGE.SUCCESS_FETCH,
      data,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.service.findOne(id);
    return {
      status: STATUS.SUCCESS,
      message: MESSAGE.SUCCESS_FETCH,
      data: [data],
    };
  }
}
