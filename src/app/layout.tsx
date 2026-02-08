import type { Metadata } from "next";
import { Geist, Geist_Mono,Inter_Tight } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmothScroll";
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
})

export const metadata: Metadata = {
  title: "Yahia Slimani", // Change this to your actual title
  description: "Yahia slimani portfolio", // Change this too
  icons: {
    icon: '/YS logo.png',
    shortcut: '/YS logo.png',
    apple: '/YS logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.className}`}
      >
        <SmoothScroll/>
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}