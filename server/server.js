import express from 'express';
import 'dotenv/config'
import connectDB from './db/db.js';
import router from './Routes/userRoute.js';
import cors from 'cors'
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.use('/api',router);

app.listen(process.env.PORT,()=>{
    console.log(`Server is up and running at PORT : ${process.env.PORT}`);
})
