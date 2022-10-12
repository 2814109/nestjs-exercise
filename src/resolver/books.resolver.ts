import { NotFoundException } from "@nestjs/common";
import {
  Field,
  InputType,
  Args,
  Int,
  Mutation,
  Query,
  Resolver,
} from "@nestjs/graphql";
import { Book } from "../entity/Book.entity";
import { BooksService } from "../service/books.service";
import { Max, MaxLength, Min } from "class-validator";

@InputType()
export class NewBookInput {
  @Field()
  @MaxLength(30)
  title: string;

  @Field((type) => Int)
  @Min(0)
  @Max(9999)
  price: number;

  @Field((type) => String)
  author: string;
}

@Resolver(Book)
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Query(() => [Book])
  books(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Query(() => Book)
  async getBook(@Args({ name: "id", type: () => Int }) id: number) {
    const book = await this.booksService.findOneById(id);
    if (!book) {
      throw new NotFoundException(id);
    }
    return book;
  }

  @Mutation(() => Book)
  addBook(@Args("newBook") newBook: NewBookInput): Promise<Book> {
    return this.booksService.create(newBook);
  }

  @Mutation(() => Boolean)
  async removeBook(@Args({ name: "id", type: () => Int }) id: number) {
    return this.booksService.remove(id);
  }
}
