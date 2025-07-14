import React from "react";
import Image from "next/image";

const productImage = "/images/products/Iphone14.png";

function CartLayout({ image, prodName, specs, serialNum, price }) {
  return (
    <div className="py-4 border-b-[1.5px] border-gray-500 flex flex-row ">
      <div className="flex flex-row flex-1 py-3">
        <Image
          src={image !== "" ? image : productImage}
          height={100}
          width={100}
          alt="Product image"
        />
        <div className="flex flex-col ml-4 text-[16px] ">
          <p>{prodName}</p>
          <p>{serialNum}</p>
          <p>{specs}</p>
        </div>
      </div>

      {/*Actions */}
      <div className="flex items-center  justify-end gap-1">
        <button className="text-lg px-2">−</button>
        <input type="text" className="w-8 text-center border rounded" />
        <button className="text-lg px-2">+</button>
        <p className="text-lg font-medium ml-2">{price}</p>
        <button className="ml-2 text-gray-400 hover:text-red-500"></button>

        <h1>X</h1>
      </div>
    </div>
  );
}

export default CartLayout;
