// One-shot: compile the Claude Design dc.html into a self-contained Astro home.
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const src = fs.readFileSync(path.join(__dirname, 'AquaSecure-Home.html'), 'utf8');

// --- 1. style block (from <helmet>) ---
let style = src.match(/<style>([\s\S]*?)<\/style>/)[1];
style = style.replace("assets/raleway-variable-latin.woff2", "/fonts/raleway/raleway-variable-latin.woff2");

// --- 2. body (between </helmet> and </x-dc>) ---
let body = src.slice(src.indexOf('</helmet>') + '</helmet>'.length, src.indexOf('</x-dc>')).trim();

// asset paths
body = body
  .replace(/assets\/aquasecure_logo1\.png/g, '/images/aquasecure_logo1.png')
  .replace(/assets\/aquasecure_logo3\.png/g, '/images/Aquasecure_logo3.png');

// nav + footer links -> real routes
const linkMap = [
  ['<a href="#top" class="nl on">Home</a>', '<a href="/" class="nl on">Home</a>'],
  ['<a href="#products" class="nl">Products ', '<a href="/products" class="nl">Products '],
  ['<a href="#platform" class="nl">Solutions ', '<a href="/solutions" class="nl">Solutions '],
  ['<a href="#platform" class="nl">Platform</a>', '<a href="/platform" class="nl">Platform</a>'],
  ['<a href="#products" class="nl">Pricing</a>', '<a href="/pricing" class="nl">Pricing</a>'],
  ['<a href="#cta" class="nl">Contact</a>', '<a href="/contact" class="nl">Contact</a>'],
  // product dropdown
  ['<a href="#products" class="dlink">GRC</a>', '<a href="/products/grc" class="dlink">GRC</a>'],
  ['<a href="#products" class="dlink">SOC</a>', '<a href="/products/soc" class="dlink">SOC</a>'],
  ['<a href="#products" class="dlink">Aqua SIEM</a>', '<a href="/products/siem" class="dlink">Aqua SIEM</a>'],
  ['<a href="#products" class="dlink">Threat Intelligence</a>', '<a href="/products/threat-intel" class="dlink">Threat Intelligence</a>'],
  ['<a href="#products" class="dlink">Asset Management</a>', '<a href="/products/asset-management" class="dlink">Asset Management</a>'],
  ['<a href="#products" class="dlink">Dark Web</a>', '<a href="/products/dark-web" class="dlink">Dark Web</a>'],
  ['<a href="#products" class="dlink">Phishbot</a>', '<a href="/products/phishbot" class="dlink">Phishbot</a>'],
  // solution dropdown
  ['<a href="#platform" class="dlink">Manage SIEM</a>', '<a href="/solutions/manage-siem" class="dlink">Manage SIEM</a>'],
  ['<a href="#platform" class="dlink">Attack Surface</a>', '<a href="/solutions/attack-surface" class="dlink">Attack Surface</a>'],
  ['<a href="#platform" class="dlink">DMARC</a>', '<a href="/solutions/dmarc" class="dlink">DMARC</a>'],
  ['<a href="#platform" class="dlink">Phishing Campaigns</a>', '<a href="/solutions/phishing-campaigns" class="dlink">Phishing Campaigns</a>'],
  ['<a href="#platform" class="dlink">E-learning</a>', '<a href="/solutions/e-learning" class="dlink">E-learning</a>'],
  ['<a href="#platform" class="dlink">Compliance Management</a>', '<a href="/solutions/compliance-management" class="dlink">Compliance Management</a>'],
];
for (const [a, b] of linkMap) body = body.split(a).join(b);

// footer "Company" column routes
body = body
  .replace('<a href="#top" style="font-size:14px;color:var(--text-2)" style-hover="color:var(--accent)">Platform</a>', '<a href="/platform" style="font-size:14px;color:var(--text-2)" style-hover="color:var(--accent)">Platform</a>')
  .replace('<a href="#products" style="font-size:14px;color:var(--text-2)" style-hover="color:var(--accent)">Pricing</a>', '<a href="/pricing" style="font-size:14px;color:var(--text-2)" style-hover="color:var(--accent)">Pricing</a>')
  .replace('<a href="#cta" style="font-size:14px;color:var(--text-2)" style-hover="color:var(--accent)">Contact</a>', '<a href="/contact" style="font-size:14px;color:var(--text-2)" style-hover="color:var(--accent)">Contact</a>');

// --- 3. JS (data-dc-script inner) ---
const js = src.slice(src.indexOf('data-dc-script'));
const jsInner = js.slice(js.indexOf('>') + 1, js.indexOf('</script>')).trim();

// --- 4. assemble index.astro ---
const out = `---
// Home — compiled from the Claude Design "AquaSecure Home.dc.html".
// Self-contained page (own chrome/theme). Regenerate with: node design/build-home.js
---
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>AquaSecure.ai — AI-Powered Cloud Native Cybersecurity</title>
    <meta name="description" content="AquaSecure stops cyber attacks before they happen — AI threat detection, SOC operations, GRC automation and real-time threat intelligence, from code to cloud to prompt." />
    <link rel="canonical" href="https://aquasecure.ai/" />
    <link rel="icon" type="image/png" href="/images/Aquasecureicon1.png" />
    <meta property="og:title" content="AquaSecure.ai — AI-Powered Cybersecurity" />
    <meta property="og:description" content="The pioneer in AI-native cloud security. Stop threats in under 50ms." />
    <meta property="og:url" content="https://aquasecure.ai/" />
    <meta property="og:image" content="https://aquasecure.ai/images/dashboard-hero.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="theme-color" content="#0C8F84" />

    <!-- Google Tag Manager -->
    <script is:inline>
      (function (w, d, s, l, i) { w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' }); var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f); })(window, document, 'script', 'dataLayer', 'GTM-NKD6J56W');
    </script>

    <!-- No-flash theme -->
    <script is:inline>(function(){try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark');}catch(e){}})();</script>

    <!-- Map libs -->
    <script is:inline src="https://unpkg.com/d3@7.9.0/dist/d3.min.js"></script>
    <script is:inline src="https://unpkg.com/topojson-client@3.1.0/dist/topojson-client.min.js"></script>

    <style is:inline>${style}</style>
  </head>
  <body>
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NKD6J56W" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
${body}
    <script is:inline>
      // DCLogic shim — provides props (respecting reduced-motion) so the design class runs vanilla.
      class DCLogic {
        constructor() {
          var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          this.props = { motionLevel: reduce ? 'off' : 'full', feedSpeed: 2600, showAnnouncement: true };
        }
      }
${jsInner}
      // style-hover shim (replaces the design-runtime feature)
      (function () {
        function bind() {
          document.querySelectorAll('[style-hover]').forEach(function (el) {
            if (el.__shb) return; el.__shb = 1;
            var base = el.getAttribute('style') || '';
            var hov = el.getAttribute('style-hover');
            el.addEventListener('mouseenter', function () { el.setAttribute('style', base + ';' + hov); });
            el.addEventListener('mouseleave', function () { el.setAttribute('style', base); });
          });
        }
        function boot() { try { new Component().componentDidMount(); } catch (e) { console.error(e); } bind(); }
        if (document.readyState !== 'loading') boot();
        else document.addEventListener('DOMContentLoaded', boot);
      })();
    </script>
  </body>
</html>
`;

fs.writeFileSync(path.join(ROOT, 'src/pages/index.astro'), out);
console.log('wrote src/pages/index.astro —', out.length, 'bytes');
