/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ── Exact colors scraped from aquasecure.ai ────────────
        bg:       '#0A0B14',   // real body bg
        surface:  '#16162A',   // real card bg
        raised:   '#111122',   // sections
        overlay:  '#1b1439',   // dropdowns
        ink:      '#0b0c14',   // deepest bg
        border:   'rgba(109,86,165,0.2)',
        primary: {
          DEFAULT: '#8A63FF',   // real primary purple
          light:   '#B8A5FF',   // real lighter purple
          dim:     '#6D56A5',   // real muted purple
          soft:    'rgba(138,99,255,0.12)',
          glow:    'rgba(138,99,255,0.28)',
        },
        text: {
          DEFAULT: '#E7E0FF',   // real heading text
          sub:     'rgba(200,186,255,0.65)',
          muted:   'rgba(184,165,255,0.45)',
          faint:   'rgba(184,165,255,0.25)',
        },
        // Status
        danger:  '#FF5C5C',
        warn:    '#FFB020',
        success: '#29E07A',
        info:    '#35BBFF',
      },
      fontFamily: {
        sans: ['Inter','system-ui','sans-serif'],
        mono: ['JetBrains Mono','monospace'],
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
        card:       '0 1px 0 rgba(255,255,255,0.03), 0 4px 20px rgba(0,0,0,0.5)',
        'card-up':  '0 0 0 1px rgba(138,99,255,0.45), 0 8px 40px rgba(109,86,165,0.2)',
        glow:       '0 0 40px rgba(138,99,255,0.45)',
        'glow-sm':  '0 0 18px rgba(138,99,255,0.30)',
        btn:        '0 4px 18px rgba(138,99,255,0.50)',
        'btn-h':    '0 6px 28px rgba(138,99,255,0.70)',
      },
      backgroundImage: {
        'grad-primary':  'linear-gradient(135deg,#8A63FF,#6D56A5)',
        'grad-bright':   'linear-gradient(135deg,#B8A5FF,#8A63FF)',
        'grad-text':     'linear-gradient(135deg,#E7E0FF 0%,#B8A5FF 40%,#8A63FF 100%)',
        'grad-hero':     'radial-gradient(ellipse 90% 70% at 55% -5%,rgba(109,86,165,0.22) 0%,rgba(70,40,160,0.07) 55%,transparent 75%)',
        'grad-cta':      'linear-gradient(135deg,#111122 0%,#1b1439 50%,#111122 100%)',
        'grid-line':     'linear-gradient(rgba(109,86,165,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(109,86,165,0.06) 1px,transparent 1px)',
        'grid-dot':      'radial-gradient(circle, rgba(109,86,165,0.18) 1px, transparent 1px)',
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
