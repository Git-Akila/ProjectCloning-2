import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLongArrowAltRight,FaRegCheckCircle ,FaCheckCircle,FaCheck} from "react-icons/fa";
import './Home.css';

import sample from '../assets/mine.mp4';
import img from '../assets/hero.png';

import ImgRead from '../assets/reading.png';
import ImgSocial from "../assets/social-media.png";
import ImgMoney from '../assets/money-bag.png';
import Vedio from '../assets/video.png';
import About1 from '../assets/about_2.png';
import About2 from '../assets/about_3.png';




 const Home1 = () => {
    return ( 
      
        < >
        
          {/*----------------------------Hero-----------------------------------------------------*/}
          <div className=' w-full h-screen relative grid-col-2 gap-9'>
              
          <video className='videoTag w-full h-full object-cover' autoPlay loop muted>
          <source src={sample} type='video/mp4'/>
          </video>
          <div className='absolute w-full h-full top-0  left-0 bg-gray-900/65'></div>
  
  
          {/*-----------------------------------------------*/}
          <div className='flex justify-between w-full'>
          <div className="absolute top-0 w-1/2 p-11 col-lg-6 align-self-center mt-9">
                  <img src={img} alt=""/>
              </div>
              
              <div className=" absolute left-2/4 top-0 p-24 col-lg-6 align-self-center mt-20 ">
              <div className='flex' ><span className='text-white mt-2 px-5'><FaCheck size={25}></FaCheck></span><h3 className="font-semibold text-2xl text-white">Master
                      blockchain skills for success</h3></div> 
                      <h1 className="w-full text-4xl font-semibold text-white  pt-5 pb-5">Discover Blockchain Technology with
                 <span>Kairaa Academy&#x27;s</span> Online Courses.</h1>
                <p className="text-[20px] font-bold text-white">Kairaa Academy is the leading provider of online blockchain courses. 
                      We offer a wide range of courses to meet the needs of students of all levels of experience, from beginners to advanced learners.</p>
           <ul class="list-style-none fadeInUp text-white font-semibold text-[18px] delay-0-6s py-3">
                      <li className='flex py-2'><span className='px-2'><FaCheckCircle /></span>Comprehensive blockchain courses</li>
                        <li className='flex'><span className='px-2'><FaCheckCircle /></span>Online video tutorials and best practices </li>
                          </ul>
                  <div className=" flex font-semibold mt-8 space-x-5 ">
                 <Link to="/Courses"> <button className="button flex" >Buy Courses<span className='py-1 px-2'><FaArrowRightLong/></span>
                    </button></Link>
                    <Link to="/career"> <button className="button flex" >Start Career <span className='py-1 px-2'><FaArrowRightLong/></span>
                   </button></Link> </div>
                   </div>
          </div> 
          </div>


{/*------------------------------------------Container1---------------------------------------------------------*/}
  <div className='w-full h-full'>
  <div className="conataine gap-6 flex align-items-center py-12 px-24">
        <div class="section-title w-1/2 mt-50 p-20">
        <h3 class="animate-bounce m-auto bg-cyan-600 py-5 text-black font-semibold text-center rounded p-4">
                        WHY LEARN HERE?</h3>
           
         <h2 className="text-black text-5xl text-600 p-4">We offer innovative <span>online</span> classroom</h2>
                 </div>
         <div className="section-para w-1/2 p-20">
            <p className="text-[16px] font-medium p-5 leading-7">Kairaa Blockchain Academy&#x27;s outstanding feature is its wide range of educational materials,
            designed to assist students in understanding and retaining the subject by offering a diverse collection
            of learning resources.</p>
            </div>
    </div></div>
       
       {/*-----------------------------------------------------------------------------------------------------*/}
       <section3 className='w-full h-full'>
       <div className="flex grid-cols-4 sm:grid-col-4 lg:grid-cols-6 gap-6 sm:px-8 px-4 py-3 ml-32 ">
       
        <div className=' div border p-5 h-[290px] w-[270px] rounded' >
            <img  className="w-[60px] h-[60px]"src={ImgRead} alt=""/>
            <h5 className='text-black py-5 text-[21px]'>Exclusive Courses</h5>
            <p className='font-medium text-[17px]'>Kairaa blockchain academy: Learn blockchain online at your own pace, with courses for all levels.</p>
        </div>

        <div className='div border p-5 h-[290px] w-[270px] rounded' >
            <img  className="w-[60px] h-[60px]"src={ImgSocial} alt=""/>
            <h5 className='text-black py-5 text-[21px]'>Video Tutorials</h5>
            <p className='font-medium text-[17px]'> Learn blockchain at your own pace and on your own schedule 
            with our online video tutorials.</p>
        </div>

        <div className='div border p-5 h-[290px] w-[270px] rounded' >
            <img  className="w-[60px] h-[60px]"src={ImgMoney} alt=""/>
            <h5 className='text-black py-5 text-[21px]'>Flexibility</h5>
            <p className='font-medium text-[17px]'>Learn blockchain from anywhere in the world, at any time of day or night,
             with flexible online video tutorials.</p>
        </div>

        <div className='div border p-5 h-[290px] w-[270px] rounded' >
            <img  className="w-[60px] h-[60px]"src={Vedio} alt=""/>
            <h5 className='text-black py-5 text-[21px]'>Cost Efficiency</h5>
            <p className='font-medium text-[17px]'>Save money on blockchain education with Kairaa blockchain 
            academys cost-effective online courses.</p>
        </div>

        </div>
       </section3>


        {/*-------------------------------------------------container2-----------------------------------------------------------*/}
    <div className=" w-full h-screen flex flex-row px-24">
        <div className="con2 w-1/2 ">
            <div className="img1 con2">
            <img className="mt-32 ml-20"src={About2} alt=""/>
            
          
                <img className="in mt-[-70px] ml-5"src={About1} alt=""/>
            </div>

        </div>
        <div className="cont2 w-1/2 mt-32 ml-20">
            <h2 className="text-[20px] font-blod text-blue-600">About Kairaa Academy</h2>
            <h2 className="h2 text-5xl mb-6 mt-4">We Are Excellent Choice To Learning Blockchain</h2>
            <p className="para">Kairaa Blockchain Academy is a leading online learning center that offers a wide range of blockchain and web 3.0 skills to students around the world. With its focus on flexibility and support, Kairaa Blockchain Academy has become 
                a popular choice for those looking to advance their education or learn the new technology.</p>
       
        <div className="con2r flex py-3 space-x-10 mt-5 ">
        <Link to="/about"> <button className="what flex">LEARN MORE<span className='px-2 py-1'><FaLongArrowAltRight /></span></button></Link>
        <Link to="/about">  <button className="what w-[200px] flex ">ABOUT KAIRAA<span className='px-2 py-1'><FaLongArrowAltRight /></span></button>
        </Link>  </div> </div>

    </div>

    
  
       </>

)
}
export default Home1;
  
    
