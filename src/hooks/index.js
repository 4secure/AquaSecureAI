import { useState, useEffect, useRef, useCallback } from 'react'

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.1, rootMargin: '0px 0px -32px 0px' }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  })
}

export function useScrolled(px = 60) {
  const [v, setV] = useState(false)
  useEffect(() => {
    const h = () => setV(window.scrollY > px)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [px])
  return v
}

export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const h = () => {
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && window.scrollY >= el.offsetTop - 110) { setActive(ids[i]); break }
      }
    }
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [ids])
  return active
}

export function useTyping(words, speed = 78, pause = 2200) {
  const [txt, setTxt] = useState('')
  const [wi, setWi] = useState(0)
  const [ci, setCi] = useState(0)
  const [del, setDel] = useState(false)
  useEffect(() => {
    const w = words[wi]
    let t
    if (!del && ci <= w.length) t = setTimeout(() => { setTxt(w.slice(0, ci)); setCi(c => c + 1) }, speed)
    else if (!del) t = setTimeout(() => setDel(true), pause)
    else if (del && ci > 0) t = setTimeout(() => { setCi(c => c - 1); setTxt(w.slice(0, ci - 1)) }, speed / 2)
    else { setDel(false); setWi(i => (i + 1) % words.length) }
    return () => clearTimeout(t)
  }, [ci, del, wi, words, speed, pause])
  return txt
}

export function useCarousel(len, ms = 4500) {
  const [cur, setCur] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef(null)
  const reset = useCallback(() => {
    clearInterval(timer.current)
    timer.current = setInterval(() => {
      if (!paused) setCur(c => (c + 1) % len)
    }, ms)
  }, [paused, len, ms])
  useEffect(() => { reset(); return () => clearInterval(timer.current) }, [reset])
  const go  = dir => { setCur(c => (c + dir + len) % len); reset() }
  const set = i   => { setCur(i); reset() }
  return { cur, go, set, paused, setPaused }
}

export function useCounter(raw, ms = 2000) {
  const [val, setVal] = useState('0')
  const ref = useRef(null)
  const done = useRef(false)
  const num = parseFloat(raw.replace(/[^0-9.]/g, ''))
  const isF = raw.includes('.')
  useEffect(() => {
    const el = ref.current; if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true
        const start = Date.now()
        const tick = () => {
          const p = Math.min((Date.now() - start) / ms, 1)
          const ease = 1 - Math.pow(1 - p, 4)
          setVal(isF ? (num * ease).toFixed(1) : Math.floor(num * ease).toLocaleString())
          if (p < 1) requestAnimationFrame(tick)
          else setVal(isF ? num.toFixed(1) : num.toLocaleString())
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: .5 })
    io.observe(el)
    return () => io.disconnect()
  }, [num, ms, isF])
  return { val, ref }
}
