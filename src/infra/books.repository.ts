import { Repository } from "typeorm";
import { Book } from "../entity/Book.entity";

export class BooksRepository extends Repository<Book> {
  getArchivedBook = () => {
    const option = { where: { isArchive: true } };
    return this.find(option);
  };

  getNotArchivedBook = () => {
    const option = { where: { isArchive: false } };
    return this.find(option);
  };

  getAllBook() {
    return this.find();
  }
}
