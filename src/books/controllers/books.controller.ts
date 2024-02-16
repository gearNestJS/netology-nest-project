import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { IBook } from '../types';
import { BooksService } from '../services';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAllBooks(): IBook[] {
    return this.booksService.getAllBooks();
  }

  @Post()
  addBook(): IBook {
    return {} as IBook;
  }

  @Put()
  updateBook(): IBook {
    return {} as IBook;
  }

  @Delete()
  deleteBook(): IBook {
    return {} as IBook;
  }
}
