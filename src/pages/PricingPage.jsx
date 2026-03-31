import { motion } from "framer-motion";
import { Check, ExternalLink, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import PageHero from "../components/ui/PageHero";
import { fadeUp, scaleIn, stagger, viewport } from "../components/ui/motion";
import GlowOrbs from "../components/ui/GlowOrbs";

// Real plans: TIP has a free tier mentioned on the site
const PLANS = [
  {
    name: "AQUA TIP Free",
    price: "$0",
    per: "/forever",
    desc: "Real-Time Threat Intelligence Platform",
    highlight: false,
    cta: "Try AQUA TIP",
    ctaLink: "https://tip.aquasecure.ai",
    features: [
      ["1 IP search per day", true],
      ["Real-time IP reputation lookup", true],
      ["Threat classification (malware/botnet/scanner)", true],
      ["Unified risk scoring", true],
      ["No credit card required", true],
      ["Advanced feeds & bulk lookup", false],
      ["API access", false],
      ["SOC platform access", false],
    ],
  },
  {
    name: "AQUA TIP Pro",
    price: "Contact",
    per: "",
    desc: "Full Threat Intelligence Platform Access",
    highlight: true,
    cta: "Get Pricing",
    ctaLink: "mailto:info@aquasecure.ai",
    features: [
      ["Unlimited IP searches", true],
      ["Real-time IP reputation lookup", true],
      ["Advanced threat classification", true],
      ["Multi-source risk scoring", true],
      ["Bulk IP lookup", true],
      ["API access for integration", true],
      ["Priority support", true],
      ["Custom feeds", true],
    ],
  },
  {
    name: "Enterprise Platform",
    price: "Custom",
    per: "",
    desc: "Full Aqua Secure AI Platform",
    highlight: false,
    cta: "Contact Sales",
    ctaLink: "mailto:info@aquasecure.ai",
    features: [
      ["GRC compliance automation", true],
      ["24/7 SOC operations", true],
      ["Threat intelligence platform", true],
      ["Asset management", true],
      ["Training & awareness programs", true],
      ["Dedicated account manager", true],
    ],
  },
];

const FAQ = [
  {
    q: "What is included in the free TIP plan?",
    a: "The AQUA TIP free plan at tip.aquasecure.ai gives you 1 IP search per day with full real-time IP reputation lookup, threat classification, and risk scoring. No credit card required.",
  },
  {
    q: "How do I access the full SOC platform?",
    a: "The full Aqua Secure AI platform (GRC, SOC, Threat Intelligence, Asset Management, Training) is available via secureye.io. Contact info@aquasecure.ai for pricing.",
  },
  {
    q: "What GRC frameworks are supported?",
    a: "Aqua Secure AI automates compliance for CTDISR, ETGRM, ISO 27001 and more. Custom framework support is also available.",
  },
  {
    q: "Is managed SOC service available?",
    a: "Yes — managed services include incident creation, workflow management, detection and response, and threat hunting. Contact info@aquasecure.ai to discuss managed SOC options.",
  },
  {
    q: "How do I get started?",
    a: "Sign up at secureye.io/get-started or try AQUA TIP for free at tip.aquasecure.ai. For enterprise enquiries, email info@aquasecure.ai.",
  },
];

export default function PricingPage({ onDemo }) {
  return (
    <>
      <Helmet>
        <title>Pricing — Aqua Secure AI</title>
      </Helmet>
      <PageHero
        badge="Pricing"
        title="Simple, transparent"
        accent="pricing"
        sub="Start with AQUA TIP free — 1 search per day, no credit card. Contact us for full platform pricing."
      />

      <section
        className="section relative overflow-hidden"
        style={{ background: "#0A0B14" }}
      >
        <GlowOrbs variant="default" />
        <div className="wrap relative z-10">
          {/* Plans */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20"
          >
            {PLANS.map((p, i) => (
              <motion.div
                key={p.name}
                variants={scaleIn}
                className="relative rounded-xl p-7 flex flex-col border transition-all"
                style={{
                  background: "#16162A",
                  borderColor: p.highlight
                    ? "rgba(138,99,255,0.55)"
                    : "rgba(109,86,165,0.2)",
                  boxShadow: p.highlight
                    ? "0 0 0 1px rgba(138,99,255,0.55),0 20px 60px rgba(109,86,165,0.18)"
                    : "none",
                }}
                whileHover={{ y: p.highlight ? 0 : -5 }}
              >
                {p.highlight && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-[11px] font-bold px-5 py-1.5 rounded-pill whitespace-nowrap"
                    style={{
                      background: "linear-gradient(135deg,#8A63FF,#6D56A5)",
                      boxShadow: "0 4px 18px rgba(138,99,255,0.5)",
                    }}
                  >
                    Most Popular
                  </div>
                )}
                <p
                  className="text-[12px] font-bold uppercase tracking-widest mb-3"
                  style={{
                    color: p.highlight ? "#8A63FF" : "rgba(184,165,255,0.55)",
                  }}
                >
                  {p.name}
                </p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    className="text-[44px] font-black leading-none tracking-tight"
                    style={{ color: "#E7E0FF" }}
                  >
                    {p.price}
                  </span>
                  {p.per && (
                    <span
                      className="text-[15px]"
                      style={{ color: "rgba(200,186,255,0.45)" }}
                    >
                      {p.per}
                    </span>
                  )}
                </div>
                <p
                  className="text-[13px] mb-6"
                  style={{ color: "rgba(200,186,255,0.50)" }}
                >
                  {p.desc}
                </p>
                <div
                  className="h-px mb-6"
                  style={{ background: "rgba(109,86,165,0.15)" }}
                />
                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {p.features.map(([f, inc]) => (
                    <li key={f} className="flex items-center gap-3">
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background: inc
                            ? "rgba(138,99,255,0.15)"
                            : "rgba(255,255,255,0.04)",
                        }}
                      >
                        {inc ? (
                          <Check
                            className="w-2.5 h-2.5"
                            style={{ color: "#8A63FF" }}
                            strokeWidth={2.5}
                          />
                        ) : (
                          <span
                            style={{
                              color: "rgba(184,165,255,0.25)",
                              fontSize: 10,
                            }}
                          >
                            —
                          </span>
                        )}
                      </span>
                      <span
                        className="text-[13px]"
                        style={{
                          color: inc
                            ? "rgba(200,186,255,0.65)"
                            : "rgba(184,165,255,0.28)",
                        }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <motion.a
                  href={p.ctaLink}
                  target={p.ctaLink.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`${p.highlight ? "btn-primary" : "btn-outline"} w-full justify-center py-3.5 text-[14px] inline-flex items-center gap-2`}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: p.highlight
                      ? "0 6px 28px rgba(138,99,255,.70)"
                      : undefined,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {p.cta}
                  {p.ctaLink.startsWith("http") ? (
                    <ExternalLink className="w-3.5 h-3.5" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5" />
                  )}
                </motion.a>
              </motion.div>
            ))}
          </motion.div>

          {/* FAQ */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="max-w-[700px] mx-auto"
          >
            <motion.h3
              variants={fadeUp}
              className="font-extrabold tracking-tight text-center mb-10"
              style={{ fontSize: "clamp(22px,2.5vw,32px)", color: "#E7E0FF" }}
            >
              Frequently asked questions
            </motion.h3>
            <div className="flex flex-col gap-4">
              {FAQ.map((item) => (
                <motion.div
                  key={item.q}
                  variants={fadeUp}
                  className="rounded-xl p-6 border transition-all"
                  style={{
                    background: "#16162A",
                    borderColor: "rgba(109,86,165,0.2)",
                  }}
                  whileHover={{ borderColor: "rgba(138,99,255,0.35)" }}
                >
                  <p
                    className="font-semibold text-[15px] mb-2"
                    style={{ color: "#E7E0FF" }}
                  >
                    {item.q}
                  </p>
                  <p
                    className="text-[14px] leading-relaxed"
                    style={{ color: "rgba(200,186,255,0.58)" }}
                  >
                    {item.a}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} className="text-center mt-10">
              <p
                className="text-[14px] mb-3"
                style={{ color: "rgba(200,186,255,0.50)" }}
              >
                Have more questions? Email us directly:
              </p>
              <motion.a
                href="mailto:info@aquasecure.ai"
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 6px 28px rgba(138,99,255,.70)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                info@aquasecure.ai <ExternalLink className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
