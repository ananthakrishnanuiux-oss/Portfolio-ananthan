"use client";

import React from "react";
import { soundFx } from "@/lib/soundFx";

interface TopOptionBarProps {
  windEnabled: boolean;
  flowersEnabled: boolean;
  leafEnabled: boolean;
  branchEnabled?: boolean;
  branchScale?: number;
  onToggleWind: () => void;
  onToggleFlowers: () => void;
  onToggleLeaf: () => void;
  onToggleBranch?: () => void;
  onBranchScaleChange?: (scale: number) => void;
}

export default function TopOptionBar({
  windEnabled,
  flowersEnabled,
  leafEnabled,
  branchEnabled = true,
  branchScale = 100,
  onToggleWind,
  onToggleFlowers,
  onToggleLeaf,
  onToggleBranch,
  onBranchScaleChange,
}: TopOptionBarProps) {
  return (
    <div className="bg-[#FEFCE8]/95 backdrop-blur-md border-b border-[#FDE68A] py-1.5 px-3 sm:px-6 z-50 text-[11px] sm:text-xs select-none transition-all">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-4">
        
        {/* Left: Atmospheric Label */}
        <div className="flex items-center gap-1.5 text-[#92400E] font-bold tracking-wide">
          <span className="text-xs sm:text-sm">✨</span>
          <span className="hidden sm:inline uppercase text-[10px] tracking-widest text-[#B45309]">
            Nature Controls:
          </span>
          <span className="sm:hidden text-[10px] uppercase text-[#B45309]">
            FX:
          </span>
        </div>

        {/* Center / Right: Quick Controls matching user request */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5">
          
          {/* Toggle 1: Wind Gust */}
          <button
            onClick={() => {
              soundFx.playClick();
              onToggleWind();
            }}
            className={`px-2.5 sm:px-3 py-1 rounded-full border transition-all duration-200 flex items-center gap-1 sm:gap-1.5 shadow-2xs ${
              windEnabled
                ? "bg-white border-[#F59E0B] text-[#78350F] shadow-xs hover:border-[#D97706]"
                : "bg-[#F5F5F4] border-[#E7E5E4] text-[#A8A29E] hover:border-[#D6D3D1]"
            }`}
            title="Toggle visible wind gust streamlines"
          >
            <span className="text-xs">🌬️</span>
            <span className="font-semibold hidden xs:inline">Wind Gust</span>
            <span
              className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full transition-colors ${
                windEnabled
                  ? "bg-[#FEF08A] text-[#78350F]"
                  : "bg-[#E7E5E4] text-[#78716C]"
              }`}
            >
              {windEnabled ? "ON" : "OFF"}
            </span>
          </button>

          {/* Toggle 2: Flower Fall */}
          <button
            onClick={() => {
              soundFx.playClick();
              onToggleFlowers();
            }}
            className={`px-2.5 sm:px-3 py-1 rounded-full border transition-all duration-200 flex items-center gap-1 sm:gap-1.5 shadow-2xs ${
              flowersEnabled
                ? "bg-white border-[#F59E0B] text-[#78350F] shadow-xs hover:border-[#D97706]"
                : "bg-[#F5F5F4] border-[#E7E5E4] text-[#A8A29E] hover:border-[#D6D3D1]"
            }`}
            title="Toggle falling sunflower petals and tiny flowers"
          >
            <span className="text-xs">🌻</span>
            <span className="font-semibold hidden xs:inline">Flower Fall</span>
            <span
              className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full transition-colors ${
                flowersEnabled
                  ? "bg-[#FEF08A] text-[#78350F]"
                  : "bg-[#E7E5E4] text-[#78716C]"
              }`}
            >
              {flowersEnabled ? "ON" : "OFF"}
            </span>
          </button>

          {/* Toggle 3: Leaf Fall */}
          <button
            onClick={() => {
              soundFx.playClick();
              onToggleLeaf();
            }}
            className={`px-2.5 sm:px-3 py-1 rounded-full border transition-all duration-200 flex items-center gap-1 sm:gap-1.5 shadow-2xs ${
              leafEnabled
                ? "bg-white border-[#F59E0B] text-[#78350F] shadow-xs hover:border-[#D97706]"
                : "bg-[#F5F5F4] border-[#E7E5E4] text-[#A8A29E] hover:border-[#D6D3D1]"
            }`}
            title="Toggle parallax falling & suspended golden leaf"
          >
            <span className="text-xs">🍂</span>
            <span className="font-semibold hidden xs:inline">Leaf Fall</span>
            <span
              className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full transition-colors ${
                leafEnabled
                  ? "bg-[#FEF08A] text-[#78350F]"
                  : "bg-[#E7E5E4] text-[#78716C]"
              }`}
            >
              {leafEnabled ? "ON" : "OFF"}
            </span>
          </button>

          {/* Toggle 4: Kanikkonna Golden Branch + Size Controls */}
          {onToggleBranch && (
            <div className="flex items-center gap-1 bg-white/70 p-0.5 rounded-full border border-[#FDE68A]">
              <button
                onClick={() => {
                  soundFx.playClick();
                  onToggleBranch();
                }}
                className={`px-2 sm:px-2.5 py-0.5 rounded-full border transition-all duration-200 flex items-center gap-1 shadow-2xs ${
                  branchEnabled
                    ? "bg-white border-[#F59E0B] text-[#78350F] shadow-xs"
                    : "bg-[#F5F5F4] border-[#E7E5E4] text-[#A8A29E]"
                }`}
                title="Toggle hanging golden Kanikkonna branch"
              >
                <span className="text-xs">🌿</span>
                <span className="font-semibold hidden sm:inline">Branch</span>
                <span
                  className={`text-[9px] font-bold px-1 py-0.2 rounded-full ${
                    branchEnabled ? "bg-[#FEF08A] text-[#78350F]" : "bg-[#E7E5E4] text-[#78716C]"
                  }`}
                >
                  {branchEnabled ? "ON" : "OFF"}
                </span>
              </button>

              {/* Size Selector: S | M | L | XL */}
              {branchEnabled && onBranchScaleChange && (
                <div className="flex items-center gap-0.5 px-1">
                  <span className="text-[9px] text-[#A8A29E] uppercase font-bold hidden md:inline ml-0.5">Size:</span>
                  {[
                    { label: "S", scale: 70, title: "Small (Compact - 70%)" },
                    { label: "M", scale: 100, title: "Medium (Standard - 100%)" },
                    { label: "L", scale: 130, title: "Large (Lush - 130%)" },
                    { label: "XL", scale: 160, title: "Extra Large (Canopy - 160%)" },
                  ].map((s) => (
                    <button
                      key={s.label}
                      onClick={() => {
                        soundFx.playClick();
                        onBranchScaleChange(s.scale);
                      }}
                      title={s.title}
                      className={`w-5 h-5 rounded-full text-[9px] font-bold transition-all flex items-center justify-center ${
                        branchScale === s.scale
                          ? "bg-[#F59E0B] text-[#1C1917] shadow-xs font-black scale-105"
                          : "text-[#78350F] hover:bg-[#FEF08A]/70"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
