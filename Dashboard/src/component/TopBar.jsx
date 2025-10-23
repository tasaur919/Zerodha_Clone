import React, { useState } from "react";
import Menu from "./Menu";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import WatchList from './WatchList'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

function TopBar() {
    const [isOpen,setIsOpen]=useState(false);
    // const [bar,setbar]=useState(false);
    // const BarToggle=()=>{
    //     setbar(!bar)
    // }
    const toggle=()=>{
        setIsOpen(!isOpen);
    }
  return (
    
    <div className="topbar-containner flex flex-row fixed z-50  left-0 top-0">

      <div className="row md:w-[40%]   flex-col   bg-zinc-100 border-zinc-300 px-10 py-5 md:py-3  border-b border-r">
        <div className="hidden md:flex flex-col  w-full  ">
          <div className="flex flex-row justify-between">
        <div className="nifty">
            <p>Nifty 50</p>
            <p>{100.2}</p>
            <p className="percent"></p>
        </div>
        <div className="nifty">
            <p>NECSEX</p>
            <p>{100.2}</p>
            <p className="percent"></p>
        </div>
        </div>
        <div className="md:hidden flex">
        <WatchList/>
        </div>
        </div>
      
      
      <div className="flex md:hidden bg-zinc-100 border-zinc-400 justify-center items-center text-blue-500 ">
        <button className="svgd" onClick={toggle}>{!isOpen?<KeyboardDoubleArrowRightIcon/>:<KeyboardDoubleArrowLeftIcon/>}</button>
      </div>
      {/* for mobile */}
      {isOpen && (
        <div>
            <hr  className="w-full text-zinc-300 mt-5"/>
           <div className="flex flex-col w-[88vw] h-[99vh]   px-10 ">
            <div className="flex flex-row justify-evenly mb-1 ">
        <div className="nifty">
            <p>Nifty 50</p>
            <p>{100.2}</p>
            <p className="percent"></p>
        </div>
        <div className="nifty">
            <p>NECSEX</p>
            <p>{100.2}</p>
            <p className="percent"></p>
        </div>
        </div>
        <WatchList/>
        </div>
          </div>
      )}
      </div>
      
      
      {!isOpen &&(<Menu/>)}

      
    
    </div>
  );
}

export default TopBar;
