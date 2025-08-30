"use client";
import React, { useState } from "react";
import { Modal, Box, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Project() {
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectImages = [
    "/project/web/brain/1.png",
    "/project/web/brain/2.png",
    "/project/web/brain/3.png",
    "/project/web/brain/4.png",
  ];

  const handleOpenModal = (index: number = 0) => {
    setCurrentImageIndex(index);
    setOpen(true);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + projectImages.length) % projectImages.length
    );
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowRight") handleNextImage();
    if (event.key === "ArrowLeft") handlePrevImage();
    if (event.key === "Escape") setOpen(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
      <div>
        <div
          onClick={() => handleOpenModal(0)}
          className="relative hover:cursor-pointer"
        >
          <img
            src="/project/web/brain/1.png"
            alt="Project preview"
            className="object-cover w-full h-auto lg:h-[400px] border-2 border-black"
          />
          
        </div>
      </div>

      {/* ...your right column content unchanged... */}
         <div className=''>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>Project Overview</h1>
        <p className='text-[#696969] mt-5'>
          To create a compelling and modern 3D brand identity that visually represents the
          client&apos;s core values across digital and physical touchpoints. This includes a 3D logo
          animation, branded product mockups, and environmental scenes
        </p>
        <p className='text-[#696969] mt-5'>
          To create a compelling and modern 3D brand identity that visually represents the
          client&apos;s core values across digital and physical touchpoints. This includes a 3D logo
          animation, branded product mockups, and environmental scenes
        </p>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold mt-5 sm:mt-10'>Project Info</h1>
        <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 gap-8'>
          <div>
            <span className='text-[#696969] font-medium'>Client</span>
            <h3 className='font-semibold text-lg'>Xdesign Solutions</h3>
          </div>
          <div>
            <span className='text-[#696969] font-medium'>Our impact areas</span>
            <h3 className='font-semibold text-lg'>Xdesign Solutions</h3>
          </div>
          <div>
            <span className='text-[#696969] font-medium'>Start Date</span>
            <h3 className='font-semibold text-lg'>Xdesign Solutions</h3>
          </div>
          <div>
            <span className='text-[#696969] font-medium'>Client Location</span>
            <h3 className='font-semibold text-lg'>Xdesign Solutions</h3>
          </div>
        </div>
      </div>
      {/* Modal */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        onKeyDown={handleKeyDown}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
>
  <Box
    sx={{
      position: "relative",
      outline: "none",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    }}
  >
    {/* Close Button */}
    <IconButton
      onClick={() => setOpen(false)}
      sx={{
        position: "absolute",
        top: 16,
        right: 16,
        color: "white",
        bgcolor: "rgba(0,0,0,0.6)",
        "&:hover": { bgcolor: "rgba(0,0,0,0.9)" },
        zIndex: 20,
      }}
    >
      <X size={24} />
    </IconButton>

    {/* Prev */}
    <IconButton
      onClick={handlePrevImage}
      sx={{
        position: "absolute",
        left: 16,
        top: "50%",
        transform: "translateY(-50%)",
        color: "white",
        bgcolor: "rgba(0,0,0,0.6)",
        "&:hover": { bgcolor: "rgba(0,0,0,0.9)" },
        zIndex: 10,
      }}
    >
      <ChevronLeft size={28} />
    </IconButton>

    {/* Next */}
    <IconButton
      onClick={handleNextImage}
      sx={{
        position: "absolute",
        right: 16,
        top: "50%",
        transform: "translateY(-50%)",
        color: "white",
        bgcolor: "rgba(0,0,0,0.6)",
        "&:hover": { bgcolor: "rgba(0,0,0,0.9)" },
        zIndex: 10,
      }}
    >
      <ChevronRight size={28} />
    </IconButton>

    {/* Image */}
    <img
      src={projectImages[currentImageIndex]}
      alt={`Project ${currentImageIndex + 1}`}
      className="max-w-[95vw] max-h-[95vh] object-contain rounded-md"
    />

    {/* Counter */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-60 px-4 py-1 rounded-full text-white text-sm">
      {currentImageIndex + 1} / {projectImages.length}
    </div>
  </Box>
</Modal>

    </div>
  );
}
