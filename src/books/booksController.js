class BooksController {
    booksService;

    constructor(service) {
        this.booksService = service;
    }
    async getBooks() {
        return this.booksService.getBooks();
    }
}

export { BooksController };
