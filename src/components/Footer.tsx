import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="px-6 md:px-12 lg:px-[10vw] pb-20 bg-white">
            {/* <a 
                href="mailto:hello@minhdo.com" 
                className="text-[10vw] md:text-[8vw] lg:text-[7.5rem] font-normal no-underline text-[#111] inline-block mb-20 md:mb-32 tracking-[-0.05em] leading-[0.9] hover:opacity-30 transition-opacity duration-300"
            >
                hello@minhdo.com
            </a> */}
            
            <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-[#EEE] text-xs uppercase tracking-widest text-[#999] gap-6 md:gap-0">
                <span>© 2026 minhdo</span>
                <div className="flex gap-8">
                    {SOCIAL_LINKS.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.url}
                            target="_blank"
                            className="text-inherit no-underline transition-colors duration-300 hover:text-black"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;