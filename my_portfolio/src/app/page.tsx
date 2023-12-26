"use client"
import { AnimatePresence } from 'framer-motion'
import Layout from "./Components/Lyout";
import Introduction from './Components/introduction'
import { CiFacebook } from "react-icons/ci";
import Certifications from './Components/Certifications'
import Technologies  from './Components/Technologies'
import Works from "./Components/Works"
import TechHeding from "./Components/TechnologiesHeading"

export default function Home() {
   
  return (
  
    <Layout>
    <AnimatePresence mode="wait" initial={false}>
    < div className='selector' >
   
   <div className='bg-[rgb(0,23,27)] h-screen  sm:h-[1000px]  w-full z-20  '>
    <nav className='h-[60px] w-full border-b border-[rgb(41,61,64)] flex'> 
    
     <div className="text-white ml-10 sm:ml-48 my-auto font-bold text-2xl w-1/2"><span className='font-extrabold text-green-300'>H</span>ashir Ali </div>
     <div className="bg-[url('')] h-[35px] w-[127px] bg-center bg-no-repeat bg-cover  border-teal-50  my-auto mb-0 ml-[58px]  "  ></div>
    
    </nav>
    
     
     
      <div className='h-[900px] w-full bg-[rgb(0,23,27)] flex'>
      <div className='h-full w-full bg-whte '>
       <div className='parallax'>
   <div className='parallax__group'>

   <Introduction /> 
   <Certifications/>
    <Works/>
       <TechHeding/>
      <Technologies/>
   <div className=" parallax__layer--back  w-full  h-[1000px]  flex relative hue-rotate-[275px]  bg-[url('../img/AdobeStock_201035547.jpeg')] bg-center bg-cover mr-52 bg-fixed" >  </div>
        
        
          <div className= " overflow-hidden mx-auto lg:ml-60 bg-whte h-[500px] backdrop-blur-sm w-5/6 lg:w-1/3 parallax__layer--fore  lg:mr-auto mt-[-500px]">
         <div className='h-full w-full  bg-[rgb(0,23,27)]/75 border border-zinc-600  '>
          <div className='text-white/50 mx-auto text-md text-center w-full mt-10' >Our Purpose</div>
          <div className='text-white mx-auto w-full text-center text-3xl'>WE CREATE YOUR PROJECT</div>
          <div className='text-xl text-green-300 font-bold text-center justify-center sm:justify-start sm:text-left mt-10 mx-auto flex sm:ml-16 w-5/6 sm:w-full'>Responsive and Accessible Design</div>
          <div className='text-sm  sm:text-md text-white/75 w-5/6 mx-auto sm:ml-16 text-center justify-center sm:justify-start sm:text-left  '>The world of web development is constantly evolving,<span className='hidden sm:block'>and I am dedicated to staying at the forefront of industry trends and emerging technologies.</span> </div>
          <div className='text-xl text-green-300 font-bold text-left mt-10 ml-16 w-full'>Attention to Detail</div>
          <div className='text-sm sm:text-md text-white/75 w-5/6 mx-auto  sm:ml-16 text-center sm:text-left  '>
          This commitment to precision results in polished <span className='hidden sm:block'>, visually appealing interfaces that elevate the overall user experience.</span>
            </div>
         </div>
          </div>


          <div className='parallax__layer--base text-4xl lg:text-6xl bg-blck ml-5 lg:mx-auto w-2/3  text-left fore flex text-white font-semibold relative top-[500px] lg:top-[300px]  lg:left-[-180px]'>
      Contact Us for Exceptional Web Development Solutions!
      </div>
      <div className='parallax__layer--fore text-sm sm:text-xl bg-blck mx-auto w-1/2 text-left fore flex flex-col text-white font-semibold relative ml-[3rem] sm:ml-32 lg:ml-52  top-[532px] sm:top-[570px]  lg:top-[420px] lg:left-[-22px]'>
      Are you ready to elevate your online presence and create a digital masterpiece that captivates your audience? Look no further! Our dedicated team of skilled web developers is here to turn your vision into a stunning reality.
     
      <div className='mt-10'>
  <div className="  z-10 h-[50px] w-[70%]  md:w-[25.5%] border-l border-r border-white rounded-xl  overflow-hidden  ">
   <div className='gradient-button '></div>
   </div>
   <div className=" h-[46px] mt-[-48px] w-[68%] md:w-1/4 bg-[rgb(12,31,32)] rounded-xl my-auto flex absolute ml-[1px] z-20">
   
    <div className='font-semibold text-sm hover:text-md text-center ml-auto mr-auto relative my-auto animated-border text-white '>Contact Me</div>
   </div>
  </div>

  
      </div>
          <div className= "bg-[url('../img/abstract-geometric-background.be70aec4.jpg')] h-[700px] w-3/4 parallax__layer-back mt-[-100px]  bg-cover bg-no-repeat backdrop-contrast-200 flex" style={{boxShadow: "2px 2px 15px 11px"}}>
          
            <div className='h-full w-1/12 bg-whte ml-auto border-l border-l-stone-200 hidden sm:bock '>
            <CiFacebook className="text-white"/>
            <CiFacebook className="text-white"/>
            <CiFacebook className="text-white"/>
            <CiFacebook className="text-white"/>
            <CiFacebook className="text-white"/>
            </div>
          </div>
          <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-60% w-[500px] h-[296px] relative z-10 ml-auto my-auto flex blur-[414px]'>k</div>
          {/* <div className='h-[100px]'>
</div> */}

   </div>
       </div>
     
      </div>
      </div>
    </div>
    {/* <ThreeComp/> */}
    </div>
    </AnimatePresence>
    </Layout>
  )
}

