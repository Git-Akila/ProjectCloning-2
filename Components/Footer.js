
import React from 'react'
import {Link} from 'react-router-dom'
import "./Footer.css"
    import { FaGooglePlay } from "react-icons/fa";
    import Education9 from '../assets/education9.jpg'
    import { FaInstagram } from "react-icons/fa";
    import { FaTwitter } from "react-icons/fa";
    import { FaFacebookF } from "react-icons/fa";
    import { IoLogoLinkedin } from "react-icons/io5";
    import { FaPhoneAlt } from "react-icons/fa";
    import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
    import { EnvelopeIcon } from '@heroicons/react/24/solid';
    import { FaArrowUp } from "react-icons/fa";
 const Footer = () => {
  return (
    <section8>
    
            <div className="flex flex-col md:flex-row py-20 md:px-24 md:mb-[-200px]  justify-center ">
                
        <div className="md:mw-1/2 ">
            
                
                <img className="md:w-[500px] md:h-[400px]"src={Education9} alt=""/>
            <Link to="https://youtu.be/9Y7ma241N8k?si=H50tPspFbB1jtrY3"><FaGooglePlay className="icons" /></Link> </div> 
            
            
        
        <div className="md:w-1/2 bg-slate-100 md:h-[400px] p-4">
        <div className="flex=col justify-center mr-20">
                     <h1 className="text-2xl  text-blue-600 font-semibold mt-5">Newsletters</h1>
                    <h2 className="font-medium text-5xl ">Get Our Every Single Notifications</h2>
                    <div className="md:flex mt-12 ml-8 space-x-6 ">
                    <Link to="/"><button className="w-[200px] h-[60px] rounded-xl bg-slate-400 hover:text-white">Regular Updates</button></Link>
                    <Link to="/"><button className="w-[200px] h-[60px] rounded-xl bg-slate-200 hover:text-white">Weekly Updates</button></Link></div>
                    <div className="mt-10 bg-slate-200 text-center pb-2 pt-2">
                        <div className="md:flex gap-1"><EnvelopeIcon className="icon w-8 h-8"/>
                        <input className="md:w-[350px] md:h-[40px] bg-slate-100 rounded-xl text-center" placeholder="Enter Email"></input> 
                        <Link to="/"><button className="button ">Subscribe</button></Link></div>
                    </div>
    </div></div></div>
        
            
            
            
           {/*---------------------------*/} 
            <div className="md:flex md:justify-between md:items-center sm:px-12 bg-teal-500 opacity-1 ">
            
                <div className="grid grid-cols-1 sm:grid-col-3 lg:grid-cols-6 gap-6 sm:px-8 px-4 py-16 ml-32 mt-32 ">
                <div className="">
                        <h1 className="head1">About Us</h1>
                        <p className="text-[18px]">Kairaa Blockchain Academy is a top-notch online 
                            learning center that offers a wide range of courses.</p>
                            <button className="button"><Link to="/">LEARN MORE</Link></button>
                    </div>
                    
                    <div className="">
                        <ul className="">
                            <h1 className="head1">Quick Links</h1>
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/about"><li>About Us</li></Link>
                            <Link to="/Courses"><li>Courses</li></Link>
                            <Link to="/contact"><li>Contact</li></Link>
                        </ul>
                    </div>
                    <div>
                        <ul className="">
                            <h1 className="head1">Resources</h1>
                            <Link to="/"><li>Latest Blogs</li></Link>
                            <Link to="/"><li>FAQ's</li></Link>
                            <Link to="/"><li>Privacy Policy</li></Link>
                           <Link to="/"> <li>Our Terms</li></Link>
                        </ul>
                    </div>
                    <div className="">
                        <ul className="">
                            <h1 className="head1">Get In Touch</h1>
                            <li>support@kairaa.in</li>
                            <li>131, 2nd floor, DB Road, RS Puram, Coimbatore - 641002.</li>
                            
                        </ul>
                    </div>
                    <div className="">
                        <p className="text-[18px]">Join our Blockchain Academy today and embark on a 
                            journey of endless possibilities. Don't miss out on the
                             chance to enhance your blockchain knowledge.</p>
                             <button className="button"><Link to="/">SIGNUP</Link></button>
                    </div>
                    </div>
                
            </div>
            <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-teal-500 border-t-2 border-t-black ">
                <span>&copy; 2024.<a className="hover:text-blue-600"href="http://kairaablockchainacademy.com/">KAIRAAACADEMY.COM</a> </span>
                <div>
                <Link to="/"><MdOutlineKeyboardDoubleArrowUp className="scroll-top"/></Link>
                </div>
                <svg class="animate-bounce w-5 h-5 bg-cyan-...">
                     <FaArrowUp className='icon w-10 h-10'  />
                </svg>
                <div className='second flex flex-row m-4 space-x-10'>
                   
                <Link to="https://www.instagram.com/?hl=en"><FaInstagram className='icon'/></Link>
                <div>
                <Link to="https://twitter.com/"><FaTwitter className='icon'  /></Link></div>
               <div> <Link to="https://www.facebook.com/"><FaFacebookF className=' icon '/></Link></div>
              <div> <Link to="https://www.linkedin.com/feed/"><IoLogoLinkedin className='icon'/> </Link></div>
                </div>
            </div>
      
            </section8>
    
  )
}
export default Footer;
