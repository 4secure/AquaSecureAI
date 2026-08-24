// Framer-Motion-style entrance animation, driven entirely by markup attributes:
//
//   data-reveal              animate this element when it scrolls into view
//   data-reveal-group="70"   animate this element's children, staggered by N ms
//   data-reveal-now          animate immediately on load (above-the-fold content)
//   data-reveal-x="-24"      slide in horizontally instead of vertically
//   data-reveal-delay="260"  extra delay in ms
//
// `animate` comes from motion/mini — the WAAPI-backed build. Motion's own `inView` and
// `stagger` would pull in the full hybrid engine (22 KB gzipped vs ~5), and both are a few
// lines against IntersectionObserver, so they are done here instead.
//
// Nothing is hidden by CSS alone: `motion-ready` is set by an inline snippet in <head> and
// cleared here, so a failed or disabled script can never leave the page blank.
import { animate } from 'motion/mini';

const RISE = 24;
const EASE = [0.16, 1, 0.3, 1]; // matches the ease used elsewhere in the site
const DURATION = 700; // ms

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const from = (dx) => (dx ? `translateX(${dx}px)` : `translateY(${RISE}px)`);

/** Resting state. Also the no-animation state, and what we commit to after animating. */
function settle(el) {
  el.style.opacity = '1';
  el.style.transform = 'none';
  el.style.willChange = '';
}

function prime(el, dx) {
  el.style.opacity = '0';
  el.style.transform = from(dx);
  el.style.willChange = 'opacity, transform';
}

function play(el, delay, dx) {
  try {
    animate(
      el,
      { opacity: [0, 1], transform: [from(dx), 'none'] },
      { duration: DURATION / 1000, delay: delay / 1000, ease: EASE },
    );
  } catch {
    // If the animation cannot run for any reason, show the content rather than leaving it
    // primed at opacity 0.
    settle(el);
    return;
  }
  // Commit the end state explicitly rather than relying on fill semantics, so nothing can
  // snap back to the primed style once the animation is done.
  setTimeout(() => settle(el), DURATION + delay + 60);
}

/** Fire `cb` once, when `el` first enters the viewport. */
function onEnter(el, cb) {
  if (!('IntersectionObserver' in window)) return cb();
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        io.disconnect();
        cb();
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
  );
  io.observe(el);
}

const solo = Array.from(document.querySelectorAll('[data-reveal]'));
const groups = Array.from(document.querySelectorAll('[data-reveal-group]'));

if (reduced) {
  // Honour the OS setting: no motion, everything simply present.
  solo.forEach(settle);
  groups.forEach((g) => Array.from(g.children).forEach(settle));
} else {
  for (const el of solo) {
    const dx = Number(el.dataset.revealX || 0);
    const delay = Number(el.dataset.revealDelay || 0);
    prime(el, dx);
    if (el.hasAttribute('data-reveal-now')) play(el, delay, dx);
    else onEnter(el, () => play(el, delay, dx));
  }

  for (const group of groups) {
    const items = Array.from(group.children);
    const step = Number(group.dataset.revealGroup) || 70;
    const base = Number(group.dataset.revealDelay || 0);
    items.forEach((el) => prime(el, 0));

    const start = () => items.forEach((el, i) => play(el, base + i * step, 0));
    if (group.hasAttribute('data-reveal-now')) start();
    else onEnter(group, start);
  }
}

document.documentElement.classList.remove('motion-ready');

/* ---------------------------------------------------------------------------
   Accordions. Native <details> snaps open and shut; this animates the height
   and the chevron instead. The element stays a real <details>, so keyboard
   focus, Enter/Space and find-in-page all keep working.
   --------------------------------------------------------------------------- */

const ACC_MS = 420;
const ACC_EASE = [0.32, 0.72, 0, 1]; // slightly firmer than the reveal ease

function spin(acc, deg) {
  const chev = acc.querySelector('.acc-chev');
  if (!chev) return;
  if (reduced) {
    chev.style.transform = `rotate(${deg}deg)`;
    return;
  }
  const now = deg === 180 ? 0 : 180;
  try {
    animate(chev, { transform: [`rotate(${now}deg)`, `rotate(${deg}deg)`] }, { duration: ACC_MS / 1000, ease: ACC_EASE });
  } catch {}
  setTimeout(() => (chev.style.transform = `rotate(${deg}deg)`), ACC_MS + 40);
}

/** Height the panel will actually occupy, measured with the clipping context already in
 *  place so margins are contained. Rounded up so a sub-pixel remainder cannot clip a line. */
function measure(body) {
  const prevHeight = body.style.height;
  body.style.overflow = 'hidden';
  body.style.height = 'auto';
  const h = Math.ceil(body.getBoundingClientRect().height);
  body.style.height = prevHeight;
  return h;
}

function openAcc(acc) {
  const body = acc.querySelector('.acc-body');
  acc.open = true;
  spin(acc, 180);
  if (!body || reduced) return;

  const target = measure(body);
  try {
    animate(body, { height: ['0px', `${target}px`], opacity: [0, 1] }, { duration: ACC_MS / 1000, ease: ACC_EASE });
  } catch {
    body.style.overflow = '';
    return;
  }
  // Release the fixed height so the panel can reflow (resize, font swap, wrapping).
  setTimeout(() => {
    body.style.height = '';
    body.style.opacity = '';
    body.style.overflow = '';
  }, ACC_MS + 40);
}

function closeAcc(acc) {
  const body = acc.querySelector('.acc-body');
  spin(acc, 0);
  if (!body || reduced) {
    acc.open = false;
    return;
  }

  const start = measure(body);
  try {
    animate(body, { height: [`${start}px`, '0px'], opacity: [1, 0] }, { duration: ACC_MS / 1000, ease: ACC_EASE });
  } catch {
    acc.open = false;
    body.style.overflow = '';
    return;
  }
  // Only collapse the <details> once the height animation has finished, otherwise the
  // content would vanish on the first frame.
  setTimeout(() => {
    acc.open = false;
    body.style.height = '';
    body.style.opacity = '';
    body.style.overflow = '';
  }, ACC_MS);
}

for (const acc of document.querySelectorAll('details.acc')) {
  const summary = acc.querySelector('summary');
  if (!summary) continue;

  // Set the initial chevron angle for any panel that starts open.
  if (acc.open) spin(acc, 180);

  summary.addEventListener('click', (e) => {
    e.preventDefault();

    if (acc.open) {
      closeAcc(acc);
      return;
    }

    // Exclusive groups: the browser slams a sibling shut the instant a second
    // <details name="..."> opens, which would cut its close animation off at frame one.
    // Detach the grouping for the length of the transition, then restore it so the
    // exclusive behaviour still holds if scripting later fails.
    const group = acc.getAttribute('name');
    if (group) {
      const peers = Array.from(document.querySelectorAll(`details.acc[name="${group}"]`));
      peers.forEach((d) => d.removeAttribute('name'));
      peers.forEach((d) => {
        if (d !== acc && d.open) closeAcc(d);
      });
      setTimeout(() => peers.forEach((d) => d.setAttribute('name', group)), ACC_MS + 60);
    }
    openAcc(acc);
  });
}
