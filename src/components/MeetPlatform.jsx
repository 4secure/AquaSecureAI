import React from 'react'
import { motion } from 'framer-motion'
import { Menu, RefreshCw, ChevronUp, ChevronDown, Cpu, TrendingUp, Clock } from 'lucide-react'

// MeetPlatform: light purple themed background — white cards on lavender
const DOT = { purple:'#7C3AED', blue:'#0EA5E9', green:'#10B981', amber:'#F59E0B', red:'#EF4444', dim:'#6D28D9' }
const mkDots = (n,color,xFn) => Array(n).fill(0).map((_,i)=>({x:xFn(i),size:7+Math.random()*4,color,delay:Math.random()*2,duration:3+Math.random()}))
const aiDots = mkDots(18,DOT.purple,i=>2+(i*5.3)%96)
const threatDots = mkDots(20,DOT.amber,i=>2+(i*4.8)%96)
const unifiedDots = Array(35).fill(0).map((_,i)=>({x:5+(i*2.5)%90,size:7+Math.random()*4,color:[DOT.purple,DOT.red,DOT.dim,DOT.green][i%4],delay:Math.random()*2,duration:3+Math.random()}))
const managedDots = (() => {
  const d=[],p=[DOT.purple,DOT.dim,DOT.green,DOT.blue,DOT.amber,DOT.red]
  for(let b=0;b<13;b++){const bx=2+b*8,dl=Math.random()*2,dr=3+Math.random();[{x:bx-.5,y:30},{x:bx+1,y:30},{x:bx-1,y:40},{x:bx+.5,y:40}].forEach((pos,idx)=>d.push({x:pos.x,y:pos.y,size:7+Math.random()*4,color:p[(b*4+idx)%6],delay:dl,duration:dr}))}
  return d
})()

const Badge = ({children}) => <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold whitespace-nowrap select-none cursor-default transition-all duration-150"
  style={{background:'rgba(124,58,237,0.10)',color:'#5b21b6',border:'1px solid rgba(124,58,237,0.22)'}}
  onMouseEnter={e=>e.currentTarget.style.background='rgba(124,58,237,0.18)'}
  onMouseLeave={e=>e.currentTarget.style.background='rgba(124,58,237,0.10)'}>{children}</span>

const Card = ({children}) => <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.35,ease:[.16,1,.3,1]}}
  className="rounded-xl border transition-all duration-300"
  style={{background:'#ffffff',borderColor:'rgba(124,58,237,0.14)',boxShadow:'0 2px 16px rgba(124,58,237,0.07)'}}
  onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(124,58,237,0.35)';e.currentTarget.style.boxShadow='0 4px 24px rgba(124,58,237,0.14)'}}
  onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(124,58,237,0.14)';e.currentTarget.style.boxShadow='0 2px 16px rgba(124,58,237,0.07)'}}>{children}</motion.div>

const Grid = () => <div className="absolute inset-0 pointer-events-none">
  {[...Array(8)].map((_,i)=><div key={`c${i}`} className="absolute top-0 h-full w-px" style={{left:`${i*12.5}%`,background:'rgba(124,58,237,0.06)'}}/>)}
  {[...Array(6)].map((_,i)=><div key={`r${i}`} className="absolute left-0 w-full h-px" style={{top:`${i*16.6}%`,background:'rgba(124,58,237,0.06)'}}/>)}
</div>

const AnimBox = ({dots}) => <div className="relative h-24 mt-3 overflow-hidden rounded-xl border"
  style={{background:'rgba(245,240,255,0.85)',borderColor:'rgba(124,58,237,0.12)'}}>
  <Grid/>
  {dots.map((dot,i)=><div key={i} className="absolute rounded-full bounce-dot" style={{left:`${dot.x}%`,top:dot.y?`${dot.y}%`:'5px',width:`${dot.size}px`,height:`${dot.size}px`,transform:'translate(-50%,-50%)',background:dot.color,boxShadow:`0 0 6px ${dot.color}60`,'--duration':`${dot.duration}s`,'--delay':`${dot.delay}s`,filter:'blur(0.3px)'}}/>)}
</div>

const Label = ({icon:Icon,label}) => <div className="flex items-center gap-2 mb-2">
  <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{background:'rgba(124,58,237,0.10)'}}><Icon size={14} style={{color:'#7C3AED'}}/></div>
  <span className="text-[13px] font-semibold" style={{color:'#1e1b4b'}}>{label}</span>
</div>

export default function MeetPlatform({ onDemo }) {
  return (
    <section id="platform" className="relative overflow-hidden py-16 pb-20" style={{ background:'#f0eaff' }}>
      {/* Subtle radial tint */}
      <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(124,58,237,0.08) 0%, transparent 70%)'}}/>

      <style>{`@keyframes bounceUpDown{0%,100%{transform:translateY(0);opacity:1}50%{transform:translateY(52px);opacity:0.35}}.bounce-dot{animation:bounceUpDown var(--duration,3s) cubic-bezier(0.42,0,0.58,1) infinite;animation-delay:var(--delay,0s);will-change:transform}`}</style>

      <div className="wrap relative z-10">
        <motion.div initial={{opacity:0,y:-12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.4}} className="text-center mb-10">
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full" style={{background:'rgba(124,58,237,0.10)',color:'rgba(109,40,217,0.70)',border:'1px solid rgba(124,58,237,0.20)'}}>Platform</span>
          <h2 className="font-extrabold tracking-tight leading-tight mb-3" style={{fontSize:'clamp(24px,3.5vw,42px)',color:'#1e1b4b'}}>
            Modern SOC Operations{' '}
            <span style={{background:'linear-gradient(135deg,#4F46E5,#7C3AED)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Empowering Human</span>
          </h2>
          <p className="text-[15px] max-w-[500px] mx-auto" style={{color:'rgba(79,46,220,0.65)'}}>Threat Intelligence, Managed Services — unified in one platform.</p>
        </motion.div>

        <div className="max-w-[680px] mx-auto space-y-3">
          <Card><div className="flex items-center justify-between px-4 py-3"><Label icon={Menu} label="SOC Analyst"/><Badge>Investigation and Case Management</Badge></div></Card>
          <Card>
            <div className="px-4 pt-4 pb-3">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-1">
                <Label icon={RefreshCw} label="Managed Services"/>
                <div className="flex flex-wrap items-center gap-1.5">
                  <div className="flex gap-0.5 mr-1"><ChevronUp size={13} style={{color:'rgba(109,40,217,0.4)'}}/><ChevronDown size={13} style={{color:'rgba(109,40,217,0.4)'}}/></div>
                  {['Incident Creation','Workflow','Detection and Response'].map(t=><Badge key={t}>{t}</Badge>)}
                </div>
              </div>
              <AnimBox dots={managedDots}/>
            </div>
          </Card>
          <Card>
            <div className="px-4 pt-4 pb-3">
              {/* <div className="flex items-center justify-center gap-2 mb-4">
                {['PREVENT','DETECT','RESPOND'].map((s,i)=>(
                  <React.Fragment key={s}>
                    <motion.span className="text-[11px] font-black tracking-widest cursor-default" style={{color:['#7C3AED','#0EA5E9','#10B981'][i]}} animate={{opacity:[.55,1,.55]}} transition={{duration:2,repeat:Infinity,delay:i*.5}}>{s}</motion.span>
                    {i<2&&<span style={{color:'rgba(109,40,217,0.28)',fontSize:11}}>→</span>}
                  </React.Fragment>
                ))}
              </div> */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div><div className="mb-2"><Badge>Data Enrichment Prioritization</Badge></div><AnimBox dots={aiDots}/></div>
                <div><Label icon={TrendingUp} label="Threat Intel"/><div className="flex flex-wrap gap-1.5 mb-2"><Badge>Real Time Threat Intel</Badge><Badge>Advance Correlation</Badge></div><AnimBox dots={threatDots}/></div>
              </div>
            </div>
          </Card>
          <Card><div className="px-4 pt-4 pb-3"><Label icon={Clock} label="Unified Incoming Data"/><AnimBox dots={unifiedDots}/></div></Card>
          <Card>
            <div className="px-4 py-4">
              <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
                <div className="text-center"><p className="text-[10px] font-bold uppercase tracking-widest mb-2.5" style={{color:'rgba(109,40,217,0.48)'}}>Security Data Model</p><div className="flex gap-2"><Badge>TABULAR</Badge><Badge>VECTOR</Badge></div></div>
                <div className="hidden md:flex items-center w-24 overflow-hidden h-px relative"><div className="absolute inset-0" style={{background:'rgba(124,58,237,0.18)'}}/><motion.div className="absolute h-full w-1/2 rounded-full" style={{background:'linear-gradient(90deg,transparent,#7C3AED,transparent)'}} animate={{x:['-100%','200%']}} transition={{duration:2,repeat:Infinity,ease:'linear'}}/></div>
                <div className="text-center"><p className="text-[10px] font-bold uppercase tracking-widest mb-2.5" style={{color:'rgba(109,40,217,0.48)'}}>Data Lake</p><div className="flex gap-2"><Badge>RAW</Badge><Badge>NORMALIZE</Badge></div></div>
              </div>
              <p className="text-center text-[11px] mt-3" style={{color:'rgba(109,40,217,0.42)'}}>Incoming raw data from different sources</p>
            </div>
          </Card>
        </div>
      </div>
      {/* Smooth fade to dark for HowItWorks below */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height:'280px', background:'linear-gradient(to bottom, transparent 0%, rgba(14,11,30,0.3) 40%, rgba(14,11,30,0.7) 65%, #0e0b1e 100%)' }}/>
    </section>
  )
}
