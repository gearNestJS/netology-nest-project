import { IsInt, IsNotEmpty } from 'class-validator';

import { IBook } from '../types';

export class UpdateBookDto implements IBook {
  @IsInt()
  @IsNotEmpty()
  price: number;
}
