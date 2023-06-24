import express from 'express';
import 'dotenv/config'
import connectDB from './db/db.js';

connectDB();

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is up and running at PORT : ${process.env.PORT}`);
})
