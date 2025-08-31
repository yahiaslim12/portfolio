"use client";
import React, { useState } from "react";
import { Modal, Box, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Define the props interface to match your ProjectType
interface ProjectProps {
  id: number;
  name: string;
  description1: string;
  continue_desc1: string;
  client_name: string;
  date: string;
  impact: string;
  client_location: string;
  images: string[];
}

export default function Project({
  name,
  description1,
  continue_desc1,
  client_name,
  date,
  impact,
  client_location,
  images
}: ProjectProps) {
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenModal = (index: number = 0) => {
    setCurrentImageIndex(index);
    setOpen(true);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + images.length) % images.length
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
            src={images[0]}
            alt={`${name} preview`}
            className="object-cover w-full h-auto lg:h-[400px] border-2 border-black"
          />
        </div>
      </div>

      <div className="">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">{name}</h1>
        <p className="text-[#696969] mt-5">{description1}</p>
        <p className="text-[#696969] mt-5">{continue_desc1}</p>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-5 sm:mt-10">
          Project Info
        </h1>
        
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <span className="text-[#696969] font-medium">Client</span>
            <h3 className="font-semibold text-lg">{client_name}</h3>
          </div>
          <div>
            <span className="text-[#696969] font-medium">Our impact areas</span>
            <h3 className="font-semibold text-lg">{impact}</h3>
          </div>
          <div>
            <span className="text-[#696969] font-medium">Start Date</span>
            <h3 className="font-semibold text-lg">{date}</h3>
          </div>
          <div>
            <span className="text-[#696969] font-medium">Client Location</span>
            <h3 className="font-semibold text-lg">{client_location}</h3>
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
            src={images[currentImageIndex]}
            alt={`${name} ${currentImageIndex + 1}`}
            className="max-w-[95vw] max-h-[95vh] object-contain rounded-md"
          />

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-60 px-4 py-1 rounded-full text-white text-sm">
            {currentImageIndex + 1} / {images.length}
          </div>
        </Box>
      </Modal>
    </div>
  );
}