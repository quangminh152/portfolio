// import React from 'react';
// import Hero from './Hero';
// import CompanySection from './CompanySection';
// import { COMPANIES } from '../constants';

// const Home: React.FC = () => {
//   return (
//     <>
//       <Hero />
//       <div id="work">
//         {COMPANIES.map((company) => (
//           <CompanySection key={company.id} company={company} />
//         ))}
//       </div>
//       {/* --- Contact Section --- */}
//       <div className="pb-40 px-6 md:px-12 lg:px-[10vw] w-full animate-fade-in">
//         <section className="pt-40 flex flex-col justify-center items-start">
//           <h1 className="text-[clamp(40px,8vw,48px)] font-medium tracking-tight mb-10 text-[#111]">
//                     Get in touch
//           </h1>
//           <p className="text-xl text-[#333] animate-slide-up delay-200">
//             Drop me an email at{' '}
//             <a href="mailto:quangminh.do152@gmail.com" className="font-semibold text-[#333] underline hover:text-inherit decoration-1 underline-offset-[6px] hover:opacity-70 transition-opacity">
//                 quangminh.do152@gmail.com
//             </a>{' '}
//             or connect with me on{' '}
//             <a href="https://www.linkedin.com/in/minhdo15/" target="_blank" rel="noreferrer" className="font-semibold text-[#333] underline decoration-1 underline-offset-[6px] hover:opacity-70 hover:text-inherit transition-opacity">
//                 LinkedIn
//             </a>.
//           </p>
//         </section>
//       </div>
            
//     </>
//   );
// };

// export default Home;

import React from 'react';
import Hero from './Hero';
import ProjectCard from './ProjectCard';
// import PrivateWorkCallout from './PrivateWorkCallout';
import ExperienceSection from './ExperienceSection';
import { SELECTED_WORK } from '../constants';

// const selectedOutcomes = [
//   { value: '+400%', label: 'GMV growth' },
//   { value: '80k+', label: 'additional monthly trips' },
//   { value: '+12%', label: 'CTR uplift' },
// ];

const Home: React.FC = () => {
  const featuredProject = SELECTED_WORK.find((project) => project.featured);
  const secondaryProjects = SELECTED_WORK.filter((project) => !project.featured);

  return (
    <>
      <Hero />

      <section className="bg-white">
        {/* <div className="mx-auto flex w-full max-w-[1720px] flex-col gap-8 px-6 py-10 md:px-12 lg:flex-row lg:items-center lg:justify-between lg:px-[10vw]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/35">
              Selected outcomes
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 sm:gap-8 lg:gap-14">
            {selectedOutcomes.map((item) => (
              <div key={item.label}>
                <p className="text-[clamp(1.9rem,4vw,3.2rem)] font-semibold leading-none tracking-[-0.05em] text-black">
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-7 text-black/55">{item.label}</p>
              </div>
            ))}
          </div>
        </div> */}
      </section>

      <section id="work" className="bg-white">
        <div className="mx-auto w-full max-w-[1720px] px-6 py-20 md:px-12 lg:px-[10vw]">
          <div className="mb-10">
            {/* <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/35">
              Selected Work
            </p> */}
            <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.4rem)] font-semibold tracking-[-0.04em] text-black">
            {/* <h2 className="text-[clamp(.8rem,3vw,1.4rem)] font-medium  tracking-[0.08em] text-black/62"> */}
              Selected work
            </h2>
          </div>

          {featuredProject ? (
            <div className="mb-14">
              <ProjectCard
                project={featuredProject}
                accentColor={featuredProject.accentColor}
              />
            </div>
          ) : null}

          {secondaryProjects.length ? (
            <div className="grid gap-10 lg:grid-cols-2">
              {secondaryProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  accentColor={project.accentColor}
                />
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {/* <PrivateWorkCallout /> */}

      <ExperienceSection />

      <section>
        <div className="mx-auto w-full max-w-[1720px] px-6 py-24 md:px-12 md:py-32 lg:px-[10vw]">
          {/* <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-black/35">
            Contact
          </p> */}

          <h2 className="max-w-4xl text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-black">
            Let's connect.
          </h2>

          <p className="mt-8 max-w-3xl text-[18px] leading-8 text-black/62">
            Drop me an email at{' '}
            <a
              href="mailto:quangminh.do152@gmail.com"
              className="font-semibold underline text-black underline-offset-[6px] transition hover:opacity-70"
            >
              quangminh.do152@gmail.com
            </a>{' '}
            or connect with me on{' '}
            <a
              href="https://www.linkedin.com/in/minhdo15/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold underline text-black underline-offset-[6px] transition hover:opacity-70"
            >
              LinkedIn
            </a>.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;