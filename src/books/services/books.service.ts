import { Injectable } from '@nestjs/common';
import { IBook } from '../types';
import { Book } from '../models';

const books: IBook[] = [
  new Book('title 1', 12),
  new Book('title 2', 13),
  new Book('title 3', 14),
  new Book('title 4', 15),
];

@Injectable()
export class BooksService {
  /**
   * Get all books
   * @return IBook[]
   */
  public getAllBooks(): IBook[] {
    return [...books];
  }
}
