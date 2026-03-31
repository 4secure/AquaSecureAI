import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
export default function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const h = () => setShow(window.scrollY > 500)
    window.addEventListener('scroll', h, { passive:true })
    return () => window.removeEventListener('scroll', h)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.button onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
          initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:16 }}
          className="fixed bottom-7 right-7 z-50 w-10 h-10 rounded-xl flex items-center justify-center text-white"
          style={{ background:'linear-gradient(135deg,#7A44E4,#4E27B0)', boxShadow:'0 0 20px rgba(122,68,228,.4)' }}
          whileHover={{ scale:1.12, boxShadow:'0 0 32px rgba(122,68,228,.7)' }} whileTap={{ scale:.9 }}>
          <ChevronUp className="w-5 h-5" strokeWidth={2.5}/>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
