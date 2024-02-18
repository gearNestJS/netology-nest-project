import { Injectable } from '@nestjs/common';

import { ResponseBookDto } from '../dto';
import { IBook } from '../types';
import { BookModel } from '../models';

@Injectable()
export class BooksMapper {
  /**
   * Map response book
   * @param responseBook {ResponseBookDto}
   */
  public mapBook(responseBook: ResponseBookDto): IBook {
    const { title, price } = responseBook;

    return new BookModel(title, price);
  }
  /**
   * Map response books
   * @param responseBooks {ResponseBookDto}[]
   */
  public mapBooks(responseBooks: ResponseBookDto[]): IBook[] {
    return responseBooks.map((responseBook: ResponseBookDto) => {
      const { title, price } = responseBook;

      return new BookModel(title, price);
    });
  }
}
