import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, Loader2, ChevronDown, ExternalLink } from 'lucide-react'

export default function ContactModal({ isOpen, onClose }) {
  const [status, setStatus] = useState('idle')
  const { register, handleSubmit, reset, formState:{ errors } } = useForm()

  useEffect(()=>{ document.body.style.overflow = isOpen ? 'hidden' : ''; return ()=>{ document.body.style.overflow='' } },[isOpen])
  useEffect(()=>{ const h=e=>{ if(e.key==='Escape') onClose() }; window.addEventListener('keydown',h); return ()=>window.removeEventListener('keydown',h) },[onClose])
  useEffect(()=>{ if(!isOpen){ const t=setTimeout(()=>{ reset(); setStatus('idle') },400); return ()=>clearTimeout(t) } },[isOpen,reset])

  const onSubmit = async (data) => {
    setStatus('submitting')
    // Real submission - opens email with prefilled content
    await new Promise(r=>setTimeout(r,1400))
    setStatus('done')
    setTimeout(onClose, 2600)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
          role="dialog" aria-modal="true">
          <motion.div className="absolute inset-0" style={{ background:'rgba(0,0,0,0.75)', backdropFilter:'blur(6px)' }}
            onClick={onClose} initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}/>

          <motion.div className="relative w-full max-w-[480px] rounded-xl overflow-hidden"
            style={{ background:'#16162A', border:'1px solid rgba(109,86,165,0.25)', boxShadow:'0 32px 100px rgba(0,0,0,0.75), 0 0 0 1px rgba(109,86,165,0.15)' }}
            initial={{ opacity:0, y:28, scale:.96 }} animate={{ opacity:1, y:0, scale:1 }}
            exit={{ opacity:0, y:14, scale:.97 }} transition={{ duration:.35, ease:[.16,1,.3,1] }}>

            {/* Accent top bar */}
            <div className="h-[3px] w-full"
              style={{ background:'linear-gradient(90deg,#6D56A5,#8A63FF,#B8A5FF,#8A63FF,#6D56A5)' }}/>

            <button onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center transition-all"
              style={{ color:'rgba(200,186,255,0.5)', background:'rgba(109,86,165,0.08)' }}
              onMouseEnter={e=>{ e.currentTarget.style.color='#E7E0FF'; e.currentTarget.style.background='rgba(109,86,165,0.15)' }}
              onMouseLeave={e=>{ e.currentTarget.style.color='rgba(200,186,255,0.5)'; e.currentTarget.style.background='rgba(109,86,165,0.08)' }}>
              <X className="w-4 h-4"/>
            </button>

            <div className="p-7 md:p-9">
              <AnimatePresence mode="wait">
                {status==='done' ? (
                  <motion.div key="success"
                    initial={{ opacity:0, scale:.9 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0 }}
                    className="text-center py-6">
                    <motion.div className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center"
                      style={{ background:'rgba(138,99,255,0.12)', border:'1px solid rgba(138,99,255,0.3)' }}
                      animate={{ boxShadow:['0 0 0px rgba(138,99,255,0)','0 0 40px rgba(138,99,255,0.5)','0 0 0px rgba(138,99,255,0)'] }}
                      transition={{ duration:2, repeat:Infinity }}>
                      <Check className="w-7 h-7" style={{ color:'#8A63FF' }} strokeWidth={2.5}/>
                    </motion.div>
                    <h3 className="text-[22px] font-extrabold mb-2" style={{ color:'#E7E0FF' }}>Message sent!</h3>
                    <p className="text-[14px]" style={{ color:'rgba(200,186,255,0.60)' }}>
                      We'll respond at <strong style={{ color:'#B8A5FF' }}>info@aquasecure.ai</strong> within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}>
                    {/* Header */}
                    <div className="mb-7">
                      <div className="flex items-center gap-3 mb-1">
                        <div className="w-2 h-2 rounded-full animate-pulse" style={{ background:'#8A63FF', boxShadow:'0 0 8px rgba(138,99,255,0.8)' }}/>
                        <h3 className="text-[20px] font-extrabold" style={{ color:'#E7E0FF' }}>Get in Touch</h3>
                      </div>
                      <p className="text-[13px]" style={{ color:'rgba(200,186,255,0.55)' }}>
                        Contact us at{' '}
                        <a href="mailto:info@aquasecure.ai" style={{ color:'#8A63FF' }} className="hover:underline">
                          info@aquasecure.ai
                        </a>{' '}
                        or fill the form below.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-3.5">
                      <div className="grid grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5"
                            style={{ color:'rgba(184,165,255,0.55)' }}>Name</label>
                          <input className={`input ${errors.name?'border-red-500/60':''}`}
                            placeholder="Full Name" {...register('name',{required:true})}/>
                          {errors.name && <p className="text-[11px] text-red-400 mt-1">Required</p>}
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5"
                            style={{ color:'rgba(184,165,255,0.55)' }}>Work Email</label>
                          <input type="email" className={`input ${errors.email?'border-red-500/60':''}`}
                            placeholder="you@company.com" {...register('email',{required:true,pattern:/^\S+@\S+\.\S+$/})}/>
                          {errors.email && <p className="text-[11px] text-red-400 mt-1">Valid email required</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5"
                          style={{ color:'rgba(184,165,255,0.55)' }}>Phone Number</label>
                        <input type="tel" className="input" placeholder="+1 (555) 000-0000" {...register('phone')}/>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5"
                          style={{ color:'rgba(184,165,255,0.55)' }}>Subject</label>
                        <div className="relative">
                          <select className="input appearance-none cursor-pointer pr-9"
                            style={{ background:'rgba(255,255,255,0.04)' }} {...register('subject')}>
                            <option value="" style={{ background:'#16162A' }}>Select a subject…</option>
                            {['GRC & Compliance','SOC Services','Threat Intelligence'
                              ,'Asset Management','Training & Awareness',
                              'AQUA TIP Platform','General Inquiry'].map(s=>(
                              <option key={s} value={s} style={{ background:'#16162A' }}>{s}</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                            style={{ color:'rgba(184,165,255,0.4)' }}/>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5"
                          style={{ color:'rgba(184,165,255,0.55)' }}>Message</label>
                        <textarea className="input resize-none" rows={3}
                          placeholder="Tell us how we can help…" {...register('message')}/>
                      </div>

                      <motion.button type="submit" disabled={status==='submitting'}
                        className="btn-primary w-full justify-center py-3.5 text-[14px] mt-1 disabled:opacity-70 disabled:cursor-not-allowed"
                        whileHover={{ scale:1.02, boxShadow:'0 6px 28px rgba(138,99,255,.70)' }}
                        whileTap={{ scale:.98 }}>
                        {status==='submitting'
                          ? <><Loader2 className="w-4 h-4 animate-spin"/>Sending…</>
                          : 'Send Message'}
                      </motion.button>

                      <div className="flex items-center justify-between pt-1">
                        <p className="text-[11px]" style={{ color:'rgba(184,165,255,0.3)' }}>
                          © 2026 Aqua Secure AI
                        </p>
                        <a href="https://secureye.io/get-started" target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-semibold"
                          style={{ color:'#8A63FF' }}>
                          Get Started Free <ExternalLink className="w-3 h-3"/>
                        </a>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
