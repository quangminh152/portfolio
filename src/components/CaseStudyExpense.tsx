import React, { useEffect, useMemo, useRef, useState } from 'react';
import expenseCover from '../assets/expense-cover.png';
import expenseOld from '../assets/expense-old.png';
import expenseChurn1 from '../assets/expense-churn1.png';
import expenseChurnStep1 from '../assets/expense-churn1-step1.png';
import expenseChurnStep2 from '../assets/expense-churn1-step2.png';
import expenseChurnStep3 from '../assets/expense-churn1-step3.png';
import expenseChurnStep4 from '../assets/expense-churn1-step4.png';
import expenseChurnStep5 from '../assets/expense-churn1-step5.png';
import expenseUserEvaluation from '../assets/expense-user-evaluation.png';
import expenseFlow from '../assets/expense-flow.png';
import expenseHome from '../assets/expense-home.png';
import expenseSpendingOverview from '../assets/expense-spending-overview.png';
import expenseListCategory from '../assets/expense-list-category.png';
import expenseInput from '../assets/expense-input.png';
import beCleanCover from '../assets/beclean.png';
import bounceCover from '../assets/bounce-multiple-vehicles.png';
import ProjectCard from './ProjectCard';
import type { Project } from '../types';

type TocItem = {
  id: string;
  label: string;
};

type RatioKey = 'cover' | 'wide' | 'flow';

type AssetMap = {
  cover?: string;
  oldVersion?: string;
  churnHome?: string;
  churnStep1?: string;
  churnStep2?: string;
  churnStep3?: string;
  churnStep4?: string;
  churnStep5?: string;
  userEvaluation?: string;
  fullFlow?: string;
  homeDashboard?: string;
  spendingOverview?: string;
  expenseList?: string;
  manualInput?: string;
};

const assets: AssetMap = {
  cover: expenseCover,
  oldVersion: expenseOld,
  churnHome: expenseChurn1,
  churnStep1: expenseChurnStep1,
  churnStep2: expenseChurnStep2,
  churnStep3: expenseChurnStep3,
  churnStep4: expenseChurnStep4,
  churnStep5: expenseChurnStep5,
  userEvaluation: expenseUserEvaluation,
  fullFlow: expenseFlow,
  homeDashboard: expenseHome,
  spendingOverview: expenseSpendingOverview,
  expenseList: expenseListCategory,
  manualInput: expenseInput,
};

const tocItems: TocItem[] = [
  { id: 'background', label: 'Background' },
  { id: 'problem', label: 'Problem Statement' },
  { id: 'insights', label: 'Gathering insights' },
  { id: 'solution', label: 'Solution' },
];

const tags = ['Revamp', 'UX Research', 'UX/UI Design'];
const tools = ['Sketch'];
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
  flow: 'aspect-[24/5]',
};

const uxProblems = [
  'MoMo’s expense management feature does not fully support users across the full journey from planning and recording to classifying and reviewing expenses.',
  'The UI/UX is especially weak in data entry and analytics reporting, which are among the most frequently used parts of the product.',
  'Users do not clearly perceive the practical value of the feature, which reduces both trial and long-term engagement.',
];

const goalItems = [
  'Provide more accurate spending insights at the end of each day, week, and month.',
  'Raise awareness of the value of effective expense management for overall financial well-being.',
  'Enable automatic transaction mapping from MoMo to reduce manual input friction.',
  'Educate users on spending categorization, especially the difference between necessary and discretionary expenses.',
  'Encourage stronger spending habits through more structured categorization and review.',
];

const churnHomeProblems = [
  {
    title: 'Difficult to Understand',
    items: [
      'Balance and source-of-funds information feels confusing and overlaps with the MoMo wallet.',
      'Users do not understand which transactions are synced automatically and which still require manual input.',
      'Transaction history is unclear, and charts lack specific figures.',
    ],
  },
  {
    title: 'Difficult to Use',
    items: [
      'There is no onboarding or guidance when users first enter the feature.',
      'Categorizing transactions requires too many actions.',
    ],
  },
  {
    title: 'Does Not Meet Needs',
    items: [
      'Users cannot view reports by quarter or year.',
      'The feature lacks support for the planning stage of expense management.',
      'Users cannot personalize categories, reminders, and other behaviors to match their own financial needs.',
    ],
  },
];

const manualInputSteps = [
  { title: '1. Select to input', assetKey: 'churnStep1' as const },
  { title: '2. Input amount', assetKey: 'churnStep2' as const },
  { title: '3. Categorize', assetKey: 'churnStep3' as const },
  { title: '4. Select source of fund', assetKey: 'churnStep4' as const },
  { title: '5. Complete', assetKey: 'churnStep5' as const },
];

const userSegments = [
  {
    title: 'Independent Financial Individuals',
    demography: [
      'Male & Female',
      'Millennials and Gen Z (22–29)',
      'Single',
      'Basic salary / income',
      'Occupations such as real estate, stock trading, design',
    ],
    background: [
      'Knowledgeable and involved in financial activities',
      'Multiple income sources',
    ],
    behavior: [
      'Tracks income and expenses',
      'Saves / accumulates wealth',
      'Borrows money',
      'Plans high-value purchases',
      'Has saving and investment plans',
    ],
    expenseManagement: [
      'Trigger: manages multiple sources of income and expenses',
      'Trigger: builds investment and purchase plans',
      'Barrier: complexity from tracking multiple sources',
      'Barrier: high demand for advanced financial management',
    ],
  },
  {
    title: 'Family Financial Decision Makers',
    demography: [
      'Male & Female',
      'Born in the 90s (30+)',
      'Married with children',
      'Basic salary / income',
      'Office employees',
    ],
    background: [
      'Less knowledgeable about financial activities',
      'Many consumer expenses',
    ],
    behavior: [
      'Tracks income and expenses',
      'Saves / accumulates wealth',
      'Borrows money',
      'Plans high-value purchases',
      'Has saving plans',
    ],
    expenseManagement: [
      'Trigger: plans purchases and saves for children’s future',
      'Barrier: lower financial knowledge',
      'Barrier: lower involvement in financial activities makes advanced management feel unnecessary',
    ],
  },
  {
    title: 'Financially Dependent Individuals',
    demography: [
      'Male & Female',
      'Gen Z (under 22)',
      'Single',
      'Basic salary / income',
      'Students',
    ],
    background: [
      'Little knowledge about financial activities',
    ],
    behavior: [
      'Tracks income and expenses',
    ],
    expenseManagement: [
      'Trigger: wants to track and control spending',
      'Barrier: recording feels too frequent and cumbersome',
    ],
  },
];

const userWants = [
  'Basic needs center around automatic transaction syncing and personalization.',
  'The most promising segment is financially independent users with stronger expense management needs.',
  'This group expects more advanced capabilities, such as handling multiple sources of income and expenses or supporting broader planning behavior.',
];

const financeStages = [
  'Evaluate',
  'Plan',
  'Record & Classify',
  'Review',
  'Revise',
];

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

const Section = ({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="scroll-mt-28 border-t border-black/6 py-14 md:py-20">
    {eyebrow ? (
      <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-black/35">
        {eyebrow}
      </p>
    ) : null}

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
      <div className="relative flex h-full items-center justify-center">
        <div className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-black/45">
          Replace with {label}
        </div>
      </div>
    </div>
  );
};

const SegmentCard = ({
  title,
  demography,
  background,
  behavior,
  expenseManagement,
}: {
  title: string;
  demography: string[];
  background: string[];
  behavior: string[];
  expenseManagement: string[];
}) => (
  <div className="rounded-[28px] border border-black/8 bg-white p-6 md:p-8">
    <h3 className="text-xl font-semibold tracking-[-0.02em] text-black">{title}</h3>

    <div className="mt-6 space-y-5">
      <div>
        <p className="mb-2 text-sm font-semibold text-black">Demography</p>
        <BulletList items={demography} />
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold text-black">Financial Background</p>
        <BulletList items={background} />
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold text-black">Financial Behavior</p>
        <BulletList items={behavior} />
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold text-black">Expense Management</p>
        <BulletList items={expenseManagement} />
      </div>
    </div>
  </div>
);

const CaseStudyExpense: React.FC = () => {
  const activeId = useActiveSection(tocItems);
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);

  const description = useMemo(
    () =>
      'A redesign of MoMo’s Expense Management experience focused on simplifying everyday usage, improving reporting clarity, and helping users build stronger spending awareness and habits.',
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
            src={assets.cover}
            alt="MoMo Expense Management cover"
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
                MoMo - Revamp Expense Management feature
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
                <p className="text-sm font-medium text-black/75">Q3/2022</p>
              </div>

              <div>
                <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-black/35">Team size</p>
                <p className="text-sm font-medium text-black/75">
                  2 UX/UI Designers, 1 Product Owner, 1 UX Researcher
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-16 grid gap-12 xl:grid-cols-[minmax(0,1fr)_180px] 2xl:gap-16">
          <article className="min-w-0">
            <Section id="background" eyebrow="01" title="Background">
              <p>
                The Expense Management feature on MoMo had already been launched and attracted a meaningful
                number of users, but it also faced several core product challenges.
              </p>

              <BulletList
                items={[
                  'High user drop-off rate',
                  'Low retention rate',
                  'Decrease in new user acquisition',
                ]}
              />

              <p>
                To address these issues, the team initiated a broader UX/UI revamp supported by deeper user research.
              </p>

              <div className="pt-2">
                <PreviewImage
                  src={assets.oldVersion}
                  alt="Old version of Expense Management on MoMo"
                  label="old version of Expense Management on MoMo"
                  onPreview={openPreview}
                />
                <p className="mt-3 text-sm leading-7 text-black/52">
                  Old version of Expense Management mini-app on MoMo.
                </p>
              </div>
            </Section>

            <Section id="problem" eyebrow="02" title="Problem Statement">
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">UX Problems</h3>
                <div className="mt-4">
                  <BulletList items={uxProblems} />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">Goals and Objectives</h3>
                <div className="mt-4">
                  <BulletList items={goalItems} />
                </div>
              </div>

              <div className="pt-2">
  <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">Churn Reason 1</h3>
  <p className="mt-3">
    The biggest drop-off drivers were mostly UI/UX-related: low clarity, hard-to-use interactions,
    and weak alignment with users’ actual expense management needs.
  </p>

  <div className="mt-6 grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)] xl:items-start">
    <div>
      {/* <p className="mb-4 text-base font-semibold text-black">Home page</p> */}
      <PreviewImage
        src={assets.churnHome}
        alt="Home page issues"
        label="home page issues"
        onPreview={openPreview}
      />
    </div>

    <div className="overflow-x-auto rounded-[24px] border border-black/8 bg-white">
      <table className="min-w-[720px] w-full border-collapse text-left">
        <thead>
          <tr className="bg-black/[0.03]">
            <th className="w-[220px] px-5 py-4 text-sm font-semibold text-black">Churn reason</th>
            <th className="px-5 py-4 text-sm font-semibold text-black">Detail</th>
          </tr>
        </thead>
        <tbody>
          {churnHomeProblems.map((item) => (
            <tr key={item.title} className="border-t border-black/6 align-top">
              <td className="px-5 py-4 text-sm font-semibold text-black">{item.title}</td>
              <td className="px-5 py-4 text-sm leading-7 text-black/68">
                <div className="space-y-3">
                  {item.items.map((detail) => (
                    <div key={detail} className="flex gap-3">
                      <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-black/30" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

              <div className="pt-6">
  <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">Churn Reason 2</h3>
  <p className="mt-3">
    Users were required to go through five separate steps to input and categorize expenses.
    This made the flow feel cumbersome and discouraged repeated usage.
  </p>

  <div className="mt-6 overflow-x-auto">
    <div className="flex min-w-max gap-6">
      {manualInputSteps.map((step) => (
        <div key={step.title} className="w-[220px] shrink-0">
          <p className="mb-4 text-base font-semibold leading-7 text-black">{step.title}</p>
          <PreviewImage
            src={assets[step.assetKey]}
            alt={step.title}
            label={step.title}
            onPreview={openPreview}
          />
        </div>
      ))}
    </div>
  </div>
</div>
            </Section>

            <Section id="insights" eyebrow="03" title="Gathering insights">
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">Users’ Segmentation</h3>
                <p className="mt-3">
                  The team segmented users based on three financial situations to understand their
                  motivations, barriers, and potential needs more clearly.
                </p>

                <div className="mt-6 grid gap-6 xl:grid-cols-3">
                  {userSegments.map((segment) => (
                    <SegmentCard key={segment.title} {...segment} />
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">Users’ Wants</h3>
                <div className="mt-4">
                  <BulletList items={userWants} />
                </div>

                <div className="mt-6 rounded-[28px] border border-black/8 bg-black/[0.015] p-6">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-black/40">
                    Expense management stages
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {financeStages.map((stage) => (
                      <Chip key={stage}>{stage}</Chip>
                    ))}
                  </div>

                  <p className="mt-5 text-sm leading-7 text-black/62">
                    Most users currently only show basic needs because their financial knowledge is still limited,
                    and their product usage is strongly influenced by how much financial understanding they have built over time.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">User Evaluation</h3>
                <div className="mt-5">
                  <PreviewImage
                    src={assets.userEvaluation}
                    alt="User evaluation"
                    label="user evaluation"
                    onPreview={openPreview}
                  />
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">The market and competitors</h3>
                <BulletList
                  items={[
                    'Standalone expense management apps try to create new demand and often monetize directly from users.',
                    'Some products focus on partnerships, supplying financial data to support broader business activities.',
                    'Integrated expense features inside larger apps usually aim to improve retention and support cross-selling of financial services.',
                    'As a result, most integrated products focus on basic features that satisfy common user needs.',
                  ]}
                />
              </div>
            </Section>

            <Section id="solution" eyebrow="04" title="Solution">
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">Full flow</h3>
                <div className="mt-5">
                  <PreviewImage
                    src={assets.fullFlow}
                    alt="Full flow"
                    label="full flow"
                    ratio="flow"
                    onPreview={openPreview}
                  />
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">Screen Details</h3>

                <div className="mt-6 space-y-10">
                  <div>
                    <p className="mb-4 text-base font-semibold text-black">Home dashboard</p>
                    <PreviewImage
                      src={assets.homeDashboard}
                      alt="Home dashboard"
                      label="home dashboard"
                      onPreview={openPreview}
                    />
                    <div className="mt-4">
                      <BulletList
                        items={[
                          'Simplified to focus on spending statistics.',
                          'Concentrates on spending from MoMo Wallet and Tui Than Tai.',
                          'Highlights total spending for the current month and compares it with the previous month.',
                          'Surfaces the highest and lowest spending categories for the month.',
                        ]}
                      />
                    </div>
                  </div>

                  <div>
                    <p className="mb-4 text-base font-semibold text-black">Spending Overview</p>
                    <PreviewImage
                      src={assets.spendingOverview}
                      alt="Spending Overview"
                      label="spending overview"
                      onPreview={openPreview}
                    />
                    <div className="mt-4">
                      <BulletList
                        items={[
                          'Includes spending statistics with month, week, and day filters.',
                          'Provides an entry point to the Spending List section.',
                          'Shows recent transactions grouped by date.',
                        ]}
                      />
                    </div>
                  </div>

                  <div>
                    <p className="mb-4 text-base font-semibold text-black">Expense List Categories</p>
                    <PreviewImage
                      src={assets.expenseList}
                      alt="Expense List Categories"
                      label="expense list categories"
                      onPreview={openPreview}
                    />
                    <div className="mt-4">
                      <BulletList
                        items={[
                          'Shows total spending by category for the month.',
                          'Adds insights on increase or decrease compared with the previous month.',
                          'Keeps manual input available, but shifts focus toward MoMo transaction syncing.',
                          'Allows users to drill down into category details by week or month.',
                        ]}
                      />
                    </div>
                  </div>

                  <div>
                    <p className="mb-4 text-base font-semibold text-black">Input Expense Manually</p>
                    <PreviewImage
                      src={assets.manualInput}
                      alt="Input Expense Manually"
                      label="input expense manually"
                      onPreview={openPreview}
                    />
                    <div className="mt-4">
                      <BulletList
                        items={[
                          'Lets users enter expenses quickly without overwhelming them.',
                          'Reduces unnecessary complexity compared with the previous multi-step flow.',
                        ]}
                      />
                    </div>
                  </div>
                </div>
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
            More case studies from Be Group
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

export default CaseStudyExpense;