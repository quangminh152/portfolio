// import React from 'react';
// import { EXPERIENCE } from '../constants';

// const About: React.FC = () => {
//     return (
//         <div className="pt-[180px] pb-[120px] px-6 md:px-12 lg:px-[10vw] min-h-screen w-full animate-fade-in">
//             {/* --- Intro Section --- */}
//             <h1 className="text-[clamp(40px,8vw,48px)] font-medium tracking-tight mb-10 text-[#111]">
//                 About me
//             </h1>

//             <section className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 md:gap-20 items-start">
//                 {/* Left: Text */}
//                 <div className="flex flex-col gap-8 text-xl text-[#333] animate-slide-up delay-200">
//                     <p className="max-w-[600px]">
//                         I'm a Product Designer based in Vietnam with over 4 years of experience crafting digital solutions. My background sits at the intersection of <span className="font-semibold text-[#111]">Fintech</span> and <span className="font-semibold text-[#111]">Ride-Hailing</span> ecosystems.
//                     </p>
//                     <p className="max-w-[600px]">
//                         Currently, I'm designing mobile experiences at <span className="font-semibold text-[#111]">Unifiedpost Group</span>, simplifying complex B2B invoicing for the European market.
//                     </p>
//                     <p className="max-w-[600px]">
//                         Before that, I worked as a Product Designer at <span className="font-semibold text-[#111]">Be Group</span>, where I led design efforts for the 🛵 ride-hailing platform, shaping everyday mobility experiences for millions of users nationwide.
//                     </p>
//                     <p className="max-w-[600px]">
//                         I believe that good design is invisible. It connects business goals with user needs through clarity, not just aesthetics.
//                     </p>

//                     <div className="mt-5">
//                         <a href="https://drive.google.com/file/d/1M0Tlwq7YOs0olPEkVoLKGfujj29akQY6/view?usp=sharing" 
//                             className="underline text-[#111] font-medium hover:opacity-70 hover:text-inherit transition-opacity"
//                             target="_blank"
//                         >
//                             Resume -&gt;
//                         </a>
//                     </div>
//                 </div>

//                 {/* Right: Image */}
//                 {/* Note: Ensure IMG_4467.png is inside your public/assets folder */}
//                 <div className="relative w-full md:w-[80%] aspect-[4/3] md:aspect-[3/4] rounded-xl overflow-hidden bg-[#F0F0F0] order-first md:order-last animate-slide-up delay-300">
//                     <img 
//                         src="/src/assets/IMG_4467.png" 
//                         alt="Portrait of Minh Do" 
//                         className="w-full h-full object-cover block"
//                     />
//                 </div>
//             </section>

//             {/* --- Experience Section --- */}
//             <section className="pt-40">
//                 <h1 className="text-[clamp(40px,8vw,48px)] font-medium tracking-tight mb-10 text-[#111]">
//                     My journey
//                 </h1>
                
//                 <div className="w-full">
//                     {EXPERIENCE.map((exp) => (
//                         <a 
//                             key={exp.id}
//                             href={exp.link}
//                             target="_blank" 
//                             rel="noopener noreferrer"
//                             className="group block no-underline text-inherit"
//                         >
//                             <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_1fr] py-10 px-5 border-b border-[#EEE] transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#F5F5F5] cursor-pointer">
//                                 <span className="text-[#999] text-base mb-2 md:mb-0">{exp.date}</span>
//                                 <span className="font-medium text-xl text-inherit group-hover:text-[#111] transition-colors">{exp.company}</span>
//                                 <span className="text-[#666] text-xl md:text-right">{exp.role}</span>
//                             </div>
//                         </a>
//                     ))}
//                 </div>
//             </section>

//             {/* --- Contact Section --- */}
//             <section className="pt-40 flex flex-col justify-center items-start">
//                 <h1 className="text-[clamp(40px,8vw,48px)] font-medium tracking-tight mb-10 text-[#111]">
//                     Get in touch
//                 </h1>
//                 <p className="text-xl text-[#333] animate-slide-up delay-200">
//                     Drop me an email at{' '}
//                     <a href="mailto:quangminh.do152@gmail.com" className="font-semibold text-[#333] underline hover:text-inherit decoration-1 underline-offset-[6px] hover:opacity-70 transition-opacity">
//                         quangminh.do152@gmail.com
//                     </a>{' '}
//                     or connect with me on{' '}
//                     <a href="https://www.linkedin.com/in/minhdo15/" target="_blank" rel="noreferrer" className="font-semibold text-[#333] underline decoration-1 underline-offset-[6px] hover:opacity-70 hover:text-inherit transition-opacity">
//                         LinkedIn
//                     </a>.
//                 </p>
//             </section>
//         </div>
//     );
// };

// export default About;

import { EXPERIENCE } from '../constants';
import portrait from '../assets/IMG_4467.png';

// FIX 1: Removed "import React" and ": React.FC" to stop the build error
const About = () => {
    return (
        <div className="pt-[180px] pb-[120px] px-6 md:px-12 lg:px-[10vw] min-h-screen w-full animate-fade-in">
            {/* --- Intro Section --- */}
            <h1 className="text-[clamp(40px,8vw,48px)] font-medium tracking-tight mb-10 text-[#111]">
                About me
            </h1>

            <section className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 md:gap-20 items-start">
                {/* Left: Text */}
                <div className="flex flex-col gap-8 text-xl text-[#333] animate-slide-up delay-200">
                    <p className="max-w-[600px]">
                        I'm a Product Designer based in Vietnam with over 4 years of experience crafting digital solutions. My background sits at the intersection of <span className="font-semibold text-[#111]">Fintech</span> and <span className="font-semibold text-[#111]">Ride-Hailing</span> ecosystems.
                    </p>
                    <p className="max-w-[600px]">
                        Currently, I'm designing mobile experiences at <span className="font-semibold text-[#111]">Unifiedpost Group</span>, simplifying complex B2B invoicing for the European market.
                    </p>
                    <p className="max-w-[600px]">
                        Before that, I worked as a Product Designer at <span className="font-semibold text-[#111]">Be Group</span>, where I led design efforts for the 🛵 ride-hailing platform, shaping everyday mobility experiences for millions of users nationwide.
                    </p>
                    <p className="max-w-[600px]">
                        I believe that good design is invisible. It connects business goals with user needs through clarity, not just aesthetics.
                    </p>

                    <div className="mt-5">
                        <a href="https://drive.google.com/file/d/1M0Tlwq7YOs0olPEkVoLKGfujj29akQY6/view?usp=sharing" 
                            className="underline text-[#111] font-medium hover:opacity-70 hover:text-inherit transition-opacity"
                            target="_blank"
                            rel="noreferrer" // Added for security
                        >
                            Resume -&gt;
                        </a>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="relative w-full md:w-[80%] aspect-[4/3] md:aspect-[3/4] rounded-xl overflow-hidden bg-[#F0F0F0] order-first md:order-last animate-slide-up delay-300">
                    <img 
                        src={portrait}
                        alt="Portrait of Minh Do" 
                        className="w-full h-full object-cover block"
                    />
                </div>
            </section>

            {/* --- Experience Section --- */}
            <section className="pt-40">
                <h1 className="text-[clamp(40px,8vw,48px)] font-medium tracking-tight mb-10 text-[#111]">
                    My journey
                </h1>
                
                <div className="w-full">
                    {EXPERIENCE.map((exp) => (
                        <a 
                            key={exp.id}
                            href={exp.link}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group block no-underline text-inherit"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_1fr] py-10 px-5 border-b border-[#EEE] transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#F5F5F5] cursor-pointer">
                                <span className="text-[#999] text-base mb-2 md:mb-0">{exp.date}</span>
                                <span className="font-medium text-xl text-inherit group-hover:text-[#111] transition-colors">{exp.company}</span>
                                <span className="text-[#666] text-xl md:text-right">{exp.role}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* --- Contact Section --- */}
            <section className="pt-40 flex flex-col justify-center items-start">
                <h1 className="text-[clamp(40px,8vw,48px)] font-medium tracking-tight mb-10 text-[#111]">
                    Get in touch
                </h1>
                <p className="text-xl text-[#333] animate-slide-up delay-200">
                    Drop me an email at{' '}
                    <a href="mailto:quangminh.do152@gmail.com" className="font-semibold text-[#333] underline hover:text-inherit decoration-1 underline-offset-[6px] hover:opacity-70 transition-opacity">
                        quangminh.do152@gmail.com
                    </a>{' '}
                    or connect with me on{' '}
                    <a href="https://www.linkedin.com/in/minhdo15/" target="_blank" rel="noreferrer" className="font-semibold text-[#333] underline decoration-1 underline-offset-[6px] hover:opacity-70 hover:text-inherit transition-opacity">
                        LinkedIn
                    </a>.
                </p>
            </section>
        </div>
    );
};

export default About;