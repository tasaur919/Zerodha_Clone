import React, { useState } from 'react'
import { watchlist } from '../data/data'
import { Tooltip,Grow} from '@mui/material'
import {BarChartOutlined, KeyboardArrowDown,KeyboardArrowUp, MoreHoriz} from "@mui/icons-material";
import { useContext } from 'react';
import GeneralContext, { useGeneralContext } from './GeneralContext';

import { DoughnutChart } from './DoughnutChart';
function WatchList() {
// const {isBuyWindowOpen,selectedStockUID}=useGeneralContext()
//For DoughnutChart
const labels=watchlist.map((subArray)=>subArray["name"]);
const data={
  labels,
  datasets:[
    {
      label:"Price",
      data:watchlist.map((stock)=>stock.price),
       backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    }
  ]
}
// export const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
      // backgroundColor: [
      //   'rgba(255, 99, 132, 0.2)',
      //   'rgba(54, 162, 235, 0.2)',
      //   'rgba(255, 206, 86, 0.2)',
      //   'rgba(75, 192, 192, 0.2)',
      //   'rgba(153, 102, 255, 0.2)',
      //   'rgba(255, 159, 64, 0.2)',
      // ],
      // borderColor: [
      //   'rgba(255, 99, 132, 1)',
      //   'rgba(54, 162, 235, 1)',
      //   'rgba(255, 206, 86, 1)',
      //   'rgba(75, 192, 192, 1)',
      //   'rgba(153, 102, 255, 1)',
      //   'rgba(255, 159, 64, 1)',
      // ],
      // borderWidth: 1,
//     },
//   ],
// };
  return (
    <div className='containner'>
     <div className="row ">
       <div className="search-container flex flex-row justify-between md:pt-2 pt-20 gap-18 items-center w-full">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search border rounded border-zinc-300 pl-2 py-1"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>
      <hr  className='text-zinc-300 md:w-[70%] lg:w-[130%]  mt-3'/>

      
        <ul>
          {watchlist.map((stock,index)=>{
           return( 
           <WatchListItem stock={stock} key={index}/>
          )
          })}
        </ul>
        
            
      
     </div>
     <DoughnutChart data={data}/>
    </div>
  )
}

export default WatchList

const  WatchListItem=({stock,index})=>{
const [showWatchList,setShowWatchList]=useState(false)
const handleMouseEnter=(e)=>{
  setShowWatchList(true)
}

const handleMouseExit=(e)=>{
  setShowWatchList(false)
}
return(
  <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} className='border-b border-zinc-300 lg:w-[125%] md:w-[110%] w-full py-2'>
<div className='item flex flex-row justify-between items-center'>
<p className={`${stock.isDown?'text-red-500':'text-green-500'}`}>{stock.name}</p>
<div className='flex flex-row justify-evenly gap-2'>
  <span>{stock.percent}</span>
  {stock.isDown?(
    <KeyboardArrowDown className={`text-red-500`}/>):(<KeyboardArrowUp className={`text-red-500`}/>
  )}
  <span>{stock.price}</span>
</div>
</div>
{showWatchList&&<WatchListAction uid={stock.name}/>}
  </li>
)

}

const WatchListAction=({uid})=>{
  const generalContext=useContext(GeneralContext)
  const handleBuyClick=()=>{
    generalContext.openBuyWindow(uid)
  }
  return(
    <span>
      <span className='pl-20 flex flex-row gap-2'>
        <Tooltip TransitionComponent={Grow} arrow title="Buy (B)" placement='top' onClick={
          
          handleBuyClick
        }>
          <button className='bg-green-500 text-white px-4 rounded hover:bg-green-700'>Buy</button>
        </Tooltip>
        <Tooltip TransitionComponent={Grow} arrow title="Sell (S)" placement='top'>
          <button className='bg-red-500 text-white px-4 rounded hover:bg-red-700'>Sell</button>
        </Tooltip>
        <Tooltip TransitionComponent={Grow} arrow title="Graph (G)" placement='top'>
          <button className='bg-blue-500 text-white px-4 rounded hover:bg-blue-700'><BarChartOutlined/></button>
        </Tooltip>
        <Tooltip TransitionComponent={Grow} arrow title="More" placement='top'>
          <button className='bg-zinc-300 text-black px-4 rounded hover:bg-zinc-500 hover:text-white'><MoreHoriz/></button>
        </Tooltip>
      </span>
    </span>
  )
}