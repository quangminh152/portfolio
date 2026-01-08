export default function About() {
  return (
    <main className="px-[10vw] pt-[180px] pb-[120px] text-[#111]">
      {/* TITLE */}
      <h1 className="mb-10 text-[clamp(40px,8vw,48px)] font-medium tracking-[-0.04em]">
        About me
      </h1>

      {/* ABOUT GRID */}
      <section className="grid grid-cols-[1.2fr_1fr] gap-20 max-[900px]:grid-cols-1 max-[900px]:gap-10">
        {/* TEXT */}
        <div className="flex flex-col gap-8 text-[20px] text-[#333] max-w-[600px]">
          <p>
            I'm a Product Designer based in Vietnam with over 4 years of experience crafting digital
            solutions. My background sits at the intersection of{' '}
            <span className="font-semibold text-[#111]">Fintech</span> and{' '}
            <span className="font-semibold text-[#111]">Ride-Hailing</span>.
          </p>

          <p>
            Currently, I'm designing mobile experiences at{' '}
            <span className="font-semibold text-[#111]">Unifiedpost Group</span>, simplifying complex
            B2B invoicing for the European market.
          </p>

          <p>
            Before that, I worked at <span className="font-semibold text-[#111]">Be Group</span>, shaping
            everyday mobility experiences for millions of users.
          </p>

          <p>
            I believe good design is invisible — it connects business goals with user needs through
            clarity.
          </p>

          <a
            href="mailto:hello@minhdo.com"
            className="w-fit font-medium underline underline-offset-4 text-[#111] hover:opacity-70"
          >
            Resume →
          </a>
        </div>

        {/* IMAGE */}
        <div className="relative w-[80%] aspect-[3/4] overflow-hidden rounded-xl bg-gray-200 max-[900px]:order-first max-[900px]:w-full max-[900px]:aspect-[4/3]">
          <img
            src="/assets/IMG_4467.png"
            alt="Portrait of Minh Do"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="pt-[160px]">
        <h1 className="mb-16 text-[clamp(40px,8vw,48px)] font-medium tracking-[-0.04em]">
          My journey
        </h1>

        {[
          ['2025 - Present', 'Unifiedpost Group', 'Mobile UX Designer', 'https://www.unifiedpostgroup.com/'],
          ['2022 - 2025', 'Be Group', 'Product Designer', 'https://be.com.vn/'],
        ].map(([date, company, role, link]) => (
          <a
            key={company}
            href={link}
            target="_blank"
            className="group block border-b border-[#eee] px-5 py-10 transition-colors hover:bg-[#f5f5f5] text-inherit no-underline"
          >
            <div className="grid grid-cols-[200px_1fr_1fr] items-center">
              <span className="text-[#999]">{date}</span>
              <span className="text-[20px] font-medium">{company}</span>
              <span className="text-right text-[20px] text-[#666]">{role}</span>
            </div>
          </a>
        ))}
      </section>

      {/* CONTACT */}
      <section className="pt-[160px]">
        <h1 className="mb-10 text-[clamp(40px,8vw,48px)] font-medium tracking-[-0.04em]">
          Get in touch
        </h1>

        <p className="flex flex-wrap gap-1 text-[20px] text-[#333]">
          Drop me an email at{' '}
          <a
            href="mailto:quangminh.do152@gmail.com"
            className="font-semibold underline underline-offset-4 hover:opacity-70"
          >
            quangminh.do152@gmail.com
          </a>{' '}
          or connect on{' '}
          <a
            href="https://www.linkedin.com/in/minhdo15/"
            target="_blank"
            className="font-semibold underline underline-offset-4 hover:opacity-70"
          >
            LinkedIn
          </a>
          .
        </p>
      </section>
    </main>
  );
}
