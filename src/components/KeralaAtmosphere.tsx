"use client";

import React, { useEffect, useState } from "react";

interface KeralaAtmosphereProps {
  enableEmbers?: boolean;
}

export default function KeralaAtmosphere({ enableEmbers = true }: KeralaAtmosphereProps) {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  // Generate deterministic embers for pristine server/client hydration
  const embers = [
    { left: "8%", delay: "0s", duration: "14s", size: "4px" },
    { left: "18%", delay: "3s", duration: "16s", size: "3px" },
    { left: "28%", delay: "7s", duration: "12s", size: "5px" },
    { left: "42%", delay: "1s", duration: "18s", size: "3px" },
    { left: "55%", delay: "5s", duration: "13s", size: "4px" },
    { left: "68%", delay: "2s", duration: "15s", size: "5px" },
    { left: "79%", delay: "8s", duration: "17s", size: "3px" },
    { left: "91%", delay: "4s", duration: "14s", size: "4px" },
    { left: "34%", delay: "9s", duration: "15s", size: "3px" },
    { left: "85%", delay: "11s", duration: "13s", size: "4px" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden select-none" aria-hidden="true">
      {/* Interactive Nilavilakku Cursor Glow (Warm Golden Lamp Ambient Follower) */}
      <div
        className="fixed w-[380px] h-[380px] rounded-full pointer-events-none transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          background: "radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, rgba(212, 175, 55, 0.03) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Floating Golden Embers / Temple Fireflies */}
      {enableEmbers &&
        embers.map((ember, i) => (
          <div
            key={i}
            className="absolute bottom-0 rounded-full bg-gradient-to-t from-[#F59E0B] to-[#FDE047] shadow-[0_0_8px_#FDE047] animate-ember"
            style={{
              left: ember.left,
              width: ember.size,
              height: ember.size,
              animationDelay: ember.delay,
              animationDuration: ember.duration,
              opacity: 0,
            }}
          />
        ))}
    </div>
  );
}

