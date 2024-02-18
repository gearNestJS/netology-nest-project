import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BooksService } from './services';
import { BooksController } from './controllers';
import { Book, BookSchema } from './schemas';
import { BooksMapper } from './helpers';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  providers: [BooksService, BooksMapper],
  controllers: [BooksController],
})
export class BooksModule {}
