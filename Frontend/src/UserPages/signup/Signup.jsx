import React from "react";
import { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function Signup() {
  const navigate=useNavigate()
  const [isLogin, setIsLogin] = useState(true);
  const [msg,setMsg]=useState(null)
  //Login
  const [login,setLogin]=useState({
    email:'',
    password:''
  })

  const handleChange=(e)=>{
       const {name,value}=e.target
       setLogin({
        ...login,
        [name]:value
       })
  }
  const handleFormSubmitLogin=async()=>{
    const res=await axios.post('http://localhost:5000/api/login',login)
    console.log(res.data.msg);
    setMsg(res.data.msg)
    if(res.data.success){
      
      setTimeout(() =>
        
        navigate('/')
      , 1000);
    }
    else{
      alert(res.data.msg)
    }
    
  }
  //Resister
  const [users,setUsers]=useState({
      user_name:'',
      fullName:'',
      email:'',
      password:'',
      mobile:''
   
  })
  //handle form field
  const handleFormSubmit=async()=>{
    const res=await axios.post('http://localhost:5000/api/addUsers',users)
    console.log(res);
    setMsg(res.data.msg)
    
  }
  //handle onchange field

  const handleChangeField=(e)=>{
     const {name,value}=e.target
     setUsers({
      ...users,
      [name]:value
     })
  }
  const toggle=()=>{
    setIsLogin(!isLogin)
  }
  
  return (
    <div className="overflow-y-scroll mt-22 min-h-screen bg-gray-100 flex justify-center items-center mb-1">
      {isLogin?<>
      <form  onSubmit={handleFormSubmitLogin}>
        <div className="row flex flex-col bg-gray-200  p-10 rounded-lg">
          <h1 className="text-2xl font-bold text-center pb-5">Login Page</h1>
          <div className="pt-2">
            {/* {

              setTimeout(()=>{
                <div>
                  <p>{msg}</p>
                </div>
              },1000)
            } */}
            <p className="py-2">Enter Email:</p>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              placeholder="Email"
              className="w-full outline-none border rounded px-2 border-gray-400"
              required
            />
          </div>
          
          <div className="pt-2">
            <p className="py-2">Enter Password:</p>
            <input
              type="text"
              onChange={handleChange}
              name="password"
              placeholder="password"
              className="w-full outline-none border rounded px-2 border-gray-400"
              required
            />
          </div>
          <div className="pt-4">
            <button className="font-bold bg-green-500 w-full rounded py-1 cursor-pointer text-white hover:bg-green-600">
              Login
            </button>
          </div>
         
          <div className="pt-2">
            <p className="text-[14px]">
              Create yuor Account if not exist:{" "}
              <a href="#" onClick={toggle} className="text-blue-500">
                click here
              </a>
            </p>
          </div>
        </div>
       </form>
</>:<>
      {/* Registration */}
      <form  onSubmit={handleFormSubmit}>
        <div className="row flex flex-col bg-gray-200  p-10 rounded-lg">
          <h1 className="text-2xl font-bold text-center pb-5">Signup Page</h1>
          <div className="pt-2">
            <p className="py-2">Enter user Name:</p>
            <input
              type="text"
              name="user_name"
              onChange={handleChangeField}
              placeholder="userName"
              className="w-full outline-none border rounded px-2 border-gray-400"
              required
            />
          </div>
          <div className="pt-2">
            <p className="py-2">Enter FullName:</p>
            <input
              type="text"
              onChange={handleChangeField}
              name="fullName"
              placeholder="FullName"
              className="w-full outline-none border rounded px-2 border-gray-400"
              required
            />
          </div>
          <div className="pt-2">
            <p className="py-2">Enter Email:</p>
            <input
              type="text"
              onChange={handleChangeField}
              name="email"
              placeholder="Email"
              className="w-full outline-none border rounded px-2 border-gray-400"
              required
            />
          </div>
          <div className="pt-2">
            <p className="py-2">Enter Password:</p>
            <input
              type="text"
              onChange={handleChangeField}
              name="password"
              placeholder="Password"
              className="w-full outline-none border rounded px-2 border-gray-400"
              required
            />
          </div>
          <div className="pt-2">
            <p className="py-2">Enter Phone No.:</p>
            <input
              type="text"
              onChange={handleChangeField}
              name="mobile"
              placeholder="Mobile number"
              className="w-full outline-none border rounded px-2 border-gray-400"
              
            />
          </div>

          <div className="pt-4">
            <button className="font-bold bg-green-500 w-full rounded py-1 cursor-pointer text-white hover:bg-green-600">
              Register
            </button>
          </div>
          <div className="pt-2">
            <p className="text-[14px]">
              Login here if you have an Account:{" "}
              <a href="#" onClick={toggle} className="text-blue-500">
                click here
              </a>
            </p>
          </div>
        </div>
      </form>
      </>}
      
    </div>
  );
}

export default Signup;
