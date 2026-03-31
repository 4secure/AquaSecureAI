// import { motion } from 'framer-motion'
// import { ShieldCheck, Activity, Globe, Database, Bug, Box, Wifi } from 'lucide-react'
// import { fadeUp, stagger, viewport } from './ui/motion'

// const COLOR   = '#8A63FF'
// const COLOR2  = '#6D56A5'

// export const PRODUCTS_DATA = [
//   { icon:Database,    slug:'siem',             name:'Aqua SIEM',          tagline:'Security Information', tags:['Log Management','Event Correlation'] },
//   { icon:Activity,    slug:'soc',              name:'SOC',                 tagline:'Security Operations Center',             tags:['Incident Response','Case Management'] },
//   { icon:Globe,       slug:'threat-intel',     name:'Threat Intelligence', tagline:'Global Cyber Threat Intel',              tags:['IP Reputation','Threat Classification',] },
//   { icon:Wifi,        slug:'dark-web',         name:'Dark Web',            tagline:'Dark Web Monitoring & Intelligence',     tags:['Brand Protection','Leak Alerts'] },
//   { icon:Bug,         slug:'phishbot',         name:'Phishbot',            tagline:'Phishing Campaign Management',           tags:['Employee Training','Click Tracking'] },
//   { icon:Box,         slug:'asset-management', name:'Asset Management',    tagline:'Unified Asset Inventory',               tags:['Asset Discovery','Ownership Tracking',] },
//   { icon:ShieldCheck, slug:'grc',              name:'GRC',                 tagline:'Governance, Risk & Compliance',          tags:['CTDISR','PCI-DSS','ISO 27001'] },
// ]

// function ProductCard({ p }) {
//   const Icon = p.icon
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="group relative rounded-2xl flex flex-col gap-3 cursor-default overflow-hidden"
//       style={{ padding:'20px', background:'#ffffff', border:'1.5px solid rgba(138,99,255,0.15)', boxShadow:'0 2px 12px rgba(138,99,255,0.06)' }}
//       whileHover={{ y:-4, boxShadow:'0 12px 36px rgba(138,99,255,0.18), 0 0 0 1.5px rgba(138,99,255,0.40)' }}
//       transition={{ type:'spring', stiffness:280, damping:20 }}>

//       {/* Gradient bg on hover */}
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
//         style={{ background:`linear-gradient(135deg, rgba(138,99,255,0.07) 0%, rgba(109,86,165,0.12) 100%)` }}/>

//       {/* Icon */}
//       <motion.div
//         className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 relative z-10"
//         style={{ background:'rgba(138,99,255,0.10)' }}
//         whileHover={{ scale:1.12, rotate:6 }}
//         transition={{ type:'spring', stiffness:320, damping:16 }}>
//         <Icon className="w-5 h-5" style={{ color:COLOR }} strokeWidth={1.8}/>
//       </motion.div>

//       {/* Name + tagline */}
//       <div className="relative z-10">
//         <h3 className="text-[15px] font-extrabold mb-0.5" style={{ color:'#1e1b4b' }}>{p.name}</h3>
//         <p className="text-[10px] font-bold uppercase tracking-wider leading-tight" style={{ color:COLOR }}>{p.tagline}</p>
//       </div>

//       {/* Tags */}
//       <div className="flex flex-wrap gap-1.5 relative z-10">
//         {p.tags.map(t => (
//           <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
//             style={{ background:'rgba(138,99,255,0.08)', color:COLOR, border:'1px solid rgba(138,99,255,0.20)' }}>
//             {t}
//           </span>
//         ))}
//       </div>
//     </motion.div>
//   )
// }

// function ProductCardSmall({ p }) {
//   const Icon = p.icon
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="group relative rounded-2xl flex flex-col gap-3 cursor-default overflow-hidden"
//       style={{ padding:'18px', background:'#ffffff', border:'1.5px solid rgba(138,99,255,0.15)', boxShadow:'0 2px 12px rgba(138,99,255,0.06)' }}
//       whileHover={{ y:-4, boxShadow:'0 12px 36px rgba(138,99,255,0.18), 0 0 0 1.5px rgba(138,99,255,0.40)' }}
//       transition={{ type:'spring', stiffness:280, damping:20 }}>

//       {/* Gradient bg on hover */}
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
//         style={{ background:`linear-gradient(135deg, rgba(138,99,255,0.07) 0%, rgba(109,86,165,0.12) 100%)` }}/>

//       {/* Icon + name row */}
//       <div className="flex items-center gap-3 relative z-10">
//         <motion.div
//           className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
//           style={{ background:'rgba(138,99,255,0.10)' }}
//           whileHover={{ scale:1.12, rotate:6 }}
//           transition={{ type:'spring', stiffness:320, damping:16 }}>
//           <Icon className="w-5 h-5" style={{ color:COLOR }} strokeWidth={1.8}/>
//         </motion.div>
//         <div>
//           <h3 className="text-[15px] font-extrabold" style={{ color:'#1e1b4b' }}>{p.name}</h3>
//           <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color:COLOR }}>{p.tagline}</p>
//         </div>
//       </div>

//       {/* Tags */}
//       <div className="flex flex-wrap gap-1.5 relative z-10">
//         {p.tags.map(t => (
//           <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
//             style={{ background:'rgba(138,99,255,0.08)', color:COLOR, border:'1px solid rgba(138,99,255,0.20)' }}>
//             {t}
//           </span>
//         ))}
//       </div>
//     </motion.div>
//   )
// }

// export default function Products() {
//   return (
//     <section id="products" className="section relative overflow-hidden" style={{ background:'#ffffff' }}>
//       <div className="absolute inset-0 pointer-events-none opacity-20"
//         style={{ backgroundImage:'radial-gradient(circle, rgba(124,58,237,0.20) 1px, transparent 1px)', backgroundSize:'28px 28px' }}/>
//       <div className="absolute inset-0 pointer-events-none"
//         style={{ background:'linear-gradient(180deg, transparent 60%, rgba(124,58,237,0.04) 100%)' }}/>

//       <div className="wrap relative z-10">
//         <motion.div variants={stagger(.1)} initial="hidden" whileInView="show" viewport={viewport} className="text-center mb-12">
//           <motion.p variants={fadeUp}
//             className="inline-block text-[11px] font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
//             style={{ background:'rgba(124,58,237,0.08)', color:'rgba(109,40,217,0.70)', border:'1px solid rgba(124,58,237,0.18)' }}>
//             Products
//           </motion.p>
//           <motion.h2 variants={fadeUp} className="font-extrabold tracking-tight leading-tight mb-4"
//             style={{ fontSize:'clamp(26px,3.8vw,44px)', color:'#1e1b4b' }}>
//             Secure your organisation with our{' '}
//             <span style={{ background:'linear-gradient(135deg,#4F46E5 0%,#7C3AED 50%,#6D28D9 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
//               complete product suite
//             </span>
//           </motion.h2>
//           <motion.p variants={fadeUp} className="text-lead max-w-[520px] mx-auto" style={{ color:'rgba(79,46,220,0.60)' }}>
//             Seven purpose-built modules — use them independently or as a unified AI-powered platform.
//           </motion.p>
//         </motion.div>

//         <motion.div variants={stagger(.06)} initial="hidden" whileInView="show" viewport={viewport}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
//           {PRODUCTS_DATA.slice(0,4).map(p => <ProductCard key={p.slug} p={p}/>)}
//         </motion.div>

//         <motion.div variants={stagger(.06)} initial="hidden" whileInView="show" viewport={viewport}
//           className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//           {PRODUCTS_DATA.slice(4).map(p => <ProductCardSmall key={p.slug} p={p}/>)}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ShieldCheck, Activity, Globe, Database, Bug, Box, Wifi } from 'lucide-react'
import { fadeUp, stagger, viewport } from './ui/motion'

const COLOR   = '#8A63FF'
const COLOR2  = '#6D56A5'

export const PRODUCTS_DATA = [
  { icon:Database,    slug:'siem',             name:'Aqua SIEM',          tagline:'Security Information & Event Management', tags:['Log Management','Event Correlation','Real-time Alerts','Compliance Reports'] },
  { icon:Activity,    slug:'soc',              name:'SOC',                 tagline:'Security Operations Center',             tags:['24/7 Monitoring','Incident Response','Case Management','Threat Hunting'] },
  { icon:Globe,       slug:'threat-intel',     name:'Threat Intelligence', tagline:'Global Cyber Threat Intel',              tags:['IP Reputation','IOC Feeds','Threat Classification','Risk Scoring'] },
  { icon:Wifi,        slug:'dark-web',         name:'Dark Web',            tagline:'Dark Web Monitoring & Intelligence',     tags:['Credential Monitoring','Breach Detection','Brand Protection','Leak Alerts'] },
  { icon:Bug,         slug:'phishbot',         name:'Phishbot',            tagline:'Phishing Campaign Management',           tags:['Phishing Simulations','Employee Training','Click Tracking','Campaign Builder'] },
  { icon:Box,         slug:'asset-management', name:'Asset Management',    tagline:'Unified Asset Inventory',               tags:['Asset Discovery','Ownership Tracking','Risk Scoring','CMDB Integration'] },
  { icon:ShieldCheck, slug:'grc',              name:'GRC',                 tagline:'Governance, Risk & Compliance',          tags:['CTDISR','PCI-DSS','ISO 27001'] },
]

function ProductCard({ p }) {
  const Icon = p.icon
  return (
    <Link to={`/products/${p.slug}`} className="block h-full">
    <motion.div
      variants={fadeUp}
      className="group relative rounded-2xl flex flex-col gap-3 cursor-pointer overflow-hidden h-full"
      style={{ padding:'20px', background:'#ffffff', border:'1.5px solid rgba(138,99,255,0.15)', boxShadow:'0 2px 12px rgba(138,99,255,0.06)' }}
      whileHover={{ y:-4, boxShadow:'0 12px 36px rgba(138,99,255,0.18), 0 0 0 1.5px rgba(138,99,255,0.40)' }}
      transition={{ type:'spring', stiffness:280, damping:20 }}>

      {/* Gradient bg on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background:`linear-gradient(135deg, rgba(138,99,255,0.07) 0%, rgba(109,86,165,0.12) 100%)` }}/>

      {/* Icon */}
      <motion.div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 relative z-10"
        style={{ background:'rgba(138,99,255,0.10)' }}
        whileHover={{ scale:1.12, rotate:6 }}
        transition={{ type:'spring', stiffness:320, damping:16 }}>
        <Icon className="w-5 h-5" style={{ color:COLOR }} strokeWidth={1.8}/>
      </motion.div>

      {/* Name + tagline */}
      <div className="relative z-10">
        <h3 className="text-[15px] font-extrabold mb-0.5" style={{ color:'#1e1b4b' }}>{p.name}</h3>
        <p className="text-[10px] font-bold uppercase tracking-wider leading-tight" style={{ color:COLOR }}>{p.tagline}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 relative z-10">
        {p.tags.map(t => (
          <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
            style={{ background:'rgba(138,99,255,0.08)', color:COLOR, border:'1px solid rgba(138,99,255,0.20)' }}>
            {t}
          </span>
        ))}
      </div>
    </motion.div>
    </Link>
  )
}

function ProductCardSmall({ p }) {
  const Icon = p.icon
  return (
    <Link to={`/products/${p.slug}`} className="block h-full">
    <motion.div
      variants={fadeUp}
      className="group relative rounded-2xl flex flex-col gap-3 cursor-pointer overflow-hidden h-full"
      style={{ padding:'18px', background:'#ffffff', border:'1.5px solid rgba(138,99,255,0.15)', boxShadow:'0 2px 12px rgba(138,99,255,0.06)' }}
      whileHover={{ y:-4, boxShadow:'0 12px 36px rgba(138,99,255,0.18), 0 0 0 1.5px rgba(138,99,255,0.40)' }}
      transition={{ type:'spring', stiffness:280, damping:20 }}>

      {/* Gradient bg on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background:`linear-gradient(135deg, rgba(138,99,255,0.07) 0%, rgba(109,86,165,0.12) 100%)` }}/>

      {/* Icon + name row */}
      <div className="flex items-center gap-3 relative z-10">
        <motion.div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background:'rgba(138,99,255,0.10)' }}
          whileHover={{ scale:1.12, rotate:6 }}
          transition={{ type:'spring', stiffness:320, damping:16 }}>
          <Icon className="w-5 h-5" style={{ color:COLOR }} strokeWidth={1.8}/>
        </motion.div>
        <div>
          <h3 className="text-[15px] font-extrabold" style={{ color:'#1e1b4b' }}>{p.name}</h3>
          <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color:COLOR }}>{p.tagline}</p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 relative z-10">
        {p.tags.map(t => (
          <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
            style={{ background:'rgba(138,99,255,0.08)', color:COLOR, border:'1px solid rgba(138,99,255,0.20)' }}>
            {t}
          </span>
        ))}
      </div>
    </motion.div>
    </Link>
  )
}

export default function Products() {
  return (
    <section id="products" className="section relative overflow-hidden" style={{ background:'#ffffff' }}>
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage:'radial-gradient(circle, rgba(124,58,237,0.20) 1px, transparent 1px)', backgroundSize:'28px 28px' }}/>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background:'linear-gradient(180deg, transparent 60%, rgba(124,58,237,0.04) 100%)' }}/>

      <div className="wrap relative z-10">
        <motion.div variants={stagger(.1)} initial="hidden" whileInView="show" viewport={viewport} className="text-center mb-12">
          <motion.p variants={fadeUp}
            className="inline-block text-[11px] font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{ background:'rgba(124,58,237,0.08)', color:'rgba(109,40,217,0.70)', border:'1px solid rgba(124,58,237,0.18)' }}>
            Products
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-extrabold tracking-tight leading-tight mb-4"
            style={{ fontSize:'clamp(26px,3.8vw,44px)', color:'#1e1b4b' }}>
            Secure your organisation with our{' '}
            <span style={{ background:'linear-gradient(135deg,#4F46E5 0%,#7C3AED 50%,#6D28D9 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              complete product suite
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lead max-w-[520px] mx-auto" style={{ color:'rgba(79,46,220,0.60)' }}>
            Seven purpose-built modules — use them independently or as a unified AI-powered platform.
          </motion.p>
        </motion.div>

        <motion.div variants={stagger(.06)} initial="hidden" whileInView="show" viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {PRODUCTS_DATA.slice(0,4).map(p => <ProductCard key={p.slug} p={p}/>)}
        </motion.div>

        <motion.div variants={stagger(.06)} initial="hidden" whileInView="show" viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PRODUCTS_DATA.slice(4).map(p => <ProductCardSmall key={p.slug} p={p}/>)}
        </motion.div>
      </div>
    </section>
  )
}
