import { motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck } from "lucide-react";
import { useTyping } from "../hooks";
import { fadeUp, fadeIn, stagger } from "./ui/motion";

const WORDS = ["GRC Compliance", "SOC Operations", "Threat Intelligence"];

const GRC = [
  {
    id: "ETGRM",
    name: "ETGRM",
    color: "#8A63FF",
    bg: "rgba(138,99,255,0.12)",
    bd: "rgba(138,99,255,0.28)",
  },
  {
    id: "CTDISR",
    name: "CTDISR",
    color: "#8A63FF",
    bg: "rgba(138,99,255,0.12)",
    bd: "rgba(138,99,255,0.28)",
  },
  {
    id: "iso",
    name: "ISO 27001",
    color: "#8A63FF",
    bg: "rgba(138,99,255,0.12)",
    bd: "rgba(138,99,255,0.28)",
  },
];

export default function Hero({ onDemo }) {
  const typed = useTyping(WORDS, 78, 2400);

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ background: "#ffffff", minHeight: "100vh" }}
    >
      {/* Subtle bg tints */}
      <div className="absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" />
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-35"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(124,58,237,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div
        className="wrap relative z-10 w-full"
        style={{ paddingTop: "calc(66px + 1rem)", paddingBottom: "3rem" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 lg:gap-14 items-center">
          {/* ── LEFT: copy ── */}
          <motion.div variants={stagger(0.09)} initial="hidden" animate="show">
            <motion.div
              variants={fadeIn}
              className="flex items-center gap-2 mb-4"
            >
              {["SOC", "GRC", "Threat Intel"].map((s, i, a) => (
                <span key={s} className="flex items-center gap-2">
                  <span
                    className="text-[10px] font-bold tracking-widest uppercase"
                    style={{
                      color:
                        i === 0
                          ? "#1e1b4b"
                          : i === 1
                            ? "#4F46E5"
                            : "rgba(79,46,220,0.40)",
                    }}
                  >
                    {s}
                  </span>
                  {i < a.length - 1 && (
                    <span style={{ color: "rgba(124,58,237,0.28)" }}>▸</span>
                  )}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <h1
                className="font-black leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(26px,3.8vw,44px)", color: "#1e1b4b" }}
              >
                Modern Soc Operations
              </h1>
              <h1
                className="font-black leading-[1.1] tracking-tight mb-3"
                style={{ fontSize: "clamp(26px,3.8vw,44px)" }}
              >
                <span
                  style={{
                    background:
                      "linear-gradient(135deg,#4F46E5 0%,#7C3AED 50%,#6D28D9 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Empowering Human
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="font-semibold mb-4"
              style={{
                fontSize: 15,
                minHeight: "1.4rem",
                color: "rgba(79,46,220,0.55)",
              }}
            >
              <span style={{ color: "rgba(79,46,220,0.35)" }}>for </span>
              <span
                style={{
                  background: "linear-gradient(135deg,#7C3AED,#4F46E5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {typed}
              </span>
              <span
                className="animate-blink ml-0.5"
                style={{ color: "#7C3AED" }}
              >
                |
              </span>
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-lead leading-[1.8] mb-5"
              style={{ color: "rgba(79,46,220,0.60)" }}
            >
              Aqua Secure AI empowers human SOC analysts with AI-powered
              monitoring, automated response, and global threat intelligence.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-2 mb-6">
              {[
                "AI-powered 24/7 threat detection and response",
                "Real-time threat intelligence with global feeds",
              ].map((p) => (
                <div key={p} className="flex items-start gap-2.5">
                  <span
                    className="w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(124,58,237,0.10)" }}
                  >
                    <ShieldCheck
                      className="w-2 h-2"
                      style={{ color: "#7C3AED" }}
                    />
                  </span>
                  <span style={{ fontSize: 13, color: "rgba(79,46,220,0.65)" }}>
                    {p}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-5">
              <motion.a
                href="https://secureye.io/get-started"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-[13px] text-white"
                style={{
                  background: "linear-gradient(135deg,#7C3AED,#6D28D9)",
                  boxShadow: "0 4px 18px rgba(124,58,237,0.35)",
                }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 6px 28px rgba(124,58,237,0.55)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                Get Started <ArrowRight className="w-3.5 h-3.5" />
              </motion.a>
              {/* <a href=''> */}
              <motion.button
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-[13px]"
                style={{
                  background: "rgba(124,58,237,0.07)",
                  border: "1px solid rgba(124,58,237,0.22)",
                  color: "#6D28D9",
                }}
                whileHover={{
                  background: "rgba(124,58,237,0.14)",
                  borderColor: "rgba(124,58,237,0.40)",
                  scale: 1.03,
                }}
                whileTap={{ scale: 0.97 }}
                onClick={onDemo}
              >
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(124,58,237,0.12)",
                    border: "1px solid rgba(124,58,237,0.25)",
                  }}
                >
                  <Play
                    className="w-2.5 h-2.5 fill-current"
                    style={{ color: "#7C3AED" }}
                  />
                </span>
                Product Overview
              </motion.button>
              {/* </a> */}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-1.5 mb-4"
            >
              <span style={{ fontSize: 11, color: "rgba(79,46,220,0.38)" }}>
                GRC:
              </span>
              {GRC.map((f, i) => (
                <motion.span
                  key={f.id}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.07 }}
                  className="text-[10px] font-bold px-2.5 py-0.5 rounded-pill"
                  style={{
                    background: f.bg,
                    color: f.color,
                    border: `1px solid ${f.bd}`,
                  }}
                >
                  {f.name}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              variants={fadeIn}
              style={{ fontSize: 11, color: "rgba(79,46,220,0.35)" }}
            >
              Managed services available ·{" "}
              <a
                href="mailto:info@aquasecure.ai"
                className="hover:underline"
                style={{ color: "rgba(79,46,220,0.55)" }}
              >
                info@aquasecure.ai
              </a>
            </motion.p>
          </motion.div>

          {/* ── RIGHT: real dashboard screenshot ── */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 8 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="relative flex justify-end"
          >
            {/* Ambient glow behind image */}
            <div
              className="absolute -inset-6 pointer-events-none rounded-3xl"
              style={{
                background:
                  "radial-gradient(ellipse 80% 70% at 55% 50%, rgba(124,58,237,0.10) 0%, transparent 70%)",
              }}
            />

            {/* Image container */}
            <div className="relative w-full" style={{ maxWidth: 640 }}>
              {/* Browser chrome */}
              <div
                className="rounded-t-2xl px-4 py-2.5 flex items-center gap-2"
                style={{
                  background: "#f0eeff",
                  border: "1px solid rgba(124,58,237,0.18)",
                  borderBottom: "none",
                }}
              >
                <div className="flex gap-1.5">
                  {["#FF605C", "#FFBD44", "#00CA4E"].map((c) => (
                    <div
                      key={c}
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: c }}
                    />
                  ))}
                </div>
                <div
                  className="flex-1 mx-3 h-5 rounded-md flex items-center px-2.5 gap-1.5"
                  style={{
                    background: "rgba(124,58,237,0.08)",
                    border: "1px solid rgba(124,58,237,0.12)",
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: "rgba(124,58,237,0.35)" }}
                  />
                  <span
                    className="text-[9px] font-medium"
                    style={{ color: "rgba(79,46,220,0.55)" }}
                  >
                    secureye.io/dashboard
                  </span>
                </div>
              </div>

              {/* The actual screenshot */}
              <div
                className="overflow-hidden rounded-b-2xl"
                style={{
                  border: "1px solid rgba(124,58,237,0.18)",
                  boxShadow:
                    "0 24px 64px rgba(109,40,217,0.14), 0 8px 24px rgba(0,0,0,0.08)",
                }}
              >
                <img
                  src="/images/dashboard-hero.jpg"
                  alt="Aqua Secure AI Dashboard"
                  className="w-full block"
                  style={{ display: "block" }}
                />
              </div>

              {/* Floating: PREVENT → DETECT → RESPOND */}
              {/* <motion.div
                className="absolute -top-4 right-2 rounded-xl px-4 py-2.5 hidden xl:flex items-center gap-2"
                style={{ background:'rgba(13,9,28,0.92)', border:'1px solid rgba(138,99,255,0.38)', backdropFilter:'blur(16px)', boxShadow:'0 8px 24px rgba(0,0,0,0.25)' }}
                initial={{ opacity:0, y:-12 }} animate={{ opacity:1, y:0 }}
                transition={{ delay:1.3, type:'spring', stiffness:220 }}>
                {['PREVENT','DETECT','RESPOND'].map((s,i) => (
                  <span key={s} className="flex items-center gap-2">
                    <motion.span className="text-[10px] font-black"
                      style={{ color:['#8A63FF','#35BBFF','#29E07A'][i] }}
                      animate={{ opacity:[.55,1,.55] }}
                      transition={{ duration:1.8, repeat:Infinity, delay:i*.4 }}>
                      {s}
                    </motion.span>
                    {i<2 && <span style={{ color:'rgba(184,165,255,0.22)', fontSize:9 }}>→</span>}
                  </span>
                ))}
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient: white → purple tint → #0A0B14 */}
    </section>
  );
}
