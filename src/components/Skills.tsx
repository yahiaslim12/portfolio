"use client";
import React from "react";
import SkillsPicture from "./SkillsPicture";
import Title from "./Title";
import Skill from "./Skill"; // the card component below
import SplitText from "./ui/SpliteText";

type SkillItem = {
  src: string;
  label: string;
  desc: string;
};

const skills: SkillItem[] = [
  {
    src: "/icons/frontend.jpg",
    label: "Frontend",
    desc: "React, Next.js, Tailwind, shadcn/ui, SSR/ISR, accessibility.",
  },
  {
    src: "/icons/backend.jpg",
    label: "Backend",
    desc: "Python (FastAPI), Node.js, REST, Auth, caching, testing.",
  },
  {
    src: "/icons/mobile.jpg",
    label: "Mobile Development",
    desc: "React Native, shared codebases, iOS/Android deploys.",
  },
  {
    src: "/robot.webp",
    label: "Machine Learning",
    desc: "pandas, scikit-learn, PyTorch, feature engineering, eval.",
  },
  {
    src: "/icons/rl.jpg",
    label: "Reinforcement Learning",
    desc: "Gymnasium, DQN/PPO, policy gradients, custom environments.",
  },
  {
    src: "/robot.webp",
    label: "MLOps & Data",
    desc: "PostgreSQL/Supabase, Prisma, Docker, CI/CD, monitoring.",
  },
];

export default function Skills() {
  return (
    <div className="flex flex-col lg:flex-row items-stretch min-h-screen border-b border-gray-200"> 
      <SkillsPicture />

      {/* Right column */}
      <div className="w-full lg:w-1/2 pl-0 lg:pl-8 xl:pl-16 py-12 md:py-16 lg:py-24 xl:py-32  flex flex-col min-h-0">
        <Title title="best skills" />
        <SplitText
                    text="AI Software Engineer & Full-Stack Developer turning data into products."
                    tag="h1"
                    splitType="words, chars"
                    delay={40}                 
                    duration={0.6}
                    ease="power3.out"
                    from={{ opacity: 0, y: 40, rotateX: 15 }}
                    to={{ opacity: 1, y: 0, rotateX: 0 }}
                    threshold={0.15}
                    rootMargin="-80px"
                    className="text-3xl md:text-4xl lg:text-5xl font-semibold w-full mb-8 mt-10"
                    textAlign="left"
                    />
        
        <div
          className="
            flex-1 min-h-0
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-3 xl:gap-6
            auto-rows-fr     
            rounded-2xl
          "
        >
          {skills.map((s, i) => (
            <Skill key={i} src={s.src} label={s.label} desc={s.desc} id={i + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}
