import { IBook } from '../types';

export class Book implements IBook {
  constructor(
    public title: string,
    public price: number,
  ) {}
}
