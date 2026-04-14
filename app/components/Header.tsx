"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/About" },
    { name: "Services", link: "/services" },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200 shadow-sm">

      {/* 🔥 CONTAINER */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 py-4">

        {/* 🧠 LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/3d logo1.png"
            alt="logo"
            width={60}
            height={50}
            className="object-contain"
          />

          <h1 className="text-lg md:text-xl font-bold tracking-wide">
            <span className="text-yellow">3D</span>{" "}
            <span className="text-black-500">Business </span>
              <span className="text-blue-500">Model</span>
          </h1>
        </Link>

        {/* 💻 DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-[16px] font-medium">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className="relative text-black hover:text-yellow-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 hover:after:w-full after:transition-all"
            >
              {item.name}
            </Link>
          ))}

          {/* 🔘 CTA BUTTON */}
          <Link
            href="/contact"
            className="ml-4 px-5 py-2 rounded-full bg-yellow-400 text-black font-semibold hover:scale-105 hover:shadow-lg transition"
          >
            Get Quote
          </Link>
        </nav>

        {/* 📱 MOBILE MENU BUTTON */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <span className="h-[3px] w-7 bg-black rounded"></span>
          <span className="h-[3px] w-7 bg-black rounded"></span>
          <span className="h-[3px] w-7 bg-black rounded"></span>
        </div>
      </div>

      {/* 📱 MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center z-50"
          >

            {/* ❌ CLOSE BUTTON */}
            <div
              className="absolute top-6 right-6 text-3xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </div>

            {/* 📋 MENU ITEMS */}
            <ul className="flex flex-col items-center gap-8 text-xl font-medium">
              {navItems.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.link}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-yellow-400 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* 🔘 MOBILE CTA */}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-10 px-6 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:scale-105 transition"
            >
              Get Quote
            </Link>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}