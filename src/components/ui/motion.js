export const fadeUp = {
  hidden: { opacity:0, y:28 },
  show:   { opacity:1, y:0, transition:{ duration:.6, ease:[.16,1,.3,1] } },
}
export const fadeIn  = { hidden:{ opacity:0 }, show:{ opacity:1, transition:{ duration:.45 } } }
export const fadeLeft  = { hidden:{ opacity:0, x:-36 }, show:{ opacity:1, x:0, transition:{ duration:.6, ease:[.16,1,.3,1] } } }
export const fadeRight = { hidden:{ opacity:0, x:36  }, show:{ opacity:1, x:0, transition:{ duration:.6, ease:[.16,1,.3,1] } } }
export const scaleIn   = { hidden:{ opacity:0, scale:.9 }, show:{ opacity:1, scale:1, transition:{ duration:.55, ease:[.16,1,.3,1] } } }
export const stagger = (d=.09) => ({ hidden:{}, show:{ transition:{ staggerChildren:d, delayChildren:.05 } } })
export const cardHover = {
  rest:  { y:0, boxShadow:'0 1px 0 rgba(255,255,255,0.04), 0 4px 20px rgba(0,0,0,.5)' },
  hover: { y:-5, boxShadow:'0 0 0 1px rgba(122,68,228,.45), 0 12px 44px rgba(122,68,228,.2)', transition:{ duration:.25, ease:'easeOut' } },
}
export const glowBtn = {
  rest:  { scale:1,    boxShadow:'0 4px 18px rgba(122,68,228,.5)' },
  hover: { scale:1.03, boxShadow:'0 6px 28px rgba(122,68,228,.70)', transition:{ duration:.2 } },
  tap:   { scale:.97 },
}
export const viewport = { once:true, margin:'-50px 0px' }
