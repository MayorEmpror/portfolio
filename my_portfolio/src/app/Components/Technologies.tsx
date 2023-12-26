
import Itemslogo  from "./itemslogo"
import WebDev from "../../../SVG/WebDev.svg"
import Image from "next/image"
import Appdev from "../../../SVG/AppDev.svg"
import UIdev from "../../../SVG/UIdev.svg"
import Jquery from "../../../SVG/Jquery.svg"
import Next from "../../../SVG/Next.svg"
import Css from "../../../SVG/Css.svg"
import JS from "../../../SVG/JS.svg"
import Node from "../../../SVG/Node.svg"
import Bootstrap from "../../../SVG/Bootstrap.svg"
import TabContent from "./TabContent"
export default function Technologies(){
    const AnmiatedCards = [
      {
        id : "card1",
        offset : {x:150,y:160},
        childeren :  <TabContent 
        main_Heading={"Web dev"}
        content={"I excel in web development using HTML 5 for effective content presentation"}
        techName={"HTML 5"}
        colorOne={"bg-gradient-to-br from-[rgb(209,55,55)] 10% to-[rgb(210,2,2)]/80 30%"}
        colortwo={"bg-[rgb(68,10,8)]/[90%]"}
        images={ <Image src={WebDev} width={100} height={100} alt="Icon" className=" transition-all duration-500 bg-slte-400 mx-auto flex relative mt-10  "/>
      }/>
       }
       ,
       {

        id : "card2",
        offset : {x:610,y:100},
        childeren :  <TabContent 
        main_Heading={"UI development"}
        content={"I excel in web development using HTML 5 for effective content presentation"}
        techName={"react"}
        colorOne={"bg-gradient-to-br from-[rgb(94,212,204)] 10% to-[rgb(26,202,149)]/80 30%"}
        colortwo={"bg-cyan-950/[90%]"}
        images={ <Image src={Appdev} width={100} height={100} alt="Icon" className=" transition-all duration-500 bg-slte-400 mx-auto flex relative mt-10  "/>
      }/>
       
       },
       {
        id : "card3",
        offset : {x:1000,y:200},
        childeren :  <TabContent 
        main_Heading={"UI UX "}
        content={"I excel in web development using HTML 5 for effective content presentation"}
        techName={"tailwind"}
        colorOne={"bg-gradient-to-br from-blue-500 10% to-blue-300/80 30%"}
        colortwo={"bg-blue-950/[90%]"}
        images={ <Image src={UIdev} width={100} height={100} alt="Icon" className=" transition-all duration-500 bg-slte-400 mx-auto flex relative mt-10  "/>
      }/>  
       },
       {
        id : "card4",
        offset : {x:100,y:200},
        childeren :  <TabContent 
        main_Heading={"UX UI"}
        content={"I excel in web development using HTML 5 for effective content presentation"}
        techName={"Jquery"}
        colorOne={"bg-gradient-to-br from-orange-300 10% to-orange-200/80 30%"}
        colortwo={"bg-orange-950/[90%]"}
        images={ <Image src={Jquery} width={120} height={120} alt="Icon" className=" transition-all duration-500 bg-slte-400 mx-auto flex relative mt-10  "/>
      }/>  
       },
       
        {
          id : "card5",
          offset : {x:800,y:400},
          childeren : <TabContent 
          main_Heading={"App dev"}
          content={"I excel in web development using HTML 5 for effective content presentation"}
          techName={"Next"}
          colorOne={"bg-gradient-to-br from-zinc-500 10% to-zinc-300/80 30% text-black"}
          colortwo={"bg-zinc-900/[90%] text-black"}
          images={ <Image src={Next} width={120} height={120} alt="Icon" className=" transition-all duration-500 bg-slte-400 mx-auto flex relative mt-10 text-black"/>
        }/>  
          
         },
         {
          id : "card6",
          offset : {x:1000,y:400},
          childeren :   <TabContent 
          main_Heading={"UI UX"}
          content={"I excel in web development using HTML 5 for effective content presentation"}
          techName={"css"}
          colorOne={"bg-gradient-to-br from-blue-900 10% to-blue-400/80 30%"}
          colortwo={"bg-blue-950/[90%]"}
          images={ <Image src={Css} width={120} height={120} alt="Icon" className=" transition-all duration-500 bg-slte-400 mx-auto flex relative mt-10  "/>
        }/>  
          
         },
         {
          id : "card7",
          offset : {x:100,y:400},
          childeren :  <TabContent 
          main_Heading={"Code Dialect"}
          content={"I excel in web development using HTML 5 for effective content presentation"}
          techName={"Javascript"}
          colorOne={"bg-gradient-to-br from-[rgb(201,202,26)] 10% to-[rgb(26,202,149)]/80 30%"}
          colortwo={"bg-[rgb(64,68,8)]/[90%]"}
          images={ <Image src={JS} width={120} height={120} alt="Icon" className=" transition-all duration-500 bg-slte-400 mx-auto flex relative mt-10  "/>
        }/>  
         },
         {
          id : "card8",
          offset : {x:800,y:400},
          childeren :  <TabContent 
          main_Heading={"Back end "}
          content={"I excel in web development using HTML 5 for effective content presentation"}
          techName={"Node JS"}
          colorOne={"bg-gradient-to-br from-green-500 10% to-green-300/80 30%"}
          colortwo={"bg-emerald-900/[90%]"}
          images={ <Image src={Node} width={120} height={120} alt="Icon" className=" transition-all duration-500 bg-slte-400 mx-auto flex relative mt-10  "/>
        }/>  
      
          
         },
         {
          id : "card9",
          offset : {x:1000,y:400},
          childeren :  <TabContent 
          main_Heading={"UI UX "}
          content={"I excel in web development using HTML 5 for effective content presentation"}
          techName={"Bootstrap"}
          colorOne={"bg-gradient-to-br from-purple-500 10% to-purple-300/80 30%"}
          colortwo={"bg-purple-900/[90%]"}
          images={ <Image src={Bootstrap} width={220} height={220} alt="Icon" className=" transition-all duration-500 bg-slte-400 mx-auto flex relative mt-10  "/>
        }/>  
         }
         ] 
    const ItemsLogo = AnmiatedCards.map((x,k)=>{
          return(
          <Itemslogo key={k} id={x.id} childeren={x.childeren} offset={x.offset}/>
          )
    })
    return(
        <>
          <div className='bg-[rgb(0,23,27)]  py-20  border-b border-emerald-500 w-full z-20 flex flex-col lg:flex-row mt-28 lg:mt-0 overscroll-contain'>
             <div className="bg-whte w-full py-20 sm:w-5/6  mx-auto  h-2/3  sm:h-5/6 my-auto  relative  grid grid-cols-1 grid-rows-9  lg:grid-cols-3 lg:grid-rows-3 gap-4">
            {ItemsLogo}
             </div>
   </div>
        </>
    )
}