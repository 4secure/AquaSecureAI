export const PRODUCTS = {
  siem: {
    icon: 'lucide:database',
    name: "Aqua SIEM",
    tagline: "Security Information & Event Management",
    color: "var(--accent)",
    bg: "rgba(var(--accent-rgb) / 0.08)",
    headline: "Centralise and correlate every security event in real time",
    sub: "Aqua SIEM gives your team a single pane of glass across all log sources — with AI-powered correlation that surfaces real threats, not noise.",
    img: "/images/Aqua-siem-dashboard.jpg",
    features: [
      {
        title: "Real-time Log Management",
        desc: "Collect and index logs from any source — firewalls, endpoints, cloud, apps — with sub-second ingestion.",
      },
      {
        title: "Advanced Event Correlation",
        desc: "AI-powered rules engine correlates events across sources to detect multi-stage attacks and lateral movement.",
      },
      {
        title: "Threat Detection Dashboards",
        desc: "Pre-built and customisable dashboards give SOC analysts instant visibility into alert severity, trends, and status.",
      },
      {
        title: "Compliance Reporting",
        desc: "Automated compliance reports for GDPR, PCI-DSS, ISO 27001 — always audit-ready, zero manual effort.",
      },
      {
        title: "Custom Alerting & Escalation",
        desc: "Define alert thresholds, severity levels, and escalation paths. Notify via email, Slack, or webhook.",
      },
      {
        title: "SIEM-as-a-Service",
        desc: "Fully managed SIEM option — Aqua Secure AI handles all tuning, maintenance, and monitoring 24/7.",
      },
    ],
    useCases: [
      "SOC Teams",
      "Compliance Audit",
      "Incident Investigation",
      "Log Centralisation",
    ],
    stats: [
      { val: "Real-time", label: "Event ingestion" },
      { val: "99.9%", label: "Uptime SLA" },
      { val: "<1s", label: "Alert latency" },
    ],
  },
  soc: {
    icon: 'lucide:activity',
    name: "SOC",
    tagline: "Security Operations Center",
    color: "var(--accent)",
    bg: "rgba(var(--accent-rgb) / 0.08)",
    headline: "AI-powered 24/7 threat detection and human-led response",
    sub: "Aqua Secure SOC empowers your analysts with AI SecOps — automated investigation, smart case management, and threat hunting — so they can focus on what matters.",
    img: "/images/soc-dashboard.jpg",
    features: [
      {
        title: "24/7 AI-Powered Monitoring",
        desc: "Continuous monitoring across your entire environment with AI that learns your baseline and flags true anomalies.",
      },
      {
        title: "Automated Incident Creation",
        desc: "Detected threats auto-create structured incidents with context, severity, and recommended actions pre-filled.",
      },
      {
        title: "Investigation Tools",
        desc: "Analysts get timeline views, entity graphs, and enriched indicators to investigate threats in minutes, not hours.",
      },
      {
        title: "Case Management Workflows",
        desc: "Track incidents from open to closed with assignment, notes, evidence, and SLA timers built in.",
      },
      {
        title: "Detection & Response Automation",
        desc: "Automate containment actions — isolate endpoints, block IPs, revoke sessions — triggered by AI verdicts.",
      },
      {
        title: "Threat Hunting",
        desc: "Proactively hunt for indicators of compromise across your environment using hypothesis-driven investigation.",
      },
    ],
    useCases: [
      "Enterprise SOC",
      "Managed Detection",
      "Incident Response",
      "Threat Hunting",
    ],
    stats: [
      { val: "24/7", label: "Continuous monitoring" },
      { val: "AI", label: "Powered triage" },
      { val: "<5min", label: "Mean time to alert" },
    ],
  },
  "threat-intel": {
    icon: 'lucide:globe',
    name: "Threat Intelligence",
    tagline: "Global Cyber Threat Intel",
    color: "var(--accent)",
    bg: "rgba(var(--accent-rgb) / 0.08)",
    headline: "Know what global threat actors are doing before they reach you",
    sub: "AI-powered global threat intelligence that feeds real-time IOCs, TTPs, and risk scores directly into your security operations.",
    img: "/images/tip-dashboard.jpeg",
    features: [
      {
        title: "AI-Powered IOC Feeds",
        desc: "Continuously updated indicators of compromise — IPs, domains, hashes, URLs — enriched with context and severity.",
      },
      {
        title: "Predictive Threat Insights",
        desc: "Machine learning models predict emerging attack patterns based on global telemetry and dark web signals.",
      },
      {
        title: "Global Threat Actor Profiling",
        desc: "Track APT groups, ransomware operators, and cybercriminal networks with detailed TTPs and attribution.",
      },
      {
        title: "Real-time Intelligence Correlation",
        desc: "Automatically correlate incoming alerts with threat intel feeds to enrich and prioritise incidents.",
      },
      {
        title: "Dark Web Monitoring",
        desc: "Monitor dark web forums, marketplaces, and breach databases for mentions of your organisation.",
      },
      {
        title: "Threat Classification",
        desc: "Categorise threats by type — ransomware, phishing, APT, botnets — with severity and confidence scoring.",
      },
    ],
    useCases: [
      "SOC Enrichment",
      "Threat Hunting",
      "Vendor Risk",
      "Board Reporting",
    ],
    stats: [
      { val: "Real-time", label: "Global intel feeds" },
      { val: "50M+", label: "IOCs tracked" },
      { val: "Predictive", label: "AI threat scoring" },
    ],
  },
  "dark-web": {
    icon: 'lucide:wifi',
    name: "Dark Web",
    tagline: "Dark Web Monitoring & Intelligence",
    color: "var(--accent)",
    bg: "rgba(var(--accent-rgb) / 0.08)",
    headline:
      "Monitor the dark web so attackers can't use your data against you",
    sub: "Continuous dark web surveillance for leaked credentials, stolen data, and brand impersonation — with actionable alerts before damage is done.",
    img: "/images/darkweb-dashboard.jpg",
    features: [
      {
        title: "Credential & Data Leak Monitoring",
        desc: "Monitor paste sites, leak forums, and breach databases for your employee credentials and customer data.",
      },
      {
        title: "Brand & Domain Monitoring",
        desc: "Detect lookalike domains, brand impersonation, and fraudulent sites targeting your customers.",
      },
      {
        title: "Dark Web Forum Scanning",
        desc: "AI-powered scanning of dark web forums and marketplaces for mentions of your organisation, products, or executives.",
      },
      {
        title: "Breach Data Detection",
        desc: "Receive alerts when your data appears in fresh breach datasets — before it's weaponised.",
      },
      {
        title: "Automated Alert Notifications",
        desc: "Instant notifications with full context — source, severity, data type — so your team can respond immediately.",
      },
      {
        title: "Executive Risk Reporting",
        desc: "Board-ready reports showing dark web exposure trends, risk reduction, and remediation status.",
      },
    ],
    useCases: [
      "Data Breach Response",
      "Brand Protection",
      "Executive Threat Intel",
      "Fraud Prevention",
    ],
    stats: [
      { val: "Continuous", label: "Dark web scanning" },
      { val: "Instant", label: "Breach alerts" },
      { val: "24/7", label: "Monitoring coverage" },
    ],
  },
  phishbot: {
    icon: 'lucide:bug',
    name: "Phishbot",
    tagline: "Phishing Campaign Management",
    color: "var(--accent)",
    bg: "rgba(var(--accent-rgb) / 0.08)",
    headline: "Build a human firewall through realistic phishing simulations",
    sub: "Launch automated phishing campaigns that test, train, and track your employees — turning your weakest link into your strongest defence.",
    img: "/images/product-phishbot.jpg",
    features: [
      {
        title: "Automated Phishing Campaigns",
        desc: "Schedule and launch campaigns targeting specific departments, roles, or individuals with zero manual effort.",
      },
      {
        title: "Realistic Email Templates",
        desc: "Library of industry-specific, current phishing templates that mirror real-world attacks your employees face.",
      },
      {
        title: "Click-Through Tracking",
        desc: "Track who clicked, who entered credentials, and who reported — with individual and team-level analytics.",
      },
      {
        title: "At-Risk Employee Identification",
        desc: "Automatically flag repeat clickers and high-risk individuals for additional training and monitoring.",
      },
      {
        title: "Automated Training Enrolment",
        desc: "Employees who fail simulations are automatically enrolled in targeted micro-training modules.",
      },
      {
        title: "Campaign Performance Dashboards",
        desc: "Visual dashboards showing click rates, trend over time, and security culture improvement metrics.",
      },
    ],
    useCases: [
      "Security Awareness",
      "Compliance Training",
      "Human Firewall",
      "Risk Reduction",
    ],
    stats: [
      { val: "Auto", label: "Campaign scheduling" },
      { val: "Real-time", label: "Click tracking" },
      { val: "Targeted", label: "Training enrolment" },
    ],
  },
  "asset-management": {
    icon: 'lucide:box',
    name: "Asset Management",
    tagline: "Unified Asset Inventory",
    color: "var(--accent)",
    bg: "rgba(var(--accent-rgb) / 0.08)",
    headline:
      "Know exactly what you own, who owns it, and what risk it carries",
    sub: "Complete asset lifecycle management across cloud, on-prem, and hybrid — with real-time ownership context and continuous risk scoring.",
    img: "/images/assets-dashboard.jpg",
    features: [
      {
        title: "Unified Asset Discovery",
        desc: "Automatically discover all assets across cloud providers, on-prem networks, and hybrid environments.",
      },
      {
        title: "Real-time Ownership Tracking",
        desc: "Map every asset to its owner, team, and business unit with automatic updates as your org changes.",
      },
      {
        title: "Operational Context Mapping",
        desc: "Understand what each asset does, who depends on it, and what security posture it carries.",
      },
      {
        title: "Cloud & On-Prem Coverage",
        desc: "Full visibility across AWS, Azure, GCP, and on-premise infrastructure in a single inventory.",
      },
      {
        title: "Asset Risk Scoring",
        desc: "Continuous risk scoring based on vulnerabilities, exposure, patch status, and business criticality.",
      },
      {
        title: "CMDB Integration",
        desc: "Sync with your existing CMDB via API — no rip-and-replace, just enrichment and accuracy.",
      },
    ],
    useCases: [
      "CMDB Enrichment",
      "Vulnerability Management",
      "Cloud Governance",
      "Audit Readiness",
    ],
    stats: [
      { val: "Unified", label: "Single asset view" },
      { val: "Real-time", label: "Ownership data" },
      { val: "Auto", label: "Risk scoring" },
    ],
  },
  grc: {
    icon: 'lucide:shield-check',
    name: "GRC",
    tagline: "Governance, Risk & Compliance",
    color: "var(--accent)",
    bg: "rgba(var(--accent-rgb) / 0.08)",
    headline: "Automate compliance across every major framework",
    sub: "Centralise governance, risk, and compliance in one platform — with real-time audit readiness, automated evidence collection, and continuous monitoring.",
    img: "/images/grc-dashboard.jpg",
    features: [
      {
        title: "Multi-Framework Support",
        desc: "Manage GDPR, HIPAA, PCI-DSS, ISO 27001, CTDISR, and custom frameworks from a single interface.",
      },
      {
        title: "Automated Evidence Collection",
        desc: "Automatically gather and organise evidence from connected systems — no manual screenshots or exports.",
      },
      {
        title: "Continuous Compliance Monitoring",
        desc: "Real-time monitoring against framework controls with instant alerts when gaps appear.",
      },
      {
        title: "Audit-Ready Reporting",
        desc: "Generate audit reports on-demand that map evidence to controls — reducing audit prep from weeks to hours.",
      },
      {
        title: "Risk Register & Treatment",
        desc: "Centralised risk register with treatment plans, owners, deadlines, and risk acceptance workflows.",
      },
      {
        title: "Executive Risk Dashboards",
        desc: "Board-level dashboards showing compliance posture, risk trends, and top remediation priorities.",
      },
    ],
    useCases: [
      "ISO 27001 Certification",
      "GDPR Compliance",
      "PCI-DSS Audit",
      "Board Reporting",
    ],
    stats: [
      { val: "10+", label: "Frameworks supported" },
      { val: "Auto", label: "Evidence collection" },
      { val: "100%", label: "Audit readiness" },
    ],
  },
};
