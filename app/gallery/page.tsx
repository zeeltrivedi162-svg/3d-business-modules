"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface GalleryItem {
  id: number;
  title: string;
  slug: string;
  image: string;
  category?: string;
  description?: string;
}

export default function Gallery() {
  const [galleryImages, setGalleryImages] = useState<GalleryItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState<number[]>([]);
  const [search, setSearch] = useState("");
  const [autoSlide, setAutoSlide] = useState(false);

  useEffect(() => {
    fetch("http://192.168.1.32:8000/api/gallery")
      .then((res) => res.json())
      .then((data) => {
        const withCategory = data.map((item: any, i: number) => ({
          ...item,
          category: ["3D", "Design", "Model"][i % 3],
          description: item.description || "High quality 3D creative work",
        }));
        setGalleryImages(withCategory);
        setLoading(false);
      });

    const savedLikes = localStorage.getItem("likes");
    if (savedLikes) setLiked(JSON.parse(savedLikes));
  }, []);

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(liked));
  }, [liked]);

  useEffect(() => {
    if (!autoSlide || selectedIndex === null) return;
    const interval = setInterval(() => {
      setSelectedIndex((prev) => {
        if (prev === null) return prev;
        return (prev + 1) % filteredImages.length;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [autoSlide, selectedIndex]);

  const categories = ["All", "3D", "Design", "Model"];

  const filteredImages = galleryImages
    .filter((img) =>
      activeCategory === "All" ? true : img.category === activeCategory
    )
    .filter((img) =>
      img.title.toLowerCase().includes(search.toLowerCase())
    );

  const visibleImages = filteredImages.slice(0, visibleCount);

  const toggleLike = (id: number) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const selectedItem = selectedIndex !== null ? filteredImages[selectedIndex] : null;

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-yellow-50 to-white text-gray-900">

      {/* HEADER */}
      <div className="text-center py-10 px-4">
           <h1 className="text-4xl md:text-5xl font-extrabold">
          Creative <span className="text-yellow-500">3D Gallery</span>
        </h1>

        <input
          type="text"
          placeholder="Search images..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-5 px-4 py-2 border rounded-full w-full max-w-md outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* FILTER */}
      <div className="flex justify-center gap-3 flex-wrap mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setVisibleCount(8);
              setSelectedIndex(null);
            }}
            className={`px-4 py-2 rounded-full text-sm ${
              activeCategory === cat
                ? "bg-yellow-400 text-black"
                : "bg-white border text-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid gap-6 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {visibleImages.map((item, index) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-white rounded-xl shadow hover:shadow-2xl overflow-hidden"
          >
            <div
              className="relative h-52 cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={item.image}
                className="w-full h-full object-cover"
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLike(item.id);
                }}
                className="absolute top-3 right-3 text-xl"
              >
                {liked.includes(item.id) ? "❤️" : "🤍"}
              </button>
            </div>

            <div className="p-3">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-xs text-gray-500">{item.category}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* LOAD MORE */}
      {visibleCount < filteredImages.length && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisibleCount((prev) => prev + 8)}
            className="px-6 py-2 bg-yellow-400 rounded-full hover:scale-105 transition"
          >
            Load More
          </button>
        </div>
      )}

      {/* MODAL */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-xl max-w-3xl w-full relative">

            <button
              className="absolute top-3 right-3"
              onClick={() => setSelectedIndex(null)}
            >
              ✕
            </button>

            <img
              src={selectedItem.image}
              className="w-full max-h-[400px] object-contain"
            />

            <h2 className="text-xl font-bold mt-4">{selectedItem.title}</h2>
            <p className="text-gray-600 mt-2">{selectedItem.description}</p>

            <div className="flex justify-between mt-4">
              <button
                onClick={() => setSelectedIndex((prev) => (prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : 0))}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Prev
              </button>

              <button
                onClick={() => setSelectedIndex((prev) => (prev !== null ? (prev + 1) % filteredImages.length : 0))}
                className="px-4 py-2 bg-yellow-400 rounded"
              >
                Next
              </button>
            </div>

            {/* Auto Slide */}
            <div className="mt-4 text-center">
              <button
                onClick={() => setAutoSlide(!autoSlide)}
                className="px-4 py-2 bg-black text-white rounded"
              >
                {autoSlide ? "Stop Auto Slide" : "Start Auto Slide"}
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}