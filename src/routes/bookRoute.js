import express from 'express'
const book = require('../config/mongodb')

import bodyParser from 'body-parser'
import bookModel from '../models/bookModel'
export const bookRouter = express.Router()



bookRouter.use(bodyParser.json())


bookRouter.get('/',async (req,res) =>{
    const books = await bookModel.find({})
    console.log('sdf')
    res.send(books)
    
})

bookRouter.get('/books',async (req,res)=>{
    res.send('(get /)')
})

