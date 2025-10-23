import React from 'react'
import { Link } from 'react-router-dom'
import smallcaseLogo from '../../All_Img/images/smallcaseLogo.png'
import zerodhafund from '../../All_Img/images/zerodhaFundhouse.png'
import streaklogo from '../../All_Img/images/streakLogo.png'
import sensibull from '../../All_Img/images/sensibullLogo.svg'
import goldenpi from '../../All_Img/images/goldenpiLogo.png'
import ditto from '../../All_Img/images/dittoLogo.png'

function Universe() {
  return (
    <div className='containner p-5 mt-5 px-10'>
      <div className="row flex flex-col justify-center items-center">
        <hr className='text-zinc-300 border-zinc-200 w-full mb-10' />
        <h1 className='text-3xl font-bold mb-4'>The Zerodha Universe</h1>
        
        <p className='text-zinc-500 mb-8'> Extend your trading and investment experience even further with our
          partner platforms</p>

          <div className='flex flex-row flex-wrap gap-20  md:grid-cols-3 my-8 justify-center items-center lg:px-10'>
            <div className='md:px-10 w-[25%]'>
              <img src={smallcaseLogo} alt="" className='w-[110%]'/>
              <p className='text-zinc-500'>Thematic investment platform</p>
            </div>
            <div className='md:px-10 px-2 w-[25%]'>
              <img src={streaklogo} alt="" className='' />
              <p className='text-zinc-500'>Algo & strategy platform</p>
            </div>
            <div className='md:px-10 px-2 w-[25%]'>
              <img src={sensibull} alt="" className='w-[110%]' />
              <p className='text-zinc-500'>Options trading platform</p>
            </div>
            <div className='md:px-10 px-2 w-[25%]'>
              <img src={zerodhafund} alt="" className=''/>
              <p className='text-zinc-500'>Asset management</p>
            </div>
            <div className='md:px-10 px-2 w-[25%]'>
              <img src={goldenpi} alt="" className='w-[110%]'/>
              <p className='text-zinc-500'>Bonds trading platform</p>
            </div>
            <div className='md:px-10 px-2 w-[25%]'>
              <img src={ditto} alt="" className='w-[80%]'/>
              <p className='text-zinc-500'>ditto</p>
            </div>

          </div>


<button className='md:w-[20%] w-[40%] cursor-pointer bg-blue-500 text-white font-bold rounded py-2 font-serif hover:bg-blue-600 mb-10 mt-10'><Link to={'/signup'}>Signup now</Link></button>
      </div>
    </div>
  )
}

export default Universe