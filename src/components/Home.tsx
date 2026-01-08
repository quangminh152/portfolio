import React from 'react';
import Hero from './Hero';
import CompanySection from './CompanySection';
import { COMPANIES } from '../constants';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <div id="work">
        {COMPANIES.map((company) => (
          <CompanySection key={company.id} company={company} />
        ))}
      </div>
      {/* --- Contact Section --- */}
      <div className="pb-40 px-6 md:px-12 lg:px-[10vw] w-full animate-fade-in">
        <section className="pt-40 flex flex-col justify-center items-start">
          <h1 className="text-[clamp(40px,8vw,48px)] font-medium tracking-tight mb-10 text-[#111]">
                    Get in touch
          </h1>
          <p className="text-xl text-[#333] animate-slide-up delay-200">
            Drop me an email at{' '}
            <a href="mailto:quangminh.do152@gmail.com" className="font-semibold text-[#333] underline hover:text-inherit decoration-1 underline-offset-[6px] hover:opacity-70 transition-opacity">
                quangminh.do152@gmail.com
            </a>{' '}
            or connect with me on{' '}
            <a href="https://www.linkedin.com/in/minhdo15/" target="_blank" rel="noreferrer" className="font-semibold text-[#333] underline decoration-1 underline-offset-[6px] hover:opacity-70 hover:text-inherit transition-opacity">
                LinkedIn
            </a>.
          </p>
        </section>
      </div>
            
    </>
  );
};

export default Home;