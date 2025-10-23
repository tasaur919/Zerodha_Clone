import React from 'react'
//import {holdings} from '../data/data'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { VerticleGraph } from './VerticleGraph'
function Holding() {
 const [allholdings,serAllHoldings]=useState([])
useEffect(()=>{
axios.get('http://localhost:5000/api/allholdings').then((item)=>{
  //console.log(item.data);
  serAllHoldings(item.data)
})
},[])

//for graph
const labels=allholdings.map((subArray)=>subArray['name'])
const data={
  labels,
  datasets:[{
    label:"Stock Price",
    data:allholdings.map((stock)=>stock.price),
    backgroundColor:"rgba(255,99,132,0.5)",
  }]
};

  return (
    <div className='containner py-10 pr-10'>
      <div className="row">
        <h1 className='text-2xl font-semibold mb-10'>Holdings ({allholdings.length})</h1>
        <table className='table-auto border-t border-zinc-300  w-full text-left'>
          <thead>
            <tr>
              <th className="border border-zinc-300 px-4 py-2">Instrument</th>
              <th className="border border-zinc-300 px-4 py-2">Qty.</th>
              <th className="border border-zinc-300 px-4 py-2">Avg. cost</th>
              <th className="border border-zinc-300 px-4 py-2">LTP</th>
              <th className="border border-zinc-300 px-4 py-2">Cur. val</th>
              <th className="border border-zinc-300 px-4 py-2">P&L</th>
              <th className="border border-zinc-300 px-4 py-2">Net chg.</th>
              <th className="border border-zinc-300 px-4 py-2">Day chg.</th>
            </tr>
          </thead>
          {
            allholdings.map((stock,index)=>{
                  const curVal=stock.price*stock.qty;
                  const isProfit=curVal-stock.avg*stock.qty >=0.0;
                 
                  
            return(
          <tbody>
            <tr key={index}  className='border-b border-zinc-300 my-1'>
              <td className=" px-4 py-2">{stock.name}</td>
              <td className=" px-4 py-2">{stock.qty}</td>
              <td className=" px-4 py-2">{stock.avg.toFixed(2)}</td>
              <td className=" px-4 py-2">{stock.price.toFixed(2)}</td>
              <td className=" px-4 py-2">{curVal.toFixed(2)}</td>
              <td className={` px-4 py-2 ${isProfit?'text-green-500':'text-red-500'}`}>{(curVal-stock.avg*stock.qty).toFixed(2)}</td>
              <td className={` px-4 py-2 ${isProfit?'text-green-500':'text-red-500'}`}>{stock.net}</td>
              <td className= {`px-4 py-2 ${stock.isLoss?'text-red-500':'text-green-500'}`}>{stock.day}</td>
            </tr>
            
          </tbody>
             )
             }) 
          }
          
        </table>
      </div>

      <div className="row py-18 flex flex-row justify-between">
        <div className="col1 flex flex-col">
          <h5 className='flex flex-col font-mono text-2xl'>29,875. <span className='text-zinc-500 text-[12px]'>55</span>{' '}</h5>
          <p className='text-zinc-500 pt-8 text-[14px]'>Total investment</p>
        </div>
        <div className="col2 flex flex-col">
          <h5 className='flex flex-col font-mono text-2xl'>31,428.<span className='text-zinc-500 text-[12px]'>95</span>{' '}</h5>
          <p className='text-zinc-500 pt-8 text-[14px]'>Current value</p>
        </div>
        <div className="col3 flex flex-col px-15">
          <h5 className='flex flex-col font-mono text-2xl text-green-500'>1,553.40 (+5.20%)</h5>
          <p className='text-zinc-500 pt-9 text-[14px]'>P&L</p>
        </div>
      </div>
       <VerticleGraph data={data}/>
    </div>
  )
}

export default Holding