import  { React,useState } from 'react';

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import './Career.css'




import {Link} from 'react-router-dom'
import { MdDoubleArrow } from "react-icons/md";


import Forback1 from '../assets/forback6.jpg'
import Caree1 from '../assets/join-team1.jpg'
import Caree2 from '../assets/join-team3.jpg'
import Caaree3 from '../assets/career_2.png'


export const Career = () => {
    return (
        



        <section6 className='w-full h-full'>
        <div className='md:w-full md:h-full'>
        <div className='overlay'></div>
          
            <img  className='md:h-[700px] md:w-full object-cover' src={Forback1} alt=""/>
            <div  className='content'>
              <h1 className='font1 text-6xl'>
              Start Your Career
              </h1>
              <div className='flex w-full align-middle justify-center py-5'>
            <Link to="/">Home</Link><MdDoubleArrow size={20}/><p className='border-b-2 border-b-red-200'>Career</p></div>
          </div>
        </div>
        <div>
       </div>
       {/*-------------------------------container2--------------------------------*/}
       
        <div className='flex p-32 h-full w-full '>
        <div className='w-1/2 flex p-4'>
          <div className='flex-col'>
            <img className='w-[240px] h-[330px] py-3' src={Caree1} alt=""/>
            <img className='w-[240px]'src={Caree2}/>
          </div>
          <img className='h-[500px] w-[270px] px-3 py-16'src={Caaree3} alt=""/>
        </div>
        <div className='w-1/2 p-7'>
          <h1 className='text-[21px] text-blue-700'>Your Gateway to a Successful Career</h1>
          <h2 className='text-[40px] text-[#262d3d] py-4'>Start Your Career</h2>
          <p className='text-[19px] font-light py-3'>Kairaa Academy is a leading provider of online blockchain and technology courses. We are on a mission to empower the future of education by making high-quality education accessible and affordable htmlFor everyone. We are looking htmlFor talented and
             passionate individuals to join our team and help us achieve our mission. We offer a variety of roles.</p>
             <p className='text-[19px] font-light py-3'>Why Join Kairaa Academy?</p>
             <p className='text-[19px] font-light py-3'>Competitive salaries and benefits</p>
                <p className='text-[19px] font-light py-2' >A supportive and collaborative work environment</p>
                <p className='text-[19px] font-light py-2'>Opportunities htmlFor professional growth and development</p>
                <p className='text-[19px] font-light py-2'>The chance to make a real difference in the world</p>
          </div>
        </div>
        </section6>
    )
}
export default Career;
