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
      "I developed a fullstack web application for appointment management to help students at University Constantine 2 schedule visits with specialists at the psychology center for specific mental health concerns.",
    continue_desc1:
      "The app includes three main services: speech therapy, clinical psychology, and educational problems. It also features an admin dashboard for staff to organize and manage schedules. The app is fully functional and currently in use at the university.",
    client_name: "Psychology Center, University Constantine 2 Abdelhamid Mehri",
    date: "2025",
    impact: "Next.js, Fullstack, Branding",
    client_location: "Constantine, Algeria",
    images: [
      "/project/web/brain/1.png",
      "/project/web/brain/2.png",
      "/project/web/brain/3.png",
      "/project/web/brain/4.png",
    ],
  },
  {
    id: 2,
    name: "apptechfos",
    description1:
      "A fullstack web app for French training programs, where users can select specific courses or follow an autodidactic path. They can purchase training programs and access educational videos and tutorials.",
    continue_desc1:
      "Developed with Next.js and deployed on Vercel with a Neon database. The project was delivered to the co-founder as part of a startup still in its early stage.",
    client_name: "Maissa Aichor",
    date: "2024",
    impact: "Web Apps, Education",
    client_location: "Algiers, Algeria",
    images: [
      "/project/web/apptechfos/1.png",
      "/project/web/apptechfos/2.png",
      "/project/web/apptechfos/3.png",
      "/project/web/apptechfos/4.png",
    ],
  },
  {
    id: 3,
    name: "tastrovaldz",
    description1:
      "A secure web application developed for a startup labeled as 'Ikhtira3' in Algeria. The app focuses on healthy food and pastry, working like an e-commerce platform but with the innovation of allowing users to customize the ingredients of each pastry product.",
    continue_desc1:
      "Built with Next.js and deployed on Vercel with a Neon database. The app is currently in use by admins and users, and has been recognized as an innovative project in Algeria.",
    client_name: "Iskandar Seif Eddin",
    date: "2024",
    impact: "Web Apps, Healthy Pastry",
    client_location: "Istanbul, Turkey",
    images: [
      "/project/web/tastroval/1.png",
      "/project/web/tastroval/2.png",
      "/project/web/tastroval/3.png",
      "/project/web/tastroval/4.png",
    ],
  },
  {
    id: 4,
    name: "satstore",
    description1:
      "An e-commerce platform specialized in TV components and accessories. Products include both physical items (TVs, remotes, dishes) and digital items (subscription codes like BeIN Sport). Users can browse products, add them to the cart, and complete purchases using the Edahabia payment method.",
    continue_desc1:
      "Built with Next.js and deployed on Vercel with a Neon database. The app is actively used by both admins and customers.",
    client_name: "Mamoni Aissaoui",
    date: "2025",
    impact: "Web Apps, E-commerce",
    client_location: "Algiers, Algeria",
    images: [
      "/project/web/satstore/1.png",
      "/project/web/satstore/2.png",
      "/project/web/satstore/3.png",
      "/project/web/satstore/4.png",
    ],
  },
  {
    id: 5,
    name: "Flamant",
    description1:
      "Flamant is a multi-sector e-commerce web application developed as part of our bachelor’s graduation project. It provides a modern, intuitive interface where sellers can manage their shops and customers can easily browse and purchase products.",
    continue_desc1:
      "The platform integrates order management, complaint handling, admin statistics, and secure authentication. Built with React/Next.js and MySQL, and deployed on Vercel, Flamant won 2nd place in Constantine 2 University’s 2023 Best Bachelor Project competition.",
    client_name: "Redha Langueur",
    date: "2024",
    impact: "Web Apps, E-commerce, User Experience",
    client_location: "Setif, Algeria",
    images: [
      "/project/web/flamant/1.png",
      "/project/web/flamant/2.png",
      "/project/web/flamant/3.png",
      "/project/web/flamant/4.png",
      "/project/web/flamant/5.png",
    ],
  },
  {
    id: 6,
    name: "tasnif",
    description1:
      "A fullstack web app with guest and registered user modes. It integrates a machine learning + NLP model for Arabic text classification into 7 categories (politics, medicine, sports, etc.). Registered users can also view their test history.",
    continue_desc1:
      "Built with Next.js + Flask + MySQL database. The project was awarded 'Best Project' in Master 1 at the university and certified accordingly.",
    client_name: "University Project",
    date: "2024",
    impact: "Web Apps, Machine Learning, NLP",
    client_location: "Constantine, Algeria",
    images: [
      "/project/web/tasnif/1.png",
      "/project/web/tasnif/2.png",
      "/project/web/tasnif/3.png",
      "/project/web/tasnif/4.png",
    ],
  },
  {
    id: 7,
    name: "QynAI",
    description1:
      "A fullstack web app with guest and registered user modes. It integrates a deep learning + NLP model for AI-text detection in paragraphs and articles, built from scratch using CNN and BLSTM neural networks. Registered users can access their test history.",
    continue_desc1:
      "Built with Next.js + FastAPI + MySQL database. This project was recognized as the best Master 1 project at the university and certified accordingly.",
    client_name: "University Project",
    date: "2024",
    impact: "Web Apps, Deep Learning, NLP",
    client_location: "Constantine, Algeria",
    images: [
      "/project/web/qyn/1.png",
      "/project/web/qyn/2.png",
      "/project/web/qyn/3.png",
      "/project/web/qyn/4.png",
    ],
  },
  {
    id: 8,
    name: "Lookking",
    description1:
      "Lookking is a full-featured e-commerce web application built with Next.js (frontend) and FastAPI (backend). It offers a seamless shopping experience with modern UI design, Framer Motion animations, and secure authentication using NextAuth and bcrypt.",
    continue_desc1:
      "The platform implements strong security practices, scalable APIs for product and order management, and a responsive frontend optimized for performance. Planned future updates include a machine learning–based recommendation system. This project is available for sale and demonstrates production-ready fullstack development skills.",
    client_name: "Personal Project",
    date: "2025",
    impact: "E-commerce, Fullstack Development, Web Security",
    client_location: "Algeria",
    images: [
      "/project/web/lookking/1.jpeg",
      "/project/web/lookking/2.jpeg",
      "/project/web/lookking/3.jpeg",
      "/project/web/lookking/4.jpeg",
    ],
  },
  {
    id: 9,
    name: "Lifeplus",
    description1:
      "Lifeplus is an AI-powered web application for skin cancer detection. Using a Convolutional Neural Network (CNN), it distinguishes between benign and malignant skin lesions, achieving 88.6% accuracy and a macro-averaged ROC-AUC of 0.95 on the HAM10000 dataset.",
    continue_desc1:
      "The app integrates a Next.js frontend with a FastAPI backend. Users can upload skin lesion images and receive instant predictions with confidence scores. Planned improvements include multi-class classification, advanced preprocessing, hybrid architectures, and mobile/edge deployment for real-time clinical use.",
    client_name: "Personal Project",
    date: "2025",
    impact: "AI, Deep Learning, Medical Imaging, Web Apps",
    client_location: "Algeria",
    images: [
      "/project/web/lifeplus/1.jpeg",
      "/project/web/lifeplus/2.jpeg",
      "/project/web/lifeplus/3.jpeg",
    ],
  },
  {
  id: 10,
  name: "NepsyAI",
  description1:
    "NepsyAI is an intelligent web-based platform designed for early screening and personalized support of neurodevelopmental disorders (NDD), with a particular focus on Autism Spectrum Disorder (ASD) and Attention Deficit Hyperactivity Disorder (ADHD). It integrates validated clinical questionnaires with machine learning models to provide accurate, interpretable results.",
  continue_desc1:
    "The system combines a screening engine with an intelligent conversational assistant built using fine-tuned LLMs, RAG, and Gemini API, enabling empathetic interaction, detailed feedback, and actionable guidance. It offers multilingual support (English, French, Arabic), secure data management, and features like screening history, user dashboards, and clinic recommendations. This project highlights the potential of combining validated clinical tools with modern AI to improve accessibility and early detection in mental health.",
  client_name: "University project",
  date: "2025", 
  impact: "AI Screening, Web Platform, Mental Health Innovation",
  client_location: "Algeria & Finland",
  images: [
    "/project/web/nepsyai/1.png",
    "/project/web/nepsyai/2.png",
    "/project/web/nepsyai/3.png",
    "/project/web/nepsyai/4.png",
    "/project/web/nepsyai/5.png",
  ],
}
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
