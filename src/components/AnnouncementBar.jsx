import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X, ArrowRight } from 'lucide-react'

export default function AnnouncementBar({ onDismiss }) {
  const [show, setShow] = useState(true)
  const dismiss = () => { setShow(false); onDismiss?.() }
  return (
    <AnimatePresence>
      {show && (
<motion.div
  initial={{ height:0, opacity:0 }}
  animate={{ height:'auto', opacity:1 }}
  exit={{ height:0, opacity:0 }}
  transition={{ duration:.28, ease:'easeInOut' }}
  className="hidden sm:block relative z-[60] overflow-hidden border-b"
  style={{
    background:'linear-gradient(90deg,#1b1439,#221546,#332267,#221546,#1b1439)',
    backgroundSize:'200% 100%',
    borderColor:'rgba(109,86,165,0.3)'
  }}
>
          <div className="wrap flex items-center justify-center gap-2.5 py-2 text-[12px] font-medium relative"
            style={{ color:'rgba(231,224,255,0.9)' }}>
            <span className="hidden sm:inline">🛡️</span>
            <span>
              Aqua Secure AI — Modern SOC Operations Empowering Human analysts.{' '}
              <strong style={{ color:'#B8A5FF' }}>PREVENT → DETECT → RESPOND</strong>
            </span>
            <a href="https://secureye.io/get-started" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1 underline underline-offset-2 opacity-75 hover:opacity-100 whitespace-nowrap">
              Get Started <ArrowRight className="w-3 h-3"/>
            </a>
          </div>
          <button onClick={dismiss}
            className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100"
            style={{ color:'rgba(231,224,255,0.9)' }}>
            <X className="w-3.5 h-3.5"/>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
