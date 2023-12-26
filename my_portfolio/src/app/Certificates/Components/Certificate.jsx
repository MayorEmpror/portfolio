"use_client"
import cert from "../../../img/certificate .png"

import Link from 'next/link'
import Image from "next/image"
export default function certificate (props){
    return(
       <div className={props.className}>
        
         <Image src={props.certificate} width={props.size_width?props.size_width:500} height={220} alt="Icon" className={" selector h-2/3 transition-all duration-500 bg-slte-400 mx-auto mt-auto mb-auto flex relative   lg:ml-32  "+props.imgStyle}/>
   <div className="bg-whte w-5/6 lg:w-[42%]  relative mx-auto lg:left-[176px]   h-full z-[5px] text-center lg:text-left mt-10 sm:mt-1">
  <span className=' md:mt-40  flex text-white font-bold justify-center  mx-auto text-2xl sm:text-5xl text-center lg:text-left  lg:text-6xl mt-10 sm:mt-1'>
  <span className="mr-10"><Image src={props.Icon} width={500} height={100} alt={"nasa_logo"} className="hidden md:block selector"/></span>{props.Heading}</span>
  
  
  <div className='text-md  sm:text-2xl text-white mt-10 '>
  Recognitions that Validate My Expertise in  <br />&quot;Web Development&quot;
  </div>
  <div className='text-lg text-white mt-10 '>
  innovative web developer dedicated to pushing the boundaries of digital possibilities. With a keen eye for detail and a love for elegant code, I transform ideas into immersive online experiences.
  </div>
  {props.Button}  
   </div>
  
   <div className='bg-[rgb(0,141,255)] w-[500px] h-[296px] relative z-10  my-auto flex blur-[414px] mr-auto'>k</div>
   
   </div>
    )
}