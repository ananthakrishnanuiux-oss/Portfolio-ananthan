"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import UiCraftSection from "@/components/UiCraftSection";
import AboutSection from "@/components/AboutSection";
import UiUxInteractiveGame from "@/components/UiUxInteractiveGame";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import KeralaAtmosphere from "@/components/KeralaAtmosphere";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080A0D] text-[#FBF7EE] flex flex-col font-sans selection:bg-amber-500 selection:text-stone-950 relative">
      {/* =========================================================================
          1. Kerala Night Atmosphere: Golden Temple Fireflies & Ambient Cursor Light
         ========================================================================= */}
      <KeralaAtmosphere enableEmbers={true} />

      {/* =========================================================================
          2. Sticky Kerala Heritage Luxury Navigation
         ========================================================================= */}
      <header className="sticky top-0 left-0 right-0 z-40">
        <Navbar />
      </header>

      {/* =========================================================================
          3. Main UI/UX Portfolio Flow in Kerala Luxury Theme
         ========================================================================= */}
      <main className="flex-1">
        {/* Cinematic Hero with 3D Mouse Parallax Artwork Showcase */}
        <Hero />

        {/* Selected Case Studies with 2-Row Dropdown & Quick View Modals */}
        <ProjectsSection />

        {/* UI/UX Craft & Specialized Tooling Stack */}
        <UiCraftSection />

        {/* About Ananthakrishnan: Proven Mentorship & Technical Foundation */}
        <AboutSection />

        {/* Interactive UI/UX Design Arena (Heuristics & Fitts's Law Speed Test) */}
        <UiUxInteractiveGame />

        {/* Direct Contact & Collaboration Section */}
        <ContactSection />
      </main>

      {/* Elegant Kerala Dark Footer */}
      <Footer />
    </div>
  );
}
