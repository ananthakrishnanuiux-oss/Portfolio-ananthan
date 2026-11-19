"use client";

import React, { useState, useEffect } from "react";
import { soundFx } from "@/lib/soundFx";

export default function LivingNatureBackground() {
  // Dewdrop state
  const [dewDropWobble, setDewDropWobble] = useState(false);
  const [isDripping, setIsDripping] = useState(false);
  const [splashPos, setSplashPos] = useState<{ x: number; y: number } | null>(null);

  // Periodic automatic water drop drip
  useEffect(() => {
    const dripInterval = setInterval(() => {
      triggerDewDrop();
    }, 9000);

    return () => clearInterval(dripInterval);
  }, []);

  const triggerDewDrop = () => {
    setDewDropWobble(true);
    setTimeout(() => {
      setIsDripping(true);
      soundFx.playDewDrop();
      setDewDropWobble(false);

      // Trigger splash at bottom of leaf
      setTimeout(() => {
        setIsDripping(false);
        setSplashPos({ x: 130, y: 240 });
        setTimeout(() => setSplashPos(null), 900);
      }, 700);
    }, 400);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden select-none">
      {/* =========================================================================
          1. TOP-RIGHT SWAYING GHIBLI CAMPHOR TREE BRANCH WITH DRIPPING LEAF
         ========================================================================= */}
      <div className="absolute top-0 right-0 w-[280px] sm:w-[420px] h-[260px] sm:h-[340px] pointer-events-none origin-top-right animate-gentle-sway">
        <svg
          viewBox="0 0 420 340"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Wooden Tree Branch */}
          <path
            d="M430,0 C380,40 330,65 240,75 C180,82 120,110 80,160 C75,166 70,175 65,185"
            stroke="#5C4033"
            strokeWidth="16"
            strokeLinecap="round"
          />
          {/* Sub-branch */}
          <path
            d="M260,70 C240,110 200,135 150,145"
            stroke="#6E4D3B"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <path
            d="M170,140 C140,170 110,185 70,195"
            stroke="#7A5642"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Lush Layered Ghibli Green Foliage Clusters (Back Layers) */}
          <ellipse cx="320" cy="50" rx="60" ry="35" fill="#28523B" opacity="0.85" />
          <ellipse cx="230" cy="80" rx="55" ry="32" fill="#3E7351" opacity="0.9" />
          <ellipse cx="160" cy="120" rx="50" ry="30" fill="#4A7C59" opacity="0.95" />
          <ellipse cx="100" cy="165" rx="45" ry="26" fill="#5B9B70" />

          {/* Foreground Broad Camphor Leaves */}
          <g transform="translate(60, 160) rotate(-15)">
            {/* The Dewdrop Leaf */}
            <path
              d="M0,0 C30,-30 80,-20 100,10 C80,35 30,30 0,0"
              fill="#5B9B70"
              stroke="#3E7351"
              strokeWidth="2"
            />
            {/* Leaf Veins */}
            <path d="M5,2 Q50,0 95,10" stroke="#7CB689" strokeWidth="1.5" fill="none" />
            <path d="M30,0 Q40,-15 50,-18" stroke="#7CB689" strokeWidth="1" fill="none" />
            <path d="M50,2 Q60,15 70,18" stroke="#7CB689" strokeWidth="1" fill="none" />
            <path d="M65,4 Q75,-10 85,-12" stroke="#7CB689" strokeWidth="1" fill="none" />
          </g>

          <g transform="translate(140, 95) rotate(20)">
            <path
              d="M0,0 C25,-25 70,-15 85,10 C70,30 25,25 0,0"
              fill="#68B684"
              stroke="#28523B"
              strokeWidth="1.5"
            />
            <path d="M5,2 Q45,0 80,10" stroke="#88C49D" strokeWidth="1" fill="none" />
          </g>
        </svg>

        {/* =========================================================================
            2. THE INTERACTIVE GLISTENING DEWDROP ON THE LEAF TIP
           ========================================================================= */}
        <div
          onClick={triggerDewDrop}
          title="Click to drip morning dewdrop!"
          className={`absolute top-[175px] right-[215px] sm:top-[225px] sm:right-[280px] pointer-events-auto cursor-pointer p-3 group transition-transform ${
            dewDropWobble ? "scale-125" : "hover:scale-110"
          }`}
        >
          {/* Glistening Dewdrop Shape */}
          <div className="relative w-4 h-5 sm:w-5 sm:h-6 rounded-full bg-gradient-to-b from-white/95 via-[#E0F2FE]/90 to-[#7DD3FC]/80 border border-white/80 shadow-md shadow-[#38BDF8]/30 flex items-center justify-center animate-dew-pulse">
            <div className="absolute top-1 left-1.5 w-1.5 h-1.5 rounded-full bg-white" />
            <div className="absolute bottom-1 right-1.5 w-1 h-1 rounded-full bg-white/70" />
          </div>

          <span className="absolute -bottom-4 -left-6 opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 backdrop-blur-sm text-[9px] font-medium text-[#28523B] px-2 py-0.5 rounded-full border border-[#DFE8DA] shadow-sm whitespace-nowrap">
            💧 Poke dewdrop
          </span>
        </div>

        {/* Falling Dewdrop Animation */}
        {isDripping && (
          <div className="absolute top-[195px] right-[215px] sm:top-[245px] sm:right-[280px] w-3 h-4 rounded-full bg-gradient-to-b from-white via-[#BAE6FD] to-[#38BDF8] shadow-md animate-drip-fall pointer-events-none" />
        )}

        {/* Water Ripple Splash */}
        {splashPos && (
          <div
            style={{ top: `${splashPos.y}px`, right: `${splashPos.x}px` }}
            className="absolute pointer-events-none"
          >
            <div className="w-8 h-4 rounded-full border-2 border-[#38BDF8]/60 animate-ping" />
          </div>
        )}
      </div>

      {/* =========================================================================
          3. ROLLING MEADOW HILLS, BLUE-GRAY ROCKS & PINE TREES (LIKE IN UPLOADED IMAGE)
         ========================================================================= */}
      <div className="absolute bottom-0 left-0 right-0 h-[85px] sm:h-[110px] pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-full"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Distant Teal/Mint Mountain Ridges */}
          <path
            d="M0,70 Q350,30 720,55 T1440,40 L1440,120 L0,120 Z"
            fill="#BCE5D9"
            opacity="0.45"
          />

          {/* Midground Rolling Green Meadow Hill */}
          <path
            d="M0,85 Q400,45 900,70 T1440,60 L1440,120 L0,120 Z"
            fill="#77BA40"
            opacity="0.75"
          />

          {/* Foreground Lush Grass Hill */}
          <path
            d="M0,95 Q500,65 1050,85 T1440,75 L1440,120 L0,120 Z"
            fill="#5B9B32"
          />

          {/* Stylized Blue-Gray Rocks (From uploaded image) */}
          <polygon points="460,92 485,78 515,82 525,95 490,102" fill="#7C8BA1" />
          <polygon points="485,78 515,82 505,96 480,95" fill="#9BAABF" />
          <polygon points="505,86 525,84 535,93 520,97" fill="#69768A" />

          {/* Little Stylized Pine Trees (From uploaded image) */}
          <polygon points="280,95 285,74 290,95" fill="#3A6B35" />
          <polygon points="340,92 344,70 348,92" fill="#3A6B35" />
          <polygon points="1120,94 1125,72 1130,94" fill="#3A6B35" />

          {/* Yellow & White 4-Petal Flower Clusters */}
          <circle cx="680" cy="94" r="3.5" fill="#FFFFFF" />
          <circle cx="676" cy="91" r="3.5" fill="#FFFFFF" />
          <circle cx="684" cy="91" r="3.5" fill="#FFFFFF" />
          <circle cx="680" cy="87" r="3.5" fill="#FFFFFF" />
          <circle cx="680" cy="91" r="2.5" fill="#F4E285" />

          <circle cx="730" cy="98" r="3" fill="#FFFFFF" />
          <circle cx="730" cy="98" r="2" fill="#F4E285" />
          <circle cx="1240" cy="90" r="3.5" fill="#FFFFFF" />
          <circle cx="1240" cy="90" r="2.5" fill="#F4E285" />
        </svg>
      </div>

      {/* =========================================================================
          4. FLOATING DANDELION FLUFF DRIFTING ACROSS GLADE
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, idx) => (
          <div
            key={idx}
            className="absolute rounded-full bg-white/75 shadow-sm animate-dandelion-drift"
            style={{
              width: `${(idx % 3) * 3 + 8}px`,
              height: `${(idx % 3) * 3 + 8}px`,
              left: `${idx * 20 + 8}%`,
              top: `${(idx * 25) % 75 + 12}%`,
              animationDuration: `${14 + idx * 3}s`,
              animationDelay: `${idx * 2}s`,
            }}
          >
            <div className="w-full h-full rounded-full border border-white/60 flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-[#F3B748]/60" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
