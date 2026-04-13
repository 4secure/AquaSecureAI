import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  Check,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Activity,
  Globe,
  Mail,
  Fish,
  BookOpen,
  ShieldCheck,
} from "lucide-react";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  stagger,
  viewport,
} from "../components/ui/motion";

const SOLUTIONS = {
  "manage-siem": {
    icon: Activity,
    name: "Manage SIEM",
    tagline: "Managed SIEM Service",
    color: "#8A63FF",
    bg: "rgba(138,99,255,0.08)",
    img: "/images/Aqua-siem-dashboard.png",
    headline: "Enterprise SIEM without the operational overhead",
    sub: "Let Aqua Secure AI manage your SIEM end-to-end — log collection, rule tuning, correlation, and alerting — while your team focuses on response.",
    features: [
      {
        title: "Fully Managed Log Ingestion",
        desc: "We handle collection, normalisation, and indexing from all your sources — firewalls, endpoints, cloud, and apps.",
      },
      {
        title: "Continuous Rule Tuning",
        desc: "Our analysts continuously tune correlation rules to reduce false positives and surface real threats for your environment.",
      },
      {
        title: "Real-time Alerting",
        desc: "High-fidelity alerts with full context delivered to your team — or handled entirely by our managed SOC analysts.",
      },
      {
        title: "Compliance-Ready Reporting",
        desc: "Automated reports mapped to GDPR, PCI-DSS, ISO 27001 — always ready for your next audit.",
      },
      {
        title: "Multi-Source Coverage",
        desc: "Single pane of glass across cloud, on-prem, SaaS, and network infrastructure.",
      },
      {
        title: "24/7 Managed Coverage",
        desc: "Full 24/7 management option — from ingestion to alert to remediation, handled by our team.",
      },
    ],
    benefits: [
      "Reduce SIEM operational costs by 60%",
      "No in-house SIEM expertise required",
      "Faster deployment than self-managed SIEM",
      "Scales with your infrastructure automatically",
    ],
    whoFor: [
      "Organisations without dedicated SIEM expertise",
      "Teams that want SOC capability without headcount",
      "Enterprises migrating from legacy SIEM solutions",
    ],
    stats: [
      { val: "24/7", label: "Managed coverage" },
      { val: "60%", label: "Cost reduction" },
      { val: "<1s", label: "Alert latency" },
    ],
  },
  "attack-surface": {
    icon: Globe,
    name: "Attack Surface",
    tagline: "Attack Surface Management",
    color: "#8A63FF",
    bg: "rgba(138,99,255,0.08)",
    img: "/images/assets-dashboard.png",
    headline: "See your organisation exactly the way attackers do",
    sub: "Continuously discover and monitor your external attack surface — domains, IPs, open ports, and exposed services — before threat actors exploit unknown assets.",
    features: [
      {
        title: "Continuous Asset Discovery",
        desc: "Automatically discover all external-facing assets — including shadow IT and forgotten infrastructure.",
      },
      {
        title: "Domain & Subdomain Enumeration",
        desc: "Full enumeration of your domain estate including subdomains, expired certificates, and DNS misconfigurations.",
      },
      {
        title: "Open Port & Service Monitoring",
        desc: "Detect exposed services, open ports, and running software versions across your entire external footprint.",
      },
      {
        title: "Exposure Risk Scoring",
        desc: "Every discovered asset is risk-scored based on exposure, vulnerability severity, and business criticality.",
      },
      {
        title: "Shadow IT Detection",
        desc: "Surface cloud resources, SaaS apps, and infrastructure spun up outside of IT governance.",
      },
      {
        title: "Remediation Guidance",
        desc: "Actionable recommendations for each finding, prioritised by risk and ease of remediation.",
      },
    ],
    benefits: [
      "Eliminate unknown external exposure",
      "Prioritise remediation by actual risk",
      "Detect shadow IT and rogue assets",
      "Reduce external attack surface by up to 40%",
    ],
    whoFor: [
      "Security teams with growing cloud footprints",
      "Organisations undergoing digital transformation",
      "Teams struggling with unknown asset sprawl",
    ],
    stats: [
      { val: "Continuous", label: "Asset discovery" },
      { val: "40%", label: "Surface reduction" },
      { val: "Real-time", label: "Risk scoring" },
    ],
  },
  dmarc: {
    icon: Mail,
    name: "DMARC",
    tagline: "Email Authentication & Anti-Spoofing",
    color: "#8A63FF",
    bg: "rgba(184,165,255,0.10)",
    img: "/images/product-dark-web.png",
    headline: "Stop email fraud, spoofing, and impersonation at the source",
    sub: "Deploy and manage DMARC, DKIM, and SPF authentication across your domain estate — protecting your brand, employees, and customers from email-based attacks.",
    features: [
      {
        title: "DMARC, DKIM & SPF Deployment",
        desc: "Expert-guided deployment of all three email authentication protocols — from policy creation to enforcement.",
      },
      {
        title: "Real-time Authentication Reporting",
        desc: "DMARC aggregate and forensic reports parsed and visualised — showing who is sending on behalf of your domain.",
      },
      {
        title: "Spoofing & Phishing Detection",
        desc: "Identify malicious senders impersonating your domain and take action to block them at the source.",
      },
      {
        title: "Brand Protection Monitoring",
        desc: "Monitor for lookalike domains and email spoofing campaigns targeting your customers and partners.",
      },
      {
        title: "Policy Enforcement Journey",
        desc: "Guided journey from p=none → p=quarantine → p=reject with safety checks at each stage.",
      },
      {
        title: "Forensic Reporting & Alerts",
        desc: "Detailed forensic reports on failed authentication attempts with sample email headers and source IPs.",
      },
    ],
    benefits: [
      "Stop 100% of direct domain spoofing at enforcement",
      "Improve email deliverability for legitimate senders",
      "Protect customers from phishing using your domain",
      "Meet email security compliance requirements",
    ],
    whoFor: [
      "Organisations with email spoofing problems",
      "Teams needing to meet email security compliance",
      "Brands experiencing impersonation attacks",
    ],
    stats: [
      { val: "100%", label: "Spoofing blocked" },
      { val: "Real-time", label: "DMARC reports" },
      { val: "Guided", label: "Policy journey" },
    ],
  },
  "fishing-campaigns": {
    icon: Fish,
    name: "Phishing Campaigns",
    tagline: "Phishing Simulation & Security Awareness",
    color: "#8A63FF",
    bg: "rgba(138,99,255,0.08)",
    img: "/images/product-phishbot.png",
    headline: "Turn your biggest vulnerability into your strongest defence",
    sub: "Realistic phishing simulations that test, train, and track your workforce — with automated follow-up training that actually changes behaviour.",
    features: [
      {
        title: "Realistic Phishing Templates",
        desc: "Library of current, industry-specific templates that mirror real-world attacks — updated with emerging threat trends.",
      },
      {
        title: "Targeted Campaign Scheduling",
        desc: "Schedule campaigns by department, role, location, or individual — with full control over timing and frequency.",
      },
      {
        title: "Credential & Click Tracking",
        desc: "Track who clicked, who submitted credentials, and who reported the simulation — with individual analytics.",
      },
      {
        title: "At-Risk Employee Identification",
        desc: "Automated identification of repeat offenders and high-risk individuals for prioritised intervention.",
      },
      {
        title: "Automated Training Enrolment",
        desc: "Failed simulation → automatic enrolment in targeted micro-training. No manual follow-up required.",
      },
      {
        title: "Security Culture Metrics",
        desc: "Track phishing susceptibility over time and measure the ROI of your security awareness program.",
      },
    ],
    benefits: [
      "Reduce phishing click rates by up to 80%",
      "Build measurable security culture improvement",
      "Automated training reduces manual HR burden",
      "Meet regulatory training requirements",
    ],
    whoFor: [
      "Organisations with high phishing risk",
      "Compliance teams needing training records",
      "HR and security teams wanting measurable awareness programs",
    ],
    stats: [
      { val: "80%", label: "Click rate reduction" },
      { val: "Auto", label: "Training enrolment" },
      { val: "Real-time", label: "Campaign tracking" },
    ],
  },
  "e-learning": {
    icon: BookOpen,
    name: "E-learning",
    tagline: "Cybersecurity Training & Education",
    color: "#8A63FF",
    bg: "rgba(138,99,255,0.08)",
    img: "/images/product-phishbot.png",
    headline: "Build a security-aware culture across your entire organisation",
    sub: "Role-based cybersecurity e-learning that is trackable, measurable, and built around the threats your employees actually face.",
    features: [
      {
        title: "Role-Based Learning Paths",
        desc: "Tailored modules for executives, IT teams, finance, HR, and general staff — relevant content for every role.",
      },
      {
        title: "Phishing Awareness Modules",
        desc: "Interactive training that teaches employees to identify and report phishing, BEC, and social engineering attacks.",
      },
      {
        title: "Compliance Training",
        desc: "Modules covering GDPR data handling, password policy, acceptable use, and industry-specific requirements.",
      },
      {
        title: "Progress Tracking & Reporting",
        desc: "Real-time dashboards showing completion rates, quiz scores, and compliance status by team and individual.",
      },
      {
        title: "Custom Content Support",
        desc: "Upload your own training content alongside our library — including policies, procedures, and welcome videos.",
      },
      {
        title: "Automated Reminders",
        desc: "Scheduled reminder emails and escalation to managers for overdue training — fully automated.",
      },
    ],
    benefits: [
      "Reduce human-factor breaches by 70%",
      "Meet regulatory training requirements automatically",
      "Measurable ROI on security awareness investment",
      "Reduce security incident costs long-term",
    ],
    whoFor: [
      "HR teams managing compliance training",
      "Security teams building awareness programs",
      "Organisations with regulatory training obligations",
    ],
    stats: [
      { val: "70%", label: "Breach reduction" },
      { val: "Role-based", label: "Learning paths" },
      { val: "Auto", label: "Compliance tracking" },
    ],
  },
  "compliance-management": {
    icon: ShieldCheck,
    name: "Compliance Management",
    tagline: "GRC & Regulatory Compliance",
    color: "#8A63FF",
    bg: "rgba(138,99,255,0.08)",
    img: "/images/grc-dashboard.png",
    headline: "Automate compliance and be audit-ready every single day",
    sub: "Centralise your governance, risk, and compliance workflows — with real-time monitoring, automated evidence collection, and always-on audit readiness.",
    features: [
      {
        title: "Multi-Framework Management",
        desc: "Manage GDPR, HIPAA, PCI-DSS, ISO 27001, CTDISR, and custom frameworks from a single interface.",
      },
      {
        title: "Automated Evidence Collection",
        desc: "Automatically gather evidence from connected systems — no manual exports, screenshots, or spreadsheets.",
      },
      {
        title: "Continuous Compliance Monitoring",
        desc: "Real-time monitoring against all framework controls with instant alerts when gaps appear.",
      },
      {
        title: "Audit-Ready Reporting",
        desc: "On-demand audit reports that map evidence to controls — reducing audit prep from weeks to hours.",
      },
      {
        title: "Risk Register & Treatment",
        desc: "Centralised risk register with treatment plans, owners, deadlines, and risk acceptance workflows.",
      },
      {
        title: "Executive Dashboards",
        desc: "Board-level compliance posture dashboards showing risk trends and top remediation priorities.",
      },
    ],
    benefits: [
      "Reduce audit preparation time by 80%",
      "Maintain continuous compliance year-round",
      "Single source of truth for all frameworks",
      "Eliminate compliance-related data breaches",
    ],
    whoFor: [
      "GRC and compliance teams",
      "Organisations undergoing certification audits",
      "Enterprises managing multiple regulatory frameworks",
    ],
    stats: [
      { val: "80%", label: "Audit prep saved" },
      { val: "10+", label: "Frameworks" },
      { val: "100%", label: "Audit readiness" },
    ],
  },
};

function SolutionImage({ img, name }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
    >
      <div
        className="relative rounded-2xl overflow-hidden border"
        style={{
          borderColor: "rgba(138,99,255,0.20)",
          boxShadow: "0 8px 40px rgba(138,99,255,0.10)",
        }}
      >
        <div
          className="flex items-center gap-1.5 px-3 h-8 flex-shrink-0"
          style={{
            background: "#f8f7ff",
            borderBottom: "1px solid rgba(138,99,255,0.12)",
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
            className="flex-1 mx-3 h-4 rounded"
            style={{ background: "rgba(138,99,255,0.08)" }}
          />
        </div>
        <img
          src={img}
          alt={`${name} screenshot`}
          className="w-full h-auto block"
          style={{ background: "#fafafa" }}
          onError={(e) => (e.target.style.display = "none")}
        />
      </div>
    </motion.div>
  );
}

export default function SolutionDetailPage() {
  const { slug } = useParams();
  const s = SOLUTIONS[slug];
  if (!s) return <Navigate to="/solutions" replace />;
  const Icon = s.icon;

  return (
    <>
      <Helmet>
        <title>{s.name} — Aqua Secure AI</title>
      </Helmet>

      {/* ── Hero: text left, image right ── */}
      <section
        className="relative overflow-hidden pt-[108px] pb-20"
        style={{ background: "#ffffff" }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(124,58,237,0.25) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 40%, rgba(138,99,255,0.05) 0%, transparent 70%)",
          }}
        />

        <div className="wrap relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex items-center gap-2 mb-8 text-[12px] font-medium"
            style={{ color: "rgba(109,86,165,0.55)" }}
          >
            <Link to="/" className="hover:text-[#8A63FF] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              to="/solutions"
              className="hover:text-[#8A63FF] transition-colors"
            >
              Solutions
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span style={{ color: "#8A63FF" }}>{s.name}</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-3 mb-6"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: s.bg, border: `1px solid ${s.color}25` }}
                >
                  <Icon
                    className="w-7 h-7"
                    style={{ color: s.color }}
                    strokeWidth={1.6}
                  />
                </div>
                <div>
                  <p
                    className="text-[11px] font-bold uppercase tracking-widest"
                    style={{ color: s.color }}
                  >
                    {s.tagline}
                  </p>
                  <h1
                    className="text-[26px] font-extrabold"
                    style={{ color: "#1e1b4b" }}
                  >
                    {s.name}
                  </h1>
                </div>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="font-extrabold leading-tight mb-5"
                style={{
                  fontSize: "clamp(28px,3.8vw,46px)",
                  color: "#1e1b4b",
                  letterSpacing: "-0.02em",
                }}
              >
                {s.headline}
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-[16px] leading-[1.8] mb-8"
                style={{ color: "rgba(60,50,120,0.65)", maxWidth: 520 }}
              >
                {s.sub}
              </motion.p>

              <motion.div variants={fadeUp} className="flex gap-8 mb-8">
                {s.stats.map((st) => (
                  <div key={st.label}>
                    <div
                      className="text-[22px] font-extrabold"
                      style={{ color: s.color }}
                    >
                      {st.val}
                    </div>
                    <div
                      className="text-[11px] font-medium"
                      style={{ color: "rgba(60,50,120,0.55)" }}
                    >
                      {st.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="flex gap-3">
                <motion.a
                  href="https://secureye.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-[14px] inline-flex items-center gap-2"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 6px 28px rgba(138,99,255,.55)",
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get Started Free <ExternalLink className="w-3.5 h-3.5" />
                </motion.a>
                <Link to="/contact">
                  <motion.span
                    className="btn-outline text-[14px] inline-flex items-center gap-2 cursor-pointer"
                    style={{ color: "#1e1b4b" }}
                    whileHover={{ borderColor: "rgba(138,99,255,0.5)" }}
                  >
                    Talk to Us <ArrowRight className="w-3.5 h-3.5" />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <SolutionImage img={s.img} name={s.name} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="section" style={{ background: "#f8f5ff" }}>
        <div className="wrap">
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="inline-block text-[11px] font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
              style={{
                background: `${s.color}12`,
                color: s.color,
                border: `1px solid ${s.color}25`,
              }}
            >
              How It Works
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-extrabold tracking-tight mb-3"
              style={{ fontSize: "clamp(24px,3vw,38px)", color: "#1e1b4b" }}
            >
              What's included in {s.name}
            </motion.h2>
          </motion.div>
          <motion.div
            variants={stagger(0.07)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {s.features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="rounded-2xl p-6 border bg-white"
                style={{
                  borderColor: "rgba(138,99,255,0.12)",
                  boxShadow: "0 2px 12px rgba(138,99,255,0.05)",
                }}
                whileHover={{
                  y: -3,
                  boxShadow: `0 10px 32px ${s.color}12`,
                  borderColor: `${s.color}28`,
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: s.bg }}
                >
                  <Check
                    className="w-4 h-4"
                    style={{ color: s.color }}
                    strokeWidth={2.5}
                  />
                </div>
                <h3
                  className="text-[15px] font-extrabold mb-2"
                  style={{ color: "#1e1b4b" }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-[13px] leading-relaxed"
                  style={{ color: "rgba(60,50,120,0.60)" }}
                >
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Who is this for: text left, CTA right ── */}
      <section className="section-sm" style={{ background: "#ffffff" }}>
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <p
                className="text-[11px] font-bold uppercase tracking-widest mb-4"
                style={{ color: s.color }}
              >
                Who Is This For
              </p>
              <h2
                className="font-extrabold mb-6"
                style={{ fontSize: "clamp(22px,2.8vw,34px)", color: "#1e1b4b" }}
              >
                Built for teams like yours
              </h2>
              <div className="flex flex-col gap-3 mb-6">
                {s.whoFor.map((w) => (
                  <div key={w} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${s.color}15` }}
                    >
                      <Check
                        className="w-3 h-3"
                        style={{ color: s.color }}
                        strokeWidth={2.5}
                      />
                    </div>
                    <span
                      className="text-[14px]"
                      style={{ color: "rgba(60,50,120,0.70)" }}
                    >
                      {w}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                {s.benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2.5">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: s.color }}
                    />
                    <span
                      className="text-[13px] font-medium"
                      style={{ color: "rgba(60,50,120,0.65)" }}
                    >
                      {b}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="rounded-2xl p-8 border"
              style={{
                background: `linear-gradient(135deg, ${s.bg}, rgba(255,255,255,0.8))`,
                borderColor: `${s.color}22`,
                boxShadow: `0 4px 28px ${s.color}0e`,
              }}
            >
              <h3
                className="text-[20px] font-extrabold mb-2"
                style={{ color: "#1e1b4b" }}
              >
                Get started with {s.name}
              </h3>
              <p
                className="text-[13px] mb-6"
                style={{ color: "rgba(60,50,120,0.60)" }}
              >
                Access the full platform on secureye.io or talk to our team for
                a tailored walkthrough.
              </p>
              <div className="flex flex-col gap-3">
                <motion.a
                  href="https://secureye.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-[14px] inline-flex items-center justify-center gap-2"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 6px 28px rgba(138,99,255,.55)",
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get Started Free <ExternalLink className="w-3.5 h-3.5" />
                </motion.a>
                <Link to="/contact">
                  <motion.span
                    className="btn-outline text-[14px] w-full inline-flex items-center justify-center gap-2 cursor-pointer"
                    style={{ color: "#1e1b4b" }}
                    whileHover={{ borderColor: "rgba(138,99,255,0.5)" }}
                  >
                    Request a Demo
                  </motion.span>
                </Link>
              </div>
              <p
                className="text-[11px] mt-4 text-center"
                style={{ color: "rgba(60,50,120,0.40)" }}
              >
                info@aquasecure.ai · aquasecure.ai
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Other Solutions ── */}
      <section className="section-sm" style={{ background: "#f8f5ff" }}>
        <div className="wrap">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="text-center text-[13px] font-semibold mb-6"
            style={{ color: "rgba(109,86,165,0.55)" }}
          >
            Explore all solutions
          </motion.p>
          <motion.div
            variants={stagger(0.06)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex flex-wrap justify-center gap-3"
          >
            {Object.entries(SOLUTIONS)
              .filter(([k]) => k !== slug)
              .map(([k, sol]) => {
                const I = sol.icon;
                return (
                  <Link key={k} to={`/solutions/${k}`}>
                    <motion.div
                      variants={fadeUp}
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border bg-white"
                      style={{
                        borderColor: "rgba(138,99,255,0.14)",
                        boxShadow: "0 2px 8px rgba(138,99,255,0.05)",
                      }}
                      whileHover={{
                        y: -2,
                        borderColor: "rgba(138,99,255,0.35)",
                        boxShadow: "0 6px 20px rgba(138,99,255,0.10)",
                      }}
                    >
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center"
                        style={{ background: sol.bg }}
                      >
                        <I
                          className="w-3.5 h-3.5"
                          style={{ color: sol.color }}
                          strokeWidth={1.8}
                        />
                      </div>
                      <span
                        className="text-[13px] font-semibold"
                        style={{ color: "#1e1b4b" }}
                      >
                        {sol.name}
                      </span>
                    </motion.div>
                  </Link>
                );
              })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
