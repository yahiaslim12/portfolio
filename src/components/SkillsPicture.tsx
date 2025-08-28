"use client";
import React, { useRef } from "react";
import TextCouv from "./TextCouv";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SkillsPicture() {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
    // "start end" = when top of section hits bottom of viewport (0)
    // "end start" = when bottom of section hits top of viewport (1)
  });

  // Map scroll progress [0 → 1] to a scale value [1.2 → 1]
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  // You can also move it (for parallax-y feel)
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={ref}
      className="border-b lg:border-b-0 lg:border-r border-gray-200 w-full lg:w-1/2 
                 pr-0 lg:pr-8 xl:pr-16 py-12 md:py-16 lg:py-24 xl:py-32"
    >
      <div className="flex relative overflow-hidden">
        <motion.img
          src="/yahia.jpg"
          alt="Yahia Slimani"
          className="w-full h-full object-cover will-change-transform"
          style={{ scale, y }} 
        />

        <TextCouv />
      </div>
    </div>
  );
}
