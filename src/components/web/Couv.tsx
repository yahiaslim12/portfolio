"use client";
import React, { useState } from "react";
import SplitText from "../ui/SpliteText";
import Project from "./Project";

export type ProjectType = {
  id: number;
  name: string;
  description1: string;
  continue_desc1: string;
  client_name: string;
  date: string;
  impact: string;
  client_location: string;
  images: string[];
};

export default function Couv() {
  const [prjt] = useState<ProjectType[]>([
    {
      id: 1,
      name: "BRAIN",
      description1:
        "To create a compelling and modern 3D brand identity that visually represents the client’s core values.",
      continue_desc1:
        "This includes a 3D logo animation, branded product mockups, and environmental scenes.",
      client_name: "Xdesign Solutions",
      date: "2025",
      impact: "UI/UX, Fullstack, Branding",
      client_location: "London, UK",
      images: [
        "/project/web/brain/1.png",
        "/project/web/brain/2.png",
        "/project/web/brain/3.png",
        "/project/web/brain/4.png",
      ],
    },
    {
      id: 2,
      name: "PORTAL",
      description1:
        "A secure fullstack platform enabling data analytics and role-based dashboards.",
      continue_desc1:
        "Developed with Next.js, FastAPI, PostgreSQL, and deployed on Vercel + Supabase.",
      client_name: "DataTech Ltd",
      date: "2024",
      impact: "Web Apps, Data Science",
      client_location: "Berlin, Germany",
      images: [
        "/project/web/portal/1.png",
        "/project/web/portal/2.png",
        "/project/web/portal/3.png",
        "/project/web/portal/4.png",
      ],
    },
  ]);

  return (
    <div>
      <span className="chip1 uppercase border rounded-full border-gray-200 px-5 py-2 bg-white text-[#0F0F0F] text-xs sm:text-sm font-medium">
        Fullstack projects
      </span>

      <SplitText
        text="Building Scalable Web Apps"
        tag="h1"
        splitType="words, chars"
        delay={40}
        duration={0.6}
        ease="power3.out"
        from={{ opacity: 0, y: 40, rotateX: 15 }}
        to={{ opacity: 1, y: 0, rotateX: 0 }}
        threshold={0.15}
        rootMargin="-80px"
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] font-bold uppercase mb-0 w-full mt-10"
        textAlign="left"
      />

      {/* Projects list */}
      <section className="mt-16 flex flex-col gap-32">
        {prjt.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </section>
    </div>
  );
}
