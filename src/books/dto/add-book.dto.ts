import { IBook } from '../types';

export class AddBookDto implements IBook {
  title: string;
  price: number;
  slug: string;
}
