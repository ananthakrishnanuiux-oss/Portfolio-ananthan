"use client";

import React, { useState, useEffect } from "react";
import { soundFx } from "@/lib/soundFx";
import { Sliders, Sparkles, Target, Eye, RotateCcw, Sprout, Sun } from "lucide-react";

export default function UxLabSimulator() {
  const [activeTab, setActiveTab] = useState<"fitts" | "contrast" | "tactile">("fitts");

  // Tab 1: Fitts's Law state
  const [targetWidth, setTargetWidth] = useState(64);
  const [targetPos, setTargetPos] = useState({ x: 50, y: 50 });
  const [startTime, setStartTime] = useState<number | null>(null);
  const [reactionTime, setReactionTime] = useState<number | null>(null);
  const [clickCount, setClickCount] = useState(0);
  const [averageTime, setAverageTime] = useState<number | null>(null);
  const [timesList, setTimesList] = useState<number[]>([]);

  // Tab 2: Contrast Laboratory state
  const [fgColor, setFgColor] = useState("#28523B");
  const [bgColor, setBgColor] = useState("#FAF9F3");

  // Tab 3: Tactile state
  const [buttonState, setButtonState] = useState<"idle" | "pressed" | "success">("idle");
  const [springStiffness, setSpringStiffness] = useState(300);

  // Fitts's Law repositioning
  const moveTarget = () => {
    soundFx.playDewDrop();
    const now = performance.now();
    if (startTime) {
      const elapsed = Math.round(now - startTime);
      setReactionTime(elapsed);
      const newTimes = [...timesList, elapsed].slice(-5);
      setTimesList(newTimes);
      const avg = Math.round(newTimes.reduce((a, b) => a + b, 0) / newTimes.length);
      setAverageTime(avg);
    }
    setClickCount((c) => c + 1);

    const randX = Math.floor(Math.random() * 70) + 15;
    const randY = Math.floor(Math.random() * 60) + 20;
    setTargetPos({ x: randX, y: randY });
    setStartTime(performance.now());
  };

  useEffect(() => {
    setStartTime(performance.now());
  }, []);

  const getLuminance = (hex: string) => {
    const clean = hex.replace("#", "");
    const r = parseInt(clean.substring(0, 2), 16) / 255;
    const g = parseInt(clean.substring(2, 4), 16) / 255;
    const b = parseInt(clean.substring(4, 6), 16) / 255;

    const a = [r, g, b].map((v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)));
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  };

  const getContrastRatio = (fg: string, bg: string) => {
    const l1 = getLuminance(fg);
    const l2 = getLuminance(bg);
    const brighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return ((brighter + 0.05) / (darker + 0.05)).toFixed(2);
  };

  const contrastRatio = parseFloat(getContrastRatio(fgColor, bgColor));
  const passAA = contrastRatio >= 4.5;
  const passAAA = contrastRatio >= 7.0;

  return (
    <section id="ux-lab" className="py-24 sm:py-32 bg-[#FAF9F3] border-b border-[#DFE8DA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-[#DFE8DA] pb-6 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="botanical-seal px-3 py-1 inline-flex items-center gap-1.5 text-xs font-medium">
              <Sprout className="w-3.5 h-3.5 text-[#5B9B70]" />
              <span>BOTANICAL UX WORKSHOP // 木漏れ日工房</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-[#1C2721] tracking-tight">
              INTERACTION LAB &amp; <span className="text-[#28523B]">NATURAL ERGONOMICS</span>
            </h2>

            <p className="text-sm sm:text-base text-[#52665B] font-sans leading-relaxed">
              Design is an empirical craft. Test user motor precision via Fitts&apos;s Law, examine botanical pigment accessibility, and explore organic tactile spring physics.
            </p>
          </div>

          {/* Module Selector Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-white border border-[#DFE8DA] shadow-sm">
            <button
              onClick={() => {
                soundFx.playClick();
                setActiveTab("fitts");
              }}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeTab === "fitts"
                  ? "bg-[#28523B] text-white shadow-sm"
                  : "text-[#52665B] hover:text-[#28523B]"
              }`}
            >
              01. Firefly Ergonomics
            </button>
            <button
              onClick={() => {
                soundFx.playClick();
                setActiveTab("contrast");
              }}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeTab === "contrast"
                  ? "bg-[#28523B] text-white shadow-sm"
                  : "text-[#52665B] hover:text-[#28523B]"
              }`}
            >
              02. Pigment Contrast
            </button>
            <button
              onClick={() => {
                soundFx.playClick();
                setActiveTab("tactile");
              }}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeTab === "tactile"
                  ? "bg-[#28523B] text-white shadow-sm"
                  : "text-[#52665B] hover:text-[#28523B]"
              }`}
            >
              03. Mossy Tactile
            </button>
          </div>
        </div>

        {/* Tab 1: Fitts's Law Simulator */}
        {activeTab === "fitts" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 p-5 sm:p-7 rounded-3xl bg-white border border-[#DFE8DA] shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#DFE8DA] text-xs font-medium text-[#52665B]">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#5B9B70]" />
                  <span>CATCH THE GLOWING DEWBUBBLE</span>
                </div>
                <span className="text-[#28523B]">TAP AS QUICKLY AND ACCURATELY AS POSSIBLE</span>
              </div>

              {/* Bounding meadow box */}
              <div className="relative w-full h-[320px] rounded-2xl bg-gradient-to-b from-[#EBF5FB] via-[#F4F9F3] to-[#E9F3E8] border border-[#DFE8DA] overflow-hidden select-none">
                <button
                  onClick={moveTarget}
                  style={{
                    left: `${targetPos.x}%`,
                    top: `${targetPos.y}%`,
                    width: `${targetWidth}px`,
                    height: `${targetWidth}px`,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#F3B748] to-[#E89A3C] text-white font-bold text-xs flex items-center justify-center transition-all duration-150 shadow-lg shadow-[#F3B748]/40 active:scale-95 group hover:scale-105"
                >
                  <span className="text-sm">✨</span>
                </button>
              </div>

              {/* Slider */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-[#52665B]">
                <div className="flex items-center gap-3">
                  <span>TARGET DIAMETER:</span>
                  <input
                    type="range"
                    min="36"
                    max="110"
                    value={targetWidth}
                    onChange={(e) => setTargetWidth(parseInt(e.target.value, 10))}
                    className="accent-[#28523B] cursor-pointer"
                  />
                  <span className="text-[#28523B] font-bold">{targetWidth}px</span>
                </div>
                <button
                  onClick={() => {
                    setTimesList([]);
                    setReactionTime(null);
                    setAverageTime(null);
                    setClickCount(0);
                  }}
                  className="inline-flex items-center gap-1.5 text-[#52665B] hover:text-[#28523B]"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>RESET TRIALS</span>
                </button>
              </div>
            </div>

            {/* Readout */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-6 rounded-3xl bg-white border border-[#DFE8DA] shadow-sm space-y-4">
                <div className="text-xs font-medium uppercase text-[#5B9B70] tracking-wider">
                  TELEMETRY READOUT
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-[#FAF9F3] border border-[#DFE8DA]">
                    <span className="text-[10px] text-[#64756B] block">LAST SPEED</span>
                    <span className="text-2xl font-heading font-bold text-[#1C2721] mt-1 block">
                      {reactionTime ? `${reactionTime}ms` : "--"}
                    </span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FAF9F3] border border-[#DFE8DA]">
                    <span className="text-[10px] text-[#64756B] block">AVG (5 TRIALS)</span>
                    <span className="text-2xl font-heading font-bold text-[#28523B] mt-1 block">
                      {averageTime ? `${averageTime}ms` : "--"}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#EAF3EA] border border-[#B8D4BE] text-xs space-y-2">
                  <div className="text-[#28523B] font-bold">Fitts&apos;s Law in Practice:</div>
                  <div className="text-[#3E7351] font-mono text-[11px]">MT = a + b · log₂(2D / W)</div>
                  <p className="text-[#52665B] leading-relaxed">
                    Target acquisition speed and motor confidence grow exponentially as touch targets reach thumb-ergonomic sweet spots (&ge; 48px), preventing user frustration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Botanical Pigment Contrast */}
        {activeTab === "contrast" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 p-6 sm:p-7 rounded-3xl bg-white border border-[#DFE8DA] shadow-sm space-y-6">
              <div className="flex items-center justify-between text-xs font-medium text-[#52665B] border-b border-[#DFE8DA] pb-3">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[#5B9B70]" />
                  <span>NATURAL EARTH PIGMENT ACCESSIBILITY AUDIT</span>
                </div>
                <span className="text-[#28523B] font-bold">WCAG 2.1 COMPLIANCE</span>
              </div>

              {/* Sample Render Frame */}
              <div
                style={{
                  backgroundColor: bgColor,
                  color: fgColor,
                }}
                className="p-8 rounded-2xl border border-[#DFE8DA] transition-colors min-h-[140px] flex flex-col justify-center space-y-2 shadow-sm"
              >
                <div className="text-xl font-serif font-bold tracking-tight">
                  Design should be as accessible and welcoming as open meadow sunlight.
                </div>
                <div className="text-xs opacity-85 font-sans">
                  Testing relative luminance ratios against warm parchment and forest earth palettes.
                </div>
              </div>

              {/* Color Control Palettes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium">
                <div className="space-y-1.5">
                  <label className="text-[#64756B] block">FOREGROUND PIGMENT:</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={fgColor}
                      onChange={(e) => setFgColor(e.target.value)}
                      className="w-10 h-10 rounded-xl cursor-pointer border border-[#DFE8DA] bg-transparent"
                    />
                    <input
                      type="text"
                      value={fgColor}
                      onChange={(e) => setFgColor(e.target.value)}
                      className="px-3 py-2 rounded-xl bg-[#FAF9F3] border border-[#DFE8DA] text-[#1C2721] w-28 uppercase font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[#64756B] block">BACKGROUND PARCHMENT:</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="w-10 h-10 rounded-xl cursor-pointer border border-[#DFE8DA] bg-transparent"
                    />
                    <input
                      type="text"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="px-3 py-2 rounded-xl bg-[#FAF9F3] border border-[#DFE8DA] text-[#1C2721] w-28 uppercase font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Presets */}
              <div className="pt-2 border-t border-[#DFE8DA] flex flex-wrap items-center gap-2 text-xs">
                <span className="text-[#64756B]">PIGMENTS:</span>
                <button
                  onClick={() => {
                    setFgColor("#1A3828");
                    setBgColor("#FAF9F3");
                  }}
                  className="px-3 py-1.5 rounded-full bg-[#FAF9F3] hover:bg-[#F0F4EC] text-[#1A3828] border border-[#DFE8DA]"
                >
                  Cedar / Warm Cream (12:1)
                </button>
                <button
                  onClick={() => {
                    setFgColor("#2F7DBE");
                    setBgColor("#FAF9F3");
                  }}
                  className="px-3 py-1.5 rounded-full bg-[#FAF9F3] hover:bg-[#F0F4EC] text-[#2F7DBE] border border-[#DFE8DA]"
                >
                  Summer Sky / Cream (5.2:1)
                </button>
                <button
                  onClick={() => {
                    setFgColor("#FAF9F3");
                    setBgColor("#28523B");
                  }}
                  className="px-3 py-1.5 rounded-full bg-[#FAF9F3] hover:bg-[#F0F4EC] text-[#28523B] border border-[#DFE8DA]"
                >
                  Parchment on Forest (8.5:1)
                </button>
              </div>
            </div>

            {/* Scorecard */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#DFE8DA] shadow-sm space-y-5">
                <div className="text-xs font-medium uppercase text-[#5B9B70] tracking-wider">
                  WCAG ACCESSIBILITY RATING
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF9F3] border border-[#DFE8DA] flex items-center justify-between">
                  <span className="text-xs text-[#64756B]">CONTRAST RATIO</span>
                  <span className="text-3xl font-heading font-bold text-[#1C2721]">
                    {contrastRatio} : 1
                  </span>
                </div>

                <div className="space-y-2 text-xs font-medium">
                  <div className="p-3.5 rounded-xl bg-[#FAF9F3] border border-[#DFE8DA] flex items-center justify-between">
                    <span className="text-[#52665B]">WCAG AA (≥ 4.5:1)</span>
                    <span className={passAA ? "text-[#28523B] font-bold" : "text-[#E76F51] font-bold"}>
                      {passAA ? "✓ COMPLIANT" : "✕ LOW CONTRAST"}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FAF9F3] border border-[#DFE8DA] flex items-center justify-between">
                    <span className="text-[#52665B]">WCAG AAA (≥ 7.0:1)</span>
                    <span className={passAAA ? "text-[#28523B] font-bold" : "text-[#E89A3C] font-bold"}>
                      {passAAA ? "✓ EXCELLENT (AAA)" : "✕ BELOW AAA"}
                    </span>
                  </div>
                </div>

                <p className="text-xs font-sans text-[#64756B] leading-relaxed">
                  Every typography token across Nantha&apos;s product systems is crafted to provide soothing, high-clarity reading comfort in both daylight and twilight.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Tactile */}
        {activeTab === "tactile" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 p-6 sm:p-7 rounded-3xl bg-white border border-[#DFE8DA] shadow-sm space-y-6">
              <div className="flex items-center justify-between text-xs font-medium text-[#52665B] border-b border-[#DFE8DA] pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#F3B748]" />
                  <span>TACTILE SPRING &amp; WOODEN HARMONY</span>
                </div>
                <span className="text-[#28523B]">NATURAL BOUNCE SIMULATION</span>
              </div>

              {/* Arena */}
              <div className="h-[220px] rounded-2xl bg-gradient-to-b from-[#FAF9F3] to-[#EEF5EC] border border-[#DFE8DA] flex flex-col items-center justify-center space-y-4">
                <button
                  onMouseDown={() => {
                    soundFx.playClick();
                    setButtonState("pressed");
                  }}
                  onMouseUp={() => {
                    soundFx.playChime();
                    setButtonState("success");
                    setTimeout(() => setButtonState("idle"), 1200);
                  }}
                  className={`px-8 py-4 rounded-full font-heading font-semibold text-sm tracking-wide transition-all duration-150 select-none shadow-md flex items-center gap-2 ${
                    buttonState === "pressed"
                      ? "scale-95 bg-[#1A3828] text-white shadow-none"
                      : buttonState === "success"
                      ? "scale-105 bg-[#5B9B70] text-white shadow-lg shadow-[#5B9B70]/25"
                      : "bg-[#28523B] hover:bg-[#3E7351] text-white hover:scale-105 shadow-[#28523B]/20"
                  }`}
                >
                  <span className="text-base">🍃</span>
                  <span>
                    {buttonState === "pressed"
                      ? "SPRING ENGAGED..."
                      : buttonState === "success"
                      ? "HARMONY VERIFIED ✓"
                      : "PRESS BOUNCY LEAF"}
                  </span>
                </button>
                <div className="text-[11px] text-[#64756B]">
                  Click and hold to experience organic spring dampening &amp; acoustic chime
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-2 text-xs font-medium">
                <div className="flex items-center justify-between text-[#52665B]">
                  <span>SPRING STIFFNESS (k):</span>
                  <span className="text-[#28523B] font-bold">{springStiffness} N/m</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="600"
                  value={springStiffness}
                  onChange={(e) => setSpringStiffness(parseInt(e.target.value, 10))}
                  className="w-full accent-[#28523B] cursor-pointer"
                />
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-7 rounded-3xl bg-white border border-[#DFE8DA] shadow-sm space-y-4 text-xs font-sans">
              <div className="text-[#28523B] font-bold uppercase tracking-wider">
                NATURAL RHYTHM IN INTERFACES
              </div>
              <p className="text-[#52665B] leading-relaxed">
                When digital elements mimic the physical physics of nature—a leaf rebounding after a drop of rain, or a pebble skipping across water—they register subconsciously as intuitive, reliable, and deeply satisfying.
              </p>
              <div className="p-4 rounded-2xl bg-[#FAF9F3] border border-[#DFE8DA] space-y-2">
                <div className="text-[#1C2721] font-semibold">Ghibli Design Principles:</div>
                <div className="text-[#52665B] space-y-1 text-[11px]">
                  <div>✓ Warm visual response in under 50ms</div>
                  <div>✓ Natural ease-out velocity curves</div>
                  <div>✓ Calming acoustic audio feedback</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
