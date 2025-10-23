import React from 'react'
import { Link } from 'react-router-dom'

function OpenAcount() {
  return (
    <div className='containner p-5  mb-5'>
      <div className="row text-center items-center flex flex-col justify-center mt-10 px-10">
        <h1 className='font-bold text-3xl  font-serif'>Open a Zerodha account</h1>
        <p className='mt-5 font-serif'> Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.</p>
        <button className='md:w-[20%] w-[40%] cursor-pointer bg-blue-500 text-white font-bold rounded py-2 mt-4 font-serif hover:bg-blue-600 mb-10'><Link to={'/signup'}>Signup now</Link></button>
      </div>
    </div>
  )
}

export default OpenAcount