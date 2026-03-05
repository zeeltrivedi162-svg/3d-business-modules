"use client";
import { useState } from "react";

export default function Gallery() {

  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
    "/gallery7.jpg",
    "/gallery8.jpg",
    "/gallery9.jpg",
    "/gallery10.jpg",
    "/gallery11.jpg",
    "/gallery12.jpg",
  ];

  return (
    <div className="min-h-screen px-4 sm:px-8 lg:px-16 py-12 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-center">

      {/* Title */}
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-10 tracking-wider">
        Our 3D Model Gallery
      </h1>

      {/* Gallery Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {galleryImages.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(img)}
            className="cursor-pointer overflow-hidden rounded-2xl shadow-xl transform transition duration-500 hover:-translate-y-3 hover:shadow-black/70"
          >
            <img
              src={img}
              alt={`3D Model ${index + 1}`}
              className="w-full h-[220px] sm:h-[250px] md:h-[270px] lg:h-[300px] object-cover transition duration-500 hover:scale-110"
            />
          </div>
        ))}

      </div>

      {/* Image Popup */}
{selectedImage && (
  <div
    onClick={() => setSelectedImage(null)}
    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
  >
    <img
      src={selectedImage}
      alt="Preview"
      className="w-auto h-auto max-w-[95%] max-h-[95vh] object-contain rounded-xl shadow-2xl"
    />
  </div>
)}
      

    </div>
  );
}