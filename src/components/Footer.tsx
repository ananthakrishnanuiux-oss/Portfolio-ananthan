"use client";

import React from "react";
import Link from "next/link";
import { soundFx } from "@/lib/soundFx";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    soundFx.playChime();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#06080A] border-t border-amber-500/20 py-12 sm:py-16 text-zinc-400 text-xs font-sans relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Left: Brand Identity with Kerala Emblem */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <span className="text-sm">🪔</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-white text-sm tracking-tight">
                Ananthakrishnan K Nair
              </span>
              <span className="text-[11px] text-amber-300/80">
                UI/UX Designer &amp; Educator • Kerala, India
              </span>
            </div>
          </div>

          {/* Center: Clean Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 text-xs font-medium text-zinc-300">
            <Link
              href="/#hero"
              onClick={() => soundFx.playClick()}
              className="hover:text-amber-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#projects"
              onClick={() => soundFx.playClick()}
              className="hover:text-amber-400 transition-colors"
            >
              Case Studies
            </Link>
            <Link
              href="/ux-journal"
              onClick={() => soundFx.playClick()}
              className="hover:text-amber-400 transition-colors text-amber-300/90 font-bold"
            >
              UX Journal
            </Link>
            <Link
              href="/#about"
              onClick={() => soundFx.playClick()}
              className="hover:text-amber-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/#interactive-game"
              onClick={() => soundFx.playClick()}
              className="hover:text-amber-400 transition-colors"
            >
              Fitts&apos;s Law
            </Link>
            <Link
              href="/#contact"
              onClick={() => soundFx.playClick()}
              className="hover:text-amber-400 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right: Scroll to top with Kasavu Gold accent */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121620] hover:bg-amber-500 border border-amber-500/30 hover:border-amber-400 text-amber-300 hover:text-stone-950 transition-all text-xs font-semibold cursor-pointer shadow-xs"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Copyright & Cultural Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            &copy; 2026 Ananthakrishnan K Nair. Crafted with human empathy from Kerala, India.
          </div>
          <div className="flex items-center gap-2 text-amber-400/70 font-mono text-[10px]">
            <span>🌴</span> God&apos;s Own Country • Land of Gods, Land of Culture
          </div>
        </div>

      </div>
    </footer>
  );
}
