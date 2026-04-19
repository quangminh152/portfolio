import React, { useEffect, useMemo, useRef, useState } from 'react';
import banqupCover from '../assets/banqup-cover.png';
import beCleanCover from '../assets/beclean.png';
import bounceCover from '../assets/bounce-multiple-vehicles.png';
import ProjectCard from './ProjectCard';
import type { Project } from '../types';


type TocItem = {
  id: string;
  label: string;
};

type RatioKey = 'cover' | 'wide';

const tocItems: TocItem[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'context', label: 'Context' },
  { id: 'role', label: 'Role & Scope' },
  { id: 'share', label: 'What I can share' },
  { id: 'nda', label: 'Availability' },
];

const tags = ['Revamp', 'Product Design'];
const tools = ['Figma'];
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

const CaseStudyBanqup: React.FC = () => {
  const activeId = useActiveSection(tocItems);
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);

  const description = useMemo(
    () =>
      'Designing a more scalable mobile invoicing and receipt experience for B2B users across Banqup’s multinational EU ecosystem.',
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
            src={banqupCover}
            alt="Banqup cover"
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
                🔒 Building a Scalable Invoice & Receipt Experience for B2B Users on Banqup One Mobile
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-black/68 md:text-lg">
                {description}
              </p>

              <div className="mt-5 rounded-2xl border border-black/6 bg-black/[0.015] p-5">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-black/40">
                  🔒 Confidential project
                </p>
                <p>
                  Due to a <strong>Non-Disclosure Agreement</strong>, the full details of this project are currently under wraps.
                  However, I’d be happy to walk you through the process, challenges, and outcomes during the interview stage.
                </p>
              </div>

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
                <p className="text-sm font-medium text-black/75">Q4/2025</p>
              </div>

              <div>
                <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-black/35">Team size</p>
                <p className="text-sm font-medium text-black/75">
                  1 UX Designer, 1 Product Manager, 2 Product Owners
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-16 grid gap-12 xl:grid-cols-[minmax(0,1fr)_180px] 2xl:gap-16">
          <article className="min-w-0">
            <Section id="overview" eyebrow="01" title="Overview">
              

              <p>
                This project focused on improving how B2B users handle uploading, creating, sending, receiving, and managing invoices and receipts on mobile,
                with an emphasis on scalability, usability, and alignment across a broader European product ecosystem.
              </p>
            </Section>

            <Section id="context" eyebrow="02" title="Context">
              <p>
                Banqup serves European SMEs who need to manage financial documents as part of their daily workflow.
                In this environment, invoice and receipt flows need to work across multiple markets, business needs,
                and operational contexts.
              </p>

              <BulletList
                items={[
                  'Support complex B2B document workflows on mobile.',
                  'Design for scale across multiple countries and user needs.',
                  'Create a clearer and more reliable experience for business users.',
                ]}
              />
            </Section>

            <Section id="role" eyebrow="03" title="Role & Scope">
              <p>
                I worked on the product design side of the mobile experience, helping shape how users interact
                with core invoice and receipt flows in a way that could scale across the Banqup ecosystem.
              </p>

              <BulletList
                items={[
                  'UX and product design for mobile invoice and receipt flows.',
                  'Collaboration with product stakeholders on structure, prioritization, and UX direction.',
                  'Design thinking around scalability, business complexity, and consistency.',
                ]}
              />
            </Section>

            <Section id="share" eyebrow="04" title="What I can share">
              <p>
                While I cannot publish the detailed screens or internal flow logic publicly, I can discuss
                the project at a high level and walk through my approach during an interview.
              </p>

              <BulletList
                items={[
                  'How I approached complex B2B workflows on mobile.',
                  'How I balanced user needs with system and business constraints.',
                  'How the design was structured to support scale and future expansion.',
                  'How multinational, cross-functional collaboration shaped the final direction.',
                ]}
              />
            </Section>

            <Section id="nda" eyebrow="05" title="Availability">
              <div className="mt-5 rounded-2xl border border-black/6 bg-black/[0.015] p-5">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-black/40">
                  🔒 Confidential project
                </p>
                <p>
                  Due to a <strong>Non-Disclosure Agreement</strong>, the full details of this project are currently under wraps.
                  However, I’d be happy to walk you through the process, challenges, and outcomes during the interview stage.
                </p>
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
            Case studies from Be Group
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

export default CaseStudyBanqup;