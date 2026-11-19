"use client";

import React, { useState, useEffect, useRef } from "react";
import { soundFx } from "@/lib/soundFx";
import { Play, RotateCcw, Trophy, Sparkles, ChevronLeft, ChevronRight, Sun, Wind, Heart } from "lucide-react";

interface ForestItem {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  type: "sunflower" | "dew" | "leaf" | "acorn" | "weed";
  points: number;
  color: string;
  label: string;
  alive: boolean;
}

interface Sunburst {
  x: number;
  y: number;
  radius: number;
  speed: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  life: number;
}

export default function RetroUxArcade() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [gameState, setGameState] = useState<"idle" | "playing" | "gameover">("idle");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [wave, setWave] = useState(1);
  const [lives, setLives] = useState(3);

  // References for 60fps game loop state
  const playerRef = useRef({
    x: 260,
    y: 350,
    width: 38,
    height: 42,
    speed: 6.5,
    movingLeft: false,
    movingRight: false,
  });
  const burstsRef = useRef<Sunburst[]>([]);
  const itemsRef = useRef<ForestItem[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const scoreRef = useRef(0);
  const livesRef = useRef(3);
  const waveRef = useRef(1);
  const animationFrameRef = useRef<number | null>(null);

  // Load high score from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("sunbeam_harvest_high_score");
      if (saved) setHighScore(parseInt(saved, 10));
    }
  }, []);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState !== "playing") return;

      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        playerRef.current.movingLeft = true;
      }
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        playerRef.current.movingRight = true;
      }
      if (e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        castSunburst();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        playerRef.current.movingLeft = false;
      }
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        playerRef.current.movingRight = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gameState]);

  const castSunburst = () => {
    if (gameState !== "playing") return;
    const p = playerRef.current;
    burstsRef.current.push({
      x: p.x + p.width / 2,
      y: p.y - 6,
      radius: 6,
      speed: 7.5,
    });
    soundFx.playDewDrop();
  };

  const spawnItems = (canvasWidth: number) => {
    const types = [
      { type: "sunflower", color: "#F59E0B", label: "🌻 SUN", points: 200, speedY: 1.3 },
      { type: "dew", color: "#FBBF24", label: "🍯 HONEY", points: 150, speedY: 1.1 },
      { type: "leaf", color: "#D97706", label: "🍂 LEAF", points: 120, speedY: 1.4 },
      { type: "acorn", color: "#92400E", label: "🌰 ACORN", points: 100, speedY: 0.95 },
      { type: "weed", color: "#78716C", label: "🌿 THORN", points: 0, speedY: 1.2 },
    ] as const;

    const count = 4 + waveRef.current;
    const spacing = (canvasWidth - 60) / count;

    for (let i = 0; i < count; i++) {
      const chosen = types[Math.floor(Math.random() * types.length)];
      itemsRef.current.push({
        x: 30 + i * spacing + (Math.random() * 24 - 12),
        y: Math.random() * -140 - 30,
        size: 26,
        speedX: (Math.random() - 0.5) * 1.3,
        speedY: chosen.speedY + waveRef.current * 0.12,
        type: chosen.type,
        points: chosen.points,
        color: chosen.color,
        label: chosen.label,
        alive: true,
      });
    }
  };

  const createBloomPetals = (x: number, y: number, color: string) => {
    for (let i = 0; i < 16; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3.5 + 1.2;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.8,
        color,
        size: Math.random() * 4 + 2,
        life: 1.0,
      });
    }
  };

  const startGame = () => {
    soundFx.playChime();
    setGameState("playing");
    setScore(0);
    setLives(3);
    setWave(1);

    scoreRef.current = 0;
    livesRef.current = 3;
    waveRef.current = 1;
    burstsRef.current = [];
    itemsRef.current = [];
    particlesRef.current = [];

    const canvas = canvasRef.current;
    if (canvas) {
      playerRef.current.x = canvas.width / 2 - 19;
      playerRef.current.y = canvas.height - 54;
      spawnItems(canvas.width);
    }
  };

  // Main 60fps Game Loop
  useEffect(() => {
    if (gameState !== "playing") {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let running = true;

    const gameLoop = () => {
      if (!running) return;

      const cw = canvas.width;
      const ch = canvas.height;

      // 1. Draw Painterly Warm Honey Sky & Rolling Meadow
      const skyGradient = ctx.createLinearGradient(0, 0, 0, ch);
      skyGradient.addColorStop(0, "#FFFBEB");
      skyGradient.addColorStop(0.55, "#FEF9C3");
      skyGradient.addColorStop(1, "#FEF08A");
      ctx.fillStyle = skyGradient;
      ctx.fillRect(0, 0, cw, ch);

      // Rolling amber hills
      ctx.fillStyle = "#FDE68A";
      ctx.beginPath();
      ctx.ellipse(cw * 0.3, ch - 12, cw * 0.55, 45, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#F59E0B";
      ctx.beginPath();
      ctx.ellipse(cw * 0.75, ch - 8, cw * 0.6, 50, 0, 0, Math.PI * 2);
      ctx.fill();

      // Soft sunbeam rays
      ctx.fillStyle = "rgba(254, 240, 138, 0.45)";
      ctx.beginPath();
      ctx.moveTo(cw * 0.2, 0);
      ctx.lineTo(cw * 0.45, ch);
      ctx.lineTo(cw * 0.3, ch);
      ctx.lineTo(cw * 0.05, 0);
      ctx.closePath();
      ctx.fill();

      // 2. Update & Draw Kodama Player (Gentle Forest Spirit with Sunflower Cap)
      const p = playerRef.current;
      if (p.movingLeft && p.x > 8) p.x -= p.speed;
      if (p.movingRight && p.x < cw - p.width - 8) p.x += p.speed;

      ctx.save();
      ctx.shadowColor = "rgba(245, 158, 11, 0.4)";
      ctx.shadowBlur = 14;

      // Spirit Body (Warm white pearlescent)
      ctx.fillStyle = "#FFFFFF";
      ctx.beginPath();
      ctx.ellipse(p.x + p.width / 2, p.y + p.height / 2 + 4, p.width / 2.2, p.height / 2.4, 0, 0, Math.PI * 2);
      ctx.fill();

      // Spirit Head
      ctx.beginPath();
      ctx.ellipse(p.x + p.width / 2, p.y + 13, p.width / 2.4, p.height / 3.2, -0.04, 0, Math.PI * 2);
      ctx.fill();

      // Cute Eyes & Smile
      ctx.fillStyle = "#78350F";
      ctx.beginPath();
      ctx.arc(p.x + p.width / 2 - 5, p.y + 12, 2.2, 0, Math.PI * 2);
      ctx.arc(p.x + p.width / 2 + 5, p.y + 12, 2.2, 0, Math.PI * 2);
      ctx.arc(p.x + p.width / 2, p.y + 18, 1.8, 0, Math.PI * 2);
      ctx.fill();

      // Golden Sunflower Sprout Hat
      ctx.fillStyle = "#F59E0B";
      ctx.beginPath();
      ctx.ellipse(p.x + p.width / 2, p.y + 2, 7, 3.5, -0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 3. Update & Draw Sunburst Beams
      const bursts = burstsRef.current;
      for (let i = bursts.length - 1; i >= 0; i--) {
        const b = bursts[i];
        b.y -= b.speed;

        ctx.fillStyle = "#F59E0B";
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#FEF08A";
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius * 0.5, 0, Math.PI * 2);
        ctx.fill();

        // Remove offscreen
        if (b.y < -10) {
          bursts.splice(i, 1);
        }
      }

      // 4. Update & Draw Falling Forest Items
      const items = itemsRef.current;
      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        item.y += item.speedY;
        item.x += item.speedX;

        // Bounce off canvas walls
        if (item.x <= 10 || item.x >= cw - item.size - 10) {
          item.speedX *= -1;
        }

        // Draw item circular bubble
        ctx.save();
        ctx.fillStyle = item.color;
        ctx.beginPath();
        ctx.arc(item.x + item.size / 2, item.y + item.size / 2, item.size / 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Label
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 8px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(item.label.split(" ")[0], item.x + item.size / 2, item.y + item.size / 2 + 3);
        ctx.restore();

        // Collision: Sunburst touches falling item
        for (let j = bursts.length - 1; j >= 0; j--) {
          const b = bursts[j];
          const dist = Math.hypot(b.x - (item.x + item.size / 2), b.y - (item.y + item.size / 2));
          if (dist < b.radius + item.size / 2) {
            // Burst into petals!
            createBloomPetals(item.x + item.size / 2, item.y + item.size / 2, item.color);
            soundFx.playBloom();

            bursts.splice(j, 1);
            items.splice(i, 1);

            scoreRef.current += item.points || 50;
            setScore(scoreRef.current);

            if (scoreRef.current > highScore) {
              setHighScore(scoreRef.current);
              localStorage.setItem("sunbeam_harvest_high_score", scoreRef.current.toString());
            }
            break;
          }
        }

        // Collision: Item touches Kodama
        const playerCenterX = p.x + p.width / 2;
        const playerCenterY = p.y + p.height / 2;
        const distToPlayer = Math.hypot(playerCenterX - (item.x + item.size / 2), playerCenterY - (item.y + item.size / 2));

        if (distToPlayer < p.width / 2 + item.size / 2) {
          if (item.type === "weed") {
            // Thorn hurt!
            createBloomPetals(playerCenterX, playerCenterY, "#78716C");
            soundFx.playGameOver();
            items.splice(i, 1);

            livesRef.current -= 1;
            setLives(livesRef.current);

            if (livesRef.current <= 0) {
              setGameState("gameover");
              return;
            }
          } else {
            // Collected golden blossom or dewdrop!
            createBloomPetals(playerCenterX, playerCenterY, item.color);
            soundFx.playDewDrop();
            items.splice(i, 1);

            scoreRef.current += item.points;
            setScore(scoreRef.current);

            if (scoreRef.current > highScore) {
              setHighScore(scoreRef.current);
              localStorage.setItem("sunbeam_harvest_high_score", scoreRef.current.toString());
            }
          }
        }

        // Respawn if falls past bottom
        if (item.y > ch + 20) {
          items.splice(i, 1);
        }
      }

      // If all items cleared, next wave!
      if (items.length === 0) {
        waveRef.current += 1;
        setWave(waveRef.current);
        soundFx.playChime();
        spawnItems(cw);
      }

      // 5. Update & Draw Petal Burst Particles
      const parts = particlesRef.current;
      for (let i = parts.length - 1; i >= 0; i--) {
        const pt = parts[i];
        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.vy += 0.08; // subtle gravity
        pt.life -= 0.024;

        if (pt.life <= 0) {
          parts.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, pt.life);
        ctx.fillStyle = pt.color;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size * pt.life, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameRef.current = requestAnimationFrame(gameLoop);
    };

    animationFrameRef.current = requestAnimationFrame(gameLoop);

    return () => {
      running = false;
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [gameState, highScore]);

  return (
    <section id="interactive-game" className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#FDE68A] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* =========================================================================
            SECTION HEADER
           ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 border-b border-[#FDE68A] pb-6 gap-4">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF9C3] border border-[#FDE68A] text-xs font-bold text-[#854D0E]">
              <span>🌻</span>
              <span>INTERACTIVE PLAY • 木霊のサンシャイン</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight">
              Sunbeam Harvest Quest
            </h2>
            <p className="text-xs sm:text-sm text-[#57534E] font-normal leading-relaxed">
              A playful interactive break! Guide the Kodama spirit through golden meadows. Catch falling sunbeam petals, harvest morning honey dewdrops, and release sunbursts.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="px-4 py-2.5 rounded-2xl bg-[#FEFCE8] border border-[#FDE68A] flex items-center gap-2 shadow-xs">
              <Trophy className="w-4 h-4 text-[#D97706]" />
              <span className="text-[#78716C] uppercase font-bold text-[10px] tracking-wider">HARVEST RECORD:</span>
              <span className="text-[#92400E] font-extrabold text-sm">{highScore.toLocaleString()} pts</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            STORYBOOK GAME CABINET FRAME
           ========================================================================= */}
        <div className="relative mx-auto max-w-[620px] rounded-3xl bg-[#FCFBF7] p-3 sm:p-5 border-2 border-[#FDE68A] shadow-xl shadow-[#F59E0B]/10">
          
          {/* Top Marquee Header */}
          <div className="mb-3 px-4 py-2.5 rounded-2xl bg-[#FEF9C3] border border-[#FDE047] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4 text-[#D97706]" />
              <span className="text-xs sm:text-sm font-bold text-[#78350F]">
                Kodama Forest Quest • Meadow Edition
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#92400E]">
              <span>🍃 Warm Breeze: Active</span>
            </div>
          </div>

          {/* Canvas Screen */}
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[#FDE68A] shadow-inner bg-[#FEFCE8]">
            <canvas
              ref={canvasRef}
              width={560}
              height={420}
              className="w-full h-full block"
            />

            {/* In-Game HUD overlay */}
            {gameState === "playing" && (
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs font-sans text-[#78350F] pointer-events-none select-none">
                <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full border border-[#FDE68A] shadow-xs font-bold text-[11px]">
                  <span>🌻</span>
                  <span>DEW: {score}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full border border-[#FDE68A] shadow-xs font-bold text-[11px]">
                  <span>GLADE: 0{wave}</span>
                </div>
                <div className="flex items-center gap-1 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full border border-[#FDE68A] shadow-xs font-bold text-[11px]">
                  <span className="text-[#92400E]">LIVES:</span>
                  {Array.from({ length: 3 }).map((_, idx) => (
                    <span key={idx} className="text-xs">
                      {idx < lives ? "💛" : "⚪"}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Idle Start Overlay */}
            {gameState === "idle" && (
              <div className="absolute inset-0 bg-[#FEFCE8]/92 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center select-none space-y-4">
                <div className="px-3.5 py-1 rounded-full bg-[#FEF08A] border border-[#FDE68A] text-[11px] font-bold text-[#854D0E]">
                  🌱 SUNNY GLADE EXPEDITION
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] tracking-tight">
                  Help Kodama Gather Sunbeams
                </h3>
                <p className="text-xs text-[#57534E] max-w-sm leading-relaxed font-normal">
                  Desktop: Press [←] / [→] or [A] / [D] to glide. Press [SPACE] to release blooming sunbursts.
                  <br />
                  Mobile: Use on-screen touch arrows and Sunburst button.
                </p>
                <button
                  onClick={startGame}
                  className="px-7 py-3 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-[#1C1917] font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-[#F59E0B]/25 flex items-center gap-2 hover:scale-105"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>START EXPEDITION</span>
                </button>
              </div>
            )}

            {/* Game Over Overlay */}
            {gameState === "gameover" && (
              <div className="absolute inset-0 bg-[#FEFCE8]/95 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center select-none space-y-4 animate-in fade-in duration-200">
                <div className="text-xs font-bold uppercase tracking-wider text-[#92400E]">
                  Dusk Has Fallen • Meadow Rest
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917]">
                  Kodama Is Resting
                </h3>
                <div className="text-xs space-y-1 text-[#57534E]">
                  <div>Sunbeams &amp; Dew Gathered: <strong className="text-[#92400E] font-bold text-sm">{score}</strong></div>
                  <div>Meadow Glades Explored: <strong className="text-[#92400E]">0{wave}</strong></div>
                </div>
                <button
                  onClick={startGame}
                  className="px-6 py-2.5 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-[#1C1917] font-bold text-xs tracking-wider transition-all shadow-md flex items-center gap-2 hover:scale-105"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>PLAY AGAIN</span>
                </button>
              </div>
            )}
          </div>

          {/* Arcade Cabinet Bottom Control Bar & Mobile Touch Controls */}
          <div className="mt-3 pt-3 border-t border-[#FDE68A] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#78716C]">
            {/* Keyboard hints */}
            <div className="hidden sm:flex items-center gap-2 text-[11px]">
              <span className="px-2 py-0.5 rounded-md bg-white border border-[#FDE68A] font-bold text-[#78350F]">A / ←</span>
              <span className="px-2 py-0.5 rounded-md bg-white border border-[#FDE68A] font-bold text-[#78350F]">D / →</span>
              <span>Glide</span>
              <span className="mx-1 text-[#FDE047]">•</span>
              <span className="px-2 py-0.5 rounded-md bg-white border border-[#FDE68A] font-bold text-[#78350F]">SPACE</span>
              <span>Sunburst</span>
            </div>

            {/* Mobile Touch Controls */}
            <div className="flex sm:hidden items-center justify-between w-full px-2 gap-2">
              <div className="flex items-center gap-2">
                <button
                  onTouchStart={() => (playerRef.current.movingLeft = true)}
                  onTouchEnd={() => (playerRef.current.movingLeft = false)}
                  className="p-3 rounded-xl bg-white border border-[#FDE68A] active:bg-[#FEF08A] text-[#78350F]"
                  aria-label="Move Left"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onTouchStart={() => (playerRef.current.movingRight = true)}
                  onTouchEnd={() => (playerRef.current.movingRight = false)}
                  className="p-3 rounded-xl bg-white border border-[#FDE68A] active:bg-[#FEF08A] text-[#78350F]"
                  aria-label="Move Right"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <button
                onTouchStart={castSunburst}
                className="px-6 py-3 rounded-xl bg-[#F59E0B] active:bg-[#D97706] text-[#1C1917] font-bold text-xs flex items-center gap-1 shadow-xs"
              >
                <span>🌻 SUNBURST</span>
              </button>
            </div>

            {/* Rest / Reset trigger */}
            {gameState === "playing" && (
              <button
                onClick={() => setGameState("idle")}
                className="text-[11px] text-[#78716C] hover:text-[#92400E] underline underline-offset-2"
              >
                Pause / Rest
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
