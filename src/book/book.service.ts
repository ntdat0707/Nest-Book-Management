import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../../dist/entities/book.entity';
import { BookInput } from './book.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}
  async createBook(bookInput: BookInput) {
    const existBook = await this.bookRepository.findOne({
      where: { name: bookInput.name },
    });
    if (existBook) {
      throw new HttpException(
        { statusCode: HttpStatus.CONFLICT, message: 'Book already exist' },
        HttpStatus.CONFLICT,
      );
    }
    let book = new Book();
    book.setAttributes(bookInput);
    book = await this.bookRepository.save(book);
    return { data: book };
  }

  async getAllBooks(page = 1, limit: number = 100) {
    const query = this.bookRepository.createQueryBuilder('book');
    const bookCount = await query
      .cache(`book_page${page}_limit${limit}`)
      .getCount();
    const books = await query
      .limit(limit)
      .offset((page - 1) * limit)
      .cache(`book_page${page}_limit${limit}`)
      .getMany();
    const pages = Math.ceil(Number(bookCount));
    return {
      page: Number(page),
      totalPages: pages,
      limit: Number(limit),
      totalRecords: bookCount,
      data: books,
    };
  }
}
