"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Counter({ number, label }: any) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className="relative bg-white/5 border border-white/10 backdrop-blur-xl 
      p-8 rounded-2xl text-center overflow-hidden group transition duration-300"
    >
      {/* 🔥 Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-2xl"></div>
      </div>

      {/* 🔢 Number */}
      <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 relative z-10">
        {inView && <CountUp end={number} duration={3} />}
        +
      </h2>

      {/* 📝 Label */}
      <p className="text-gray-300 mt-2 relative z-10">{label}</p>
    </div>
  );
}