import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { CustomerModule } from './customer/customer.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRESQL_HOST || 'localhost',
      port: process.env.POSTGRESQL_PORT
        ? parseInt(process.env.POSTGRESQL_PORT, 10)
        : 5432,
      username: process.env.POSTGRESQL_USERNAME || 'postgres',
      password: process.env.POSTGRESQL_PASSWORD || 'postgres',
      database: process.env.POSTGRESQL_NAME || 'book_management',
      entities: ['./dist/**/**.entity{.ts,.js}'],
      synchronize: false,
    }),
    BookModule,
    CustomerModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
