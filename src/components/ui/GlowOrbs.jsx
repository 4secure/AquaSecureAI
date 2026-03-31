export default function GlowOrbs({ variant='default' }) {
  const sets = {
    default: [
      { w:700, h:600, top:'-20%', left:'40%', tx:'-50%', c:'rgba(122,68,228,0.16)', blur:140 },
      { w:400, h:400, bottom:'-8%', left:'-5%', c:'rgba(78,39,176,0.12)', blur:100 },
      { w:300, h:300, top:'25%', right:'-8%',   c:'rgba(155,110,255,0.09)', blur:80 },
    ],
    hero: [
      { w:900, h:700, top:'-25%', left:'35%', tx:'-50%', c:'rgba(122,68,228,0.20)', blur:160 },
      { w:500, h:500, bottom:'0', left:'-10%', c:'rgba(78,39,176,0.13)', blur:120 },
      { w:350, h:350, top:'30%', right:'-6%',  c:'rgba(155,110,255,0.08)', blur:90 },
    ],
    subtle: [
      { w:600, h:500, top:'-10%', left:'50%', tx:'-50%', c:'rgba(122,68,228,0.10)', blur:120 },
      { w:300, h:300, bottom:'5%', right:'5%', c:'rgba(78,39,176,0.08)', blur:80 },
    ],
  }
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {(sets[variant]||sets.default).map((o,i)=>(
        <div key={i} className="absolute rounded-full"
          style={{ width:o.w, height:o.h, top:o.top, bottom:o.bottom, left:o.left, right:o.right,
            transform:o.tx?`translateX(${o.tx})`:undefined,
            background:`radial-gradient(circle,${o.c} 0%,transparent 70%)`,
            filter:`blur(${o.blur}px)`,
            animation:`float ${7+i*2}s ease-in-out ${i*1.5}s infinite alternate` }}/>
      ))}
      <style>{`@keyframes float{0%{transform:translateY(0) scale(1)}100%{transform:translateY(-18px) scale(1.04)}}`}</style>
    </div>
  )
}
