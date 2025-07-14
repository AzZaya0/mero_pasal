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
    transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
    viewport: { amount: 0.4, once: true },
  };

  return (
    <section className="text-lg text-black border border-white flex justify-center items-center  h-[100vh] w-full z-[60px] overflow-y-auto">
      <div className="max-w-[1200px] w-full mx-auto gap-24 flex flex-row  justify-between p-6">
        {/* Left: Cart Items */}
        <motion.div
          initial={fadeInLeft.initial}
          whileInView={fadeInLeft.whileInView}
          transition={fadeInLeft.transition}
          viewport={fadeInLeft.viewport}
          className="flex flex-col gap-4 w-[50%] "
        >
          <h1 className="mb-4 text-[24px] font-semibold">Shopping Cart</h1>
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
          className="bg-white text-black p-4 border rounded flex flex-col w-[50%] px-16 py-14"
        >
          <div>
            <h1 className="text-xl font-semibold mb-4">Order Summary</h1>
            <p className="text-[#545454] text-[14px] pt-[24px]">
              Discount code / Promo code
            </p>
            <input
              type="text"
              placeholder="code"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <p className="text-[#545454] text-[14px] pt-[24px]">
              Your bonus card number
            </p>
            <input
              type="text"
              placeholder="Enter card number"
              className="w-full p-2 border border-gray-300 rounded"
            />
            {/* Order Summary Details */}
            <div className="flex justify-between items-center pt-8 text-[16px]">
              <div className="flex flex-col gap-2">
                <p>Subtotal</p>
                <p className="text-[#545454]">Estimated tax</p>
                <p className="text-[#545454]">Estimated shipping & Handling</p>
                <p>Total</p>
              </div>
              <div className="flex flex-col gap-2 font-medium">
                <p>$1750</p>
                <p>$150</p>
                <p>$50</p>
                <p>$1950</p>
              </div>
            </div>

            <button className="bg-black w-full text-white text-[16px] font-medium py-3 px-4 rounded mt-6">
              Checkout
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Cart;
