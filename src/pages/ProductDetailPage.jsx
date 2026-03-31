import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Check, ArrowRight, ExternalLink, ChevronRight, Database, Activity, Globe, Wifi, Bug, Box, ShieldCheck } from 'lucide-react'
import { fadeUp, fadeLeft, fadeRight, stagger, viewport } from '../components/ui/motion'

const PRODUCTS = {
  'siem': {
    icon: Database,
    name: 'Aqua SIEM',
    tagline: 'Security Information & Event Management',
    color: '#8A63FF',
    bg: 'rgba(138,99,255,0.08)',
    headline: 'Centralise and correlate every security event in real time',
    sub: 'Aqua SIEM gives your team a single pane of glass across all log sources — with AI-powered correlation that surfaces real threats, not noise.',
    img: '/assets/images/Aqua-siem-dashboard.png',
    features: [
      { title: 'Real-time Log Management', desc: 'Collect and index logs from any source — firewalls, endpoints, cloud, apps — with sub-second ingestion.' },
      { title: 'Advanced Event Correlation', desc: 'AI-powered rules engine correlates events across sources to detect multi-stage attacks and lateral movement.' },
      { title: 'Threat Detection Dashboards', desc: 'Pre-built and customisable dashboards give SOC analysts instant visibility into alert severity, trends, and status.' },
      { title: 'Compliance Reporting', desc: 'Automated compliance reports for GDPR, PCI-DSS, ISO 27001 — always audit-ready, zero manual effort.' },
      { title: 'Custom Alerting & Escalation', desc: 'Define alert thresholds, severity levels, and escalation paths. Notify via email, Slack, or webhook.' },
      { title: 'SIEM-as-a-Service', desc: 'Fully managed SIEM option — Aqua Secure AI handles all tuning, maintenance, and monitoring 24/7.' },
    ],
    useCases: ['SOC Teams', 'Compliance Audit', 'Incident Investigation', 'Log Centralisation'],
    stats: [{ val: 'Real-time', label: 'Event ingestion' }, { val: '99.9%', label: 'Uptime SLA' }, { val: '<1s', label: 'Alert latency' }],
  },
  'soc': {
    icon: Activity,
    name: 'SOC',
    tagline: 'Security Operations Center',
    color: '#8A63FF',
    bg: 'rgba(138,99,255,0.08)',
    headline: 'AI-powered 24/7 threat detection and human-led response',
    sub: 'Aqua Secure SOC empowers your analysts with AI SecOps — automated investigation, smart case management, and threat hunting — so they can focus on what matters.',
    img: '/assets/images/soc-dashboard.png',
    features: [
      { title: '24/7 AI-Powered Monitoring', desc: 'Continuous monitoring across your entire environment with AI that learns your baseline and flags true anomalies.' },
      { title: 'Automated Incident Creation', desc: 'Detected threats auto-create structured incidents with context, severity, and recommended actions pre-filled.' },
      { title: 'Investigation Tools', desc: 'Analysts get timeline views, entity graphs, and enriched indicators to investigate threats in minutes, not hours.' },
      { title: 'Case Management Workflows', desc: 'Track incidents from open to closed with assignment, notes, evidence, and SLA timers built in.' },
      { title: 'Detection & Response Automation', desc: 'Automate containment actions — isolate endpoints, block IPs, revoke sessions — triggered by AI verdicts.' },
      { title: 'Threat Hunting', desc: 'Proactively hunt for indicators of compromise across your environment using hypothesis-driven investigation.' },
    ],
    useCases: ['Enterprise SOC', 'Managed Detection', 'Incident Response', 'Threat Hunting'],
    stats: [{ val: '24/7', label: 'Continuous monitoring' }, { val: 'AI', label: 'Powered triage' }, { val: '<5min', label: 'Mean time to alert' }],
  },
  'threat-intel': {
    icon: Globe,
    name: 'Threat Intelligence',
    tagline: 'Global Cyber Threat Intel',
    color: '#8A63FF',
    bg: 'rgba(138,99,255,0.08)',
    headline: 'Know what global threat actors are doing before they reach you',
    sub: 'AI-powered global threat intelligence that feeds real-time IOCs, TTPs, and risk scores directly into your security operations.',
    img: '/assets/images/tip-dashboard.jpeg',
    features: [
      { title: 'AI-Powered IOC Feeds', desc: 'Continuously updated indicators of compromise — IPs, domains, hashes, URLs — enriched with context and severity.' },
      { title: 'Predictive Threat Insights', desc: 'Machine learning models predict emerging attack patterns based on global telemetry and dark web signals.' },
      { title: 'Global Threat Actor Profiling', desc: 'Track APT groups, ransomware operators, and cybercriminal networks with detailed TTPs and attribution.' },
      { title: 'Real-time Intelligence Correlation', desc: 'Automatically correlate incoming alerts with threat intel feeds to enrich and prioritise incidents.' },
      { title: 'Dark Web Monitoring', desc: 'Monitor dark web forums, marketplaces, and breach databases for mentions of your organisation.' },
      { title: 'Threat Classification', desc: 'Categorise threats by type — ransomware, phishing, APT, botnets — with severity and confidence scoring.' },
    ],
    useCases: ['SOC Enrichment', 'Threat Hunting', 'Vendor Risk', 'Board Reporting'],
    stats: [{ val: 'Real-time', label: 'Global intel feeds' }, { val: '50M+', label: 'IOCs tracked' }, { val: 'Predictive', label: 'AI threat scoring' }],
  },
  'dark-web': {
    icon: Wifi,
    name: 'Dark Web',
    tagline: 'Dark Web Monitoring & Intelligence',
    color: '#8A63FF',
    bg: 'rgba(138,99,255,0.08)',
    headline: 'Monitor the dark web so attackers can\'t use your data against you',
    sub: 'Continuous dark web surveillance for leaked credentials, stolen data, and brand impersonation — with actionable alerts before damage is done.',
    img: '/assets/images/darkweb-dashboard.png',
    features: [
      { title: 'Credential & Data Leak Monitoring', desc: 'Monitor paste sites, leak forums, and breach databases for your employee credentials and customer data.' },
      { title: 'Brand & Domain Monitoring', desc: 'Detect lookalike domains, brand impersonation, and fraudulent sites targeting your customers.' },
      { title: 'Dark Web Forum Scanning', desc: 'AI-powered scanning of dark web forums and marketplaces for mentions of your organisation, products, or executives.' },
      { title: 'Breach Data Detection', desc: 'Receive alerts when your data appears in fresh breach datasets — before it\'s weaponised.' },
      { title: 'Automated Alert Notifications', desc: 'Instant notifications with full context — source, severity, data type — so your team can respond immediately.' },
      { title: 'Executive Risk Reporting', desc: 'Board-ready reports showing dark web exposure trends, risk reduction, and remediation status.' },
    ],
    useCases: ['Data Breach Response', 'Brand Protection', 'Executive Threat Intel', 'Fraud Prevention'],
    stats: [{ val: 'Continuous', label: 'Dark web scanning' }, { val: 'Instant', label: 'Breach alerts' }, { val: '24/7', label: 'Monitoring coverage' }],
  },
  'phishbot': {
    icon: Bug,
    name: 'Phishbot',
    tagline: 'Phishing Campaign Management',
    color: '#8A63FF',
    bg: 'rgba(138,99,255,0.08)',
    headline: 'Build a human firewall through realistic phishing simulations',
    sub: 'Launch automated phishing campaigns that test, train, and track your employees — turning your weakest link into your strongest defence.',
    img: '/assets/images/product-phishbot.png',
    features: [
      { title: 'Automated Phishing Campaigns', desc: 'Schedule and launch campaigns targeting specific departments, roles, or individuals with zero manual effort.' },
      { title: 'Realistic Email Templates', desc: 'Library of industry-specific, current phishing templates that mirror real-world attacks your employees face.' },
      { title: 'Click-Through Tracking', desc: 'Track who clicked, who entered credentials, and who reported — with individual and team-level analytics.' },
      { title: 'At-Risk Employee Identification', desc: 'Automatically flag repeat clickers and high-risk individuals for additional training and monitoring.' },
      { title: 'Automated Training Enrolment', desc: 'Employees who fail simulations are automatically enrolled in targeted micro-training modules.' },
      { title: 'Campaign Performance Dashboards', desc: 'Visual dashboards showing click rates, trend over time, and security culture improvement metrics.' },
    ],
    useCases: ['Security Awareness', 'Compliance Training', 'Human Firewall', 'Risk Reduction'],
    stats: [{ val: 'Auto', label: 'Campaign scheduling' }, { val: 'Real-time', label: 'Click tracking' }, { val: 'Targeted', label: 'Training enrolment' }],
  },
  'asset-management': {
    icon: Box,
    name: 'Asset Management',
    tagline: 'Unified Asset Inventory',
    color: '#8A63FF',
    bg: 'rgba(138,99,255,0.08)',
    headline: 'Know exactly what you own, who owns it, and what risk it carries',
    sub: 'Complete asset lifecycle management across cloud, on-prem, and hybrid — with real-time ownership context and continuous risk scoring.',
    img: '/assets/images/assets-dashboard.png',
    features: [
      { title: 'Unified Asset Discovery', desc: 'Automatically discover all assets across cloud providers, on-prem networks, and hybrid environments.' },
      { title: 'Real-time Ownership Tracking', desc: 'Map every asset to its owner, team, and business unit with automatic updates as your org changes.' },
      { title: 'Operational Context Mapping', desc: 'Understand what each asset does, who depends on it, and what security posture it carries.' },
      { title: 'Cloud & On-Prem Coverage', desc: 'Full visibility across AWS, Azure, GCP, and on-premise infrastructure in a single inventory.' },
      { title: 'Asset Risk Scoring', desc: 'Continuous risk scoring based on vulnerabilities, exposure, patch status, and business criticality.' },
      { title: 'CMDB Integration', desc: 'Sync with your existing CMDB via API — no rip-and-replace, just enrichment and accuracy.' },
    ],
    useCases: ['CMDB Enrichment', 'Vulnerability Management', 'Cloud Governance', 'Audit Readiness'],
    stats: [{ val: 'Unified', label: 'Single asset view' }, { val: 'Real-time', label: 'Ownership data' }, { val: 'Auto', label: 'Risk scoring' }],
  },
  'grc': {
    icon: ShieldCheck,
    name: 'GRC',
    tagline: 'Governance, Risk & Compliance',
    color: '#8A63FF',
    bg: 'rgba(138,99,255,0.08)',
    headline: 'Automate compliance across every major framework',
    sub: 'Centralise governance, risk, and compliance in one platform — with real-time audit readiness, automated evidence collection, and continuous monitoring.',
    img: '/assets/images/grc-dashboard.png',
    features: [
      { title: 'Multi-Framework Support', desc: 'Manage GDPR, HIPAA, PCI-DSS, ISO 27001, CTDISR, and custom frameworks from a single interface.' },
      { title: 'Automated Evidence Collection', desc: 'Automatically gather and organise evidence from connected systems — no manual screenshots or exports.' },
      { title: 'Continuous Compliance Monitoring', desc: 'Real-time monitoring against framework controls with instant alerts when gaps appear.' },
      { title: 'Audit-Ready Reporting', desc: 'Generate audit reports on-demand that map evidence to controls — reducing audit prep from weeks to hours.' },
      { title: 'Risk Register & Treatment', desc: 'Centralised risk register with treatment plans, owners, deadlines, and risk acceptance workflows.' },
      { title: 'Executive Risk Dashboards', desc: 'Board-level dashboards showing compliance posture, risk trends, and top remediation priorities.' },
    ],
    useCases: ['ISO 27001 Certification', 'GDPR Compliance', 'PCI-DSS Audit', 'Board Reporting'],
    stats: [{ val: '10+', label: 'Frameworks supported' }, { val: 'Auto', label: 'Evidence collection' }, { val: '100%', label: 'Audit readiness' }],
  },
}

export default function ProductDetailPage() {
  const { slug } = useParams()
  const p = PRODUCTS[slug]
  if (!p) return <Navigate to="/products" replace />

  const Icon = p.icon

  return (
    <>
      <Helmet><title>{p.name} — Aqua Secure AI</title></Helmet>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-[108px] pb-20"
        style={{ background: '#ffffff' }}>
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.15]"
          style={{ backgroundImage:'radial-gradient(circle, rgba(124,58,237,0.25) 1px, transparent 1px)', backgroundSize:'28px 28px' }}/>
        {/* Radial tint */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background:'radial-gradient(ellipse 60% 60% at 50% 40%, rgba(138,99,255,0.06) 0%, transparent 70%)' }}/>

        <div className="wrap relative z-10">
          {/* Breadcrumb */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
            className="flex items-center gap-2 mb-8 text-[12px] font-medium"
            style={{ color:'rgba(109,86,165,0.55)' }}>
            <Link to="/" className="hover:text-[#8A63FF] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5"/>
            <Link to="/products" className="hover:text-[#8A63FF] transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5"/>
            <span style={{ color:'#8A63FF' }}>{p.name}</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div variants={stagger(.1)} initial="hidden" whileInView="show" viewport={viewport}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background:p.bg, border:`1px solid ${p.color}25` }}>
                  <Icon className="w-7 h-7" style={{ color:p.color }} strokeWidth={1.6}/>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color:p.color }}>{p.tagline}</p>
                  <h1 className="text-[26px] font-extrabold" style={{ color:'#1e1b4b' }}>{p.name}</h1>
                </div>
              </motion.div>

              <motion.h2 variants={fadeUp} className="font-extrabold leading-tight mb-5"
                style={{ fontSize:'clamp(28px,3.8vw,46px)', color:'#1e1b4b', letterSpacing:'-0.02em' }}>
                {p.headline}
              </motion.h2>

              <motion.p variants={fadeUp} className="text-[16px] leading-[1.8] mb-8"
                style={{ color:'rgba(60,50,120,0.65)', maxWidth:520 }}>
                {p.sub}
              </motion.p>

              {/* Stats */}
              <motion.div variants={fadeUp} className="flex gap-8 mb-8">
                {p.stats.map(s => (
                  <div key={s.label}>
                    <div className="text-[22px] font-extrabold" style={{ color:p.color }}>{s.val}</div>
                    <div className="text-[11px] font-medium" style={{ color:'rgba(60,50,120,0.55)' }}>{s.label}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="flex gap-3">
                <motion.a href="https://secureye.io" target="_blank" rel="noopener noreferrer"
                  className="btn-primary text-[14px] inline-flex items-center gap-2"
                  whileHover={{ scale:1.03, boxShadow:'0 6px 28px rgba(138,99,255,.55)' }} whileTap={{ scale:.97 }}>
                  Get Started Free <ExternalLink className="w-3.5 h-3.5"/>
                </motion.a>
                <motion.a href="mailto:info@aquasecure.ai"
                  className="btn-outline text-[14px] inline-flex items-center gap-2"
                  style={{ color:'#1e1b4b' }}
                  whileHover={{ borderColor:'rgba(138,99,255,0.5)' }}>
                  Request Demo <ArrowRight className="w-3.5 h-3.5"/>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right — Dashboard image */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={viewport}
              whileHover={{ y:-4 }} transition={{ type:'spring', stiffness:180, damping:20 }}>
              <div className="relative rounded-2xl overflow-hidden border"
                style={{ borderColor:'rgba(138,99,255,0.20)', boxShadow:'0 8px 40px rgba(138,99,255,0.10)' }}>
                {/* Chrome bar */}
                <div className="flex items-center gap-1.5 px-3 h-8 flex-shrink-0"
                  style={{ background:'#f8f7ff', borderBottom:'1px solid rgba(138,99,255,0.12)' }}>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background:'#FF5C5C' }}/>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background:'#FFB020' }}/>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background:'#29E07A' }}/>
                  <div className="flex-1 mx-3 h-4 rounded" style={{ background:'rgba(138,99,255,0.08)' }}/>
                </div>
                <img src={p.img} alt={`${p.name} dashboard`} className="w-full h-auto block"
                  style={{ background:'#fafafa' }}
                  onError={e => e.target.style.display='none'}/>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="section" style={{ background:'#f8f5ff' }}>
        <div className="wrap">
          <motion.div variants={stagger(.08)} initial="hidden" whileInView="show" viewport={viewport}
            className="text-center mb-14">
            <motion.p variants={fadeUp}
              className="inline-block text-[11px] font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
              style={{ background:`${p.color}12`, color:p.color, border:`1px solid ${p.color}25` }}>
              Key Features
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-extrabold tracking-tight mb-3"
              style={{ fontSize:'clamp(24px,3vw,38px)', color:'#1e1b4b' }}>
              Everything you need in one platform
            </motion.h2>
          </motion.div>

          <motion.div variants={stagger(.07)} initial="hidden" whileInView="show" viewport={viewport}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {p.features.map((f, i) => (
              <motion.div key={f.title} variants={fadeUp}
                className="rounded-2xl p-6 border bg-white transition-all duration-300 group"
                style={{ borderColor:'rgba(138,99,255,0.12)', boxShadow:'0 2px 12px rgba(138,99,255,0.05)' }}
                whileHover={{ y:-3, boxShadow:`0 10px 32px ${p.color}14`, borderColor:`${p.color}30` }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                  style={{ background:p.bg }}>
                  <Check className="w-4 h-4" style={{ color:p.color }} strokeWidth={2.5}/>
                </div>
                <h3 className="text-[15px] font-extrabold mb-2" style={{ color:'#1e1b4b' }}>{f.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color:'rgba(60,50,120,0.60)' }}>{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Use Cases + CTA ── */}
      <section className="section-sm" style={{ background:'#ffffff' }}>
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewport}>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color:p.color }}>Use Cases</p>
              <h2 className="font-extrabold mb-6" style={{ fontSize:'clamp(22px,2.8vw,34px)', color:'#1e1b4b' }}>
                Who uses {p.name}?
              </h2>
              <div className="flex flex-wrap gap-3 mb-8">
                {p.useCases.map(u => (
                  <span key={u} className="px-4 py-2 rounded-full text-[13px] font-semibold border"
                    style={{ background:p.bg, color:p.color, borderColor:`${p.color}25` }}>
                    {u}
                  </span>
                ))}
              </div>
              <p className="text-[14px] leading-relaxed mb-6" style={{ color:'rgba(60,50,120,0.60)' }}>
                {p.name} is built for security teams who need real results — not just dashboards.
                Whether you're a 2-person team or a 200-person enterprise SOC, it scales to your needs.
              </p>
              <Link to="/contact">
                <motion.span className="inline-flex items-center gap-2 text-[14px] font-semibold"
                  style={{ color:p.color }} whileHover={{ x:4 }}>
                  Talk to our team <ArrowRight className="w-4 h-4"/>
                </motion.span>
              </Link>
            </motion.div>

            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={viewport}
              className="rounded-2xl p-8 border"
              style={{ background:`linear-gradient(135deg, ${p.bg}, rgba(255,255,255,0.8))`, borderColor:`${p.color}20`, boxShadow:`0 4px 28px ${p.color}0e` }}>
              <h3 className="text-[20px] font-extrabold mb-2" style={{ color:'#1e1b4b' }}>
                Start with {p.name} today
              </h3>
              <p className="text-[13px] mb-6" style={{ color:'rgba(60,50,120,0.60)' }}>
                Get access to the full platform on secureye.io — or contact us for a personalised demo.
              </p>
              <div className="flex flex-col gap-3">
                <motion.a href="https://secureye.io" target="_blank" rel="noopener noreferrer"
                  className="btn-primary text-[14px] inline-flex items-center justify-center gap-2"
                  whileHover={{ scale:1.02, boxShadow:'0 6px 28px rgba(138,99,255,.55)' }} whileTap={{ scale:.97 }}>
                  Get Started Free <ExternalLink className="w-3.5 h-3.5"/>
                </motion.a>
                <motion.a href="mailto:info@aquasecure.ai"
                  className="btn-outline text-[14px] inline-flex items-center justify-center gap-2"
                  style={{ color:'#1e1b4b' }}
                  whileHover={{ borderColor:'rgba(138,99,255,0.5)' }}>
                  Request a Demo
                </motion.a>
              </div>
              <p className="text-[11px] mt-4 text-center" style={{ color:'rgba(60,50,120,0.40)' }}>
                info@aquasecure.ai · aquasecure.ai
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Other Products ── */}
      <section className="section-sm" style={{ background:'#f8f5ff' }}>
        <div className="wrap">
          <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
            className="text-center text-[13px] font-semibold mb-6" style={{ color:'rgba(109,86,165,0.55)' }}>
            Explore the full product suite
          </motion.p>
          <motion.div variants={stagger(.06)} initial="hidden" whileInView="show" viewport={viewport}
            className="flex flex-wrap justify-center gap-3">
            {Object.entries(PRODUCTS).filter(([s]) => s !== slug).map(([s, prod]) => {
              const I = prod.icon
              return (
                <Link key={s} to={`/products/${s}`}>
                  <motion.div variants={fadeUp}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border bg-white transition-all"
                    style={{ borderColor:'rgba(138,99,255,0.14)', boxShadow:'0 2px 8px rgba(138,99,255,0.05)' }}
                    whileHover={{ y:-2, borderColor:'rgba(138,99,255,0.35)', boxShadow:'0 6px 20px rgba(138,99,255,0.10)' }}>
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background:prod.bg }}>
                      <I className="w-3.5 h-3.5" style={{ color:prod.color }} strokeWidth={1.8}/>
                    </div>
                    <span className="text-[13px] font-semibold" style={{ color:'#1e1b4b' }}>{prod.name}</span>
                  </motion.div>
                </Link>
              )
            })}
          </motion.div>
        </div>
      </section>
    </>
  )
}
