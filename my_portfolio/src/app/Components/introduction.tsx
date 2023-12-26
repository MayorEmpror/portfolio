
import office from "../../../SVG/office.svg"
import Image from "next/image"
import { FaPhoneAlt } from "react-icons/fa";
import CTA from "../Components/CTA"
import { motion } from "framer-motion";
export default function  Introduction(){
    return(
        <>
          <div className="select-none h-[970px] w-full z-20 flex flex-col lg:flex-row" >
   <motion.div 
   transition={{  duration: 5000 }}
   initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
   className='transition-all  duration-700 opacity-0 bg-[hsl(180,100%,82%)] w-[500px] h-[296px] relative z-10  sm:my-auto lg:my-auto flex blur-[414px] '/>
  
   <div className="bg-whte/50 w-5/6 text-center  lg:text-left   lg:w-[42%] sm:my-auto  relative   mx-auto  md:left-[-30px]  lg:left-[-86px]   h-full z-[5px]   ">
  <span className='md:mt-40 mt-[-100px] flex text-white font-bold justify-center  mx-auto text-2xl sm:text-5xl text-center lg:text-left  lg:text-7xl  '> Crafting Digital Excellence</span>
  <div className=' text-md  sm:text-2xl text-white mt-10 '>
  Welcome, I&apos;m Hashir ALi, this is  where Innovation Meets Imagination in Web Development!&quot;
  </div>
  <div className='text-md  sm:text-lg text-white mt-10 '>
  innovative web developer dedicated to pushing the boundaries of digital possibilities. With a keen eye for detail and a love for elegant code, I transform ideas into immersive online experiences.
  </div>


 <CTA text="Contact Me" icon={<FaPhoneAlt />}/> 

   
   </div>
   
   <div className="px-20 sm:my-auto  ">
   <Image src={office} width={500} height={500} alt="Icon" className="mb-52 selector h-full mx-auto flex lg:block  lg:mr-20 xl:mr-[30rem] "/>
   </div>
  
   
   </div>
        
        </>
    )
}