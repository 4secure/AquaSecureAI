import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp, viewport } from './ui/motion'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section className="relative py-16 overflow-hidden" style={{ background:'#1a0e3a' }}>
      {/* Subtle centre radial bloom */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background:'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(138,99,255,0.16) 0%, transparent 70%)'
      }}/>

      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
        className="relative z-10 wrap text-center max-w-[680px] mx-auto">
        <p className="text-[15px] leading-[1.85] mb-5" style={{ color:'rgba(220,200,255,0.80)' }}>
          Cybersecurity is crucial in today's digital world —{' '}
          <span style={{ color:'#ffffff', fontWeight:600 }}>Aqua Secure AI</span>{' '}
          ensures your assets remain protected from evolving global threats with
          AI-powered SOC operations, GRC compliance automation, and real-time threat intelligence.
        </p>
        <Link to="/products">
          <motion.span className="inline-flex items-center gap-1.5 text-[14px] font-semibold cursor-pointer"
            style={{ color:'#c4a9ff' }} whileHover={{ x:4 }}>
            Explore all products <ArrowRight className="w-3.5 h-3.5"/>
          </motion.span>
        </Link>
      </motion.div>
    </section>
  )
}
