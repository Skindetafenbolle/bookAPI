class BooksService {

    repository;
    constructor(booksRepository) {
        this.repository = booksRepository;
    }

    async getBooks() {
        return this.repository.getBooks();
    }
}

export { BooksService };
