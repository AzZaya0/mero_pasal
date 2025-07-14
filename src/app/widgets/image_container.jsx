"use client";
import Image from "next/image";
import samsungWatch from "../../../public/images/products/samsungWatch.png";
import samsungFold from "../../../public/images/products/samsungFold.png";
import samsungBud from "../../../public/images/products/samsungBud.png";
import ipad from "../../../public/images/products/ipad.png";

const products = [
  {
    title: "Popular Products",
    image: samsungWatch,
    bg: "bg-white",
    text: "text-black",
  
  },
  {
    title: "Ipad Pro",
    image: samsungFold,
    bg: "bg-[#f9f9f9]",
    text: "text-black",
  },
  {
    title: "Samsung Galaxy",
    image: samsungBud,
    bg: "bg-[#eaeaea]",
    text: "text-black",
  },
  {
    title: "Macbook Pro",
    image: ipad,
    bg: "bg-[#2c2c2c]",
    text: "text-white",
  },
];

export default function ProductCardGrid() {
  return (
    <section className="w-full px-4 py-16">
      <div className="w-full h-[640px] max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 ">
        {products.map((item, index) => (
          <div
            key={index}
            className={`w-full h-full p-6 flex flex-col justify-between items-start ${item.bg} ${item.text} `}
          >
            <div className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] my-[60px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>

            <h2 className="text-[18px] sm:text-[20px] font-semibold mt-6">
              {item.title}
            </h2>

            <p className="text-sm mt-2 leading-relaxed max-w-[300px]">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>

            <button
              className={`mt-6 px-6 py-2 border ${
                item.text === "text-white" ? "border-white" : "border-black"
              } rounded hover:bg-black hover:text-white transition duration-300`}
            >
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
