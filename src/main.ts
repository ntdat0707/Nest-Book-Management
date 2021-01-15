import { NestFactory } from '@nestjs/core';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  const options = new DocumentBuilder()
    //.addBearerAuth()
    .setTitle('Book Management')
    .setDescription('The API description')
    //.setVersion('3.0')
    .build();
  const document = SwaggerModule.createDocument(
    app,
    options,
    //   {
    //   ignoreGlobalPrefix: true,
    // }
  );
  SwaggerModule.setup('book_management', app, document);
  await app.listen('3001');
}
bootstrap();
