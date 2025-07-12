import Image from "next/image";
import playStation from "../../../public/images/PlayStation.png";
import appleVision from "../../../public/images/vision.png";

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4 max-w-full h-[720px] ">
      {/* 1. PS5 */}
      <div className="bg-white col-span-2 row-span-1 flex items-center justify-between  shadow-sm">
        <Image src={playStation} alt="PS5" />
        <div>
          <h2 className="text-[49px] font-semibold ">Playstation 5</h2>
          <p className="text-sm text-gray-600 mt-2 max-w-md">
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
            redefine your PlayStation experience.
          </p>
        </div>
      </div>

      {/* 2. MacBook Air */}
      <div className="bg-gray-100 col-span-2 row-span-2 flex flex-row p-4  justify-center    items-center shadow-sm">
        <div className="flex-1 flex items-center justify-center ">
          <div className=" flex-col items-center justify-center space-y-6 ">
            <h2 className="text-[64px] font-thin leading-none  flex-grow ">
              Macbook <br />
              <strong className="font-semibold">Air</strong>
            </h2>
            <p className="text-sm text-gray-600 mt-4 w-[360px]">
              The new 15-inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
           <button className="px-4 py-2 border border-black rounded-md text-sm">
              Shop Now
            </button>
          
          </div>
        </div>
        <div>
          <Image
          src="/images/MacBook Pro.png"
          alt="MacBook"
          width={300}
          height={200}
          className="self-end mt-4 flex-1 flex items-end justify-center"
        />
        </div>
      </div>

      {/* 3. AirPods Max */}
      <div className="bg-gray-50 col-span-1 row-span-1 flex items-center ">
        <Image
          src="/images/airpodmax.png"
          alt="AirPods Max"
          width={100}
          height={100}
        />
        <div className="ml-4">
          <h3 className="text-xl font-semibold">
            Apple AirPods <strong>Max</strong>
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Computational audio. Listen, it's powerful.
          </p>
        </div>
      </div>

      {/* 4. Vision Pro */}
      <div className="bg-[#353535] text-white col-span-1 row-span-1 flex items-center ">
        <Image
          src={appleVision }
          alt="Vision Pro"
         
        />
        <div className="ml-4">
          <h3 className="text-xl font-semibold">
            Apple Vision <strong>Pro</strong>
          </h3>
          <p className="text-sm mt-2">
            An immersive way to experience entertainment
          </p>
        </div>
      </div>
    </div>
  );
}
