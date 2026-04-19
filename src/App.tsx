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
import SmoothScroll from './components/SmoothScroll';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
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
  );
};

export default App;