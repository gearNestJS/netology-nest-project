import { Module } from '@nestjs/common';
import { BooksService } from './services';
import { BooksController } from './controllers';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  providers: [BooksService],
  controllers: [BooksController],
})
export class BooksModule {}
