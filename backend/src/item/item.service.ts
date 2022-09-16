import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ClientSession, Model } from 'mongoose';
import { CreateItemDto, UpdateItemDto } from '../interfaces';
import { Item, ItemDocument } from './entities/item.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectModel(Item.name) private readonly model: Model<ItemDocument>,
  ) {}

  // TODO: ADD TRANSACTION
  async create(dto: CreateItemDto, session: ClientSession) {
    return await this.model.create([dto], { session });
  }

  async findAll() {
    return await this.model.find({ deleted: false }).exec();
  }

  async findOne(_id: string) {
    return await this.model.findOne({ deleted: false, _id }).exec();
  }

  // TODO: ADD TRANSACTION
  async update(_id: string, dto: UpdateItemDto) {
    return await this.model
      .findOneAndUpdate({ _id }, dto, { new: true })
      .exec();
  }

  // TODO: ADD TRANSACTION
  async remove(_id: string) {
    return await this.model
      .findOneAndUpdate({ _id }, { deleted: true }, { new: true })
      .exec();
  }
}
