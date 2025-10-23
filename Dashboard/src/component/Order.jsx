import React from 'react'
import { Link } from 'react-router-dom'

function Order() {
  return (
    <div className='containner'>
      <div className="row flex flex-col justify-center items-center pt-18">
        <p className='text-zinc-500'>You haven't placed any orders today</p>
        <Link to={'/'} className='text-white bg-blue-500 py-1 px-4 rounded mt-6 cursor-pointer hover:bg-blue-700'>Get started</Link>
      </div>

    </div>
  )
}

export default Order