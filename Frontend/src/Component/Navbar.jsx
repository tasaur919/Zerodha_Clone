import React, { useEffect, useRef, useState } from 'react'
import logo from '../All_Img/images/logo.svg'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
  const [isOpen,setIsOpen]=useState(false);
  const toggle=()=>{
    setIsOpen(!isOpen)
  }
  const menuRef=useRef();
  useEffect(()=>{
    const handleClickOutside=( event)=>{
      if(menuRef.current && !menuRef.current.contains(event.target)){

        setIsOpen(false)
      }
    }
    if(isOpen){
      document.addEventListener("mousedown",handleClickOutside)
    }else{
      document.addEventListener("mousedown",handleClickOutside)

    }
    return ()=>{
      document.addEventListener("mousedown",handleClickOutside)

    }
  },[isOpen])
  return (
    <>
      <div className="containner">
        <div className="row w-full  left-0 top-0 fixed z-50">
          <nav className='flex flex-row justify-evenly items-center w-full bg-zinc-100 px-10  py-5'>
            <Link to={'/'}><img src={logo} alt="" className='md:w-[40%] w-[50%]' /></Link>
            <div className=' hidden md:flex flex-row justify-evenly items-center gap-5 md:text-[20px]'>
              <Link to={"/signup"} className='hover:text-blue-500'>Signup</Link>
              <Link to={'/about'} className='hover:text-blue-500'>About</Link>
              <Link to={'/products'} className='hover:text-blue-500'>Products</Link>
              <Link to={'/pricing'} className='hover:text-blue-500'>Pricing</Link>
              <Link to={'/support'} className='hover:text-blue-500'>Support</Link>
              {/* <a href="https://zerodhaclone1234.netlify.app" className='hover:text-blue-500'>Dashboard</a> */}
              <Link to="https://zerodhaclone1234.netlify.app" className='hover:text-blue-500'>Dashboard</Link>
              </div>
             <button className='md:hidden flex' onClick={toggle}><MenuIcon /></button>
          </nav>
          {/* for mobile */}
          {isOpen && (
            <div ref={menuRef} className='mt-0 px-10 flex gap-10 justify-between w-[50%] bg-blue-100 h-[100vh]'>
              
            <ul className='flex flex-col gap-8 py-5'>
              <Link to={"/signup"} className='hover:text-blue-500' onClick={()=>setIsOpen(false)}>Signup</Link>
              <Link to={'/about'} className='hover:text-blue-500' onClick={()=>setIsOpen(false)}>About</Link>
              <Link to={'/products'} className='hover:text-blue-500' onClick={()=>setIsOpen(false)}>Products</Link>
              <Link to={'/pricing'} className='hover:text-blue-500' onClick={()=>setIsOpen(false)}>Pricing</Link>
              <Link to={'/support'} className='hover:text-blue-500' onClick={()=>setIsOpen(false)}>Support</Link>
              {/* <a href="https://zerodhaclone1234.netlify.app" className='hover:text-blue-500'>Dashboard</a> */}
              <Link to="https://zerodhaclone1234.netlify.app" className='hover:text-blue-500'>Dashboard</Link>
            </ul>
            <button className='text-5xl flex  pt-5' onClick={toggle}> <CloseIcon  className='text-7xl'/></button>
          </div>
          )}
        </div>
      </div>

    </>
  )
}

export default Navbar