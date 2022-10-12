import { Repository } from "typeorm";
import { Book } from "../entity/Book.entity";

export class BooksRepository extends Repository<Book> {
  getArchivedBook = async () => {
    const option = { where: { isArchive: true } };
    return await this.find(option);
  };

  getNotArchivedBook = async () => {
    const option = { where: { isArchive: false } };
    return await this.find(option);
  };

  getAllBook = async () => {
    return await this.find();
  };
}
