import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { IBook } from '../types';
import { BooksService } from '../services';
import { AddBookDto } from '../dto';
import { BookMapper } from '../helpers';

@Controller('books')
export class BooksController {
  constructor(
    private readonly _booksService: BooksService,
    private readonly _bookMapper: BookMapper,
  ) {}

  @Get()
  public async getAllBooks(): Promise<unknown> {
    return await this._booksService.getAllBooks();
  }

  @Get(':slug')
  public async getBook(): Promise<IBook> {
    return await this._booksService.getBook();
  }

  @Post('/create')
  public async addBook(@Body('book') addBookDto: AddBookDto): Promise<unknown> {
    const addedBook = await this._booksService.addBook(addBookDto);

    return this._bookMapper.mapBook(addedBook as AddBookDto);
  }

  @Put()
  public async updateBook(): Promise<IBook> {
    return await this._booksService.updateBook();
  }

  @Delete()
  public async deleteBook(): Promise<IBook> {
    return await this._booksService.deleteBook();
  }
}
