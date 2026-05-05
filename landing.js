/* ═════════════════════════════════════════════════════
   FROM IT TO INFLUENCE — LANDING JS
═════════════════════════════════════════════════════ */

(function () {
  // ── Defaults from editmode block ──
  const FALLBACK = {
    variant: 'editorial',
    motion: 'rich',
    stickyCta: true,
    toolkitPreview: true,
    ytEmphasis: 'primary',
    warmth: 'cool',
    lightSection: false
  };
  let state = { ...FALLBACK, ...(window.TWEAK_DEFAULTS || {}) };

  // ── Apply state to DOM ──
  function applyState() {
    document.body.dataset.variant = state.variant;
    document.body.dataset.motion = state.motion;
    document.body.dataset.sticky = String(state.stickyCta);
    document.body.dataset.preview = String(state.toolkitPreview);
    document.body.dataset.yt = state.ytEmphasis;
    document.body.dataset.warmth = state.warmth || 'cool';
    document.body.dataset.lightsection = String(state.lightSection);

    document.querySelectorAll('[data-tweak]').forEach(btn => {
      const k = btn.dataset.tweak;
      const v = btn.dataset.value;
      const cur = String(state[k]);
      btn.classList.toggle('active', cur === v);
    });
  }

  // ── Toolkit mock (split hero) ──
  function renderSplitMock() {
    const el = document.getElementById('toolkit-mock-split');
    if (!el || el.dataset.built) return;
    el.dataset.built = 'true';
    el.innerHTML = `
      <div class="toolkit-stack">
        <div class="toolkit-page toolkit-page-1">
          <div class="tkp-badge">03 · Diagnostic</div>
          <div class="tkp-title">Are you being written out of the story?</div>
          <div class="tkp-body">
            <div class="tkp-line"></div>
            <div class="tkp-line short"></div>
            <div class="tkp-line"></div>
            <div class="tkp-line tiny gold"></div>
          </div>
        </div>
        <div class="toolkit-page toolkit-page-2">
          <div class="tkp-badge">02 · Stakeholder Map</div>
          <div class="tkp-title">Who actually holds the power?</div>
          <div class="tkp-body">
            <div class="tkp-line gold"></div>
            <div class="tkp-line"></div>
            <div class="tkp-line short"></div>
            <div class="tkp-line"></div>
            <div class="tkp-line tiny"></div>
          </div>
        </div>
        <div class="toolkit-page toolkit-page-3">
          <div class="tkp-badge">01 · Exec Update</div>
          <div class="tkp-title">The 5-line executive briefing template</div>
          <div class="tkp-body">
            <div class="tkp-line"></div>
            <div class="tkp-line short"></div>
            <div class="tkp-line"></div>
            <div class="tkp-line gold short"></div>
            <div class="tkp-line tiny"></div>
          </div>
        </div>
      </div>
    `;
  }

  // ── Motion (GSAP) ──
  let gsapReady = false;
  function initMotion() {
    if (!window.gsap) return;
    if (gsapReady) return;
    gsapReady = true;
    gsap.registerPlugin(ScrollTrigger);

    // Hero entrance is handled by CSS animations for reliability.

    // Cinematic word stagger override (runs after the hero-s fade finishes its first tick)
    if (state.variant === 'cinematic' && state.motion !== 'minimal') {
      gsap.from('.v-cinematic .cine-word', {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.1,
        delay: 0.5
      });
    }

    // Reveal on scroll
    ScrollTrigger.batch('.reveal', {
      onEnter: batch => {
        gsap.to(batch, {
          opacity: 1, y: 0, duration: 0.75,
          ease: 'power3.out', stagger: 0.08
        });
      },
      start: 'top 88%', once: true
    });

    // Rich motion: parallax on hero + orbs
    if (state.motion === 'rich') {
      gsap.to('.orb-1', {
        y: 120, scrollTrigger: { trigger: 'body', start: 'top top', end: '+=800', scrub: true }
      });
      gsap.to('.orb-2', {
        y: -80, scrollTrigger: { trigger: 'body', start: 'top top', end: '+=1200', scrub: true }
      });
      gsap.to('.orb-3', {
        y: 60, scrollTrigger: { trigger: 'body', start: 'top top', end: '+=1800', scrub: true }
      });

      // Big quote scroll zoom
      gsap.fromTo('.bq-text', { scale: 0.92 }, {
        scale: 1,
        scrollTrigger: { trigger: '.big-quote', start: 'top bottom', end: 'bottom top', scrub: 0.5 }
      });

      // Toolkit mocks parallax tilt
      gsap.utils.toArray('.tk-mock').forEach((m, i) => {
        gsap.fromTo(m, { y: 40, rotate: i === 0 ? -2 : i === 2 ? 2 : 0 }, {
          y: -20,
          rotate: 0,
          scrollTrigger: { trigger: m, start: 'top bottom', end: 'bottom top', scrub: 1 }
        });
      });
    }

    // Sticky CTA shows after hero scrolls past
    const sticky = document.getElementById('sticky-cta');
    if (sticky) {
      ScrollTrigger.create({
        trigger: '.problem',
        start: 'top 80%',
        end: '#toolkit',
        onToggle: self => {
          if (self.isActive) sticky.classList.add('visible');
          else sticky.classList.remove('visible');
        },
        onUpdate: self => {
          if (self.progress > 0 && self.progress < 1) sticky.classList.add('visible');
          else sticky.classList.remove('visible');
        }
      });
    }
  }

  // Kill motion and re-init (used on variant switch)
  function resetMotion() {
    if (window.ScrollTrigger) {
      ScrollTrigger.getAll().forEach(t => t.kill());
    }
    gsapReady = false;
    // reset reveal/hero-s states so they animate in again
    document.querySelectorAll('.reveal, .hero-s').forEach(el => {
      el.style.opacity = '';
      el.style.transform = '';
    });
    setTimeout(initMotion, 50);
  }

  // ── Edit-mode protocol ──
  function postEdits(partial) {
    try {
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: partial }, '*');
    } catch (e) {}
  }

  function handleTweak(k, v) {
    // Coerce types
    let val = v;
    if (v === 'true') val = true;
    else if (v === 'false') val = false;
    state[k] = val;
    applyState();
    if (k === 'toolkitPreview' && val) {
      renderSplitMock();
    }
    if (k === 'variant') {
      renderSplitMock();
      resetMotion();
    }
    postEdits({ [k]: val });
  }

  // ── Init ──
  document.addEventListener('DOMContentLoaded', () => {
    applyState();
    renderSplitMock();

    // Wire tweak buttons
    document.querySelectorAll('[data-tweak]').forEach(btn => {
      btn.addEventListener('click', () => {
        handleTweak(btn.dataset.tweak, btn.dataset.value);
      });
    });

    // Tweaks panel close
    const panel = document.getElementById('tweaks-panel');
    const closeBtn = document.getElementById('tweaks-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        panel.classList.remove('visible');
      });
    }

    // Edit mode protocol — register listener FIRST
    window.addEventListener('message', e => {
      if (!e.data || !e.data.type) return;
      if (e.data.type === '__activate_edit_mode') {
        panel.classList.add('visible');
      } else if (e.data.type === '__deactivate_edit_mode') {
        panel.classList.remove('visible');
      }
    });
    // Then announce availability
    try {
      window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    } catch (e) {}

    // Defer GSAP init to let fonts load
    if (window.gsap) {
      initMotion();
    } else {
      const iv = setInterval(() => {
        if (window.gsap) { clearInterval(iv); initMotion(); }
      }, 100);
    }
  });
})();
