"use client";

import React, { useState } from "react";
import { ShoppingCart, Heart, User, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

function NavBar() {
  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);

  const links = [
    { name: "home", path: "/" },
    { name: "about", path: "#about" },

    { name: "contact", path: "/contact" },
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full fixed bg-white text-[20px] z-50 top-0 shadow-sm"
    >
      <div className="lg:max-w-[1200px] mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo and Hamburger */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <h1 className="text-[22px] font-bold">Mero Pasal</h1>
          <button
            className="lg:hidden flex justify-end "
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex w-[22rem] bg-[#F5F5F5] p-2 items-center rounded-lg mx-4">
          <svg
            className="text-gray-600 mr-2"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M505 442.7L405.3 343c28.3-34.9 45.4-79 45.4-127C450.7 96.5 354.2 0 232.3 0S14 96.5 14 216s96.5 216 216.3 216c48 0 92.1-17.1 127-45.4l99.7 99.7c4.5 4.5 10.6 6.8 16.7 6.8s12.2-2.3 16.7-6.8c9.1-9.2 9.1-24.2 0-33.4zM232.3 392c-97.1 0-176-78.9-176-176s78.9-176 176-176 176 78.9 176 176-78.9 176-176 176z"></path>
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="ml-2 focus:outline-none bg-[#F5F5F5] w-full placeholder-[#656565] text-[16px]"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-8 text-[16px] text-gray-400">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname && "text-black"
              } capitalize font-medium hover:text-black`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="hidden lg:flex space-x-6 text-gray-500">
          <Heart size="20px" />
          <Link
            href={"/cart"}
            className={`${
              pathname == "/cart" && "text-black"
            } capitalize font-medium hover:text-black`}
          >
            <ShoppingCart size="20px" />
          </Link>
          <User size="20px" />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenu && (
        <div className="lg:hidden px-4 pb-4 space-y-4 bg-white shadow-md">
          {/* Search section */}
          <div className="w-full bg-[#F5F5F5] p-2 flex items-center rounded-lg">
            <svg
              className="text-gray-600 mr-2"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M505 442.7L405.3 343c28.3-34.9 45.4-79 45.4-127C450.7 96.5 354.2 0 232.3 0S14 96.5 14 216s96.5 216 216.3 216c48 0 92.1-17.1 127-45.4l99.7 99.7c4.5 4.5 10.6 6.8 16.7 6.8s12.2-2.3 16.7-6.8c9.1-9.2 9.1-24.2 0-33.4zM232.3 392c-97.1 0-176-78.9-176-176s78.9-176 176-176 176 78.9 176 176-78.9 176-176 176z"></path>
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="ml-2 focus:outline-none bg-[#F5F5F5] w-full placeholder-[#656565] text-[16px]"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-2 text-[16px] text-gray-700">
            {links.map((link, index) => (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname && "text-black"
                } capitalize font-medium hover:text-black`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex space-x-6 pt-4 text-gray-700">
            <Heart size="20px" />
            <Link href={"/cart"}>
              <ShoppingCart size="20px" />
            </Link>
            <User size="20px" />
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default NavBar;
