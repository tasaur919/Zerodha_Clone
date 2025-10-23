require('dotenv').config()
const express=require('express');
const cors=require('cors')
const bodyParser=require('body-parser')
const app=express();

//both db and userSchema are require to show database in compass
const db=require('./db')
const userSchema=require('./moduls/userSchema');

//router
const userRouter=require('./routes/userapi')

app.use(bodyParser.json())
app.use(cors())

//api
app.use('/api',userRouter)

const port=process.env.PORT 

app.listen(port,()=>{
    console.log(`Server is Running..on ${port}`);
    
})