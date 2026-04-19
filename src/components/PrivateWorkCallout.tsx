import React from 'react';
import { Link } from 'react-router-dom';
import { PRIVATE_WORK } from '../constants';

const PrivateWorkCallout: React.FC = () => {
  return (
    <section className="border-t border-black/6 bg-white">
      <div className="mx-auto w-full max-w-[1720px] px-6 py-20 md:px-12 lg:px-[10vw]">
        <div className="mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/35">
            Current / Private Work
          </p>
          <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.8rem)] font-semibold tracking-[-0.04em] text-black">
            Work I can discuss in interviews.
          </h2>
        </div>

        <div className="grid gap-10 xl:grid-cols-[360px_minmax(0,1fr)] xl:items-start">
          <div className="max-w-[34ch]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35">
              {PRIVATE_WORK.period}
            </p>

            <h3 className="mt-5 text-[clamp(2rem,3vw,3.1rem)] font-semibold leading-[1.04] tracking-[-0.05em] text-black">
              {PRIVATE_WORK.role} at {PRIVATE_WORK.company}
            </h3>

            <p className="mt-5 text-[17px] leading-8 text-black/62">
              {PRIVATE_WORK.desc}
            </p>

            <div className="mt-6 rounded-[24px] border border-black/8 bg-black/[0.02] p-5">
              <p className="text-sm leading-7 text-black/62">
                Due to a <strong>Non-Disclosure Agreement</strong>, the full details of this project are not public.
                I’d be happy to walk through the process, challenges, and outcomes during an interview.
              </p>
            </div>
          </div>

          <Link to={PRIVATE_WORK.link} className="group block">
            <div className="relative overflow-hidden rounded-[28px] border border-black/8 bg-[#f7f7f7]">
              <div
                className="absolute inset-x-0 top-0 z-10 h-px"
                style={{ backgroundColor: PRIVATE_WORK.accentColor }}
              />
              <div className="aspect-[16/8.8] overflow-hidden">
                <img
                  src={PRIVATE_WORK.img}
                  alt={PRIVATE_WORK.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015]"
                />
              </div>
            </div>

            <div className="mt-5">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/30">
                {PRIVATE_WORK.meta}
              </p>

              <h4 className="max-w-[900px] text-[clamp(1.5rem,2.3vw,2.2rem)] font-semibold leading-[1.1] tracking-[-0.035em] text-black">
                🔒 {PRIVATE_WORK.title}
              </h4>

              <p className="mt-3 max-w-[720px] text-[15px] leading-8 text-black/62">
                Full case study available on request.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-black/65">
                View overview
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PrivateWorkCallout;