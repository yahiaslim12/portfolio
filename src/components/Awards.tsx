"use client";
import React from "react";
import Award from "./Award";
import SplitText from "./ui/SpliteText";

export type AwardProps = {
  date: string;
  title: string;
  small_desc: string;
};

const awards: AwardProps[] = [
  {
    date: "2023",
    title: "2nd Place FLAMANT E-commerce (University Competition)",
    small_desc:
      "Large-scale multi-sector e-commerce platform recognized in a university contest.",
  },
  {
    date: "2023–2024",
    title: "Best University Project Tasnif (Arabic Article Classification)",
    small_desc:
      "NLP/ML web app (Next.js + Flask) for automatic classification of Arabic articles.",
  },
  {
    date: "2024–2025",
    title: "Best Promotion Project QynAI (AI-Text Detection)",
    small_desc:
      "Deep learning model detecting AI-generated text, integrated into a web interface.",
  },
  {
    date: "2025",
    title: "Research Publication Skin Cancer Classification (SYCOM Journal)",
    small_desc:
      "AI model for medical image classification; research published and deployed to the web.",
  },
  {
    date: "2025",
    title: "“Innovative Project” Label Tastrovaldz Startup",
    small_desc:
      "Client’s startup earned the label thanks to the web application you created.",
  },
  {
    date: "2025",
    title: "Label Startup Nepsy AI (Master’s Thesis Project)",
    small_desc:
      "My master’s thesis project received the 'Label Startup' recognition for being an innovative project.",
  },
  {
    date: "2025",
    title: "Success in Quantum Computing PhD Admission",
    small_desc:
      "Successfully passed the competitive selection process for a PhD in Quantum Computing and AI.",
  },
];


export default function Awards() {
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
            <li key={"award-" + i}>
              <Award
                {...item}
                c={i === awards.length - 1 ? "border-b" : ""}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
