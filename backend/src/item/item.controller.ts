import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { STATUS, MESSAGE } from '../constant';
import { InjectConnection } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Controller('item')
export class ItemController {
  constructor(
    private readonly service: ItemService,
    @InjectConnection() private readonly connection: mongoose.Connection,
  ) {}

  @Post()
  async create(@Body() createItemDto: CreateItemDto) {
    let response = {
      status: STATUS.SUCCESS,
      message: MESSAGE.SUCCESS_CREATE,
      data: [],
    };

    const session = await this.connection.startSession();

    await session
      .withTransaction(async () => {
        const data = await this.service.create(createItemDto, session);
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

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateItemDto) {
    const data = await this.service.update(id, dto);
    return {
      status: STATUS.SUCCESS,
      message: MESSAGE.SUCCESS_UPDATE,
      data: [data],
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.service.remove(id);
    return {
      status: STATUS.SUCCESS,
      message: MESSAGE.SUCCESS_DELETE,
      data: [data],
    };
  }
}
