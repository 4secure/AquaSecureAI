import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Shield, Zap, Search, Activity } from "lucide-react"
import { fadeUp, stagger, viewport } from "./ui/motion"

export default function Integrations({ onDemo }) {
  return (
    <section id="integrations" className="relative overflow-hidden py-20"
      style={{ background: "#f0eaff" }}>

      {/* Background tints */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 -left-48 w-96 h-96 rounded-full"
          style={{ background:'rgba(124,58,237,0.06)', filter:'blur(100px)' }}/>
        <div className="absolute bottom-0 -right-48 w-96 h-96 rounded-full"
          style={{ background:'rgba(167,139,250,0.06)', filter:'blur(100px)' }}/>
      </div>

      <div className="wrap relative z-10">
        {/* ── AQUA TIP highlight ── */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
          className="relative rounded-2xl overflow-hidden"
          style={{
            background:'linear-gradient(135deg,rgba(124,58,237,0.06),rgba(109,40,217,0.03))',
            border:'1px solid rgba(124,58,237,0.18)',
          }}>

          {/* Top shimmer */}
          <div className="absolute inset-x-0 top-0 h-[1px] overflow-hidden pointer-events-none">
            <motion.div className="h-full w-[200%]"
              style={{ background:'linear-gradient(90deg,transparent 0%,#7C3AED 25%,#A78BFA 50%,#7C3AED 75%,transparent 100%)' }}
              animate={{ x:['-50%','0%'] }}
              transition={{ duration:3, repeat:Infinity, ease:'linear' }}/>
          </div>

          <div className="relative z-10 px-8 py-10 md:px-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">

              {/* Left: copy */}
              <div className="flex-1">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-5"
                  style={{ background:'rgba(124,58,237,0.08)', border:'1px solid rgba(124,58,237,0.22)' }}>
                  <Zap className="w-3.5 h-3.5" style={{ color:'#7C3AED' }}/>
                  <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color:'#6D28D9' }}>
                    Real-Time Threat Intelligence
                  </span>
                </div>

                <p className="text-[11px] font-bold uppercase tracking-widest mb-1"
                  style={{ color:'rgba(109,40,217,0.40)' }}>
                  Standalone Product
                </p>

                <h3 className="font-extrabold tracking-tight leading-tight mb-3"
                  style={{ fontSize:'clamp(22px,2.8vw,34px)', color:'#1e1b4b' }}>
                  Know Your Threats<br/>
                  <span style={{
                    background:'linear-gradient(135deg,#4F46E5 0%,#7C3AED 50%,#6D28D9 100%)',
                    WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
                  }}>
                    Before They Strike
                  </span>
                </h3>

                <p className="text-[14px] leading-[1.75] mb-5 max-w-[480px]"
                  style={{ color:'rgba(79,46,220,0.60)' }}>
                  Real-time IP reputation intelligence powered by global threat feeds.
                  Identify malicious actors before they compromise your infrastructure.
                </p>

                <p className="text-[13px] mb-6" style={{ color:'rgba(109,40,217,0.50)' }}>
                  Start with{' '}
                  <span style={{ color:'#7C3AED', fontWeight:700 }}>1 free search per day</span>
                  . No credit card required.
                </p>

                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href="https://tip.aquasecure.ai"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[14px] text-white"
                    style={{ background:'linear-gradient(135deg,#7C3AED,#6D28D9)', boxShadow:'0 4px 18px rgba(124,58,237,0.28)' }}
                    whileHover={{ scale:1.04, boxShadow:'0 6px 28px rgba(124,58,237,0.40)' }}
                    whileTap={{ scale:0.97 }}>
                    AQUA TIP <ArrowRight className="w-4 h-4"/>
                  </motion.a>
                  <motion.a
                    href="https://tip.aquasecure.ai"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[14px]"
                    style={{
                      background:'rgba(124,58,237,0.06)',
                      border:'1px solid rgba(124,58,237,0.22)',
                      color:'#6D28D9',
                    }}
                    whileHover={{ background:'rgba(124,58,237,0.14)', borderColor:'rgba(124,58,237,0.42)', scale:1.04 }}
                    whileTap={{ scale:0.97 }}>
                    View Pricing <ExternalLink className="w-4 h-4"/>
                  </motion.a>
                </div>
              </div>

              {/* Right: 3 feature cards */}
              <div className="flex flex-col gap-3 w-full lg:w-[300px] flex-shrink-0">
                {[
                  {
                    icon: Search, color:'#7C3AED', bg:'rgba(124,58,237,0.08)',
                    title:'Real-Time IP Lookup',
                    desc:'Query any IP address against global threat intelligence feeds for instant reputation scoring.',
                  },
                  {
                    icon: Shield, color:'#0284C7', bg:'rgba(2,132,199,0.08)',
                    title:'Threat Classification',
                    desc:'Categorize threats by type — malware, botnet, scanner, brute-force — with confidence levels.',
                  },
                  {
                    icon: Activity, color:'#059669', bg:'rgba(5,150,105,0.08)',
                    title:'Risk Scoring',
                    desc:'Get a unified risk score aggregated from multiple intelligence sources and enrichment data.',
                  },
                ].map((f, i) => {
                  const Icon = f.icon
                  return (
                    <motion.div key={f.title}
                      initial={{ opacity:0, x:16 }} whileInView={{ opacity:1, x:0 }}
                      viewport={viewport} transition={{ delay:0.1 + i * 0.08 }}
                      className="flex items-start gap-3 rounded-xl p-4 border transition-all duration-200"
                      style={{
                        background:'#ffffff',
                        borderColor:'rgba(124,58,237,0.14)',
                        boxShadow:'0 2px 12px rgba(124,58,237,0.06)',
                      }}
                      whileHover={{ borderColor:`${f.color}40`, boxShadow:`0 4px 20px ${f.color}18` }}>
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background:f.bg }}>
                        <Icon className="w-4 h-4" style={{ color:f.color }} strokeWidth={1.8}/>
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold mb-0.5" style={{ color:'#1e1b4b' }}>
                          {f.title}
                        </p>
                        <p className="text-[11px] leading-snug" style={{ color:'rgba(79,46,220,0.55)' }}>
                          {f.desc}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Decorative glows */}
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
            style={{ background:'rgba(124,58,237,0.08)', filter:'blur(50px)' }}/>
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full pointer-events-none"
            style={{ background:'rgba(167,139,250,0.06)', filter:'blur(50px)' }}/>
        </motion.div>

      </div>
    </section>
  )
}
