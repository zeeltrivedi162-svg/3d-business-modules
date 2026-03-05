"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-slate-300 px-6 md:px-10 py-14 relative">

      {/* Main Container */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

        {/* Left Section */}
        <div>

          <Image
            src="/logo1.png"
            alt="3D Business Models Logo"
            width={180}
            height={60}
            className="mb-4"
          />

          <h2 className="text-yellow-400 text-xl font-bold mb-4">
            3D Business Models
          </h2>

          <p className="leading-7 text-sm md:text-base">
            At 3D Business Models, we specialize in creating high-quality
            3D product designs, laser scanning solutions, product animations,
            and rapid prototyping services.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white text-lg transition hover:bg-yellow-400 hover:text-black hover:-translate-y-1"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white text-lg transition hover:bg-yellow-400 hover:text-black hover:-translate-y-1"
            >
              <FaInstagram />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white text-lg transition hover:bg-yellow-400 hover:text-black hover:-translate-y-1"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white text-lg transition hover:bg-yellow-400 hover:text-black hover:-translate-y-1"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div>

          <h3 className="text-white text-lg font-semibold mb-4">
            Useful Links
          </h3>

          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link href="/About" className="hover:text-yellow-400">About Us</Link></li>
            <li><Link href="/services" className="hover:text-yellow-400">Services</Link></li>
            <li><Link href="/gallery" className="hover:text-yellow-400">Gallery</Link></li>
            <li><Link href="/Contact" className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>

          <h3 className="text-white text-lg font-semibold mb-4">
            Contact Info
          </h3>

          <p className="text-sm md:text-base leading-6">
            123, Business Hub,<br />
            Near City Center,<br />
            Vadodara, Gujarat – 390007
          </p>

          <div className="mt-6 text-center md:text-left">
            <Image
              src="/footer.jpeg"
              alt="QR Code"
              width={140}
              height={140}
              className="rounded-lg bg-white p-2 mx-auto md:mx-0"
            />
            <p className="mt-2 text-sm">Tap / Scan QR Code</p>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
        © {new Date().getFullYear()} 3D Business Models | All Rights Reserved
        <br />
        Made with ❤️ by{" "}
        <a
          href="https://www.techstrota.com/"
          target="_blank"
          className="text-yellow-400 hover:underline"
        >
          3D Business Models
        </a>
      </div>

      {/* Scroll Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-lg shadow-lg transition"
      >
        ↑
      </button>

    </footer>
  );
}