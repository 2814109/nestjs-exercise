import { Module } from "@nestjs/common";
import { BooksService } from "./books.service";
import { Book } from "src/entity/book";
import { TypeOrmModule } from "@nestjs/typeorm";
@Module({
  // def Entity as TypeORM Module
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [BooksService],
  exports: [BooksService],
})
export class BooksModule {}
