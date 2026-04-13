import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { useTyping } from "../hooks";

const WORDS = [
  "GRC Compliance",
  "SOC Operations",
  "Threat Intelligence",
  "Dark Web Monitoring",
];

/* ── Floating metric card ─────────────────────────────────────────────────── */
function MetricCard({
  icon: Icon,
  color,
  bg,
  label,
  value,
  sub,
  style,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, type: "spring", stiffness: 220, damping: 18 }}
      style={{
        position: "absolute",
        background: "#ffffff",
        border: "1px solid rgba(0,0,0,0.07)",
        borderRadius: 14,
        padding: "12px 16px",
        boxShadow:
          "0 8px 40px rgba(0,0,0,0.10), 0 1px 0 rgba(255,255,255,0.8) inset",
        display: "flex",
        alignItems: "center",
        gap: 11,
        zIndex: 20,
        minWidth: 190,
        backdropFilter: "blur(12px)",
        ...style,
      }}
    >
      {/* Animate card floating */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 14,
          pointerEvents: "none",
        }}
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 3.5 + delay,
          ease: "easeInOut",
          repeat: Infinity,
          delay: delay * 0.4,
        }}
      />

      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          background: bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon style={{ width: 17, height: 17, color }} strokeWidth={2} />
      </div>
      <div>
        <p
          style={{
            fontSize: 13,
            fontWeight: 800,
            color: "#111",
            lineHeight: 1.2,
            fontFamily: "'Syne', sans-serif",
          }}
        >
          {value}
        </p>
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: "#888",
            marginTop: 2,
            lineHeight: 1,
          }}
        >
          {label}
        </p>
        {sub && (
          <p
            style={{ fontSize: 10, color: "#bbb", marginTop: 2, lineHeight: 1 }}
          >
            {sub}
          </p>
        )}
      </div>

      {/* Colored left accent bar */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "20%",
          bottom: "20%",
          width: 3,
          borderRadius: 99,
          background: color,
        }}
      />
    </motion.div>
  );
}

/* ── Live pulse indicator ────────────────────────────────────────────────── */
function LiveBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, type: "spring", stiffness: 260 }}
      style={{
        position: "absolute",
        top: -16,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        alignItems: "center",
        gap: 7,
        background: "#fff",
        border: "1px solid rgba(0,0,0,0.07)",
        borderRadius: 99,
        padding: "6px 14px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        zIndex: 30,
        whiteSpace: "nowrap",
      }}
    >
      <motion.span
        style={{
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: "#22C55E",
          boxShadow: "0 0 0 0 rgba(34,197,94,0.4)",
          display: "block",
        }}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(34,197,94,0.5)",
            "0 0 0 6px rgba(34,197,94,0)",
          ],
        }}
        transition={{ duration: 1.4, repeat: Infinity }}
      />
      <span
        style={{
          fontSize: 11,
          fontWeight: 700,
          color: "#444",
          letterSpacing: "0.02em",
        }}
      >
        SOC Live — 14,208 threats blocked today
      </span>
    </motion.div>
  );
}

/* ── Main Hero ────────────────────────────────────────────────────────────── */
export default function Hero({ onDemo }) {
  const typed = useTyping(WORDS, 72, 2200);

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ background: "#ffffff", minHeight: "100vh" }}
    >
      {/* ── Gradient orbs ── */}
      <div
        style={{
          position: "absolute",
          top: -180,
          right: -120,
          width: 720,
          height: 720,
          borderRadius: "50%",
          pointerEvents: "none",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.10) 0%, rgba(124,58,237,0.03) 45%, transparent 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -100,
          left: -100,
          width: 500,
          height: 500,
          borderRadius: "50%",
          pointerEvents: "none",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 65%)",
        }}
      />

      {/* ── Dot grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(124,58,237,0.13) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.55,
        }}
      />

      {/* ── Content ── */}
      <div
        className="wrap relative z-10 w-full"
        style={{ paddingTop: "calc(66px + 3.5rem)", paddingBottom: "4rem" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 lg:gap-16 items-center">
          {/* ── LEFT: Copy ── */}
          <div>
            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-2 mb-5"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              {["SOC", "GRC", "Threat Intel"].map((s, i, a) => (
                <span key={s} className="flex items-center gap-2">
                  <span
                    className="text-[10px] font-bold tracking-widest uppercase"
                    style={{
                      color:
                        i === 0
                          ? "#3730A3"
                          : i === 1
                            ? "#7C3AED"
                            : "rgba(109,40,217,0.35)",
                    }}
                  >
                    {s}
                  </span>
                  {i < a.length - 1 && (
                    <span
                      style={{ color: "rgba(124,58,237,0.25)", fontSize: 11 }}
                    >
                      ▸
                    </span>
                  )}
                </span>
              ))}
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.07,
              }}
            >
              <h1
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(32px,4.2vw,52px)",
                  fontWeight: 900,
                  lineHeight: 1.08,
                  letterSpacing: "-0.025em",
                  color: "#0f0a1e",
                  marginBottom: 6,
                }}
              >
                Modern SOC Operations
              </h1>
              <h1
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(32px,4.2vw,52px)",
                  fontWeight: 900,
                  lineHeight: 1.08,
                  letterSpacing: "-0.025em",
                  marginBottom: 20,
                  background:
                    "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #9333EA 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Empowering Human
              </h1>
            </motion.div>

            {/* Typing */}
            <motion.p
              className="font-semibold mb-4"
              style={{
                fontSize: 15,
                minHeight: "1.4rem",
                color: "rgba(79,46,220,0.55)",
                fontFamily: "'DM Sans', sans-serif",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28 }}
            >
              <span style={{ color: "rgba(79,46,220,0.32)" }}>for </span>
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
              <motion.span
                style={{ color: "#7C3AED" }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                |
              </motion.span>
            </motion.p>

            {/* Body */}
            <motion.p
              className="leading-[1.80] mb-6"
              style={{
                fontSize: 15,
                color: "rgba(79,46,220,0.62)",
                maxWidth: 400,
                fontFamily: "'DM Sans', sans-serif",
              }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.34,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Aqua Secure AI empowers human SOC analysts with AI-powered
              monitoring, automated response, and global threat intelligence —
              unified in one platform.
            </motion.p>

            {/* Bullets */}
            <motion.div
              className="flex flex-col gap-2.5 mb-7"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.42,
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {[
                "AI-powered 24/7 threat detection and response",
                "Real-time threat intelligence with global feeds",
                "Automated GRC compliance — CTDISR, ISO 27001",
              ].map((p) => (
                <div key={p} className="flex items-start gap-2.5">
                  <span
                    className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(124,58,237,0.10)" }}
                  >
                    <ShieldCheck
                      className="w-2.5 h-2.5"
                      style={{ color: "#7C3AED" }}
                    />
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      color: "rgba(79,46,220,0.68)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {p}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3 mb-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <motion.a
                href="https://secureye.io/get-started"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-[14px] text-white"
                style={{
                  background: "linear-gradient(135deg,#7C3AED,#6D28D9)",
                  boxShadow: "0 4px 20px rgba(124,58,237,0.38)",
                  fontFamily: "'Syne', sans-serif",
                }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 6px 28px rgba(124,58,237,0.58)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.button
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-[14px]"
                style={{
                  background: "rgba(124,58,237,0.06)",
                  border: "1px solid rgba(124,58,237,0.22)",
                  color: "#6D28D9",
                  fontFamily: "'Syne', sans-serif",
                }}
                whileHover={{
                  background: "rgba(124,58,237,0.12)",
                  borderColor: "rgba(124,58,237,0.40)",
                  scale: 1.03,
                }}
                whileTap={{ scale: 0.97 }}
                onClick={onDemo}
              >
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(124,58,237,0.10)",
                    border: "1px solid rgba(124,58,237,0.22)",
                  }}
                >
                  <Play
                    className="w-2.5 h-2.5 fill-current"
                    style={{ color: "#7C3AED" }}
                  />
                </span>
                Product Overview
              </motion.button>
            </motion.div>

            {/* GRC badges */}
            <motion.div
              className="flex flex-wrap items-center gap-1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.66 }}
            >
              <span style={{ fontSize: 11, color: "rgba(79,46,220,0.38)" }}>
                GRC:
              </span>
              {["ETGRM", "CTDISR", "ISO 27001", "PCI-DSS"].map((f, i) => (
                <motion.span
                  key={f}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.07 }}
                  className="text-[10px] font-bold px-2.5 py-0.5 rounded-full"
                  style={{
                    background: "rgba(124,58,237,0.08)",
                    color: "#7C3AED",
                    border: "1px solid rgba(124,58,237,0.20)",
                  }}
                >
                  {f}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Dashboard + floating cards ── */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40, y: 8 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
          >
            {/* Ambient glow behind */}
            <div
              style={{
                position: "absolute",
                inset: -40,
                borderRadius: 40,
                pointerEvents: "none",
                background:
                  "radial-gradient(ellipse 85% 75% at 55% 50%, rgba(124,58,237,0.12) 0%, transparent 68%)",
              }}
            />

            {/* Floating metric cards */}
            <MetricCard
              icon={AlertTriangle}
              color="#EF4444"
              bg="rgba(239,68,68,0.10)"
              value="12 Threats"
              label="Blocked today"
              sub="Last updated 2m ago"
              style={{ top: -18, left: -20 }}
              delay={1.1}
            />

            <MetricCard
              icon={CheckCircle2}
              color="#10B981"
              bg="rgba(16,185,129,0.10)"
              value="SOC Active"
              label="24/7 monitoring"
              sub="All systems operational"
              style={{ top: 70, right: -28 }}
              delay={1.3}
            />

            <MetricCard
              icon={TrendingUp}
              color="#7C3AED"
              bg="rgba(124,58,237,0.10)"
              value="GRC 94%"
              label="Compliance score"
              sub="ISO 27001 certified"
              style={{ bottom: 30, right: -20 }}
              delay={1.5}
            />

            <MetricCard
              icon={Zap}
              color="#F59E0B"
              bg="rgba(245,158,11,0.10)"
              value="1 Free/Day"
              label="TIP search"
              sub="tip.aquasecure.ai"
              style={{ bottom: -16, left: 20 }}
              delay={1.7}
            />

            {/* Live badge on top of screenshot */}
            <div className="relative" style={{ maxWidth: 640, width: "100%" }}>
              <LiveBadge />

              {/* Browser chrome */}
              <div
                style={{
                  borderRadius: "16px 16px 0 0",
                  padding: "10px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "linear-gradient(180deg,#f5f0ff 0%,#ede8ff 100%)",
                  border: "1px solid rgba(124,58,237,0.16)",
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
                    background: "rgba(124,58,237,0.07)",
                    border: "1px solid rgba(124,58,237,0.14)",
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: "rgba(124,58,237,0.35)" }}
                  />
                  <span
                    className="text-[9px] font-medium"
                    style={{ color: "rgba(79,46,220,0.60)" }}
                  >
                    secureye.io/dashboard
                  </span>
                </div>
              </div>

              {/* Screenshot */}
              <div
                style={{
                  overflow: "hidden",
                  borderRadius: "0 0 16px 16px",
                  border: "1px solid rgba(124,58,237,0.18)",
                  boxShadow:
                    "0 32px 80px rgba(109,40,217,0.16), 0 8px 24px rgba(0,0,0,0.10), 0 2px 0 rgba(124,58,237,0.08)",
                }}
              >
                <motion.img
                  src="/AquaSecureAI/images/dashboard-hero.png"
                  alt="Aqua Secure AI Dashboard"
                  className="w-full block"
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 6,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
