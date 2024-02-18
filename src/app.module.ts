import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';

const mongoDBUrl = 'mongodb://127.0.0.1:27017/books';

@Module({
  imports: [BooksModule, MongooseModule.forRoot(mongoDBUrl)],
  controllers: [],
  providers: [],
})
export class AppModule {}
