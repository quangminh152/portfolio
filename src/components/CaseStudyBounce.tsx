import React, { useEffect, useMemo, useRef, useState } from 'react';
import bounceCover from '../assets/bounce-multiple-vehicles-cover.png';
import bounceCompare from '../assets/bounce-compare.png';
import bounceDidiLogo from '../assets/bounce-didi-logo.png';
import bounceDidi from '../assets/bounce-didi.png';
import bounceFlow1 from '../assets/bounce-flow1.png';
import bounceFlow2 from '../assets/bounce-flow2.png';
import bounceFlow3 from '../assets/bounce-flow3.png';
import bounceFlow4 from '../assets/bounce-flow4.png';
import bounceFlow5 from '../assets/bounce-flow5.png';
import bounceNext from '../assets/bounce-next.png';
import bounceMultipleVehiclesOldGif from '../assets/bounce-multiple-vehicles-old.gif';
import bounceSolutionStructure from '../assets/bounce-solution-structure.png';
import beCleanCover from '../assets/beclean.png';
import beDeliveryCover from '../assets/bedelivery.png';
import ProjectCard from './ProjectCard';
import type { Project } from '../types';

type TocItem = {
  id: string;
  label: string;
};

type RatioKey = 'cover' | 'wide' | 'square' | 'flow' | 'tall';

type StatItem = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  note: string;
};

const tocItems: TocItem[] = [
  { id: 'background', label: 'Background & Overview' },
  { id: 'issue', label: 'What’s the issue?' },
  { id: 'success', label: 'Measuring the success' },
  { id: 'insights', label: 'Gathering the insights' },
  { id: 'results', label: 'The results' },
  { id: 'next', label: 'What’s next?' },
];

type AssetMap = {
  previousGif?: string;
  successChart?: string;
  didiLogo?: string;
  didiFlow1?: string;
  didiFlow2?: string;
  solutionBlueprint?: string;
  normalFlow?: string;
  bounceVehicles?: string;
  addMoreVehicles?: string;
  swipeUp?: string;
  foundDriver?: string;
  nextFeature?: string;
};

const assets: AssetMap = {
  previousGif: bounceMultipleVehiclesOldGif,
  successChart: bounceCompare,
  didiLogo: bounceDidiLogo,
  didiFlow1: bounceDidi,
  didiFlow2: '',
  solutionBlueprint: bounceSolutionStructure,
  normalFlow: bounceFlow1,
  bounceVehicles: bounceFlow2,
  addMoreVehicles: bounceFlow3,
  swipeUp: bounceFlow4,
  foundDriver: bounceFlow5,
  nextFeature: bounceNext,
};

const tags = ['New Feature', 'Product Design'];
const tools = ['Figma'];

const issueSteps = [
  'After users confirm their selected vehicle and place a booking, the next step is finding a driver.',
  'Previously, if the system could not find a nearby driver after a while, it would suggest requesting one additional vehicle type to expand the search.',
  'This was intended to increase the chance of finding a driver and reduce trip cancellations, but the measured indicators showed the approach was still not optimal.',
];

const stakeholderPoints = [
  'I interviewed stakeholders to understand how the old flow and dispatch logic worked, and to align fully with the business requirement.',
  'I also interviewed several users to learn more about their behavior, urgency, and expectations when trying to book a ride during peak hours.',
];

const stakeholderTakeaways = [
  'Customers in urgent need of transportation want to improve their chances of getting matched faster during high-demand periods.',
  'They also consider pricing carefully when deciding whether to request additional vehicle options.',
];

const didiStrengths = [
  'Checkbox UI makes it intuitive to select multiple vehicle types at once.',
  'Payment information is clear and easier to understand.',
  'Requested vehicle types and search status are visible, which improves transparency.',
];

const didiWeaknesses = [
  'No option to select or deselect all vehicles at once.',
  'The map area is heavily obscured, reducing visibility.',
  'Showing status for each vehicle type creates noise that users may not need.',
];

const competitorTakeaways = [
  'Checkbox-based UI is intuitive for multi-select behavior.',
  'Showing selected vehicle names and count is important for transparency.',
  'Clear payment information helps build trust and confidence.',
];

const opportunities = [
  'Allow users to select additional vehicle options while the system is still searching for a driver.',
  'Give customers more flexibility to compare fares across multiple ride options.',
];

const useCases = [
  {
    title: 'Book ride → Find driver normal flow',
    description:
      'After users confirm and book a ride, the app begins searching for a driver of the selected vehicle as usual.',
    assetKey: 'normalFlow' as const,
  },
  {
    title: 'Driver isn’t found after {x} amount of time → Bounce vehicles',
    description:
      'If a driver is not found within a certain amount of time, the system presents alternative vehicles for users to choose from.',
    assetKey: 'bounceVehicles' as const,
  },
  {
    title: 'Users select to add more vehicles',
    description:
      'Users can add more vehicle types so the system can expand the search. For non-cash payments, the UI explains that fee differences will be charged or refunded after the trip.',
    assetKey: 'addMoreVehicles' as const,
  },
  {
    title: 'Swipe up',
    description:
      'Users can swipe up to view the full list of available rides, detailed ride information, and the option to cancel their ride.',
    assetKey: 'swipeUp' as const,
  },
  {
    title: 'Found a driver',
    description:
      'Once a driver is found, the system displays a toast message to notify users which vehicle has been successfully booked.',
    assetKey: 'foundDriver' as const,
  },
];

const impactStats: StatItem[] = [
  {
    value: 2,
    suffix: '%',
    prefix: '↑',
    label: 'Selection rate uplift',
    note: 'Within 20 days, users accepting at least one suggested vehicle increased by around 2% of total rides.',
  },
  {
    value: 80,
    suffix: 'k+',
    label: 'Additional trips / month',
    note: 'Bounce dispatch generated roughly 80k additional trips per month.',
  },
];

const relatedBeProjects: Project[] = [
  {
    title: 'beClean - Hourly Cleaning Service',
    desc: 'Designed the MVP booking experience for beClean, a new on-demand home cleaning service from be.',
    img: beCleanCover,
    link: '/work/beclean',
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
  tall: 'aspect-[3/4]',
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

function useInViewOnce<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [inView]);

  return { ref, inView };
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
        <img src={src} alt={alt} className="block h-auto w-full object-contain" />
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

const ImpactStatCard = ({
  item,
  delay = 0,
}: {
  item: StatItem;
  delay?: number;
}) => {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`stat-card rounded-[28px] border border-black/8 bg-white p-6 md:p-7 ${
        inView ? 'is-visible' : ''
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="stat-value text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-none tracking-[-0.06em] text-black"
        style={{ animationDelay: `${delay}ms` }}
      >
        <CountUp
          start={inView}
          value={item.value}
          decimals={item.decimals}
          prefix={item.prefix}
          suffix={item.suffix}
        />
      </div>

      <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-black/40">
        {item.label}
      </p>
      <p className="mt-4 max-w-[28ch] text-sm leading-7 text-black/62">{item.note}</p>
    </div>
  );
};

const CaseStudyBounce: React.FC = () => {
  const activeId = useActiveSection(tocItems);
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);

  const description = useMemo(
    () =>
      'A post-booking dispatch enhancement that lets riders add alternative vehicle types while the system is still searching, helping reduce wait time and improve the chance of getting matched with a driver.',
    []
  );

  const openPreview = (src: string, alt: string) => setPreview({ src, alt });
  const closePreview = () => setPreview(null);

  return (
    <div className="bg-white text-black">
      <style>
        {`
          html { scroll-behavior: smooth; }

          .fade-in-up {
            animation: fadeInUp .75s cubic-bezier(.22,1,.36,1) both;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(22px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

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
            from { opacity: 0; }
            to { opacity: 1; }
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

      <div className="mx-auto w-full max-w-[1720px] px-6 pb-20 pt-24 md:px-12 lg:px-[10vw] xl:pt-28">
        <section className="fade-in-up">
          <PreviewImage
            src={bounceCover}
            alt="Bounce Dispatch cover"
            label="cover image"
            ratio="cover"
            onPreview={openPreview}
          />

          <div className="mt-8 grid gap-7 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start xl:grid-cols-[minmax(0,1fr)_300px]">
            <div className="min-w-0">
              {/* <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-black/35">
                Case Study
              </p> */}

              <h1 className="text-[clamp(1.6rem,3vw,2.8rem)] font-semibold leading-[1.18] tracking-[-0.04em] text-black">
                🛵 beTransport - Bounce Dispatch to Multiple Vehicles when finding drivers
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
        </section>

        <div className="mt-16 grid gap-12 xl:grid-cols-[minmax(0,1fr)_180px] 2xl:gap-16">
          <article className="min-w-0">
            <Section id="background" title="Background & Overview">
              <Box>
                <p>
                  <strong>be</strong> is a platform focused primarily on transportation booking,
                  serving a large working-age audience, especially office workers.
                </p>
                <div className="mt-4">
                  <BulletList
                    items={[
                      'During peak hours, ride requests surge and the system needs more time to find drivers.',
                      'This leads to longer wait times and a poorer user experience.',
                      'It also increases cancellation risk and pushes customers to try other platforms.',
                    ]}
                  />
                </div>
              </Box>
            </Section>

            <Section id="issue" title="What’s the issue?">
              <NumberedList items={issueSteps} />

              <div className="pt-2">
                <div className="overflow-hidden rounded-[28px] border border-black/8 bg-[#f5f6f7] p-4 md:p-6">
                  <div className="aspect-[16/9] overflow-hidden rounded-[22px] ">
                    <button
                      type="button"
                      onClick={() => assets.previousGif && openPreview(assets.previousGif, 'Previous bounce dispatch flow')}
                      className="flex h-full w-full items-center justify-center"
                    >
                      <img
                        src={assets.previousGif}
                        alt="Previous bounce dispatch flow"
                        className="h-full w-full object-contain"
                      />
                    </button>
                  </div>
                </div>

                <p className="mt-3 text-sm leading-7 text-black/52">
                  Previously, riders could only accept one additional vehicle suggestion to expand the search.
                </p>
              </div>

              <div className="pt-2">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">How might we…</h3>
                <div className="mt-4">
                  <BulletList
                    items={[
                      'Reduce waiting time and increase the chance of getting a driver during peak hours?',
                      'Reduce cancellation caused by long waits or by not finding a driver at all?',
                    ]}
                  />
                </div>
              </div>

              <Box>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-black/40">
                  Assumption
                </p>
                <p>
                  If <strong>be</strong> gives users more flexibility in selecting additional vehicle
                  types, it could improve the likelihood of getting matched faster.
                </p>
              </Box>
            </Section>

            <Section id="success" title="Measuring the success">
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">Goals and objectives</h3>
                <div className="mt-4">
                  <BulletList
                    items={[
                      'Increase the chance of successful bookings and completed rides.',
                      'Increase the rate of drivers accepting requests.',
                      'Reduce ride cancellation rate.',
                    ]}
                  />
                </div>
              </div>
            </Section>

            <Section id="insights" title="Gathering the insights">
              <div className="pt-2">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">What do stakeholders say?</h3>
                <div className="mt-4">
                  <BulletList items={stakeholderPoints} />
                </div>

                <div className="mt-5 rounded-2xl border border-black/6 bg-black/[0.015] p-5">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-black/40">
                    Key takeaways
                  </p>
                  <BulletList items={stakeholderTakeaways} />
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">Analyzing the competitors</h3>
                <p className="mt-3 pb-3">
                  At the time (Dec 2023), there were very few major ride-hailing apps offering this
                  type of feature. One useful benchmark was <strong>DiDi Chuxing</strong>, a leading
                  ride-hailing platform in China.
                </p>

                <Box>
                  <div className="mb-5 flex items-center gap-4">
                    <LogoPlaceholder
                      src={assets.didiLogo}
                      alt="DiDi logo"
                      fallbackText="Logo"
                    />
                    <div>
                      <h3 className="text-xl font-semibold tracking-[-0.02em] text-black">
                        DiDi Chuxing
                      </h3>
                      <p className="text-sm text-black/50">Competitor reference</p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <PreviewImage
                      src={assets.didiFlow1}
                      alt="DiDi flow"
                      label="DiDi flow"
                      onPreview={openPreview}
/>
                  </div>

                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <div>
                      <p className="mb-3 font-semibold text-emerald-700">Strengths</p>
                      <BulletList items={didiStrengths} />
                    </div>
                    <div>
                      <p className="mb-3 font-semibold text-rose-700">Weaknesses</p>
                      <BulletList items={didiWeaknesses} />
                    </div>
                  </div>
                </Box>

                <div className="mt-6 rounded-2xl border border-black/6 bg-black/[0.015] p-5">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-black/40">
                    Key takeaways
                  </p>
                  <BulletList items={competitorTakeaways} />
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">Opportunity</h3>
                <div className="mt-4">
                  <BulletList items={opportunities} />
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">Solution structure overview</h3>
                <div className="mt-5">
                  <PreviewImage
                    src={assets.solutionBlueprint}
                    alt="Solution structure overview"
                    label="solution structure overview"
                    ratio="flow"
                    onPreview={openPreview}
                  />
                </div>
              </div>
            </Section>

            <Section id="results" title="The results">
              <p>
                Based on the blueprint, I moved into UI exploration, mapped the main use cases,
                and documented the proposed display logic in detail so the team could validate
                both the interaction model and edge cases clearly.
              </p>

              <div className="pt-2">
                <PreviewImage
                  src={assets.successChart}
                  alt="Results comparison chart"
                  label="results comparison chart"
                  onPreview={openPreview}
                />
              </div>

              <div className="space-y-10 pt-2">
                {useCases.map((item, index) => (
                  <div key={item.title}>
                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">
                      {index + 1}. {item.title}
                    </h3>
                    <div className="mt-5">
                      <PreviewImage
                        src={assets[item.assetKey]}
                        alt={item.title}
                        label={item.title}
                        onPreview={openPreview}
                      />
                    </div>
                    <p className="mt-3 text-sm leading-7 text-black/52">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <h3 className="mb-5 text-lg font-semibold tracking-[-0.02em] text-black">
                  Achievements
                </h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  {impactStats.map((item, index) => (
                    <ImpactStatCard key={item.label} item={item} delay={index * 90} />
                  ))}
                </div>
              </div>
            </Section>

            <Section id="next" title="What’s next?">
              <p>
                A natural next step is to introduce multiple vehicle selection even earlier in the
                journey, during pre-booking. That could further increase the likelihood of finding
                a driver faster, especially in high-demand situations.
              </p>

              <div className="pt-2">
                <PreviewImage
                  src={assets.nextFeature}
                  alt="Next feature direction"
                  label="next feature direction"
                  onPreview={openPreview}
                />
              </div>
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
                            : 'font-normal text-black/32 hover:text-black/55'
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

        <section className="mt-28 border-t border-black/6 pt-14 md:mt-32 md:pt-16">
          <h2 className="text-[clamp(1.6rem,2.8vw,2.3rem)] font-semibold tracking-[-0.03em] text-black">
            Other projects
          </h2>

          <div className="mt-8 grid gap-6 lg:max-w-[1180px] lg:grid-cols-2">
            {relatedBeProjects.map((project) => (
              <div
                key={project.title}
                className="max-w-[560px] [&_.aspect-video]:aspect-video [&_.aspect-video]:mb-3 [&_.mb-16]:mb-0 [&_.project-info_h4]:mb-2 [&_.project-info_h4]:text-lg [&_.project-info_p]:max-w-none [&_.project-info_p]:text-sm [&_.project-info_p]:leading-7"
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

export default CaseStudyBounce;