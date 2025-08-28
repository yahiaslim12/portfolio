"use client";
import React from "react";
import { motion } from "framer-motion";

type SkillProps = {
  src: string;
  label: string;
  desc: string;
  id: number;
};

export default function Skill({ src, label, desc, id }: SkillProps) {
  return (
    <motion.div
      className="py-6 px-4 border rounded-xl border-gray-200 flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }} // replays when card enters view
    >
      <div className="flex items-center gap-3 justify-between">
        <span className="font-medium text-[#696969] text-sm">{id}</span>
        <img src={src} alt={label} className="w-9 h-9 object-contain" />
      </div>
      <div className="mt-5 flex flex-col justify-between h-full">
        <div>
          <h1 className="text-xl font-medium">{label}</h1>
          <p className="text-[#696969] text-sm font-medium">{desc}</p>
        </div>
        <span className="border rounded-full py-2 border-gray-200 px-4 text-sm text-center text-[#696969] mt-5">
          Advanced
        </span>
      </div>
    </motion.div>
  );
}
