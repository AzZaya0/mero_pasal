import Image from "next/image";
import playStation from "../../../public/images/PlayStation.png";
import appleVision from "../../../public/images/vision.png";
import { motion } from "motion/react";

export default function BentoGrid() {
  const fadeIn = (x = 0, y = 0, delay = 0.2) => ({
    initial: { x, y, opacity: 0 },
    whileInView: { x: 0, y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut", delay },
    viewport: { amount: 0.4, once: true },
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4 w-full overflow-hidden">
      {/* 1. PS5 */}
      <motion.div
        {...fadeIn(-100, 0, 0.2)}
        className="bg-white col-span-1 sm:col-span-2 sm:row-span-1 row-span-2 flex flex-col md:flex-row items-center p-4 shadow-sm"
      >
        <Image
          src={playStation}
          alt="PlayStation 5"
          width={200}
          height={200}
          className="w-auto md:w-[200px] object-contain  mb-4 md:mb-0"
        />
        <div className="md:ml-4 text-center md:text-left">
          <h2 className="text-3xl md:text-[49px] font-semibold">
            PlayStation 5
          </h2>
          <p className="text-sm text-gray-600 mt-2 max-w-md">
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
            redefine your PlayStation experience.
          </p>
        </div>
      </motion.div>

      {/* 2. MacBook Air */}
      <motion.div
        {...fadeIn(100, 0, 0.2)}
        className="bg-gray-100 col-span-1 sm:col-span-2 row-span-2 flex flex-col md:flex-row p-4 items-center justify-center shadow-sm"
      >
        <div className="flex-1 text-center md:text-left space-y-4">
          <h2 className="text-5xl font-thin leading-none">
            Macbook <br />
            <strong className="font-semibold">Air</strong>
          </h2>
          <p className="text-sm text-gray-600 w-full max-w-md mx-auto md:mx-0">
            The new 15-inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>
          <button className="px-4 py-2 border border-black rounded-md text-sm">
            Shop Now
          </button>
        </div>
        <div className="mt-6 md:mt-0">
          <Image
            src="/images/MacBook Pro.png"
            alt="MacBook"
            width={300}
            height={200}
            className="object-contain w-full"
          />
        </div>
      </motion.div>

      {/* 3. AirPods Max */}
      <motion.div
        {...fadeIn(0, 100, 0.2)}
        className="bg-gray-50 col-span-1 row-span-1 flex flex-col sm:flex-row items-center p-4"
      >
        <Image
          src="/images/airpodmax.png"
          alt="AirPods Max"
          width={100}
          height={100}
          className="mb-4 sm:mb-0"
        />
        <div className="sm:ml-4 text-center ">
          <h3 className="text-xl font-semibold">
            Apple AirPods <strong>Max</strong>
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Computational audio. Listen, it's powerful.
          </p>
        </div>
      </motion.div>

      {/* 4. Vision Pro */}
      <motion.div
        {...fadeIn(0, 100, 0.5)}
        className="bg-[#353535] text-white col-span-1 row-span-1 flex flex-col sm:flex-row items-center p-4"
      >
        <Image
          src={appleVision}
          alt="Vision Pro"
          width={120}
          height={120}
          className="mb-4 sm:mb-0"
        />
        <div className="sm:ml-4 text-center ">
          <h3 className="text-xl font-semibold">
            Apple Vision <strong>Pro</strong>
          </h3>
          <p className="text-sm mt-2">
            An immersive way to experience entertainment.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
