import mongoose from "mongoose"

export async function connectToDB(){

    mongoose.connect('mongodb+srv://test:test@cluster1.zkbalde.mongodb.net/library?retryWrites=true&w=majority', {useNewUrlParser: true})
    const db = mongoose.connection
    
    db.on('error', console.error.bind(console, 'connection error:'))
    await db.once('open', function (){
        console.log('We are connected')
    })
    console.log('hee')

}
