"use client";
import BentoGrid from "./widgets/bento";

import Category from "./category";

import ProductSection from "./widgets/product_section";
import { easeIn, motion } from "motion/react";
export default function Home() {
  const initialAnimation = { y: 50, opacity: 0 };
  const animatetoTop = { y: 0, opacity: 1 };
  const transitionType = { duration: 0.7, transition: easeIn };

  return (
    <>
      <div className="text-3xl border bg-[#211C24] h-[100vh] w-full ">
        <div className="m-auto max-w-[1200px]  flex flex-row justify-between items-center h-full">
          <motion.div
            initial={initialAnimation}
            animate={animatetoTop}
            transition={transitionType}
            className="flex flex-col h-auto space-y-10 items-start "
          >
            <p className="text-[25px] text-[#909090] font-semibold">
              Pro.Beyond.
            </p>
            <p className="text-[96px] text-white">IPhone 14 pro</p>
            <p className="text-[#909090] text-[18px]">
              Created to change everything for the better. For everyone
            </p>
            <button className="px-14 border rounded-lg py-2 text-[16px] text-white ">
              Shop Now
            </button>
          </motion.div>

          <motion.div
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, transition: easeIn }}
            className=" flex flex-col justify-end  h-full"
          >
            <img src="/iphone.png" width="500px" alt="" />
          </motion.div>
        </div>
      </div>
      <BentoGrid />

      <Category />
      <ProductSection />
    </>
  );
}
