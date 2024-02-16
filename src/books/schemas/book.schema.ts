import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop()
  public title: string;

  @Prop()
  public price: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
