import React, { useEffect, useState } from 'react';
import ExperienceSection from './ExperienceSection';
import portraitImg1 from '../assets/about-img-1.png';
import portraitImg2 from '../assets/about-img-2.png';
import portraitImg3 from '../assets/about-img-3.png';
import portraitImg4 from '../assets/about-img-4.png';

const focusAreas = ['Fintech', 'Mobility', 'B2C & B2B Workflows', 'Product Thinking'];

const About: React.FC = () => {

      const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const portraits = [portraitImg1, portraitImg2, portraitImg3, portraitImg4];
const loopPortraits = [...portraits, portraits[0]];

const [currentPortrait, setCurrentPortrait] = useState(0);
const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);

useEffect(() => {
  const interval = window.setInterval(() => {
    setCurrentPortrait((prev) => prev + 1);
    setIsTransitionEnabled(true);
  }, 3000);

  return () => window.clearInterval(interval);
}, []);

  return (

    <>
  <style>
    {`
      @keyframes aboutFadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 18px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.about-reveal {
  opacity: 0;
  will-change: transform, opacity;
  backface-visibility: hidden;
}

.about-reveal.is-visible {
  animation: aboutFadeInUp 700ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
    `}
  </style>

    <div className="bg-white text-black">
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1720px] px-6 pt-28 pb-20 md:px-12 md:pt-32 md:pb-24 lg:px-[10vw] xl:pt-36">
          <div
            className={`mb-10 about-reveal ${isLoaded ? 'is-visible' : ''}`}
            style={{ animationDelay: '80ms' }}
            >
            {/* <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/35">
              About
            </p> */}
            <h1 className="mt-4 max-w-5xl text-[clamp(2.6rem,5vw,2.4rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-black">
              About me
            </h1>
          </div>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_380px] lg:gap-16 xl:grid-cols-[minmax(0,1.1fr)_420px]">
            <div
                className={`min-w-0 about-reveal ${isLoaded ? 'is-visible' : ''}`}
                style={{ animationDelay: '160ms' }}
                >
              <div className="max-w-[72ch] space-y-6 text-[17px] leading-8 text-black/68 md:text-[18px] md:leading-9">
                <p>
                  I’m a Product Designer based in 🇻🇳 Vietnam with over 4 years of experience designing
                  digital products across <span className="font-bold text-black">fintech</span>,
                  <span className="font-bold text-black"> mobility</span>, in <span className="font-bold text-black"> B2C</span> and
                  <span className="font-bold text-black"> B2B workflows</span>.
                </p>

                <p>
                  Currently, I’m designing mobile experiences at{' '}
                  <span className="font-bold text-black">Banqup Group</span>, where I work on
                  simplifying invoicing and payment workflows for European SMEs.
                </p>

                <p>
                  Before that, I worked at <span className="font-bold text-black">BE GROUP</span>,
                  helping shape ride-hailing, delivery, and new service experiences for millions of
                  users. I also worked at <span className="font-bold text-black">MoMo</span>,
                  contributing to financial service flows inside one of Vietnam’s largest super apps.
                </p>

                <p>
                  I care about thoughtful product decisions, structured systems, and interfaces that
                  feel simple even when the logic behind them is complex.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {focusAreas.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 bg-black/[0.02] px-3 py-1.5 text-xs font-medium text-black/60"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* <div className="mt-8">
                <a
                  href="https://drive.google.com/file/d/1M0Tlwq7YOs0olPEkVoLKGfujj29akQY6/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black/72 transition duration-300 hover:border-black/20 hover:bg-black/[0.02]"
                >
                  View my resume
                  <span>↗</span>
                </a>
              </div> */}
            </div>

            <div
                className={`min-w-0 about-reveal ${isLoaded ? 'is-visible' : ''}`}
                style={{ animationDelay: '240ms' }}
                >
                <div className="overflow-hidden rounded-[32px] border border-black/8 bg-[#f5f5f5]">
                    <div className="relative aspect-[4/5] overflow-hidden">
                    <div
                        className="flex h-full w-full"
                        style={{
                        transform: `translateX(-${currentPortrait * 100}%)`,
                        transition: isTransitionEnabled
                            ? 'transform 900ms cubic-bezier(0.22, 1, 0.36, 1)'
                            : 'none',
                        }}
                        onTransitionEnd={() => {
                        if (currentPortrait === portraits.length) {
                            setIsTransitionEnabled(false);
                            setCurrentPortrait(0);
                        }
                        }}
                    >
                        {loopPortraits.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Portrait ${((index % portraits.length) || portraits.length)}`}
                            className="h-full w-full shrink-0 object-cover"
                        />
                        ))}
                    </div>
                    </div>
                </div>

                {/* <div className="mt-5 rounded-[24px] border border-black/8 bg-black/[0.02] p-5">
                    <p className="text-sm leading-7 text-black/62">
                    I enjoy working on products where business complexity, operational logic, and user
                    experience all need to align clearly.
                    </p>
                </div> */}
            </div>
          </div>
        </div>
      </section>

      <div
        className={`about-reveal ${isLoaded ? 'is-visible' : ''}`}
        style={{ animationDelay: '280ms' }}
        >
        <ExperienceSection />
    </div>

      <section className="bg-white">
        <div
            className={`mx-auto w-full max-w-[1720px] px-6 py-24 md:px-12 md:py-32 lg:px-[10vw] about-reveal ${
                isLoaded ? 'is-visible' : ''
            }`}
            style={{ animationDelay: '320ms' }}
            >
          {/* <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-black/35">
            Let’s connect
          </p> */}

          <h2 className="max-w-4xl text-[clamp(2.2rem,4.6vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-black">
            Let’s connect.
          </h2>

          <p className="mt-8 max-w-3xl text-[18px] leading-8 text-black/62">
            Drop me an email at{' '}
            <a
              href="mailto:quangminh.do152@gmail.com"
              className="font-semibold underline decoration-black/18 underline-offset-[6px] transition hover:opacity-70"
            >
              quangminh.do152@gmail.com
            </a>{' '}
            or connect with me on{' '}
            <a
              href="https://www.linkedin.com/in/minhdo15/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold underline decoration-black/18 underline-offset-[6px] transition hover:opacity-70"
            >
              LinkedIn
            </a>.
          </p>
        </div>
      </section>
    </div>

    </>
  );
};

export default About;