import React from 'react'
import './About.css';
import {Link} from 'react-router-dom';
import { MdDoubleArrow } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";

import Flower from '../assets/1.da37bbb6.png';
import Flower1 from '../assets/2.bf09f0b4.png';

import Img from '../assets/forback3.jpg'
import Img1 from '../assets/abouabout_1.png';




const About = () => {
  return (
  <section className='w-full h-full'>
      <div className='md:w-full md:h-full'>
      <div className='overlay'></div>
        
          <img  className='md:h-[700px] md:w-full object-cover' src={Img} alt=""/>
          <div  className='content'>
            <h1 className='font1 text-6xl'>
            About Kairaa Academy
            </h1>
            <div className='flex w-full align-middle justify-center py-5'>
          <Link to="/">Home</Link><MdDoubleArrow size={20}/><p>About Us</p></div>
        </div>
      </div>

     {/*--------------------------------------------------------------------------------------------------------*/}
     <div className='flex md:flex-row flex-col justify-center w-full h-full px-32 py-24'>
        <div className='md:w-1/2 flex flex-col px-12'>
             <h1 className='sub-title-two py-2 '>About Kairaa Blockchain Academy</h1>
            <h2 className='ff12 py-3'>We Are Excellent Choice To Learning New Skills</h2>
              <p className='py-3 font-medium'>Kairaa Blockchain Academy is a leading online learning center that offers a wide range of courses and programs
                    to students around the world. With its focus on flexibility and support, Kairaa Academy has become a popular 
                    choice for those looking to advance their education or learn new skills.</p>
              <p className='py-3'>Students have access to a wide range of learning resources 
                that are designed to help them fully understand and retain the material.</p>
        <div className='flex  py-4'>
            <div className='flex space-x-5'>
              <button className='what1 md:flex'><Link to="/about">SIGNUP NOW</Link><span className='py-1 px-2'><FaLongArrowAltRight/></span></button>
              <button className='what1 md:flex'><Link to="/about">CONTACT US</Link><span className='py-1 px-2'><FaLongArrowAltRight /></span></button>
            </div>
            </div>
        </div>
        <div className='md:w-1/2 px-16 p-5'>
          <img  className='md:w-[500px] md:h-[400px] rounded' src={Img1}/>
        </div>
      </div>


      {/*--------------------------------------------container4-------------------------------------------------------------*/}
<section5 className="w-full h-screen">
<div className="flex flex-row w-full  px-24 py-24 space-x-3 ">
    <div className="container5 flex flex-row ">
        <div className="flex bg-green-200 p-5 ">
           <div><h1 className="text-3xl text">Start Your Career</h1>
            
            <p className="text-[17px]">Kairaa is a great place to start your career in the IT industry. The company offers a variety of opportunities
                 for growth.</p>
                 <butttom className="button1  bg-yellow-100 text-[12px] text-black">JOIN WTH US</butttom>
                 </div> <div> <img className="w-[180px] h-[140px]"src={Flower} alt=""/></div>
            </div>
          
       </div>
       <div className="container5 flex flex-row">
        <div className="flex bg-yellow-100 p-5"><div>
           <h1 className="text-3xl text">Learn Blockchain</h1>
            
            <p className="text-[17px]">We offers a wide range of blockchain
                                    courses that are designed to help
                    students advance their education.</p>
                    <butttom className="button1 bg-green-200 text-[12px] text-black">BUY COURSE</butttom>
                </div><div>  <img className="w-[180px] h-[140px]"src={Flower1} alt=""/></div>
            </div>
          
       </div>
       </div>
      </section5>
      {/*-------------------------------------------------------------------------------------------------------------*/}
     


      </section>
  )}
      
  export default About;
