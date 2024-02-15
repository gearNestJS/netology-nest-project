import { Module } from '@nestjs/common';
import { BooksService } from './services';
import { BooksController } from './controllers';

@Module({
  providers: [BooksService],
  controllers: [BooksController],
})
export class BooksModule {}
