import { Injectable } from '@nestjs/common';
import { IBook } from '../types';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { AddBookDto } from '../dto';
import { Book } from '../schemas';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name) private bookModel: Model<Book>,
    @InjectConnection() private connection: Connection,
  ) {}

  /**
   * Get all books
   * @return Promise<unknown>
   */
  public async getAllBooks(): Promise<unknown> {
    return this.bookModel.find().exec();
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
   * @return Promise<unknown>
   */
  public async addBook(addBookDto: AddBookDto): Promise<unknown> {
    const createdBook = new this.bookModel(addBookDto);

    return createdBook.save();
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
