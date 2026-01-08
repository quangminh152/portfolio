import React from 'react';
import type { Company } from '../types';
import ProjectCard from './ProjectCard';

interface CompanySectionProps {
    company: Company;
}

const CompanySection: React.FC<CompanySectionProps> = ({ company }) => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 items-start w-full border-b border-[#EEE] relative">
            {/* Left Column - Sticky */}
            <div 
                className="relative h-auto lg:h-full"
                style={{ backgroundColor: company.bgColor, color: company.textColor }}
            >
                <div className="lg:sticky lg:top-0 h-auto lg:h-screen flex flex-col justify-center px-6 md:px-12 lg:px-[10vw] py-24 lg:py-0">
                    <div className="max-w-lg">
                        <span className="text-xs uppercase tracking-[0.2em] mb-6 font-bold opacity-80 block">
                            {company.period}
                        </span>
                        <h3 className="text-3xl md:text-4xl lg:text-[2rem] text-inherit font-semibold leading-tight tracking-tight mb-8">
                            {company.role} at {company.name}
                        </h3>
                        <p className="text-lg leading-relaxed opacity-90 mb-6">
                            {company.description}
                        </p>
                        {company.extraInfo && (
                            <p className="text-lg leading-relaxed opacity-90 font-semibold">
                                {company.extraInfo}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Right Column - Scrollable Projects */}
            <div className="bg-white px-6 md:px-12 lg:px-[120px] py-20 lg:py-20 flex flex-col gap-20">
                {company.projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default CompanySection;