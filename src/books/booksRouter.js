import express from "express";

import { BooksRepository } from "./booksRepository.js";
import { BooksService } from "./booksService.js";
import { BooksController } from './booksController.js';

const booksRepository = new BooksRepository();
const booksService = new BooksService(booksRepository);
const booksController = new BooksController(booksService);

const bookRouter = express.Router();
bookRouter.get('/books', await booksController.getBooks);

export { bookRouter };
