import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PanoramaFishEyeSharpIcon from '@mui/icons-material/PanoramaFishEyeSharp';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import DataUsageOutlinedIcon from '@mui/icons-material/DataUsageOutlined';
import AddchartOutlinedIcon from '@mui/icons-material/AddchartOutlined';
import { Link } from 'react-router-dom';

function CreateTicket() {
  return (
    <div className='containner p-5 mt-5 px-10'>
    <div className="row flex flex-col gap-10 px-10 justify-center items-center w-full ">
      <h1 className='text-4xl font-bold my-8'>To create a ticket, select a relevant topic</h1>
      <div className="three flex md:flex-row w-full flex-wrap justify-evenly gap-x-1">
        <div className="col1 md:w-[33%] mb-5 md:mb-0">
          <h4 className='text-2xl mb-6 flex flex-row gap-2 font-mono'><AddCircleIcon/><span>Account Opening</span></h4>
          <ul className='list-disc flex flex-col text-blue-500 gap-3'>
            <li>
              <Link to={''}> Online Account Opening</Link>
            </li>
            <li>
              <Link to={''}> Offline Account Opening</Link>
            </li>
            <li>
              <Link to={''}>Company, Partnership and HUF Account</Link>
            </li>
            <li>
              <Link to={''}>Opening</Link>
            </li>
            <li>
              <Link to={''}>NRI Account Opening</Link>
            </li>
            <li>
              <Link to={''}>Zerodha IDFC FIRST Bank 3-in-1 Account</Link>
            </li>
            <li>
              <Link to={''}>Getting Started</Link>
            </li>
          </ul>
        </div>

        <div className="col1 md:w-[33%] mb-5 md:mb-0">
          <h4 className='text-2xl mb-6 flex flex-row gap-2 font-mono'><PermIdentityIcon/><span>Your Zerodha Account</span></h4>
          <ul className='list-disc flex flex-col text-blue-500 gap-3'>
            <li>
              <Link to={''}>Login Credentials</Link>
            </li>
            <li>
              <Link to={''}>Account modification and Segment Addition</Link>
            </li>
            <li>
              <Link to={''}>DP ID and bank details</Link>
            </li>
            <li>
              <Link to={''}>Your Profile</Link>
            </li>
            <li>
              <Link to={''}>Transfer and conversion of shares</Link>
            </li>
            
          </ul>
        </div>

<div className="col1 md:w-[33%] mb-5 md:mb-0">
          <h4 className='text-2xl mb-6 flex flex-row gap-2 font-mono'><AddchartOutlinedIcon/><span>Your Zerodha Account</span></h4>
          <ul className='list-disc flex flex-col text-blue-500 gap-3'>
            <li>
              <Link to={''}> Margin/leverage, Product and Order types</Link>
            </li>
            <li>
              <Link to={''}> Kite web and Modile</Link>
            </li>
            <li>
              <Link to={''}>Trading FAQs</Link>
            </li>
            <li>
              <Link to={''}>Corporate Actions</Link>
            </li>
            <li>
              <Link to={''}>Sentinel</Link>
            </li>
            <li>
              <Link to={''}>Kite API</Link>
            </li>
            <li>
              <Link to={''}>Pi and Other Platform</Link>
            </li>
            <li>
              <Link to={''}>Stockreport</Link>
            </li>
          </ul>
        </div>

        <div className="col1 md:w-[33%] w-full md:mt-8 mb-5 md:mb-0">
          <h4 className='text-2xl mb-6 flex flex-row gap-2 font-mono'><DomainAddIcon/><span>Funds</span></h4>
          <ul className='list-disc flex flex-col text-blue-500 gap-3'>
            <li>
              <Link to={''}>Adding Funds</Link>
            </li>
            <li>
              <Link to={''}>Fund Withdrawal</Link>
            </li>
            <li>
              <Link to={''}>eMandates</Link>
            </li>
            <li>
              <Link to={''}>Adding Bank Accounts</Link>
            </li>
          </ul>
        </div>

<div className="col1 md:w-[33%] w-full md:mt-8 mb-5 md:mb-0">
          <h4 className='text-2xl mb-6 flex flex-row gap-2 font-mono'><DataUsageOutlinedIcon/><span>Console</span></h4>
          <ul className='list-disc flex flex-col text-blue-500 gap-3'>
            <li>
              <Link to={''}> Reports </Link>
            </li>
            <li>
              <Link to={''}> Ledger</Link>
            </li>
            <li>
              <Link to={''}>Portfolio</Link>
            </li>
            <li>
              <Link to={''}>60 Day challenge</Link>
            </li>
            <li>
              <Link to={''}>IPO</Link>
            </li>
            <li>
              <Link to={''}>Kite API</Link>
            </li>
            
          </ul>
        </div>

<div className="col1 md:w-[33%] w-full md:mt-8 mb-5 md:mb-0">
          <h4 className='text-2xl mb-6 flex flex-row gap-2 font-mono'><PanoramaFishEyeSharpIcon/><span>Coin</span></h4>
          <ul className='list-disc flex flex-col text-blue-500 gap-3'>
            <li>
              <Link to={''}> Understanding mutual Funds</Link>
            </li>
            <li>
              <Link to={''}> About Coin</Link>
            </li>
            <li>
              <Link to={''}>Buying and Selling the coin</Link>
            </li>
            <li>
              <Link to={''}>Starting an SIP</Link>
            </li>
            <li>
              <Link to={''}>Managing your Portfolio</Link>
            </li>
            <li>
              <Link to={''}>Coin App</Link>
            </li>
            
          </ul>
        </div>

        
      </div>
    </div>
    </div>
  )
}

export default CreateTicket