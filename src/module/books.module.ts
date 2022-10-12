import { Module } from "@nestjs/common";
import { BooksService } from "../service/books.service";
import { Book } from "src/entity/Book.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BooksResolver } from "../resolver/books.resolver";
import { BooksRepository } from "src/infra/books.repository";
@Module({
  // def Entity as TypeORM Module
  imports: [TypeOrmModule.forFeature([Book]), BooksRepository],
  providers: [BooksService, BooksResolver, BooksRepository],
  exports: [BooksService, TypeOrmModule],
})
export class BooksModule {}
