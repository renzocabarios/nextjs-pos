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
import { BaseItemDto, CreateItemDto, UpdateItemDto } from '../interfaces';
import { METHOD, RESOURCE } from '../constant';
import { InjectConnection } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ResponseService } from 'src/services/response/response.service';

@Controller(RESOURCE.ITEM)
export class ItemController {
  constructor(
    private readonly service: ItemService,
    private readonly response: ResponseService,
    @InjectConnection() private readonly connection: mongoose.Connection,
  ) {}

  @Post()
  async create(@Body() createItemDto: CreateItemDto) {
    let message = {};

    const session = await this.connection.startSession();

    await session.withTransaction(async () => {
      const data = await this.service.create(createItemDto, session);
      message = this.response.success<BaseItemDto>(
        RESOURCE.ITEM,
        METHOD.CREATE,
        data,
      );

      if (!data) throw new Error('');
    });

    session.endSession();
    return message;
  }

  @Get()
  async findAll() {
    const data = await this.service.findAll();
    return this.response.success<BaseItemDto>(
      RESOURCE.ITEM,
      METHOD.FETCH,
      data,
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.service.findOne(id);
    return this.response.success<BaseItemDto>(RESOURCE.ITEM, METHOD.FETCH, [
      data,
    ]);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateItemDto) {
    let message = {};

    const session = await this.connection.startSession();

    await session.withTransaction(async () => {
      const data = await this.service.update(id, dto, session);

      message = this.response.success<BaseItemDto>(
        RESOURCE.ITEM,
        METHOD.UPDATE,
        [data],
      );

      if (!data) throw new Error('');
    });

    session.endSession();
    return message;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    let message = {};

    const session = await this.connection.startSession();

    await session.withTransaction(async () => {
      const data = await this.service.remove(id, session);

      message = this.response.success<BaseItemDto>(
        RESOURCE.ITEM,
        METHOD.DELETE,
        [data],
      );

      if (!data) throw new Error('');
    });

    session.endSession();
    return message;
  }
}
