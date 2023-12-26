import team from "../../../SVG/team.svg"
import Image from "next/image"
import CTA from "../Components/CTA"
import { FaPhoneAlt } from "react-icons/fa";
export default function Works(){
    return(
        <>
          <div className='bg-[rgb(0,23,27)] h-[800px] w-full z-20 flex flex-col lg:flex-row mt-[-400px] sm:mt-1'>
   
   <div className='bg-[rgb(83,55,255)] w-[500px] h-[296px] relative z-10  my-auto flex blur-[414px]'>k</div>
   
   <div className="bg-whte w-5/6  lg:w-[42%]   relative mx-auto mt-52 lg:mt-0 lg:left-[-86px]   h-full z-[5px]  text-center lg:text-left ">
  <span className=' flex text-white font-bold text-2xl sm:text-5xl lg:text-7xl'>Elevating User Experiences</span>
  <div className='text-md  sm:text-2xl text-white mt-10 '>
  Welcome, I&apos;m Hashir ALi, this is  where Innovation Meets Imagination in Web Development!&quot;
  </div>
  <div className='text-lg text-white mt-10 '>
  innovative web developer dedicated to pushing the boundaries of digital possibilities. With a keen eye for detail and a love for elegant code, I transform ideas into immersive online experiences.
  </div>


  {/* <div className='mt-10 mx-auto sm:ml-[0.01px]'>
  <div className="mx-auto sm:ml-[0.01px]   z-10 h-[50px] w-[40%]  sm:w-[25.5%] border-l border-r border-white rounded-xl  overflow-hidden  ">
   <div className='gradient-button '></div>
   </div>

   <div className="ml-[31%] h-[46px] mt-[-48px] w-[38%]  sm:w-1/4 bg-[rgb(12,31,32)] rounded-xl my-auto flex absolute sm:ml-[1px] z-20">
   <svg   className='mx-auto my-auto relative mr-1 h-4 w-4 stroke-[3]' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
    <div className='font-semibold text-sm hover:text-md text-center ml-auto mr-6 relative my-auto animated-border text-white '></div>
   </div>

  </div> */}
   <CTA URL="/" text="  Contact Me"  icon={<FaPhoneAlt />}/>

   </div>
   <div className="px-20 sm:my-auto  ">
   <Image src={team} width={500} height={500} alt="Icon" className="mb-80 selector  h-full mx-auto flex lg:block  lg:mr-20 xl:mr-[30rem] "/>
   </div>

   
   </div>
        </>
    )
}