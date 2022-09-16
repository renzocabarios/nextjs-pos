import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ClientSession, Model } from 'mongoose';
import { CreateTransactionDto } from '../interfaces';
import {
  Transaction,
  TransactionDocument,
} from './entities/transaction.entity';

@Injectable()
export class TransactionService {
  constructor(
    @InjectModel(Transaction.name)
    private readonly model: Model<TransactionDocument>,
  ) {}

  async create(dto: CreateTransactionDto<any>, session: ClientSession) {
    return await this.model.create([dto], { session });
  }

  async findAll() {
    return await this.model.find({ deleted: false }).exec();
  }

  async findOne(_id: string) {
    return await this.model.findOne({ deleted: false, _id }).exec();
  }
}
