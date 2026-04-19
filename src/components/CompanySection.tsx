// import React from 'react';
// import type { Company } from '../types';
// import ProjectCard from './ProjectCard';

// interface CompanySectionProps {
//     company: Company;
// }

// const CompanySection: React.FC<CompanySectionProps> = ({ company }) => {
//     return (
//         <section className="grid grid-cols-1 lg:grid-cols-2 items-start w-full border-b border-[#EEE] relative">
//             {/* Left Column - Sticky */}
//             <div 
//                 className="relative h-auto lg:h-full"
//                 style={{ backgroundColor: company.bgColor, color: company.textColor }}
//             >
//                 <div className="lg:sticky lg:top-0 h-auto lg:h-screen flex flex-col justify-center px-6 md:px-12 lg:px-[10vw] py-24 lg:py-0">
//                     <div className="max-w-lg">
//                         <span className="text-xs uppercase tracking-[0.2em] mb-6 font-bold opacity-80 block">
//                             {company.period}
//                         </span>
//                         <h3 className="text-3xl md:text-4xl lg:text-[2rem] text-inherit font-semibold leading-tight tracking-tight mb-8">
//                             {company.role} at {company.name}
//                         </h3>
//                         <p className="text-lg leading-relaxed opacity-90 mb-6">
//                             {company.description}
//                         </p>
//                         {company.extraInfo && (
//                             <p className="text-lg leading-relaxed opacity-90 font-semibold">
//                                 {company.extraInfo}
//                             </p>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             {/* Right Column - Scrollable Projects */}
//             <div className="bg-white px-6 md:px-12 lg:px-[120px] py-20 lg:py-20 flex flex-col gap-20">
//                 {company.projects.map((project, index) => (
//                     <ProjectCard key={index} project={project} />
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default CompanySection;

import React from 'react';
import type { Company } from '../types';
import ProjectCard from './ProjectCard';

interface CompanySectionProps {
  company: Company;
}

const hexToRgb = (hex: string) => {
  const normalized = hex.replace('#', '');
  const value =
    normalized.length === 3
      ? normalized
          .split('')
          .map((char) => char + char)
          .join('')
      : normalized;

  const bigint = parseInt(value, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
};

const CompanySection: React.FC<CompanySectionProps> = ({ company }) => {
  const { r, g, b } = hexToRgb(company.bgColor);

  return (
    <section className="relative overflow-hidden border-b border-black/6 bg-white">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(circle at 10% 20%, rgba(${r}, ${g}, ${b}, 0.11), transparent 28%)`,
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[1920px] grid-cols-1 gap-12 px-6 py-16 md:px-12 lg:grid-cols-[minmax(280px,0.9fr)_minmax(0,1.3fr)] lg:gap-16 lg:px-[10vw] lg:py-24">
        <div className="min-w-0">
          <div className="lg:sticky lg:top-28">
            <div className="max-w-lg">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/35">
                {company.period}
              </p>

              <div
                className="mt-5 h-px w-16"
                style={{ backgroundColor: company.bgColor }}
              />

              <h3 className="mt-6 text-[clamp(2rem,3.4vw,3.3rem)] font-semibold leading-[1.04] tracking-[-0.05em] text-black">
                {company.role} at {company.name}
              </h3>

              <p className="mt-6 max-w-[42ch] text-[17px] leading-8 text-black/62">
                {company.description}
              </p>

              {company.extraInfo ? (
                <p className="mt-5 max-w-[40ch] text-[17px] font-medium leading-8 text-black/78">
                  {company.extraInfo}
                </p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <div className="grid gap-12">
            {company.projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                accentColor={company.bgColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;