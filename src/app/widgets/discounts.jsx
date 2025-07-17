import React from "react";
import ProductCard from "./product_card";
import productImage from "../../../public/images/products/Iphone14.png";
import camera from "../../../public/images/products/camera.png";
import appleWatch from "../../../public/images/products/apple_watch.png";
import airpod from "../../../public/images/products/airpod.png";

function Discounts() {
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
      isFavorite: true,
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
      isFavorite: true,
    },
  ];

  return (
    <section className="w-full bg-gray-100 pt-10">
      <div className="max-w-[1200px] w-full mx-auto px-4 flex flex-col gap-6 pb-10">
        <h1 className="font-semibold text-2xl">Discounts up to -50%</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-x-6 gap-y-8">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              isFavorite={item.isFavorite}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Discounts;
