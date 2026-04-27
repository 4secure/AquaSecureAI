// import { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import { HelmetProvider, Helmet } from "react-helmet-async";
// import { motion, AnimatePresence } from "framer-motion";
// import { useReveal } from "./hooks";

// import AnnouncementBar from "./components/AnnouncementBar";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import ContactModal from "./components/ContactModal";
// import BackToTop from "./components/BackToTop";
// import ScrollProgress from "./components/ScrollProgress";

// import Hero from "./components/Hero";
// import LogosStrip from "./components/LogosStrip";
// import About from "./components/About";
// import StatsStrip from "./components/StatsStrip";
// import MeetPlatform from "./components/MeetPlatform";
// import HowItWorks from "./components/HowItWorks";
// import Products from "./components/Products";
// import Testimonials from "./components/Testimonials";
// import Resources from "./components/Resources";
// import TrustedBy from "./components/TrustedBy";
// import Integrations from "./components/Integrations";
// import Partners from "./components/Partners";

// import ProductsPage from "./pages/ProductsPage";
// import SolutionsPage from "./pages/SolutionsPage";
// import PricingPage from "./pages/PricingPage";
// import PlatformPage from "./pages/PlatformPage";
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";
// import ProductDetailPage from "./pages/ProductDetailPage";
// import SolutionDetailPage from "./pages/SolutionDetailPage";

// /* ── Scroll to top on every route change ── */
// function ScrollToTop() {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "instant" });
//   }, [pathname]);
//   return null;
// }

// /* ── Logo transition overlay ── */
// function PageTransitionOverlay() {
//   const { pathname } = useLocation();
//   const [mounted, setMounted] = useState(false);
//   const [visible, setVisible] = useState(false);
//   const [isFirst, setIsFirst] = useState(true);

//   useEffect(() => {
//     if (isFirst) {
//       setIsFirst(false);
//       return;
//     }
//     setMounted(true);
//     setVisible(true);
//     const t1 = setTimeout(() => setVisible(false), 500);
//     const t2 = setTimeout(() => setMounted(false), 900);
//     return () => {
//       clearTimeout(t1);
//       clearTimeout(t2);
//     };
//   }, [pathname]);

//   if (!mounted) return null;

//   return (
//     <div
//       style={{
//         position: "fixed",
//         inset: 0,
//         zIndex: 9999,
//         background: "#ffffff",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         opacity: visible ? 1 : 0,
//         transition: "opacity 0.38s ease",
//         pointerEvents: "none",
//       }}
//     >
//       <style>{`
//         @keyframes ringPulse {
//           0%   { transform: scale(0.7); opacity: 0.8; }
//           100% { transform: scale(1.8); opacity: 0; }
//         }
//       `}</style>
//       <div
//         style={{
//           position: "relative",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <div
//           style={{
//             position: "absolute",
//             width: 120,
//             height: 120,
//             borderRadius: "50%",
//             border: "1.5px solid rgba(138,99,255,0.45)",
//             animation: "ringPulse 1.1s ease-out infinite",
//           }}
//         />
//         <div
//           style={{
//             position: "absolute",
//             width: 120,
//             height: 120,
//             borderRadius: "50%",
//             border: "1px solid rgba(138,99,255,0.25)",
//             animation: "ringPulse 1.1s ease-out 0.28s infinite",
//           }}
//         />
//         <img
//           src="/images/Aquasecureicon.jpg"
//           alt="Aqua Secure AI"
//           style={{ width: 360, position: "relative", zIndex: 1 }}
//         />
//       </div>
//     </div>
//   );
// }

// /* ── Page wrapper ── */
// const PT = ({ children }) => (
//   <motion.div
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     exit={{ opacity: 0 }}
//     transition={{ duration: 0.35, ease: "easeOut", delay: 0.38 }}
//   >
//     {children}
//   </motion.div>
// );

// /* Home page */
// function HomePage({ onDemo }) {
//   useReveal();
//   return (
//     <PT>
//       <Helmet>
//         <title>AquaSecure.ai — AI-Powered Cloud Native Cybersecurity</title>
//         <meta
//           name="description"
//           content="AquaSecure stops cyber attacks before they happen — AI threat detection, container security, runtime protection and automated response from code to cloud to prompt."
//         />
//         <meta
//           property="og:title"
//           content="AquaSecure.ai — AI-Powered Cybersecurity"
//         />
//         <meta
//           property="og:description"
//           content="The pioneer in AI-native cloud security. Stop threats in under 50ms."
//         />
//         <meta property="og:url" content="https://aquasecure.ai" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="theme-color" content="#7A44E4" />
//       </Helmet>
//       <Hero onDemo={onDemo} />
//       {/* <LogosStrip   /> */}
//       <About />
//       <StatsStrip />
//       <MeetPlatform onDemo={onDemo} />
//       <HowItWorks onDemo={onDemo} />
//       <Products />
//       {/* <Testimonials /> */}
//       {/* <Resources    /> */}
//       {/* <TrustedBy    /> */}
//       <Integrations onDemo={onDemo} />
//       {/* <Partners     onDemo={onDemo} /> */}
//     </PT>
//   );
// }

// /* Animated router */
// function AnimatedRoutes({ onDemo }) {
//   const location = useLocation();
//   useReveal();
//   return (
//     <>
//       <ScrollToTop />
//       <PageTransitionOverlay />
//       <AnimatePresence mode="sync">
//         <Routes location={location} key={location.pathname}>
//           <Route path="/" element={<HomePage onDemo={onDemo} />} />
//           <Route
//             path="/products"
//             element={
//               <PT>
//                 <ProductsPage onDemo={onDemo} />
//               </PT>
//             }
//           />
//           <Route
//             path="/products/:slug"
//             element={
//               <PT>
//                 <ProductDetailPage onDemo={onDemo} />
//               </PT>
//             }
//           />
//           <Route
//             path="/solutions"
//             element={
//               <PT>
//                 <SolutionsPage onDemo={onDemo} />
//               </PT>
//             }
//           />
//           <Route
//             path="/solutions/:slug"
//             element={
//               <PT>
//                 <SolutionDetailPage onDemo={onDemo} />
//               </PT>
//             }
//           />
//           <Route
//             path="/platform"
//             element={
//               <PT>
//                 <PlatformPage onDemo={onDemo} />
//               </PT>
//             }
//           />
//           <Route
//             path="/pricing"
//             element={
//               <PT>
//                 <PricingPage onDemo={onDemo} />
//               </PT>
//             }
//           />
//           <Route
//             path="/about"
//             element={
//               <PT>
//                 <AboutPage onDemo={onDemo} />
//               </PT>
//             }
//           />
//           <Route
//             path="/contact"
//             element={
//               <PT>
//                 <ContactPage onDemo={onDemo} />
//               </PT>
//             }
//           />
//           <Route path="*" element={<HomePage onDemo={onDemo} />} />
//         </Routes>
//       </AnimatePresence>
//     </>
//   );
// }

// export default function App() {
//   const [modal, setModal] = useState(false);
//   const [barVisible, setBarVisible] = useState(true);

//   return (
//     <HelmetProvider>
//       <BrowserRouter>
//         {/* Scroll progress bar */}
//         <ScrollProgress />

//         {/* Announcement strip */}
//         <AnnouncementBar onDismiss={() => setBarVisible(false)} />

//         {/* Sticky nav */}
//         <Navbar barVisible={barVisible} onDemo={() => setModal(true)} />

//         {/* Page content */}
//         <main>
//           <AnimatedRoutes onDemo={() => setModal(true)} />
//         </main>

//         {/* Footer */}
//         <Footer />

//         {/* Floating UI */}
//         <BackToTop />
//         <ContactModal isOpen={modal} onClose={() => setModal(false)} />
//       </BrowserRouter>
//     </HelmetProvider>
//   );
// }

  import { useState, useEffect } from "react";
  import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
  import { HelmetProvider, Helmet } from "react-helmet-async";
  import { motion, AnimatePresence } from "framer-motion";
  import { useReveal } from "./hooks";

  import AnnouncementBar from "./components/AnnouncementBar";
  import Navbar from "./components/Navbar";
  import Footer from "./components/Footer";
  import ContactModal from "./components/ContactModal";
  import BackToTop from "./components/BackToTop";
  import ScrollProgress from "./components/ScrollProgress";

  import Hero from "./components/Hero";
  import LogosStrip from "./components/LogosStrip";
  import About from "./components/About";
  import StatsStrip from "./components/StatsStrip";
  import MeetPlatform from "./components/MeetPlatform";
  import HowItWorks from "./components/HowItWorks";
  import Products from "./components/Products";
  import Testimonials from "./components/Testimonials";
  import Resources from "./components/Resources";
  import TrustedBy from "./components/TrustedBy";
  import Integrations from "./components/Integrations";
  import Partners from "./components/Partners";

  import ProductsPage from "./pages/ProductsPage";
  import SolutionsPage from "./pages/SolutionsPage";
  import PricingPage from "./pages/PricingPage";
  import PlatformPage from "./pages/PlatformPage";
  import AboutPage from "./pages/AboutPage";
  import ContactPage from "./pages/ContactPage";
  import ProductDetailPage from "./pages/ProductDetailPage";
  import SolutionDetailPage from "./pages/SolutionDetailPage";

  /* ── Scroll to top on every route change ── */
  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, [pathname]);
    return null;
  }

  /* ── Page wrapper ── */
  const PT = ({ children }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
    >
      {children}
    </motion.div>
  );

  /* Home page */
  function HomePage({ onDemo }) {
    useReveal();
    return (
      <PT>
        <Helmet>
          <title>AquaSecure.ai — AI-Powered Cloud Native Cybersecurity</title>
          <meta
            name="description"
            content="AquaSecure stops cyber attacks before they happen — AI threat detection, container security, runtime protection and automated response from code to cloud to prompt."
          />
          <meta
            property="og:title"
            content="AquaSecure.ai — AI-Powered Cybersecurity"
          />
          <meta
            property="og:description"
            content="The pioneer in AI-native cloud security. Stop threats in under 50ms."
          />
          <meta property="og:url" content="https://aquasecure.ai" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="theme-color" content="#7A44E4" />
        </Helmet>
        <Hero onDemo={onDemo} />
        {/* <LogosStrip /> */}
        <About />
        <StatsStrip />
        <MeetPlatform onDemo={onDemo} />
        <HowItWorks onDemo={onDemo} />
        <Products />
        {/* <Testimonials /> */}
        {/* <Resources /> */}
        {/* <TrustedBy /> */}
        <Integrations onDemo={onDemo} />
        {/* <Partners onDemo={onDemo} /> */}
      </PT>
    );
  }

  /* Animated router */
  function AnimatedRoutes({ onDemo }) {
    const location = useLocation();
    useReveal();
    return (
      <>
        <ScrollToTop />
        <AnimatePresence mode="sync">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage onDemo={onDemo} />} />
            <Route
              path="/products"
              element={
                <PT>
                  <ProductsPage onDemo={onDemo} />
                </PT>
              }
            />
            <Route
              path="/products/:slug"
              element={
                <PT>
                  <ProductDetailPage onDemo={onDemo} />
                </PT>
              }
            />
            <Route
              path="/solutions"
              element={
                <PT>
                  <SolutionsPage onDemo={onDemo} />
                </PT>
              }
            />
            <Route
              path="/solutions/:slug"
              element={
                <PT>
                  <SolutionDetailPage onDemo={onDemo} />
                </PT>
              }
            />
            <Route
              path="/platform"
              element={
                <PT>
                  <PlatformPage onDemo={onDemo} />
                </PT>
              }
            />
            <Route
              path="/pricing"
              element={
                <PT>
                  <PricingPage onDemo={onDemo} />
                </PT>
              }
            />
            <Route
              path="/about"
              element={
                <PT>
                  <AboutPage onDemo={onDemo} />
                </PT>
              }
            />
            <Route
              path="/contact"
              element={
                <PT>
                  <ContactPage onDemo={onDemo} />
                </PT>
              }
            />
            <Route path="*" element={<HomePage onDemo={onDemo} />} />
          </Routes>
        </AnimatePresence>
      </>
    );
  }

  export default function App() {
    const [modal, setModal] = useState(false);
    const [barVisible, setBarVisible] = useState(true);

    return (
      <HelmetProvider>
        <BrowserRouter>
          <ScrollProgress />
          <AnnouncementBar onDismiss={() => setBarVisible(false)} />
          <Navbar barVisible={barVisible} onDemo={() => setModal(true)} />
          <main>
            <AnimatedRoutes onDemo={() => setModal(true)} />
          </main>
          <Footer />
          <BackToTop />
          <ContactModal isOpen={modal} onClose={() => setModal(false)} />
        </BrowserRouter>
      </HelmetProvider>
    );
  }
