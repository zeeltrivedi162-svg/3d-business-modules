"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import React from "react";

export default function Home() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const counters = [
    { number: 150, label: "Projects Completed" },
    { number: 98, label: "Happy Clients" },
    { number: 5, label: "Years Experience" },
    { number: 24, label: "Team Members" },
  ];

  const services = [
    {
      title: "3D Product Design",
      desc: "We create innovative and detailed 3D product models for manufacturing, marketing, and presentations.",
      link: "/services/product-design",
    },
    {
      title: "3D Laser Scanning",
      desc: "High-accuracy 3D laser scanning services to capture real-world objects and environments.",
      link: "/services/laser-scanning",
    },
    {
      title: "3D Product Animation",
      desc: "Professional 3D animations to showcase product features and marketing presentations.",
      link: "/services/product-animation",
    },
    {
      title: "3D Rapid Prototyping",
      desc: "Transform your ideas into physical prototypes quickly using advanced 3D printing.",
      link: "/services/rapid-prototyping",
    },
  ];

  return (
    <main className="bg-gray-900 text-white overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-center justify-center text-center px-4">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover md:object-cover max-h-screen"
        >
          <source src="/bckgrnd.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 max-w-3xl w-full px-4"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className={`font-bold mb-6 ${isMobile ? "text-3xl" : "text-6xl"}`}>
            <span className="text-white">3D Business</span>{" "}
            <span className="text-cyan-400">Modules</span>
          </h1>

          <p className="mb-10 text-lg md:text-xl">
            We create immersive 3D websites using modern technologies and interactive animations that elevate brands.
          </p>

          <div
            className={`flex gap-5 justify-center flex-wrap ${
              isMobile ? "flex-col" : "flex-row"
            }`}
          >
            <Link
              href="/services"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-full font-semibold hover:from-cyan-400 hover:to-blue-500 transition-colors"
            >
              Explore Services
            </Link>

            <Link
              href="/contact"
              className="border-2 border-cyan-400 px-8 py-3 rounded-full font-semibold text-cyan-400 hover:bg-cyan-500 hover:text-white transition"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16">
            About <span className="text-cyan-400">Our Studio</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.div
              className="flex-1 min-w-[250px]"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/about logo.jpg"
                alt="3D Studio"
                width={500}
                height={400}
                className="rounded-2xl w-full h-auto"
              />
            </motion.div>

            <motion.div
              className="flex-1 min-w-[250px] space-y-4"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <p className="text-gray-300 leading-relaxed">
                We are a creative 3D web development studio focused on delivering high-performance digital solutions blending creativity and technology.
              </p>

              <p className="text-gray-300 leading-relaxed">
                From product modeling to architectural visualization and interactive experiences, we help businesses stand out with innovative solutions.
              </p>

              <Link
                href="/about"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full font-semibold hover:from-cyan-400 hover:to-blue-500 transition-colors inline-block mt-4"
              >
                Read More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COUNTERS */}
      <section className="py-20 md:py-32 bg-gray-800 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-center">
          {counters.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/5 p-8 md:p-10 rounded-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl text-cyan-400 font-bold">
                <CountUp end={item.number} duration={3} />
              </h2>
              <p className="mt-2 text-gray-300">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16">
            Our <span className="text-cyan-400">Services</span>
          </h2>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white/5 p-6 md:p-8 rounded-2xl hover:-translate-y-2 transition-transform"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-lg md:text-xl text-cyan-400 font-semibold mb-3 md:mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed">{service.desc}</p>
                <Link
                  href={service.link}
                  className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 px-4 md:px-6 py-2 rounded-full font-semibold text-white hover:from-cyan-400 hover:to-blue-500 transition-colors"
                >
                  Get Quote →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">Ready To Elevate Your Brand?</h2>
        <Link
          href="/contact"
          className="bg-white text-gray-900 font-semibold px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-gray-200 transition-colors"
        >
          Contact Us Today
        </Link>
      </section>
    </main>
  );
}