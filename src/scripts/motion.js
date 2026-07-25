// Shared GSAP setup + global motion behaviours for the site.
// Imported once by Base.astro (runs global init) and by component <script>s that
// need gsap/plugins (Vite dedupes into one shared chunk).
//
// Hard rule: motion only — never touches theme tokens/colours.

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, DrawSVGPlugin, SplitText);

export { gsap, ScrollTrigger, MotionPathPlugin, DrawSVGPlugin, SplitText };

export const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const isMobile = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(max-width: 767px)').matches;

// Run fn now (if DOM ready) and again after every Astro view-transition swap.
export function onReady(fn) {
  const run = () => fn();
  if (document.readyState !== 'loading') run();
  else document.addEventListener('DOMContentLoaded', run, { once: true });
  document.addEventListener('astro:page-load', run);
}

// Decorative parallax on [data-parallax] (value = yPercent drift, default 10).
function initParallax() {
  if (prefersReduced() || isMobile()) return;
  gsap.utils.toArray('[data-parallax]').forEach((el) => {
    if (el.dataset.parallaxBound) return;
    el.dataset.parallaxBound = '1';
    const amt = parseFloat(el.dataset.parallax) || 10;
    gsap.to(el, {
      yPercent: amt,
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });
}

// Kill triggers before a view-transition swap to avoid leaks/duplicates.
document.addEventListener('astro:before-swap', () => {
  ScrollTrigger.getAll().forEach((t) => t.kill());
});

onReady(() => {
  initParallax();
  // Recalculate positions once fonts/images have settled.
  requestAnimationFrame(() => ScrollTrigger.refresh());
});
