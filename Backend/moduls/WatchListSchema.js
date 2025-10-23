const mongoose=require('mongoose')

const watchListSchema=new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    percent: {
        type:String,
        required:true
    },
    isDown: Boolean,
})
const WatchListModel=mongoose.model('watchList',watchListSchema)
module.exports={WatchListModel}