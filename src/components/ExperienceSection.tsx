import React, { useEffect, useRef, useState } from 'react';
import banqupLogo from '../assets/banqup-logo.png';
import beLogo from '../assets/be-logo.png';
import momoLogo from '../assets/momo-logo.png';
import iuLogo from '../assets/iu-logo.png';
import usumLogo from '../assets/usum-logo.png';

type TimelineEntry = {
  id: string;
  logoSrc?: string;
  logoFallback: string;
  role: string;
  companyLine: string;
  period: string;
  intro?: string;
  description?: string;
  bullets?: string[];
  highlight?: string;
};

const RESUME_URL =
  'https://drive.google.com/file/d/1M0Tlwq7YOs0olPEkVoLKGfujj29akQY6/view?usp=sharing';

const experienceItems: TimelineEntry[] = [
  {
    id: 'banqup',
    logoSrc: banqupLogo,
    logoFallback: 'B',
    role: 'UX Designer',
    companyLine: 'Banqup Group',
    period: 'Mar 2025 - Present',
    intro:
      'Banqup Group is a European fintech company offering smart invoicing and payment solutions.',
    description:
      'Responsible for designing mobile experiences for Banqup One app, a B2B platform simplifying invoicing and payments for SMEs across multiple markets.',
    bullets: [
      'Collaborated with cross-functional, multinational teams (PMs, engineers, QA) to streamline workflows.',
      'Researched and designed key user flows, improving usability while maintaining consistency across platforms.',
      'Conducted stakeholder reviews to validate UX direction.',
      'Contributed to the design system and documentation standards.',
    ],
  },
  {
    id: 'begroup',
    logoSrc: beLogo,
    logoFallback: 'be',
    role: 'Product Designer',
    companyLine: 'BE GROUP',
    period: 'Dec 2022 - Mar 2025',
    intro:
      'BE GROUP is Vietnam’s big ride-hailing and super app platform with millions of users nationwide.',
    description:
      'Led the user experience for be Ride Hailing - overseeing 5 squads of beTransport, beDelivery, beClean and Customer App on the consumer app, and part of bePartner app for drivers and cleaners.',
    bullets: [
      'Contributed to feature launches that scaled to millions of active users.',
      'Cross-functional collaboration with Product Managers/Owners and Engineers to ensure smooth implementation.',
      'Mentored an intern designer, providing guidance on UX principles, tools, and professional growth.',
    ],
    highlight: '🏆 beStar Award 2024 – Employee of the Year',
  },
  {
    id: 'momo',
    logoSrc: momoLogo,
    logoFallback: 'M',
    role: 'UX/UI Designer',
    companyLine: 'MoMo (M_Service)',
    period: 'Apr 2022 - Dec 2022',
    intro:
      'MoMo is Vietnam’s leading super app offering mobile payments, financial services, and lifestyle features.',
    bullets: [
      'Revamped Expense Management mini-app along with the Report pages of P2P and Bill-pay services.',
      'Redesigned My Promotion flow.',
      'Redesigned My Wallet screen.',
      'Updated and maintained Search feature.',
    ],
  },
  {
    id: 'usum',
    logoSrc: usumLogo,
    logoFallback: 'U',
    role: 'UX/UI Designer',
    companyLine: 'USUM Software',
    period: 'Sep 2021 - Apr 2022',
    intro:
      'Participated in building from landing pages to bigger projects like Print-on-demand services and internal admin systems.',
  },
];

const educationItems: TimelineEntry[] = [
  {
    id: 'iu',
    logoSrc: iuLogo,
    logoFallback: 'IU',
    role: "Engineer's degree, Information Technology",
    companyLine: 'International University - VNU HCMC',
    period: '2019 – 2024',
    intro: 'GPA: 3.2',
  },
];

const LogoBadge = ({
  src,
  fallback,
}: {
  src?: string;
  fallback: string;
}) => {
  if (src) {
    return (
      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-2xl border border-black/8 bg-white md:h-14 md:w-14">
        <img src={src} alt={fallback} className="h-full w-full object-contain " />
      </div>
    );
  }

  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-black/8 bg-black/[0.03] text-sm font-semibold uppercase tracking-[0.08em] text-black/55 md:h-14 md:w-14">
      {fallback}
    </div>
  );
};

const ExpandIcon = ({ open }: { open: boolean }) => {
  return (
    <span className="relative block h-9 w-9 rounded-full border border-black/10 bg-white">
      <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 bg-black/65" />
      <span
        className={`absolute left-1/2 top-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-black/65 transition-opacity duration-300 ${
          open ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </span>
  );
};

const TimelineRow = ({
  item,
  isOpen,
  onToggle,
}: {
  item: TimelineEntry;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;

    const updateHeight = () => {
      setContentHeight(contentRef.current?.scrollHeight || 0);
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, [item.intro, item.description, item.bullets, item.highlight]);

  return (
    <div className="border-b border-black/8">
      <button
        type="button"
        onClick={onToggle}
        className="w-full appearance-none bg-transparent px-6 py-6 text-left transition-colors duration-300 hover:bg-black/[0.015] [font:inherit] md:py-7"
      >
        <span className="flex items-start gap-4 md:gap-5">
          <LogoBadge src={item.logoSrc} fallback={item.logoFallback} />

          <span className="min-w-0 flex-1">
            <span className="flex items-start justify-between gap-4 md:gap-6">
              <span className="min-w-0">
                <span className="block text-[1.25rem] font-semibold leading-[1.12] tracking-[-0.03em] text-black md:text-[clamp(1.2rem,1.6vw,1.38rem)] md:tracking-[-0.035em]">
                  {item.companyLine}
                </span>

                <span className="mt-1.5 block text-[16px] font-medium leading-7 text-black md:mt-2 md:text-[17px]">
                  {item.role}
                </span>

                <span className="mt-0.5 block text-[14px] leading-7 text-black/42 md:mt-1 md:text-[15px]">
                  {item.period}
                </span>
              </span>

              <span className="mt-1 shrink-0">
                <ExpandIcon open={isOpen} />
              </span>
            </span>
          </span>
        </span>
      </button>

      <div
        className="overflow-hidden px-6"
        style={{
          height: isOpen ? `${contentHeight}px` : '0px',
          opacity: isOpen ? 1 : 0,
          transition:
            'height 420ms cubic-bezier(0.22, 1, 0.36, 1), opacity 220ms ease',
          willChange: 'height, opacity',
        }}
      >
        <div ref={contentRef} className="px-0 pb-6 pl-[68px] pt-1 md:pl-[76px]">
          {item.intro ? (
            <p className="max-w-full text-[17px] font-medium leading-8 text-black md:text-[18px]">
              {item.intro}
            </p>
          ) : null}

          {item.description ? (
            <p className="mt-2 max-w-full text-[15px] leading-8 text-black/68 md:text-[16px]">
              {item.description}
            </p>
          ) : null}

          {item.bullets?.length ? (
            <ul className="mt-3 space-y-1">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-[12px] h-1.5 w-1.5 shrink-0 rounded-full bg-black/28" />
                  <span className="max-w-full text-[15px] leading-8 text-black/68 md:text-[16px]">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          ) : null}

          {item.highlight ? (
            <p className="mt-5 text-[15px] font-semibold leading-8 text-black md:text-[16px]">
              {item.highlight}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItemId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1720px] px-6 py-20 md:px-12 lg:px-[10vw]">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-semibold tracking-[-0.04em] text-black">
              Experience
            </h2>
          </div>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-[18px] font-medium text-black/72 transition duration-300 hover:text-black"
          >
            <span className="relative">
              View my resume
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-black/28 transition-transform duration-300 group-hover:scale-x-100" />
            </span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-y-[-1px] group-hover:translate-x-[2px]">
              ↗
            </span>
          </a>
        </div>

        <div>
          <div className="mb-5">
            <p className="text-[14px] font-medium uppercase tracking-[0.22em] text-black/35">
              Work experience
            </p>
          </div>

          <div className="border-t border-black/8">
            {experienceItems.map((item) => (
              <TimelineRow
                key={item.id}
                item={item}
                isOpen={openItemId === item.id}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-5">
            <p className="text-[14px] font-medium uppercase tracking-[0.22em] text-black/35">
              Education
            </p>
          </div>

          <div className="border-t border-black/8">
            {educationItems.map((item) => (
              <TimelineRow
                key={item.id}
                item={item}
                isOpen={openItemId === item.id}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
