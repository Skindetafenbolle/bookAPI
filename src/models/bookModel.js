import mongoose from "mongoose";
const Schema = mongoose.Schema

const booksSchema = new Schema({
    title:  String,
    author: String,
});

export const bookModel = mongoose.model('book', booksSchema);