"use client";

import React, { useState, useEffect, useRef } from "react";
import { soundFx } from "@/lib/soundFx";

interface WindGust {
  id: number;
  y: number; // vertical percentage
  speed: number;
  width: number;
  curvature: number;
  opacity: number;
}

interface ParallaxFloatingLeafProps {
  enableLeaf?: boolean;
  enableWind?: boolean;
}

export default function ParallaxFloatingLeaf({
  enableLeaf = true,
  enableWind = true,
}: ParallaxFloatingLeafProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSpun, setIsSpun] = useState(false);
  const [windGusts, setWindGusts] = useState<WindGust[]>([]);

  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const timeRef = useRef<number>(0);

  // Dynamic leaf position and rotation
  const [leafPos, setLeafPos] = useState({ x: 50, y: 10, rot: 15, scale: 1 });

  // 1. Scroll tracking & static state detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
      setScrollProgress(progress);
      setIsScrolling(true);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // After 180ms of no scroll, leaf enters static suspended floating state
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 180);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initialize

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  // 2. Periodic Visible Wind Gusts
  useEffect(() => {
    if (!enableWind) {
      setWindGusts([]);
      return;
    }

    const spawnGust = () => {
      const newGust: WindGust = {
        id: Date.now() + Math.random(),
        y: Math.random() * 80 + 10,
        speed: Math.random() * 1.5 + 2.5,
        width: Math.random() * 120 + 160,
        curvature: (Math.random() - 0.5) * 60,
        opacity: Math.random() * 0.35 + 0.45,
      };

      setWindGusts((prev) => [...prev.slice(-3), newGust]);

      // Remove after gust animation finishes (approx 4 seconds)
      setTimeout(() => {
        setWindGusts((prev) => prev.filter((g) => g.id !== newGust.id));
      }, 3800);
    };

    spawnGust();
    const gustInterval = setInterval(spawnGust, 4500);

    return () => clearInterval(gustInterval);
  }, [enableWind]);

  // 3. Smooth animation loop for parallax descent & static floating physics
  useEffect(() => {
    let running = true;

    const updatePhysics = () => {
      if (!running) return;
      timeRef.current += 0.035;
      const t = timeRef.current;

      // Base Y position journeys down viewport as user scrolls (parallax)
      // At top: 8vh. At bottom: 84vh.
      const targetBaseY = 8 + scrollProgress * 76;

      // Horizontal sinusoidal drift across the viewport as it falls
      // Drifts gracefully across left-center-right
      const targetBaseX = 50 + Math.sin(scrollProgress * Math.PI * 3.2) * 32;

      let currentX = targetBaseX;
      let currentY = targetBaseY;
      let currentRot = Math.sin(scrollProgress * 5) * 28;

      if (!isScrolling) {
        // STATIC STATE: Leaf is suspended / floating in mid-air with wind gusts!
        // Gentle buoyant bobbing up & down
        const floatY = Math.sin(t * 1.8) * 16;
        // Natural swaying drift in the air
        const swayX = Math.cos(t * 1.2) * 12;
        // Fluttering tilt on its stem
        const floatRot = Math.sin(t * 1.4) * 14;

        currentX = targetBaseX + (swayX / window.innerWidth) * 100;
        currentY = targetBaseY + (floatY / window.innerHeight) * 100;
        currentRot += floatRot;
      } else {
        // SCROLLING STATE: Leaf reacts to falling velocity with aerodynamic tilt
        currentRot += 15;
      }

      setLeafPos({
        x: currentX,
        y: currentY,
        rot: currentRot,
        scale: isHovered ? 1.15 : 1,
      });

      animFrameRef.current = requestAnimationFrame(updatePhysics);
    };

    animFrameRef.current = requestAnimationFrame(updatePhysics);

    return () => {
      running = false;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [scrollProgress, isScrolling, isHovered]);

  const handleLeafClick = () => {
    soundFx.playChime();
    setIsSpun(true);
    setTimeout(() => setIsSpun(false), 900);
  };

  if (!enableLeaf && !enableWind) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden select-none">
      {/* =========================================================================
          1. VISIBLE WIND GUST STREAMLINES & SWIRLS
         ========================================================================= */}
      {enableWind && windGusts.length > 0 && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="windGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.85" />
              <stop offset="70%" stopColor="#FBBF24" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>

          {windGusts.map((gust) => (
            <g key={gust.id} className="animate-wind-stream" style={{ opacity: gust.opacity }}>
              {/* Main sweeping wind line */}
              <path
                d={`M-100,${gust.y * 7} Q${gust.width * 2},${gust.y * 7 + gust.curvature} ${gust.width * 5},${gust.y * 7 - gust.curvature} T${gust.width * 9},${gust.y * 7}`}
                fill="none"
                stroke="url(#windGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="180 80"
              />
              {/* Secondary swirling wind curl */}
              <path
                d={`M${gust.width * 3},${gust.y * 7 - gust.curvature} C${gust.width * 3.5},${gust.y * 7 - gust.curvature - 20} ${gust.width * 4},${gust.y * 7 - gust.curvature - 15} ${gust.width * 3.8},${gust.y * 7 - gust.curvature + 5} C${gust.width * 3.6},${gust.y * 7 - gust.curvature + 15} ${gust.width * 3.3},${gust.y * 7 - gust.curvature} ${gust.width * 3.5},${gust.y * 7 - gust.curvature - 5}`}
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1.8"
                opacity="0.75"
                strokeLinecap="round"
              />
            </g>
          ))}
        </svg>
      )}

      {/* =========================================================================
          2. THE PARALLAX FALLING & SUSPENDED FLOATING LEAF
         ========================================================================= */}
      {enableLeaf && (
        <div
          style={{
            left: `${leafPos.x}%`,
            top: `${leafPos.y}%`,
            transform: `translate(-50%, -50%) rotate(${leafPos.rot}deg) scale(${leafPos.scale}) ${
              isSpun ? "rotate(360deg)" : ""
            }`,
            transition: isSpun
              ? "transform 0.85s cubic-bezier(0.34, 1.56, 0.64, 1)"
              : "transform 0.15s ease-out",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleLeafClick}
          title={
            isScrolling
              ? "Leaf is fluttering down as you scroll..."
              : "Leaf is suspended floating on a gust of wind! Click to swirl."
          }
          className="absolute pointer-events-auto cursor-pointer p-3 group z-40"
        >
          {/* Leaf Container */}
          <div className="relative w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 drop-shadow-lg transition-transform group-hover:scale-110">
            <img
              src="/assets/golden_leaf.png"
              alt="Falling Golden Sunbeam Leaf"
              className="w-full h-full object-contain pointer-events-none select-none filter drop-shadow-md"
            />

            {/* Gentle sunbeam glint on leaf surface */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent rounded-full opacity-60 group-hover:opacity-90 transition-opacity pointer-events-none" />
          </div>

          {/* Hover / Status speech tooltip in Warm Yellow */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 backdrop-blur-md text-[10px] font-bold text-[#78350F] px-3 py-1 rounded-full border border-[#FDE68A] shadow-md whitespace-nowrap flex items-center gap-1.5 pointer-events-none">
            <span>☀️</span>
            <span>{isScrolling ? "Drifting with scroll..." : "Floating on sunbeam wind (Click to spin!)"}</span>
          </div>
        </div>
      )}
    </div>
  );
}

