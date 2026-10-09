export type Experience = { id: number; date: string; title: string; company: string };
export type Education = { id: number; title: string; place: string; period: string };
export type Achievement = { id: number; date: string; title: string; description: string };

export type Kind = "experience" | "education" | "achievement";

// Shown when no database is configured, and used to seed an empty database.
export const defaultExperience: Omit<Experience, "id">[] = [
  { date: "Jun 2023 - Present", title: "Software Developer | Data Scientist | AI Model Creator", company: "Freelance" },
  { date: "Jun - Jul (2024)", title: "Web Developer", company: "Devlly, Constantine, Algeria" },
  { date: "Sep 2025 - Present", title: "IT Engineer", company: "Cosider Travaux Publics" },
];

// Newest first
export const defaultEducation: Omit<Education, "id">[] = [
  { title: "PhD Student in Quantum Computing and AI", place: "Constantine 2 University – Abdelhamid Mehri, Constantine, Algeria", period: "Nov 2025 - Present" },
  { title: "Master’s in Data Science and Artificial Intelligence", place: "Constantine 2 University – Abdelhamid Mehri, Constantine, Algeria", period: "Oct 2023 - Jul 2025" },
  { title: "Bachelor’s Degree in Computer Science (Software Engineering)", place: "Constantine 2 University – Abdelhamid Mehri, Constantine, Algeria", period: "Nov 2020 - Jun 2023" },
  { title: "Baccalaureate in Experimental Sciences", place: "Khira Zarouki High School, Chelghoum Laïd, Algeria", period: "Oct 2020" },
];

export const defaultAchievements: Omit<Achievement, "id">[] = [
  { date: "2023", title: "2nd Place FLAMANT E-commerce (University Competition)", description: "Large-scale multi-sector e-commerce platform recognized in a university contest." },
  { date: "2023–2024", title: "Best University Project Tasnif (Arabic Article Classification)", description: "NLP/ML web app (Next.js + Flask) for automatic classification of Arabic articles." },
  { date: "2024–2025", title: "Best Promotion Project QynAI (AI-Text Detection)", description: "Deep learning model detecting AI-generated text, integrated into a web interface." },
  { date: "2025", title: "Research Publication Skin Cancer Classification (SYCOM Journal)", description: "AI model for medical image classification; research published and deployed to the web." },
  { date: "2025", title: "“Innovative Project” Label Tastrovaldz Startup", description: "Client’s startup earned the label thanks to the web application you created." },
  { date: "2025", title: "Label Startup Nepsy AI (Master’s Thesis Project)", description: "My master’s thesis project received the 'Label Startup' recognition for being an innovative project." },
  { date: "2025", title: "Success in Quantum Computing PhD Admission", description: "Successfully passed the competitive selection process for a PhD in Quantum Computing and AI." },
];
