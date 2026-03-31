import { motion } from "framer-motion";
import { ArrowRight, Shield, Activity, Globe } from "lucide-react";
import { fadeUp, stagger, cardHover, viewport } from "./ui/motion";

// Real resources for Aqua Secure AI products
const RESOURCES = [
  {
    type: "Product Guide",
    icon: Shield,
    color: "#8A63FF",
    bg: "rgba(138,99,255,0.1)",
    date: "2026",
    title: "GRC Automation Guide: CTDISR, PCI-DSS & ISO 27001",
    desc: "Step-by-step guide to automating compliance across the most common regulatory frameworks using Aqua Secure AI's GRC module.",
    link: "mailto:info@aquasecure.ai",
  },
  {
    type: "Platform Guide",
    icon: Activity,
    color: "#35BBFF",
    bg: "rgba(53,187,255,0.1)",
    date: "2026",
    title: "Modern SOC Operations: AI SecOps for Human Analysts",
    desc: "How Aqua Secure AI's SOC platform empowers analyst investigation, case management, and automated incident response workflows.",
    link: "mailto:info@aquasecure.ai",
  },
  {
    type: "TIP Guide",
    icon: Globe,
    color: "#29E07A",
    bg: "rgba(41,224,122,0.1)",
    date: "2026",
    title: "AQUA TIP: Real-Time IP Reputation Intelligence",
    desc: "Get started with the Threat Intelligence Platform — IP lookup, threat classification by type (malware, botnet, scanner), and unified risk scoring.",
    link: "https://tip.aquasecure.ai",
  },
];

export default function Resources() {
  return (
    <section className="section" style={{ background: "#111122" }}>
      <div className="wrap">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center mb-5"
        >
          <motion.p
            variants={fadeUp}
            className="text-[11px] font-bold uppercase tracking-[2px] mb-2"
            style={{ color: "rgba(184,165,255,0.45)" }}
          >
            Learn More · Know More
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-extrabold tracking-tight"
            style={{ fontSize: "clamp(24px,3.2vw,40px)", color: "#E7E0FF" }}
          >
            Resources
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10"
        >
          {RESOURCES.map((r) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                variants={fadeUp}
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <motion.a
                  href={r.link}
                  target={r.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="block cursor-pointer group h-full"
                  variants={cardHover}
                >
                  <div
                    className="rounded-xl overflow-hidden flex flex-col h-full"
                    style={{
                      background: "#16162A",
                      border: "1px solid rgba(109,86,165,0.2)",
                      transition: "all .3s ease",
                    }}
                  >
                    {/* Thumbnail */}
                    <div
                      className="h-40 flex items-center justify-center relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg,${r.bg} 0%,rgba(10,11,20,0.9) 100%)`,
                      }}
                    >
                      <div className="absolute inset-0 bg-grid opacity-30" />
                      <motion.div whileHover={{ scale: 1.15, rotate: 8 }}>
                        <Icon
                          className="w-12 h-12 opacity-30"
                          style={{ color: r.color }}
                        />
                      </motion.div>
                    </div>
                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-pill border"
                          style={{
                            background: `${r.bg}`,
                            color: r.color,
                            borderColor: `${r.color}30`,
                          }}
                        >
                          {r.type}
                        </span>
                        <span
                          className="text-[11px]"
                          style={{ color: "rgba(184,165,255,0.35)" }}
                        >
                          {r.date}
                        </span>
                      </div>
                      <h3
                        className="text-[14px] font-bold mb-2 leading-snug group-hover:transition-colors"
                        style={{ color: "#E7E0FF" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#B8A5FF")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#E7E0FF")
                        }
                      >
                        {r.title}
                      </h3>
                      <p
                        className="text-[13px] leading-relaxed flex-1"
                        style={{ color: "rgba(200,186,255,0.55)" }}
                      >
                        {r.desc}
                      </p>
                      <motion.div
                        className="flex items-center gap-1.5 mt-4 text-[13px] font-semibold"
                        style={{ color: r.color }}
                        whileHover={{ x: 4 }}
                      >
                        {r.link.startsWith("http")
                          ? "Open platform"
                          : "Contact us"}{" "}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </motion.div>
                    </div>
                  </div>
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center"
        >
          <motion.a
            href="https://aquasecure.ai/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
            whileHover={{ borderColor: "rgba(138,99,255,0.6)", y: -2 }}
          >
            Visit our Blog <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
