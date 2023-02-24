import mongoose from "mongoose"


const uri = 'mongodb+srv://test:test@cluster1.zkbalde.mongodb.net/library?retryWrites=true&w=majority';

mongoose.set('strictQuery', true);
mongoose.connect(uri, {}, function () { console.log('connected to DB') });

const db = mongoose.connection;

export { db };
