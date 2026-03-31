import { motion } from 'framer-motion'
import { fadeUp, fadeIn, stagger, viewport } from './motion'
import GlowOrbs from './GlowOrbs'
import ParticleField from './ParticleField'

export default function PageHero({ badge, title, accent, sub, cta, onCta }) {
  return (
    <section className="relative overflow-hidden pt-[108px] pb-12"
      style={{ background: '#ffffff' }}>
      {/* <ParticleField count={40}/> */}
      {/* <GlowOrbs variant="hero"/> */}
      {/* <div className="absolute inset-0 bg-grid pointer-events-none opacity-70"/> */}
      <div className="wrap relative z-10 text-center">
        <motion.div variants={stagger(.12)} initial="hidden" whileInView="show" viewport={viewport}>
          {badge && (
            <motion.div variants={fadeIn} className="flex justify-center mb-5">
              <span className="badge" style={{ background: 'rgba(138,99,255,0.12)', color: '#8A63FF', border: '1px solid rgba(138,99,255,0.25)' }}>{badge}</span>
            </motion.div>
          )}
          <motion.h1 variants={fadeUp}
            className="font-black text-text leading-[1.06] tracking-tight mb-4"
            style={{ fontSize: 'clamp(34px,6vw,68px)', letterSpacing: '-0.03em', color: '#1A1A2E' }}>
            {title}{' '}
            {accent && <span className="tg" style={{ background: 'linear-gradient(135deg, #8A63FF 0%, #6D56A5 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{accent}</span>}
          </motion.h1>
          {sub && (
            <motion.p variants={fadeUp} className="text-lead text-sub leading-[1.8] max-w-[580px] mx-auto mb-8"
              style={{ color: 'rgba(26,26,46,0.65)' }}>
              {sub}
            </motion.p>
          )}
          {cta && (
            <motion.button variants={fadeUp} className="btn-primary text-[15px] px-9 py-4" onClick={onCta}
              style={{ background: 'linear-gradient(135deg, #8A63FF, #6D56A5)', color: 'white' }}
              whileHover={{ scale: 1.03, boxShadow: '0 6px 28px rgba(138,99,255,0.40)' }} whileTap={{ scale: 0.97 }}>
              {cta}
            </motion.button>
          )}
        </motion.div>
      </div>
    </section>
  )
}