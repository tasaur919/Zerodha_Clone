const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    user_name:{
        type:String,
        required:true,
        unique: true
    },
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,  
    },
})
const UserModel=mongoose.model('new_users',userSchema);
module.exports={UserModel}