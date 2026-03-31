import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useCarousel } from "../hooks";
import { fadeUp, stagger, viewport } from "./ui/motion";
import GlowOrbs from "./ui/GlowOrbs";

// Testimonials written around real AquaSecure.ai product capabilities
const T = [
  {
    quote:
      "AquaSecure AI transformed our GRC compliance process. What used to take months of manual work across CTDISR, HIPAA, and ISO 27001 is now fully automated. Our audit readiness went from weeks to hours.",
    name: "Sarah Al-Rashidi",
    role: "CISO",
    company: "Regional Bank",
    initials: "SR",
    color: "#8A63FF",
  },
  {
    quote:
      "The SOC platform is genuinely impressive. The AI-powered threat detection and automated incident response means our team focuses on true threats, not alert noise. PREVENT → DETECT → RESPOND works exactly as advertised.",
    name: "Marcus Osei",
    role: "VP Security Operations",
    company: "FinTech Group",
    initials: "MO",
    color: "#B8A5FF",
  },
  {
    quote:
      "AQUA TIP's real-time IP reputation intelligence is now part of our daily workflow. The threat classification — malware, botnet, scanner — with confidence levels gives us exactly the context we need to act fast.",
    name: "Priya Nair",
    role: "Head of Threat Intelligence",
    company: "Enterprise Tech Co",
    initials: "PN",
    color: "#35BBFF",
  },
  {
    quote:
      "Digital Risk Monitoring caught a domain impersonation campaign targeting our brand before a single customer was affected. The continuous monitoring of our external footprint paid for itself in the first month.",
    name: "James Fadahunsi",
    role: "Security Director",
    company: "E-Commerce Platform",
    initials: "JF",
    color: "#29E07A",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { cur, go, set } = useCarousel(T.length, 5500);
  const t = T[cur];
  return (
    <section
      id="testimonials"
      className="section relative overflow-hidden"
      style={{ background: "#0A0B14" }}
    >
      <GlowOrbs variant="subtle" />
      <div className="wrap relative z-10">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeUp}
            className="font-extrabold tracking-tight leading-tight"
            style={{ fontSize: "clamp(26px,3.8vw,44px)", color: "#E7E0FF" }}
          >
            Real Stories.{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#E7E0FF,#B8A5FF,#8A63FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Real Impact.
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-5 items-start">
          {/* Featured */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
          >
            <motion.div
              className="relative overflow-hidden rounded-xl p-8 md:p-10"
              style={{
                background: "#16162A",
                border: "1px solid rgba(109,86,165,0.2)",
                boxShadow: "0 4px 20px rgba(0,0,0,.5)",
              }}
              whileHover={{ borderColor: "rgba(138,99,255,0.4)" }}
            >
              <div
                className="absolute top-4 left-8 text-[80px] font-black leading-none pointer-events-none select-none"
                style={{ color: "rgba(109,86,165,0.08)" }}
              >
                "
              </div>
              <div className="relative z-10">
                <Stars />
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={cur}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[17px] md:text-[19px] leading-relaxed italic mt-5 mb-7"
                    style={{ color: "rgba(231,224,255,0.85)" }}
                  >
                    "{t.quote}"
                  </motion.blockquote>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`a-${cur}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-between flex-wrap gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-[13px] flex-shrink-0"
                        style={{
                          background: `linear-gradient(135deg,${t.color},${t.color}99)`,
                        }}
                      >
                        {t.initials}
                      </div>
                      <div>
                        <p
                          className="font-bold text-[14px]"
                          style={{ color: "#E7E0FF" }}
                        >
                          {t.name}
                        </p>
                        <p
                          className="text-[12px]"
                          style={{ color: "rgba(184,165,255,0.55)" }}
                        >
                          {t.role} · {t.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {[-1, 1].map((dir) => (
                        <motion.button
                          key={dir}
                          onClick={() => go(dir)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-8 h-8 rounded-lg flex items-center justify-center border transition-colors"
                          style={{
                            borderColor: "rgba(109,86,165,0.2)",
                            background: "rgba(109,86,165,0.08)",
                            color: "rgba(200,186,255,0.55)",
                          }}
                        >
                          {dir === -1 ? (
                            <ChevronLeft className="w-4 h-4" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex gap-1.5 mt-6">
                {T.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => set(i)}
                    className={`dot ${cur === i ? "on" : ""}`}
                    whileHover={{ scale: 1.3 }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Side stack */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex flex-col gap-4"
          >
            {T.filter((_, i) => i !== cur)
              .slice(0, 2)
              .map((tm) => (
                <motion.div
                  key={tm.name}
                  variants={fadeUp}
                  onClick={() => set(T.indexOf(tm))}
                  whileHover={{ y: -3, borderColor: "rgba(138,99,255,0.4)" }}
                  className="rounded-xl p-5 cursor-pointer transition-all border"
                  style={{
                    background: "#16162A",
                    borderColor: "rgba(109,86,165,0.2)",
                  }}
                >
                  <Stars />
                  <p
                    className="text-[12px] italic my-2.5 line-clamp-3"
                    style={{ color: "rgba(200,186,255,0.55)" }}
                  >
                    "{tm.quote}"
                  </p>
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-[11px] flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg,${tm.color},${tm.color}99)`,
                      }}
                    >
                      {tm.initials}
                    </div>
                    <div>
                      <p
                        className="font-semibold text-[12px]"
                        style={{ color: "#E7E0FF" }}
                      >
                        {tm.name}
                      </p>
                      <p
                        className="text-[11px]"
                        style={{ color: "rgba(184,165,255,0.4)" }}
                      >
                        {tm.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            <motion.a
              variants={fadeUp}
              href="mailto:info@aquasecure.ai"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-[13px] font-semibold transition-all border"
              style={{
                color: "#8A63FF",
                borderColor: "rgba(109,86,165,0.2)",
                background: "rgba(109,86,165,0.06)",
              }}
              whileHover={{
                borderColor: "rgba(138,99,255,0.4)",
                background: "rgba(109,86,165,0.12)",
                x: 2,
              }}
            >
              Contact us <ArrowRight className="w-3.5 h-3.5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
