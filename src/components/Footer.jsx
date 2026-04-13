import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Linkedin,
  Mail,
  ExternalLink,
  Shield,
  Instagram,
  Facebook,
  Zap,
  Cpu,
  Twitter,
} from "lucide-react";

const PRODUCTS = [
  { label: "GRC", slug: "grc" },
  { label: "SOC", slug: "soc" },
  { label: "Aqua SIEM", slug: "siem" },
  { label: "Threat Intelligence", slug: "threat-intel" },
  { label: "Asset Management", slug: "asset-management" },
  { label: "Dark Web", slug: "dark-web" },
  { label: "Phishbot", slug: "phishbot" },
];

const SOLUTIONS = [
  { label: "Manage SIEM", slug: "manage-siem" },
  { label: "Attack Surface", slug: "attack-surface" },
  { label: "DMARC", slug: "dmarc" },
  { label: "Fishing Campaigns", slug: "fishing-campaigns" },
  { label: "E-Learning", slug: "e-learning" },
  { label: "Compliance Management", slug: "compliance-management" },
];

const SOCIAL = [
  { Icon: Facebook, href: "https://www.facebook.com/AquaSecureAI" },
  { Icon: Linkedin, href: "https://www.linkedin.com/company/aqua-secure-ai" },
  { Icon: Instagram, href: "https://www.instagram.com/AquaSecureAI" },
  { Icon: Twitter, href: "https://x.com/AquaSecureAI" },
];

const dim = "rgba(200,186,255,0.55)";
const lit = "#B8A5FF";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
    setTimeout(() => setDone(false), 3000);
  };

  return (
    <footer
      style={{
        background: "#06070E",
        borderTop: "1px solid rgba(138,99,255,0.12)",
      }}
    >
      <div className="wrap py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-3 justify-self-start">
            <Link
              to="/"
              className="inline-block align-top justify-self-start mb-3 align-left"
            >
              <img src="/images/Aquasecure_logo3.png" alt="Aqua Secure AI" />
            </Link>
            <p
              className="text-xs leading-relaxed mb-4 -mt-0"
              style={{ color: dim }}
            >
              AI-powered cybersecurity platform protecting your digital assets.
            </p>
            <div className="flex gap-2">
              {SOCIAL.map(({ Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
                  style={{
                    background: "rgba(138,99,255,0.08)",
                    border: "1px solid rgba(138,99,255,0.2)",
                    color: "rgba(200,186,255,0.6)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(138,99,255,0.2)";
                    e.currentTarget.style.color = lit;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(138,99,255,0.08)";
                    e.currentTarget.style.color = "rgba(200,186,255,0.6)";
                  }}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products → /products/:slug */}
          <div className="md:col-span-3">
            <h4
              className="text-xs font-bold uppercase tracking-wider mb-4"
              style={{ color: "#E7E0FF" }}
            >
              Products
            </h4>
            <ul className="space-y-2">
              {PRODUCTS.map(({ label, slug }) => (
                <li key={slug}>
                  <Link
                    to={`/products/${slug}`}
                    className="text-xs transition-colors block"
                    style={{ color: dim }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = lit)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = dim)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions → /solutions/:slug */}
          <div className="md:col-span-3">
            <h4
              className="text-xs font-bold uppercase tracking-wider mb-4"
              style={{ color: "#E7E0FF" }}
            >
              Solutions
            </h4>
            <ul className="space-y-2">
              {SOLUTIONS.map(({ label, slug }) => (
                <li key={slug}>
                  <Link
                    to={`/solutions/${slug}`}
                    className="text-xs transition-colors block"
                    style={{ color: dim }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = lit)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = dim)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Updated */}
          <div className="md:col-span-3">
            <h4
              className="text-xs font-bold uppercase tracking-wider mb-4"
              style={{ color: "#E7E0FF" }}
            >
              Stay Updated
            </h4>
            <p className="text-xs mb-3" style={{ color: dim }}>
              Get threat intelligence & security updates.
            </p>
            <form onSubmit={submit} className="flex gap-2 mb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 text-xs px-3 py-2 rounded-lg outline-none"
                style={{
                  background: "rgba(10,11,20,0.8)",
                  border: "1px solid rgba(138,99,255,0.2)",
                  color: "#E7E0FF",
                }}
              />
              <motion.button
                type="submit"
                className="px-4 py-2 rounded-lg text-xs font-medium text-white"
                style={{ background: "#8A63FF" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {done ? "✓" : "Subscribe"}
              </motion.button>
            </form>
            <div className="flex items-center gap-1.5 mb-4">
              <Shield
                className="w-3 h-3"
                style={{ color: "rgba(138,99,255,0.6)" }}
              />
              <p
                className="text-[10px]"
                style={{ color: "rgba(184,165,255,0.4)" }}
              >
                No spam. Unsubscribe anytime.
              </p>
            </div>
            <div className="space-y-1.5">
              {[
                {
                  l: "AQUA TIP — Threat Intel",
                  h: "https://tip.aquasecure.ai",
                  Icon: Zap,
                },
                { l: "Login", h: "https://secureye.io/login", Icon: Cpu },
                {
                  l: "Get Started Free",
                  h: "https://secureye.io/get-started",
                  Icon: Shield,
                },
              ].map(({ l, h, Icon }) => (
                <a
                  key={l}
                  href={h}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] flex items-center gap-1.5 transition-colors"
                  style={{ color: "rgba(200,186,255,0.45)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = lit)}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(200,186,255,0.45)")
                  }
                >
                  <Icon className="w-3 h-3" />
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "rgba(138,99,255,0.1)" }}
        >
          <p
            className="text-[10px]"
            style={{ color: "rgba(184,165,255,0.35)" }}
          >
            © 2026 All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <Link
              to="/privacypolicy"
              className="text-[10px]"
              style={{ color: "rgba(184,165,255,0.4)" }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/termscondition"
              className="text-[10px]"
              style={{ color: "rgba(184,165,255,0.4)" }}
            >
              Terms & Conditions
            </Link>
            <a
              href="mailto:info@aquasecure.ai"
              className="text-[10px]"
              style={{ color: "rgba(184,165,255,0.4)" }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
