// import React from 'react';
// import Header from './components/Header.tsx';
// import Hero from './components/Hero.tsx';
// import CompanySection from './components/CompanySection.tsx';
// import Footer from './components/Footer.tsx';
// import { COMPANIES } from './constants.ts';

// const App: React.FC = () => {
//   return (
//     <>
//       <Header />
//       <main className="w-full">
//         <Hero />
        
//         <div id="work">
//           {COMPANIES.map((company) => (
//             <CompanySection key={company.id} company={company} />
//           ))}
//         </div>

//         <Footer />
//       </main>
//     </>
//   );
// };

// export default App;

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import { CaseStudy } from './components/caseStudy-Bounce';

// Helper component to scroll to top on route change
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
      <ScrollToTop />
      <Header />
      
      <main className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work/bounce-dispatch" element={<CaseStudy />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;