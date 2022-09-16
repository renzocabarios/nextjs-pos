import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Item } from '../../item/entities/item.entity';

type TransactionDocument = Transaction & Document;

@Schema({ timestamps: true })
class Transaction {
  @Prop({ default: [] })
  items: [{ type: mongoose.Schema.Types.ObjectId; ref: Item }];

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;

  @Prop({ default: false })
  deleted: boolean;
}

const TransactionSchema = SchemaFactory.createForClass(Transaction);

export { TransactionSchema, TransactionDocument, Transaction };
