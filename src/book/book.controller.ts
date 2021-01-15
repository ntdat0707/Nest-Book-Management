import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateBookPipe } from '../lib/validatePipe/book/createBookPipe.class';
import { BookInput } from './book.dto';
import { BookService } from './book.service';

@Controller('book')
@ApiTags('Book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Post()
  async create(@Body(new CreateBookPipe()) bookInput: BookInput) {
    return await this.bookService.createBook(bookInput);
  }

  @Get()
  async getAllBook() {
    return await this.bookService.getAllBooks();
  }
}
