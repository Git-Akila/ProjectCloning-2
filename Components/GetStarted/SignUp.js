import React from 'react'
import broad1 from '../assets/back1.jpeg'
import {Link} from 'react-router-dom';
export const SignUp = () => {
  return (
    <div className='w-full h-screen flex gap-4 items-start'>
        <div className='relative w-1/2 h-full flex-col'>
            <div className='absolute top-[25%] left-[10%] mt-5 flext flex-col py-48 justify-center'>
                <h1 className='text-4xl text-black font-bold px-48'>Kairaa Academy</h1>
                <p className='text-2xl text-black font-bold px-52 '>Start your career</p>
            </div>
            <img src={broad1} className='h-full w-full object-contain mt-5 ' alt=""/>
        </div>
        <div className='w-1/2  h-full mt-12  bg-slate-100 flex flex-col p-20 justify-between'>
        <div className='w-full py-4 h-full  flex flex-col'>
            <h3 className='text-2xl font-semibold mb-3 py-5'>SignUp</h3>
            <p>Welcome Back! Please Enter your details.</p>
        </div>
        <div className='w-full flex flex-col'>
        <input type="name" placeholder='Enter your name'
            className='w-full my-4 text-black py-4  border-black outline-none focus:outline-none'/>
            <input type="email" placeholder='Enter your mail'
            className='w-full my-4 text-black py-4  border-black outline-none focus:outline-none'/>
            <input type="password" placeholder='Enter your Password'
            className='w-full my-4 text-black py-4  border-black outline-none focus:outline-none'/>
            <div className='flex justify-between'>
               <Link to="/"><button className='w-[180px] h-[50px] bg-teal-300 rounded text-black hover:bg-slate-50 hover:text-black'>LOGIN</button></Link> 
               <Link to="/"><button className='w-[180px] h-[50px] bg-teal-300 rounded text-black hover:bg-slate-50 hover:text-black'>SIGNUP</button></Link>
            </div>
        </div>
        <div className='w-full items-center justify-center'>
            <p> Can't Remember Password? <a className='border-l-blue-200'href="http://kairaablockchainacademy.com/account/forgot">Forget</a>Password.</p>
        </div></div>
    </div>
  )
}

export default SignUp;
