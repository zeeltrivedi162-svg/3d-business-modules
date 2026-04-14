"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const [services, setServices] = useState<any[]>([]);

useEffect(() => {
  fetch("http://192.168.1.32:8000/api/services")
    .then((res) => res.json())
    .then((data) => setServices(data.data || data));
}, []);

  return (
<div className="min-h-screen bg-gradient-to-br from-white via-yellow-50 to-yellow-100 text-gray-900">

  {/* 🌟 HERO */}
  <section className="relative py-24 px-6 md:px-16 text-center overflow-hidden">

    {/* SOFT YELLOW GLOW */}
    <div className="absolute w-[400px] h-[400px] bg-yellow-300/30 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
    <div className="absolute w-[400px] h-[400px] bg-yellow-200/30 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-4xl md:text-6xl font-extrabold"
    >
      Our{" "}
      <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
        Premium Services
      </span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mt-6 text-gray-600 max-w-2xl mx-auto"
    >
      Explore high-quality 3D services including design, rendering and scanning.
    </motion.p>
  </section>

  {/* 🔥 SERVICES */}
  <section className="px-6 md:px-16 pb-20 space-y-20">

    {services.map((item, index) => {

      const isReverse = index % 2 !== 0;

      return (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >

          {/* 🖼 IMAGE */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`${isReverse ? "md:order-2" : ""} relative h-[300px] md:h-[350px] rounded-3xl overflow-hidden shadow-xl group`}
          >
            {/* Yellow Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-300/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition duration-500 z-10" />

            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />
          </motion.div>

          {/* 📄 CONTENT */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className={`${isReverse ? "md:order-1" : ""} 
            bg-white/80 backdrop-blur-xl p-8 rounded-3xl 
            shadow-[0_10px_40px_rgba(250,204,21,0.2)] 
            border border-yellow-200`}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 
            bg-gradient-to-r from-yellow-500 to-yellow-600 
            bg-clip-text text-transparent">
              {item.title}
            </h2>

            <p className="text-gray-600 leading-relaxed">
              {item.description}
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-3 mt-6 text-sm">
              {[
                "High Quality Output",
                "Fast Delivery",
                "3D Interactive Ready",
                "Premium Support"
              ].map((f, i) => (
                <div
                  key={i}
                  className="bg-yellow-50 border border-yellow-200 px-3 py-2 rounded-lg"
                >
                  ⭐ {f}
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <Link
              href={`/services/${item.slug}`}
              className="inline-block mt-6 px-6 py-3 rounded-full 
              bg-yellow-400 text-black font-semibold 
              hover:bg-yellow-500 hover:scale-105 
              transition duration-300 shadow-md"
            >
              View Details →
            </Link>
          </motion.div>

        </motion.div>
      );
    })}

  </section>

</div>
  );
}