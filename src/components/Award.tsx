"use client";
import React from "react";
import { motion } from "framer-motion";

type AwardProps = Record<string, string> & {
  c?: string;
};

export default function Award({ date, title, small_desc, c }: AwardProps) {
  return (
    <motion.div
      className={
        "border-t border-gray-200 w-full grid grid-cols-1 sm:grid-cols-[0.5fr_1fr_2fr] py-5 gap-3 " +
        (c ?? "")
      }
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }} // animate every time it enters view
    >
      <span className="text-[#696969] font-medium">{date}</span>
      <h1 className="text-base sm:text-lg font-medium">{title}</h1>
      <span className="text-[#696969] font-medium text-sm">{small_desc}</span>
    </motion.div>
  );
}
