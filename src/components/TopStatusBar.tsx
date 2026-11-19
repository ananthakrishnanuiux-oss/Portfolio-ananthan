"use client";

import React, { useState, useEffect } from "react";
import { soundFx } from "@/lib/soundFx";
import { Volume2, VolumeX, Sparkles, Wind, Sun, Compass } from "lucide-react";

interface TopStatusBarProps {
  onOpenArcade?: () => void;
  crtActive: boolean;
  onToggleCrt: () => void;
}

export default function TopStatusBar({ onOpenArcade, crtActive, onToggleCrt }: TopStatusBarProps) {
  const [localTime, setLocalTime] = useState<string>("");
  const [tokyoTime, setTokyoTime] = useState<string>("");
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);

  useEffect(() => {
    setSoundEnabled(soundFx.isEnabled());

    const updateClocks = () => {
      const now = new Date();
      setLocalTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
      setTokyoTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Tokyo",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleToggleSound = () => {
    const newState = soundFx.toggle();
    setSoundEnabled(newState);
  };

  const handleToggleLeaves = () => {
    soundFx.playClick();
    onToggleCrt();
  };

  return (
    <div className="w-full bg-[#F4F5EB] border-b border-[#DFE8DA] text-[11px] font-sans text-[#52665B] px-3 sm:px-6 py-1.5 flex items-center justify-between z-50 select-none">
      {/* Left: Weather, Wind & Clocks */}
      <div className="flex items-center gap-3 sm:gap-4 overflow-hidden whitespace-nowrap">
        {/* Soft breathing nature sprout indicator */}
        <div className="flex items-center gap-1.5 font-medium text-[#28523B]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5B9B70] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5B9B70]" />
          </span>
          <span className="text-[10px] uppercase font-bold tracking-wider">
            VALLEY OF WIND
          </span>
          <span className="hidden sm:inline text-[#B8D4BE]">•</span>
          <span className="hidden sm:inline text-[10px] text-[#4F6357]">
            KOMOREBI 94%
          </span>
        </div>

        {/* Clocks */}
        <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-[#64756B]">
          <span className="text-[#DFE8DA]">|</span>
          <span>
            <strong className="text-[#28523B]">TOKYO</strong> {tokyoTime || "14:00"} JST
          </span>
          <span className="text-[#B8D4BE]">•</span>
          <span>
            <strong className="text-[#28523B]">LOCAL</strong> {localTime || "10:30"}
          </span>
        </div>
      </div>

      {/* Center: Peaceful Ghibli Motif */}
      <div className="hidden lg:flex items-center gap-2 text-[10px] text-[#52665B] tracking-wide">
        <span className="font-japanese font-semibold text-[#28523B]">「木漏れ日と自然の調和」</span>
        <span className="text-[#B8D4BE]">//</span>
        <span>STUDIO GHIBLI NATURE ATELIER</span>
        <span className="text-[#B8D4BE]">//</span>
        <span className="text-[#28523B] font-semibold">NANTHA CRAFT</span>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Falling Leaves Toggle */}
        <button
          onClick={handleToggleLeaves}
          className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium border transition-all ${
            crtActive
              ? "bg-[#E2F0E5] text-[#28523B] border-[#5B9B70] font-semibold"
              : "bg-white text-[#52665B] border-[#DFE8DA] hover:border-[#5B9B70]"
          }`}
          title="Toggle Falling Forest Leaves Animation"
          aria-label="Toggle Falling Forest Leaves"
        >
          <Wind className="w-3 h-3 text-[#5B9B70]" />
          <span>LEAVES:</span>
          <span>{crtActive ? "ON" : "OFF"}</span>
        </button>

        {/* Acoustic Sound FX Toggle */}
        <button
          onClick={handleToggleSound}
          className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium border transition-all ${
            soundEnabled
              ? "bg-[#FFF6E3] text-[#945B0A] border-[#F3B748] font-semibold"
              : "bg-white text-[#52665B] border-[#DFE8DA] hover:border-[#F3B748]"
          }`}
          title="Toggle Kalimba & Wind Chime Acoustic Tones"
          aria-label="Toggle Nature Sound FX"
        >
          {soundEnabled ? (
            <Volume2 className="w-3 h-3 text-[#E89A3C]" />
          ) : (
            <VolumeX className="w-3 h-3 text-[#A8B6AE]" />
          )}
          <span>CHIMES:</span>
          <span>{soundEnabled ? "ON" : "OFF"}</span>
        </button>

        {/* Forest Quest Shortcut */}
        <a
          href="#arcade"
          onClick={() => {
            soundFx.playChime();
            if (onOpenArcade) onOpenArcade();
          }}
          className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#28523B] hover:bg-[#3E7351] text-white font-medium text-[10px] transition-all shadow-sm shadow-[#28523B]/15"
          title="Play Kodama Forest Quest"
        >
          <span>🍄 KODAMA QUEST</span>
        </a>
      </div>
    </div>
  );
}
