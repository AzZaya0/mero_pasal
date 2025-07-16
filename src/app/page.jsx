"use client";
import BentoGrid from "./widgets/bento";

import Sale from "./widgets/sale";

import Category from "./category";
import Discounts from "./widgets/discounts";

import ProductSection from "./widgets/product_section";

import ProductCardGrid from "./widgets/image_container";
import Hero from "./widgets/hero";
export default function Home() {
  return (
    <>
      <Hero />

      <BentoGrid />
      <Category />
      <ProductSection />

      {/* <ProductCardGrid /> */}
      {/* <Discounts /> */}
      <Sale />
    </>
  );
}
