import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Book } from '../schemas';
import { RequestBookDto, ResponseBookDto, UpdateBookDto } from '../dto';
import { generateSlug } from '../helpers';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  /**
   * Get all books
   * @return Promise<ResponseBookDto[]>
   */
  public async getAllBooks(): Promise<ResponseBookDto[]> {
    return this.bookModel.find().exec();
  }

  /**
   * Get book by unique id
   * @param slug {string}
   * @return Promise<ResponseBookDto>
   */
  public async getBook(slug: string): Promise<ResponseBookDto> {
    const book: ResponseBookDto = await this._findBySlug(slug);

    if (!book) {
      throw new HttpException(
        `Book with slug ${slug} does not exist`,
        HttpStatus.NOT_FOUND,
      );
    }

    return book;
  }

  /**
   * Add new book
   * @param createBookDto {RequestBookDto}
   * @return Promise<ResponseBookDto>
   */
  public async addBook(
    createBookDto: RequestBookDto,
  ): Promise<ResponseBookDto> {
    const createdBook = new this.bookModel(createBookDto);
    createdBook.slug = generateSlug(createBookDto.title);

    return createdBook.save();
  }

  /**
   * Update book
   * @param slug {string}
   * @param updateBookDto {RequestBookDto}
   * @return Promise<ResponseBookDto>
   */
  public async updateBook(
    slug: string,
    updateBookDto: UpdateBookDto,
  ): Promise<ResponseBookDto> {
    const book: ResponseBookDto = await this._findBySlug(slug);

    if (!book) {
      throw new HttpException(
        `Book with slug ${slug} does not exist`,
        HttpStatus.NOT_FOUND,
      );
    }

    const updatedBook = new this.bookModel(Object.assign(book, updateBookDto));

    return updatedBook.save();
  }

  /**
   * Delete book
   * @return Promise<ResponseBookDto>
   */
  public async deleteBook(slug: string): Promise<ResponseBookDto> {
    const book: ResponseBookDto = await this._findBySlug(slug);

    if (!book) {
      throw new HttpException(
        `Book with slug ${slug} does not exist`,
        HttpStatus.NOT_FOUND,
      );
    }

    return this.bookModel.findOneAndDelete({ slug });
  }

  /**
   * Find boot by unique id
   * @param slug {string}
   * @private
   */
  private async _findBySlug(slug: string): Promise<ResponseBookDto> {
    return this.bookModel.findOne({ slug });
  }
}
