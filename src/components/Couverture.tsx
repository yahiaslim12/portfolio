"use client";
import React from "react";

export default function Couverture() {
  return (
    <section className="relative w-full h-auto pb-10 lg:pb-0 lg:h-[125vh] border-b border-gray-200">
      {/* grid overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none flex">
        {Array.from({ length: 13 }).map((_, i) => (
          <div
            key={i}
            className={`h-full w-[calc(100%/6)] sm:w-[calc(100%/13)] ${i !== 12 ? "border-r border-gray-200" : ""} ${i === 0 || i === 1 || i === 2 || i === 3 || i === 4 || i === 5 ? "hidden sm:block" : ""}`}
          />
        ))}
      </div>

      {/* content ABOVE the grid */}
      <div className="relative z-10 pt-40">
        <div className="flex flex-wrap items-center gap-5 mb-10">
          <span className="uppercase border rounded-full border-gray-200 px-5 py-2 bg-white text-[#0F0F0F] text-xs sm:text-sm font-medium">
            Data Science & AI
          </span>
          <span className="uppercase border rounded-full border-gray-200 px-5 py-2 bg-white text-[#0F0F0F] text-xs sm:text-sm font-medium">
            Fullstack web & mobile developer
          </span>
        </div>

        <h1 style={{lineHeight : 1}} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] font-bold uppercase flex items-end justify-between mb-0 ">
          Data Scientist & AI Software Engineer
          <img src={"/hero-arrow.png"} className="w-[15vw] h-[10vw] lg:w-[2O0px] lg:h-[150px] mb-4 hidden md:block"/>
        </h1>
      </div>
      <div className="mt-10 md:mt-20 lg:mt-16 xl:mt-12 2xl:mt-28 ps-8 border-l-2 border-black z-10 uppercase relative">
            <p>Hey I&apos;m Yahia Slimani</p>
            <p><b>4+ Years</b> of experience</p>
            <p>In Web & mobile developement</p>
      </div>
      <div className="w-full flex justify-end relative z-10 mt-10 lg:mt-0 2xl:mt-10 ">
        <div className="w-[350px] h-[200px] ">
            <img src={"/dev.jpg"} alt="dev pic" className="w-full h-full rounded-xl object-cover"/>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 z-[11] -translate-x-1/2 hidden lg:block">
        <img src="/warda.png" alt="" className="absolute bottom-0 left-0"/>
        <img src={"/me.png"} alt="me" className="w-[600px] h-[500px] object-contain z-10 relative" />
      </div>
    </section>
  );
}
