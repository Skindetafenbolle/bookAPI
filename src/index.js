import { connectToDB } from './config/mongodb.js';
import express from 'express'
const book = require('../config/mongodb')
 
import { bookRouter } from './routes/bookRoute.js';
import bodyParser from 'body-parser';


const app = express()

app.use(bodyParser.json())

connectToDB()
    .then(() =>{
        app.use('/books', bookRouter)

        app.listen(3000, ()=>{
            console.log('listen')
        })
    })
    .catch((error) =>{
        console.error('failed', error)
        process.exit()
    })

// app.use((req,res,next) =>{
//     res.status('404').send('Not found')
// })

app.get('/', (req,res)=>{
    res.send('Main page')
})