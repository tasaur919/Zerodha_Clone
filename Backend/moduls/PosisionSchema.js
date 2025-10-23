const mongoose=require('mongoose')

const PositionSchema=new mongoose.Schema({
    product: {
        type:String,
        required:true
    },
    name: {
        type:String,
        required:true
    },
    qty: {
        type:Number,
        required:true
    },
    avg:  {
        type:Number,
        required:true
    },
    price: {
        type:Number,
        required:true
    },
    net: {
        type:String,
        required:true
    },
    day: {
        type:String,
        required:true
    },
    isLoss: Boolean,
})

const PositionModel=mongoose.model('position',PositionSchema)
module.exports={PositionModel}