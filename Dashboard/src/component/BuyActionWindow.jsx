import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom'
import GeneralContext from "./GeneralContext";
import { useContext } from "react";
import axios from 'axios'
function BuyActionWindow({uid}) {
  const [stockQyt,setStockQyt]=useState(1)
  const [stockPrice,setStockPrice]=useState(0.0)
 const generalContext=useContext(GeneralContext);
  const handleBuyClick=async(req,res)=>{
   
     try {
      await axios.post("http://localhost:5000/api/newOrder", {
      name: uid,
      qty: stockQyt,
      price: stockPrice,
      mode: "Buy",
     });
    generalContext.closeBuyWindow();
     } catch (error) {
      console.log(error);
      
     }
    };


    const handleCancelClick = () => {
      generalContext.closeBuyWindow();
  };
  return (
    <div className="container z-100 absolute left-100 top-70 w-full  bg-gray-200 px-10 rounded" id="buy-window" draggable="true">
      <div className="regular pt-10">
        <div className="inputs">
          <fieldset className="border pl-2 rounded border-gray-300">
            <legend>Qty.</legend>
            <input type="number" className="outline-none w-full" name="qty" id="qty" onChange={(e)=>setStockQyt(e.target.value)} value={stockQyt}/>
          </fieldset>
          <fieldset className="border pl-2 rounded border-gray-300">
            <legend>Price</legend>
            <input type="number" className="outline-none w-full" name="price" id="price" step="0.05" onChange={(e)=>
              
              setStockPrice(e.target.value)} value={stockPrice}/>
          </fieldset>
        </div>
      </div>

      <div className="buttons flex flex-col py-5 pb-5 justify-around items-center">
        <span>Margin required ₹140.65</span>
        <div className="flex flex-row gap-10 py-2 items-center justify-between">
          <Link className="btn px-2 py-1  w-[80px] text-center hover:bg-blue-600 bg-blue-500 text-white rounded-md cursor-pointer" onClick={handleBuyClick}>Buy</Link>
          <Link className="btn px-2 py-1 w-[80px] text-center hover:bg-gray-700 bg-gray-500 text-white rounded-md cursor-pointer" onClick={handleCancelClick}>Cancel</Link>
        </div>
      </div>
    </div>
  );
}

export default BuyActionWindow;
