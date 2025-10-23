import React from 'react'
import appstoreDadge from '../../All_Img/images/appstoreBadge.svg'
import googlePlayBadge from '../../All_Img/images/googlePlayBadge.svg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';

function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
  return (
    <div className='containner p-5 mt-5 px-10'>
            <div className="row flex flex-col md:flex-row w-full gap-12 justify-center items-center">
              <div className="left md:w-[50%] w-full">
                <img src={imageURL} alt="" className='w-[90%]'/>
              </div>
              <div className="right md:w-[50%] w-full flex flex-col gap-4">
                <h1 className='text-3xl font-bold'>{productName}</h1>
                <p>{productDescription}</p>
                <div className='text-blue-500 flex flex-row gap-20 mt-4'>
                  <Link to={tryDemo}>tryDemo<ArrowRightAltIcon/></Link>
                  <Link to={learnMore}>Learn More<ArrowRightAltIcon/></Link>
                </div>
                <div className='flex flex-row gap-12 text-4xl mt-3'>
                  <Link to={googlePlay}><img src={googlePlayBadge} alt="" /></Link>
                  <Link to={appStore}><img src={appstoreDadge} alt="" /></Link>
                </div>
              </div>
            </div>
    </div>
  )
}

export default LeftSection