/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B1630',
        muted: '#64748D',
        line: '#E3E3E3',
        brand: {
          DEFAULT: '#4FC2BB',
          deep: '#2A4A92',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Geist', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Figma type ramp
        hero: ['clamp(36px,5vw,64px)', { lineHeight: '1.12', letterSpacing: '-0.02em' }],
        h2: ['clamp(30px,4vw,52px)', { lineHeight: '1.115', letterSpacing: '-0.02em' }],
        h3: ['24px', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        lead: ['clamp(16px,1.4vw,20px)', { lineHeight: '1.37' }],
        body: ['18px', { lineHeight: '1.37' }],
        small: ['16px', { lineHeight: '1.37' }],
        eyebrow: ['12px', { lineHeight: '1.37' }],
      },
      maxWidth: {
        wrap: '1200px',
      },
      boxShadow: {
        nav: '0 4px 12px rgba(192,192,192,0.20)',
        card: '0 0 20px rgba(79,194,187,0.20)',
        'card-open': '0 0 20px rgba(79,194,187,0.50)',
      },
    },
  },
  plugins: [],
}
