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
import HeroWord from './HeroWord';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)]">
      <style>
        {`
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

          .hero-background {
            --hero-dot-color: rgba(17, 17, 17, 0.14);
            --hero-dot-fade: rgba(17, 17, 17, 0.06);
            --hero-glow-color: rgba(112, 154, 255, 0.12);
            --hero-glow-edge: rgba(112, 154, 255, 0.04);
          }

          html[data-theme='dark'] .hero-background {
            --hero-dot-color: rgba(243, 244, 246, 0.12);
            --hero-dot-fade: rgba(243, 244, 246, 0.08);
            --hero-glow-color: rgba(88, 144, 255, 0.16);
            --hero-glow-edge: rgba(88, 144, 255, 0.05);
          }

          .hero-dot-field {
            background-image: radial-gradient(circle, var(--hero-dot-color) 1.2px, transparent 1px);
            background-size: 22px 22px;
            background-position: center center;
            opacity: 0.9;
            mask-image: radial-gradient(circle at 50% 48%, black 0%, rgba(0, 0, 0, 0.92) 18%, rgba(0, 0, 0, 0.52) 42%, transparent 74%);
            -webkit-mask-image: radial-gradient(circle at 50% 48%, black 0%, rgba(0, 0, 0, 0.92) 18%, rgba(0, 0, 0, 0.52) 42%, transparent 74%);
          }

          .hero-dot-soften {
            background:
              radial-gradient(circle at 50% 44%, var(--hero-dot-fade) 0%, transparent 0%),
              linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, transparent 0%);
          }

          html[data-theme='dark'] .hero-dot-soften {
            background:
              radial-gradient(circle at 50% 44%, var(--hero-dot-fade) 0%, transparent 0%),
              linear-gradient(180deg, rgba(15, 16, 17, 0.14) 0%, transparent 52%);
          }

          .hero-ambient-glow {
            background: radial-gradient(circle at 50% 50%, var(--hero-glow-color) 0%, var(--hero-glow-edge) 24%, transparent 68%);
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

      <div className="hero-background pointer-events-none absolute inset-0 z-0">
        <div className="hero-dot-field absolute inset-0" />
        <div className="hero-dot-soften absolute inset-0" />
        <div className="hero-ambient-glow absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 blur-[90px] md:h-[38rem] md:w-[38rem]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1920px] px-4 py-24 md:px-12 md:py-32 lg:px-[10vw] xl:py-36">
        <div className="relative flex w-full flex-1 items-center justify-center">
          <div className="flex max-w-[1480px] flex-col items-center text-center">
            <p
              className={`hero-copy mb-5 text-[32px] font-medium leading-[1.2] tracking-[-0.02em] text-black md:tracking-[-0.025em] ${
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
                for <HeroWord variant="clarity">clarity</HeroWord>, <HeroWord variant="scale">scale</HeroWord>,
              </span>
              <span
                className={`hero-line block ${isLoaded ? 'is-visible' : ''}`}
                style={{ animationDelay: '380ms' }}
              >
                and <HeroWord variant="impact">impact</HeroWord>.
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
