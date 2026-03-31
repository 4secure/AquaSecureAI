import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { Shield, Eye, Zap, ArrowRight } from "lucide-react";
import { fadeUp, fadeRight, stagger, viewport } from "./ui/motion";

// HowItWorks: dark gradient bg — deep purple-black
const T = {
  primary: "#8A63FF",
  primaryDark: "#6D56A5",
  primaryLight: "#B8A5FF",
  card: "rgba(16,10,36,0.85)",
  cardBorder: "rgba(138,99,255,0.20)",
  text: "#E7E0FF",
  sub: "rgba(200,186,255,0.65)",
  faint: "rgba(184,165,255,0.38)",
  success: "#29E07A",
  warning: "#FFB020",
  info: "#35BBFF",
  nodeBg: "rgba(16,14,30,0.95)",
  nodeBorder: "rgba(138,99,255,0.45)",
  animBg: "rgba(8,5,20,0.90)",
};

const STEPS = [
  {
    icon: Shield,
    color: "#8A63FF",
    bg: "rgba(138,99,255,0.12)",
    stage: "PREVENT",
    title: "Proactive Risk Prevention",
    desc: "Continuously monitor your risk posture and automate GRC compliance. Identify vulnerabilities across your digital footprint before attackers can exploit them.",
    bullets: ["Risk monitoring & scoring", "GRC Tasks & compliance"],
  },
  {
    icon: Eye,
    color: "#8A63FF",
    bg: "rgba(53,187,255,0.12)",
    stage: "DETECT",
    title: "AI-Powered Threat Detection",
    desc: "Detect threats across every surface — from global Threat Intel feeds to DMARC email fraud, Dark Web leaks, and live Security Incidents — correlated by AI in real time.",
    bullets: [
      "Threat Intel feeds",
      "DMARC email security",
      "Dark Web monitoring",
      "Security Incidents",
    ],
  },
  {
    icon: Zap,
    color: "#8A63FF",
    bg: "rgba(41,224,122,0.12)",
    stage: "RESPOND",
    title: "Automated Incident Response",
    desc: "Processes all incoming data, enriches true threats, and empowers your SOC analysts with automated incident workflows and threat hunting — 24/7.",
    bullets: [
      "Total threats processed",
      "Enriched & prioritised",
      "Automated triage & response",
    ],
  },
];

const AI_CSS = `
  .aia-node{transition:transform .2s ease,border-color .2s ease}
  .aia-node:hover{transform:scale(1.08);border-color:#8A63FF!important}
  .aia-card{transition:box-shadow .2s ease,border-color .2s ease;cursor:default}
  .aia-card:hover{box-shadow:0 6px 28px rgba(138,99,255,0.28)!important;border-color:rgba(138,99,255,0.50)!important}
`;

const PIcon = ({ c }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke={c}
    strokeWidth="2"
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);
const EIcon = ({ c }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke={c}
    strokeWidth="2"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
const SIcon = ({ c }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke={c}
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
  </svg>
);
const RobotIcon = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"/>
    <path d="M12 2v2"/>
    <path d="M9 12v9"/>
    <path d="M15 12v9"/>
    <path d="M5 16l4 -2"/>
    <path d="M15 14l4 2"/>
    <path d="M9 18h6"/>
    <path d="M10 8v.01"/>
    <path d="M14 8v.01"/>
  </svg>
)
const Particle = ({ path, delay, duration, color }) => (
  <circle r="2.5" fill={color}>
    <animateMotion
      dur={`${duration}s`}
      repeatCount="indefinite"
      begin={`${delay}s`}
      path={path}
    />
    <animate
      attributeName="opacity"
      values="0;1;1;0"
      dur={`${duration}s`}
      repeatCount="indefinite"
      begin={`${delay}s`}
    />
    <animate
      attributeName="r"
      values="1;1.25;1"
      dur="1s"
      repeatCount="indefinite"
    />
  </circle>
);

const NP = {
  center: { left: "calc(50% - 55px)", top: "calc(50% - 42px)" },
  kubernetes: { left: "calc(25% - 22px)", top: "calc(18% - 16px)" },
  aws: { left: "calc(37% - 36px)", top: "calc(20% - 16px)" },
  database: { left: "calc(73% - 28px)", top: "calc(18% - 16px)" },
  cloud: { left: "calc(61% - 36px)", top: "calc(28% - 16px)" },
  shield: { left: "calc(20% - 70px)", top: "calc(40% - 16px)" },
  cost: { left: "calc(82% - 36px)", top: "calc(40% - 16px)" },
};

function AIAnimation({ height = 420, cardsData }) {
  const ref = useRef(null);
  const [ar, setAr] = useState(1.8);
  useEffect(() => {
    if (document.getElementById("aia-css-dark")) return;
    const s = document.createElement("style");
    s.id = "aia-css-dark";
    s.textContent = AI_CSS;
    document.head.appendChild(s);
    return () => s.remove();
  }, []);
  useEffect(() => {
    const upd = () => {
      if (ref.current) {
        const { width, height: h } = ref.current.getBoundingClientRect();
        if (h > 0) setAr(width / h);
      }
    };
    upd();
    const ro = new ResizeObserver(upd);
    ref.current && ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  const vbW = Math.round(100 * ar);
  const sx = useCallback((x) => (x * vbW) / 100, [vbW]);
  const inp = useMemo(
    () => [
      {
        id: "k",
        delay: 0,
        d: `M ${sx(25)},18 L ${sx(25)},29 Q ${sx(25)},30 ${sx(26)},30 L ${sx(29)},30 Q ${sx(30)},30 ${sx(30)},31 L ${sx(30)},44 Q ${sx(30)},45 ${sx(31)},45 L ${sx(45)},45`,
      },
      {
        id: "a",
        delay: 0.8,
        d: `M ${sx(37)},20 L ${sx(37)},34 Q ${sx(37)},35 ${sx(38)},35 L ${sx(41)},35 Q ${sx(42)},35 ${sx(42)},36 L ${sx(42)},49 Q ${sx(42)},50 ${sx(43)},50 L ${sx(50)},50`,
      },
      {
        id: "d",
        delay: 1.6,
        d: `M ${sx(73)},18 L ${sx(73)},32 Q ${sx(73)},33 ${sx(72)},33 L ${sx(71)},33 Q ${sx(70)},33 ${sx(70)},34 L ${sx(70)},44 Q ${sx(70)},45 ${sx(69)},45 L ${sx(55)},45`,
      },
      {
        id: "c",
        delay: 2.4,
        d: `M ${sx(61)},28 L ${sx(61)},49 Q ${sx(61)},50 ${sx(60)},50 L ${sx(55)},50`,
      },
      {
        id: "s",
        delay: 3.2,
        d: `M ${sx(20)},40 L ${sx(26)},40 Q ${sx(27)},40 ${sx(27)},41 L ${sx(27)},54 Q ${sx(27)},55 ${sx(28)},55 L ${sx(45)},55`,
      },
      {
        id: "g",
        delay: 4.0,
        d: `M ${sx(82)},40 L ${sx(76)},40 Q ${sx(75)},40 ${sx(75)},41 L ${sx(75)},54 Q ${sx(75)},55 ${sx(74)},55 L ${sx(55)},55`,
      },
    ],
    [sx],
  );
  const out = useMemo(
    () => [
      {
        id: "ol",
        delay: 0.5,
        d: `M ${sx(50)},58 L ${sx(50)},67 Q ${sx(50)},68 ${sx(49)},68 L ${sx(39)},68 Q ${sx(38)},68 ${sx(38)},69 L ${sx(38)},79 Q ${sx(38)},80 ${sx(37)},80 L ${sx(31)},80`,
      },
      { id: "oc", delay: 1.0, d: `M ${sx(50)},58 L ${sx(50)},78` },
      {
        id: "or",
        delay: 1.5,
        d: `M ${sx(50)},58 L ${sx(50)},67 Q ${sx(50)},68 ${sx(51)},68 L ${sx(61)},68 Q ${sx(62)},68 ${sx(62)},69 L ${sx(62)},79 Q ${sx(62)},80 ${sx(63)},80 L ${sx(69)},80`,
      },
    ],
    [sx],
  );
  const cards = [
    {
      key: "processed",
      color: T.info,
      left: "27%",
      Icon: ({ c }) => <PIcon c={c} />,
    },
    {
      key: "enriched",
      color: T.success,
      left: "50%",
      Icon: ({ c }) => <EIcon c={c} />,
    },
    {
      key: "skipped",
      color: T.warning,
      left: "74%",
      Icon: ({ c }) => <SIcon c={c} />,
    },
  ];
  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        backgroundColor: T.animBg,
        borderRadius: 14,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: `1px solid ${T.cardBorder}`,
        height,
        width: "100%",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: `linear-gradient(rgba(138,99,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(138,99,255,0.04) 1px,transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: 100,
          pointerEvents: "none",
          background: `radial-gradient(ellipse at center,rgba(138,99,255,0.14) 0%,transparent 70%)`,
        }}
      />
      <svg
        viewBox={`0 0 ${vbW} 100`}
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <defs>
          <linearGradient id="ag1d" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={T.primary} stopOpacity="0.18" />
            <stop offset="50%" stopColor={T.primary} stopOpacity="0.55" />
            <stop offset="100%" stopColor={T.primary} stopOpacity="0.18" />
          </linearGradient>
          <linearGradient id="ag2d" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={T.primary} stopOpacity="0.45" />
            <stop offset="100%" stopColor={T.primaryLight} stopOpacity="0.18" />
          </linearGradient>
          <filter id="aglwd">
            <feGaussianBlur stdDeviation="1.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {inp.map((p) => (
          <path
            key={p.id}
            d={p.d}
            fill="none"
            stroke="url(#ag1d)"
            strokeWidth="0.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
        {out.map((p) => (
          <path
            key={p.id}
            d={p.d}
            fill="none"
            stroke="url(#ag2d)"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
        <g filter="url(#aglwd)">
          {inp.map((p) => (
            <Particle
              key={`pi${p.id}`}
              path={p.d}
              delay={p.delay}
              duration={7}
              color={T.primary}
            />
          ))}
          {out.map((p) => (
            <Particle
              key={`po${p.id}`}
              path={p.d}
              delay={p.delay}
              duration={7}
              color={T.primaryLight}
            />
          ))}
        </g>
      </svg>
      {[
        { k: "kubernetes", label: "Risk" },
        { k: "aws", label: "Threat Intel" },
        { k: "database", label: "DMARC" },
        { k: "cloud", label: "Dark Web" },
        { k: "shield", label: "Security Incidents" },
        { k: "cost", label: "GRC Tasks" },
      ].map((n) => (
        <div
          key={n.k}
          className="aia-node"
          style={{
            position: "absolute",
            padding: "0 10px",
            minWidth: 42,
            minHeight: 32,
            backgroundColor: T.nodeBg,
            borderRadius: 7,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: `2px solid ${T.nodeBorder}`,
            zIndex: 5,
            whiteSpace: "nowrap",
            boxSizing: "border-box",
            ...NP[n.k],
          }}
        >
          <span style={{ fontSize: 11, fontWeight: 700, color: T.primary }}>
            {n.label}
          </span>
        </div>
      ))}
      <div
        style={{
          position: "absolute",
          width: 110,
          height: 84,
          background: `linear-gradient(135deg,${T.primaryDark},#3a1e8c)`,
          borderRadius: 11,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          border: `2px solid ${T.primaryLight}`,
          ...NP.center,
        }}
      >
        <RobotIcon />
      </div>
      {cards.map((c, idx) => {
        const Icon = c.Icon;
        const data = cardsData?.[c.key] || { value: "0", label: c.key };
        return (
          <div
            key={c.key}
            className="aia-card"
            style={{
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              padding: "10px 13px",
              borderRadius: 11,
              backgroundColor: T.card,
              border: `1px solid ${T.cardBorder}`,
              minWidth: 100,
              animation: "none",
              zIndex: 15,
              backdropFilter: "blur(10px)",
              left: c.left,
              bottom: "5%",
              transform: "translateX(-50%)",
            }}
          >
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                backgroundColor: `${c.color}22`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 8,
              }}
            >
              <Icon c={c.color} />
            </div>
            <span
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: T.text,
                lineHeight: 1.2,
              }}
            >
              {data.value}
            </span>
            <span
              style={{
                fontSize: 10,
                fontWeight: 500,
                color: T.faint,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginTop: 3,
              }}
            >
              {data.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default function HowItWorks({ onDemo }) {
  return (
    <section
      id="how"
      className="section relative overflow-hidden"
      style={{
        background: "#0e0b1e",
      }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(109,86,165,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="wrap relative z-10">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center mb-14"
        >
          <motion.p variants={fadeUp} className="badge mb-4">
            How It Works
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-extrabold tracking-tight leading-tight mb-4"
            style={{ fontSize: "clamp(26px,3.8vw,44px)", color: "#E7E0FF" }}
          >
            How do we{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#E7E0FF,#B8A5FF,#8A63FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              prevent cyber attacks?
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lead leading-[1.8] max-w-[540px] mx-auto"
            style={{ color: "rgba(200,186,255,0.65)" }}
          >
            A three-stage AI-powered SecOps pipeline — PREVENT, DETECT, RESPOND
            — running continuously, empowering your SOC analysts to stay ahead
            of every threat.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.stage}
                  variants={fadeUp}
                  className="flex gap-4 mb-7 group"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: s.bg }}
                      whileHover={{ scale: 1.15, rotate: 8 }}
                    >
                      <Icon className="w-5 h-5" style={{ color: s.color }} />
                    </motion.div>
                    {i < STEPS.length - 1 && (
                      <div
                        className="w-px mt-2 flex-1"
                        style={{
                          background: `linear-gradient(to bottom,${s.color}40,transparent)`,
                          minHeight: 24,
                        }}
                      />
                    )}
                  </div>
                  <div className="pb-2 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="text-[10px] font-black px-2.5 py-1 rounded-pill"
                        style={{
                          background: s.bg,
                          color: s.color,
                          border: `1px solid ${s.color}40`,
                        }}
                      >
                        {s.stage}
                      </span>
                      <p
                        className="font-bold text-[15px]"
                        style={{ color: "#E7E0FF" }}
                      >
                        {s.title}
                      </p>
                    </div>
                    <p
                      className="text-[13px] leading-relaxed mb-3"
                      style={{ color: "rgba(200,186,255,0.60)" }}
                    >
                      {s.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {s.bullets.map((b) => (
                        <span
                          key={b}
                          className="text-[10px] font-medium px-2 py-0.5 rounded-pill"
                          style={{
                            background: "rgba(109,86,165,0.10)",
                            color: "rgba(184,165,255,0.65)",
                            border: "1px solid rgba(109,86,165,0.20)",
                          }}
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
            <motion.div variants={fadeUp} className="mt-2 ml-14">
              <motion.button
                className="btn-primary"
                onClick={onDemo}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 6px 28px rgba(138,99,255,.70)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                See It In Action <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <p
              className="text-[11px] font-bold uppercase tracking-widest text-center mb-4"
              style={{ color: "rgba(184,165,255,0.38)" }}
            >
              Aqua Secure AI — SecOps Pipeline
            </p>
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(138,99,255,0.25)",
                boxShadow:
                  "0 0 0 1px rgba(109,86,165,0.08),0 32px 80px rgba(0,0,0,0.55)",
              }}
            >
              <AIAnimation
                height={440}
                cardsData={{
                  processed: { value: "1.4K", label: "Total" },
                  enriched: { value: "11.2K", label: "Enriched" },
                  skipped: { value: "1.2K", label: "Skipped" },
                }}
              />
            </div>
            {/* <motion.div className="flex items-center justify-center gap-3 mt-5" initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={viewport} transition={{delay:.4}}>
              {['PREVENT','DETECT','RESPOND'].map((s,i)=>(
                <span key={s} className="flex items-center gap-3">
                  <motion.span className="text-[11px] font-black tracking-widest" style={{color:['#8A63FF','#35BBFF','#29E07A'][i]}} animate={{opacity:[.5,1,.5]}} transition={{duration:2,repeat:Infinity,delay:i*.5}}>{s}</motion.span>
                  {i<2&&<span style={{color:'rgba(184,165,255,0.25)',fontSize:12}}>→</span>}
                </span>
              ))}
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
