import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Database,
  Activity,
  Globe,
  Wifi,
  Bug,
  Box,
  ShieldCheck,
  Check,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import PageHero from "../components/ui/PageHero";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  stagger,
  viewport,
} from "../components/ui/motion";
import GlowOrbs from "../components/ui/GlowOrbs";

const PRODUCTS = [
  {
    icon: ShieldCheck,
    slug: "grc",
    name: "GRC",
    tagline: "Governance, Risk & Compliance",
    color: "#6D56A5",
    bg: "rgba(109,86,165,0.10)",
    bd: "rgba(109,86,165,0.25)",
    img: "/images/grc-dashboard.png",
    headline: "Automate compliance across every major framework",
    desc: "Automate compliance with ETHRM, CTDISR, ISO 27001, and more. Centralise governance, risk management, and compliance workflows with real-time audit readiness.",
    features: [
      "ISO 27001 framework",
      "Custom compliance frameworks",
      "Executive risk dashboards",
    ],
  },
  {
    icon: Database,
    slug: "siem",
    name: "Aqua SIEM",
    tagline: "Security Information & Event Management",
    color: "#8A63FF",
    bg: "rgba(138,99,255,0.10)",
    bd: "rgba(138,99,255,0.25)",
    img: "/images/Aqua-siem-dashboard.png",
    headline: "Centralise and correlate security events in real time",
    desc: "Aqua SIEM collects, correlates, and analyses security events across your entire infrastructure. Get real-time log management, threat detection rules, dashboards, and compliance reporting.",
    features: [
      "Real-time log collection & management",
      "Advanced event correlation rules",
      "Threat detection dashboards",
      "Compliance reporting",
      "Custom alerting & escalation",
      "SIEM-as-a-Service option",
    ],
  },
  {
    icon: Activity,
    slug: "soc",
    name: "SOC",
    tagline: "Security Operations Center",
    color: "#8A63FF",
    bg: "rgba(138,99,255,0.10)",
    bd: "rgba(138,99,255,0.25)",
    img: "/images/soc-dashboard.png",
    headline: "AI-powered 24/7 threat detection and defense",
    desc: "AI-powered monitoring and automated response for 24/7 threat detection. Empower human SOC analysts with AI SecOps — investigation, case management, incident workflows, and threat hunting.",
    features: [
      "24/7 AI-powered monitoring",
      "Automated incident creation",
      "SOC analyst investigation tools",
      "Case management workflows",
      "Detection and response automation",
      "Threat hunting capabilities",
    ],
  },

  {
    icon: Box,
    slug: "asset-management",
    name: "Asset Management",
    tagline: "Unified Asset Inventory",
    color: "#8A63FF",
    bg: "rgba(138,99,255,0.10)",
    bd: "rgba(138,99,255,0.25)",
    img: "/images/assets-dashboard.png",
    headline: "Know exactly what you have and who owns it",
    desc: "Unified asset inventory with real-time ownership and operational context. Full asset lifecycle management across cloud, on-prem, and hybrid environments with risk scoring.",
    features: [
      "Unified asset discovery",
      "Real-time ownership tracking",
      "Operational context mapping",
      "Cloud & on-prem coverage",
      "Asset risk scoring",
      "CMDB integration",
    ],
  },
  {
    icon: Wifi,
    slug: "dark-web",
    name: "Dark Web",
    tagline: "Dark Web Monitoring & Intelligence",
    color: "#8A63FF",
    bg: "rgba(138,99,255,0.10)",
    bd: "rgba(138,99,255,0.25)",
    img: "/images/darkweb-dashboard.png",
    headline: "Monitor the dark web before attackers act",
    desc: "Continuously scan dark web forums, marketplaces, and data breach repositories for mentions of your organisation, exposed credentials, and leaked assets.",
    features: [
      "Credential & data leak monitoring",
      "Brand & domain monitoring",
      "Dark web forum scanning",
      "Breach data detection",
      "Automated alert notifications",
      "Executive risk reporting",
    ],
  },
  // {
  //   icon: Bug, slug:'phishbot', name:'Phishbot', tagline:'Phishing Campaign Management',
  //   color:'#8A63FF', bg:'rgba(138,99,255,0.10)', bd:'rgba(138,99,255,0.25)',
  //   img:'/images/product-phishbot.png',
  //   headline:'Build a human firewall through realistic phishing tests',
  //   desc:'Launch automated phishing simulation campaigns to test employee awareness. Track click rates, identify at-risk staff, and deliver targeted training to strengthen your human firewall.',
  //   features:['Automated phishing campaigns','Realistic email templates','Click-through tracking','At-risk employee identification','Automated training assignment','Campaign performance dashboards'],
  // },
  {
    icon: Globe,
    slug: "threat-intel",
    name: "Threat Intelligence",
    tagline: "Global Cyber Threat Intel",
    color: "#8A63FF",
    bg: "rgba(138,99,255,0.10)",
    bd: "rgba(138,99,255,0.25)",
    img: "/images/tip-dashboard.jpeg",
    headline: "Identify, analyze, and act on global cyber threats",
    desc: "AI-powered intelligence feeds and predictive insights give you visibility into global threat actors, attack campaigns, and emerging TTPs before they reach your infrastructure.",
    features: [
      "AI-powered IOC feeds",
      "Predictive threat insights",
      "Global threat actor profiling",
      "Real-time intelligence correlation",
      "Dark web monitoring",
      "Threat classification by type",
    ],
  },
];

// Image placeholder / actual image
function ProductImage({ img, color, name }) {
  return (
    <div className="relative w-full">
      {/* Frame — no aspect ratio, natural image height */}
      <div
        className="relative rounded-2xl overflow-hidden border"
        style={{
          borderColor: "rgba(138,99,255,0.35)",
          boxShadow: "0 4px 24px rgba(138,99,255,0.12)",
          background: "#0d0c1a",
        }}
      >
        {/* Top bar chrome */}
        <div
          className="flex items-center px-3 gap-1.5 h-8 flex-shrink-0"
          style={{
            background: "rgba(13,12,26,0.95)",
            borderBottom: "1px solid rgba(138,99,255,0.15)",
          }}
        >
          <div
            className="w-2.5 h-2.5 rounded-full"
            style={{ background: "#FF5C5C" }}
          />
          <div
            className="w-2.5 h-2.5 rounded-full"
            style={{ background: "#FFB020" }}
          />
          <div
            className="w-2.5 h-2.5 rounded-full"
            style={{ background: "#29E07A" }}
          />
          <div
            className="flex-1 mx-3 h-4 rounded-md"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />
        </div>

        {/* Screenshot — natural size, no crop, no zoom */}
        <img
          src={img}
          alt={`${name} dashboard`}
          className="w-full h-auto block"
          style={{ background: "#0d0c1a" }}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />

        {/* Placeholder — hidden by default */}
        <div
          className="flex-col items-center justify-center gap-3 py-16"
          style={{ display: "none", background: "#0d0c1a" }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center border"
            style={{
              background: "rgba(138,99,255,0.08)",
              borderColor: "rgba(138,99,255,0.20)",
            }}
          >
            <svg
              className="w-7 h-7 opacity-30"
              fill="none"
              stroke="rgba(138,99,255,0.8)"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
          <p
            className="text-[12px] font-semibold"
            style={{ color: "rgba(138,99,255,0.60)" }}
          >
            {name} screenshot
          </p>
          <p
            className="text-[10px] text-center px-6"
            style={{ color: "rgba(255,255,255,0.20)" }}
          >
            public{img}
          </p>
        </div>
      </div>
    </div>
  );
}

function ProductSection({ p, idx }) {
  const Icon = p.icon;
  const isEven = idx % 2 === 0;
  const isDark = idx % 2 !== 0;
  const bg = isDark ? "#f0eaff" : "#ffffff";
  const textH = "#1e1b4b";
  const textBody = "rgba(60,50,120,0.65)";
  const textFeat = "rgba(60,50,120,0.70)";
  const divider = "rgba(109,86,165,0.10)";

  return (
    <div style={{ background: bg }}>
      <div className="relative mb-4 pt-6">
        <motion.div
          className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto shadow-sm"
          style={{ background: p.bg }}
          whileHover={{ y: -3 }}
        >
          <Icon
            className="w-6 h-6"
            style={{ color: p.color }}
            strokeWidth={1.6}
          />
        </motion.div>
        <div className="text-center mt-2">
          <h3 className="text-2xl font-black mb-1" style={{ color: textH }}>
            {p.name}
          </h3>
          <span
            className="inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded"
            style={{ background: `${p.color}10`, color: p.color }}
          >
            {p.tagline}
          </span>
        </div>
      </div>
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="wrap grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-2 pb-8 border-b last:border-0"
        style={{ borderColor: divider }}
      >
        {/* ── Text ── */}
        <motion.div
          variants={isEven ? fadeLeft : fadeRight}
          className={!isEven ? "lg:order-2" : ""}
        >
          <h4
            className="font-bold leading-tight mb-4"
            style={{ fontSize: "clamp(18px,2.2vw,26px)", color: textH }}
          >
            {p.headline}
          </h4>

          <p
            className="text-[14px] leading-[1.85] mb-6"
            style={{ color: textBody }}
          >
            {p.desc}
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7">
            {p.features.map((f, fi) => (
              <motion.li
                key={f}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{
                  delay: fi * 0.055,
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="flex items-center gap-2.5"
              >
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: `${p.color}18` }}
                >
                  <Check
                    className="w-3 h-3"
                    style={{ color: p.color }}
                    strokeWidth={2.5}
                  />
                </span>
                <span className="text-[13px]" style={{ color: textFeat }}>
                  {f}
                </span>
              </motion.li>
            ))}
          </ul>

          <div className="flex gap-3">
            <motion.a
              href="https://secureye.io/get-started"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-[14px] inline-flex items-center gap-2"
              whileHover={{
                scale: 1.04,
                boxShadow: "0 6px 28px rgba(138,99,255,.70)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              Get Started <ExternalLink className="w-3.5 h-3.5" />
            </motion.a>
            <Link to={`/products/${p.slug}`}>
              <motion.span
                className="btn-outline text-[14px] inline-flex items-center gap-2 cursor-pointer"
                style={{ color: "#1e1b4b" }}
                whileHover={{ borderColor: "rgba(138,99,255,0.55)", x: 2 }}
              >
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </motion.span>
            </Link>
          </div>
        </motion.div>

        {/* ── Image ── */}
        <motion.div
          variants={isEven ? fadeRight : fadeLeft}
          className={!isEven ? "lg:order-1" : ""}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
        >
          <ProductImage img={p.img} color={p.color} name={p.name} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function ProductsPage({ onDemo }) {
  return (
    <>
      <Helmet>
        <title>Products — Aqua Secure AI</title>
      </Helmet>

      <PageHero
        badge="Our Products"
        title="Seven modules,"
        accent="one unified platform"
        sub="Aqua SIEM · SOC · Threat Intelligence · Dark Web · Phishbot · Asset Management · GRC"
        cta="Get Started Free"
        onCta={() => window.open("https://secureye.io", "_blank")}
      />

      <div>
        {PRODUCTS.map((p, i) => (
          <ProductSection key={p.name} p={p} idx={i} />
        ))}
      </div>

      {/* TIP callout */}
      <section
        className="section-sm relative overflow-hidden"
        style={{ background: "#111122" }}
      >
        <GlowOrbs variant="subtle" />
        <div className="wrap relative z-10">
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="rounded-xl p-10 md:p-14 text-center relative overflow-hidden border"
            style={{
              background: "linear-gradient(135deg,#16162A,#1b1439,#16162A)",
              borderColor: "rgba(138,99,255,0.22)",
            }}
          >
            <GlowOrbs variant="subtle" />
            <div className="relative z-10">
              <motion.p variants={fadeUp} className="badge mb-4">
                STANDALONE PRODUCT
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-extrabold tracking-tight mb-4"
                style={{ fontSize: "clamp(24px,3vw,40px)", color: "#E7E0FF" }}
              >
                AQUA TIP — Threat Intelligence Platform
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-lead mb-3 max-w-[540px] mx-auto"
                style={{ color: "rgba(200,186,255,0.60)" }}
              >
                Know Your Threats Before They Strike. Real-time IP reputation
                intelligence powered by global threat feeds.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-[14px] mb-7"
                style={{ color: "rgba(184,165,255,0.45)" }}
              >
                Real-Time IP Lookup · Threat Classification · Risk Scoring · 1
                free search/day
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
                <Link to="/contact">
                  <motion.span
                    className="btn-outline text-[15px] px-9 py-4 inline-flex items-center gap-2 cursor-pointer"
                    whileHover={{ borderColor: "rgba(138,99,255,0.6)" }}
                  >
                    Contact Sales
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
