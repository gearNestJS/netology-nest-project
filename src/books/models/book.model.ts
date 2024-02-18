import { IBook } from '../types';

export class BookModel implements IBook {
  constructor(
    public title: string,
    public price: number,
    public slug: string,
  ) {}
}
