import React from 'react'
import { positions} from '../data/data'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
function Position() {
  const [positions,setPositions]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000/api/allPositions')
  })
  return (
    <div className='containner py-10 pr-10'>
      <div className="row">
        <h1 className='text-2xl font-semibold mb-10'>Positions ({positions.length})</h1>
        <table className='table-auto border-t border-zinc-300  w-full text-left'>
          <thead>
            <tr>
              <th className="border border-zinc-300 px-4 py-2">Product</th>
              <th className="border border-zinc-300 px-4 py-2">Instrument</th>
              <th className="border border-zinc-300 px-4 py-2">Qty.</th>
              <th className="border border-zinc-300 px-4 py-2">Avg. cost</th>
              <th className="border border-zinc-300 px-4 py-2">LTP</th>
              
              <th className="border border-zinc-300 px-4 py-2">P&L</th>
              <th className="border border-zinc-300 px-4 py-2">Chg.</th>
              
            </tr>
          </thead>
          {
            positions.map((stock,index)=>{
                  const curVal=stock.price*stock.qty;
                  const isProfit=curVal-stock.avg*stock.qty >=0.0;
                  
            return(
          <tbody>
            <tr key={index}  className='border-b border-zinc-300 my-1'>
              <td className=" px-4 py-2">{stock.product}</td>
              <td className=" px-4 py-2">{stock.name}</td>
              <td className=" px-4 py-2">{stock.qty}</td>
              <td className=" px-4 py-2">{stock.avg.toFixed(2)}</td>
              <td className=" px-4 py-2">{stock.price.toFixed(2)}</td>
             
              <td className={` px-4 py-2 ${isProfit?'text-green-500':'text-red-500'}`}>{(curVal-stock.avg*stock.qty).toFixed(2)}</td>
              <td className={` px-4 py-2 ${stock.isLoss?'text-red-500':'text-green-500'}`}>{stock.day}</td>
              
            </tr>
            
          </tbody>
             )
             }) 
          }
          
        </table>
      </div>

      

    </div>
  )
}

export default Position