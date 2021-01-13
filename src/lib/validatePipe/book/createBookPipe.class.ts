import {
  PipeTransform,
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BookInput } from '../../../book/book.dto';

@Injectable()
export class CreateBookPipe implements PipeTransform {
  async transform(value: BookInput) {
    if (!value.name || !value.type) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'BOOK_REQUIRED',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return value;
  }
}
