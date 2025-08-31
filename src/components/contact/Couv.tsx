import React from "react";

export default function Couv() {
  return (
    <div>
        <div className="md:px-16 lg:px-20 xl:px-28">
        <span className="chip1 uppercase border rounded-full border-gray-200 px-5 py-2 bg-white text-[#0F0F0F] text-xs sm:text-sm font-medium">
            Contact Me
        </span>

        <h1 style={{lineHeight : 1}} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] font-bold uppercase mb-0 w-full mt-10">Contact Us</h1>

        </div>
        <div className="pt-12 md:pt-16 lg:pt-24 xl:pt-32">
            <img src="./contact-us-img-1.png" alt=""  className="w-full"/>
        </div>
      </div>
  );
}
