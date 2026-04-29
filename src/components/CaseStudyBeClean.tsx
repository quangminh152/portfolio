import React, { useEffect, useMemo, useState } from 'react';
import beCleanCover from '../assets/beclean-cover.png';
import beCleanCoverDark from '../assets/beclean-cover-dark.png';
import btaskeeLogo from '../assets/beclean-btaskee-logo.png';
import jupviecLogo from '../assets/beclean-jupviec-logo.png';
import btaskeeFlow from '../assets/beclean-btaskee.png';
import jupviecFlow from '../assets/beclean-jupviec.png';
import bookingFlowChart from '../assets/beclean-userflow.png';
import flowOption1 from '../assets/beclean-option1.png';
import flowOption2 from '../assets/beclean-option2.png';
import finalMvp from '../assets/beclean-final.png';
import beDeliveryCover from '../assets/bedelivery.png';
import bounceMultipleVehiclesCover from '../assets/bounce-multiple-vehicles.png';
import ImpactStatCard from './ImpactStatCard';
import ProjectCard from './ProjectCard';
import type { Project } from '../types';
import { usePageReveal } from '../usePageReveal';
import { useTheme } from '../useTheme';

type TocItem = {
  id: string;
  label: string;
};

type RatioKey = 'cover' | 'wide' | 'square' | 'flow';

type StatItem = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  note: string;
};

const tocItems: TocItem[] = [
  { id: 'background', label: 'Background' },
  { id: 'goal', label: 'Goal' },
  { id: 'success', label: 'Measuring the success' },
  { id: 'insights', label: 'Gathering the insights' },
  { id: 'competitors', label: 'Analyzing the competitors' },
  { id: 'draft', label: 'First draft' },
  { id: 'solution', label: 'Final Solution' },
  { id: 'impact', label: 'Impact post launch' },
  { id: 'next', label: 'What’s next?' },
];

type AssetMap = {
  btaskeeLogo?: string;
  jupviecLogo?: string;
  btaskeeFlow?: string;
  jupviecFlow?: string;
  bookingFlowChart?: string;
  flowOption1?: string;
  flowOption2?: string;
  finalMvp?: string;
};

const assets: AssetMap = {
  btaskeeLogo,
  jupviecLogo,
  btaskeeFlow,
  jupviecFlow,
  bookingFlowChart,
  flowOption1,
  flowOption2,
  finalMvp,
};

const tags = ['New Product', 'Product Design', 'UX Research'];
const tools = ['Figma', 'Jira'];

const userInterviewQuestions = [
  'What is your full name?',
  'What is your year of birth?',
  'What is your main occupation?',
  'What is your current job level?',
  'Why did you decide to use home cleaning services?',
  'Which home cleaning services have you used before?',
  'Which cleaning service do you use most often?',
  'Why do you choose this service provider over others?',
  'How did you hear about this cleaning service?',
  'How often do you use home cleaning services?',
  'Do you usually schedule cleaning appointments in advance or book on-demand?',
  'Can you list specific tasks that cleaners perform when they visit your home?',
  'What concerns do you still have about hiring an external cleaner for your home?',
  'What factors do you prioritize when choosing a home cleaning service?',
  'What are your thoughts on the services you’ve used?',
  'When booking a cleaning service, what information is essential for an efficient job?',
  'Do you use periodic cleaning services (weekly/monthly)?',
  'How do you use periodic services?',
  'If you frequently use cleaning services, would you schedule repeat bookings or buy a package?',
  'What impressed you most when using the app you frequently choose?',
  'What obstacles or shortcomings did you experience when using its features?',
  'Do the current features from entering details to cleaning completion meet your needs?',
  'Do you have any suggestions to improve the service?',
];

const keyFindings = [
  {
    title: 'Trust and Security',
    body: 'Users often had initial concerns about safety and letting strangers into their homes. Trust improved after actual usage, but security remained a key barrier to first-time adoption.',
  },
  {
    title: 'Flexibility Over Subscriptions',
    body: 'Although many users were open to recurring services, they still preferred on-demand bookings because they were unsure whether subscriptions would be flexible enough when plans changed.',
  },
  {
    title: 'Preferred Cleaners',
    body: 'Users wanted to book the same cleaner again once trust had been built. Existing platforms made this difficult, which pushed people to coordinate repeat bookings outside the app.',
  },
  {
    title: 'Communication Barriers',
    body: 'Some users preferred a quieter cleaning experience but felt awkward about saying so directly. This suggested a need for discreet communication preferences inside the booking flow.',
  },
  {
    title: 'Booking and Task Clarity',
    body: 'Users wanted more clarity around what tasks were included, whether cleaners brought their own tools, and whether special requests such as pet-area cleaning were supported.',
  },
];

const painPoints = [
  'Difficulty rehiring preferred cleaners.',
  'Inability to modify or cancel bookings during emergencies.',
  'Lack of clarity on whether cleaners bring their own tools.',
  'Frustration with having to repeatedly explain tasks.',
  'Uncertainty about whether certain tasks are included.',
];

const opportunities = [
  'Improve pricing transparency throughout the booking journey.',
  'Give users better edit flexibility before checkout.',
  'Add progress tracking to reduce uncertainty.',
  'Reduce excessive text and improve information hierarchy.',
  'Keep the MVP focused on the most essential booking actions.',
];

const phaseOneFunctions = [
  'Select services',
  'Change/Edit address',
  'Select cleaning package',
  'Select add-on services',
  'Select date time',
  'Add notes for cleaners',
];

const usabilityResults = [
  '72.7% of users were not concerned about adding an extra step in the booking flow.',
  '18.2% preferred merging the flow into one step.',
  '9.1% preferred separating the flow into two steps.',
];

const usabilityOpportunities = [
  'Provide more detailed add-on options.',
  'Allow users to self-select cleaners.',
  'Support booking on behalf of others.',
  'Improve pricing transparency.',
  'Avoid showing payment method too early.',
  'Add an option to request minimal conversation.',
  'Minimize required inputs for a faster flow.',
];

const impactStats: StatItem[] = [
  {
    value: 400,
    prefix: '>',
    suffix: '%',
    label: 'GMV growth',
    note: 'Strong early traction after launch.',
  },
  {
    value: 3.7,
    decimals: 1,
    suffix: 'x',
    label: 'Monthly active users growth',
    note: 'Demand scaled rapidly within a year.',
  },
  {
    value: 3.7,
    decimals: 1,
    suffix: 'x',
    label: 'Active cleaners growth',
    note: 'Supply side expanded with demand.',
  },
  {
    value: 18,
    prefix: '↑',
    suffix: '%',
    label: 'On-time rate',
    note: 'Service reliability improved meaningfully.',
  },
  {
    value: 30,
    prefix: '↓',
    suffix: '%',
    label: 'Cleaner-finding time',
    note: 'Matching became faster and more efficient.',
  },
  {
    value: 4.93,
    decimals: 2,
    label: 'Cleaner rating',
    note: 'Improved from 4.8 → 4.93 after launch.',
  },
];

const impactExtra = [
  {
    title: '~7x% completion rate after acceptance',
    body: 'Once a booking was matched, the service experience became relatively reliable.',
  },
  {
    title: '~5x% overall request-to-completion rate',
    body: 'The larger challenge remained turning demand into accepted and completed bookings.',
  },
];

const nextSteps = [
  'Request a Specific Cleaner: allow users to choose a cleaner based on available slots.',
  'Request from Favorites: prioritize dispatching requests to previously favorited cleaners from past bookings.',
];

const relatedBeProjects: Project[] = [
  {
    title: 'Bounce Dispatch to Multiple Vehicles',
    desc: 'Allows customers to select other vehicles as additional options after requesting a ride. Aimed to reducing cancellation rate.',
    img: bounceMultipleVehiclesCover,
    link: '/work/bounce-dispatch',
  },
  {
    title: 'Revamp beDelivery Home Screen',
    desc: 'Revamp the home screen of beDelivery service, increasing CTR.',
    img: beDeliveryCover,
    link: '/work/home-delivery',
  },
];

const ratioClassMap: Record<RatioKey, string> = {
  cover: 'aspect-[16/6]',
  wide: 'aspect-[16/9]',
  square: 'aspect-square',
  flow: 'aspect-[24/5]',
};

function useActiveSection(items: TocItem[]) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: '-18% 0px -62% 0px',
        threshold: [0.15, 0.3, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [items]);

  return activeId;
}

function CountUp({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  start,
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  start: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frame = 0;
    const duration = 1300;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(value * eased);

      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, value]);

  const formatted = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(displayValue);

  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="scroll-mt-28 border-t border-black/6 py-14 md:py-20">

    <h2 className="mb-6 text-[clamp(1.8rem,3vw,2.7rem)] font-semibold tracking-[-0.03em] text-black">
      {title}
    </h2>

    <div className="space-y-6 text-[15px] leading-8 text-black/68 md:text-base">
      {children}
    </div>
  </section>
);

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full border border-black/10 bg-black/[0.02] px-3 py-1.5 text-xs font-medium text-black/60">
    {children}
  </span>
);

const Box = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-[28px] border border-black/8 bg-white p-6 md:p-8">{children}</div>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex gap-3">
        <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-black/30" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const NumberedList = ({ items }: { items: string[] }) => (
  <ol className="space-y-3">
    {items.map((item, index) => (
      <li key={item} className="flex gap-4">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-black/10 bg-black/[0.03] text-xs font-semibold text-black/55">
          {index + 1}
        </span>
        <span className="pt-0.5">{item}</span>
      </li>
    ))}
  </ol>
);

const LogoPlaceholder = ({
  src,
  alt,
  fallbackText,
}: {
  src?: string;
  alt: string;
  fallbackText: string;
}) => {
  if (src) {
    return (
      <div className="h-12 w-12 overflow-hidden rounded-2xl border border-black/8 bg-white">
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
    );
  }

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-dashed border-black/12 bg-black/[0.02] text-[10px] font-medium uppercase tracking-[0.14em] text-black/35">
      {fallbackText}
    </div>
  );
};

const Lightbox = ({
  open,
  src,
  alt,
  onClose,
}: {
  open: boolean;
  src: string;
  alt: string;
  onClose: () => void;
}) => {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (!open || !src) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
      style={{ animation: 'lightboxFade 220ms ease-out' }}
    >
      <div
        className="absolute inset-0 bg-black/78 backdrop-blur-sm"
        style={{ animation: 'lightboxFade 220ms ease-out' }}
      />

      <button
        type="button"
        aria-label="Close preview"
        className="absolute right-4 top-4 z-10 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-md transition hover:bg-white/15"
      >
        Close
      </button>

      <div
        className="relative z-10 flex max-h-[90vh] max-w-[92vw] items-center justify-center"
        style={{ animation: 'lightboxZoom 280ms cubic-bezier(.22,1,.36,1)' }}
      >
        <img
          src={src}
          alt={alt}
          className="max-h-[90vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

const PreviewImage = ({
  src,
  alt,
  label,
  ratio = 'wide',
  onPreview,
}: {
  src?: string;
  alt: string;
  label: string;
  ratio?: RatioKey;
  onPreview: (src: string, alt: string) => void;
}) => {
  const ratioClass = src ? '' : ratioClassMap[ratio];

  if (src) {
    return (
      <button
        type="button"
        onClick={() => onPreview(src, alt)}
        className={`group relative block w-full overflow-hidden rounded-[28px] border border-black/8 bg-[#f6f6f6] text-left ${ratioClass}`}
      >
        <img
          src={src}
          alt={alt}
          className="block h-auto w-full object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent opacity-90" />
      </button>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border border-dashed border-black/12 bg-black/[0.02] ${ratioClass}`}
    >
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:26px_26px]" />
      <div className="relative flex h-full items-center justify-center">
        <div className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-black/45">
          Replace with {label}
        </div>
      </div>
    </div>
  );
};

const CaseStudyBeClean: React.FC = () => {
  const { theme } = useTheme();
  const activeId = useActiveSection(tocItems);
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);
  const isVisible = usePageReveal();
  const coverImage = theme === 'dark' ? beCleanCoverDark : beCleanCover;

  const description = useMemo(
    () =>
      'Led end-to-end research and product design for beClean, a new on-demand home cleaning service from be, shaping the MVP booking experience from early discovery to launch.',
    []
  );

  const openPreview = (src: string, alt: string) => setPreview({ src, alt });
  const closePreview = () => setPreview(null);

  return (
    <div className="bg-white text-black">
      <style>
        {`
          html { scroll-behavior: smooth; }

          .stat-card {
            opacity: 0;
            transform: translateY(28px) scale(.97);
            transition:
              opacity .7s cubic-bezier(.22,1,.36,1),
              transform .7s cubic-bezier(.22,1,.36,1),
              box-shadow .35s ease;
          }

          .stat-card.is-visible {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

          .stat-card.is-visible .stat-value {
            animation: metricPop .9s cubic-bezier(.2,.9,.2,1.15) both;
          }

          .stat-card:hover {
            box-shadow: 0 20px 50px rgba(0,0,0,0.06);
          }

          @keyframes metricPop {
            0% {
              opacity: 0;
              transform: translateY(18px) scale(.92);
            }
            60% {
              opacity: 1;
              transform: translateY(-6px) scale(1.03);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes lightboxFade {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes lightboxZoom {
            from {
              opacity: 0;
              transform: translateY(10px) scale(.96);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}
      </style>

      <Lightbox
        open={Boolean(preview)}
        src={preview?.src || ''}
        alt={preview?.alt || ''}
        onClose={closePreview}
      />

      <div className="mx-auto mt-16 w-full max-w-[1720px] px-6 pb-20 pt-24 md:px-12 lg:px-[10vw] xl:pt-28">
        <section
          className={`page-reveal ${isVisible ? 'is-visible' : ''}`}
          style={{ animationDelay: '80ms' }}
        >
          {/* <PreviewImage
            src={beCleanCover}
            alt="beClean cover"
            label="cover image"
            ratio="cover"
            onPreview={openPreview}
          /> */}

          <div className="mt-8 mb-8 grid gap-7 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start xl:grid-cols-[minmax(0,1fr)_300px]">
            <div className="min-w-0">
              {/* <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-black/35">
                Case Study
              </p> */}

              <h1 className="text-[clamp(1.6rem,3vw,2.8rem)] font-semibold leading-[1.18] tracking-[-0.04em] text-black">
                beClean - Hourly Cleaning Service
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-black/68 md:text-lg">
                {description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
            </div>

            <div className="space-y-5 pt-1">
              <div>
                <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-black/35">Tools</p>
                <div className="flex flex-wrap gap-2">
                  {tools.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-black/35">Released on</p>
                <p className="text-sm font-medium text-black/75">Q3/2024</p>
              </div>

              <div>
                <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-black/35">Team size</p>
                <p className="text-sm font-medium text-black/75">1 Product Designer, 1 Product Manager</p>
              </div>
            </div>
          </div>

          <PreviewImage
            src={coverImage}
            alt="beClean cover"
            label="cover image"
            ratio="cover"
            onPreview={openPreview}
          />
        </section>

        <div
          className={`mt-16 grid gap-12 xl:grid-cols-[minmax(0,1fr)_180px] 2xl:gap-16 page-reveal ${isVisible ? 'is-visible' : ''}`}
          style={{ animationDelay: '160ms' }}
        >
          <article className="min-w-0">
            <Section id="background" title="Background">
              <div className="rounded-[28px] border border-black/8 bg-black/[0.015] p-6">
                <p className="text-black">
                  As of 2024, <strong>be</strong> is positioned as a marketplace for hourly workers
                  and hourly staffing seekers, while also expanding its role as a <strong>super app</strong>.
                  One of the first new services introduced in this direction was <strong>beClean</strong>,
                  an hourly home cleaning service.
                </p>
              </div>

              <div className="pt-2">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">
                  What is Hourly Cleaning Service?
                </h3>
                <p className="mt-3">
                  Hourly Cleaning Service refers to professional cleaning or home assistance
                  provided on an hourly basis across homes, offices, restaurants, and other
                  settings. Typical tasks include cleaning, basic maintenance, cooking support,
                  and more.
                </p>
              </div>

              <div className="pt-2">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">
                  Why do people need cleaning services?
                </h3>
                <div className="mt-3">
                  <BulletList
                    items={[
                      'Save time to focus on personal activities, rest, or family.',
                      'Reduce stress by avoiding housework during precious days off.',
                      'Ensure safety with verified and trustworthy cleaners.',
                    ]}
                  />
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">Target customers</h3>
                <div className="mt-4 grid gap-5 sm:grid-cols-2">
                  <div>
                    <p className="mb-2 font-semibold text-black">Location</p>
                    <p>Major cities in Vietnam such as Ho Chi Minh City and Ha Noi.</p>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-black">Age</p>
                    <p>25–45 years old.</p>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-black">Income</p>
                    <p>Medium to High.</p>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-black">Behavior</p>
                    <p>Users who value time, convenience, and reliable at-home help.</p>
                  </div>
                </div>
              </div>
            </Section>

            <Section id="goal" title="What’s the goal?">
              <p>
                How can <strong>be</strong> enter a market dominated by 2 established giants (#1 bTaskee, #2 JupViec) while maintaining the premium brand identity?
              </p>

              <BulletList
                items={[
                  'Research, analyze, and design an MVP customer experience that addresses the most important user needs.',
                  'Reuse and optimize existing operational flows and resources from the be Driver App for the cleaners side where possible.',
                ]}
              />
            </Section>

            <Section id="success" title="Measuring the success">
              <div className="grid gap-10 lg:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">Product metrics</h3>
                  <div className="mt-4">
                    <BulletList
                      items={[
                        'Requests & Orders',
                        'Conversion Rate',
                        'Active users',
                        'No. of engaged users',
                        '% Select Services',
                        'No. of request users / requests per user',
                        'Cancellation rate (Customer & Cleaner)',
                      ]}
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">UX metrics</h3>
                  <div className="mt-4">
                    <BulletList items={['Completion Rate', 'Time on Task', 'Click-Through Rate']} />
                  </div>
                </div>
              </div>
            </Section>

            <Section id="insights" title="Gathering the insights">
              <p>
                To shape the MVP, I focused on understanding how users currently booked cleaning
                services, what frustrations existed in the market, and where beClean could create
                a more thoughtful booking experience.
              </p>

              <BulletList
                items={[
                  'Understand user behavior and expectations through interviews.',
                  'Run usability testing on multiple booking flow directions.',
                  'At the time being, the market for hourly, on-demand cleaning services in vietnam is dominated by two major players: bTaskee (#1) and Jupviec (#2). these platforms have established themselves as the most popular choices for users seeking convenient and reliable cleaning services',
                ]}
              />

              <div className="pt-2">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">User Interview</h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-black/6 bg-black/[0.015] p-4">
                    <p><strong>Interviewer:</strong> 1 Product Designer</p>
                    <p><strong>Duration:</strong> 30 to 60 minutes</p>
                    <p><strong>Sample size:</strong> 10 people</p>
                  </div>
                  <div className="rounded-2xl border border-black/6 bg-black/[0.015] p-4">
                    <p><strong>Location:</strong> Ho Chi Minh / Ha Noi</p>
                    <p><strong>Behavior:</strong> Users who had booked cleaning services online before</p>
                    <p><strong>Notes:</strong> Recorded sessions and observed habits / pain points</p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-black/6 bg-black/[0.015] p-5">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-black/40">
                    Question List (EN)
                  </p>
                  <div className="grid gap-x-8 gap-y-3 md:grid-cols-2">
                    {userInterviewQuestions.map((q, index) => (
                      <div key={q} className="flex gap-3 text-sm leading-7 text-black/68">
                        <span className="w-6 shrink-0 text-black/35">{index + 1}.</span>
                        <span>{q}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">Key findings</h3>
                <div className="mt-5 grid gap-4">
                  {keyFindings.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-black/6 bg-black/[0.015] p-5"
                    >
                      <p className="mb-2 font-semibold text-black">{item.title}</p>
                      <p>{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">Highlighted pain points</h3>
                <div className="mt-4">
                  <BulletList items={painPoints} />
                </div>
              </div>
            </Section>

            <Section id="competitors" title="Analyzing the competitors">
              <p>
                I focused on the booking flow because it was the core experience we needed to make
                fast, trustworthy, and easy to understand for first-time users.
              </p>

              <div className="grid gap-6">
                <Box>
                  <div className="mb-5 flex items-center gap-4">
                    <LogoPlaceholder
                      src={assets.btaskeeLogo}
                      alt="bTaskee logo"
                      fallbackText="Logo"
                    />
                    <div>
                      <h3 className="text-xl font-semibold tracking-[-0.02em] text-black">
                        bTaskee
                      </h3>
                      <p className="text-sm text-black/50">Competitor booking flow review</p>
                    </div>
                  </div>

                  <PreviewImage
                    src={assets.btaskeeFlow}
                    alt="bTaskee booking flow"
                    label="bTaskee booking flow screenshots"
                    onPreview={openPreview}
                  />

                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <div>
                      <p className="mb-3 font-semibold text-emerald-700">Strengths</p>
                      <BulletList
                        items={[
                          'Default cleaning duration reduces decision effort.',
                          'Base price is visible early in the flow.',
                          'Strong add-on options for extra needs.',
                          'Date and time are separated into a dedicated step.',
                          'Checkout summarizes selected inputs clearly.',
                        ]}
                      />
                    </div>
                    <div>
                      <p className="mb-3 font-semibold text-rose-700">Weaknesses</p>
                      <BulletList
                        items={[
                          'Descriptions for premium options are not visible enough.',
                          'Some add-on pricing is hard to understand.',
                          'No progress bar across steps.',
                          'No photo upload for cleaning area.',
                          'Users cannot easily edit selections in checkout.',
                        ]}
                      />
                    </div>
                  </div>
                </Box>

                <Box>
                  <div className="mb-5 flex items-center gap-4">
                    <LogoPlaceholder
                      src={assets.jupviecLogo}
                      alt="JupViec logo"
                      fallbackText="Logo"
                    />
                    <div>
                      <h3 className="text-xl font-semibold tracking-[-0.02em] text-black">
                        JupViec
                      </h3>
                      <p className="text-sm text-black/50">Competitor booking flow review</p>
                    </div>
                  </div>

                  <PreviewImage
                    src={assets.jupviecFlow}
                    alt="JupViec booking flow"
                    label="JupViec booking flow screenshots"
                    onPreview={openPreview}
                  />

                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <div>
                      <p className="mb-3 font-semibold text-emerald-700">Strengths</p>
                      <BulletList
                        items={[
                          'Service introduction gives context to users.',
                          'Users can choose the number of cleaners.',
                          'Base price is visible up front.',
                          'Calendar shows price fluctuation.',
                          'Checkout is transparent and easy to review.',
                        ]}
                      />
                    </div>
                    <div>
                      <p className="mb-3 font-semibold text-rose-700">Weaknesses</p>
                      <BulletList
                        items={[
                          'Add-on prices are hidden behind an extra tap.',
                          'No progress bar.',
                          'Recurring service section is too text-heavy.',
                          'Promo placement is not very visible.',
                          'Editing previous choices remains difficult.',
                        ]}
                      />
                    </div>
                  </div>
                </Box>

                <div className="pt-2">
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">Opportunity</h3>
                  <p className="mt-4">
                    Both competitors offered solid customization, but they still left room to
                    improve usability. This created a clear opportunity for beClean to stand out
                    through simpler structure, clearer pricing, and better flexibility.
                  </p>

                  <div className="mt-4">
                    <BulletList items={opportunities} />
                  </div>

                  <div className="mt-5">
                    <p className="mb-4 font-semibold text-black">First-phase must-have functions</p>
                    <div className="flex flex-wrap gap-2">
                      {phaseOneFunctions.map((item) => (
                        <Chip key={item}>{item}</Chip>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            <Section id="draft" title="First draft (Happy case)">
              <div className="pt-2">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">
                  Flow chart for booking flow
                </h3>
                <div className="mt-5">
                  <PreviewImage
                    src={assets.bookingFlowChart}
                    alt="Booking flow chart"
                    label="booking flow chart"
                    ratio="flow"
                    onPreview={openPreview}
                  />
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">Flow option 1</h3>
                <p className="mt-3">
                  Merge date, duration, and service details into one step. This shortens the
                  booking flow, but creates higher information density and makes the screen harder
                  to scale over time.
                </p>
                <div className="mt-5">
                  <PreviewImage
                    src={assets.flowOption1}
                    alt="Flow option 1"
                    label="Flow option 1"
                    onPreview={openPreview}
                  />
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">Flow option 2</h3>
                <p className="mt-3">
                  Separate date & duration from service details. This makes the flow longer, but
                  lowers cognitive load, improves focus, and creates a cleaner foundation for
                  future expansion.
                </p>
                <div className="mt-5">
                  <PreviewImage
                    src={assets.flowOption2}
                    alt="Flow option 2"
                    label="Flow option 2"
                    onPreview={openPreview}
                  />
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">
                  Usability testing the 2 options
                </h3>

                <div className="mt-5 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
                  <div className="rounded-2xl border border-black/6 bg-black/[0.015] p-5">
                    <p className="mb-4 font-semibold text-black">Quantitative insights</p>
                    <BulletList items={usabilityResults} />
                  </div>

                  <div className="rounded-2xl border border-black/6 bg-black/[0.015] p-5">
                    <p className="mb-4 font-semibold text-black">Key expectations & opportunities</p>
                    <NumberedList items={usabilityOpportunities} />
                  </div>
                </div>
              </div>
            </Section>

            <Section id="solution" title="Final Solution for MVP">
              <p>
                After usability testing, the team chose <strong>Option 2</strong>. While Option 1 was faster, Option 2 allowed for better data modularity. This meant we could scale the service to include extras like 'Add-ons' (like laundry or pet care) and more features in the future without breaking the API structure.
              </p>

              <div className="pt-2">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">Chosen direction</h3>
                <div className="mt-5">
                  <PreviewImage
                    src={assets.finalMvp}
                    alt="Final MVP flow"
                    label="final MVP booking flow"
                    onPreview={openPreview}
                  />
                </div>
              </div>
            </Section>

            <Section id="impact" title="Impact post launch">
              <p className="max-w-3xl">
                After launch near the end of 2024, beClean showed strong early traction in under a
                year. To make the results feel more tangible, I’m highlighting the metrics that best
                reflect both growth and service quality.
              </p>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {impactStats.map((item, index) => (
                    <ImpactStatCard
                      key={item.label}
                      label={item.label}
                      note={item.note}
                      delay={index * 70}
                      renderValue={(inView) => (
                        <CountUp
                          start={inView}
                          value={item.value}
                          decimals={item.decimals}
                          prefix={item.prefix}
                          suffix={item.suffix}
                        />
                      )}
                    />
                  ))}
                </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {impactExtra.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[28px] border border-black/8 bg-black/[0.015] p-6"
                  >
                    <p className="text-lg font-semibold tracking-[-0.02em] text-black">
                      {item.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-black/62">{item.body}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="next" title="What’s next?">
              <p>
                After the first MVP launch, one of the strongest user needs became clear:
                people wanted to rebook cleaners they already trusted. Based on that insight,
                we explored two follow-up features.
              </p>

              <NumberedList items={nextSteps} />
            </Section>
          </article>

          <aside className="hidden xl:block">
            <div className="sticky top-28">
              <div className="border-l border-black/8 pl-4">
                <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-black/28">
                  Table of contents
                </p>

                <nav className="space-y-2">
                  {tocItems.map((item) => {
                    const isActive = activeId === item.id;

                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block text-sm transition-colors ${
                          isActive
                            ? 'font-semibold text-black/72'
                            : 'font-normal text-black/45 hover:text-black/68'
                        }`}
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </nav>
              </div>
            </div>
          </aside>
        </div>

        <section
          className={`mt-28 border-t border-black/6 pt-14 md:mt-32 md:pt-16 page-reveal ${isVisible ? 'is-visible' : ''}`}
          style={{ animationDelay: '240ms' }}
        >
          <h2 className="text-[clamp(1.6rem,2.8vw,2.3rem)] font-semibold tracking-[-0.03em] text-black">
            Other projects
          </h2>

          <div className="mt-8 grid gap-6 lg:max-w-[1180px] lg:grid-cols-2">
            {relatedBeProjects.map((project) => (
              <div
                key={project.title}
                className="max-w-[560px] [&_.aspect-video]:aspect-[aspect-video] [&_.aspect-video]:mb-3 [&_.mb-16]:mb-0 [&_.project-info_h4]:mb-2 [&_.project-info_h4]:text-lg [&_.project-info_p]:max-w-none [&_.project-info_p]:text-sm [&_.project-info_p]:leading-7"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudyBeClean;
