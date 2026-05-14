import React, { useEffect, useMemo, useRef, useState } from 'react';

type HeroWordVariant = 'clarity' | 'scale' | 'impact';

type HeroWordProps = {
  children: string;
  variant: HeroWordVariant;
};

type HeroWordState = 'idle' | 'entering' | 'active' | 'leaving';

const HeroWord: React.FC<HeroWordProps> = ({ children, variant }) => {
  const [state, setState] = useState<HeroWordState>('idle');
  const enterTimeoutRef = useRef<number | null>(null);
  const leaveTimeoutRef = useRef<number | null>(null);
  const isHoveredRef = useRef(false);
  const letters = [...children];
  const enterDuration = useMemo(() => {
    if (variant === 'clarity') return 420;
    if (variant === 'impact') return 520;
    return 500 + Math.max(letters.length - 1, 0) * 34 + 80;
  }, [letters.length, variant]);
  const leaveDuration = useMemo(() => {
    if (variant === 'clarity') return 380;
    if (variant === 'impact') return 240;
    return 500;
  }, [variant]);

  useEffect(() => {
    return () => {
      if (enterTimeoutRef.current !== null) {
        window.clearTimeout(enterTimeoutRef.current);
      }
      if (leaveTimeoutRef.current !== null) {
        window.clearTimeout(leaveTimeoutRef.current);
      }
    };
  }, []);

  const clearEnterTimeout = () => {
    if (enterTimeoutRef.current !== null) {
      window.clearTimeout(enterTimeoutRef.current);
      enterTimeoutRef.current = null;
    }
  };

  const clearLeaveTimeout = () => {
    if (leaveTimeoutRef.current !== null) {
      window.clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
  };

  const beginLeaving = () => {
    clearEnterTimeout();
    clearLeaveTimeout();
    setState('leaving');
    leaveTimeoutRef.current = window.setTimeout(() => {
      setState('idle');
      leaveTimeoutRef.current = null;
    }, leaveDuration);
  };

  const handleMouseEnter = () => {
    isHoveredRef.current = true;

    if (typeof window === 'undefined') return;

    const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!supportsHover || prefersReducedMotion) return;

    if (state !== 'idle') return;

    clearEnterTimeout();
    clearLeaveTimeout();
    setState('entering');
    enterTimeoutRef.current = window.setTimeout(() => {
      enterTimeoutRef.current = null;
      if (isHoveredRef.current) {
        setState('active');
      } else {
        beginLeaving();
      }
    }, enterDuration);
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;

    if (state === 'active') {
      beginLeaving();
    }
  };

  const visualStateClass =
    state === 'entering' || state === 'active' ? ' is-active-state' : '';
  const rootClassName = `hero-word hero-word--${variant} is-${state}${visualStateClass}`;

  if (variant === 'clarity') {
    return (
      <span
        className={rootClassName}
        aria-label={children}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span aria-hidden="true" className="hero-word__clarity-bg" />
        <span className="hero-word__label hero-word__clarity-text">{children}</span>
      </span>
    );
  }

  if (variant === 'impact') {
    return (
      <span
        className={rootClassName}
        aria-label={children}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className="hero-word__label">{children}</span>
        <span aria-hidden="true" className="hero-word__impact-line" />
      </span>
    );
  }

  return (
    <span
      className={rootClassName}
      aria-label={children}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="hero-word__letters" aria-hidden="true">
        {letters.map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            className="hero-word__letter"
            style={{ ['--char-index' as string]: index } as React.CSSProperties}
          >
            {letter}
          </span>
        ))}
      </span>
    </span>
  );
};

export default HeroWord;
