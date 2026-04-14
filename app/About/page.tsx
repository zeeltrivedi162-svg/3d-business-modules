"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function About() {

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-200, 200], [15, -15]);
  const rotateY = useTransform(mouseX, [-200, 200], [-15, 15]);
  const scale = useTransform(mouseY, [-200, 200], [1.02, 1]);

  const handleMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const reset = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <main className="bg-white text-gray-900 overflow-x-hidden relative">

      {/* 🌟 PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-2 h-2 bg-yellow-400 rounded-full top-20 left-10 animate-ping" />
        <div className="absolute w-2 h-2 bg-yellow-300 rounded-full bottom-20 right-20 animate-ping" />
      </div>

      {/* 🌟 HERO (OLD + IMPROVED) */}
      <section className="relative py-28 text-center overflow-hidden">

        <div className="absolute w-[600px] h-[600px] bg-yellow-300/30 blur-[160px] rounded-full top-[-150px] left-[-150px]" />
        <div className="absolute w-[500px] h-[500px] bg-yellow-400/20 blur-[140px] rounded-full bottom-[-100px] right-[-100px]" />

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About <span className="text-yellow-500">Our Studio</span>
        </motion.h1>

        <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
          We build next-gen 3D ecosystems combining design, engineering,
          and immersive storytelling for powerful digital experiences.
        </p>
      </section>

     {/* 🧠 WHO WE ARE (UPGRADED) */}
<section className="relative py-28 px-6 bg-gradient-to-b from-white via-yellow-50 to-orange-50 text-center overflow-hidden">

  {/* 🌟 Background Glow */}
  <div className="absolute w-[500px] h-[500px] bg-yellow-300/30 blur-[160px] rounded-full top-[-120px] left-[-120px]" />
  <div className="absolute w-[400px] h-[400px] bg-orange-300/20 blur-[140px] rounded-full bottom-[-120px] right-[-120px]" />

  {/* ✨ Floating dots */}
  <div className="absolute top-20 left-10 w-3 h-3 bg-yellow-400 rounded-full animate-ping" />
  <div className="absolute bottom-20 right-20 w-3 h-3 bg-orange-400 rounded-full animate-ping" />

  {/* Title */}
  <motion.h2
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-4xl md:text-5xl font-bold mb-8"
  >
    Who <span className="text-yellow-500">We Are</span>
  </motion.h2>

  {/* Glass Card */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7 }}
    whileHover={{ scale: 1.03 }}
    className="relative max-w-4xl mx-auto bg-white/60 backdrop-blur-xl border border-yellow-100 shadow-2xl rounded-3xl p-10"
  >

    {/* Inner glow */}
    <div className="absolute inset-0 bg-gradient-to-tr from-yellow-200/30 to-orange-300/20 rounded-3xl opacity-0 hover:opacity-100 transition duration-500" />

    {/* Text */}
    <p className="relative text-gray-700 text-lg md:text-xl leading-relaxed">
      We are a creative <span className="text-yellow-600 font-semibold">3D development studio</span> focused on building
      immersive web experiences using modern technologies like{" "}
      <span className="font-semibold">Three.js</span>,{" "}
      <span className="font-semibold">WebGL</span>,{" "}
      <span className="font-semibold">Blender</span>, and{" "}
      <span className="font-semibold">Next.js</span>.
    </p>

    {/* Bottom highlight line */}
    <div className="mt-6 h-1 w-24 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" />

  </motion.div>

</section>

     {/* 🧊 OLD 3D BUSINESS MODEL (UPGRADED) */}
<section className="relative py-28 px-6 bg-gradient-to-b from-gray-50 via-white to-yellow-50 overflow-hidden">

  {/* 🌟 Background Glow */}
  <div className="absolute w-[500px] h-[500px] bg-yellow-300/20 blur-[160px] rounded-full top-[-120px] left-[-120px]" />
  <div className="absolute w-[400px] h-[400px] bg-orange-300/20 blur-[140px] rounded-full bottom-[-120px] right-[-120px]" />

  {/* ✨ Floating dots */}
  <div className="absolute top-20 right-20 w-3 h-3 bg-yellow-400 rounded-full animate-ping" />
  <div className="absolute bottom-24 left-24 w-3 h-3 bg-orange-400 rounded-full animate-ping" />

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* 🧊 IMAGE 3D CARD */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      style={{ rotateX, rotateY, scale }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="relative rounded-3xl overflow-hidden shadow-2xl group border border-yellow-100"
    >

      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-300/30 to-orange-400/20 opacity-0 group-hover:opacity-100 transition duration-500 z-10" />

      {/* Image */}
      <Image
        src="/about logo.jpg"
        alt="3D Business"
        width={700}
        height={500}
        className="w-full group-hover:scale-110 transition duration-700"
      />

      {/* Shine effect */}
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition" />
    </motion.div>

    {/* 📄 CONTENT CARD */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="space-y-6"
    >

      <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
        Advanced 3D Business Model
      </h2>

      <p className="text-gray-600 text-lg leading-relaxed">
        Our 3D business model creates interactive digital environments
        where users can explore products and spaces in real-time.
      </p>

      <p className="text-gray-600 text-lg leading-relaxed">
        We use physics-based rendering, animation systems,
        and modern frameworks to deliver immersive experiences.
      </p>

      {/* FEATURE GRID */}
      <div className="grid grid-cols-2 gap-4 pt-4">

        {[
          "Hyper Realistic Models",
          "Interactive 3D Web",
          "Real-time Rendering",
          "AR / VR Ready",
          "Immersive UX",
          "High Performance"
        ].map((item, i) => (

          <motion.div
            key={i}
            whileHover={{ scale: 1.08, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative group bg-white/70 backdrop-blur-xl border border-yellow-100 px-4 py-3 rounded-xl shadow-md overflow-hidden"
          >

            {/* Glow hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/40 to-orange-300/20 opacity-0 group-hover:opacity-100 transition" />

            <span className="relative z-10 text-gray-700 font-medium">
              ⭐ {item}
            </span>

          </motion.div>

        ))}

      </div>

    </motion.div>

  </div>
</section>

      {/* 🔥 WHAT WE DO (NEW) */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold text-yellow-500 mb-10">What We Do</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "3D Product Design",
            "3D Animation",
            "3D Web Development"
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg p-6 rounded-2xl border"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔥 OLD SHOWCASE (UNCHANGED) */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-yellow-50">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-yellow-500 mb-16">
            Our 3D Model Expertise
          </h2>

          <div className="grid md:grid-cols-4 gap-10">

            {[
              { title: "Product Models", img: "/gallery1.jpg" },
              { title: "Architecture", img: "/gallery2.jpg" },
              { title: "Animation", img: "/gallery3.jpg" },
              { title: "Prototyping", img: "/gallery4.jpg" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08, rotateY: 8 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-yellow-100"
              >
                <div className="relative h-52">
                  <Image src={item.img} alt="" fill className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-yellow-500 font-bold">{item.title}</h3>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* 👥 OUR TEAM (NEW) */}
     <section className="py-24 bg-gradient-to-b from-white via-yellow-50 to-orange-50 text-center relative overflow-hidden">

  {/* Glow Background */}
  <div className="absolute w-[400px] h-[400px] bg-yellow-300/30 blur-[140px] rounded-full top-[-100px] left-[-100px]" />
  <div className="absolute w-[400px] h-[400px] bg-orange-300/20 blur-[140px] rounded-full bottom-[-100px] right-[-100px]" />

  {/* Title */}
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-4xl md:text-5xl font-bold mb-12"
  >
    Our <span className="text-yellow-500">Team</span>
  </motion.h2>

  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">

    {["3D Designer", "Frontend Developer", "Animator"].map((role, i) => (

      <motion.div
        key={i}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.2 }}
        whileHover={{
          scale: 1.08,
          rotate: 1,
        }}
        className="relative group bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-yellow-100 overflow-hidden"
      >

        {/* Glow Hover Layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-300/30 to-orange-400/20 opacity-0 group-hover:opacity-100 transition duration-500" />

        {/* Floating Glow Circle */}
        <div className="absolute w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl top-[-20px] right-[-20px] group-hover:scale-125 transition" />

        {/* Image */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative z-10"
        >
          <Image
            src="/about logo.jpg"
            alt={role}
            width={180}
            height={180}
            className="mx-auto rounded-2xl shadow-md"
          />
        </motion.div>

        {/* Role */}
        <h3 className="mt-6 text-xl font-bold text-gray-800 group-hover:text-yellow-600 transition relative z-10">
          {role}
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-gray-500 mt-2 relative z-10">
          Creative & Professional
        </p>

      </motion.div>

    ))}

  </div>
</section>

      {/* 🚀 WHY CHOOSE 3D (NEW DARK SECTION) */}
      <section className="py-24 bg-gray-900 text-white text-center">

        <h2 className="text-4xl font-bold text-yellow-400 mb-10">
          Why Choose 3D Models
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Realistic Visualization",
            "Better User Engagement",
            "Future Technology"
          ].map((item, i) => (
            <div key={i} className="bg-white/10 p-6 rounded-xl">
              ⭐ {item}
            </div>
          ))}
        </div>
      </section>

      {/* 🧪 TECHNOLOGIES (NEW) */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold text-yellow-500 mb-10">
          Technologies We Use
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {["Three.js", "WebGL", "Blender", "Next.js", "Framer Motion"].map((t) => (
            <span key={t} className="px-4 py-2 bg-white border rounded-full shadow">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* 🚀 CTA (OLD) */}
      <section className="py-24 text-center">
        <Link
          href="/contact"
          className="px-10 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-full font-bold shadow-xl hover:scale-110 transition"
        >
          Start Project 🚀
        </Link>
      </section>

    </main>
  );
}