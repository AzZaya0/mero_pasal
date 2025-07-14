import Image from "next/image";
import React from "react";
import { Heart } from "lucide-react";
import productImage from "../../../public/images/products/Iphone14.png";

function ProductCard({ name, price, isFavorite, image }) {
  return (
    <div className="p-4  w-[268px]  bg-[#f6f6f6] rounded-md">
      <Heart
        className={`ml-auto   ${
          isFavorite
            ? "fill-red-600 text-transparent"
            : "fill-white text-gray-600"
        }`}
      />
      <div className="flex flex-col items-center">
        <Image
          height={160}
          width={160}
          alt="loading.."
          src={image !== "" ? image : productImage}
        />
        <h1 className="mt-[16px] font-medium text-[16px] text-center">
          {name}
        </h1>
        <h1 className="mt-[16px] mb-[24px]  font-semibold text-[24px]">
          ${price}
        </h1>

        <button className="py-[12px] px-[64px] rounded-md bg-black text-white  font-semibold text-[14px]">
          {" "}
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
