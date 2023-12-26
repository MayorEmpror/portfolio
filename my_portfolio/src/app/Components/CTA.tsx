import Link from 'next/link'
export default function CTA(props:any){
    
    return(
        <div className='mt-10 mx-auto sm:ml-[0.01px]'>
  <div className="mx-auto sm:ml-[0.01px]   z-10 h-[50px] w-[40%]  sm:w-[25.5%] border-l border-r border-white rounded-xl  overflow-hidden  ">
   <div className='gradient-button '></div>
   </div>
   <Link href={props.URL?props.URL:"/"}>
   <div className="ml-[31%] h-[46px] mt-[-48px] w-[38%]  sm:w-1/4 bg-[rgb(12,31,32)] rounded-xl my-auto flex absolute sm:ml-[1px] z-20">
   <div  className='text-white text-sm mx-auto my-auto relative   sm:ml-10 h-4 w-4 stroke-[3] '>{props.icon}</div>
  
    <div className='font-semibold text-sm hover:text-md text-center ml-auto mr-2 sm:mr-6 relative my-auto animated-border text-white '>{props.text}</div>
   </div>
   </Link> 
  </div>
    )
}