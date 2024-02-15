import { Controller, Get } from '@nestjs/common';
import { IBook } from '../types';
import { BooksService } from '../services';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAllBooks(): IBook[] {
    return this.booksService.getAllBooks();
  }
}
