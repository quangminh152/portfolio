// export interface Project {
//     title: string;
//     desc?: string;
//     img?: string;
//     link?: string;
// }

export interface Company {
    id: string;
    name: string;
    role: string;
    period: string;
    description: string;
    extraInfo?: string;
    bgColor: string;
    textColor: string;
    projects: Project[];
}

// export interface SocialLink {
//     name: string;
//     url: string;
// }
export interface Project {
  title: string;
  desc?: string;
  img?: string;
  link?: string;
  meta?: string;
  featured?: boolean;
  accentColor?: string;
}

export interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  description: string;
  accentColor?: string;
}

export interface SocialLink {
  name: string;
  url: string;
}