import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

import {Link} from 'react-router-dom';


export default function HeadHome(){
    return <section >
        <header className="flex justify-between px-5 py-3 md:fixed w-full z-30  bg-[#1eb2a6]  ">
            <div className='first flex flex-row p-2 mt-3  space-x-4 '>
            <span><EnvelopeIcon className='icon'  ></EnvelopeIcon></span><p className='text-[17px] mb-3'>Support@kairaaacademy.com</p>
            <span><FaPhoneAlt className='icon' ></FaPhoneAlt></span><p className='text-[17px] mb-3' >+91-7092774077</p>
           
            </div>
            <div className='second flex flex-row m-4 space-x-10'>
               
            <Link to="https://www.instagram.com/?hl=en"><FaInstagram className='icon'/></Link>
            <div>
            <Link to="https://twitter.com/"><FaTwitter className='icon'  /></Link></div>
           <div> <Link to="https://www.facebook.com/"><FaFacebookF className=' icon '/></Link></div>
          <div> <Link to="https://www.linkedin.com/"><IoLogoLinkedin className='icon'/></Link> </div>
            </div></header>
    </section>

}
