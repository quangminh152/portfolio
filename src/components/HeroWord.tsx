import React from 'react';

type HeroWordVariant = 'clarity' | 'scale' | 'impact';

type HeroWordProps = {
  children: string;
  variant: HeroWordVariant;
};

const HeroWord: React.FC<HeroWordProps> = ({ children, variant }) => {
  const letters = [...children];

  if (variant === 'clarity') {
    return (
      <span className="hero-word hero-word--clarity" aria-label={children}>
        <span className="hero-word__label">{children}</span>
        <span aria-hidden="true" className="hero-word__shine">
          {children}
        </span>
      </span>
    );
  }

  if (variant === 'impact') {
    return (
      <span className="hero-word hero-word--impact" aria-label={children}>
        <span className="hero-word__label">{children}</span>
        <span aria-hidden="true" className="hero-word__impact-line" />
      </span>
    );
  }

  return (
    <span className={`hero-word hero-word--${variant}`} aria-label={children}>
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
