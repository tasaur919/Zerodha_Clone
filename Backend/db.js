require('dotenv').config
const mongoose=require('mongoose');
// const DB_URL=process.env.DB_URL
const DB_URL=process.env.MONGO_DB 
mongoose.connect(DB_URL)

// mongoose.connect('mongodb://localhost:27017/E-shop')

mongoose.connection.on("connected",()=>{
    console.log("Database is connected");
    
})
mongoose.connection.on("error",()=>{
    console.log("Failed to connect database!");
    
})

module.exports=mongoose;