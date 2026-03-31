import { motion } from 'framer-motion'
import { useCounter } from '../hooks'
import { fadeUp, stagger, viewport } from './ui/motion'

// StatsStrip: gradient light-purple-black theme, flows from About above
const STATS = [
  { raw:'7',   suffix:'+', label:'Security Products',     sub:'SIEM · SOC · GRC · TIP · More',    color:'#c4a9ff' },
  { raw:'3', suffix:'+', label:'Compliance Frameworks', sub:'CTDISR · ETGRM · ISO 27001', color:'#a78bff' },
  { raw:'1',   suffix:'',  label:'Free TIP Search/Day',   sub:'tip.aquasecure.ai · No card needed', color:'#8A63FF' },
]

function Counter({ stat }) {
  const { val, ref } = useCounter(stat.raw, 1800)
  return (
    <div ref={ref}
      className="group relative flex flex-col items-center justify-center text-center py-10 px-5 cursor-default transition-all duration-300"
      style={{ minHeight:130 }}>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background:`radial-gradient(ellipse 80% 80% at 50% 50%, ${stat.color}18 0%, transparent 70%)` }}/>
      <p className="font-black leading-none tracking-tight mb-2 tabular-nums relative z-10"
        style={{ fontSize:'clamp(38px,4vw,52px)', color:stat.color }}>
        {val}<span style={{ fontSize:26, fontWeight:900, color:stat.color }}>{stat.suffix}</span>
      </p>
      <p className="text-[14px] font-bold mb-1 relative z-10" style={{ color:'#e8d8ff' }}>{stat.label}</p>
      <p className="text-[11px] relative z-10" style={{ color:'rgba(184,165,255,0.50)' }}>{stat.sub}</p>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
        style={{ background:stat.color, width:'40%' }}/>
    </div>
  )
}

export default function StatsStrip() {
  return (
    <section className="relative overflow-hidden" style={{
      background:'#130a2a',
      borderTop:'1px solid rgba(138,99,255,0.20)',
      borderBottom:'1px solid rgba(138,99,255,0.20)',
    }}>
      {/* Top shimmer line */}
      {/* <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden pointer-events-none">
        <motion.div className="h-full w-[200%]"
          style={{ background:'linear-gradient(90deg,transparent 0%,#8A63FF 25%,#B8A5FF 50%,#8A63FF 75%,transparent 100%)' }}
          animate={{ x:['-50%','0%'] }}
          transition={{ duration:3.5, repeat:Infinity, ease:'linear' }}/>
      </div> */}
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background:'radial-gradient(ellipse 80% 100% at 50% 50%, rgba(109,86,165,0.12) 0%, transparent 70%)' }}/>

      <div className="wrap relative z-10">
        <motion.div variants={stagger(.1)} initial="hidden" whileInView="show" viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-3">
          {STATS.map((s,i) => (
            <motion.div key={s.label} variants={fadeUp} className="relative"
              style={{ borderRight: i < STATS.length-1 ? '1px solid rgba(138,99,255,0.15)' : 'none' }}>
              {i < 2 && <div className="absolute bottom-0 left-4 right-4 h-px md:hidden" style={{ background:'rgba(138,99,255,0.15)' }}/>}
              <Counter stat={s}/>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
