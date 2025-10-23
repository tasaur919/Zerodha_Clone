const mongoose=require('mongoose')

const HoldingsSchema=new mongoose.Schema({
    name:{ 
    type:String,
    required:true
},
    qty:{ 
    type:Number,
    required:true
},
    avg:{ 
    type:Number,
    required:true
},
    price: { 
    type:Number,
    required:true
},
    net:{ 
    type:String,
    required:true
},
    day:{ 
    type:String,
    required:true
},
})

const HoldinModel=mongoose.model('holding',HoldingsSchema)
module.exports={HoldinModel};