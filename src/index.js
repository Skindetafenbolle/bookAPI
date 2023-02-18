import express from 'express'
import bodyParser from 'body-parser';

import { bookRouter} from "./books/booksRouter.js";
import { db } from './config/dbConn.js';
await db;

const app = express();

app.use(bookRouter);
app.use(bodyParser.json())

app.listen(3000, '0.0.0.0');
