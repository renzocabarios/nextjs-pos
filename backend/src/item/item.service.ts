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

  async create(dto: CreateItemDto, session: ClientSession) {
    return await this.model.create([dto], { session });
  }

  async findAll() {
    return await this.model.find({ deleted: false }).exec();
  }

  async findOne(_id: string) {
    return await this.model.findOne({ deleted: false, _id }).exec();
  }

  async update(_id: string, dto: UpdateItemDto, session: ClientSession) {
    return await this.model
      .findOneAndUpdate({ _id }, dto, { new: true, session })
      .exec();
  }

  async remove(_id: string, session: ClientSession) {
    return await this.model
      .findOneAndUpdate({ _id }, { deleted: true }, { new: true, session })
      .exec();
  }
}
