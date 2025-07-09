import React from "react";

function NavBar() {
  return (
    <div className="w-full  bg-cyan-100 text-[20px] z-50 fixed top-0">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center py-5 px-4">
        <h1 className="text-[26px] font-bold">cyber</h1>

        <div className="w-[25rem] bg-white  p-2 flex justify-start items-center rounded-lg">
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
            className="ml-2 focus:outline-none"
          />
        </div>

        <div className="flex space-x-8">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Blog</a>
        </div>

        <div className=" flex space-x-6">
          <button>hi</button>
          <button>bye</button>
          <button>hello</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
