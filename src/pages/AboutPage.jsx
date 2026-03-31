import { motion } from "framer-motion";
import { Shield, ExternalLink, ArrowRight } from "lucide-react";
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

// Real data from aquasecure.ai footer and content
const PRODUCTS_LIST = [
  "GRC (Governance, Risk & Compliance)",
  "SOC (Security Operations Center)",
  "Threat Intelligence",
  "Asset Management",
  "Training & Awareness",
];

const FRAMEWORKS = [
  "CTDISR",
  "ISO 27001",
  "ETGRM",
];

export default function AboutPage({ onDemo }) {
  return (
    <>
      <Helmet>
        <title>About Us — Aqua Secure AI</title>
      </Helmet>
      <PageHero
        badge="About Aqua Secure AI"
        title="Modern SOC Operations"
        accent="Empowering Human"
        sub="Cybersecurity is crucial in today's digital world — Aqua Secure AI ensures your assets remain protected from evolving global threats."
      />

      <section
        className="section relative overflow-hidden"
        style={{ background: "#0A0B14" }}
      >
        <GlowOrbs variant="default" />
        <div className="wrap relative z-10">
          {/* Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-24">
            <motion.div
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.p variants={fadeUp} className="badge mb-5">
                Our Mission
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-extrabold tracking-tight leading-tight mb-5"
                style={{ fontSize: "clamp(26px,3.5vw,42px)", color: "#E7E0FF" }}
              >
                Protecting the digital world,{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg,#E7E0FF,#B8A5FF,#8A63FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  one organisation at a time
                </span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-lead leading-[1.85] mb-5"
                style={{ color: "rgba(200,186,255,0.60)" }}
              >
                Cybersecurity is crucial in today's digital world — Aqua Secure
                AI ensures your assets remain protected from evolving global
                threats. We combine AI-powered SOC operations, GRC compliance
                automation, real-time threat intelligence, and workforce
                training into one unified platform.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-lead leading-[1.85] mb-7"
                style={{ color: "rgba(200,186,255,0.60)" }}
              >
                Our platform — accessible via{" "}
                <a
                  href="https://secureye.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#8A63FF" }}
                  className="hover:underline"
                >
                  secureye.io
                </a>{" "}
                — empowers human SOC analysts with AI-driven investigation, case
                management, detection and response, and threat hunting. Our
                standalone Threat Intelligence Platform at{" "}
                <a
                  href="https://tip.aquasecure.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#8A63FF" }}
                  className="hover:underline"
                >
                  tip.aquasecure.ai
                </a>{" "}
                delivers real-time IP reputation intelligence for free.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <motion.a
                  href="https://secureye.io/get-started"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 6px 28px rgba(138,99,255,.70)",
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get Started <ExternalLink className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="mailto:info@aquasecure.ai"
                  className="btn-outline inline-flex items-center gap-2"
                  whileHover={{ borderColor: "rgba(138,99,255,0.6)" }}
                >
                  Contact Us
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="grid grid-cols-2 gap-4"
            >
              {[
                ["7+", "Security Modules"],
                ["24/7", "SOC Monitoring"],
                ["6+", "GRC Frameworks"],
                ["Free", "TIP Searches/Day"],
              ].map(([v, l]) => (
                <motion.div
                  key={l}
                  whileHover={{ y: -4, borderColor: "rgba(138,99,255,0.4)" }}
                  className="rounded-xl p-6 text-center border transition-all"
                  style={{
                    background: "#16162A",
                    borderColor: "rgba(109,86,165,0.2)",
                  }}
                >
                  <p
                    className="text-[34px] font-black mb-1"
                    style={{
                      background:
                        "linear-gradient(135deg,#E7E0FF,#B8A5FF,#8A63FF)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {v}
                  </p>
                  <p
                    className="text-[13px]"
                    style={{ color: "rgba(200,186,255,0.55)" }}
                  >
                    {l}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Products */}
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mb-24"
          >
            <motion.h2
              variants={fadeUp}
              className="font-extrabold tracking-tight text-center mb-10"
              style={{ fontSize: "clamp(24px,3vw,38px)", color: "#E7E0FF" }}
            >
              Our Product Suite
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PRODUCTS_LIST.map((p, i) => (
                <motion.div
                  key={p}
                  variants={fadeUp}
                  whileHover={{ y: -4, borderColor: "rgba(138,99,255,0.4)" }}
                  className="rounded-xl p-5 border transition-all cursor-default"
                  style={{
                    background: "#16162A",
                    borderColor: "rgba(109,86,165,0.2)",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg mb-3 flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg,rgba(138,99,255,0.2),rgba(109,86,165,0.1))",
                    }}
                  >
                    <Shield className="w-4 h-4" style={{ color: "#8A63FF" }} />
                  </div>
                  <p
                    className="text-[14px] font-semibold"
                    style={{ color: "#E7E0FF" }}
                  >
                    {p}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Compliance frameworks */}
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mb-24"
          >
            <motion.h2
              variants={fadeUp}
              className="font-extrabold tracking-tight text-center mb-10"
              style={{ fontSize: "clamp(24px,3vw,38px)", color: "#E7E0FF" }}
            >
              Compliance Framework Coverage
            </motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {FRAMEWORKS.map((f, i) => (
                <motion.div
                  key={f}
                  variants={fadeUp}
                  whileHover={{
                    y: -4,
                    borderColor: "rgba(138,99,255,0.5)",
                    boxShadow: "0 8px 24px rgba(109,86,165,0.15)",
                  }}
                  className="rounded-xl p-5 text-center border transition-all cursor-default"
                  style={{
                    background: "#16162A",
                    borderColor: "rgba(109,86,165,0.2)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg,#8A63FF,#6D56A5)",
                    }}
                  >
                    <span className="text-white font-black text-[10px]">
                      {f.slice(0, 3)}
                    </span>
                  </div>
                  <p
                    className="text-[13px] font-bold"
                    style={{ color: "#E7E0FF" }}
                  >
                    {f}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="rounded-xl p-10 md:p-14 text-center relative overflow-hidden border"
            style={{
              background: "linear-gradient(135deg,#16162A,#1b1439,#16162A)",
              borderColor: "rgba(138,99,255,0.2)",
            }}
          >
            <GlowOrbs variant="subtle" />
            <div className="relative z-10">
              <motion.h2
                variants={fadeUp}
                className="font-extrabold tracking-tight mb-4"
                style={{ fontSize: "clamp(24px,3vw,38px)", color: "#E7E0FF" }}
              >
                Get in Touch
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-lead mb-3 max-w-[440px] mx-auto"
                style={{ color: "rgba(200,186,255,0.60)" }}
              >
                Ready to protect your organisation? Contact us today.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-[15px] font-semibold mb-7"
                style={{ color: "#8A63FF" }}
              >
                info@aquasecure.ai
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-4 justify-center"
              >
                <motion.a
                  href="https://secureye.io/get-started"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-[15px] px-9 py-4 inline-flex items-center gap-2"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 6px 28px rgba(138,99,255,.70)",
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get Started Free <ExternalLink className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="mailto:info@aquasecure.ai"
                  className="btn-outline text-[15px] px-9 py-4 inline-flex items-center gap-2"
                  whileHover={{ borderColor: "rgba(138,99,255,0.6)" }}
                >
                  Send us an Email
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
