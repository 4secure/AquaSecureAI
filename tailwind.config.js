/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Token-driven so utility classes follow the light/dark theme.
        bg:       'var(--bg)',
        surface:  'var(--surface)',
        raised:   'var(--surface-2)',
        overlay:  'var(--surface-2)',
        ink:      'var(--bg)',
        border:   'var(--border)',
        primary: {
          DEFAULT: 'var(--accent)',
          light:   'var(--accent-light)',
          dim:     'var(--accent-hover)',
          soft:    'rgba(var(--accent-rgb) / 0.12)',
          glow:    'rgba(var(--accent-rgb) / 0.28)',
        },
        text: {
          DEFAULT: 'var(--text)',
          sub:     'var(--text-2)',
          muted:   'var(--text-3)',
          faint:   'var(--text-3)',
        },
        // Status
        danger:  'var(--danger)',
        warn:    'var(--warn)',
        success: 'var(--success)',
        info:    'var(--info)',
      },
      fontFamily: {
        sans: ['Raleway', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        hero: ['clamp(38px,5.8vw,72px)', { lineHeight:'1.06', letterSpacing:'-0.03em' }],
        h1:   ['clamp(30px,4.2vw,54px)', { lineHeight:'1.1',  letterSpacing:'-0.025em' }],
        h2:   ['clamp(24px,3.2vw,42px)', { lineHeight:'1.15', letterSpacing:'-0.02em' }],
        h3:   ['clamp(18px,2.2vw,26px)', { lineHeight:'1.25', letterSpacing:'-0.015em' }],
        lead: ['clamp(15px,1.5vw,18px)', { lineHeight:'1.78' }],
      },
      borderRadius: { sm:'6px', md:'10px', lg:'14px', xl:'20px', pill:'999px' },
      boxShadow: {
        card:       'var(--shadow-card)',
        'card-up':  'var(--shadow-card-up)',
        glow:       'var(--shadow-glow)',
        'glow-sm':  '0 0 18px rgba(var(--accent-rgb) / 0.30)',
        btn:        'var(--shadow-btn)',
        'btn-h':    'var(--shadow-btn-h)',
      },
      backgroundImage: {
        'grad-primary':  'var(--grad-accent)',
        'grad-bright':   'var(--grad-accent-bright)',
        'grad-text':     'var(--grad-text)',
        'grad-hero':     'radial-gradient(ellipse 90% 70% at 55% -5%,rgba(var(--accent-rgb) / 0.14) 0%,rgba(var(--accent-rgb) / 0.05) 55%,transparent 75%)',
        'grad-cta':      'linear-gradient(135deg,var(--surface) 0%,var(--surface-2) 50%,var(--surface) 100%)',
        'grid-line':     'linear-gradient(rgba(var(--accent-rgb) / 0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(var(--accent-rgb) / 0.06) 1px,transparent 1px)',
        'grid-dot':      'radial-gradient(circle, rgba(var(--accent-rgb) / 0.18) 1px, transparent 1px)',
      },
      backgroundSize: { 'grid-md':'60px 60px', 'dot-md':'32px 32px' },
      animation: {
        'float':      'float 5s ease-in-out infinite',
        'marquee':    'marquee 32s linear infinite',
        'blink':      'blink 1.1s step-end infinite',
        'pulse-dot':  'pulseDot 1.6s ease-in-out infinite',
        'fade-up':    'fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      keyframes: {
        float:    { '0%,100%':{ transform:'translateY(0)' },'50%':{ transform:'translateY(-14px)' } },
        marquee:  { '0%':{ transform:'translateX(0)' },'100%':{ transform:'translateX(-50%)' } },
        blink:    { '0%,100%':{ opacity:1 },'50%':{ opacity:0 } },
        pulseDot: { '0%,100%':{ opacity:1,transform:'scale(1)' },'50%':{ opacity:.5,transform:'scale(.85)' } },
        fadeUp:   { '0%':{ opacity:0,transform:'translateY(24px)' },'100%':{ opacity:1,transform:'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
