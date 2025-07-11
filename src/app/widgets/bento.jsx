import Image from 'next/image';
import playStation from '../../../public/images/PlayStation.png'

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4 max-w-full h-[720px] ">
      {/* 1. PS5 */}
      <div className="bg-white col-span-2 row-span-1 flex items-center justify-between  shadow-sm">
        <Image src={playStation} alt="PS5"  />
        <div>
          <h2 className="text-3xl font-semibold">Playstation 5</h2>
          <p className="text-sm text-gray-600 mt-2 max-w-md">
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
          </p>
        </div>
      </div>

      {/* 2. MacBook Air */}
      <div className="bg-gray-100 col-span-2 row-span-2 flex flex-col justify-between  shadow-sm">
        <div>
          <h2 className="text-4xl font-light">Macbook <strong>Air</strong></h2>
          <p className="text-sm text-gray-600 mt-4">
            The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
          </p>
        </div>
        <div className="mt-6">
          <button className="px-4 py-2 border border-black rounded-md text-sm">Shop Now</button>
        </div>
        <Image
          src="/images/MacBook Pro.png"
          alt="MacBook"
          width={300}
          height={200}
          className="self-end mt-4"
        />
      </div>

      {/* 3. AirPods Max */}
      <div className="bg-gray-50 col-span-1 row-span-1 flex items-center ">
        <Image src="/images/airpodmax.png" alt="AirPods Max" width={100} height={100} />
        <div className="ml-4">
          <h3 className="text-xl font-semibold">Apple AirPods <strong>Max</strong></h3>
          <p className="text-sm text-gray-600 mt-2">Computational audio. Listen, it's powerful.</p>
        </div>
      </div>

      {/* 4. Vision Pro */}
      <div className="bg-gray-900 text-white col-span-1 row-span-1 flex items-center ">
        <Image src="/images/vision.png" alt="Vision Pro" width={100} height={100} />
        <div className="ml-4">
          <h3 className="text-xl font-semibold">Apple Vision <strong>Pro</strong></h3>
          <p className="text-sm mt-2">An immersive way to experience entertainment</p>
        </div>
      </div>
    </div>
  );
}
