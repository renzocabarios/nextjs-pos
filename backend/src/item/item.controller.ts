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

@Controller('item')
export class ItemController {
  constructor(private readonly service: ItemService) {}

  @Post()
  async create(@Body() createItemDto: CreateItemDto) {
    const data = await this.service.create(createItemDto);
    return {
      status: STATUS.SUCCESS,
      message: MESSAGE.SUCCESS_CREATE,
      data: [data],
    };
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
