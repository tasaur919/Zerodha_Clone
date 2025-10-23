import React from 'react'
import { Link } from 'react-router-dom'

function Brokerage() {
  return (
    <div className='containner p-5 mt-5 px-10'>
         <hr className='border-zinc-200 mb-6 w-full' />
      <div className="mt-16 row flex flex-col md:flex-row w-full justify-center gap-20 mb-10 px-10">
        <div className='md:w-[66%] w-full'>
         
          <Link to={""}>
          <h3 className='text-blue-500 text-center font-bold text-2xl'>Brokerage calculator</h3>
          </Link>
          <ul className='list-disc md:px-10 mt-8 flex flex-col gap-4'>
            <li>Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.</li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.</li>
            <li> For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).</li>
            <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).</li>
              <li> If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.</li>
          </ul>
        </div>
        <div className='md:w-[33%] w-full'>
          <Link to={''} className='text-blue-500 text-center font-bold text-2xl'>List of charges</Link>
        </div>
      </div>
    </div>
  )
}

export default Brokerage