import React from 'react'

import './Courses.css' 
import {Link} from 'react-router-dom'
import { MdDoubleArrow } from "react-icons/md";
import { FaCirclePlay } from "react-icons/fa6";
import { BsFileEarmarkBarGraph } from "react-icons/bs";


import Forback from '../assets/forback5.jpeg'
import couch from '../assets/coach-list0.jpg'
import couch1 from '../assets/coach-list1.jpg'
import couch3 from '../assets/coach-list2.jpg'
import couch4 from '../assets/coach-list3.jpg'
import couch5 from '../assets/coach-list4.jpg'
import couch6 from '../assets/coach-list5.jpg'
import couch7 from '../assets/coach-list6.jpg'

 const Courses = () => {
    return (
      <section className='w-full h-full'>
        <div className='md:w-full md:h-full'>
        <div className='overlay'></div>
          
            <img  className='md:h-[700px] md:w-full object-cover' src={Forback}/>
            <div  className='content'>
              <h1 className='font1 text-6xl'>
              Exclusive Courses
              </h1>
              <div className='flex w-full align-middle justify-center py-5'>
            <Link to="/">Home</Link><MdDoubleArrow size={20}/><p className='border-b-2 border-b-red-200'>Courses</p></div>
          </div>
        </div>
        <div>
          
        </div>
        {/*--------------------------------------------------------------------------------------------------------------*/}
        <div className='flex flex-row  w-full px-24 py-24 space-x-7'>
        <div className='div flex w-[900px] h-[240px] border-2 rounded p-3'>
          <div className='1/2 p-4'>
            <img src={couch} alt=""/>
          </div>
          <div className='w-3/4 p-4'>
            <h1 className='text-[20px] font-semibold'>Blockchain Developer Roadmap</h1>
            <div className='flex space-x-3 py-3'><FaCirclePlay /><p>1 hour</p></div>
            <div className='flex space-x-3 py-3'><BsFileEarmarkBarGraph /><p>5 Modules</p></div>
            <div className='space-x-5'>
              <button className='w-[80px] h-[30px] bg-green-500 text-white hover:bg-black rounded'>Buy Now</button>
              <button className='w-[70px] h-[30px] bg-green-500 text-white hover:bg-black rounded'>Free</button>
            </div>
          </div>
        </div>
        <div className='div flex w-[900px] h-[240px] border-2 rounded p-3'>
        <div className='1/2 p-4'>
          <img src={couch1} alt=""/>
        </div>
        <div className='w-3/4 p-4'>
          <h1 className='text-[20px] font-semibold'>Became A Blockchain Developer</h1>
          <div className='flex space-x-3 py-3'><FaCirclePlay /><p>1 hour</p></div>
          <div className='flex space-x-3 py-3'><BsFileEarmarkBarGraph /><p>5 Modules</p></div>
          <div className='space-x-5'>
            <button className='w-[80px] h-[30px] bg-green-500 text-white hover:bg-black rounded'>Buy Now</button>
            <button className='w-[70px] h-[30px] bg-green-500 text-white hover:bg-black rounded'>Free</button>
          </div>
        </div>
      </div>
      </div>

      {/*---------------------------------------------------------------------------------------------------------*/}


      <div className='flex flex-row  w-full px-24  space-x-7'>
      <div className='div flex w-[900px] h-[240px] border-2 rounded p-3'>
        <div className='1/2 p-4'>
          <img src={couch3} alt=""/>
        </div>
        <div className='w-3/4 p-4'>
          <h1 className='text-[20px] font-semibold'>Blockchain Developer Fundamental</h1>
          <div className='flex space-x-3 py-3'><FaCirclePlay /><p>1 hour</p></div>
          <div className='flex space-x-3 py-3'><BsFileEarmarkBarGraph /><p>5 Modules</p></div>
          <div className='space-x-5'>
            <button className='w-[80px] h-[30px] bg-green-500 text-white hover:bg-black rounded'>Buy Now</button>
            <button className='w-[70px] h-[30px] bg-green-500 text-white hover:bg-black rounded'>$9999</button>
          </div>
        </div>
      </div>

      {/*--------------------------------*/}
      <div className='div flex w-[900px] h-[240px] border-2 rounded p-3'>
        <div className='1/2 p-4'>
          <img src={couch4} alt=""/>
        </div>
        <div className='w-3/4 p-4'>
          <h1 className='text-[20px] font-semibold'>Blockchain Developer Professional</h1>
          <div className='flex space-x-3 py-3'><FaCirclePlay /><p>1 hour</p></div>
          <div className='flex space-x-3 py-3'><BsFileEarmarkBarGraph /><p>5 Modules</p></div>
          <div className='space-x-5'>
            <button className='w-[80px] h-[30px] bg-green-500 text-white hover:bg-black rounded'>Buy Now</button>
            <button className='w-[70px] h-[30px] bg-green-500 text-white hover:bg-black rounded'>$9999</button>
          </div>
        </div>
      </div>
      </div>

{/*--------------------------------------------------------------------------------*/}

<div className='flex flex-row  w-full px-24 py-24 space-x-7'>
      <div className='div flex w-[900px] h-[240px] border-2 rounded p-3'>
        <div className='1/2 p-4'>
          <img src={couch5} alt=""/>
        </div>
        <div className='w-3/4 p-4'>
          <h1 className='text-[20px] font-semibold'>Blockchain Developer Expert</h1>
          <div className='flex space-x-3 py-3'><FaCirclePlay /><p>1 hour</p></div>
          <div className='flex space-x-3 py-3'><BsFileEarmarkBarGraph /><p>5 Modules</p></div>
          <div className='space-x-5'>
            <button className='w-[80px] h-[30px] bg-green-500 text-white hover:bg-black rounded'>Buy Now</button>
            <button className='w-[70px] h-[30px] bg-green-500 text-white hover:bg-black rounded'>$8999</button>
          </div>
        </div>
      </div>

      {/*--------------------------------*/}
      <div className='div flex w-[900px] h-[240px] border-2 rounded p-3'>
        <div className='1/2 p-4'>
          <img src={couch6} alt=""/>
        </div>
        <div className='w-3/4 p-4'>
          <h1 className='text-[20px] font-semibold'>Complete Solidity For Smart Contract</h1>
          <div className='flex space-x-3 py-3'><FaCirclePlay /><p>1 hour</p></div>
          <div className='flex space-x-3 py-3'><BsFileEarmarkBarGraph /><p>5 Modules</p></div>
          <div className='space-x-5'>
            <button className='w-[80px] h-[30px] bg-green-500 text-white hover:bg-black rounded'>Buy Now</button>
            <button className='w-[70px] h-[30px] bg-green-500 text-white hover:bg-black rounded'>$9999</button>
          </div>
        </div>
      </div>
      </div>


      {/*---------------------------------------------------------------------------------*/}
      <div className='flex flex-row  w-full px-24  space-x-7'>
      <div className='div flex w-[650px] h-[240px] border-2 rounded p-3'>
        <div className='1/2 p-4'>
          <img src={couch7} alt=""/>
        </div>
        <div className='w-1/2 p-4'>
          <h1 className='text-[20px] font-semibold'>Became A Blockchain Instructor</h1>
          <div className='flex space-x-3 py-3'><FaCirclePlay /><p>1 hour</p></div>
          <div className='flex space-x-3 py-3'><BsFileEarmarkBarGraph /><p>5 Modules</p></div>
          <div className='space-x-5'>
            <button className='w-[80px] h-[30px] bg-green-500 text-white hover:bg-black rounded'>Buy Now</button>
            <button className='w-[70px] h-[30px] bg-green-500 text-white hover:bg-black rounded'>$6999</button>
          </div>
        </div>
      </div>
      </div>

      </section>
  )
}
export default Courses;
