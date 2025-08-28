"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Title({ title }: { title: string }) {
  return (
    <motion.div
      className="flex gap-3 items-center"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.8 }} // animate once, when ~80% visible
    >
      <div className="h-1.5 w-1.5 bg-black rounded-full"></div>
      <span className="uppercase font-medium mb-0 text-sm sm:text-base">
        {title}
      </span>
    </motion.div>
  );
}
