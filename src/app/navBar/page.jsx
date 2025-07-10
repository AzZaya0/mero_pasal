import React from "react";
import { ShoppingCart, Heart, User } from "lucide-react";

function NavBar() {
  return (
    <div className="w-full  text-[20px] z-50  top-0">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center py-4 px-4">
        <h1 className="text-[26px] font-bold">cyber</h1>

        <div className="w-[22rem] bg-[#F5F5F5]  p-2 flex justify-start items-center rounded-lg">
          <svg
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
            className="ml-2 focus:outline-none bg-[#F5F5F5]
            w-[25rem] placeholder-[#656565] text-[18px]
            "
          />
        </div>

        <div className="flex space-x-8">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact Us</a>
          <a href="">Blog</a>
        </div>

        <div className=" flex space-x-10">
          <Heart />
          <ShoppingCart />
          <User />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
