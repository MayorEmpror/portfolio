"use client"
import { motion } from "framer-motion"
import Animated_cards from './animated_cards';

export default function Itemslogo(props:any){
    const elem = {
      id : "card1",
      offset : {x:150,y:160},
      childeren :
       <motion.div  className="bg-[url('../../../../../../Pictures/Assets/Computer.png')] w-1/3 h-1/3 mx-auto mt-20 hover:w-[40%] hover:h-[40%] transition-all flex bg-center bg-cover "/>
    
    }
    
    return(
        <div className="bg-blck  h-5/6  sm:h-full w-full flex rounded-xl ">
               
       <Animated_cards   id={props.id}   offset={props.offset} > 
           {props.childeren}
         </Animated_cards>
        
        
        </div>
    )
}