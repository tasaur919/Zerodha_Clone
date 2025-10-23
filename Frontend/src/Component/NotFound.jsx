import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='containner p-5  mb-5 mt-22 h-[70vh]'>
      <div className="row text-center items-center flex flex-col justify-center mt-10 px-10">
        <h1 className='font-bold text-3xl  font-serif'>404, Page Not Fount</h1>
        <p className='mt-5 font-serif'> Sorry, the page you are loking for does not exist.</p>
        <Link to={'/'} className='text-blue-500 mt-2 hover:underline'>Go to Home</Link>
      </div>
    </div>
  )
}

export default NotFound