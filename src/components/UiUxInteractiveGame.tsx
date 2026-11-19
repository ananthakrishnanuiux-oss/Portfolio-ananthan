"use client";

import React, { useState, useEffect } from "react";
import { soundFx } from "@/lib/soundFx";
import {
  Target,
  RotateCcw,
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Sliders,
} from "lucide-react";

export default function UiUxInteractiveGame() {
  const [targetWidth, setTargetWidth] = useState(64);
  const [targetPos, setTargetPos] = useState({ x: 50, y: 50 });
  const [fittsStartTime, setFittsStartTime] = useState<number | null>(null);
  const [fittsReactionTime, setFittsReactionTime] = useState<number | null>(null);
  const [fittsClickCount, setFittsClickCount] = useState(0);
  const [fittsTimesList, setFittsTimesList] = useState<number[]>([]);
  const [fittsAverageTime, setFittsAverageTime] = useState<number | null>(null);
  const [bestTime, setBestTime] = useState<number | null>(null);
  const [recentRating, setRecentRating] = useState<string>("");

  useEffect(() => {
    setFittsStartTime(performance.now());
  }, []);

  const getSpeedRating = (ms: number) => {
    if (ms < 300) return "Lightning Fast (Pro Reflexes)";
    if (ms < 450) return "Rapid & Fluid";
    if (ms < 650) return "Standard Acquisition Time";
    return "Micro-Correction Delay (Target Too Small?)";
  };

  const handleFittsClick = () => {
    soundFx.playDewDrop();
    const now = performance.now();

    if (fittsStartTime) {
      const elapsed = Math.round(now - fittsStartTime);
      setFittsReactionTime(elapsed);
      setRecentRating(getSpeedRating(elapsed));

      if (bestTime === null || elapsed < bestTime) {
        setBestTime(elapsed);
      }

      const newTimes = [...fittsTimesList, elapsed].slice(-6);
      setFittsTimesList(newTimes);
      const avg = Math.round(newTimes.reduce((a, b) => a + b, 0) / newTimes.length);
      setFittsAverageTime(avg);
    }
    setFittsClickCount((c) => c + 1);

    // Randomize next target position within visible boundary
    const randX = Math.floor(Math.random() * 70) + 15;
    const randY = Math.floor(Math.random() * 60) + 20;
    setTargetPos({ x: randX, y: randY });
    setFittsStartTime(performance.now());
  };

  const handleFittsReset = () => {
    soundFx.playClick();
    setFittsTimesList([]);
    setFittsReactionTime(null);
    setFittsAverageTime(null);
    setBestTime(null);
    setRecentRating("");
    setFittsClickCount(0);
    setTargetPos({ x: 50, y: 50 });
    setFittsStartTime(performance.now());
  };

  const getTargetComplianceBadge = (width: number) => {
    if (width < 44) {
      return {
        text: "WCAG 2.5.5 Fail (< 44px)",
        color: "text-red-400 bg-red-950/40 border-red-500/40",
      };
    }
    if (width < 60) {
      return {
        text: "WCAG 2.1 AA Compliant (≥ 44px)",
        color: "text-emerald-400 bg-emerald-950/40 border-emerald-500/40",
      };
    }
    return {
      text: "Optimal Thumb Zone Ergonomics (≥ 60px)",
      color: "text-amber-400 bg-amber-950/40 border-amber-500/40",
    };
  };

  const compliance = getTargetComplianceBadge(targetWidth);

  return (
    <section
      id="interactive-game"
      className="py-20 sm:py-28 bg-[#080A0D] border-t border-white/5 relative overflow-hidden"
    >
      {/* Background Kerala Backwater & Gold Lantern Glows */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] rounded-full bg-amber-500/[0.04] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] rounded-full bg-emerald-500/[0.03] blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* =========================================================================
            HEADER: Fitts's Law Speed Arena
           ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 border-b border-amber-500/20 pb-6 gap-4 text-left">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono font-bold text-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>UX SPEED LAB • MOTOR ERGONOMICS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Fitts&apos;s Law Speed Test
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
              In digital product design, speed is physics. Fitts&apos;s Law demonstrates that the time required to rapidly acquire a target is a function of the distance to the target and its width. Adjust the target size below to feel how tap precision shifts in real time.
            </p>
          </div>

          <div className="self-start md:self-end">
            <button
              onClick={handleFittsReset}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#121620] hover:bg-[#1A202C] border border-amber-500/30 text-amber-300 text-xs font-semibold transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Trials</span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            FITTS'S LAW SPEED ARENA (2 Columns: Target Arena + Motor Telemetry)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Interactive Target Arena */}
          <div className="lg:col-span-8 p-5 sm:p-6 rounded-3xl bg-[#10141E] border border-amber-500/30 shadow-2xl relative space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-amber-500/20 text-xs font-semibold text-amber-300">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-amber-400" />
                <span className="font-mono uppercase tracking-wider text-[11px]">
                  Click the Golden Target as fast as possible
                </span>
              </div>
              <span className="text-[11px] font-mono text-zinc-400">
                TRIALS: <strong className="text-white">{fittsClickCount}</strong>
              </span>
            </div>

            {/* Bounding Interactive Area */}
            <div className="relative w-full h-[340px] sm:h-[380px] rounded-2xl bg-[#090C12] border border-white/10 overflow-hidden select-none shadow-inner">
              
              {/* Subtle Spatial Coordinate Crosshair in Background */}
              <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

              {/* Dynamic Target Bubble */}
              <button
                type="button"
                onClick={handleFittsClick}
                style={{
                  left: `${targetPos.x}%`,
                  top: `${targetPos.y}%`,
                  width: `${targetWidth}px`,
                  height: `${targetWidth}px`,
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-stone-950 font-extrabold text-xs flex items-center justify-center transition-all duration-75 shadow-lg shadow-amber-500/40 active:scale-90 hover:scale-105 cursor-pointer border border-amber-300/60"
                aria-label="Fitts Law Speed Target"
              >
                <Target className="w-5 h-5 text-stone-950 pointer-events-none" />
              </button>

              {/* Prompt Overlay when 0 trials */}
              {fittsClickCount === 0 && (
                <div className="absolute bottom-4 inset-x-4 text-center pointer-events-none">
                  <span className="px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-amber-500/30 text-amber-300 text-xs font-mono">
                    Tap the glowing target above to start measuring response speed
                  </span>
                </div>
              )}
            </div>

            {/* Target Size Controls & WCAG Rating */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 text-xs">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <span className="font-bold text-zinc-300 flex items-center gap-1.5 shrink-0">
                  <Sliders className="w-3.5 h-3.5 text-amber-400" />
                  Target Size:
                </span>
                <input
                  type="range"
                  min="32"
                  max="96"
                  step="4"
                  value={targetWidth}
                  onChange={(e) => setTargetWidth(Number(e.target.value))}
                  className="accent-amber-500 cursor-pointer w-full sm:w-36"
                  aria-label="Adjust target size"
                />
                <span className="font-mono font-bold text-amber-300 shrink-0 w-12 text-right">
                  {targetWidth}px
                </span>
              </div>

              {/* WCAG Compliance Badge */}
              <div className={`px-2.5 py-1 rounded-full border text-[10px] font-mono font-bold flex items-center gap-1.5 ${compliance.color}`}>
                <CheckCircle2 className="w-3 h-3" />
                <span>{compliance.text}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Motor Telemetry & UX Takeaway */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Telemetry Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-[#10141E] border border-amber-500/30 shadow-2xl space-y-4 text-left">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>MOTOR TELEMETRY</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-[#161C26] border border-white/5">
                  <span className="text-[10px] text-zinc-400 block font-mono font-bold">LAST SPEED</span>
                  <span className="text-2xl font-black text-white mt-1 block font-mono">
                    {fittsReactionTime ? `${fittsReactionTime}ms` : "--"}
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#161C26] border border-white/5">
                  <span className="text-[10px] text-zinc-400 block font-mono font-bold">AVG (LAST 6)</span>
                  <span className="text-2xl font-black text-amber-400 mt-1 block font-mono">
                    {fittsAverageTime ? `${fittsAverageTime}ms` : "--"}
                  </span>
                </div>
              </div>

              {/* Best Time & Live Rating */}
              <div className="p-3.5 rounded-2xl bg-[#161C26] border border-white/5 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-[10px] text-zinc-400 block">PERSONAL BEST</span>
                  <span className="text-base font-bold text-emerald-400">
                    {bestTime ? `${bestTime}ms` : "--"}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-zinc-400 block">TOTAL TAPS</span>
                  <span className="text-base font-bold text-white">
                    {fittsClickCount}
                  </span>
                </div>
              </div>

              {recentRating && (
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium text-center">
                  {recentRating}
                </div>
              )}

              {/* Fitts's Law Equation & Explanation */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-xs space-y-2">
                <div className="font-bold text-amber-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>The Fitts&apos;s Law Formula:</span>
                </div>

                <div className="font-mono text-xs text-amber-300 bg-[#0A0D14] px-3 py-1.5 rounded-lg border border-amber-500/30 text-center">
                  MT = a + b · log₂(2D / W)
                </div>

                <p className="text-zinc-300 text-[11px] leading-relaxed font-normal pt-1">
                  Target acquisition speed grows exponentially as touch targets reach thumb-ergonomic sweet spots (≥ 48px). Smaller targets force physical micro-corrections, dramatically increasing task completion time and error rates.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
