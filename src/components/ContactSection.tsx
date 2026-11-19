"use client";

import React, { useState } from "react";
import { ArrowRight, Mail, Copy, Check, Send, X, MessageSquare } from "lucide-react";
import { soundFx } from "@/lib/soundFx";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ContactSection() {
  const { personal } = PORTFOLIO_DATA;
  const [modalOpen, setModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleCopyEmail = () => {
    soundFx.playChime();
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playChime();
    setFormSubmitted(true);
  };

  return (
    <>
      <section id="contact" className="py-20 sm:py-28 bg-[#080A0D] border-b border-amber-500/20 relative">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          
          {/* =========================================================================
              DEEP WARM KERALA LUXURY BANNER CARD
             ========================================================================= */}
          <div className="relative rounded-[36px] sm:rounded-[44px] bg-gradient-to-br from-[#1C1204] via-[#120B02] to-[#0A0701] border-2 border-amber-500/35 overflow-hidden p-8 sm:p-14 lg:p-16 text-white shadow-2xl shadow-black/80">
            
            {/* Ambient Warm Golden Nilavilakku Radial Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-amber-500/20 to-transparent pointer-events-none blur-3xl animate-lantern-glow" />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-emerald-500/10 to-transparent pointer-events-none blur-3xl" />

            {/* Left Content Area */}
            <div className="relative z-10 max-w-xl space-y-6 text-left">
              {/* Cultural Category Label */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-wider uppercase font-mono">
                <span>🪔</span> LET&apos;S COLLABORATE • GET IN TOUCH
              </div>

              {/* Banner Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Ready to build intuitive, high-impact digital products?
              </h2>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-md">
                Whether you need end-to-end product design, a scalable design system, or a UX audit, let&apos;s create something remarkable together.
              </p>

              {/* Direct Buttons Row */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => {
                    soundFx.playChime();
                    setModalOpen(true);
                  }}
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-extrabold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-amber-500/25 flex items-center gap-2 group hover:gap-3 cursor-pointer"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={handleCopyEmail}
                  className="px-5 py-3.5 rounded-full bg-black/60 hover:bg-black/80 border border-amber-500/35 hover:border-amber-400 text-amber-300 text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive Direct Contact Modal in Dark Kerala Palette */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#0E1218] rounded-3xl max-w-lg w-full p-6 sm:p-8 border-2 border-amber-500/35 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto text-white text-left">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block">
                DIRECT INQUIRY
              </span>
              <h3 className="text-2xl font-extrabold text-white">Let&apos;s talk design</h3>
              <p className="text-xs text-zinc-300">
                Send a message directly to Ananthakrishnan or copy contact details below.
              </p>
            </div>

            {/* Quick Contact Info Strip */}
            <div className="p-3.5 rounded-2xl bg-[#141923] border border-amber-500/20 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400">Email:</span>
                <span className="font-mono text-amber-300 select-all font-semibold">{personal.email}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400">Location:</span>
                <span className="text-emerald-400 font-medium">Kerala, India (IST)</span>
              </div>
            </div>

            {/* Inquiry Form */}
            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-zinc-300 block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Maya Menon"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#161B24] border border-amber-500/25 focus:border-amber-400 focus:outline-none text-white text-xs placeholder:text-zinc-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-zinc-300 block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="maya@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#161B24] border border-amber-500/25 focus:border-amber-400 focus:outline-none text-white text-xs placeholder:text-zinc-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-zinc-300 block mb-1">Project Scope or Message</label>
                  <textarea
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your product, timeline, or design goals..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#161B24] border border-amber-500/25 focus:border-amber-400 focus:outline-none text-white text-xs placeholder:text-zinc-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-extrabold text-xs transition-all shadow-md shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Message</span>
                </button>
              </form>
            ) : (
              <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-2 animate-in fade-in">
                <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Thank you, {name}!</h4>
                <p className="text-xs text-zinc-300">
                  Your message has been logged. I usually reply within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setName("");
                    setEmail("");
                    setMessage("");
                  }}
                  className="text-xs text-amber-400 underline pt-2 cursor-pointer font-bold"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
