import { bookModel } from './bookModel.js'
class BooksRepository {
    async getBooks() {
        return bookModel.find({});
    }
}

export { BooksRepository };
