import React from 'react'
import { easeIn, motion } from "motion/react";
import Iphone from '../../../public/iphone.png'
import Image from 'next/image';

function Hero() { const topSectionAnimation = {
    initialAnimation: { y: 50, opacity: 0 },
    animatetoTop: { y: 0, opacity: 1 },
    transitionType: { duration: 0.7, transition: easeIn },
  };
  return (
    <>
     <div className="text-3xl  bg-[#211C24] h-[100vh] overflow-hidden w-full ">
        <div className="m-auto flex   lg:max-w-[1200px] md:pb-0 pb-8 px-4 md:flex-row     flex-col-reverse justify-between items-center h-full">
          <motion.div
            initial={topSectionAnimation.initialAnimation}
            animate={topSectionAnimation.animatetoTop}
            transition={topSectionAnimation.transitionType}
            className="flex flex-col h-auto lg:space-y-10 space-y-2 items-start "
          >
            <p className=" lg:mt-0 mt-2 lg:text-[25px] text-[20px] text-[#909090] font-semibold">
              Pro.Beyond.
            </p>
            <p className="lg:text-[96px] text-[52px] text-white">IPhone 14 pro</p>
            <p className="text-[#909090] text-[18px]">
              Created to change everything for the better. For everyone
            </p>
            <button className="px-14  border rounded-lg py-2   text-[16px] text-white ">
              Shop Now
            </button>
   
          </motion.div>

          <motion.div
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, transition: easeIn }}
            className=" flex flex-col justify-end  h-full"
          >
            <Image src={Iphone}  alt=""  className=' md:w-[500px] sm:w-[380px]  w-[300px]  '   />
          </motion.div>
        </div>
      </div></>
  )
}

export default Hero