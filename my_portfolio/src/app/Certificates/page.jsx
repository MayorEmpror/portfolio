import Certificate from "./Components/Certificate"
import CTA from "../Components/CTA"
import nasa from "../../img/nasa_logo.png"
import Commecs from '../../img/Commecs.png'
import Bebraslogo from "../../img/bebras.jpeg"
import IT from "../../img/commecs  IT.jpg"
import cert from "../../img/certificate .png"
import Bebras from "../../img/Bebras class 10.jpg"
import Bebras2 from "../../img/Bebras class 7.jpg"
// import { AnimatePresence } from 'framer-motion'
 import Layout from "../Components/Lyout";
 import { IoMdArrowBack } from "react-icons/io";
export default function Certifications(){
  
    return(
        <div className="overflow-x-clip ">
 {/* 
    <AnimatePresence mode="wait" initial={false}> */}
       <Layout>
        <Certificate 
        Icon={nasa}
        className="bg-[rgb(0,23,27)] h-[860px] w-full z-20 flex flex-col lg:flex-row mt-52 lg:mt-0 selector" 
        certificate={cert} 
        Heading={"International Space Apps Challenge"}
        Button={ <CTA text=" Go Back" icon={<IoMdArrowBack />}/> }
       
        />
        <Certificate className="bg-[rgb(0,23,27)] h-[860px] w-full z-20 flex flex-col lg:flex-row mt-52 lg:mt-20 selector" 
       Icon={Commecs}
      certificate={IT} 
         Heading={"College Exhibition 2nd Place"}
        />
        <Certificate className="bg-[rgb(0,23,27)] h-[860px] w-full z-20 flex flex-col lg:flex-row mt-52 lg:mt-20 selector" 
         Icon={Bebraslogo}
       certificate={Bebras}
         Heading={"International Space Apps Challenge"}
         />
           <Certificate className="bg-[rgb(0,23,27)] h-[860px] w-full z-20 flex flex-col lg:flex-row mt-52 lg:mt-20 selector" 
        Icon={Bebraslogo}
        certificate={Bebras2}
          Heading={"International Space Apps Challenge"}
          imgStyle= {" rotate-[270deg] hidden sm:block  sm:mr-20"}
          size_width = {700}
         />
        {/* <Certificate className="bg-[rgb(0,23,27)] h-[860px] w-full z-20 flex flex-col lg:flex-row mt-52 lg:mt-20" 
        Icon={Bebraslogo}
       certificate={Bebras2}
         Heading={"International_Space Apps Challenge"}
         />       */}
        </Layout>
        {/* </AnimatePresence>
 */}
        </div>
    )
}