
import {React,useState} from 'react';
import { Link } from "react-router-dom";
import {Bars2Icon} from '@heroicons/react/24/solid';

import Logo from '../assets/Blockchain-Academy-Logo.png';

 const Head = () => {
 const [toggleMenu, setToggleMenu]= useState(false);


  return (
    
    <header className='flex justify-between px-5 py-3 bg-white md:fixed w-full z-30 '>
    
      <div>
      <img className="h-[60px] w-[120px]"src={Logo} alt="img"/>
      </div>
      <div>
     <nav className='hidden md:block'>
      <ul className='flex text-xl font-semibold text-cyan-600 py-4'>
        <li className='forhover '><Link to='/'>Home</Link></li>
        <li className='forhover'><Link to='/About'>About Us</Link></li>
        <li className='forhover'><Link to='/Courses'>Courses</Link></li>
        <li className='forhover'><Link to='/Career'>Career</Link></li>
        <li className='forhover'><Link to='/Contact'>Contact</Link></li>
        </ul>
        </nav></div>
        <button className='button mt-2'>
        <Link to='/Getstarted'>GET STARTED</Link></button>

        {toggleMenu && <nav className='md:hidden block mobile '>
        <ul className='flex-col text-xl text-white '>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/About'>About Us</Link></li>
        <li><Link to='/Courses'>Courses</Link></li>
        <li><Link to='/Career'>Career</Link></li>
        <li><Link to='/Contact'>Contact</Link></li>
         </ul>
        </nav>}
        <button onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars2Icon className='h-5  text-cyan-600'></Bars2Icon></button>
       
        </header>

  )
}
export default Head;
