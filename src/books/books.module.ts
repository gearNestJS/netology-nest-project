import { Module } from '@nestjs/common';
import { BooksService } from './services';
import { BooksController } from './controllers';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './schemas';
import { BookMapper } from './helpers';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  providers: [BooksService, BookMapper],
  controllers: [BooksController],
})
export class BooksModule {}
