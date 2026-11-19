/**
 * Main Interactive Application Logic (Vanilla JavaScript)
 * Preserves 100% of the UI/UX features, 3D Parallax, Fitts's Law Game, Audio & Modals.
 */

document.addEventListener('DOMContentLoaded', () => {
  initAtmosphereCanvas();
  initNavbar();
  initHeroParallax();
  initHeroTokensToggle();
  initProjectsSection();
  initFittsLawGame();
  initResumeModal();
  initContactSection();
});

/* =========================================================================
   1. KERALA NIGHT ATMOSPHERE: Golden Firefly Particle Canvas
   ========================================================================= */
function initAtmosphereCanvas() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = Array.from({ length: 28 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 2 + 1,
    alpha: Math.random() * 0.6 + 0.2,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4 - 0.2,
    color: Math.random() > 0.4 ? 'rgba(245, 158, 11, ' : 'rgba(16, 185, 129, '
  }));

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.alpha + ')';
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#F59E0B';
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

/* =========================================================================
   2. NAVBAR & SOUND CONTROLS
   ========================================================================= */
function initNavbar() {
  const soundBtn = document.getElementById('sound-toggle-btn');
  const soundIcon = document.getElementById('sound-icon');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (soundBtn && soundIcon) {
    updateSoundIcon(window.soundFx.isEnabled());
    soundBtn.addEventListener('click', () => {
      const enabled = window.soundFx.toggle();
      updateSoundIcon(enabled);
    });
  }

  function updateSoundIcon(enabled) {
    if (!soundIcon) return;
    soundIcon.innerHTML = enabled
      ? `<svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>`
      : `<svg class="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path></svg>`;
  }

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      window.soundFx.playClick();
      mobileMenu.classList.toggle('hidden');
    });

    const links = mobileMenu.querySelectorAll('a, button');
    links.forEach((l) => {
      l.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

/* =========================================================================
   3. HERO 3D PARALLAX TILT
   ========================================================================= */
function initHeroParallax() {
  const heroSection = document.getElementById('hero');
  const tiltCard = document.getElementById('hero-tilt-card');
  const parallaxGlow = document.getElementById('hero-ambient-glow');
  if (!heroSection || !tiltCard) return;

  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    tiltCard.style.transform = `perspective(1200px) rotateX(${y * -14}deg) rotateY(${x * 14}deg) scale3d(1.02, 1.02, 1.02)`;

    if (parallaxGlow) {
      parallaxGlow.style.transform = `translate(${x * -40}px, ${y * -40}px)`;
    }
  });

  heroSection.addEventListener('mouseleave', () => {
    tiltCard.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });
}

/* =========================================================================
   4. HERO TOKENS / DESIGN MODE SWITCHER
   ========================================================================= */
function initHeroTokensToggle() {
  const btnDesign = document.getElementById('hero-tab-design');
  const btnTokens = document.getElementById('hero-tab-tokens');
  const tokensDrawer = document.getElementById('hero-tokens-drawer');

  if (!btnDesign || !btnTokens || !tokensDrawer) return;

  btnDesign.addEventListener('click', () => {
    window.soundFx.playPop();
    btnDesign.classList.add('bg-amber-500/20', 'text-amber-300', 'font-bold');
    btnDesign.classList.remove('text-zinc-400');
    btnTokens.classList.remove('bg-amber-500/20', 'text-amber-300', 'font-bold');
    btnTokens.classList.add('text-zinc-400');
    tokensDrawer.classList.add('hidden');
  });

  btnTokens.addEventListener('click', () => {
    window.soundFx.playPop();
    btnTokens.classList.add('bg-amber-500/20', 'text-amber-300', 'font-bold');
    btnTokens.classList.remove('text-zinc-400');
    btnDesign.classList.remove('bg-amber-500/20', 'text-amber-300', 'font-bold');
    btnDesign.classList.add('text-zinc-400');
    tokensDrawer.classList.remove('hidden');
  });
}

/* =========================================================================
   5. PROJECTS SECTION & QUICK-VIEW MODAL
   ========================================================================= */
function initProjectsSection() {
  const grid = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  if (!grid) return;

  const projects = window.PORTFOLIO_DATA.projects;

  function renderProjects(category = 'All') {
    grid.innerHTML = '';
    const filtered = category === 'All' ? projects : projects.filter((p) => p.category === category);

    filtered.forEach((p) => {
      const card = document.createElement('div');
      card.className =
        'p-5 sm:p-6 rounded-3xl bg-[#10141E] border border-amber-500/20 hover:border-amber-400/60 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between group text-left';

      card.innerHTML = `
        <div>
          <div class="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-[#090C12] border border-white/5">
            <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
            <div class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-amber-500/30 text-[10px] font-mono text-amber-300 font-bold">
              ${p.badge}
            </div>
          </div>

          <h3 class="text-lg sm:text-xl font-extrabold text-white group-hover:text-amber-300 transition-colors mb-1.5">
            ${p.title}
          </h3>
          <p class="text-xs text-zinc-300 leading-relaxed mb-4">
            ${p.subtitle}
          </p>

          <div class="grid grid-cols-3 gap-2 py-3 border-y border-white/5 mb-4 text-center">
            ${p.metrics
              .map(
                (m) => `
              <div>
                <div class="text-xs font-bold text-amber-400 font-mono">${m.value}</div>
                <div class="text-[9px] text-zinc-400">${m.label}</div>
              </div>`
              )
              .join('')}
          </div>

          <div class="flex flex-wrap gap-1.5 mb-5">
            ${p.tags
              .map(
                (t) => `
              <span class="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-300">
                ${t}
              </span>`
              )
              .join('')}
          </div>
        </div>

        <button onclick="openProjectModal('${p.id}')" class="w-full py-2.5 rounded-xl bg-[#141A26] hover:bg-amber-500 border border-amber-500/30 hover:border-amber-400 text-amber-300 hover:text-stone-950 font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs">
          <span>Explore Case Study</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </button>
      `;

      grid.appendChild(card);
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      window.soundFx.playClick();
      filterBtns.forEach((b) => {
        b.classList.remove('bg-amber-500', 'text-stone-950', 'font-bold');
        b.classList.add('bg-[#121620]', 'text-zinc-300');
      });
      btn.classList.add('bg-amber-500', 'text-stone-950', 'font-bold');
      btn.classList.remove('bg-[#121620]', 'text-zinc-300');
      renderProjects(btn.dataset.category);
    });
  });

  renderProjects('All');
}

window.openProjectModal = function (id) {
  window.soundFx.playPop();
  const project = window.PORTFOLIO_DATA.projects.find((p) => p.id === id);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const content = document.getElementById('project-modal-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="flex items-center justify-between pb-4 border-b border-amber-500/20 mb-4">
      <div>
        <span class="text-xs font-mono font-bold text-amber-400 uppercase">${project.badge}</span>
        <h2 class="text-xl sm:text-2xl font-extrabold text-white">${project.title}</h2>
      </div>
      <button onclick="closeProjectModal()" class="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    </div>

    <div class="space-y-5 text-left text-sm text-zinc-300">
      <div class="rounded-2xl overflow-hidden aspect-[16/9] border border-white/10 bg-black/40">
        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover" />
      </div>

      <div>
        <h4 class="text-xs font-mono uppercase font-bold text-amber-300 mb-1">Executive Summary</h4>
        <p class="text-xs leading-relaxed text-zinc-300">${project.summary}</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="p-4 rounded-xl bg-[#141923] border border-amber-500/20 space-y-1">
          <div class="text-xs font-bold text-white flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-red-400"></span> Problem Statement
          </div>
          <p class="text-[11px] text-zinc-400 leading-relaxed">${project.problem}</p>
        </div>

        <div class="p-4 rounded-xl bg-[#141923] border border-emerald-500/20 space-y-1">
          <div class="text-xs font-bold text-white flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-400"></span> Solution & Outcome
          </div>
          <p class="text-[11px] text-zinc-400 leading-relaxed">${project.solution}</p>
        </div>
      </div>

      <div class="pt-2">
        <h4 class="text-xs font-mono uppercase font-bold text-amber-300 mb-2">Verified Metrics</h4>
        <div class="grid grid-cols-3 gap-3 text-center">
          ${project.metrics
            .map(
              (m) => `
            <div class="p-3 rounded-xl bg-[#090C12] border border-white/10">
              <div class="text-base font-bold text-amber-400 font-mono">${m.value}</div>
              <div class="text-[10px] text-zinc-400">${m.label}</div>
            </div>`
            )
            .join('')}
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
};

window.closeProjectModal = function () {
  window.soundFx.playClick();
  const modal = document.getElementById('project-modal');
  if (modal) modal.classList.add('hidden');
};

/* =========================================================================
   6. FITTS'S LAW SPEED GAME (Dedicated Engine)
   ========================================================================= */
function initFittsLawGame() {
  const target = document.getElementById('fitts-target');
  const slider = document.getElementById('fitts-size-slider');
  const sizeValue = document.getElementById('fitts-size-val');
  const badge = document.getElementById('fitts-compliance-badge');
  const lastSpeedEl = document.getElementById('fitts-last-speed');
  const avgSpeedEl = document.getElementById('fitts-avg-speed');
  const bestSpeedEl = document.getElementById('fitts-best-speed');
  const totalTapsEl = document.getElementById('fitts-total-taps');
  const ratingEl = document.getElementById('fitts-rating-pill');
  const resetBtn = document.getElementById('fitts-reset-btn');

  if (!target) return;

  let width = 64;
  let startTime = performance.now();
  let timesList = [];
  let bestTime = null;
  let totalTaps = 0;

  function updateCompliance(w) {
    if (!badge) return;
    if (w < 44) {
      badge.textContent = 'WCAG 2.5.5 Fail (< 44px)';
      badge.className = 'px-2.5 py-1 rounded-full border text-[10px] font-mono font-bold text-red-400 bg-red-950/40 border-red-500/40';
    } else if (w < 60) {
      badge.textContent = 'WCAG 2.1 AA Compliant (≥ 44px)';
      badge.className = 'px-2.5 py-1 rounded-full border text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/40 border-emerald-500/40';
    } else {
      badge.textContent = 'Optimal Thumb Zone Ergonomics (≥ 60px)';
      badge.className = 'px-2.5 py-1 rounded-full border text-[10px] font-mono font-bold text-amber-400 bg-amber-950/40 border-amber-500/40';
    }
  }

  function getRating(ms) {
    if (ms < 300) return 'Lightning Fast (Pro Reflexes)';
    if (ms < 450) return 'Rapid & Fluid';
    if (ms < 650) return 'Standard Acquisition Time';
    return 'Micro-Correction Delay (Target Too Small?)';
  }

  target.addEventListener('click', () => {
    window.soundFx.playDewDrop();
    const elapsed = Math.round(performance.now() - startTime);
    totalTaps++;

    if (bestTime === null || elapsed < bestTime) bestTime = elapsed;
    timesList.push(elapsed);
    if (timesList.length > 6) timesList.shift();
    const avg = Math.round(timesList.reduce((a, b) => a + b, 0) / timesList.length);

    if (lastSpeedEl) lastSpeedEl.textContent = `${elapsed}ms`;
    if (avgSpeedEl) avgSpeedEl.textContent = `${avg}ms`;
    if (bestSpeedEl) bestSpeedEl.textContent = `${bestTime}ms`;
    if (totalTapsEl) totalTapsEl.textContent = totalTaps;
    if (ratingEl) {
      ratingEl.textContent = getRating(elapsed);
      ratingEl.classList.remove('hidden');
    }

    // Reposition target randomly
    const randX = Math.floor(Math.random() * 70) + 15;
    const randY = Math.floor(Math.random() * 60) + 20;
    target.style.left = `${randX}%`;
    target.style.top = `${randY}%`;
    startTime = performance.now();
  });

  if (slider && sizeValue) {
    slider.addEventListener('input', (e) => {
      width = Number(e.target.value);
      sizeValue.textContent = `${width}px`;
      target.style.width = `${width}px`;
      target.style.height = `${width}px`;
      updateCompliance(width);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      window.soundFx.playClick();
      timesList = [];
      bestTime = null;
      totalTaps = 0;
      if (lastSpeedEl) lastSpeedEl.textContent = '--';
      if (avgSpeedEl) avgSpeedEl.textContent = '--';
      if (bestSpeedEl) bestSpeedEl.textContent = '--';
      if (totalTapsEl) totalTapsEl.textContent = '0';
      if (ratingEl) ratingEl.classList.add('hidden');
      target.style.left = '50%';
      target.style.top = '50%';
      startTime = performance.now();
    });
  }
}

/* =========================================================================
   7. RESUME MODAL (Interactive vs Original PDF with Zero Download Trigger on View)
   ========================================================================= */
function initResumeModal() {
  const modal = document.getElementById('resume-modal');
  const viewBtns = document.querySelectorAll('.trigger-view-resume');
  const closeBtn = document.getElementById('close-resume-modal');
  const tabInteractive = document.getElementById('resume-tab-interactive');
  const tabPdf = document.getElementById('resume-tab-pdf');
  const viewInteractive = document.getElementById('resume-view-interactive');
  const viewPdf = document.getElementById('resume-view-pdf');

  if (!modal) return;

  window.openResumeModal = function () {
    window.soundFx.playClick();
    modal.classList.remove('hidden');
  };

  window.closeResumeModal = function () {
    window.soundFx.playClick();
    modal.classList.add('hidden');
  };

  viewBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      window.openResumeModal();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', window.closeResumeModal);
  }

  if (tabInteractive && tabPdf && viewInteractive && viewPdf) {
    tabInteractive.addEventListener('click', () => {
      window.soundFx.playPop();
      tabInteractive.classList.add('bg-amber-500/20', 'text-amber-300', 'font-bold', 'border', 'border-amber-500/30');
      tabInteractive.classList.remove('text-zinc-400');
      tabPdf.classList.remove('bg-amber-500/20', 'text-amber-300', 'font-bold', 'border', 'border-amber-500/30');
      tabPdf.classList.add('text-zinc-400');
      viewInteractive.classList.remove('hidden');
      viewPdf.classList.add('hidden');
    });

    tabPdf.addEventListener('click', () => {
      window.soundFx.playPop();
      tabPdf.classList.add('bg-amber-500/20', 'text-amber-300', 'font-bold', 'border', 'border-amber-500/30');
      tabPdf.classList.remove('text-zinc-400');
      tabInteractive.classList.remove('bg-amber-500/20', 'text-amber-300', 'font-bold', 'border', 'border-amber-500/30');
      tabInteractive.classList.add('text-zinc-400');
      viewPdf.classList.remove('hidden');
      viewInteractive.classList.add('hidden');
    });
  }
}

/* =========================================================================
   8. CONTACT FORM & CLIPBOARD COPY
   ========================================================================= */
function initContactSection() {
  const form = document.getElementById('contact-form');
  const formSuccess = document.getElementById('contact-form-success');
  const copyBtn = document.getElementById('copy-email-btn');
  const copyToast = document.getElementById('copy-toast');

  if (form && formSuccess) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      window.soundFx.playChime();
      form.classList.add('hidden');
      formSuccess.classList.remove('hidden');
    });
  }

  if (copyBtn && copyToast) {
    copyBtn.addEventListener('click', () => {
      window.soundFx.playPop();
      navigator.clipboard.writeText('ananthakrishnanuiux@gmail.com');
      copyToast.classList.remove('hidden');
      setTimeout(() => copyToast.classList.add('hidden'), 2500);
    });
  }
}
