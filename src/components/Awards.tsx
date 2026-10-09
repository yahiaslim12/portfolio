"use client";
import React from "react";
import Award from "./Award";
import SplitText from "./ui/SpliteText";
import type { Achievement } from "@/lib/defaults";

export default function Awards({ awards }: { awards: Achievement[] }) {
  return (
    <section className="mt-12 md:mt-16 lg:mt-24 xl:mt-32 md:px-16 lg:px-20 xl:px-28">
      <div className="grid gap-10 lg:gap-16 grid-cols-1 lg:grid-cols-[1fr_2fr] items-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10">
          <SplitText
            text="Let’s Explore My Awards & Achievements"
            tag="h1"
            splitType="words, chars"
            delay={40}
            duration={0.6}
            ease="power3.out"
            from={{ opacity: 0, y: 40, rotateX: 15 }}
            to={{ opacity: 1, y: 0, rotateX: 0 }}
            threshold={0.15}
            rootMargin="-80px"
            className="text-3xl md:text-4xl lg:text-5xl font-semibold"
            textAlign="left"
          />
          <div className="flex justify-center w-full">
            <img src="/trophy.png" alt="" className="w-8/12 sm:w-10/12" />
          </div>
        </div>

        <ul className="space-y-4">
          {awards.map((item, i) => (
            <li key={"award-" + item.id}>
              <Award
                date={item.date}
                title={item.title}
                small_desc={item.description}
                c={i === awards.length - 1 ? "border-b" : ""}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
