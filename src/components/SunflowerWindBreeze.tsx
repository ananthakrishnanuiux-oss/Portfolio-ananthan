"use client";

import React, { useState, useEffect } from "react";
import { soundFx } from "@/lib/soundFx";

interface PetalItem {
  id: number;
  type: "sunflower-petal" | "tiny-sunflower" | "buttercup-floret";
  x: number; // percentage left
  duration: number; // seconds to fall
  delay: number; // animation delay seconds
  swayDistance: number; // horizontal sway px
  spinDuration: number; // seconds for 3D spin
  scale: number;
  opacity: number;
  initialRotation: number;
}

interface WindStream {
  id: number;
  y: number; // percentage top
  width: number;
  curvature: number;
  opacity: number;
  speed: number;
}

interface SunflowerWindBreezeProps {
  enableFlowers?: boolean;
  enableWind?: boolean;
}

export default function SunflowerWindBreeze({
  enableFlowers = true,
  enableWind = true,
}: SunflowerWindBreezeProps) {
  const [petals, setPetals] = useState<PetalItem[]>([]);
  const [windStreams, setWindStreams] = useState<WindStream[]>([]);
  const [gustActive, setGustActive] = useState<boolean>(false);

  // Initialize randomized sunflower petals and tiny flowers
  useEffect(() => {
    if (!enableFlowers) {
      setPetals([]);
      return;
    }

    const items: PetalItem[] = [];
    const count = 24; // 24 floating petals and tiny flowers

    const types: ("sunflower-petal" | "tiny-sunflower" | "buttercup-floret")[] = [
      "sunflower-petal",
      "sunflower-petal",
      "tiny-sunflower",
      "sunflower-petal",
      "buttercup-floret",
      "tiny-sunflower",
    ];

    for (let i = 0; i < count; i++) {
      items.push({
        id: i,
        type: types[i % types.length],
        x: (i * 4.2 + (Math.random() * 6 - 3)) % 96 + 2, // evenly distributed with jitter
        duration: 8 + Math.random() * 7, // 8s to 15s fall duration
        delay: (i * 0.6) % 12 + Math.random() * 1.5, // staggered delays
        swayDistance: 35 + Math.random() * 55, // 35px to 90px horizontal sway
        spinDuration: 3 + Math.random() * 5, // 3s to 8s rotation
        scale: 0.75 + Math.random() * 0.45, // 0.75x to 1.2x scale
        opacity: 0.8 + Math.random() * 0.18,
        initialRotation: Math.random() * 360,
      });
    }

    setPetals(items);
  }, [enableFlowers]);

  // Periodic Visible Wind Gusts that push the petals & tiny flowers
  useEffect(() => {
    if (!enableWind) {
      setWindStreams([]);
      setGustActive(false);
      return;
    }

    const triggerGust = () => {
      setGustActive(true);

      // Create 2-3 sweeping wind streamline paths
      const streamY = 15 + Math.random() * 65;
      const newStreams: WindStream[] = [
        {
          id: Date.now(),
          y: streamY,
          width: 220 + Math.random() * 100,
          curvature: (Math.random() - 0.5) * 50,
          opacity: 0.75,
          speed: 2.8,
        },
        {
          id: Date.now() + 1,
          y: streamY + 12,
          width: 180 + Math.random() * 90,
          curvature: (Math.random() - 0.5) * 40,
          opacity: 0.65,
          speed: 3.2,
        },
      ];

      setWindStreams(newStreams);

      // End gust burst after 3.6s
      setTimeout(() => {
        setGustActive(false);
        setWindStreams([]);
      }, 3500);
    };

    const gustTimer = setInterval(triggerGust, 5500);
    const initialTimer = setTimeout(triggerGust, 1800);

    return () => {
      clearInterval(gustTimer);
      clearTimeout(initialTimer);
    };
  }, [enableWind]);

  if (!enableFlowers && !enableWind) return null;

  const handleParticleClick = (e: React.MouseEvent) => {
    soundFx.playChime();
  };

  return (
    <div
      className="fixed inset-0 pointer-events-none z-20 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* =========================================================================
          1. VISIBLE WIND GUST STREAMLINES IN GOLDEN SUNLIGHT
         ========================================================================= */}
      {enableWind && windStreams.length > 0 && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sunWindGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="25%" stopColor="#FFFFFF" stopOpacity="0.85" />
              <stop offset="65%" stopColor="#FBBF24" stopOpacity="0.75" />
              <stop offset="85%" stopColor="#F59E0B" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            {/* Gradients for Petals & Tiny Flowers */}
            <linearGradient id="sunflowerPetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="45%" stopColor="#FDE047" />
              <stop offset="80%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>

            <radialGradient id="sunflowerCenterGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D97706" />
              <stop offset="70%" stopColor="#78350F" />
              <stop offset="100%" stopColor="#451A03" />
            </radialGradient>
          </defs>

          {windStreams.map((stream) => (
            <g key={stream.id} className="animate-sun-wind" style={{ opacity: stream.opacity }}>
              {/* Primary curved wind streamline */}
              <path
                d={`M-120,${stream.y * 7.5} Q${stream.width * 2},${stream.y * 7.5 + stream.curvature} ${stream.width * 5},${stream.y * 7.5 - stream.curvature} T${stream.width * 9},${stream.y * 7.5 + 30}`}
                fill="none"
                stroke="url(#sunWindGrad)"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeDasharray="200 90"
              />
              {/* Secondary sparkling swirl curl */}
              <path
                d={`M${stream.width * 2.8},${stream.y * 7.5 - stream.curvature} C${stream.width * 3.3},${stream.y * 7.5 - stream.curvature - 25} ${stream.width * 3.8},${stream.y * 7.5 - stream.curvature - 15} ${stream.width * 3.6},${stream.y * 7.5 - stream.curvature + 10} C${stream.width * 3.4},${stream.y * 7.5 - stream.curvature + 20} ${stream.width * 3.1},${stream.y * 7.5 - stream.curvature} ${stream.width * 3.3},${stream.y * 7.5 - stream.curvature - 8}`}
                fill="none"
                stroke="#FEF08A"
                strokeWidth="2"
                opacity="0.8"
                strokeLinecap="round"
              />
            </g>
          ))}
        </svg>
      )}

      {/* =========================================================================
          2. FALLING SUNFLOWER PETALS & TINY BLOSSOMS
         ========================================================================= */}
      {enableFlowers && (
        <div className="absolute inset-0 w-full h-full">
          {/* Shared Defs for Petals if Wind is disabled */}
          <svg className="absolute w-0 h-0" aria-hidden="true">
            <defs>
              <linearGradient id="sunflowerPetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FEF08A" />
                <stop offset="45%" stopColor="#FDE047" />
                <stop offset="80%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
              <radialGradient id="sunflowerCenterGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#D97706" />
                <stop offset="70%" stopColor="#78350F" />
                <stop offset="100%" stopColor="#451A03" />
              </radialGradient>
            </defs>
          </svg>

          {petals.map((item) => (
          <div
            key={item.id}
            onClick={handleParticleClick}
            className={`absolute pointer-events-auto cursor-pointer transition-transform duration-700 ${
              gustActive ? "translate-x-16 sm:translate-x-28" : ""
            }`}
            style={{
              left: `${item.x}%`,
              top: "-50px",
              animation: `fallingPetalDrift ${item.duration}s linear infinite`,
              animationDelay: `${item.delay}s`,
              opacity: item.opacity,
              transform: `scale(${item.scale})`,
            }}
          >
            {/* Inner Tumbling 3D Container */}
            <div
              style={{
                animation: `petal3dSpin ${item.spinDuration}s ease-in-out infinite alternate`,
                transformOrigin: "center center",
              }}
              className="drop-shadow-sm hover:scale-125 transition-transform"
            >
              {/* -------------------------------------------------------------
                  A. SUNFLOWER PETAL
                 ------------------------------------------------------------- */}
              {item.type === "sunflower-petal" && (
                <svg
                  width="22"
                  height="38"
                  viewBox="0 0 22 38"
                  fill="none"
                  className="filter drop-shadow-xs"
                >
                  {/* Organic sunflower petal curved teardrop */}
                  <path
                    d="M11,0 C18,8 21,22 15,33 C13,37 9,37 7,33 C1,22 4,8 11,0 Z"
                    fill="url(#sunflowerPetalGrad)"
                  />
                  {/* Subtle spine vein */}
                  <path
                    d="M11,3 Q12,18 11,33"
                    stroke="#D97706"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    opacity="0.55"
                  />
                  {/* Sunlit translucent glint */}
                  <ellipse cx="9" cy="14" rx="2.5" ry="7" fill="#FFFFFF" opacity="0.35" />
                </svg>
              )}

              {/* -------------------------------------------------------------
                  B. TINY SUNFLOWER FLORET
                 ------------------------------------------------------------- */}
              {item.type === "tiny-sunflower" && (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="filter drop-shadow-xs"
                >
                  {/* 8 radiating golden petals */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, pIdx) => (
                    <g key={pIdx} transform={`rotate(${angle} 12 12)`}>
                      <ellipse
                        cx="12"
                        cy="4.5"
                        rx="2.6"
                        ry="4.5"
                        fill="url(#sunflowerPetalGrad)"
                      />
                    </g>
                  ))}
                  {/* Seed core */}
                  <circle cx="12" cy="12" r="4.2" fill="url(#sunflowerCenterGrad)" />
                  <circle cx="11.2" cy="11.2" r="1.4" fill="#FEF08A" opacity="0.85" />
                </svg>
              )}

              {/* -------------------------------------------------------------
                  C. TINY BUTTERCUP / CHAMOMILE FLORET
                 ------------------------------------------------------------- */}
              {item.type === "buttercup-floret" && (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="filter drop-shadow-xs"
                >
                  {/* 5 rounded sunny buttercup petals */}
                  <circle cx="9" cy="4.2" r="3.4" fill="#FEF08A" />
                  <circle cx="13.5" cy="7.2" r="3.4" fill="#FDE047" />
                  <circle cx="12" cy="13" r="3.4" fill="#FBBF24" />
                  <circle cx="6" cy="13" r="3.4" fill="#FDE047" />
                  <circle cx="4.5" cy="7.2" r="3.4" fill="#FEF08A" />
                  {/* Golden orange center */}
                  <circle cx="9" cy="9" r="2.5" fill="#D97706" />
                  <circle cx="8.5" cy="8.5" r="0.9" fill="#FFFBEB" />
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  );
}
