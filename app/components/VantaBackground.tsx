"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
// ✅ import at TOP (IMPORTANT)
// @ts-ignore
import WAVES from "vanta/dist/vanta.waves.min";

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    if (!vantaEffect.current) {
      vantaEffect.current = WAVES({
        el: vantaRef.current,
        THREE,

        // 🎨 COLORS
        color: 0x3b82f6,
        shininess: 50,
        waveHeight: 20,
        waveSpeed: 1,
        zoom: 0.9,
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <div ref={vantaRef} className="w-full h-full" />
    </div>
  );
}