import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative px-6 md:px-12 lg:px-[10vw] w-full min-h-[100dvh] flex flex-col justify-center animated-dots-bg animate-subtleDrift overflow-hidden">
            {/* Overlay Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-b from-transparent to-white pointer-events-none z-10" />

            <div className="relative z-20">
                <h1 className="text-[12vw] md:text-[8vw] lg:text-[7.5rem] font-medium leading-[1.0] tracking-[-0.04em] mb-10">
                    Minh Do, 
                    <span className="block mt-2 text-[#a6abb4]">Product Designer.</span>
                </h1>
                
                <h2 className="text-xl  lg:text-[1.75rem] font-normal text-[#6b7280] max-w-6xl leading-[1.4] tracking-tight">
                    4+ years of experience, specialized in User-centered Design, UX Research, and Product Design with a deep expertise in the Ride-Hailing and Fintech domains.
                </h2>
            </div>
        </section>
    );
};

export default Hero;