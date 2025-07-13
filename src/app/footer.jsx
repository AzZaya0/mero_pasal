import React from "react";
import { Twitter, Facebook, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 text-sm">
        {/* Left section - Logo & description */}
        <div>
          <h2 className="text-white text-[22px] font-semibold mb-3">mero pasal</h2>
          <p className="text-gray-400">
            We are a residential interior design firm located in Portland. Our boutique-studio offers more than
          </p>

          <div className="flex gap-4 mt-8 md:mt-20 text-xl">
            <a href="#" className="hover:text-gray-300">
              <Twitter />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Facebook />
            </a>
            <a href="#" className="hover:text-gray-300">
              K
            </a>
            <a href="#" className="hover:text-gray-300">
              <Instagram />
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div>
          <h3 className="font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Bonus program</a></li>
            <li><a href="#">Gift cards</a></li>
            <li><a href="#">Credit and payment</a></li>
            <li><a href="#">Service contracts</a></li>
            <li><a href="#">Non-cash account</a></li>
            <li><a href="#">Payment</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="font-semibold text-white mb-4">Assistance to the buyer</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Find an order</a></li>
            <li><a href="#">Terms of delivery</a></li>
            <li><a href="#">Exchange and return of goods</a></li>
            <li><a href="#">Guarantee</a></li>
            <li><a href="#">Frequently asked questions</a></li>
            <li><a href="#">Terms of use of the site</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
