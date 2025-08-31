"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Drawer, IconButton } from "@mui/material";
import { Menu as MenuIcon, X as CloseIcon, MapPin, Phone, Mail } from "lucide-react";

export default function Nav() {
  const [inTop, setInTop] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setInTop(window.scrollY <= 1);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDrawer = (state: boolean) => () => setOpen(state);

  return (
    <header
      className={`px-3 flex justify-between items-center fixed top-0 left-0 w-full z-50 ${
        inTop ? "bg-transparent" : "bg-white shadow-lg"
      }`}
    >
      <div className="flex gap-20 justify-between items-center">
        <Link href={"/"}>
          <Image
            width={150}
            height={100}
            src="/logo.png"
            alt="my logo"
            className="object-cover"
          />
        </Link>
        <span className="font-semibold text-[#0F0F0F] text-lg hidden md:block">
          slimaniyahia53@gmail.com
        </span>
      </div>

      <nav className="w-fit md:w-[40%] xl:w-1/3 flex items-center justify-end lg:justify-between">
        <ul className="w-full items-center gap-10 font-medium hidden lg:flex">
          <li>
            <Link
              href={"/"}
              className="w-fit group relative hover:text-black transition-all duration-500"
            >
              Home
              <div className="h-[2px] bg-black w-full transition-all duration-500 absolute left-0 -bottom-0.5"></div>
            </Link>
          </li>
          <li className="text-[#696969]">
            <Link
              href={"/#about"}
              className="w-fit group relative hover:text-black transition-all duration-500"
            >
              About
              <div className="h-[2px] bg-black w-0 group-hover:w-full transition-all duration-500 absolute left-0 -bottom-0.5"></div>
            </Link>
          </li>
          <li className="text-[#696969]">
            <Link
              href={"/#services"}
              className="w-fit group relative hover:text-black transition-all duration-500"
            >
              Services
              <div className="h-[2px] bg-black w-0 group-hover:w-full transition-all duration-500 absolute left-0 -bottom-0.5"></div>
            </Link>
          </li>
          <li className="text-[#696969]">
            <Link
              href={"/contact"}
              className="w-fit group relative hover:text-black transition-all duration-500"
            >
              Contact
              <div className="h-[2px] bg-black w-0 group-hover:w-full transition-all duration-500 absolute left-0 -bottom-0.5"></div>
            </Link>
          </li>
        </ul>

        {/* Drawer toggle button */}
       <button onClick={toggleDrawer(true)} className="flex flex-col justify-center items-center gap-2 relative group"> 
            <span className="w-10 border-t-2 border-black"></span> 
            <span className="w-10 border-t-2 border-black"></span> 
            <span className='absolute bg-white left-0 bottom-0 w-0 h-0.5 group-hover:w-5 transition-all'></span> 
        </button>
      </nav>

      {/* Drawer */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <div className="w-[300px] md:w-[500px] p-6 flex flex-col gap-6 relative h-full">
          {/* Close Button + Logo */}
          <div className="flex justify-between items-center">
            <Image src="/logo.png" alt="logo" width={150} height={100} />
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </div>


          {/* About Me */}
          <div className="mt-6">
            <h2 className="text-lg font-bold mb-2">About Me</h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              I’m Yahia Slimani, an AI Software Engineer & Fullstack Developer.
              I specialize in building scalable web & mobile apps, integrating
              machine learning models, and delivering innovative AI solutions.
            </p>

            <Link href={"/contact"} className="flex justify-center bg-black text-white font-medium text-sm w-2/3 py-4 px-6 rounded-full !mt-5">Contact me</Link>
          </div>

          {/* Contact Info */}
          <div className="mt-auto">
            <h2 className="text-lg font-bold mb-3">Get in Touch</h2>
            <ul className="flex flex-col gap-3 text-sm md:text-base text-gray-700">
              <li className="flex items-center gap-2">
                <MapPin size={18} />
                Constantine, Algeria
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                +213 557 00 73 22
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                slimaniyahia53@gmail.com
              </li>
            </ul>
          </div>
           {/* Nav Links (mobile only) */}
          <ul className="flex flex-col gap-4 font-medium text-lg mt-4 lg:hidden">
            <li>
              <Link href={"/"} onClick={toggleDrawer(false)}>Home</Link>
            </li>
            <li>
              <Link href={"/#about"} onClick={toggleDrawer(false)}>About</Link>
            </li>
            <li>
              <Link href={"/#services"} onClick={toggleDrawer(false)}>Services</Link>
            </li>
            <li>
              <Link href={"/contact"} onClick={toggleDrawer(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      </Drawer>
    </header>
  );
}
