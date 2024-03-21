import React from 'react'
import back from '../assets/back3.jpg';
import {Link} from 'react-router-dom'



 const Getstarted = () => {
  return (
    
    <section3>
      <div className='md:w-full md:h-full'>
    <div className='overlay'></div>
      
        <img  className='md:h-[700px] md:w-full object-cover' src={back}/>
        <div  className='content'>
          <h1 className='font1 text-6xl'>
          Kaira Academy
          </h1>
          <div className='flex w-full align-middle justify-center space-x-5 py-5'>
            <button className='w-[180px] h-[40px] bg-black space-x-5 hover:bg-white hover:text-black rounded'>
        <Link to="/getstarted/login">Login</Link></button>
        <button className='w-[180px] h-[40px] bg-black space-x-5 hover:bg-white hover:text-black rounded'>
        <Link to="/getstarted/signup">SignUp</Link></button></div>
      </div>
    </div>
    <div></div>
    </section3>



  )
}
export default Getstarted;
