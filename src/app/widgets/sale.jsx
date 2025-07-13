import React from "react";
import banner from "../../../public/images/banner_home.png";

function Sale() {
  return (
    <div
      className="w-full bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${banner.src})` }}
    >
      <div className="flex flex-col justify-center items-center text-center py-16 px-4 md:py-24 bg-black/50 min-h-[60vh]">
        <p className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[72px] font-light leading-tight">
          Big Summer <strong className="font-bold">Sale</strong>
        </p>
        <p className="max-w-md mt-4 text-[14px] sm:text-[16px] md:text-[18px] text-white">
          Commodo fames vitae vitae leo mauris in. Eu consequat.
        </p>
        <button className="py-3 px-8 sm:py-4 sm:px-12 border rounded-lg mt-8 border-red-500 hover:bg-red-500 hover:text-white transition">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Sale;
