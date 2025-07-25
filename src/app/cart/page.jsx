"use client";
import React from "react";
import CartLayout from "../widgets/cartLayout";
import { motion } from "motion/react";

function Cart() {
  const cartItems = [
    {
      image: "/images/products/Iphone14.png",
      prodName: "Apple iPhone 14 Pro Max",
      specs: "128GB Deep Purple",
      serialNum: "SN: 1234567890",
      price: "$900",
    },
    {
      image: "/images/products/Iphone14.png",
      prodName: "Apple iPhone",
      specs: "256GB Blue",
      serialNum: "SN: 9876543210",
      price: "$850",
    },
    {
      image: appleWatch,
      prodName:"Apple Watch Series 9 GPS 41mm Starlight Aluminium",
      specs: "256GB Blue",
      serialNum: "SN: 9876543210",
      price: "$366",
    },
     
  ];

  const fadeInLeft = {
    initial: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
    viewport: { amount: 0.4, once: true },
  };
  const fadeInRight = {
    initial: { x: 100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut", delay: 0 },
    viewport: { amount: 0.4, once: true },
  };

  const router = useRouter();
  return (
    <section className="text-lg text-black border border-white flex justify-center items-center  h-[100vh] w-full z-[60px] overflow-y-auto">
      <div className="max-w-[1200px] w-full mx-auto flex flex-col lg:flex-row gap-20">
        {/* Left: Cart Items */}
        <motion.div
          initial={fadeInLeft.initial}
          whileInView={fadeInLeft.whileInView}
          transition={fadeInLeft.transition}
          viewport={fadeInLeft.viewport}
          className="flex flex-col gap-4 w-full px-4 lg:w-1/2"
        >
          <h1 className="mb-4 text-2xl font-semibold">Shopping Cart</h1>
          {cartItems.map((item, index) => (
            <CartLayout
              key={index}
              image={item.image}
              prodName={item.prodName}
              specs={item.specs}
              serialNum={item.serialNum}
              price={item.price}
            />
          ))}
        </motion.div>

        {/* Right: Order Summary */}
        <motion.div
          initial={fadeInRight.initial}
          whileInView={fadeInRight.whileInView}
          transition={fadeInRight.transition}
          viewport={fadeInRight.viewport}
          className="bg-white text-black p-6 border rounded w-full lg:w-1/2"
        >
          <h1 className="text-xl font-semibold mb-4">Order Summary</h1>
          <div>
            <label className="text-[#545454] text-sm block mt-6 mb-1">
              Discount code / Promo code
            </label>
            <input
              type="text"
              placeholder="code"
              className="w-full p-2 border border-gray-300 rounded"
            />

            <label className="text-[#545454] text-sm block mt-6 mb-1">
              Your bonus card number
            </label>
            <input
              type="text"
              placeholder="Enter card number"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Order Summary Details */}
          <div className="flex justify-between items-start pt-8 text-base">
            <div className="flex flex-col gap-2">
              <p>Subtotal</p>
              <p className="text-[#545454]">Estimated tax</p>
              <p className="text-[#545454]">Shipping & Handling</p>
              <p className="font-semibold">Total</p>
            </div>
            <div className="flex flex-col gap-2 font-medium text-right">
              <p>$1750</p>
              <p>$150</p>
              <p>$50</p>
              <p className="font-bold">$1950</p>
            </div>
          </div>

          <button
            onClick={() => router.push("/cart/checkout")}
            className="bg-black w-full text-white text-base font-medium py-3 px-4 rounded mt-6"
          >
            Checkout
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Cart;
