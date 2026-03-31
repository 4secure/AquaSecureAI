import { motion } from "framer-motion";
import { fadeUp, scaleIn, stagger, viewport } from "./ui/motion";

// Real frameworks and integrations supported by Aqua Secure AI
const FRAMEWORKS = [
  { name: "CTDISR", cat: "EU Data Protection" },
  { name: "ISO 27001", cat: "Info Security Mgmt" },
  { name: "ETGRM", cat: "ETGRM Framework" },
];
const PARTNERS = [
  "Microsoft Azure",
  "AWS",
  "Google Cloud",
  "CrowdStrike",
  "Palo Alto Networks",
  "Splunk",
];

export default function TrustedBy() {
  return (
    <section className="section" style={{ background: "#0A0B14" }}>
      <div className="wrap">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center mb-12"
        >
          <motion.p variants={fadeUp} className="badge mb-4">
            Compliance Coverage
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-extrabold tracking-tight"
            style={{ fontSize: "clamp(24px,3.2vw,40px)", color: "#E7E0FF" }}
          >
            Trusted Compliance Frameworks
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lead mt-3 max-w-[440px] mx-auto"
            style={{ color: "rgba(200,186,255,0.60)" }}
          >
            Automate evidence collection and reporting across all major
            frameworks with AquaSecure's GRC module.
          </motion.p>
        </motion.div>

        {/* Frameworks grid */}
        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
        >
          {FRAMEWORKS.map((f, i) => (
            <motion.div
              key={f.name}
              variants={scaleIn}
              whileHover={{
                y: -5,
                borderColor: "rgba(138,99,255,0.5)",
                boxShadow: "0 10px 30px rgba(109,86,165,0.2)",
              }}
              className="rounded-xl p-4 text-center flex flex-col items-center gap-2 transition-all cursor-default border"
              style={{
                background: "#16162A",
                borderColor: "rgba(109,86,165,0.2)",
                minHeight: 90,
              }}
            >
              <motion.div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-[11px]"
                style={{
                  background: "linear-gradient(135deg,#8A63FF,#6D56A5)",
                }}
                whileHover={{ scale: 1.1, rotate: 8 }}
              >
                {f.name.slice(0, 3)}
              </motion.div>
              <p className="text-[13px] font-bold" style={{ color: "#E7E0FF" }}>
                {f.name}
              </p>
              <p
                className="text-[10px]"
                style={{ color: "rgba(184,165,255,0.45)" }}
              >
                {f.cat}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech partners */}
        <div
          className="border-t pt-10"
          style={{ borderColor: "rgba(109,86,165,0.12)" }}
        >
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="text-center text-[11px] font-bold uppercase tracking-[1.5px] mb-6"
            style={{ color: "rgba(184,165,255,0.35)" }}
          >
            Technology Integrations
          </motion.p>
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {PARTNERS.map((name) => (
              <motion.div
                key={name}
                variants={fadeUp}
                className="flex items-center gap-2 opacity-35 cursor-default"
                whileHover={{ opacity: 1, scale: 1.05 }}
              >
                <motion.div
                  className="w-5 h-5 rounded"
                  style={{
                    background: "linear-gradient(135deg,#8A63FF,#6D56A5)",
                  }}
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.4 }}
                />
                <span
                  className="text-[14px] font-bold"
                  style={{ color: "#E7E0FF" }}
                >
                  {name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
