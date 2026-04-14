"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-white via-yellow-50 to-purple-50 text-gray-700 px-4 md:px-8 py-12 overflow-hidden">

      {/* 🌈 MULTI COLOR GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-yellow-300/30 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-orange-300/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />
      <div className="absolute w-[300px] h-[300px] bg-purple-400/20 blur-[120px] rounded-full top-[50%] left-[40%]" />

      {/* 🔥 TOP GRADIENT LINE */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-500 animate-pulse" />

      {/* Main Container */}
      <div className="relative max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/3d logo1.png"
            alt="3D Business Models"
            width={130}
            height={40}
            className="mb-3"
          />

          <p className="leading-6 text-sm text-gray-600">
            We create high-quality 3D product designs, laser scanning,
            product animations and rapid prototyping solutions.
          </p>

          {/* 🌟 SOCIAL */}
          <div className="flex gap-3 mt-5">
            {[FaFacebookF, FaInstagram, FaXTwitter, FaYoutube].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-md shadow-md border border-yellow-100 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-purple-500 hover:text-white transition"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-sm">
            {["Home", "About", "Service", "Gallery", "Contact"].map((item, i) => (
              <li key={i}>
                <Link
                  href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className="relative group inline-block"
                >
                  <span className="group-hover:text-purple-500 transition">
                    {item}
                  </span>

                  {/* underline animation */}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-yellow-400 to-purple-500 transition-all group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-gray-900 font-semibold mb-4">Contact Info</h3>

          <p className="text-sm text-gray-600 leading-6">
            2nd Floor, K10 Atlantis B, Genda Circle,
            Opposite Honest Restaurant,
            Vadodara, Gujarat – 390007
          </p>

          <div className="mt-5">
            <Image
              src="/footer.jpeg"
              alt="QR Code"
              width={100}
              height={100}
              className="rounded-xl bg-white p-2 shadow-md hover:scale-105 transition"
            />
            <p className="mt-1 text-xs text-gray-500">Scan QR Code</p>
          </div>
        </motion.div>

      </div>

      {/* 🔥 BOTTOM */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="border-t border-yellow-200 mt-10 pt-4 text-center text-sm text-gray-500"
      >
        © {new Date().getFullYear()} 3D Business Models | All Rights Reserved |{" "}
        <span className="bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent font-semibold">
          Techstrota
        </span>
      </motion.div>

      {/* 🚀 SCROLL TOP */}
      <motion.button
        whileHover={{ scale: 1.15 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 bg-gradient-to-r from-yellow-400 to-purple-500 text-white px-4 py-2 rounded-full shadow-xl"
      >
        ↑
      </motion.button>

    </footer>
  );
}