"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function Home() {
  const counters = [
    { number: 150, label: "Projects Completed" },
    { number: 98, label: "Happy Clients" },
    { number: 5, label: "Years Experience" },
    { number: 24, label: "Team Members" },
  ];

  const services = [
    {
      title: "3D Product Design",
      desc: "Innovative 3D product models.",
      link: "/services/3d-product-design",
      image: "/image icon/3d-view.png",
    },
    {
      title: "3D Laser Scanning",
      desc: "High accuracy scanning.",
      link: "/services/3d-laser-scanning",
      image: "/image icon/3d-scanner.png",
    },
    {
      title: "3D Animation",
      desc: "Marketing-ready animations.",
      link: "/services",
      image: "/image icon/3d.png",
    },
    {
      title: "Rapid Prototyping",
      desc: "Convert ideas into reality.",
      link: "/services/3d-rendering-machine",
      image: "/image icon/three-dimensional-printing.png",
    },
  ];

  const galleryImages = [
    "/gallery1.jpg","/gallery2.jpg","/gallery3.jpg","/gallery4.jpg",
    "/gallery5.jpg","/gallery6.jpg","/gallery7.jpg","/gallery8.jpg",
  ];

  return (
    <main className="text-black bg-white overflow-x-hidden">

      {/* 🔥 HERO WITH VIDEO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">

        {/* 🌟 BACKGROUND GLOW */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-400/20 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* 🧠 LEFT */}
          <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Industrial <span className="text-yellow-500">3D Printing</span><br />
              & Rapid Prototyping
            </h1>

            <p className="mt-6 text-gray-600 text-lg max-w-lg">
              High-precision 3D printing, product design, and rapid prototyping
              to turn your ideas into real products faster.
            </p>

            <div className="flex gap-4 mt-8">
              <Link href="/services" className="px-8 py-3 bg-yellow-400 rounded-full font-semibold hover:scale-105 transition">
                Explore Services
              </Link>
              <Link href="/contact" className="px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
                Get Quote
              </Link>
            </div>
          </motion.div>

          {/* 🎥 RIGHT VIDEO */}
          <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border">

              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[400px] object-contain hover:scale-105 transition duration-500"
              >
                <source src="/background.mp4" type="video/mp4" />
              </video>

            </div>

            {/* FLOAT CARDS */}
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow border">
              <p className="text-sm font-semibold">Precision</p>
              <p className="text-xs text-gray-500">High Accuracy</p>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow border">
              <p className="text-sm font-semibold">Fast Delivery</p>
              <p className="text-xs text-gray-500">Rapid Prototyping</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 📊 COUNTERS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-4">
          {counters.map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white p-8 rounded-2xl shadow-xl border">
              <h2 className="text-3xl text-yellow-500 font-bold">
                <CountUp end={item.number} duration={3} />
              </h2>
              <p className="text-gray-600 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🧊 SERVICES */}
      <section className="py-24 px-4 md:px-12 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our <span className="text-yellow-500">3D Services</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 translate-x-2 translate-y-2 bg-yellow-300 rounded-3xl blur-lg opacity-40" />

              <div className="relative bg-white p-6 rounded-3xl shadow-xl border">
                <div className="text-center">

                  <div className="flex justify-center mb-5">
                    <div className="w-20 h-20 bg-yellow-100 rounded-xl flex items-center justify-center shadow">
                      <Image src={s.image} alt="" width={45} height={45} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{s.desc}</p>

                  <Link href={s.link} className="px-4 py-2 bg-yellow-400 rounded-full font-semibold hover:scale-110 transition inline-block">
                    View →
                  </Link>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🖼 GALLERY */}
      <section className="py-24 px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          3D <span className="text-yellow-500">Gallery</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, i) => (
            <motion.div key={i} whileHover={{ scale: 1.1 }} className="rounded-2xl overflow-hidden shadow-lg">
              <Image src={img} alt="" width={400} height={300} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="py-24 text-center bg-black text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s Build Something <span className="text-yellow-400">Amazing</span>
        </h2>

        <Link href="/contact" className="px-10 py-4 bg-yellow-400 text-black font-bold rounded-full hover:scale-105 transition">
          Start Project 🚀
        </Link>
      </section>

    </main>
  );
}