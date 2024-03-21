import communication from '../assets/communication.jpg'

import {Link} from 'react-router-dom'
import { MdDoubleArrow } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

import  {React, useState } from 'react';
import { useForm } from "react-hook-form";
import './Courses.css';


const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
 
   const onSubmit = (data) => console.log(data);
  
  
    return (
      
  
      <section className='w-full h-full'>
      <div className='md:w-full md:h-full'>
      <div className='overlay'></div>
        
          <img  className='md:h-[700px] md:w-full object-cover' src={communication} alt=""/>
          <div  className='content'>
            <h1 className='font1 text-6xl'>
            Contact
            </h1>
            <div className='flex w-full align-middle justify-center py-5'>
          <Link to="/">Home</Link><MdDoubleArrow size={20}/><p className='border-b-2 border-b-red-200'>Contact</p></div>
        </div>
      </div>
      <div>
        
      </div>
      {/*---------------------------------------------------------------------------------------------------*/}
  <div className='w-full h-full mt-8 '>
    <div className='w-full text-center justify-center'>
      <h1 className='font-semibold text-blue-600 text-[20px] py-5 '>Need Any Helps ?</h1>
      <h2 className='text-5xl text-black py-3'>Contact For Information</h2>
      <p className='font-thin py-3'>Questions, feedback, or just want to chat? We're all ears! Whether it's a query about our services, </p>
      <p className='font-thin py-0'>partnership opportunity, or you simply want to say hello, don't hesitate to reach out.</p>
    </div>
  </div>




  {/*-------------------------------------------------------------------------------------------------*/}
<div className='w-full h-full  py-12'>
  <div className='flex flex-wrap grid-cols-3 px-24 gap-4 justify-center'>
    <div className='flex flex-col text-center  border-2 p-5 rounded w-1/4 h-[300px]'>
        <div className='w-[80px] h-[80px] ml-28 py-3 px-4  text-white bg-cyan-600 rounded-full text-center items-center justify-center align-center hover:bg-blue-700'>
        <IoLocation size={50} />
        </div>
        <h1 className='font-bold text-[22px] text-black py-4'>Corporate Office</h1>
        <h2 className='font-medium py-2 text-[19px]'>No 131, 2nd floor, DB Road, RS Puram, CBE - 641002.</h2>

      </div>


    <div className='flex flex-col text-center  border-2 p-5 rounded w-1/4 h-[300px]'>
        <div className='w-[80px] h-[80px] ml-28 py-3 px-4  text-white bg-cyan-600 rounded-full text-center items-center justify-center align-center hover:bg-blue-700'>
        <IoLocation size={50} />
        </div>
        <h1 className='font-bold text-[22px] text-black py-4'>Chennai Branch</h1>
        <h2 className='font-medium py-2 text-[19px]'>20/14, Kalaivanar Street, Jafferkhanpet, Chennai - 600083.</h2>

    </div>


    <div className='flex flex-col text-center  border-2 p-5 rounded w-1/4 h-[300px]'>
        <div className='w-[80px] h-[80px] ml-28 py-3 px-4  text-white bg-cyan-600 rounded-full text-center items-center justify-center align-center hover:bg-blue-700'>
        <IoLocation size={50} />
        </div>
        <h1 className='font-bold text-[22px] text-black py-4'>Trichy Branch</h1>
        <h2 className='font-medium py-2 text-[19px]'>No 76-O, Jothi complex, Thillai nagar, Pincode - 620018.</h2>

    </div>


    <div className='flex flex-col text-center  border-2 p-5 rounded w-1/4 h-[300px]'>
        <div className='w-[80px] h-[80px] ml-28 py-3 px-4  text-white bg-cyan-600 rounded-full text-center items-center justify-center align-center hover:bg-blue-700'>
        <IoLocation size={50} />
        </div>
        <h1 className='font-bold text-[22px] text-black py-4'>Tirunelveli Branch</h1>
        <h2 className='font-medium py-2 text-[19px]'>No 131, 2nd floor, DB Road, RS Puram, CBE - 641002.</h2>

    </div>


    <div className='flex flex-col text-center  border-2 p-5 rounded w-1/4 h-[300px]'>
        <div className='w-[80px] h-[80px] ml-28 py-3 px-4  text-white bg-cyan-600 rounded-full text-center items-center justify-center align-center hover:bg-blue-700'>
        <IoLocation size={50} />
        </div>
        <h1 className='font-bold text-[22px] text-black py-4'>Salem Branch</h1>
        <h2 className='font-medium py-2 text-[19px]'>Sairam complex, Veeranganur main road, Thalaivasal. Pincode - 636112.</h2>

    </div>
    


    <div className='flex flex-col text-center  border-2 p-5 rounded w-1/4 h-[300px]'>
        <div className='w-[80px] h-[80px] ml-28 py-3 px-4  text-white bg-cyan-600 rounded-full text-center items-center justify-center align-center hover:bg-blue-700'>
        <MdEmail  size={50} />
        </div>
        <h1 className='font-bold text-[22px] text-black py-4'>Email Us</h1>
        <a className='font-medium py-2 text-[19px]' href="https://mail.google.com/">support@kairaaacademy.com</a>
        <a className='font-medium py-2 text-[19px]' href="https://mail.google.com/">team@kairaaacademy.com</a>

    </div>

    <div className='flex flex-col text-center  border-2 p-5 rounded w-1/4 h-[300px]'>
        <div className='w-[80px] h-[80px] ml-28 py-3 px-4  text-white bg-cyan-600 rounded-full text-center items-center justify-center align-center hover:bg-blue-700'>
        <FaPhone size={50} />
        </div>
        <h1 className='font-bold text-[22px] text-black py-4'>Helpline</h1>
        <h2 className='font-medium py-2 text-[19px]'>+91 7092 771133</h2>

    </div>
    

   
    
    
  </div>
</div>

{/*--------------------------------------------------------------------------------------------------------------------*/}


<div className='w-full h-full py-4'>
  <div className=' bg-slate-100  rounder p-16 ml-48 mr-48 py-4 justify-center'>
    <div className='text-center'>
    <h1 className='font-semibold text-blue-600 text-[20px] py-2'>Send Us Message</h1>
    <h2 className='text-4xl text-black py-3'> Have Any Questions! Say Hello</h2>
    </div>
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className='flex grid-cols-3 py-3 justify-center gap-3'>
      <div ><input className='rounded h-[50px] w-[260px]' type='name' placeholder='Enter your name' {...register("name")}></input></div>
      <div ><input className='rounded h-[50px] w-[260px]' type='email' placeholder='Email Address'{...register("email",
       { required: true })} />
               {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}</div>
      <div ><input className='rounded h-[50px] w-[260px]' type='number' placeholder='Mobile Number'{...register("number")}></input></div>

    </div>
    <div className='' ><input className='rounded h-[160px] w-full' type='name' placeholder='Write Message'></input></div>
   <div className='justify-center text-center py-4'> <button className='bg-cyan-500 rounded-xl text-white font-semibold text-xl h-[50px] w-[180px]'>Send Message</button>
   </div>
    </form>
  </div>
  
</div>
{/*--------------------------------------------------------------------------------------------------------------------------------*/}

    </section>


    

  )
}



  
    export default Contact;
