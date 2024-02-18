import { IsInt, IsNotEmpty, IsString } from 'class-validator';

import { IBook } from '../types';

export class RequestBookDto implements IBook {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsInt()
  @IsNotEmpty()
  price: number;
}
