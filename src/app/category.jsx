"use client"; // enables user to allow use of the broswer side rendering components

import React, { useRef } from "react";
import {
  Phone,
  Watch,
  Camera,
  Headphones,
  ComputerIcon,
  Gamepad2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function Category() {
  const items = [
    { name: "Phones", icon: Phone },
    { name: "SmartWatches", icon: Watch },
    { name: "Cameras", icon: Camera },
    { name: "Headphones", icon: Headphones },
    { name: "Computers", icon: ComputerIcon },
    { name: "Gaming", icon: Gamepad2 },
    { name: "Gaming", icon: Gamepad2 },
  ];

  const scrollHelper = useRef();

  const scrollLeft = () => {
    scrollHelper.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollHelper.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <section className="w-full py-10 h-auto">
      <div className="max-w-[1200px]  py-10 mx-auto flex flex-col space-y-5">
        <div className="flex justify-between items-center">
          <h1 className=" px-10 sm:px-0 font-semibold text-[20px]">
            Browse By Category
          </h1>

          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="p-2 hover:bg-gray-200 rounded-full"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 hover:bg-gray-200 rounded-full"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div
          ref={scrollHelper}
          className=" px-10 grid grid-cols-2 grid-rows-2 gap-4 sm:flex sm:gap-[32px] sm:overflow-x-auto scrollbar-hide"
        >
          {items.map((item, itemkey) => {
            const Iconn = item.icon;
            return (
              <div
                key={itemkey}
                className="min-w-[160px] h-[128px] rounded-xl bg-gray-100 flex flex-col space-y-6 items-center justify-center hover:bg-gray-200 transition"
              >
                <Iconn />
                <span className="text-sm mt-2 font-medium">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Category;
