import {
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { RequestBookDto } from './add-book.dto';

export class ResponseBookDto extends RequestBookDto {
  @IsObject()
  @IsNotEmpty()
  _id: object;

  @IsNumber()
  @IsOptional()
  __v?: number;

  @IsString()
  @IsNotEmpty()
  slug: string;
}
