/* enhance.js — vanilla JS run after React mounts.
   Handles: scroll-reveal observer, stat counter animation, sticky FAB.
*/
(function () {
  // Defer until DOM has the rendered components
  const start = () => {
    /* ---------- Scroll reveal ---------- */
    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealEls.length) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach((el) => io.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add('is-visible'));
    }

    /* ---------- Service-group "is-visible" hook (for group label dot) ---------- */
    document.querySelectorAll('.nx-service-group').forEach((g) => {
      if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
          });
        }, { threshold: 0.25 });
        io.observe(g);
      } else { g.classList.add('is-visible'); }
    });

    /* ---------- Counter animation ---------- */
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    document.querySelectorAll('[data-count]').forEach((el) => {
      const target = parseInt(el.dataset.count, 10);
      if (Number.isNaN(target)) return;
      el.textContent = '0';
      const run = () => {
        const dur = 1200;
        const t0 = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - t0) / dur);
          const v = Math.round(target * easeOutCubic(t));
          el.textContent = v.toLocaleString();
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      };
      if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((e) => { if (e.isIntersecting) { run(); io.unobserve(e.target); } });
        }, { threshold: 0.5 });
        io.observe(el);
      } else { run(); }
    });

    /* ---------- Sticky LINE FAB after hero ---------- */
    const fab = document.querySelector('.nx-fab');
    const hero = document.querySelector('.nx-hero');
    if (fab && hero) {
      const onScroll = () => {
        const passed = hero.getBoundingClientRect().bottom < 80;
        fab.classList.toggle('is-visible', passed);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    /* ---------- Parallax-ish seal drift on scroll ---------- */
    const seal = document.querySelector('.nx-hero__seal');
    if (seal && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      let raf = null;
      const onScroll = () => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          const y = window.scrollY;
          const max = window.innerHeight;
          const t = Math.min(1, y / max);
          seal.style.setProperty('--scroll-shift', `${t * 80}px`);
          // Drift via translateY + the keyframe still runs on top
          seal.style.transformOrigin = 'center';
          raf = null;
        });
      };
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    /* ---------- GA4: custom event tracking ----------
       Sends events to gtag if available. Safe no-op if GA isn't loaded.
    */
    const track = (name, params = {}) => {
      if (typeof window.gtag === 'function') {
        window.gtag('event', name, params);
      }
    };

    // LINE buttons (anywhere on page — header CTA, hero, contact card, FAB)
    document.querySelectorAll('a[href*="lin.ee"], .nx-btn--line, .nx-fab').forEach((el) => {
      el.addEventListener('click', () => {
        track('cta_click', {
          cta_type: 'line',
          cta_location: el.closest('.nx-hero') ? 'hero'
            : el.closest('.nx-header') ? 'header'
            : el.closest('.nx-contact') ? 'contact'
            : el.classList.contains('nx-fab') ? 'fab'
            : 'other',
        });
      });
    });

    // Phone tap
    document.querySelectorAll('a[href^="tel:"]').forEach((el) => {
      el.addEventListener('click', () => {
        track('cta_click', { cta_type: 'phone', cta_location: 'contact' });
      });
    });

    // Service card "詳しく見る" link
    document.querySelectorAll('.nx-service-card__link').forEach((el) => {
      el.addEventListener('click', () => {
        const title = el.closest('.nx-service-card')?.querySelector('.nx-service-card__title')?.textContent?.trim() || 'unknown';
        track('service_click', { service_name: title });
      });
    });

    // Simulator CTA
    document.querySelectorAll('.nx-btn--sim, .nx-sim__all-link').forEach((el) => {
      el.addEventListener('click', () => {
        track('cta_click', { cta_type: 'simulator', cta_location: 'sim_card' });
      });
    });

    // Simulator row (a specific service price clicked)
    document.querySelectorAll('.nx-sim__row').forEach((el) => {
      el.addEventListener('click', () => {
        const name = el.querySelector('.nx-sim__row-name')?.textContent?.trim() || 'unknown';
        track('simulator_row_click', { service_name: name });
      });
    });

    // Hero "サービスを見る →"
    document.querySelectorAll('.nx-hero__buttons a').forEach((el) => {
      el.addEventListener('click', () => {
        track('hero_cta_click', { label: el.textContent.trim().slice(0, 40) });
      });
    });

    /* ---------- Scroll depth milestones ---------- */
    const milestones = [25, 50, 75, 100];
    const seen = new Set();
    const onDepth = () => {
      const doc = document.documentElement;
      const scrolled = window.scrollY + window.innerHeight;
      const total = doc.scrollHeight;
      const pct = Math.round((scrolled / total) * 100);
      milestones.forEach((m) => {
        if (pct >= m && !seen.has(m)) {
          seen.add(m);
          track('scroll_depth', { percent: m });
        }
      });
    };
    window.addEventListener('scroll', onDepth, { passive: true });

    /* ---------- Section view tracking ---------- */
    if ('IntersectionObserver' in window) {
      const sectionIO = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const label = e.target.getAttribute('data-screen-label') || e.target.className;
            track('section_view', { section: label });
            sectionIO.unobserve(e.target);
          }
        });
      }, { threshold: 0.4 });
      document.querySelectorAll('[data-screen-label]').forEach((s) => sectionIO.observe(s));
    }
  };

  // Wait for React (Babel-standalone) to finish mounting — poll until reveals exist.
  const tryStart = (attempts = 0) => {
    const has = document.querySelectorAll('.reveal').length > 0;
    if (has) { start(); return; }
    if (attempts > 50) { start(); return; }   // give up after ~5s
    setTimeout(() => tryStart(attempts + 1), 100);
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => tryStart());
  } else {
    tryStart();
  }
})();
