import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowRight, ExternalLink } from "lucide-react";
import { useScrolled } from "../hooks";

const NAV = [
  { label: "Home", href: "/", items: [] },
  {
    label: "Products",
    href: "/products",
    items: [
      { l: "GRC",                 h: "/products/grc"              },
      { l: "SOC",                 h: "/products/soc"              },
      { l: "Aqua SIEM",           h: "/products/siem"             },
      { l: "Threat Intelligence", h: "/products/threat-intel"     },
      { l: "Asset Management",    h: "/products/asset-management" },
      { l: "Dark Web",            h: "/products/dark-web"         },
      { l: "Phishbot",            h: "/products/phishbot"         },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    items: [
      { l: "Manage SIEM",           h: "/solutions/manage-siem"           },
      { l: "Attack Surface",        h: "/solutions/attack-surface"        },
      { l: "DMARC",                 h: "/solutions/dmarc"                 },
      { l: "Phishing Campaigns",     h: "/solutions/phishing-campaigns"     },
      { l: "E-learning",            h: "/solutions/e-learning"            },
      { l: "Compliance Management", h: "/solutions/compliance-management" },
    ],
  },
  { label: "Contact", href: "/contact", items: [] },
];

function DropMenu({ items }) {
  if (!items.length) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 6, scale: 0.97 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="absolute top-full left-0 mt-2 py-1.5 rounded-2xl border z-50"
      style={{
        minWidth: 220,
        background: "rgba(240, 241, 249, 0.97)",
        borderColor: "rgba(138,99,255,0.22)",
        boxShadow: "0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(138,99,255,0.10)",
        backdropFilter: "blur(20px)",
      }}
    >
      {items.map((item) => (
        <Link
          key={item.l}
          to={item.h}
          className="flex items-center px-4 py-2.5 text-[13px] transition-all duration-150 rounded-lg mx-1.5"
          style={{ color: "rgba(53, 30, 143, 0.65)", fontWeight: 500 }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#231848";
            e.currentTarget.style.background = "rgba(138,99,255,0.10)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "rgba(68, 50, 140, 0.65)";
            e.currentTarget.style.background = "transparent";
          }}
        >
          {item.l}
        </Link>
      ))}
    </motion.div>
  );
}

export default function Navbar({ barVisible, onDemo }) {
  const scrolled = useScrolled();
  const location = useLocation();
  const [mob, setMob] = useState(false);
  const [open, setOpen] = useState(null);

  const linkColor       = scrolled ? "rgba(200,186,255,0.75)" : "#2d1b6e";
  const linkActiveColor = scrolled ? "#ffffff"                 : "#4F46E5";
  const linkHoverColor  = scrolled ? "#ffffff"                 : "#4F46E5";
  const linkActiveBg    = scrolled ? "rgba(138,99,255,0.18)"   : "rgba(124,58,237,0.08)";
  const linkHoverBg     = scrolled ? "rgba(138,99,255,0.12)"   : "rgba(124,58,237,0.06)";

  // Active check — also highlight Products/Solutions when on sub-pages
  const isActive = (n) => {
    if (location.pathname === n.href) return true
    if (n.href !== '/' && location.pathname.startsWith(n.href)) return true
    return false
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed left-0 right-0 z-50 transition-all duration-300"
        style={{
          top: scrolled ? 0 : barVisible ? 34 : 0,
          ...(scrolled
            ? {
                background: "linear-gradient(135deg, rgba(45,20,100,0.92) 0%, rgba(30,14,70,0.95) 50%, rgba(20,10,50,0.92) 100%)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                borderBottom: "1px solid rgba(138,99,255,0.22)",
                boxShadow: "0 4px 30px rgba(109,86,165,0.20), 0 1px 0 rgba(138,99,255,0.12)",
              }
            : { background: "transparent" }),
        }}
      >
        <div className="wrap flex items-center justify-between h-[66px]">

          {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
                     <img
                       src={scrolled ? "/assets/images/Aquasecure_logo3.png" : "/assets/images/aquasecure_logo.png"}
                       style={{ width: "180px", filter: scrolled ? "none" : "brightness(0.2) saturate(2)" }}
                       alt="Aqua Secure AI"
                     />
                   </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV.map((n) => (
              <div
                key={n.label}
                className="relative"
                onMouseEnter={() => setOpen(n.label)}
                onMouseLeave={() => setOpen(null)}
              >
                <Link
                  to={n.href}
                  className="flex items-center gap-1 text-[14px] font-medium transition-all duration-150 px-3.5 py-2 rounded-lg"
                  style={{
                    color:      isActive(n) ? linkActiveColor : linkColor,
                    background: isActive(n) ? linkActiveBg    : "transparent",
                    fontWeight: isActive(n) ? 600 : 500,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color      = linkHoverColor;
                    e.currentTarget.style.background = linkHoverBg;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color      = isActive(n) ? linkActiveColor : linkColor;
                    e.currentTarget.style.background = isActive(n) ? linkActiveBg    : "transparent";
                  }}
                >
                  {n.label}
                  {n.items.length > 0 && (
                    <motion.div
                      animate={{ rotate: open === n.label ? 180 : 0 }}
                      transition={{ duration: 0.18 }}>
                      <ChevronDown className="w-3.5 h-3.5 opacity-50"/>
                    </motion.div>
                  )}
                </Link>
                <AnimatePresence>
                  {open === n.label && n.items.length > 0 && (
                    <DropMenu items={n.items}/>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="https://secureye.io/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium transition-all duration-150 px-4 py-2 rounded-lg"
              style={{ color: scrolled ? "rgba(200,186,255,0.65)" : "#4F46E5" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color      = scrolled ? "#ffffff" : "#4F46E5";
                e.currentTarget.style.background = scrolled ? "rgba(138,99,255,0.12)" : "rgba(124,58,237,0.07)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color      = scrolled ? "rgba(200,186,255,0.65)" : "#4F46E5";
                e.currentTarget.style.background = "transparent";
              }}
            >
              Login
            </a>
            <motion.a
              href="https://secureye.io/get-started"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-semibold px-5 py-2.5 rounded-xl inline-flex items-center gap-1.5 text-white"
              style={{ background: "linear-gradient(135deg,#7C3AED,#6D28D9)", boxShadow: "0 2px 12px rgba(124,58,237,0.38)" }}
              whileHover={{ scale: 1.04, boxShadow: "0 4px 20px rgba(124,58,237,0.60)" }}
              whileTap={{ scale: 0.96 }}>
              Get Started <ExternalLink className="w-3.5 h-3.5"/>
            </motion.a>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg z-50 transition-colors"
            style={{ color: scrolled ? "#ffffff" : "#4F46E5" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(124,58,237,0.10)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            onClick={() => setMob(!mob)}>
            <AnimatePresence mode="wait">
              <motion.div
                key={mob ? "x" : "m"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.15 }}>
                {mob ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mob && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 overflow-y-auto"
            style={{ background: "#0A0B14" }}>
            <div className="flex flex-col items-center justify-center min-h-full py-20 gap-2">

              {/* Main nav links */}
              {NAV.map((n) => (
                <div key={n.label} className="w-full max-w-xs">
                  <Link
                    to={n.href}
                    onClick={() => setMob(false)}
                    className="text-[20px] font-bold transition-colors block text-center py-2"
                    style={{ color: isActive(n) ? "#8A63FF" : "rgba(200,186,255,0.85)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#8A63FF")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = isActive(n) ? "#8A63FF" : "rgba(200,186,255,0.85)")}>
                    {n.label}
                  </Link>

                  {/* Sub-items */}
                  {n.items.length > 0 && (
                    <div className="flex flex-col items-center gap-1 mt-1 mb-3">
                      {n.items.map(item => (
                        <Link
                          key={item.l}
                          to={item.h}
                          onClick={() => setMob(false)}
                          className="text-[13px] transition-colors py-1"
                          style={{ color: "rgba(200,186,255,0.45)" }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "#B8A5FF")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(200,186,255,0.45)")}>
                          {item.l}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <a
                href="https://secureye.io/get-started"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 px-8 py-3 rounded-full font-semibold text-white inline-flex items-center gap-2"
                style={{ background: "linear-gradient(135deg,#7C3AED,#6D28D9)" }}>
                Get Started <ArrowRight className="w-4 h-4"/>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
