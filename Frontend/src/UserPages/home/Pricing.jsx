import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


function Pricing() {
  return (
    <div className='containner p-5 mt-5'>
      <div className="row  px-10 w-full flex flex-col md:flex-row mt-10">
        <div className="left w-full md:w-[40%]">
          <h1 className='text-3xl font-bold mb-10'>Unbeatable pricing</h1>
          <p className='mb-4'> We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.</p>
            <a href="#" className='text-blue-500 '>See Pricing  <ArrowRightAltIcon/></a>

        </div>
        <div className="center w-full md:w-[10%] "></div>
        <div className="right  w-full md:w-[50%] flex flex-col md:flex-row ">
          <div className='border px-13 text-center py-7 flex flex-col justify-between border-zinc-300'>
            <h1 className='text-6xl text-orange-300 mb-5'>₹0</h1>
            <p> Free equity delivery and
                <br />
                direct mutual funds</p>
          </div>
          <div className='border px-13 text-center py-7 flex flex-col justify-between border-zinc-300 '>
            <h1 className='text-6xl text-orange-300 mb-5'>₹20</h1>
            <p className=''> Intraday and F&O</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Pricing