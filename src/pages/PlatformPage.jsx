import { motion } from "framer-motion";
import {
  Activity,
  Shield,
  Brain,
  Database,
  Cpu,
  ArrowRight,
  ExternalLink,
  Zap,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import PageHero from "../components/ui/PageHero";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  stagger,
  scaleIn,
  viewport,
} from "../components/ui/motion";
import GlowOrbs from "../components/ui/GlowOrbs";
import ParticleField from "../components/ui/ParticleField";

// Real platform architecture from aquasecure.ai
const PIPELINE = [
  {
    icon: Shield,
    color: "#8A63FF",
    stage: "PREVENT",
    num: "01",
    title: "Proactive Prevention",
    desc: "GRC compliance automation, asset management, and workforce training form your first line of defence — eliminating vulnerabilities before attackers can exploit them.",
    items: [
      "GRC — CTDISR, ETGRM, ISO 27001",
      "Asset Management",
      "Training & Awareness programs",
    ],
  },
  {
    icon: Activity,
    color: "#35BBFF",
    stage: "DETECT",
    num: "02",
    title: "AI-Powered Detection",
    desc: "Global threat intelligence feeds, real-time IP reputation intelligence via AQUA TIP, and advanced correlation surface true threats from noise.",
    items: [
      "Threat Intelligence feeds",
      "AQUA TIP — Real-time IP lookup",
      "AI data enrichment & prioritisation",
      "Advanced threat correlation",
    ],
  },
  {
    icon: Zap,
    color: "#29E07A",
    stage: "RESPOND",
    num: "03",
    title: "Automated Response",
    desc: "The SOC platform empowers human analysts with AI-driven investigation, case management, automated incident creation, workflow orchestration, detection and response, and threat hunting — 24/7.",
    items: [
      "SOC analyst investigation tools",
      "Incident creation & workflow",
      "Detection and response automation",
      "Threat hunting capabilities",
    ],
  },
];

// Real Security Data Model from aquasecure.ai
const DATA_MODEL = [
  { label: "TABULAR", desc: "Structured security data in relational format" },
  { label: "VECTOR", desc: "ML-ready vector representations for AI models" },
  { label: "DATA LAKE", desc: "Unified raw event storage at scale" },
  { label: "RAW", desc: "Unprocessed incoming data from all sources" },
  { label: "NORMALIZE", desc: "Standardised data format for correlation" },
];

export default function PlatformPage({ onDemo }) {
  return (
    <>
      <Helmet>
        <title>Platform — Aqua Secure AI</title>
      </Helmet>
      <PageHero
        badge="The Platform"
        title="PREVENT · DETECT · RESPOND"
        accent=""
        sub="Modern SOC operations empowering human SOC analysts, real-time threat intelligence, and a unified security data model."
        cta="Get Started Free"
        onCta={() => window.open("https://secureye.io/get-started", "_blank")}
      />

      <section
        className="section relative overflow-hidden"
        style={{ background: "#0A0B14" }}
      >
        <ParticleField count={30} color="109,86,165" />
        <GlowOrbs variant="default" />
        <div className="wrap relative z-10">
          {/* Pipeline header */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} className="badge mb-4">
              Full Pipeline
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-extrabold tracking-tight leading-tight mb-4"
              style={{ fontSize: "clamp(26px,3.8vw,44px)", color: "#E7E0FF" }}
            >
              Three stages to complete{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#E7E0FF,#B8A5FF,#8A63FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                threat immunity
              </span>
            </motion.h2>
          </motion.div>

          {/* Pipeline flow chips */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex flex-wrap items-center justify-center gap-3 mb-16"
          >
            {PIPELINE.map((l, i) => (
              <motion.div
                key={l.stage}
                variants={fadeUp}
                className="flex items-center gap-3"
              >
                <motion.div
                  whileHover={{ y: -3, borderColor: l.color }}
                  className="rounded-xl px-5 py-3 text-center border cursor-default transition-all"
                  style={{
                    background: "#16162A",
                    borderColor: "rgba(109,86,165,0.2)",
                    minWidth: 110,
                  }}
                >
                  <p
                    className="text-[9px] uppercase tracking-widest mb-1"
                    style={{ color: "rgba(184,165,255,0.4)" }}
                  >
                    {l.num}
                  </p>
                  <p
                    className="font-bold text-[14px]"
                    style={{ color: l.color }}
                  >
                    {l.stage}
                  </p>
                </motion.div>
                {i < PIPELINE.length - 1 && (
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.4,
                    }}
                    className="text-[20px] hidden sm:block"
                    style={{ color: "rgba(138,99,255,0.5)" }}
                  >
                    →
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Stage detail sections */}
          <div className="flex flex-col gap-12 mb-20">
            {PIPELINE.map((l, i) => {
              const Icon = l.icon;
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={l.stage}
                  variants={stagger(0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-10 border-b last:border-0"
                  style={{ borderColor: "rgba(109,86,165,0.12)" }}
                >
                  <motion.div
                    variants={isEven ? fadeLeft : fadeRight}
                    className={!isEven ? "lg:order-2" : ""}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="text-[10px] font-black px-3 py-1.5 rounded-pill"
                        style={{ background: `${l.color}18`, color: l.color }}
                      >
                        {l.stage}
                      </span>
                      <span
                        className="text-[11px] font-bold"
                        style={{ color: "rgba(184,165,255,0.4)" }}
                      >
                        Stage {l.num}
                      </span>
                    </div>
                    <h3
                      className="font-extrabold mb-3 leading-tight"
                      style={{
                        fontSize: "clamp(20px,2.5vw,30px)",
                        color: "#E7E0FF",
                      }}
                    >
                      {l.title}
                    </h3>
                    <p
                      className="text-lead leading-[1.85] mb-5"
                      style={{ color: "rgba(200,186,255,0.60)" }}
                    >
                      {l.desc}
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {l.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5">
                          <span
                            className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ background: `${l.color}18` }}
                          >
                            <span style={{ color: l.color, fontSize: 9 }}>
                              ✓
                            </span>
                          </span>
                          <span
                            className="text-[13px]"
                            style={{ color: "rgba(200,186,255,0.65)" }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  <motion.div
                    variants={isEven ? fadeRight : fadeLeft}
                    className={!isEven ? "lg:order-1" : ""}
                  >
                    <motion.div
                      className="rounded-xl p-8 relative overflow-hidden border"
                      style={{
                        background: "#16162A",
                        borderColor: `${l.color}30`,
                      }}
                      whileHover={{
                        borderColor: `${l.color}55`,
                        boxShadow: `0 0 40px ${l.color}12`,
                      }}
                    >
                      <div
                        className="absolute -top-14 -right-14 w-44 h-44 rounded-full blur-3xl pointer-events-none"
                        style={{ background: `${l.color}0C` }}
                      />
                      <motion.div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                        style={{ background: `${l.color}18` }}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <Icon
                          className="w-8 h-8"
                          style={{ color: l.color }}
                          strokeWidth={1.6}
                        />
                      </motion.div>
                      <div className="flex items-center gap-2 mb-3">
                        <div
                          className="w-2 h-2 rounded-full animate-pulse"
                          style={{ background: l.color }}
                        />
                        <span
                          className="text-[12px] font-bold"
                          style={{ color: l.color }}
                        >
                          {l.stage} — Active
                        </span>
                      </div>
                      <p
                        className="text-[13px] leading-relaxed"
                        style={{ color: "rgba(200,186,255,0.55)" }}
                      >
                        {l.desc.slice(0, 100)}…
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Security Data Model */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mb-16"
          >
            <motion.h2
              variants={fadeUp}
              className="font-extrabold tracking-tight text-center mb-4"
              style={{ fontSize: "clamp(24px,3vw,38px)", color: "#E7E0FF" }}
            >
              Security Data Model
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lead text-center mb-10 max-w-[480px] mx-auto"
              style={{ color: "rgba(200,186,255,0.55)" }}
            >
              Unified incoming data from different sources — structured for AI,
              analytics, and real-time correlation.
            </motion.p>
            <motion.div
              variants={stagger(0.08)}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
            >
              {DATA_MODEL.map((d, i) => (
                <motion.div
                  key={d.label}
                  variants={scaleIn}
                  whileHover={{
                    y: -4,
                    borderColor: "rgba(138,99,255,0.45)",
                    boxShadow: "0 8px 24px rgba(109,86,165,0.15)",
                  }}
                  className="rounded-xl p-5 text-center border transition-all cursor-default"
                  style={{
                    background: "#16162A",
                    borderColor: "rgba(109,86,165,0.2)",
                  }}
                >
                  <p
                    className="text-[13px] font-black mb-2"
                    style={{ color: "#8A63FF" }}
                  >
                    {d.label}
                  </p>
                  <p
                    className="text-[11px] leading-snug"
                    style={{ color: "rgba(200,186,255,0.50)" }}
                  >
                    {d.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* AQUA TIP */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="rounded-xl p-10 md:p-14 text-center relative overflow-hidden border"
            style={{
              background: "linear-gradient(135deg,#16162A,#1b1439,#16162A)",
              borderColor: "rgba(138,99,255,0.2)",
            }}
          >
            <GlowOrbs variant="subtle" />
            <div className="relative z-10">
              <motion.p variants={fadeUp} className="badge mb-4">
                STANDALONE PRODUCT
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-extrabold tracking-tight mb-3"
                style={{ fontSize: "clamp(24px,3vw,38px)", color: "#E7E0FF" }}
              >
                AQUA TIP — Threat Intelligence Platform
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-lead mb-7 max-w-[500px] mx-auto"
                style={{ color: "rgba(200,186,255,0.60)" }}
              >
                Real-time IP reputation intelligence powered by global threat
                feeds. Real-Time IP Lookup · Threat Classification (malware,
                botnet, scanner, brute-force) · Risk Scoring. Start with 1 free
                search per day.
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-4 justify-center"
              >
                <motion.a
                  href="https://tip.aquasecure.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-[15px] px-9 py-4 inline-flex items-center gap-2"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 6px 28px rgba(138,99,255,.70)",
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  Try AQUA TIP Free <ExternalLink className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
