import Image from "next/image"
import svg from "../../../SVG/icon.svg"
export default function CertificationSvg(){
    return(
//         <div className="px-20 sm:my-auto mt-[-500px]  ">
//    <Image src={} width={500} height={500} alt="Icon" className="h-full mx-auto flex lg:block  lg:mr-20 xl:mr-[30rem] "/>
//    </div>
        <div className='bg-whte w-1/2 mt-[-200px]  sm:w-full mx-auto flex lg:mr-auto lg:ml-20 '>
			<Image src={svg} width={500} height={500} alt="Icon" className="selector  h-full  mx-auto lg:mb-auto flex  "/>
      
      {/* <a href="https://iconscout.com/illustrations/stock-market-analysis" class="text-underline font-size-sm" target="_blank">Stock market analysis</a> by <a href="https://iconscout.com/contributors/imam-naki" class="text-underline font-size-sm" target="_blank">Imamfathoni0</a> */}
   </div>
    )
}