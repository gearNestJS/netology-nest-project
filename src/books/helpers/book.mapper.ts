import { AddBookDto } from '../dto';
import { IBook } from '../types';
import { BookModel } from '../models';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookMapper {
  public mapBook(addedBook: AddBookDto): IBook {
    const { title, price, slug } = addedBook;

    return new BookModel(title, price, slug);
  }
}
