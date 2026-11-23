/* CV motion: Lenis inertia scrolling + GSAP ScrollTrigger + SplitText, slow cinematic easing */
(() => {
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const show = () => document.querySelectorAll('.rv').forEach(e => { e.style.opacity = 1; e.style.transform = 'none'; });
  if (RM || !window.gsap || !window.ScrollTrigger) { show(); return; }
  gsap.registerPlugin(ScrollTrigger, ...(window.SplitText ? [SplitText] : []));
  const FINE = matchMedia('(pointer:fine)').matches;

  let lenis = null;
  if (window.Lenis) {
    lenis = new Lenis({ duration: 1.35, easing: t => 1 - Math.pow(1 - t, 4), smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    document.addEventListener('click', e => { const a = e.target.closest('a[href^="#"]'); if (!a) return; const el = document.querySelector(a.getAttribute('href')); if (el) { e.preventDefault(); lenis.scrollTo(el, { offset: -80, duration: 1.8 }); } });
  }

  let ctx = null, splits = [];
  function build() {
    if (ctx) ctx.revert();
    splits.forEach(s => s.revert && s.revert()); splits = [];
    ctx = gsap.context(() => {
      const ar = document.documentElement.dir === 'rtl';
      /* intro: name rises out of a mask, slowly */
      const nm = document.getElementById('nm');
      if (nm) {
        const lines = nm.querySelectorAll('span');
        if (window.SplitText && !ar) {
          lines.forEach(l => { const s = new SplitText(l, { type: 'chars', mask: 'chars' }); splits.push(s);
            gsap.from(s.chars, { yPercent: 110, rotate: 6, duration: 1.6, ease: 'expo.out', stagger: 0.045, delay: l.classList.contains('l2') ? 0.25 : 0.05 }); });
        } else {
          gsap.from(lines, { yPercent: 60, opacity: 0, filter: 'blur(12px)', duration: 1.8, ease: 'expo.out', stagger: 0.2 });
        }
      }
      gsap.to('.hero .rv', { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out', stagger: 0.12, delay: 0.5 });
      gsap.from('#p3d', { opacity: 0, scale: 0.92, y: 60, duration: 2.2, ease: 'expo.out', delay: 0.15 });
      gsap.from('.p-slit', { scaleY: 0, transformOrigin: '50% 0%', duration: 2.4, ease: 'expo.inOut', delay: 0.3 });
      gsap.from('.p-badge', { opacity: 0, y: 30, scale: 0.9, duration: 1.4, ease: 'back.out(1.6)', stagger: 0.18, delay: 1.1 });

      /* portrait parallax on scroll + float */
      gsap.to('#p3d', { yPercent: 12, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.2 } });
      gsap.to('.p-badge', { y: i => [-14, 12, -10][i] || 0, duration: 3.6, ease: 'sine.inOut', yoyo: true, repeat: -1, stagger: 0.6 });

      /* reveal everything else in slow motion as it enters */
      gsap.utils.toArray('.rv').filter(e => !e.closest('.hero')).forEach(el => {
        gsap.to(el, { opacity: 1, y: 0, duration: 1.6, ease: 'power4.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } });
      });

      /* profile lead: words light up as you read */
      const lead = document.getElementById('lead');
      if (lead && window.SplitText) {
        const s = new SplitText(lead, { type: 'words' }); splits.push(s);
        gsap.fromTo(s.words, { opacity: 0.16 }, { opacity: 1, stagger: 0.04, ease: 'none', scrollTrigger: { trigger: lead, start: 'top 82%', end: 'bottom 45%', scrub: 1 } });
      }

      /* timeline line draws with scroll */
      const tl = document.getElementById('tl');
      if (tl) gsap.to('#tll', { scaleY: 1, ease: 'none', scrollTrigger: { trigger: tl, start: 'top 70%', end: 'bottom 70%', scrub: 1 } });

      /* stats count up */
      document.querySelectorAll('.stat b[data-n]').forEach(b => {
        const n = +b.dataset.n, sfx = b.dataset.s || '', o = { v: 0 };
        gsap.to(o, { v: n, duration: 2.2, ease: 'power3.out', scrollTrigger: { trigger: b, start: 'top 92%', once: true },
          onUpdate: () => { b.innerHTML = Math.round(o.v) + '<em>' + sfx + '</em>'; } });
      });

      /* marquee reacts to scroll velocity */
      const mq = document.querySelector('.marq-in');
      if (mq) ScrollTrigger.create({ trigger: '.marq', start: 'top bottom', end: 'bottom top', onUpdate: s => { mq.style.animationDuration = Math.max(14, 50 - Math.abs(s.getVelocity()) / 60) + 's'; } });

      /* work photo parallax */
      gsap.fromTo('#wph', { yPercent: -10 }, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: '.work-ph', start: 'top bottom', end: 'bottom top', scrub: 1 } });

      /* final headline: slow scale-in */
      gsap.from('.final h2', { scale: 0.86, letterSpacing: '0.08em', duration: 2, ease: 'expo.out', scrollTrigger: { trigger: '.final', start: 'top 75%', once: true } });
    });
    ScrollTrigger.refresh();
  }

  /* 3D tilt for the portrait and the cards (fine pointers) */
  function tilt() {
    if (!FINE) return;
    const p = document.getElementById('p3d'), por = document.getElementById('por');
    if (p && por && !tilt.on) { tilt.on = true;
      const rx = gsap.quickTo(p, 'rotationX', { duration: 1.2, ease: 'power3' }), ry = gsap.quickTo(p, 'rotationY', { duration: 1.2, ease: 'power3' });
      addEventListener('pointermove', e => { const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5; ry(x * 14); rx(-y * 10); }, { passive: true });
    }
    document.querySelectorAll('.card').forEach(c => {
      c.addEventListener('pointermove', e => { const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        c.style.setProperty('--mx', x * 100 + '%'); c.style.setProperty('--my', y * 100 + '%');
        gsap.to(c, { rotationY: (x - 0.5) * 8, rotationX: -(y - 0.5) * 8, transformPerspective: 900, duration: 0.8, ease: 'power3' }); });
      c.addEventListener('pointerleave', () => gsap.to(c, { rotationX: 0, rotationY: 0, duration: 1.2, ease: 'elastic.out(1,.5)' }));
    });
  }

  const start = () => { build(); tilt(); };
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(start); else start();
  addEventListener('cv:render', () => { if (ctx) { document.querySelectorAll('.rv').forEach(e => { e.style.opacity = 0; e.style.transform = 'translateY(46px)'; }); requestAnimationFrame(start); } });
})();
