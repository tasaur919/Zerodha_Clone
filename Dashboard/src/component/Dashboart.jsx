import React from 'react'
import  { GeneralContextProvider, useGeneralContext} from './GeneralContext'
import WatchList from './WatchList'
import { Route, Routes } from 'react-router-dom'
import Summary from './Summary'
import Order from './Order'
import Holdings from './Holding'
import Position from './Position'
import Funds from './Funds'
import Apps from './Apps'
import BuyActionWindow from './BuyActionWindow'

function Dashboart() {


  return (
    <div className='flex flex-row gap-1  items-center '>
      <div className='md:w-[40%] hidden md:flex top-22 pl-3 left-0 absolute z-50'>
    <GeneralContextProvider>
      <WatchList/>
      </GeneralContextProvider>
      
    </div>
    {/* <div className='w-[1px] h-[100vh] bg-zinc-200 fixed md:left-[30%] left-0 top-18'></div> */}
    
    <div className='top-24 md:w-[60%] w-full absolute right-0 overflow-y-scroll'>
      
      
      <Routes>
        <Route index element={<Summary/>}/>
        <Route path='order'element={<Order/>}/>
        <Route path='holdings'element={<Holdings/>}/>
        <Route path='position'element={<Position/>}/>
        <Route path='funds'element={<Funds/>}/>
        <Route path='apps'element={<Apps/>}/>
      </Routes>
      
    </div>

    </div>
  )
}

export default Dashboart