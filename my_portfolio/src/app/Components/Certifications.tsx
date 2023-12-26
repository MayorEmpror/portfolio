import CertificationSvg from "./CertificationSvg"
import { PiCertificateThin } from "react-icons/pi";
import CTA from "../Components/CTA"
import Link from 'next/link'
export default function Certifications(){
    return(
        <>
         <div className='bg-[rgb(0,23,27)] h-[860px] w-full z-20 flex flex-col lg:flex-row mt-52 lg:mt-0 transition-all duration-300'>
   <CertificationSvg/>
   <div className="bg-whte w-5/6 lg:w-[42%]  relative mx-auto lg:left-[176px]   h-full z-[5px] text-center lg:text-left mt-10 sm:mt-1">
  <span className=' md:mt-40  flex text-white font-bold justify-center  mx-auto text-2xl sm:text-5xl text-center lg:text-left  lg:text-7xl mt-10 sm:mt-1'>Certifications and Achievements</span>
  <div className='text-md  sm:text-2xl text-white mt-10 '>
  Recognitions that Validate My Expertise in  <br />&quot;Web Development&quot;
  </div>
  <div className='text-lg text-white mt-10 '>
  innovative web developer dedicated to pushing the boundaries of digital possibilities. With a keen eye for detail and a love for elegant code, I transform ideas into immersive online experiences.
  </div>


   
   <CTA URL="Certificates" text="Certificates"  icon={<PiCertificateThin className="text-2xl" />}/>
   </div>
   <div className='bg-[rgb(0,141,255)] w-[500px] h-[296px] relative z-10  my-auto flex blur-[414px]'>k</div>
    
   
   </div>

        </>
    )
}