import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import CaseStudyBounce from './components/CaseStudyBounce';
import CaseStudyDelivery from './components/CaseStudyDelivery';
import CaseStudyBeClean from './components/CaseStudyBeClean';
import CaseStudyBanqup from './components/CaseStudyBanqup';
import CaseStudyExpense from './components/CaseStudyExpense';
import SmoothScroll, { getLenisInstance } from './components/SmoothScroll';
import { ThemeProvider } from './theme';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = getLenisInstance();

    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <SmoothScroll />
        <ScrollToTop />
        <Header />

        <main className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/work/beclean" element={<CaseStudyBeClean />} />
            <Route path="/work/bounce-dispatch" element={<CaseStudyBounce />} />
            <Route path="/work/home-delivery" element={<CaseStudyDelivery />} />
            <Route path="/work/banqup" element={<CaseStudyBanqup />} />
            <Route path="/work/expense" element={<CaseStudyExpense />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
