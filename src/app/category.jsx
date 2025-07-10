import React from "react";

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
  return (
    <section className=" w-full py-10">
      <div className="w-[1200px] mx-auto flex flex-col space-y-5">
        <div className="justify-between flex flex-row">
          <h1 className="font-semibold text-[20px]">Browse By Category</h1>

          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <ChevronLeft />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className="flex gap-[32px] overflow-x-auto ">
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
