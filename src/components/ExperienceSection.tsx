import React, { useState } from 'react';
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
      'BE Group is Vietnam’s big ride-hailing and super app platform with millions of users nationwide.',
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
    role: 'Intern - Junior UX/UI Designer',
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
      <div className="h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-black/8 bg-white">
        <img src={src} alt={fallback} className="h-full w-full object-contain" />
      </div>
    );
  }

  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-black/8 bg-black/[0.03] text-sm font-semibold uppercase tracking-[0.08em] text-black/55">
      {fallback}
    </div>
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
  return (
    <div className="border-b border-black/8">
      <button
        type="button"
        onClick={onToggle}
        className="w-full px-6 py-6 text-left transition-colors duration-300 hover:bg-black/[0.015]"
      >
        <div className="flex items-start gap-5">
          <LogoBadge src={item.logoSrc} fallback={item.logoFallback} />

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-6">
              <div className="min-w-0">
                <h3 className="text-[clamp(1.3rem,2vw,1.45rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-black">
                  {item.companyLine}
                </h3>
                <p className="mt-2 text-[18px] font-medium leading-7 text-black/68">
                  {item.role}
                </p>
                <p className="mt-1 text-[16px] leading-7 text-black/46">{item.period}</p>
              </div>

              <span className="mt-1 shrink-0 text-[30px] font-light leading-none text-black/72">
                {isOpen ? '×' : '+'}
              </span>
            </div>

            <div
              className={`grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? 'grid-rows-[1fr] pt-4 opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="min-h-0">
                {item.intro ? (
                  <p className="max-w-full text-[18px] font-medium leading-8 text-black/82">
                    {item.intro}
                  </p>
                ) : null}

                {item.description ? (
                  <p className="mt-2 max-w-full text-[16px] leading-8 text-black/68">
                    {item.description}
                  </p>
                ) : null}

                {item.bullets?.length ? (
                  <ul className="mt-3 space-y-1">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className=" h-1.5 w-1.5 shrink-0 rounded-full bg-black/28" />
                        <span className="max-w-full text-[16px] leading-8 text-black/68">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {item.highlight ? (
                  <p className="mt-5 text-[16px] font-medium leading-8 text-black/82">
                    {item.highlight}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section>
      <div className="mx-auto w-full max-w-[1720px] px-6 py-20 md:px-12 lg:px-[10vw]">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] font-semibold tracking-[-0.04em] text-black">
              My journey
            </h2>
          </div>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black/72 transition duration-300 hover:border-black/20 hover:bg-black/[0.02]"
          >
            View my resume
            <span>↗</span>
          </a>
        </div>

        <div>
          <div className="mb-5">
            <p className="text-[14px] font-semibold uppercase tracking-[0.12em] text-black/35">
              Work experience
            </p>
          </div>

          <div className="border-t border-black/8">
            {experienceItems.map((item) => (
              <TimelineRow
                key={item.id}
                item={item}
                isOpen={openItems.has(item.id)}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-5">
            <p className="text-[14px] font-semibold uppercase tracking-[0.12em] text-black/35">
              Education
            </p>
          </div>

          <div className="border-t border-black/8">
            {educationItems.map((item) => (
              <TimelineRow
                key={item.id}
                item={item}
                isOpen={openItems.has(item.id)}
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