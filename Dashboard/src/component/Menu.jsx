import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import user from '../assets/user.jpg'
function Menu() {
    const [isOpen,setIsOpen]=useState(false)
    const toggle=()=>{
        setIsOpen(!isOpen);
    }
   const menuRef=useRef();
    useEffect(()=>{
        const handleOnclickOutside=(event)=>{
            if(menuRef.current && !menuRef.current.contains(event.target)){
                setIsOpen(false)
            }
        }
        if(isOpen){
      document.addEventListener("mousedown",handleOnclickOutside)
    }else{
      document.addEventListener("mousedown",handleOnclickOutside)

    }
    return ()=>{
      document.addEventListener("mousedown",handleOnclickOutside)

    }

    },[isOpen])

  return (
    
    <div className="containner w-full ">
      <div className="row py-2 flex flex-row justify-between pl-6 pr-12 items-center bg-zinc-100 border-r border-b border-zinc-300 w-full">
        <div className="flex justify-center items-center py-4">
         <Link to={'/dashboard'}> <img src={user} alt="logo" className="md:w-[7%] md:h-[6%] h-[40%] w-[30%] rounded-full" /></Link>
        </div>
        <div className="menu hidden md:flex ">
          <ul className="flex flex-row gap-3 md:text-[90%] font-bold text-zinc-500 ">
            <li className="hover:text-blue-500">
              <Link to={'/dashboard'}>Dashboard</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to={'/dashboard/order'}>Orders</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to={'/dashboard/holdings'}>Holdings</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to={'/dashboard/position'}>Positions</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to={'/dashboard/funds'}>Funds</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to={'/dashboard/apps'}>Apps</Link>
            </li>
            <span className="text-zinc-400">|</span>
            <li className="hover:text-blue-500">
              <Link to={''}>icon User</Link>
            </li>
          </ul>
        </div>

        <div className="hamburger md:hidden flex">
            <li className="hover:text-blue-500 mr-4 list-none">
              <Link to={''}>icon User</Link>
            </li>
          <button onClick={toggle}>
             {isOpen?<MenuIcon />:<MenuIcon />}
          </button>
        </div>
       

      </div>
      

    
    {/* for mobile */}
       {isOpen && (
          
          <ul ref={menuRef}  className="flex flex-col mt-0 gap-3 px-10  absolute right-0 pt-8 rounded-br-md h-[99vh] text-[18px] font-bold bg-zinc-100">
            <li className="hover:text-blue-500" onClick={()=>setIsOpen(false)}>
              <Link to={'/dashboard'}>Dashboard</Link>
            </li>
            <li className="hover:text-blue-500" onClick={()=>setIsOpen(false)}>
              <Link to={'/dashboard/order'}>Orders</Link>
            </li>
            <li className="hover:text-blue-500" onClick={()=>setIsOpen(false)}>
              <Link to={'/dashboard/holdings'}>Holdings</Link>
            </li>
            <li className="hover:text-blue-500" onClick={()=>setIsOpen(false)}>
              <Link to={'/dashboard/position'}>Positions</Link>
            </li>
            <li className="hover:text-blue-500" onClick={()=>setIsOpen(false)}>
              <Link to={'/dashboard/funds'}>Funds</Link>
            </li>
            <li className="hover:text-blue-500" onClick={()=>setIsOpen(false)}>
              <Link to={'/dashboard/apps'}>Apps</Link>
            </li>
            
            
          </ul>   
)}
    </div>
  );
}

export default Menu;
