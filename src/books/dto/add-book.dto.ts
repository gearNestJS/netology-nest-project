import { IBook } from '../types';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class AddBookDto implements IBook {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsInt()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  slug: string;
}
