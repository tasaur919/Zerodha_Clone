const express=require('express');
const { HoldinModel}=require('../moduls/HoldingSchema');
const { PositionModel } = require('../moduls/PosisionSchema');
const { WatchListModel } = require('../moduls/WatchListSchema');
const {OrderModel}=require('../moduls/orderSchema');
const { UserModel } = require('../moduls/userSchema');
const router=express.Router()
const bcrypt=require('bcryptjs')
//One time api to insert data into database.
//http:localhost:5000/api/tempdata
// router.get('/holdingsdata',(req,res)=>{
//    const tempHoldings = [
//   {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
// ];
// tempHoldings.forEach((item)=>{
//     const newHoldings=new HoldinModel({
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//     })
//     newHoldings.save()
// })
// res.send("Done!")
// })

// router.get('/positiosData',(req,res)=>{
//     const tempPositions = [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];

// tempPositions.forEach((item)=>{
//     const newPosition=new PositionModel({
//     product: item.product,
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//     isLoss: item.isLoss,
//     })
//     newPosition.save();
// })
// res.send("done!")
// })


// router.get('/watchlist',(req,res)=>{
//     const watchlist = [
//   {
//     name: "INFY",
//     price: 1555.45,
//     percent: "-1.60%",
//     isDown: true,
//   },
//   {
//     name: "ONGC",
//     price: 116.8,
//     percent: "-0.09%",
//     isDown: true,
//   },
//   {
//     name: "TCS",
//     price: 3194.8,
//     percent: "-0.25%",
//     isDown: true,
//   },
//   {
//     name: "KPITTECH",
//     price: 266.45,
//     percent: "3.54%",
//     isDown: false,
//   },
//   {
//     name: "QUICKHEAL",
//     price: 308.55,
//     percent: "-0.15%",
//     isDown: true,
//   },
//   {
//     name: "WIPRO",
//     price: 577.75,
//     percent: "0.32%",
//     isDown: false,
//   },
//   {
//     name: "M&M",
//     price: 779.8,
//     percent: "-0.01%",
//     isDown: true,
//   },
//   {
//     name: "RELIANCE",
//     price: 2112.4,
//     percent: "1.44%",
//     isDown: false,
//   },
//   {
//     name: "HUL",
//     price: 512.4,
//     percent: "1.04%",
//     isDown: false,
//   },
// ];

// watchlist.forEach((item)=>{
//     const newWatchList=new WatchListModel({
//     name: item.name,
//     price: item.price,
//     percent: item.percent,
//     isDown: item.isDown,
//     })
//     newWatchList.save()
// })
//   res.send("watch d")  
// })

//fatch all data from database
//http://localhost:5000/api/allholdings
router.get('/allholdings',async(req,res)=>{
    const allHoldings=await HoldinModel.find({});
    res.json(allHoldings);
})
//http://localhost:5000/api/allpositions
router.get('/allpositions',async(req,res)=>{
    const allPosition=await PositionModel.find({});
    res.json(allPosition);
})
//http://localhost:5000/api/allwatchlist
router.get('/allwatchlist',async(req,res)=>{
    const allWatchList=await WatchListModel.find({});
    res.json(allWatchList);
})

//http://localhost:5000/api/newOrder
router.post('/newOrder',async(req,res)=>{
    const newOrder=new OrderModel({
     name: req.body.name,
     qty: req.body.qty,
     price:req.body.price,
     mode: req.body.mode,
    })
    const data=await newOrder.save()
    res.json(data)
    res.send("Order saved!")
})
//http://localhost:5000/api/addUsers
router.post('/addUsers',async(req,res)=>{
    try {
    const newUsers=new UserModel({
    user_name:req.body.user_name,
    fullName:req.body.fullName,
    email:req.body.email,
    password:await bcrypt.hash( req.body.password,10),
    mobile:req.body.mobile,
    })
    const newUser=await newUsers.save()
    res.json(newUser);
    } catch (error) {
        if(error.code===11000){
            res.status(400).json({"msg":"User allredy exist!"})
        }else{
            res.status(400).json({"msg":"Internam server Error!!"})
        }
    }
})
//http://localhost:5000/api/login
router.post('/login',async(req,res)=>{
    const {email,password}=req.body
    try {
        const user=await UserModel.findOne({email});
        if(!user){
            return res.status(404).json({"msg":"Email not Found!",'success':false})
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({"msg":"Password not match!",'success':false})
        }
        res.json({"msg":"Login successfuly!","success":true})
    } catch (error) {
        res.status(500).json({"msg":"Internal Error!!"})
    }
})

module.exports=router;