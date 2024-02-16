import { Injectable } from '@nestjs/common';
import { IBook } from '../types';
import { Book } from '../models';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

const books: IBook[] = [
  new Book('title 1', 12),
  new Book('title 2', 13),
  new Book('title 3', 14),
  new Book('title 4', 15),
];

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name) private bookModel: Model<Book>,
    @InjectConnection() private connection: Connection,
  ) {}

  /**
   * Get all books
   * @return IBook[]
   */
  public async getAllBooks(): Promise<IBook[]> {
    return [...books];
  }

  /**
   * Get book
   * @return IBook
   */
  public async getBook(): Promise<IBook> {
    return {} as IBook;
  }

  /**
   * Add new book
   * @return IBook
   */
  public async addBook(): Promise<IBook> {
    return {} as IBook;
  }

  /**
   * Update existing book
   * @return IBook
   */
  public async updateBook(): Promise<IBook> {
    return {} as IBook;
  }

  /**
   * Delete existing book
   * @return IBook
   */
  public async deleteBook(): Promise<IBook> {
    return {} as IBook;
  }
}
