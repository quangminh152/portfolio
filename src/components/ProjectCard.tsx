import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../types';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) observer.unobserve(cardRef.current);
        };
    }, []);

    const containerClasses = `
        block w-full mb-16 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group
        ${project.link ? 'cursor-pointer' : 'cursor-default'} 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
    `;

    // FIX: Define this as a variable (JSX), NOT a function component
    const cardContent = (
        <>
            <div className="w-full aspect-video bg-[#F9F9F9] rounded-2xl overflow-hidden flex items-center justify-center mb-4 relative transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]">
                {project.img ? (
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover block" />
                ) : (
                    <span className="text-[10px] tracking-[0.3em] text-[#DDD] font-bold uppercase">Project Preview</span>
                )}
            </div>

            <div className="project-info">
                <h4 className="text-xl font-medium mb-3 tracking-tight flex items-center justify-between leading-snug text-[#111]">
                    {project.title}
                    {/* Only show arrow animation if it's a link */}
                    {project.link && (
                        <span className="text-xl opacity-0 -translate-x-2.5 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0">
                            ↗
                        </span>
                    )}
                </h4>
                {project.desc && (
                    <p className="text-base text-[#666] max-w-[520px] leading-relaxed">
                        {project.desc}
                    </p>
                )}
            </div>
        </>
    );

    // FIX: Use {cardContent} instead of <CardContent />
    if (project.link) {
    return (
        <div ref={cardRef} className={containerClasses}>
            {/* Added target="_blank" to open in new tab and rel="noopener noreferrer" for security */}
            <Link to={project.link} target="_blank" rel="noopener noreferrer">
                {cardContent}
            </Link>
        </div>
    );
}

    return (
        <div ref={cardRef} className={containerClasses}>
            {cardContent}
        </div>
    );
};

export default ProjectCard;