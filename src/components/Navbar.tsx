"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, X, Volume2, VolumeX, Sparkles, Eye } from "lucide-react";
import { soundFx } from "@/lib/soundFx";
import ResumeModal from "./ResumeModal";

export default function Navbar() {
  const pathname = usePathname();
  const isJournalPage = pathname === "/ux-journal";

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(isJournalPage ? "UX Journal" : "Home");
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    if (pathname === "/ux-journal") {
      setActiveNav("UX Journal");
    } else if (activeNav === "UX Journal") {
      setActiveNav("Home");
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: isJournalPage ? "/#hero" : "#hero" },
    { label: "Projects", href: isJournalPage ? "/#projects" : "#projects" },
    { label: "UX Journal", href: "/ux-journal", isRoute: true },
    { label: "About", href: isJournalPage ? "/#about" : "#about" },
    { label: "Fitts's Law", href: isJournalPage ? "/#interactive-game" : "#interactive-game" },
    { label: "Contact", href: isJournalPage ? "/#contact" : "#contact" },
  ];

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    if (nextState) {
      soundFx.playChime();
    }
  };

  return (
    <>
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#080A0D]/95 backdrop-blur-md border-b border-amber-500/25 py-3 shadow-lg shadow-black/60"
            : "bg-[#080A0D]/80 backdrop-blur-sm border-b border-amber-500/15 py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Identity with Kerala Motif */}
            <Link
              href="/"
              onClick={() => {
                if (soundEnabled) soundFx.playClick();
                setActiveNav("Home");
              }}
              className="flex items-center gap-3 group select-none"
              aria-label="Ananthakrishnan - UI/UX Designer from Kerala"
            >
              {/* Kathakali Motif / Sacred Nilavilakku Flame Emblem */}
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#78350F] via-[#2A1804] to-[#120B02] border border-amber-500/40 flex items-center justify-center text-amber-400 group-hover:border-amber-400 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.35)] transition-all duration-300">
                <span className="text-base select-none group-hover:scale-110 transition-transform">🪔</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-amber-400 transition-colors leading-tight tracking-tight">
                    Ananthakrishnan
                  </span>
                  <span className="hidden sm:inline text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-semibold font-mono">
                    Kerala, IN
                  </span>
                </div>
                <span className="text-[11px] font-medium text-amber-200/70 leading-tight">
                  UI/UX Designer &amp; Product Strategist
                </span>
              </div>
            </Link>

            {/* Center: Kasavu Gold Glass Nav Pills */}
            <div
              className="hidden lg:flex items-center gap-1 p-1 bg-[#12161F]/90 border border-amber-500/25 rounded-full shadow-inner"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => {
                const isActive = activeNav === link.label;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => {
                      if (soundEnabled) soundFx.playClick();
                      setActiveNav(link.label);
                    }}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                      isActive
                        ? "bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-bold shadow-md shadow-amber-500/20"
                        : "text-zinc-300 hover:text-amber-300 hover:bg-white/5"
                    }`}
                  >
                    {link.label === "UX Journal" && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    )}
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Right: Sound Toggle + Resume Pill Button */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Sound Toggle */}
              <button
                onClick={toggleSound}
                className="p-2 rounded-full bg-[#12161F] border border-amber-500/25 hover:border-amber-400 text-amber-400 hover:text-amber-300 transition-all duration-200 cursor-pointer shadow-xs"
                title={soundEnabled ? "Mute Sound Effects" : "Enable Sound Effects"}
                aria-label="Toggle Sound Effects"
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-zinc-500" />}
              </button>

              {/* View Resume Button */}
              <button
                onClick={() => {
                  if (soundEnabled) soundFx.playClick();
                  setResumeOpen(true);
                }}
                className="px-4 sm:px-5 py-2 rounded-full border border-amber-500/50 hover:border-amber-400 bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 hover:from-amber-500 hover:to-amber-600 hover:text-stone-950 text-amber-300 text-xs font-bold tracking-wide transition-all duration-200 flex items-center gap-1.5 shadow-sm shadow-amber-500/10 cursor-pointer group"
                aria-label="View Resume"
                title="View Resume"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={toggleSound}
                className="p-2 rounded-full bg-[#12161F] border border-amber-500/25 text-amber-400"
                aria-label="Toggle sound"
              >
                {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5 text-zinc-500" />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-[#12161F] border border-amber-500/30 text-amber-400 hover:bg-amber-500/10 transition-colors"
                aria-label="Toggle Mobile Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 px-5 py-5 bg-[#0D1016] border-t border-amber-500/25 shadow-2xl animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    if (soundEnabled) soundFx.playClick();
                    setActiveNav(link.label);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                    activeNav === link.label
                      ? "bg-amber-500 text-stone-950 font-bold"
                      : "text-zinc-300 hover:text-amber-400 hover:bg-white/5"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.label === "UX Journal" && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-bold">
                      Field Notes
                    </span>
                  )}
                </Link>
              ))}
              <button
                onClick={() => {
                  if (soundEnabled) soundFx.playClick();
                  setResumeOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="mt-2 w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-sm font-bold flex items-center justify-center gap-2 shadow-md cursor-pointer"
                title="View Resume"
              >
                <Eye className="w-4 h-4" />
                <span>View Resume</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Interactive Resume Journal Modal */}
      {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}
    </>
  );
}
