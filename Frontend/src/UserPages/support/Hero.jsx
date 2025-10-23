import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='containner w-full bg-blue-500 border text-white p-5 px-32'>
      <div className="row flex flex-col md:flex-row gap-10 px-20 justify-evenly ">
              <div className="left md:w-[50%] w-full">
                <h3 className='text-2xl font-mono mb-10'>Support Portal</h3>
                <div>
                  <h3 className='text-[16px]'>Search for an answer or brouse help topics to create a ticket</h3>
                  <input type="text" placeholder='Ex. how do i activate F&Q, why is my order getting Reject' className='px-5 bg-zinc-300 rounded py-3 w-full text-black my-3' />
                 <div className='flex flex-row flex-wrap underline gap-5'>
                   <Link to={''}>Track account opening</Link>
                  <Link to={''}>Track segment activation</Link>
                  <Link to={''}>Intraday margin</Link>
                  <Link to={''}>Kite user mutual</Link>
                 </div>
                </div>
              </div>
              <div className="right md:w-[50%] w-full ml-10">
                <h3 className='text-2xl font-mono mb-10'>Track Tickets</h3>
                <div>
                  <h3 className='text-[18px] font-mono mb-2'>Featured</h3>
                  
                 <div className='flex flex-row flex-wrap underline gap-5'>
                   <Link to={''}>1. Currunt Takeovers and Delisting -January 2025</Link>
                  <Link to={''}>2. Latest Intraday leverages-MIS & CO</Link>
                  
                 </div>
                </div>
              </div>
      </div>
    </div>
  )
}

export default Hero