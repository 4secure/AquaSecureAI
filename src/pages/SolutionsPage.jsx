import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Activity,
  Globe,
  Mail,
  BookOpen,
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

const SOLUTIONS = [
  {
    icon: Activity,
    slug: "manage-siem",
    name: "Manage SIEM",
    tagline: "Managed SIEM Service",
    color: "#8A63FF",
    img: "/assets/images/manage-siem-dashboard.png",
    bg: "rgba(138,99,255,0.10)",
    headline: "Enterprise SIEM without the complexity",
    desc: "Let Aqua Secure AI manage your SIEM end-to-end — log collection, rule tuning, event correlation, and alerting — so your team focuses on response, not maintenance.",
    features: [
      "Fully managed log collection & ingestion",
      "Continuous rule tuning & optimisation",
      "Real-time event correlation & alerting",
      "Compliance-ready reporting",
      "Multi-tenant & multi-source support",
      "SIEM-as-a-Service with 24/7 coverage",
    ],
  },
  {
    icon: Mail,
    slug: "dmarc",
    name: "DMARC",
    tagline: "Email Authentication & Anti-Spoofing",
    color: "#8A63FF",
    img: "/assets/images/dmarc-dashboard.png",
    bg: "rgba(138,99,255,0.10)",
    headline: "Stop email fraud before it reaches your inbox",
    desc: "Deploy and manage DMARC, DKIM, and SPF authentication to protect your domain from spoofing, phishing, and business email compromise attacks.",
    features: [
      "DMARC, DKIM & SPF deployment",
      "Real-time email authentication reporting",
      "Spoofing & phishing detection",
      "Brand protection monitoring",
      "Guided policy enforcement",
      "Forensic reporting & incident alerts",
    ],
  },
  {
    icon: Globe,
    slug: "attack-surface",
    name: "Attack Surface",
    tagline: "Attack Surface Management",
    color: "#8A63FF",
    img: "/assets/images/attack-dashboard.png",
    bg: "rgba(138,99,255,0.10)",
    headline: "See your organisation the way attackers do",
    desc: "Continuously discover and monitor your external digital footprint — domains, IPs, open ports, and exposed services — before attackers exploit unknown assets.",
    features: [
      "Continuous external asset discovery",
      "Domain & subdomain enumeration",
      "Open port & service monitoring",
      "Exposure risk scoring",
      "Shadow IT detection",
      "Actionable remediation guidance",
    ],
  },
  // {
  //   icon: Activity,
  //   slug: 'Phishing-Campaigns',
  //   name: 'Phishing Campaigns',
  //   tagline: 'Phishing Simulation & Awareness',
  //   color: '#8A63FF',
  //   bg: 'rgba(138,99,255,0.10)',
  //   headline: 'Test your human firewall with real-world simulations',
  //   desc: 'Launch targeted phishing simulation campaigns. Identify at-risk employees, measure click rates, and automatically enrol them in awareness training.',
  //   features: ['Realistic phishing email templates', 'Targeted campaign scheduling', 'Click-through & credential capture tracking', 'At-risk employee identification', 'Automated training enrolment on failure', 'Campaign performance dashboards'],
  // },
  {
    icon: BookOpen,
    slug: "e-learning",
    name: "E-learning",
    tagline: "Cybersecurity Training & Education",
    img: "/assets/images/elearning-dashboard.png",
    color: "#8A63FF",
    bg: "rgba(138,99,255,0.10)",
    headline: "Build a security-aware culture",
    desc: "Role-based cybersecurity e-learning modules covering phishing awareness and compliance requirements — trackable, measurable, and tailored to your team.",
    features: [
      "Role-based learning paths",
      "Phishing awareness modules",
      "Compliance training (GDPR, ISO 27001)",
      "Progress tracking & completion reporting",
      "Custom training content support",
      "Automated reminders & scheduling",
    ],
  },
  // {
  //   icon: ShieldCheck,
  //   slug: 'compliance-management',
  //   name: 'Compliance Management',
  //   tagline: 'GRC & Regulatory Compliance',
  //   color: '#8A63FF',
  //   bg: 'rgba(138,99,255,0.10)',
  //   headline: 'Automate compliance across every major framework',
  //   desc: 'Centralise your governance, risk, and compliance workflows with real-time audit readiness, automated evidence collection, and continuous framework monitoring.',
  //   features: ['GDPR, HIPAA, PCI-DSS, ISO 27001', 'Automated evidence collection', 'Continuous compliance monitoring', 'Audit-ready reporting', 'Risk register & treatment workflows', 'Executive risk dashboards'],
  // },
];

function SolutionsImage({ img, color, name }) {
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

function SolutionSection({ s, idx }) {
  const Icon = s.icon;
  const isEven = idx % 2 === 0;
  const isDark = idx % 2 !== 0;
  const bg = isDark ? "#f0eaff" : "#ffffff";
  const textH = "#1e1b4b";
  const textBody = "rgba(60,50,120,0.65)";
  const textFeat = "rgba(60,50,120,0.70)";
  const divider = "rgba(109,86,165,0.10)";

  return (
    <div style={{ background: bg }}>
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="wrap grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 border-b last:border-0"
        style={{ borderColor: divider }}
      >
        {/* ── Text ── */}
        <motion.div
          variants={isEven ? fadeLeft : fadeRight}
          className={!isEven ? "lg:order-2" : ""}
        >
          <div className="flex items-center gap-3 mb-5">
            <motion.div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: s.bg }}
              whileHover={{ scale: 1.14, rotate: 7 }}
              transition={{ type: "spring", stiffness: 320, damping: 16 }}
            >
              <Icon
                className="w-6 h-6"
                style={{ color: s.color }}
                strokeWidth={1.8}
              />
            </motion.div>
            <div>
              <p
                className="text-[11px] font-bold uppercase tracking-widest"
                style={{ color: s.color }}
              >
                {s.tagline}
              </p>
              <h3
                className="text-[22px] font-extrabold"
                style={{ color: textH }}
              >
                {s.name}
              </h3>
            </div>
          </div>

          <h4
            className="font-bold leading-tight mb-4"
            style={{ fontSize: "clamp(18px,2.2vw,26px)", color: textH }}
          >
            {s.headline}
          </h4>

          <p
            className="text-[14px] leading-[1.85] mb-6"
            style={{ color: textBody }}
          >
            {s.desc}
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7">
            {s.features.map((f, fi) => (
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
                  style={{ background: `${s.color}18` }}
                >
                  <Check
                    className="w-3 h-3"
                    style={{ color: s.color }}
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
              href="https://secureye.io"
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
            <Link to={`/solutions/${s.slug}`}>
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
          <SolutionsImage img={s.img} color={s.color} name={s.name} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function SolutionsPage({ onDemo }) {
  return (
    <>
      <Helmet>
        <title>Solutions — Aqua Secure AI</title>
      </Helmet>

      <PageHero
        badge="Solutions"
        title="Security for every"
        accent="business & industry"
        sub="Manage SIEM · Attack Surface · DMARC · Phishing Campaigns · E-learning · Compliance Management"
        cta="Get Started Free"
        onCta={() => window.open("https://secureye.io", "_blank")}
      />

      <div>
        {SOLUTIONS.map((s, i) => (
          <SolutionSection key={s.slug} s={s} idx={i} />
        ))}
      </div>

      {/* CTA strip */}
      <section
        className="section-sm relative overflow-hidden"
        style={{ background: "#c5b1f5" }}
      >
        <GlowOrbs variant="subtle" />
        <div className="wrap relative z-10">
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="rounded-2xl p-10 md:p-14 text-center relative overflow-hidden border"
            style={{
              background: "linear-gradient(135deg,#16162A,#1b1439,#16162A)",
              borderColor: "rgba(138,99,255,0.22)",
            }}
          >
            <GlowOrbs variant="subtle" />
            <div className="relative z-10">
              <motion.p variants={fadeUp} className="badge mb-4">
                Not sure where to start?
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-extrabold tracking-tight mb-4"
                style={{ fontSize: "clamp(24px,3vw,38px)", color: "#E7E0FF" }}
              >
                Let's find the right solution for you
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-lead mb-7 max-w-[440px] mx-auto"
                style={{ color: "rgba(184,165,255,0.55)" }}
              >
                Contact our team at{" "}
                <a
                  href="mailto:info@aquasecure.ai"
                  style={{ color: "#8A63FF" }}
                  className="hover:underline"
                >
                  info@aquasecure.ai
                </a>{" "}
                and we'll help find the right solution for your organisation.
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-4 justify-center"
              >
                <motion.a
                  href="https://secureye.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-[15px] px-8 py-3.5 inline-flex items-center gap-2"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 6px 28px rgba(138,99,255,.70)",
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get Started Free <ExternalLink className="w-4 h-4" />
                </motion.a>
                <Link to="/contact">
                  <motion.span
                    className="btn-outline text-[15px] px-8 py-3.5 inline-flex items-center gap-2 cursor-pointer"
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
