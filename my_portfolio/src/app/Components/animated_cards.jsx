"use client"
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from 'react';

function AnimatedCards({id, children , offset}) {
    
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
 const [Opacity, setOpacity] = useState("80%");
// var Opacity = "80%"
console.log(offset)
  const updateMousePosition = (e) => {
    setMousePosition({ x: e.clientX - offset.x , y: e.clientY - offset.y });
  };

 

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const Top = `${mousePosition.y}px`;
  const left = `${mousePosition.x}px`;

  const motionRef = useRef()
  // const [detectDeviceType,setdetectDeviceType] = useState(() =>
  // /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator?.userAgent)
  //   ? 'Mobile'
  //   : 'Desktop')
    // console.log(detectDeviceType)
  const containerStyle = {
   
    background: `
    
    radial-gradient(400px circle at ${left} ${Top}, rgb(96 248 58) 0px, rgb(26 202 149) 50%, rgb(7 1 1 / 0%) 100%, transparent 95%)
    
    `
      
    // : `none`,
    // transition: "background 0.5s ease"
  };
  console.log(containerStyle.background)
  useEffect(() => {
    motionRef.current.addEventListener('mousemove', updateMousePosition);

    return () => {
      motionRef.current?.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  return (
   
      <motion.div
        className={`parrent bg-slte-100 h-full w-3/4 md:w-11/12 mx-auto rounded-3xl overflow-hidden parrent_light transition-all duration-1000 `}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseOut}
        style={containerStyle}
        ref = {motionRef}
      
       
      // initial={{opacity:1}}
 //animate={{opacity:0}}
//         whileHover={{opacity:1} }
        transition={6}
        
    
   
   
      >
        {children}

      </motion.div>
    
        
      
   
  );
}

export default AnimatedCards;
