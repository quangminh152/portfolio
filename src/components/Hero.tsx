// import React from 'react';

// const Hero: React.FC = () => {
//     return (
//         <section className="relative px-6 md:px-12 lg:px-[10vw] w-full min-h-[100dvh] flex flex-col justify-center animated-dots-bg animate-subtleDrift overflow-hidden">
//             {/* Overlay Gradient */}
//             <div className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-b from-transparent to-white pointer-events-none z-10" />

//             <div className="relative z-20">
//                 <h1 className="text-[12vw] md:text-[8vw] lg:text-[5.5rem] font-bold leading-[1.0] tracking-[-0.04em] mb-10">
//                     Minh Do, 
//                     <span className="block mt-2 text-[#a6abb4] font-medium">Product Designer.</span>
//                 </h1>
                
//                 <h2 className="text-xl md:text-2xl lg:text-[1.75rem] font-normal text-[#6b7280] max-w-3xl md:leading-[1.4] tracking-tight">
//                     Data-driven designer, passionate about crafting intuitive and impactful user experiences. With a strong foundation in design principles and a keen eye for detail, I specialize in creating seamless interactions that resonate with users and drive business success.
//                 </h2>
//             </div>
//         </section>
//     );
// };

// export default Hero;

import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white">
      <style>
        {`
          @keyframes heroGlowDrift {
            0% {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 0.38;
            }
            50% {
              transform: translate3d(20px, -16px, 0) scale(1.04);
              opacity: 0.62;
            }
            100% {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 0.38;
            }
          }

          @keyframes heroLineIn {
            from {
              opacity: 0;
              transform: translateY(38px);
              filter: blur(8px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }
          }

          @keyframes heroCopyIn {
            from {
              opacity: 0;
              transform: translateY(16px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes heroRuleIn {
            from {
              opacity: 0;
              transform: scaleX(0.7);
            }
            to {
              opacity: 1;
              transform: scaleX(1);
            }
          }

          .hero-glow {
            animation: heroGlowDrift 10s cubic-bezier(0.45, 0, 0.2, 1) infinite;
          }

          .hero-line {
            opacity: 0;
          }

          .hero-line.is-visible {
            animation: heroLineIn 900ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .hero-copy {
            opacity: 0;
          }

          .hero-copy.is-visible {
            animation: heroCopyIn 850ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .hero-rule {
            opacity: 0;
            transform-origin: left center;
          }

          .hero-rule.is-visible {
            animation: heroRuleIn 900ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          @keyframes arrowBounceDown {
            0%, 100% {
                transform: translateY(-2px);
            }
            50% {
                transform: translateY(6px);
            }
        }
        `}
      </style>

      <div className="pointer-events-none absolute inset-0">
        <div className="hero-glow absolute left-[10%] top-[14%] h-[300px] w-[300px] rounded-full bg-black/[0.03] blur-[100px]" />
        <div className="hero-glow absolute right-[12%] top-[24%] h-[220px] w-[220px] rounded-full bg-black/[0.02] blur-[90px]" />
      </div>

      <div className="mx-auto flex min-h-[100svh] w-full max-w-[1920px] px-4 py-24 md:px-12 md:py-32 lg:px-[10vw] xl:py-36">
        <div className="relative flex w-full flex-1 items-center justify-center">
          <div className="flex max-w-[1480px] flex-col items-center text-center">
            <p
              className={`hero-copy mb-5 text-[32px] font-medium leading-[1.2] tracking-[-0.02em] text-black/68 md:tracking-[-0.025em] ${
                isLoaded ? 'is-visible' : ''
              }`}
              style={{ animationDelay: '60ms' }}
            >
              Hello 👋, I&apos;m Minh.
            </p>

            <div
                className={`hero-rule mb-8 h-px w-14 bg-black/12 mx-auto ${isLoaded ? 'is-visible' : ''}`}
              style={{ animationDelay: '120ms' }}
            />

            <h1 className="max-w-[980px] text-[clamp(3rem,15vw,5.4rem)] font-semibold leading-[0.96] tracking-[-0.08em] text-black md:max-w-[1100px] md:text-[clamp(3.4rem,8vw,6rem)] md:leading-[1.08] md:tracking-[-0.06em]">
              <span
                className={`hero-line block ${isLoaded ? 'is-visible' : ''}`}
                style={{ animationDelay: '180ms' }}
              >
                I design products
              </span>
              <span
                className={`hero-line block ${isLoaded ? 'is-visible' : ''}`}
                style={{ animationDelay: '280ms' }}
              >
                for clarity, scale,
              </span>
              <span
                className={`hero-line block ${isLoaded ? 'is-visible' : ''}`}
                style={{ animationDelay: '380ms' }}
              >
                and impact.
              </span>
            </h1>

            <a
              href="#work"
              className={`hero-copy group mt-16 inline-flex items-center justify-center gap-2 text-[18px] font-medium text-black/72 transition duration-300 hover:text-black ${
                isLoaded ? 'is-visible' : ''
              }`}
              style={{ animationDelay: '540ms' }}
            >
              <span className="relative">
                View selected work
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-black/28 transition-transform duration-300 group-hover:scale-x-100" />
              </span>
              <span
                className="inline-block transition-transform duration-300 group-hover:translate-y-[2px]"
                style={{ animation: 'arrowBounceDown 1.6s ease-in-out infinite' }}
                >
                ↓
                </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
