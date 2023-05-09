import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const port = 3000;
const app = express();

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.YOUR_DB);
        console.log('db connect');
    } catch (error) {
        console.log(error)
        
    }
};

app.set('view engine','ejs');

app.use(express.json());
app.use(express.urlencoded({extended:false}))


import HomeRoutes from './Routes/Home.js';
import AuthRoutes from './Routes/Auth.js';

app.use('/',HomeRoutes);
app.use('/Auth',AuthRoutes);


app.listen(port,()=>{
    connect();
    console.log(`${port}`);
})