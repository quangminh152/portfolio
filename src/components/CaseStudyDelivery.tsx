import React, { useEffect, useMemo, useState } from 'react';
import deliveryCover from '../assets/bedelivery-cover.png';
import deliveryCoverDark from '../assets/bedelivery-cover-dark.png';
import beDeliveryAhamoveLogo from '../assets/bedelivery-ahamove-logo.png';
import beDeliveryAhamove from '../assets/bedelivery-ahamove.png';
import beDeliveryCompare from '../assets/bedelivery-compare.png';
import beDeliveryGrabLogo from '../assets/bedelivery-grab-logo.png';
import beDeliveryGrab from '../assets/bedelivery-grab.png';
import beDeliveryLalamoveLogo from '../assets/bedelivery-lalamove-logo.png';
import beDeliveryLalamove from '../assets/bedelivery-lalamove.png';
import beDeliveryNew from '../assets/bedelivery-new.png';
import beDeliveryOldDefault from '../assets/bedelivery-old-default.png';
import beDeliveryOldOngoing from '../assets/bedelivery-old-ongoing.png';
import beDeliveryOption1Detail from '../assets/bedelivery-option1-detail.png';
import beDeliveryOption1States from '../assets/bedelivery-option1-states.png';
import beDeliveryOption2Detail from '../assets/bedelivery-option2-detail.png';
import beDeliveryOption2States from '../assets/bedelivery-option2-states.png';
import beDeliveryStructure from '../assets/bedelivery-structure.png';
import beDeliveryTesting from '../assets/bedelivery-testing.png';
import beCleanCover from '../assets/beclean.png';
import bounceCover from '../assets/bounce-multiple-vehicles.png';
import ImpactStatCard from './ImpactStatCard';
import ProjectCard from './ProjectCard';
import ThemeCoverPreview from './ThemeCoverPreview';
import type { Project } from '../types';
import { usePageReveal } from '../usePageReveal';

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

type AssetMap = {
  previousHome?: string;
  heuristicDefault?: string;
  heuristicOngoing?: string;

  grabLogo?: string;
  grabFlow1?: string;
  grabFlow2?: string;

  lalamoveLogo?: string;
  lalamoveFlow1?: string;
  lalamoveFlow2?: string;

  ahamoveLogo?: string;
  ahamoveFlow1?: string;
  ahamoveFlow2?: string;

  solutionStructure?: string;

  optionADefault?: string;
  optionAOngoing?: string;
  optionALoading?: string;
  optionANetwork1?: string;
  optionANetwork2?: string;

  optionBDefault?: string;
  optionBOngoing?: string;
  optionBLoading?: string;
  optionBNetwork1?: string;
  optionBNetwork2?: string;

  abTestChart?: string;
  rolloutResult?: string;
  addedFeatures?: string;
};

const assets: AssetMap = {
  previousHome: beDeliveryOldDefault,
  heuristicDefault: beDeliveryOldDefault,
  heuristicOngoing: beDeliveryOldOngoing,

  grabLogo: beDeliveryGrabLogo,
  grabFlow1: beDeliveryGrab,
  grabFlow2: '',

  lalamoveLogo: beDeliveryLalamoveLogo,
  lalamoveFlow1: beDeliveryLalamove,
  lalamoveFlow2: '',

  ahamoveLogo: beDeliveryAhamoveLogo,
  ahamoveFlow1: beDeliveryAhamove,
  ahamoveFlow2: '',

  solutionStructure: beDeliveryStructure,

  optionADefault: beDeliveryOption1States,
  optionAOngoing: beDeliveryOption1Detail,
  optionALoading: '',
  optionANetwork1: '',
  optionANetwork2: '',

  optionBDefault: beDeliveryOption2States,
  optionBOngoing: beDeliveryOption2Detail,
  optionBLoading: '',
  optionBNetwork1: '',
  optionBNetwork2: '',

  abTestChart: beDeliveryTesting,
  rolloutResult: beDeliveryCompare,
  addedFeatures: beDeliveryNew,
};

const tocItems: TocItem[] = [
  { id: 'background', label: 'Background' },
  { id: 'issue', label: 'What’s the issue?' },
  { id: 'success', label: 'Measuring the success' },
  { id: 'insights', label: 'Gathering the insights' },
  { id: 'options', label: 'What we came up with' },
  { id: 'testing', label: 'Testing the versions' },
  { id: 'improvements', label: 'Adding features and improvements' },
];

const tags = ['Revamp', 'Product Design'];
const tools = ['Figma'];

const issuePrompts = [
  'Address the issues through a UX and UI audit.',
  'Make the home screen more appealing and easier to understand.',
  'Add useful features and information that improve the experience.',
  'Increase the rate of users entering the booking flow and reduce drop-off at this step.',
];

const defaultAudit = [
  {
    method: 'Learnability',
    comment:
      'The screen is relatively simple, so users can recognize the main content quickly without much confusion.',
  },
  {
    method: 'Memorability',
    comment:
      'Because the information is limited and familiar, users can remember the actions on the screen fairly easily.',
  },
  {
    method: 'Efficiency',
    comment:
      'Most actions, especially the address input form, are placed in hard-to-reach areas, reducing interaction efficiency.',
  },
  {
    method: 'Satisfaction',
    comment:
      'The UI feels too minimal for one of be’s key services. The large empty space below the banner wastes screen space and creates uncertainty about what users should do next.',
  },
  {
    method: 'Error',
    comment: 'No major error-prevention issue was highlighted in this state.',
  },
];

const ongoingAudit = [
  {
    method: 'Learnability',
    comment:
      'A completely different interface appears when an order is in progress, forcing users to adapt to a new layout.',
  },
  {
    method: 'Memorability',
    comment:
      'Users have to remember two separate interfaces for the same service, which weakens consistency.',
  },
  {
    method: 'Efficiency',
    comment:
      'The “Create new order” action is placed high on the screen and is harder to reach, while the changed structure also creates confusion.',
  },
  {
    method: 'Satisfaction',
    comment:
      'The layout only appears in one state, which makes the experience feel inconsistent and less polished.',
  },
  {
    method: 'Error',
    comment: 'No major error-prevention issue was highlighted in this state.',
  },
];

const grabStrengths = [
  'Prominent banner helps raise awareness and highlight key service features.',
  'Suggested destinations support faster repeat actions.',
  'Additional delivery services create more exploration opportunities.',
  'News and promotions improve visibility of deals and campaigns.',
];

const grabWeaknesses = [
  'Saved locations and order history rely too much on unlabeled icons.',
  'The delivery location input area is not clearly defined.',
  'The ongoing status block lacks prominence and is harder to scan quickly.',
];

const lalamoveStrengths = [
  'Prominent banner brings attention to the service quickly.',
  'Clear vehicle and service options help users choose faster.',
];

const lalamoveWeaknesses = [
  'No quick address selection for pickup and drop-off.',
  'Input touch area is not clearly defined.',
  'Ongoing status lacks enough glanceable information.',
];

const ahamoveStrengths = [
  'Prominent banner improves feature awareness.',
  'Service options are displayed clearly for quick selection.',
  'Pickup and drop-off input area is easy to recognize and use.',
  'Ongoing status provides a more complete progress overview.',
];

const ahamoveWeaknesses = [
  'No quick shortcuts for frequently used pickup and drop-off addresses.',
];

const opportunityItems = [
  'Show all available delivery services directly on the home page to improve discoverability.',
  'Suggest pickup and drop-off locations so users do not need to re-enter them each time.',
  'Use a more prominent banner to guide attention to important features and services.',
  'Clearly show ongoing order status without changing the overall page structure.',
];

const summaryRows = [
  ['Prominent Banner', '❌', '✅', '✅', '✅'],
  ['Delivery Pickup - Drop-off Input', '✅', '✅', '✅', '✅'],
  ['Quick Service Selection', '❌', '✅', '✅', '✅'],
  ['Suggest Delivery Locations', '✅', '❌', '✅', '❌'],
  ['Ongoing Section', '✅', '✅', '✅', '✅'],
  ['Reviewing Past Orders', '✅', '✅', '❌', '❌'],
  ['Promotion', '❌', '✅', '❌', '❌'],
];

const optionAStates = [
  { title: 'States overview', assetKey: 'optionADefault' as const },
  { title: 'Detailed view', assetKey: 'optionAOngoing' as const },
];

const optionBStates = [
  { title: 'States overview', assetKey: 'optionBDefault' as const },
  { title: 'Detailed view', assetKey: 'optionBOngoing' as const },
];

const resultStats: StatItem[] = [
  {
    value: 12,
    prefix: '↑',
    suffix: '%',
    label: 'CTR growth',
    note: 'CTR to the input address screen increased by around 12% for both new options versus the old version.',
  },
  {
    value: 6,
    prefix: '↑',
    suffix: '%',
    label: 'CVR growth',
    note: 'Order creation conversion increased by roughly 6% compared with the previous design.',
  },
];

const improvementPoints = [
  'beDelivery increasingly targeted shop owners and retailers who use the service frequently.',
  'To better support this user base, the team introduced Seller Club with subscription packages tailored for businesses.',
  'The Delivery Form was added to streamline order management for frequent users.',
  'These improvements aimed to increase long-term engagement and make the service more useful for recurring delivery needs.',
];

const relatedBeProjects: Project[] = [
  {
    title: 'beClean - Hourly Cleaning Service',
    desc: 'Designed the MVP booking experience for beClean, a new on-demand home cleaning service from be.',
    img: beCleanCover,
    link: '/work/beclean',
  },
  {
    title: 'Bounce Dispatch to Multiple Vehicles',
    desc: 'Allows customers to select other vehicles as additional options after requesting a ride. Aimed to reducing cancellation rate.',
    img: bounceCover,
    link: '/work/bounce-dispatch',
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

const HeuristicTable = ({
  rows,
}: {
  rows: { method: string; comment: string }[];
}) => (
  <div className="overflow-x-auto rounded-[24px] border border-black/8">
    <table className="min-w-full border-collapse text-left">
      <thead>
        <tr className="bg-black/[0.03]">
          <th className="w-[180px] px-5 py-4 text-sm font-semibold text-black">Method</th>
          <th className="px-5 py-4 text-sm font-semibold text-black">Comment</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.method} className="border-t border-black/6">
            <td className="px-5 py-4 align-top text-sm font-medium text-black">{row.method}</td>
            <td className="px-5 py-4 text-sm leading-7 text-black/68">{row.comment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SummaryMatrix = () => (
  <div className="overflow-x-auto rounded-[24px] border border-black/8">
    <table className="min-w-full border-collapse text-left">
      <thead>
        <tr className="bg-black/[0.03]">
          <th className="px-5 py-4 text-sm font-semibold text-black">Objective</th>
          <th className="px-5 py-4 text-sm font-semibold text-black">be</th>
          <th className="px-5 py-4 text-sm font-semibold text-black">Grab</th>
          <th className="px-5 py-4 text-sm font-semibold text-black">Lalamove</th>
          <th className="px-5 py-4 text-sm font-semibold text-black">AhaMove</th>
        </tr>
      </thead>
      <tbody>
        {summaryRows.map((row) => (
          <tr key={row[0]} className="border-t border-black/6">
            <td className="px-5 py-4 text-sm font-medium text-black">{row[0]}</td>
            <td className="px-5 py-4 text-sm text-black/68">{row[1]}</td>
            <td className="px-5 py-4 text-sm text-black/68">{row[2]}</td>
            <td className="px-5 py-4 text-sm text-black/68">{row[3]}</td>
            <td className="px-5 py-4 text-sm text-black/68">{row[4]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
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

const CompetitorCard = ({
  logo,
  name,
  description,
  firstImage,
  secondImage,
  strengths,
  weaknesses,
  onPreview,
}: {
  logo?: string;
  name: string;
  description: string;
  firstImage?: string;
  secondImage?: string;
  strengths: string[];
  weaknesses: string[];
  onPreview: (src: string, alt: string) => void;
}) => (
  <Box>
    <div className="mb-5 flex items-center gap-4">
      <LogoPlaceholder src={logo} alt={`${name} logo`} fallbackText="Logo" />
      <div>
        <h3 className="text-xl font-semibold tracking-[-0.02em] text-black">{name}</h3>
        <p className="text-sm text-black/50">{description}</p>
      </div>
    </div>

    <div className="space-y-5">
  <PreviewImage
    src={firstImage}
    alt={`${name} screen 1`}
    label={`${name} screen 1`}
    onPreview={onPreview}
  />
  {secondImage ? (
    <PreviewImage
      src={secondImage}
      alt={`${name} screen 2`}
      label={`${name} screen 2`}
      onPreview={onPreview}
    />
  ) : null}
</div>

    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <div>
        <p className="mb-3 font-semibold text-emerald-700">Strengths</p>
        <BulletList items={strengths} />
      </div>
      <div>
        <p className="mb-3 font-semibold text-rose-700">Weaknesses</p>
        <BulletList items={weaknesses} />
      </div>
    </div>
  </Box>
);

const OptionBlock = ({
  title,
  states,
  assetsMap,
  onPreview,
}: {
  title: string;
  states: { title: string; assetKey: keyof AssetMap }[];
  assetsMap: AssetMap;
  onPreview: (src: string, alt: string) => void;
}) => (
  <div className="pt-2">
    <h3 className="text-xl font-semibold tracking-[-0.02em] text-black">{title}</h3>
    <div className="mt-6 space-y-8">
      {states.map((state) => (
        <div key={state.title}>
          <p className="mb-4 text-base font-semibold text-black">{state.title}</p>
          <PreviewImage
            src={assetsMap[state.assetKey]}
            alt={state.title}
            label={state.title}
            onPreview={onPreview}
          />
        </div>
      ))}
    </div>
  </div>
);

const CaseStudyDelivery: React.FC = () => {
  const activeId = useActiveSection(tocItems);
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);
  const isVisible = usePageReveal();

  const description = useMemo(
    () =>
      'A redesign of the beDelivery home screen focused on clarifying key actions, improving service discoverability, and increasing more users into the booking flow.',
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

      <div className="mx-auto mt-16 w-full max-w-[1720px] px-6 pb-20 pt-24 md:px-12 lg:px-[10vw] xl:pt-28">
        <section
          className={`page-reveal ${isVisible ? 'is-visible' : ''}`}
          style={{ animationDelay: '80ms' }}
        >
          {/* <PreviewImage
            src={deliveryCover}
            alt="beDelivery cover"
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
                🛵 Revamp beDelivery Home Screen
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
                <p className="text-sm font-medium text-black/75">Q2/2023</p>
              </div>

              <div>
                <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-black/35">Team size</p>
                <p className="text-sm font-medium text-black/75">
                  1 Product Designer, 1 Product Owner, 1 Product Manager
                </p>
              </div>
            </div>
          </div>

          <ThemeCoverPreview
            lightSrc={deliveryCover}
            darkSrc={deliveryCoverDark}
            alt="beDelivery cover"
            label="cover image"
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
                  <strong>beDelivery</strong> is one of be’s main and fastest-growing services,
                  offering convenient package delivery across Vietnam.
                </p>
                <p className="mt-2 text-black">
                  At the time, the service had two primary offerings: <strong>Instant Delivery</strong>
                  {' '}for immediate needs and <strong>2H Delivery</strong> for delivery within two hours.
                </p>
              </div>
            </Section>

            <Section id="issue" title="What’s the issue?">
              <p>
                The Product team requested a revamp of the beDelivery home screen to address existing
                UX and product issues, improve usability, and increase performance metrics.
              </p>

              <div className="pt-2">
                <PreviewImage
                  src={assets.previousHome}
                  alt="Previous beDelivery home screen"
                  label="previous beDelivery home screen"
                  onPreview={openPreview}
                />
                <p className="mt-3 text-sm leading-7 text-black/52">
                  The previous version of the beDelivery home screen had several UX and product issues that could be improved.
                </p>
              </div>

              <div className="pt-2">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">How might we…</h3>
                <div className="mt-4">
                  <BulletList items={issuePrompts} />
                </div>
              </div>
            </Section>

            <Section id="success" title="Measuring the success">
              <Box>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-black/40">
                  Goals and objectives
                </p>
                <BulletList
                  items={[
                    'Increase the conversion rate.',
                    'Increase the rate of users navigating through the booking flow.',
                  ]}
                />
              </Box>
            </Section>

            <Section id="insights" title="Gathering the insights">
              <div className="pt-2">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">Evaluate the current version</h3>
                <p className="mt-3">
                  I conducted a <strong>Usability Heuristic Evaluation</strong> to audit the current
                  homepage, identify its usability issues, and generate directions for improvement.
                </p>
              </div>

              <div className="pt-2">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">Default state</h3>
                <div className="mt-5">
                  <PreviewImage
                    src={assets.heuristicDefault}
                    alt="Default state"
                    label="default state"
                    onPreview={openPreview}
                  />
                </div>
                <p className="mt-3 text-sm leading-7 text-black/52">
                  The default state of the current beDelivery home page.
                </p>
                <div className="mt-5">
                  <HeuristicTable rows={defaultAudit} />
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">Has ongoing orders</h3>
                <div className="mt-5">
                  <PreviewImage
                    src={assets.heuristicOngoing}
                    alt="Ongoing orders state"
                    label="ongoing orders state"
                    onPreview={openPreview}
                  />
                </div>
                <p className="mt-3 text-sm leading-7 text-black/52">
                  The home page view when there are ongoing orders.
                </p>
                <div className="mt-5">
                  <HeuristicTable rows={ongoingAudit} />
                </div>
              </div>

              <div className="pt-8">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">Analyzing the competitors</h3>

                <div className="mt-6 grid gap-6">
                  <CompetitorCard
                    logo={assets.grabLogo}
                    name="Grab Express"
                    description="GrabExpress is one of Southeast Asia’s leading on-demand delivery services with same-day delivery and real-time tracking."
                    firstImage={assets.grabFlow1}
                    secondImage={assets.grabFlow2}
                    strengths={grabStrengths}
                    weaknesses={grabWeaknesses}
                    onPreview={openPreview}
                  />

                  <CompetitorCard
                    logo={assets.lalamoveLogo}
                    name="Lalamove"
                    description="Lalamove offers fast same-day deliveries and supports a wide range of delivery sizes and vehicle types."
                    firstImage={assets.lalamoveFlow1}
                    secondImage={assets.lalamoveFlow2}
                    strengths={lalamoveStrengths}
                    weaknesses={lalamoveWeaknesses}
                    onPreview={openPreview}
                  />

                  <CompetitorCard
                    logo={assets.ahamoveLogo}
                    name="AhaMove"
                    description="AhaMove is a popular on-demand delivery service in Vietnam with real-time tracking and multiple vehicle options."
                    firstImage={assets.ahamoveFlow1}
                    secondImage={assets.ahamoveFlow2}
                    strengths={ahamoveStrengths}
                    weaknesses={ahamoveWeaknesses}
                    onPreview={openPreview}
                  />
                </div>

                <div className="pt-8">
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">Summary</h3>
                  <div className="mt-5">
                    <SummaryMatrix />
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">Opportunity</h3>
                <div className="mt-4">
                  <BulletList items={opportunityItems} />
                </div>
              </div>

              <div className="pt-8">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">Solution structure overview</h3>
                <div className="mt-5">
                  <PreviewImage
                    src={assets.solutionStructure}
                    alt="Solution structure overview"
                    label="solution structure overview"
                    ratio="flow"
                    onPreview={openPreview}
                  />
                </div>
              </div>
            </Section>

            <Section id="options" title="What we came up with">
              <OptionBlock
                title="Option A"
                states={optionAStates}
                assetsMap={assets}
                onPreview={openPreview}
              />

              <OptionBlock
                title="Option B"
                states={optionBStates}
                assetsMap={assets}
                onPreview={openPreview}
              />
            </Section>

            <Section id="testing" title="Testing the versions">
              <p>
                After presenting two options, the team decided to run an A/B test with 20% of users,
                comparing the current version against the two proposed directions.
              </p>

              <div className="pt-2">
                <PreviewImage
                  src={assets.abTestChart}
                  alt="A/B testing chart"
                  label="A/B testing chart"
                  onPreview={openPreview}
                />
              </div>

                <div className="grid gap-4 sm:grid-cols-2 pt-4">
                  {resultStats.map((item, index) => (
                    <ImpactStatCard
                      key={item.label}
                      label={item.label}
                      note={item.note}
                      delay={index * 90}
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

              <div className="pt-2">
                <p>
                  Based on these results, the team decided to roll out <strong>Option A</strong> to
                  100% of users, since it provided more flexibility for future service expansion and
                  created a more dynamic, future-proof home screen than Option B.
                </p>
              </div>

              <div className="pt-2">
                <PreviewImage
                  src={assets.rolloutResult}
                  alt="Final rollout"
                  label="final rollout"
                  onPreview={openPreview}
                />
              </div>
            </Section>

            <Section id="improvements" title="Adding features and improvements">
              <BulletList items={improvementPoints} />

              <div className="pt-2">
                <PreviewImage
                  src={assets.addedFeatures}
                  alt="Added features and improvements"
                  label="added features and improvements"
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

export default CaseStudyDelivery;
