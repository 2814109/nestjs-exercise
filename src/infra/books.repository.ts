import { Repository } from "typeorm";
import { Book } from "../entity/book.entity";

export class BooksRepository extends Repository<Book> {}
