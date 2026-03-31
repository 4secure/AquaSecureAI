import { motion } from 'framer-motion'
import { fadeUp, viewport } from './ui/motion'

// Logos that a platform like AquaSecure integrates with / is used by
const LOGOS = [
  'Microsoft Azure','AWS','Google Cloud','Splunk','ServiceNow',
  'CrowdStrike','Palo Alto','IBM','Fortinet','Okta',
  'HashiCorp','Databricks','GitLab','Jira','Datadog',
]

export default function LogosStrip() {
  const doubled = [...LOGOS, ...LOGOS]
  return (
    <section className="border-y py-6 overflow-hidden"
      style={{ background:'#0b0c14', borderColor:'rgba(109,86,165,0.15)' }}>
      <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
        className="text-center text-[10px] font-bold tracking-[2px] uppercase mb-5"
        style={{ color:'rgba(184,165,255,0.35)' }}>
        Trusted by security teams worldwide · Integrates with your existing stack
      </motion.p>
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background:'linear-gradient(90deg,#0b0c14,transparent)' }}/>
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background:'linear-gradient(-90deg,#0b0c14,transparent)' }}/>
        <div className="flex animate-marquee gap-4 w-max">
          {doubled.map((name, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-lg flex-shrink-0"
              style={{ background:'rgba(22,22,42,0.6)', border:'1px solid rgba(109,86,165,0.15)' }}>
              <div className="w-4 h-4 rounded flex-shrink-0"
                style={{ background:'linear-gradient(135deg,#8A63FF,#6D56A5)', opacity:.8 }}/>
              <span className="text-[12px] font-semibold whitespace-nowrap"
                style={{ color:'rgba(184,165,255,0.45)' }}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
