import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

type ItemDocument = Item & Document;

@Schema({ timestamps: true })
class Item {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  basePrice: number;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;

  @Prop({ default: false })
  deleted: boolean;
}

const ItemSchema = SchemaFactory.createForClass(Item);

export { ItemSchema, ItemDocument, Item };
