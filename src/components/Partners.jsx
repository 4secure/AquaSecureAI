import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { fadeUp, fadeLeft, fadeRight, stagger, viewport } from "./ui/motion";

// Real contact info and managed services from aquasecure.ai
const SERVICES = [
  {
    name: "GRC & Compliance",
    desc: "Automate CTDISR, PCI-DSS, ISO 27001",
  },
  { name: "Managed SOC", desc: "24/7 threat detection and incident response" },
  {
    name: "Threat Intel Feeds",
    desc: "Global IOC feeds and predictive insights",
  },
  { name: "Training", desc: "Workforce cybersecurity awareness programs" },
];

const ORBITAL_NODES = [
  { name: "GRC", x: 50, y: 8 },
  { name: "SOC", x: 85, y: 28 },
  { name: "TIP", x: 90, y: 65 },
  { name: "DRM", x: 32, y: 92 },
  { name: "Assets", x: 10, y: 65 },
  { name: "Training", x: 14, y: 28 },
  { name: "API", x: 35, y: 8 },
];

export default function Partners({ onDemo }) {
  return (
    <section
      className="section relative overflow-hidden"
      style={{ background: "#0A0B14" }}
    >
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Orbital diagram showing all 7 products orbiting the core platform */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="relative items-center justify-center hidden lg:flex"
          >
            <div className="relative w-[300px] h-[300px]">
              {[100, 140, 180].map((r, i) => (
                <motion.div
                  key={r}
                  className="absolute rounded-full border"
                  style={{
                    width: r * 2,
                    height: r * 2,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    borderColor: `rgba(109,86,165,${0.1 + i * 0.06})`,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30 + i * 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
              {/* Center hub */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[76px] h-[76px] rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg,#8A63FF,#6D56A5)",
                  boxShadow: "0 0 40px rgba(138,99,255,0.5)",
                }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(138,99,255,0.3)",
                    "0 0 50px rgba(138,99,255,0.6)",
                    "0 0 20px rgba(138,99,255,0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-white font-black text-[10px] text-center leading-tight">
                  AQUA
                  <br />
                  SECURE
                </span>
              </motion.div>
              {/* Orbiting module nodes */}
              {ORBITAL_NODES.map((n, i) => (
                <motion.div
                  key={n.name}
                  className="absolute rounded-pill text-[10px] font-bold cursor-default"
                  style={{
                    left: `${n.x}%`,
                    top: `${n.y}%`,
                    transform: "translate(-50%,-50%)",
                    background: "#16162A",
                    border: "1px solid rgba(109,86,165,0.25)",
                    color: "rgba(200,186,255,0.65)",
                    padding: "2px 8px",
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewport}
                  transition={{
                    delay: i * 0.08,
                    type: "spring",
                    stiffness: 220,
                  }}
                  whileHover={{
                    borderColor: "rgba(138,99,255,0.55)",
                    color: "#E7E0FF",
                    scale: 1.1,
                  }}
                >
                  {n.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: real content */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <motion.p variants={fadeUp} className="badge mb-5">
              MANAGED SERVICES
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-extrabold tracking-tight leading-tight mb-4"
              style={{ fontSize: "clamp(26px,3.8vw,44px)", color: "#E7E0FF" }}
            >
              Complete Security,
              <br />
              One Platform:
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg,#E7E0FF,#B8A5FF,#8A63FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Aqua Secure AI.
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lead leading-[1.8] mb-7 max-w-[400px]"
              style={{ color: "rgba(200,186,255,0.60)" }}
            >
              Managed services across all seven security domains — GRC, SOC,
              Threat Intelligence, Asset Management, and Training & Awareness.
            </motion.p>

            {/* Service list */}
            <motion.div
              variants={stagger(0.06)}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="grid grid-cols-2 gap-2.5 mb-7"
            >
              {SERVICES.map((s) => (
                <motion.div
                  key={s.name}
                  variants={fadeUp}
                  whileHover={{ borderColor: "rgba(138,99,255,0.4)", y: -2 }}
                  className="p-3 rounded-lg border transition-all"
                  style={{
                    background: "rgba(109,86,165,0.07)",
                    borderColor: "rgba(109,86,165,0.18)",
                  }}
                >
                  <p
                    className="text-[13px] font-semibold mb-0.5"
                    style={{ color: "#E7E0FF" }}
                  >
                    {s.name}
                  </p>
                  <p
                    className="text-[11px]"
                    style={{ color: "rgba(184,165,255,0.55)" }}
                  >
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <motion.a
                href="https://secureye.io/get-started"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 6px 28px rgba(138,99,255,.70)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                Get Started <ExternalLink className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="mailto:info@aquasecure.ai"
                className="btn-outline inline-flex items-center gap-2"
                whileHover={{ borderColor: "rgba(138,99,255,0.6)" }}
              >
                Contact Sales
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
