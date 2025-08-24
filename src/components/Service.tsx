import React from "react";

type ServiceProps = {
  src: string;
  title: string;
  description: string;
};

export default function Service({ src, title, description }: ServiceProps) {
  return (
    <div
      className="
        group border-r border-gray-200 p-10
        w-full sm:w-1/2 md:w-1/4 lg:hover:w-[35%]
        transition-[width] duration-500 ease-out
        flex flex-col
        border-b md:border-b-0
      "
    >
      {/* image */}
      <img src={src} alt={title} className="w-[60px] h-[60px]" />

      {/* animated spacer */}
      <div
        className="
          flex-1 max-h-96 overflow-hidden
          transition-[max-height] duration-500 ease-out
          group-hover:max-h-0
          delay-100
        "
      />

      {/* title */}
      <h3
        className="
          mt-40 font-semibold text-lg sm:text-xl text-start
          -translate-y-1 
          group-hover:mt-8 group-hover:mb-20 group-hover:translate-y-0
          transition-[margin,transform] duration-500 ease-out delay-200
        "
      >
        {title}
      </h3>

      {/* details */}
      <div
        className="
          overflow-hidden
          max-h-0 opacity-0 translate-y-2
          transition-[max-height,opacity,transform] duration-400 ease-out
          group-hover:max-h-40 group-hover:opacity-100 group-hover:translate-y-0
          delay-400
          flex flex-col gap-3
        "
      >
        <p className="text-sm text-[#696969]">{description}</p>
        <button className="text-base font-bold w-fit hover:underline">
          View Detail
        </button>
      </div>
    </div>
  );
}