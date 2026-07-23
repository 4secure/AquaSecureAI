export const SOLUTIONS = {
  "manage-siem": {
    icon: 'lucide:activity',
    name: "Manage SIEM",
    tagline: "Managed SIEM Service",
    color: "var(--accent)",
    bg: "rgba(var(--accent-rgb) / 0.08)",
    img: "/images/Aqua-siem-dashboard.jpg",
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
    icon: 'lucide:globe',
    name: "Attack Surface",
    tagline: "Attack Surface Management",
    color: "var(--accent)",
    bg: "rgba(var(--accent-rgb) / 0.08)",
    img: "/images/assets-dashboard.jpg",
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
    icon: 'lucide:mail',
    name: "DMARC",
    tagline: "Email Authentication & Anti-Spoofing",
    color: "var(--accent)",
    bg: "rgba(var(--text-rgb) / 0.10)",
    img: "/images/product-dark-web.jpg",
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
  "phishing-campaigns": {
    icon: 'lucide:fish',
    name: "Phishing Campaigns",
    tagline: "Phishing Simulation & Security Awareness",
    color: "var(--accent)",
    bg: "rgba(var(--accent-rgb) / 0.08)",
    img: "/images/product-phishbot.jpg",
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
    icon: 'lucide:book-open',
    name: "E-learning",
    tagline: "Cybersecurity Training & Education",
    color: "var(--accent)",
    bg: "rgba(var(--accent-rgb) / 0.08)",
    img: "/images/product-phishbot.jpg",
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
    icon: 'lucide:shield-check',
    name: "Compliance Management",
    tagline: "GRC & Regulatory Compliance",
    color: "var(--accent)",
    bg: "rgba(var(--accent-rgb) / 0.08)",
    img: "/images/grc-dashboard.jpg",
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
