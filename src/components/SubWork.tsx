"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  src: string;
  title: string;
  sub1: string;
  sub2: string;
  link: string;
};

export default function SubWork({ src, title, sub1, sub2, link }: Props) {
  return (
    <div>
      {/* Container hides the zoom overflow */}
      <div className="relative w-full h-[350px] sm:h-[500px] overflow-hidden">
        <motion.img
          src={src}
          alt={title}
          className="w-full h-full object-cover will-change-transform"
          initial={{ scale: 1.15, opacity: 0.9 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }} 
          viewport={{ once: false, amount: 0.6 }} 
        />
      </div>

      <div className="flex sm:items-center sm:justify-between mt-4 gap-3 sm:gap-0 sm:mt-8 flex-col sm:flex-row">
        <Link href={link} className="text-lg font-bold capitalize">
          {title}
        </Link>
        <div className="flex items-center gap-3">
          <span className="px-6 py-1 border border-gray-200 text-[#696969] font-medium rounded-full capitalize text-xs sm:text-sm">
            {sub1}
          </span>
          <span className="px-6 py-1 border border-gray-200 text-[#696969] font-medium rounded-full capitalize text-xs sm:text-sm">
            {sub2}
          </span>
        </div>
      </div>
    </div>
  );
}
