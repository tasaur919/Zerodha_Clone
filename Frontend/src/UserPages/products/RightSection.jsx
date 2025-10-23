import React from 'react'
import { Link } from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function RightSection({imageURL,productName,productDescription,learnMore}) {
  return (
    <div>
      <div className='containner p-5 mt-5 px-10'>
            <div className="row flex flex-col md:flex-row w-full gap-12 justify-center items-center">
              
              <div className="left md:w-[50%] w-full flex flex-col gap-4">
                <h1 className='text-3xl font-bold'>{productName}</h1>
                <p>{productDescription}</p>
                <div className='text-blue-500 flex flex-row gap-20 mt-4'>
                  <Link to={learnMore}>Learn More<ArrowRightAltIcon/></Link>
                </div>
                
              </div>
              <div className="right md:w-[50%] w-full">
                <img src={imageURL} alt="" />
              </div>
            </div>
    </div>
    </div>
  )
}

export default RightSection