import React, { useEffect, useRef, useState } from 'react';

type ImpactStatCardProps = {
  label: string;
  note: string;
  delay?: number;
  renderValue: (inView: boolean) => React.ReactNode;
};

const ImpactStatCard: React.FC<ImpactStatCardProps> = ({
  label,
  note,
  delay = 0,
  renderValue,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
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

  return (
    <div
      ref={ref}
      className={`stat-card rounded-[28px] border border-black/8 bg-black/[0.015] p-6 md:p-7 ${
        inView ? 'is-visible' : ''
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="stat-value text-[clamp(1.95rem,4.2vw,3rem)] font-semibold leading-none tracking-[-0.06em] text-black"
        style={{ animationDelay: `${delay}ms` }}
      >
        {renderValue(inView)}
      </div>

      <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-black/75">
        {label}
      </p>
      <p className="mt-4 w-full text-sm leading-7 text-black/62">{note}</p>
    </div>
  );
};

export default ImpactStatCard;
