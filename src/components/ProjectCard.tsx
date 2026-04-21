// import React, { useRef, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import type { Project } from '../types';

// interface ProjectCardProps {
//     project: Project;
// }

// const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
//     const cardRef = useRef<HTMLDivElement>(null);
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsVisible(true);
//                     observer.unobserve(entry.target);
//                 }
//             },
//             { threshold: 0.1 }
//         );

//         if (cardRef.current) {
//             observer.observe(cardRef.current);
//         }

//         return () => {
//             if (cardRef.current) observer.unobserve(cardRef.current);
//         };
//     }, []);

//     const containerClasses = `
//         block w-full mb-16 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group
//         ${project.link ? 'cursor-pointer' : 'cursor-default'} 
//         ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
//     `;

//     // FIX: Define this as a variable (JSX), NOT a function component
//     const cardContent = (
//         <>
//             <div className="w-full aspect-video bg-[#F9F9F9] rounded-2xl overflow-hidden flex items-center justify-center mb-4 relative transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]">
//                 {project.img ? (
//                     <img src={project.img} alt={project.title} className="w-full h-full object-cover block" />
//                 ) : (
//                     <span className="text-[10px] tracking-[0.3em] text-[#DDD] font-bold uppercase">Project Preview</span>
//                 )}
//             </div>

//             <div className="project-info">
//                 <h4 className="text-xl font-medium mb-3 tracking-tight flex items-center justify-between leading-snug text-[#111]">
//                     {project.title}
//                     {/* Only show arrow animation if it's a link */}
//                     {project.link && (
//                         <span className="text-xl opacity-0 -translate-x-2.5 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0">
//                             ↗
//                         </span>
//                     )}
//                 </h4>
//                 {project.desc && (
//                     <p className="text-base text-[#666] max-w-[520px] leading-relaxed">
//                         {project.desc}
//                     </p>
//                 )}
//             </div>
//         </>
//     );

//     // FIX: Use {cardContent} instead of <CardContent />
//     if (project.link) {
//     return (
//         <div ref={cardRef} className={containerClasses}>
//             {/* Added target="_blank" to open in new tab and rel="noopener noreferrer" for security */}
//             <Link to={project.link} target="_blank" rel="noopener noreferrer">
//                 {cardContent}
//             </Link>
//         </div>
//     );
// }

//     return (
//         <div ref={cardRef} className={containerClasses}>
//             {cardContent}
//         </div>
//     );
// };

// export default ProjectCard;

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  accentColor?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const isInternal = Boolean(project.link?.startsWith('/'));

  const containerClasses = `
    block w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group
    ${project.link ? 'cursor-pointer' : 'cursor-default'}
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
  `;

  const imageBlock = (
    <div className="relative mb-5 w-full overflow-hidden rounded-[28px] border-black/8">
      <div
        className="absolute inset-x-0 top-0 z-10 h-px"
        // style={{ backgroundColor: accentColor }}
      />
      <div className={`${project.featured ? 'aspect-[16/6]' : 'aspect-[16/9]'} overflow-hidden`}>
        {project.img ? (
          <img
            src={project.img}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015]"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D8D8D8]">
              Project Preview
            </span>
          </div>
        )}
      </div>
    </div>
  );

  const content = (
    <>
      {imageBlock}

      <div className="project-info">
        {project.meta ? (
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/30">
            {project.meta}
          </p>
        ) : null}

        <h4
          className={`flex items-start justify-between gap-4 font-semibold tracking-[-0.03em] text-[#111] ${
            project.featured
              ? 'text-[clamp(1.7rem,2.6vw,1.45rem)] leading-[1.4]'
              : 'text-[1.45rem] leading-[1.4]'
          }`}
        >
          <span>{project.title}</span>
          {project.link ? (
            <span className="translate-y-0.5 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
              ↗
            </span>
          ) : null}
        </h4>

        {project.desc ? (
          <p className="mt-3 max-w-full text-[18px] leading-8 text-[#666]">
            {project.desc}
          </p>
        ) : null}

        {/* {project.link ? (
          <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-black/65">
            View case study
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </div>
        ) : null} */}
      </div>
    </>
  );

  if (!project.link) {
    return (
      <div ref={cardRef} className={containerClasses}>
        {content}
      </div>
    );
  }

  return (
    <div ref={cardRef} className={containerClasses}>
      {isInternal ? (
        <Link to={project.link}>{content}</Link>
      ) : (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      )}
    </div>
  );
};

export default ProjectCard;