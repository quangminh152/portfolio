import React from 'react';

type ContactSectionProps = {
  className?: string;
  style?: React.CSSProperties;
};

const ContactSection: React.FC<ContactSectionProps> = ({ className = '', style }) => {
  return (
    <section className={className} style={style}>
      <div className="mx-auto w-full max-w-[1720px] px-6 py-24 md:px-12 md:py-32 lg:px-[10vw]">
        <h2 className="max-w-4xl text-[clamp(2.2rem,4.6vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-black">
          Let&apos;s connect.
        </h2>

        <p className="mt-8 max-w-3xl text-[18px] leading-8 text-black/62">
          Drop me an email at{' '}
          <a
            href="mailto:quangminh.do152@gmail.com"
            className="font-semibold underline decoration-black/18 text-black underline-offset-[6px] transition hover:opacity-70"
          >
            quangminh.do152@gmail.com
          </a>{' '}
          or connect with me on{' '}
          <a
            href="https://www.linkedin.com/in/minhdo15/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold underline decoration-black/18 text-black underline-offset-[6px] transition hover:opacity-70"
          >
            LinkedIn
          </a>.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
