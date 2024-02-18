import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { IBook } from '../types';
import { BooksService } from '../services';
import { RequestBookDto, ResponseBookDto, UpdateBookDto } from '../dto';
import { BooksMapper } from '../helpers';

@Controller('books')
export class BooksController {
  constructor(
    private readonly _booksService: BooksService,
    private readonly _bookMapper: BooksMapper,
  ) {}

  @Get()
  public async getAllBooks(): Promise<IBook[]> {
    const books: ResponseBookDto[] = await this._booksService.getAllBooks();

    return this._bookMapper.mapBooks(books);
  }

  @Get(':slug')
  @UsePipes(new ValidationPipe())
  public async getBook(@Param('slug') slug: string): Promise<IBook> {
    const findBook: ResponseBookDto = await this._booksService.getBook(slug);

    return this._bookMapper.mapBook(findBook);
  }

  @Post('/create')
  @UsePipes(new ValidationPipe())
  public async addBook(
    @Body('book') createBookDto: RequestBookDto,
  ): Promise<IBook> {
    const addedBook: ResponseBookDto =
      await this._booksService.addBook(createBookDto);

    return this._bookMapper.mapBook(addedBook);
  }

  @Put(':slug')
  @UsePipes(new ValidationPipe())
  public async updateBook(
    @Param('slug') slug: string,
    @Body('book') updateBookDto: UpdateBookDto,
  ): Promise<IBook> {
    const updatedBook: ResponseBookDto = await this._booksService.updateBook(
      slug,
      updateBookDto,
    );

    return this._bookMapper.mapBook(updatedBook);
  }

  @Delete(':slug')
  @UsePipes(new ValidationPipe())
  public async deleteBook(@Param('slug') slug: string): Promise<IBook> {
    const deletedBook: ResponseBookDto =
      await this._booksService.deleteBook(slug);

    return this._bookMapper.mapBook(deletedBook);
  }
}
