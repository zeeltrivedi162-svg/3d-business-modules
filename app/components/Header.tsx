'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#0f2027] via-[#3a454a] to-[#498484] shadow-lg">

      <div className="flex items-center justify-between px-6 md:px-20 py-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo1.png"
            alt="Logo"
            width={60}
            height={60}
            className="rounded-xl shadow-lg"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-10 text-white text-[17px] font-medium">
            <li>
              <Link href="/" className="relative hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 hover:after:w-full after:transition-all">
                Home
              </Link>
            </li>

            <li>
              <Link href="/About" className="relative hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 hover:after:w-full after:transition-all">
                About
              </Link>
            </li>

            <li>
              <Link href="/service" className="relative hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 hover:after:w-full after:transition-all">
                Service
              </Link>
            </li>

            <li>
              <Link href="/gallery" className="relative hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 hover:after:w-full after:transition-all">
                Gallery
              </Link>
            </li>

            <li>
              <Link href="/contact" className="relative hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 hover:after:w-full after:transition-all">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <div
          className="flex flex-col gap-1 cursor-pointer md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`h-[3px] w-7 bg-white transition ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`h-[3px] w-7 bg-white transition ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-[3px] w-7 bg-white transition ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>

      </div>

      {/* MOBILE NAV */}
      <div className={`md:hidden bg-[#1c1c1c] overflow-hidden transition-all duration-500 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="flex flex-col items-center gap-6 py-6 text-white text-lg">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/About">About</Link></li>
          <li><Link href="/service">Service</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
          <li><Link href="/Contact">Contact</Link></li>
        </ul>
      </div>

    </header>
  )
}