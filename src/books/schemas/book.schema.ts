import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IBook } from '../types';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book implements IBook {
  @Prop()
  public title: string;

  @Prop()
  public price: number;

  @Prop({ unique: true })
  public slug: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
