
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Demo from './components/Demo';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Terms from './components/Terms';
import Impressum from './components/Impressum';
import About from './components/About';
import AcceptableUse from './components/AcceptableUse'; 
import Disclaimer from './components/Disclaimer';
import SLA from './components/SLA';
import Privacy from './components/Privacy';
import Cookies from './components/Cookies';
import GDPR from './components/GDPR';
import DPA from './components/DPA';
import HIPAA from './components/HIPAA';
import Billing from './components/Billing';
import Security from './components/Security';
import AIDisclosure from './components/AIDisclosure';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Global Animation Logic (Easy to remove: just delete this component or its useEffect)
const ScrollAnimationManager = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px' // Trigger slightly before it hits the center
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          // Removes class when scrolling away to allow re-triggering
          entry.target.classList.remove('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []); // Re-run on layout changes if needed, but for static landing pages [] is fine.

  return null;
};

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollAnimationManager />
      <Hero />
      <Problem />
      <Solution />
      <Demo />
      <Pricing />
      <FAQ />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/acceptable-use" element={<AcceptableUse />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/sla" element={<SLA />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/gdpr" element={<GDPR />} />
          <Route path="/dpa" element={<DPA />} />
          <Route path="/hipaa" element={<HIPAA />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/security" element={<Security />} />
          <Route path="/ai-disclosure" element={<AIDisclosure />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;