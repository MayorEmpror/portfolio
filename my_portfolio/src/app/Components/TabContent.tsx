import Image from "next/image"

export default function TabContent(props:any){
    return (
        <div 
        id="tab"
         className="py-10 tab border border-teal-50/10 bg-gradient-to-br from-[rgb(0,23,27)] 10% to-[rgb(0,30,30)]/80 30% w-[99%] h-[99%]  my-auto mx-auto rounded-3xl mt-[2px]  relative transition-all duration-700 flex bg-center bg-cover "
         
         >
         <div className="  relative mx-auto  bg-whte brightness-100 w-full "> 
         {props.images}
            <div className="
            
             transition-all
             duration-500
            bg-gradient-to-br from-[rgb(96,248,58)] 10% to-[rgb(26,202,149)]/80 30%
             h-5 mt-5 rounded-lg  w-1/4 mx-auto 
             mb-5
             hidden
             sm:flex
           
             ">
               <div  id="main_Heading" className= " bg-green-950/[90%] w-[99%] h-[95%] rounded-full mx-auto   flex my-auto text-green-200 text-center justify-center  ">
                <span className="text-sm  text-center justify-center my-auto flex">{props.main_Heading}</span></div></div>


                 <div className="mt-5 text-center justify-center text-green-200 w-5/6 mx-auto flex">{[props.content]}</div>
                 
                 <div className={`
             transition-all
             duration-500
          ${props.colorOne}
             h-5 mt-5 rounded-lg  w-1/4 mx-auto flex
           
             `}><div  id="main_Heading" className= {`${props.colortwo} w-[99%] h-[95%] rounded-full mx-auto flex my-auto text-green-200 text-center justify-center  `}>
                <span className="text-sm text-center justify-center my-auto flex">{props.techName}</span></div></div>
          </div>
     </div>
    )
}