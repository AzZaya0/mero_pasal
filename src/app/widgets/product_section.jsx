"use client";
import React, { useState } from "react";
import ProductCard from "./product_card";
import productImage from "../../../public/images/products/Iphone14.png";
import camera from "../../../public/images/products/camera.png";
import appleWatch from "../../../public/images/products/apple_watch.png";
import airpod from "../../../public/images/products/airpod.png";
import samsungWatch from "../../../public/images/products/samsungWatch.png";
import samsungFold from "../../../public/images/products/samsungFold.png";
import samsungBud from "../../../public/images/products/samsungBud.png";
import ipad from "../../../public/images/products/ipad.png";
function ProductSection() {
  const products = [
    {
      id: 1,
      name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
      price: 900,
      image: productImage,
      isFavorite: false,
    },
    {
      id: 2,
      name: "Blackmagic Pocket Cinema Camera 6K",
      price: 2535,
      image: camera,
      isFavorite: false,
    },
    {
      id: 3,
      name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
      price: 399,
      image: appleWatch,
      isFavorite: false,
    },
    {
      id: 4,
      name: "AirPods Max Silver Starlight Aluminium",
      price: 549,
      image: airpod,
      isFavorite: false,
    },
    {
      id: 5,
      name: "Samsung Galaxy Watch6 Classic 47mm Black",
      price: 369,
      image: samsungWatch,
      isFavorite: false,
    },
    {
      id: 6,
      name: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
      price: 1799,
      image: samsungFold,
      isFavorite: true,
    },
    {
      id: 7,
      name: "Galaxy Buds FE Graphite",
      price: 99.99,
      image: samsungBud,
      isFavorite: false,
    },
    {
      id: 8,
      name: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
      price: 398,
      image: ipad,
      isFavorite: false,
    },
  ];
  const products2 = [
    {
      id: 1,
      name: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
      price: 398,
      image: ipad,
      isFavorite: false,
    },
    {
      id: 2,
      name: "Blackmagic Pocket Cinema Camera 6K",
      price: 2535,
      image: camera,
      isFavorite: false,
    },

    {
      id: 3,
      name: "Galaxy Buds FE Graphite",
      price: 99.99,
      image: samsungBud,
      isFavorite: false,
    },

    {
      id: 4,
      name: "Samsung Galaxy Watch6 Classic 47mm Black",
      price: 369,
      image: samsungWatch,
      isFavorite: false,
    },
    {
      id: 5,
      name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
      price: 399,
      image: appleWatch,
      isFavorite: false,
    },
  ];
  const products1 = [
    {
      id: 0,
      name: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
      price: 1799,
      image: samsungFold,
      isFavorite: true,
    },
    {
      id: 1,
      name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
      price: 900,
      image: productImage,
      isFavorite: false,
    },

    {
      id: 2,
      name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
      price: 399,
      image: appleWatch,
      isFavorite: false,
    },
    {
      id: 3,
      name: "AirPods Max Silver Starlight Aluminium",
      price: 549,
      image: airpod,
      isFavorite: false,
    },
    {
      id: 4,
      name: "Samsung Galaxy Watch6 Classic 47mm Black",
      price: 369,
      image: samsungWatch,
      isFavorite: false,
    },
    {
      id: 5,
      name: "Blackmagic Pocket Cinema Camera 6K",
      price: 2535,
      image: camera,
      isFavorite: false,
    },
  ];

  const [tabIndex, setTabIndex] = useState(0);

  const tab = ["New Arrival", "BestSeller", "Featured Product"];
  const tabItem = [products, products1, products2];
  return (
    <>
      <div className="flex w-[1200px] mx-auto text-[18px] font-medium  gap-8 text-gray-400 mb-8">
        {tab.map((v, i) => {
          return (
            <h1
              onClick={() => {
                setTabIndex(i);
              }}
              className={` ${
                i === tabIndex && "underline underline-offset-8 text-black"
              }`}
              key={i}
            >
              {v}
            </h1>
          );
        })}
      </div>

      <div className=" md:grid-cols-4  sm:grid-cols-2   grid grid-cols-1 gap-8   justify-center items-center md:w-[1200px]  md:mx-auto  sm:mx-[56px] mx-auto  mb-[56px]">
        {tabItem[tabIndex].map((value) => {
          return (
            <ProductCard
              key={value.id}
              image={value.image}
              name={value.name}
              price={value.price}
              isFavorite={value.isFavorite}
            />
          );
        })}
      </div>
    </>
  );
}

export default ProductSection;
