// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Helmet } from "react-helmet-async";
// import {
//   Mail,
//   ExternalLink,
//   Shield,
//   Clock,
//   Send,
//   CheckCircle,
//   MapPin,
//   MessageSquare,
//   Phone,
// } from "lucide-react";
// import {
//   fadeUp,
//   fadeLeft,
//   fadeRight,
//   stagger,
//   viewport,
// } from "../components/ui/motion";
// import GlowOrbs from "../components/ui/GlowOrbs";

// const TOPICS = [
//   "General Enquiry",
//   "Product Demo",
//   "Pricing & Plans",
//   "Technical Support",
//   "Partnership / Reseller",
//   "Other",
// ];

// const PRODUCTS_LIST = [
//   "Aqua SIEM",
//   "SOC",
//   "Threat Intelligence",
//   "Dark Web",
//   "Phishbot",
//   "Asset Management",
//   "GRC",
// ];
// const SOLUTIONS_LIST = [
//   "Manage SIEM",
//   "Attack Surface",
//   "DMARC",
//   "Phishing Campaigns",
//   "E-learning",
//   "Compliance Management",
// ];

// const INFO_CARDS = [
//   {
//     icon: Mail,
//     color: "#8A63FF",
//     bg: "rgba(138,99,255,0.10)",
//     label: "Email Us",
//     value: "info@aquasecure.ai",
//     sub: "We reply within 24 hours",
//     href: "mailto:info@aquasecure.ai",
//   },
// ];

// function InputField({
//   label,
//   name,
//   type = "text",
//   placeholder,
//   value,
//   onChange,
//   required,
// }) {
//   const [focused, setFocused] = useState(false);
//   return (
//     <div className="flex flex-col gap-1.5">
//       <label
//         className="text-[12px] font-semibold"
//         style={{ color: "rgba(60,50,120,0.65)" }}
//       >
//         {label}
//         {required && <span style={{ color: "#8A63FF" }}> *</span>}
//       </label>
//       <input
//         name={name}
//         type={type}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         required={required}
//         onFocus={() => setFocused(true)}
//         onBlur={() => setFocused(false)}
//         className="rounded-xl px-4 py-3 text-[14px] outline-none transition-all duration-200 w-full"
//         style={{
//           background: "rgba(255,255,255,0.90)",
//           border: `1px solid ${focused ? "rgba(138,99,255,0.55)" : "rgba(109,86,165,0.22)"}`,
//           color: "#1e1b4b",
//           boxShadow: focused ? "0 0 0 3px rgba(138,99,255,0.08)" : "none",
//         }}
//       />
//     </div>
//   );
// }

// function TextareaField({
//   label,
//   name,
//   placeholder,
//   value,
//   onChange,
//   required,
//   rows = 5,
// }) {
//   const [focused, setFocused] = useState(false);
//   return (
//     <div className="flex flex-col gap-1.5">
//       <label
//         className="text-[12px] font-semibold"
//         style={{ color: "rgba(60,50,120,0.65)" }}
//       >
//         {label}
//         {required && <span style={{ color: "#8A63FF" }}> *</span>}
//       </label>
//       <textarea
//         name={name}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         required={required}
//         rows={rows}
//         onFocus={() => setFocused(true)}
//         onBlur={() => setFocused(false)}
//         className="rounded-xl px-4 py-3 text-[14px] outline-none transition-all duration-200 resize-none w-full"
//         style={{
//           background: "rgba(255,255,255,0.90)",
//           border: `1px solid ${focused ? "rgba(138,99,255,0.55)" : "rgba(109,86,165,0.22)"}`,
//           color: "#1e1b4b",
//           boxShadow: focused ? "0 0 0 3px rgba(138,99,255,0.08)" : "none",
//         }}
//       />
//     </div>
//   );
// }

// function SelectField({ label, name, value, onChange, options }) {
//   const [focused, setFocused] = useState(false);
//   return (
//     <div className="flex flex-col gap-1.5">
//       <label
//         className="text-[12px] font-semibold"
//         style={{ color: "rgba(60,50,120,0.65)" }}
//       >
//         {label}
//       </label>
//       <select
//         name={name}
//         value={value}
//         onChange={onChange}
//         onFocus={() => setFocused(true)}
//         onBlur={() => setFocused(false)}
//         className="rounded-xl px-4 py-3 text-[14px] outline-none transition-all duration-200 cursor-pointer w-full"
//         style={{
//           background: "rgba(255,255,255,0.90)",
//           border: `1px solid ${focused ? "rgba(138,99,255,0.55)" : "rgba(109,86,165,0.22)"}`,
//           color: "#1e1b4b",
//           boxShadow: focused ? "0 0 0 3px rgba(138,99,255,0.08)" : "none",
//         }}
//       >
//         {options.map((o) => (
//           <option
//             key={o}
//             value={o}
//             style={{ background: "#ffffff", color: "#1e1b4b" }}
//           >
//             {o}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// export default function ContactPage() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     company: "",
//     topic: "General Enquiry",
//     category: "",
//     item: "",
//     message: "",
//   });
//   const [sent, setSent] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handle = (e) =>
//     setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
//   const setCategory = (cat) =>
//     setForm((f) => ({
//       ...f,
//       category: f.category === cat ? "" : cat,
//       item: "",
//     }));

//   const submit = async (e) => {
//     e.preventDefault();
//     if (!form.name || !form.email || !form.message) return;
//     setLoading(true);
//     try {
//       // Web3Forms — free, no backend needed
//       // Get your free access key at: https://web3forms.com
//       // Enter your email → get key instantly, no signup required
//       const res = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify({
//           access_key: "YOUR_WEB3FORMS_KEY",
//           subject: `[Aqua Secure] ${form.topic}${form.category ? ` — ${form.category}: ${form.item}` : ""} — from ${form.name}`,
//           from_name: "Aqua Secure AI Website",
//           name: form.name,
//           email: form.email,
//           company: form.company,
//           topic: form.topic,
//           category: form.category || "None",
//           item: form.item || "None",
//           message: form.message,
//         }),
//       });
//       const data = await res.json();
//       if (data.success) {
//         setSent(true);
//       } else {
//         alert(data?.message || "Something went wrong. Please try again.");
//       }
//     } catch {
//       alert("Network error — please check your connection and try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const reset = () => {
//     setSent(false);
//     setForm({
//       name: "",
//       email: "",
//       company: "",
//       topic: "General Enquiry",
//       category: "",
//       item: "",
//       message: "",
//     });
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Contact — Aqua Secure AI</title>
//       </Helmet>

//       {/* ── Hero ── */}
//       <section
//         className="relative overflow-hidden pt-[108px] pb-20"
//         style={{ background: "#ffffff" }}
//       >
//         <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background:
//               "radial-gradient(ellipse 65% 55% at 50% 40%, rgba(138,99,255,0.13) 0%, transparent 70%)",
//           }}
//         />
//         <GlowOrbs variant="hero" />

//         <div className="wrap relative z-10 text-center">
//           <motion.div
//             variants={stagger(0.1)}
//             initial="hidden"
//             whileInView="show"
//             viewport={viewport}
//           >
//             <motion.div variants={fadeUp} className="flex justify-center mb-5">
//               <span className="badge">Get In Touch</span>
//             </motion.div>
//             <motion.h1
//               variants={fadeUp}
//               className="font-black leading-tight tracking-tight mb-5"
//               style={{
//                 fontSize: "clamp(38px,5.5vw,66px)",
//                 color: "#0b0b0d",
//                 letterSpacing: "-0.03em",
//               }}
//             >
//               Let's Talk <span style={{color: 'rgb(97, 9, 175)'}}>Security</span>
//             </motion.h1>
//             <motion.p
//               variants={fadeUp}
//               className="text-lead leading-[1.8] max-w-[500px] mx-auto"
//               style={{ color: "rgba(0, 0, 0, 0.6)" }}
//             >
//               Have questions, need a demo, or want to discuss your
//               organisation's security needs? We'd love to hear from you.
//             </motion.p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Main content ── */}
//       <section
//         className="relative overflow-hidden pt-10"
//         style={{ background: "#f0eaff" }}
//       >
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background:
//               "radial-gradient(ellipse 80% 50% at 50% 80%, rgba(109,86,165,0.10) 0%, transparent 70%)",
//           }}
//         />

//         <div className="wrap pb-24 relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 lg:gap-14 items-start">
//             {/* ── Left: Form ── */}
//             <motion.div
//               variants={fadeLeft}
//               initial="hidden"
//               whileInView="show"
//               viewport={viewport}
//             >
//               <div
//                 className="rounded-2xl p-8 lg:p-10 border"
//                 style={{
//                   background: "rgba(255,255,255,0.85)",
//                   borderColor: "rgba(109,86,165,0.18)",
//                   boxShadow: "0 4px 40px rgba(109,86,165,0.10)",
//                   backdropFilter: "blur(12px)",
//                 }}
//               >
//                 <AnimatePresence mode="wait">
//                   {sent ? (
//                     <motion.div
//                       key="success"
//                       initial={{ opacity: 0, scale: 0.96 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0 }}
//                       className="flex flex-col items-center justify-center text-center py-16 gap-5"
//                     >
//                       <motion.div
//                         initial={{ scale: 0 }}
//                         animate={{ scale: 1 }}
//                         transition={{ type: "spring", delay: 0.1 }}
//                         className="w-20 h-20 rounded-full flex items-center justify-center"
//                         style={{
//                           background: "rgba(41,224,122,0.10)",
//                           border: "1px solid rgba(41,224,122,0.30)",
//                         }}
//                       >
//                         <CheckCircle
//                           className="w-10 h-10"
//                           style={{ color: "#29E07A" }}
//                         />
//                       </motion.div>
//                       <div>
//                         <h3
//                           className="text-[24px] font-extrabold mb-2"
//                           style={{ color: "#1e1b4b" }}
//                         >
//                           Message Sent!
//                         </h3>
//                         <p
//                           className="text-[14px] max-w-[300px] mx-auto"
//                           style={{ color: "rgba(60,50,120,0.60)" }}
//                         >
//                           Thanks for reaching out. Our team will get back to you
//                           within 24 hours.
//                         </p>
//                       </div>
//                       <motion.button
//                         onClick={reset}
//                         className="mt-2 text-[13px] font-semibold px-6 py-2.5 rounded-xl border transition-all"
//                         style={{
//                           background: "rgba(138,99,255,0.08)",
//                           color: "#6D56A5",
//                           borderColor: "rgba(138,99,255,0.20)",
//                         }}
//                         whileHover={{ background: "rgba(138,99,255,0.20)" }}
//                       >
//                         Send another message
//                       </motion.button>
//                     </motion.div>
//                   ) : (
//                     <motion.div
//                       key="form"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                     >
//                       <div className="mb-8">
//                         <h2
//                           className="text-[22px] font-extrabold mb-1.5"
//                           style={{ color: "#1e1b4b" }}
//                         >
//                           Send us a message
//                         </h2>
//                         <p
//                           className="text-[13px]"
//                           style={{ color: "rgba(60,50,120,0.45)" }}
//                         >
//                           Fill out the form and we'll get back to you within 24
//                           hours.
//                         </p>
//                       </div>

//                       <form onSubmit={submit} className="flex flex-col gap-5">
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                           <InputField
//                             label="Full Name"
//                             name="name"
//                             placeholder="John Smith"
//                             value={form.name}
//                             onChange={handle}
//                             required
//                           />
//                           <InputField
//                             label="Email Address"
//                             name="email"
//                             type="email"
//                             placeholder="john@company.com"
//                             value={form.email}
//                             onChange={handle}
//                             required
//                           />
//                         </div>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                           <InputField
//                             label="Company"
//                             name="company"
//                             placeholder="Your company name"
//                             value={form.company}
//                             onChange={handle}
//                           />
//                           <SelectField
//                             label="Topic"
//                             name="topic"
//                             value={form.topic}
//                             onChange={handle}
//                             options={TOPICS}
//                           />
//                         </div>

//                         {/* ── Products / Solutions picker ── */}
//                         <div className="flex flex-col gap-3">
//                           <label
//                             className="text-[12px] font-semibold"
//                             style={{ color: "rgba(60,50,120,0.65)" }}
//                           >
//                             Interested in a Product or Solution?{" "}
//                             <span
//                               style={{
//                                 color: "rgba(60,50,120,0.35)",
//                                 fontWeight: 400,
//                               }}
//                             >
//                               (optional)
//                             </span>
//                           </label>

//                           {/* Toggle buttons */}
//                           <div className="flex gap-3">
//                             {["Products", "Solutions"].map((cat) => (
//                               <button
//                                 key={cat}
//                                 type="button"
//                                 onClick={() => setCategory(cat)}
//                                 className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold border transition-all duration-200"
//                                 style={{
//                                   background:
//                                     form.category === cat
//                                       ? "rgba(138,99,255,0.10)"
//                                       : "rgba(255,255,255,0.90)",
//                                   borderColor:
//                                     form.category === cat
//                                       ? "rgba(138,99,255,0.50)"
//                                       : "rgba(109,86,165,0.22)",
//                                   color:
//                                     form.category === cat
//                                       ? "#8A63FF"
//                                       : "rgba(60,50,120,0.60)",
//                                 }}
//                               >
//                                 <span
//                                   style={{
//                                     width: 14,
//                                     height: 14,
//                                     borderRadius: "50%",
//                                     border: "2px solid",
//                                     borderColor:
//                                       form.category === cat
//                                         ? "#8A63FF"
//                                         : "rgba(109,86,165,0.35)",
//                                     background:
//                                       form.category === cat
//                                         ? "#8A63FF"
//                                         : "transparent",
//                                     display: "inline-flex",
//                                     alignItems: "center",
//                                     justifyContent: "center",
//                                     flexShrink: 0,
//                                   }}
//                                 >
//                                   {form.category === cat && (
//                                     <span
//                                       style={{
//                                         width: 5,
//                                         height: 5,
//                                         borderRadius: "50%",
//                                         background: "#fff",
//                                       }}
//                                     />
//                                   )}
//                                 </span>
//                                 {cat}
//                               </button>
//                             ))}
//                           </div>

//                           {/* Dropdown — animates in */}
//                           {form.category && (
//                             <motion.div
//                               initial={{ opacity: 0, y: -6 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               transition={{ duration: 0.2 }}
//                             >
//                               <select
//                                 name="item"
//                                 value={form.item}
//                                 onChange={handle}
//                                 className="rounded-xl px-4 py-3 text-[13px] outline-none w-full cursor-pointer transition-all duration-200"
//                                 style={{
//                                   background: "rgba(255,255,255,0.90)",
//                                   border: "1px solid rgba(138,99,255,0.35)",
//                                   color: form.item
//                                     ? "#1e1b4b"
//                                     : "rgba(60,50,120,0.40)",
//                                 }}
//                               >
//                                 <option value="">
//                                   — Select a {form.category.slice(0, -1)} —
//                                 </option>
//                                 {(form.category === "Products"
//                                   ? PRODUCTS_LIST
//                                   : SOLUTIONS_LIST
//                                 ).map((opt) => (
//                                   <option
//                                     key={opt}
//                                     value={opt}
//                                     style={{
//                                       color: "#1e1b4b",
//                                       background: "#fff",
//                                     }}
//                                   >
//                                     {opt}
//                                   </option>
//                                 ))}
//                               </select>
//                             </motion.div>
//                           )}
//                         </div>
//                         <TextareaField
//                           label="Message"
//                           name="message"
//                           placeholder="Tell us about your security needs, what you're looking for, or any questions you have..."
//                           value={form.message}
//                           onChange={handle}
//                           required
//                           rows={6}
//                         />

//                         <motion.button
//                           type="submit"
//                           disabled={loading}
//                           className="flex items-center justify-center gap-2.5 w-full px-8 py-4 rounded-xl font-semibold text-[15px] text-white mt-1"
//                           style={{
//                             background:
//                               "linear-gradient(135deg,#8A63FF,#6D56A5)",
//                             boxShadow: "0 4px 20px rgba(138,99,255,0.38)",
//                           }}
//                           whileHover={{
//                             scale: 1.02,
//                             boxShadow: "0 6px 30px rgba(138,99,255,0.55)",
//                           }}
//                           whileTap={{ scale: 0.97 }}
//                         >
//                           {loading ? (
//                             <>
//                               <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />{" "}
//                               Sending...
//                             </>
//                           ) : (
//                             <>
//                               <Send className="w-4 h-4" /> Send Message
//                             </>
//                           )}
//                         </motion.button>
//                       </form>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </motion.div>

//             {/* ── Right: Info ── */}
//             <motion.div
//               variants={fadeRight}
//               initial="hidden"
//               whileInView="show"
//               viewport={viewport}
//               className="flex flex-col gap-4 lg:sticky lg:top-28"
//             >
//               {/* Info cards */}
//               {INFO_CARDS.map((card, i) => {
//                 const Icon = card.icon;
//                 return (
//                   <motion.div
//                     key={card.label}
//                     initial={{ opacity: 0, x: 20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={viewport}
//                     transition={{ delay: i * 0.07 }}
//                     className="flex items-center gap-4 rounded-2xl p-5 border transition-all duration-300 group"
//                     style={{
//                       background: "rgba(255,255,255,0.80)",
//                       borderColor: "rgba(109,86,165,0.18)",
//                       backdropFilter: "blur(12px)",
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.borderColor = `${card.color}40`;
//                       e.currentTarget.style.background =
//                         "rgba(255,255,255,0.98)";
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.borderColor =
//                         "rgba(109,86,165,0.18)";
//                       e.currentTarget.style.background =
//                         "rgba(255,255,255,0.80)";
//                     }}
//                   >
//                     <div
//                       className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
//                       style={{ background: card.bg }}
//                     >
//                       <Icon
//                         className="w-5 h-5"
//                         style={{ color: card.color }}
//                         strokeWidth={1.8}
//                       />
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <p
//                         className="text-[10px] font-bold uppercase tracking-wider mb-0.5"
//                         style={{ color: "rgba(109,86,165,0.45)" }}
//                       >
//                         {card.label}
//                       </p>
//                       {card.href ? (
//                         <a
//                           href={card.href}
//                           target={
//                             card.href.startsWith("mailto")
//                               ? undefined
//                               : "_blank"
//                           }
//                           rel="noopener noreferrer"
//                           className="text-[14px] font-semibold block truncate transition-colors duration-200"
//                           style={{ color: "#1e1b4b" }}
//                           onMouseEnter={(e) =>
//                             (e.currentTarget.style.color = card.color)
//                           }
//                           onMouseLeave={(e) =>
//                             (e.currentTarget.style.color = "#1e1b4b")
//                           }
//                         >
//                           {card.value}
//                         </a>
//                       ) : (
//                         <p
//                           className="text-[14px] font-semibold"
//                           style={{ color: "#1e1b4b" }}
//                         >
//                           {card.value}
//                         </p>
//                       )}
//                       <p
//                         className="text-[11px] mt-0.5"
//                         style={{ color: "rgba(109,86,165,0.45)" }}
//                       >
//                         {card.sub}
//                       </p>
//                     </div>
//                   </motion.div>
//                 );
//               })}

//               {/* TIP CTA card */}
//               <motion.div
//                 initial={{ opacity: 0, y: 12 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={viewport}
//                 transition={{ delay: 0.32 }}
//                 className="rounded-2xl p-6 border mt-2"
//                 style={{
//                   background:
//                     "linear-gradient(135deg, rgba(138,99,255,0.08), rgba(109,86,165,0.04))",
//                   borderColor: "rgba(138,99,255,0.22)",
//                 }}
//               >
//                 <div className="flex items-center gap-2 mb-3">
//                   <div
//                     className="w-8 h-8 rounded-lg flex items-center justify-center"
//                     style={{ background: "rgba(138,99,255,0.12)" }}
//                   >
//                     <Shield className="w-4 h-4" style={{ color: "#8A63FF" }} />
//                   </div>
//                   <h3
//                     className="text-[15px] font-extrabold"
//                     style={{ color: "#1e1b4b" }}
//                   >
//                     Try before you commit
//                   </h3>
//                 </div>
//                 <p
//                   className="text-[13px] leading-relaxed mb-4"
//                   style={{ color: "rgba(60,50,120,0.60)" }}
//                 >
//                   Get 1 free IP lookup per day on our Threat Intelligence
//                   Platform — no credit card needed.
//                 </p>
//                 <motion.a
//                   href="https://tip.aquasecure.ai"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-semibold text-white"
//                   style={{
//                     background: "linear-gradient(135deg,#8A63FF,#6D56A5)",
//                     boxShadow: "0 4px 14px rgba(138,99,255,0.30)",
//                   }}
//                   whileHover={{
//                     scale: 1.04,
//                     boxShadow: "0 6px 22px rgba(138,99,255,0.50)",
//                   }}
//                   whileTap={{ scale: 0.97 }}
//                 >
//                   Try AQUA TIP Free <ExternalLink className="w-3.5 h-3.5" />
//                 </motion.a>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Mail, ExternalLink, Shield, Clock, Send, CheckCircle, MapPin, MessageSquare, Phone } from 'lucide-react'
import { fadeUp, fadeLeft, fadeRight, stagger, viewport } from '../components/ui/motion'
import GlowOrbs from '../components/ui/GlowOrbs'

const TOPICS = ['General Enquiry', 'Product Demo', 'Pricing & Plans', 'Technical Support', 'Partnership / Reseller', 'Other']

const PRODUCTS_LIST = ['Aqua SIEM', 'SOC', 'Threat Intelligence', 'Dark Web', 'Phishbot', 'Asset Management', 'GRC']
const SOLUTIONS_LIST = ['Manage SIEM', 'Attack Surface', 'DMARC', 'Fishing Campaigns', 'E-learning', 'Compliance Management']

const PRODUCT_SLUGS = {
  'Aqua SIEM': 'siem', 'SOC': 'soc', 'Threat Intelligence': 'threat-intel',
  'Dark Web': 'dark-web', 'Phishbot': 'phishbot', 'Asset Management': 'asset-management', 'GRC': 'grc',
}
const SOLUTION_SLUGS = {
  'Manage SIEM': 'manage-siem', 'Attack Surface': 'attack-surface', 'DMARC': 'dmarc',
  'Fishing Campaigns': 'fishing-campaigns', 'E-learning': 'e-learning', 'Compliance Management': 'compliance-management',
}

const INFO_CARDS = [
  {
    icon: Mail,
    color: '#8A63FF',
    bg: 'rgba(138,99,255,0.10)',
    label: 'Email Us',
    value: 'info@aquasecure.ai',
    sub: 'We reply within 24 hours',
    href: 'mailto:info@aquasecure.ai',
  },
 

]

function InputField({ label, name, type='text', placeholder, value, onChange, required }) {
  const [focused, setFocused] = useState(false)
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[12px] font-semibold" style={{ color:'rgba(60,50,120,0.65)' }}>
        {label}{required && <span style={{ color:'#8A63FF' }}> *</span>}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="rounded-xl px-4 py-3 text-[14px] outline-none transition-all duration-200 w-full"
        style={{
          background: 'rgba(255,255,255,0.90)',
          border: `1px solid ${focused ? 'rgba(138,99,255,0.55)' : 'rgba(109,86,165,0.22)'}`,
          color: '#1e1b4b',
          boxShadow: focused ? '0 0 0 3px rgba(138,99,255,0.08)' : 'none',
        }}
      />
    </div>
  )
}

function TextareaField({ label, name, placeholder, value, onChange, required, rows=5 }) {
  const [focused, setFocused] = useState(false)
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[12px] font-semibold" style={{ color:'rgba(60,50,120,0.65)' }}>
        {label}{required && <span style={{ color:'#8A63FF' }}> *</span>}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="rounded-xl px-4 py-3 text-[14px] outline-none transition-all duration-200 resize-none w-full"
        style={{
          background: 'rgba(255,255,255,0.90)',
          border: `1px solid ${focused ? 'rgba(138,99,255,0.55)' : 'rgba(109,86,165,0.22)'}`,
          color: '#1e1b4b',
          boxShadow: focused ? '0 0 0 3px rgba(138,99,255,0.08)' : 'none',
        }}
      />
    </div>
  )
}

function SelectField({ label, name, value, onChange, options }) {
  const [focused, setFocused] = useState(false)
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[12px] font-semibold" style={{ color:'rgba(60,50,120,0.65)' }}>{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="rounded-xl px-4 py-3 text-[14px] outline-none transition-all duration-200 cursor-pointer w-full"
        style={{
          background: 'rgba(255,255,255,0.90)',
          border: `1px solid ${focused ? 'rgba(138,99,255,0.55)' : 'rgba(109,86,165,0.22)'}`,
          color: '#1e1b4b',
          boxShadow: focused ? '0 0 0 3px rgba(138,99,255,0.08)' : 'none',
        }}>
        {options.map(o => <option key={o} value={o} style={{ background:'#ffffff', color:'#1e1b4b' }}>{o}</option>)}
      </select>
    </div>
  )
}

export default function ContactPage() {
  const [form, setForm] = useState({ name:'', email:'', company:'', topic:'General Enquiry', category:'', item:'', message:'' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const setCategory = cat => setForm(f => ({ ...f, category: f.category === cat ? '' : cat, item:'' }))

  const submit = async e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    try {
      const res = await fetch('https://aquasecure.ai/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:     form.name,
          email:    form.email,
          company:  form.company,
          topic:    form.topic,
          category: form.category || '',
          item:     form.item || '',
          message:  form.message,
        }),
      })
      const data = await res.json()
      if (res.ok && data.ok) {
        setSent(true)
      } else {
        alert(data?.error || 'Something went wrong. Please try again.')
      }
    } catch {
      alert('Network error — please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  const reset = () => {
    setSent(false)
    setForm({ name:'', email:'', company:'', topic:'General Enquiry', category:'', item:'', message:'' })
  }

  return (
    <>
      <Helmet><title>Contact — Aqua Secure AI</title></Helmet>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-[108px] pb-20" style={{ background:'#ffffff' }}>
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-50"/>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background:'radial-gradient(ellipse 65% 55% at 50% 40%, rgba(138,99,255,0.13) 0%, transparent 70%)' }}/>
        <GlowOrbs variant="hero"/>

        <div className="wrap relative z-10 text-center">
          <motion.div variants={stagger(.1)} initial="hidden" whileInView="show" viewport={viewport}>
            <motion.div variants={fadeUp} className="flex justify-center mb-5">
              <span className="badge">Get In Touch</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-black leading-tight tracking-tight mb-5"
              style={{ fontSize:'clamp(38px,5.5vw,66px)', color:'#0b0b0c', letterSpacing:'-0.03em' }}>
              Let's Talk{' '}
              <span className="tg">Security</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lead leading-[1.8] max-w-[500px] mx-auto"
              style={{ color:'rgba(39, 28, 82, 0.6)' }}>
              Have questions, need a demo, or want to discuss your organisation's security needs? We'd love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="relative overflow-hidden" style={{ background:'#f0eaff' }}>
        <div className="absolute inset-0 pointer-events-none "
          style={{ background:'radial-gradient(ellipse 80% 50% at 50% 80%, rgba(109,86,165,0.10) 0%, transparent 70%)' }}/>

        <div className="wrap pb-24 relative z-10 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 lg:gap-14 items-start">

            {/* ── Left: Form ── */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewport}>
              <div className="rounded-2xl p-8 lg:p-10 border"
                style={{ background:'rgba(255,255,255,0.85)', borderColor:'rgba(109,86,165,0.18)', boxShadow:'0 4px 40px rgba(109,86,165,0.10)', backdropFilter:'blur(12px)' }}>

                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div key="success"
                      initial={{ opacity:0, scale:.96 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0 }}
                      className="flex flex-col items-center justify-center text-center py-16 gap-5">
                      <motion.div initial={{ scale:0 }} animate={{ scale:1 }} transition={{ type:'spring', delay:.1 }}
                        className="w-20 h-20 rounded-full flex items-center justify-center"
                        style={{ background:'rgba(41,224,122,0.10)', border:'1px solid rgba(41,224,122,0.30)' }}>
                        <CheckCircle className="w-10 h-10" style={{ color:'#29E07A' }}/>
                      </motion.div>
                      <div>
                        <h3 className="text-[24px] font-extrabold mb-2" style={{ color:'#1e1b4b' }}>Message Sent!</h3>
                        <p className="text-[14px] max-w-[300px] mx-auto" style={{ color:'rgba(60,50,120,0.60)' }}>
                          Thanks for reaching out. Our team will get back to you within 24 hours.
                        </p>
                      </div>
                      <motion.button onClick={reset}
                        className="mt-2 text-[13px] font-semibold px-6 py-2.5 rounded-xl border transition-all"
                        style={{ background:'rgba(138,99,255,0.08)', color:'#6D56A5', borderColor:'rgba(138,99,255,0.20)' }}
                        whileHover={{ background:'rgba(138,99,255,0.20)' }}>
                        Send another message
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.div key="form" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}>
                      <div className="mb-8">
                        <h2 className="text-[22px] font-extrabold mb-1.5" style={{ color:'#1e1b4b' }}>Send us a message</h2>
                        <p className="text-[13px]" style={{ color:'rgba(60,50,120,0.45)' }}>
                          Fill out the form and we'll get back to you within 24 hours.
                        </p>
                      </div>

                      <form onSubmit={submit} className="flex flex-col gap-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <InputField label="Full Name" name="name" placeholder="John Smith" value={form.name} onChange={handle} required/>
                          <InputField label="Email Address" name="email" type="email" placeholder="john@company.com" value={form.email} onChange={handle} required/>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <InputField label="Company" name="company" placeholder="Your company name" value={form.company} onChange={handle}/>
                          <SelectField label="Topic" name="topic" value={form.topic} onChange={handle} options={TOPICS}/>
                        </div>

                        {/* ── Products / Solutions picker ── */}
                        <div className="flex flex-col gap-3">
                          <label className="text-[12px] font-semibold" style={{ color:'rgba(60,50,120,0.65)' }}>
                            Interested in a Product or Solution? <span style={{ color:'rgba(60,50,120,0.35)', fontWeight:400 }}>(optional)</span>
                          </label>

                          {/* Toggle buttons */}
                          <div className="flex gap-3">
                            {['Products', 'Solutions'].map(cat => (
                              <button key={cat} type="button"
                                onClick={() => setCategory(cat)}
                                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold border transition-all duration-200"
                                style={{
                                  background: form.category === cat ? 'rgba(138,99,255,0.10)' : 'rgba(255,255,255,0.90)',
                                  borderColor: form.category === cat ? 'rgba(138,99,255,0.50)' : 'rgba(109,86,165,0.22)',
                                  color: form.category === cat ? '#8A63FF' : 'rgba(60,50,120,0.60)',
                                }}>
                                <span style={{
                                  width: 14, height: 14, borderRadius: '50%', border: '2px solid',
                                  borderColor: form.category === cat ? '#8A63FF' : 'rgba(109,86,165,0.35)',
                                  background: form.category === cat ? '#8A63FF' : 'transparent',
                                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                                }}>
                                  {form.category === cat && <span style={{ width:5, height:5, borderRadius:'50%', background:'#fff' }}/>}
                                </span>
                                {cat}
                              </button>
                            ))}
                          </div>

                          {/* Dropdown — animates in */}
                          {form.category && (
                            <motion.div
                              initial={{ opacity:0, y:-6 }} animate={{ opacity:1, y:0 }}
                              transition={{ duration:0.2 }}
                              className="flex flex-col gap-2">
                              <select name="item" value={form.item} onChange={handle}
                                className="rounded-xl px-4 py-3 text-[13px] outline-none w-full cursor-pointer transition-all duration-200"
                                style={{
                                  background:'rgba(255,255,255,0.90)',
                                  border:'1px solid rgba(138,99,255,0.35)',
                                  color: form.item ? '#1e1b4b' : 'rgba(60,50,120,0.40)',
                                }}>
                                <option value="">— Select a {form.category.slice(0,-1)} —</option>
                                {(form.category === 'Products' ? PRODUCTS_LIST : SOLUTIONS_LIST).map(opt => (
                                  <option key={opt} value={opt} style={{ color:'#1e1b4b', background:'#fff' }}>{opt}</option>
                                ))}
                              </select>

                              {/* Route link — appears when item is selected */}
                              {form.item && (
                                <motion.div initial={{ opacity:0, x:-4 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.18 }}>
                                  <Link
                                    to={form.category === 'Products'
                                      ? `/products/${PRODUCT_SLUGS[form.item]}`
                                      : `/solutions/${SOLUTION_SLUGS[form.item]}`}
                                    target="_blank"
                                    className="inline-flex items-center gap-1.5 text-[12px] font-semibold px-3 py-1.5 rounded-lg transition-all"
                                    style={{ color:'#8A63FF', background:'rgba(138,99,255,0.08)', border:'1px solid rgba(138,99,255,0.20)' }}>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                      <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                                    </svg>
                                    View {form.item} page
                                  </Link>
                                </motion.div>
                              )}
                            </motion.div>
                          )}
                        </div>
                        <TextareaField label="Message" name="message" placeholder="Tell us about your security needs, what you're looking for, or any questions you have..." value={form.message} onChange={handle} required rows={6}/>

                        <motion.button type="submit" disabled={loading}
                          className="flex items-center justify-center gap-2.5 w-full px-8 py-4 rounded-xl font-semibold text-[15px] text-white mt-1"
                          style={{ background:'linear-gradient(135deg,#8A63FF,#6D56A5)', boxShadow:'0 4px 20px rgba(138,99,255,0.38)' }}
                          whileHover={{ scale:1.02, boxShadow:'0 6px 30px rgba(138,99,255,0.55)' }}
                          whileTap={{ scale:.97 }}>
                          {loading
                            ? <><div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"/> Sending...</>
                            : <><Send className="w-4 h-4"/> Send Message</>}
                        </motion.button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* ── Right: Info ── */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={viewport}
              className="flex flex-col gap-4 lg:sticky lg:top-28">

              {/* Info cards */}
              {INFO_CARDS.map((card, i) => {
                const Icon = card.icon
                return (
                  <motion.div key={card.label}
                    initial={{ opacity:0, x:20 }} whileInView={{ opacity:1, x:0 }}
                    viewport={viewport} transition={{ delay: i * 0.07 }}
                    className="flex items-center gap-4 rounded-2xl p-5 border transition-all duration-300 group"
                    style={{ background:'rgba(255,255,255,0.80)', borderColor:'rgba(109,86,165,0.18)', backdropFilter:'blur(12px)' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor=`${card.color}40`; e.currentTarget.style.background='rgba(255,255,255,0.98)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(109,86,165,0.18)'; e.currentTarget.style.background='rgba(255,255,255,0.80)' }}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ background:card.bg }}>
                      <Icon className="w-5 h-5" style={{ color:card.color }} strokeWidth={1.8}/>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-wider mb-0.5"
                        style={{ color:'rgba(109,86,165,0.45)' }}>{card.label}</p>
                      {card.href
                        ? <a href={card.href} target={card.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                            className="text-[14px] font-semibold block truncate transition-colors duration-200"
                            style={{ color:'#1e1b4b' }}
                            onMouseEnter={e => e.currentTarget.style.color=card.color}
                            onMouseLeave={e => e.currentTarget.style.color='#1e1b4b'}>
                            {card.value}
                          </a>
                        : <p className="text-[14px] font-semibold" style={{ color:'#1e1b4b' }}>{card.value}</p>}
                      <p className="text-[11px] mt-0.5" style={{ color:'rgba(109,86,165,0.45)' }}>{card.sub}</p>
                    </div>
                  </motion.div>
                )
              })}

              {/* TIP CTA card */}
              <motion.div initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={viewport} transition={{ delay:.32 }}
                className="rounded-2xl p-6 border mt-2"
                style={{ background:'linear-gradient(135deg, rgba(138,99,255,0.08), rgba(109,86,165,0.04))', borderColor:'rgba(138,99,255,0.22)' }}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background:'rgba(138,99,255,0.12)' }}>
                    <Shield className="w-4 h-4" style={{ color:'#8A63FF' }}/>
                  </div>
                  <h3 className="text-[15px] font-extrabold" style={{ color:'#1e1b4b' }}>Try before you commit</h3>
                </div>
                <p className="text-[13px] leading-relaxed mb-4" style={{ color:'rgba(60,50,120,0.60)' }}>
                  Get 1 free IP lookup per day on our Threat Intelligence Platform — no credit card needed.
                </p>
                <motion.a href="https://tip.aquasecure.ai" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-semibold text-white"
                  style={{ background:'linear-gradient(135deg,#8A63FF,#6D56A5)', boxShadow:'0 4px 14px rgba(138,99,255,0.30)' }}
                  whileHover={{ scale:1.04, boxShadow:'0 6px 22px rgba(138,99,255,0.50)' }}
                  whileTap={{ scale:.97 }}>
                  Try AQUA TIP Free <ExternalLink className="w-3.5 h-3.5"/>
                </motion.a>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
