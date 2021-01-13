import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerController } from './customer.controller';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [CustomerController],
})
export class CustomerModule {}
