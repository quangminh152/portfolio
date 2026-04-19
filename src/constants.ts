// import type { Company, SocialLink } from './types';
// import beclean from './assets/beclean.png';
// import banqup from './assets/banqup.png';
// import bedelivery from './assets/bedelivery.png';
// import bounceMultipleVehicles from './assets/bounce-multiple-vehicles.png';
// import expenseManagement from './assets/expense-management.png';

// export {
//   beclean,
//   banqup,
//   bedelivery,
//   bounceMultipleVehicles,
//   expenseManagement,
// };

// export const COMPANIES: Company[] = [
//     {
//         id: 'unified',
//         name: 'Banqup Group',
//         role: 'UX Designer',
//         period: '03.25 — Present',
//         description: 'Mobile UX Designer crafting smart invoicing and payment solutions for European SMEs.',
//         bgColor: '#4238CA',
//         textColor: '#FFFFFF',
//         projects: [
//             {
//                 title: "🔒 Building a Scalable Invoice & Receipt Experience for B2B Users on Banqup One Mobile",
//                 desc: "Streamlining multinational B2B invoicing flows for millions of business users across the EU ecosystem.",
//                 img: banqup,
//                 link: "/work/banqup"
//                 // link: "https://minhdo-design.notion.site/Coming-soon-be-beClean-Hourly-Cleaning-Service-1-2e07dcb00ef2807ea398ce1a5fcd001f?pvs=74"
//             }
//         ]
//     },
//     {
//         id: 'beGroup',
//         name: 'Be Group',
//         role: 'Product Designer',
//         period: '12.22 — 03.25',
//         description: 'Led the user experience for Ride-hailing tribe, overseeing 5 squads of beTransport, beDelivery, beClean, Customer App, bePartner App.',
//         extraInfo: 'Earned beStar 2024 - Employee of the Year.',
//         bgColor: '#FFD200',
//         textColor: '#111111',
//         projects: [
//             {
//   title: "beClean: Hourly Cleaning Service",
//   desc: "Designed the MVP booking experience for beClean, a new on-demand home cleaning service from be.",
//   img: beclean,
//   link: "/work/beclean"
// },
//             {
//                 title: "Bounce Dispatch to Multiple Vehicles",
//                 desc: "Allows customers to select other vehicles as additional options after requesting a ride. Aimed to reducing cancellation rate.",
//                 img: bounceMultipleVehicles,
//                 // link: "https://minhdo-design.notion.site/be-Bounce-Dispatch-to-Multiple-Vehicles-when-finding-drivers-2e07dcb00ef280438c81da736e25fddf?pvs=74"
//                 link: "/work/bounce-dispatch"
//             },
//             {
//                 title: "Revamp beDelivery Home Screen",
//                 desc: "Revamp the home screen of beDelivery service, increasing CTR.",
//                 img: bedelivery,
//                 // link: "https://minhdo-design.notion.site/be-Revamp-beDelivery-Home-Screen-2e07dcb00ef28028a4b2fb5cb7e9ff94?pvs=74"
//                 link: "/work/home-delivery"
//             }
//         ]
//     },
//     {
//         id: 'momo',
//         name: 'MoMo',
//         role: 'UX/UI Designer',
//         period: '04.22 — 12.22',
//         description: "UX Designer for Vietnam's largest financial super app. Focused on P2P and Billpay services.",
//         bgColor: '#A50064',
//         textColor: '#FFFFFF',
//         projects: [
//             {
//                 title: "Revamp MoMo's Expense Management Mini-App",
//                 desc: "Revamping financial health tools to help users track spending habits more intuitively.",
//                 img: expenseManagement,
//                 link: "/work/expense"
//                 // link: "https://minhdo-design.notion.site/MoMo-Revamp-Expense-Management-feature-2e07dcb00ef28049b540ea7e35d0046a?pvs=74"
//             }
//         ]
//     },
//     // {
//     //     id: 'usum',
//     //     name: 'USUM Software',
//     //     role: 'UX/UI Designer',
//     //     period: '09.21 — 04.22',
//     //     description: "Designing complex internal systems and high-conversion e-commerce flows.",
//     //     bgColor: '#111111',
//     //     textColor: '#FFFFFF',
//     //     projects: [
//     //         {
//     //             title: "Internal Admin Redesign",
//     //             desc: "Simplifying complex data management tasks for enterprise operators through system-wide UX patterns."
//     //         }
//     //     ]
//     // }
// ];

// export const SOCIAL_LINKS: SocialLink[] = [
//     { name: 'LinkedIn', url: 'https://www.linkedin.com/in/minhdo15/' },
//     // { name: 'Twitter', url: '#' },
//     { name: 'Resume', url: 'https://drive.google.com/file/d/1M0Tlwq7YOs0olPEkVoLKGfujj29akQY6/view?usp=sharing' }
// ];

// // ... your existing COMPANIES code ...

// export const EXPERIENCE = [
//     {
//         id: 1,
//         date: "2025 - Present",
//         company: "Banqup Group",
//         role: "UX Designer",
//         link: "https://www.banqup.com/"
//     },
//     {
//         id: 2,
//         date: "2022 - 2025",
//         company: "Be Group",
//         role: "Product Designer",
//         link: "https://be.com.vn/"
//     },
//     {
//         id: 3,
//         date: "2022",
//         company: "MoMo (M_Service)",
//         role: "UX/UI Designer",
//         link: "https://www.momo.vn/"
//     },
//     {
//         id: 4,
//         date: "2021 - 2022",
//         company: "USUM Software",
//         role: "Intern - Junior UX/UI Designer",
//         link: "https://www.usumsoftware.com/"
//     }
// ];

import type { ExperienceItem, Project, SocialLink } from './types';

import beCleanCover from './assets/beclean.png';
import bounceCover from './assets/bounce-multiple-vehicles.png';
import expenseCover from './assets/expense-management.png';
import banqupCover from './assets/banqup.png';
import deliveryCover from './assets/bedelivery.png';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/minhdo15/',
  },
  {
    name: 'Resume',
    url: 'https://drive.google.com/file/d/1M0Tlwq7YOs0olPEkVoLKGfujj29akQY6/view?usp=sharing',
  },
];

export const SELECTED_WORK: Project[] = [
  {
    title: 'beClean - Hourly Cleaning Service',
    desc: 'Led end-to-end research and product design for beClean, a new on-demand home cleaning service from be, shaping the MVP booking experience from early discovery to launch.',
    img: beCleanCover,
    link: '/work/beclean',
    // meta: 'New Product · UX Research · Product Design',
    featured: true,
    accentColor: '#2D63D7',
  },
  {
    title: 'Bounce Dispatch to Multiple Vehicles',
    desc: 'Allows customers to select other vehicles as additional options after requesting a ride, helping reduce cancellation during driver search.',
    img: bounceCover,
    link: '/work/bounce-dispatch',
    // meta: 'Growth · Mobility · Product Design',
    accentColor: '#2D63D7',
  },
  {
    title: 'Revamp beDelivery Home Screen',
    desc: 'A redesign focused on clarifying key actions, improving service discoverability, and increasing more users into the booking flow.',
    img: deliveryCover,
    link: '/work/home-delivery',
    // meta: 'Growth · Mobility · Product Design',
    accentColor: '#2D63D7',
  },
  {
    title: '🔒 Building a Scalable Invoice & Receipt Experience for B2B Users on Banqup One Mobile',
    desc: 'Designing a more scalable mobile invoicing and receipt experience for B2B users across Banqup’s multinational EU ecosystem.',
    img: banqupCover,
    link: '/work/banqup',
    // meta: 'Revamp · UX Research · UX/UI Design',
    accentColor: '#C10078',
  },
  {
    title: 'Revamp MoMo Expense Management',
    desc: 'Redesigned the expense tracking experience to improve clarity, reduce friction, and support stronger spending habits.',
    img: expenseCover,
    link: '/work/expense',
    // meta: 'Revamp · UX Research · UX/UI Design',
    accentColor: '#C10078',
  },
];

export const PRIVATE_WORK = {
  period: '03.25 — Present',
  company: 'Banqup Group',
  role: 'UX Designer',
  title: 'Building a Scalable Invoice & Receipt Experience for B2B Users on Banqup One Mobile',
  desc: 'Designing scalable invoice and receipt workflows for European SMEs across Banqup’s B2B ecosystem.',
  img: banqupCover,
  link: '/work/banqup',
  meta: 'Private Work · B2B Mobile · Revamp',
  accentColor: '#4B3CCF',
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: '03.25 — Present',
    company: 'Banqup Group',
    role: 'UX Designer',
    description:
      'Designing smart invoicing and payment workflows for European SMEs, with a focus on scalable B2B mobile experiences.',
    accentColor: '#4B3CCF',
  },
  {
    period: '12.22 — 03.25',
    company: 'Be Group',
    role: 'Product Designer',
    description:
      'Led design across ride-hailing, delivery, and new service initiatives, including marketplace, dispatch, and growth-related user flows.',
    accentColor: '#F5CB00',
  },
  {
    period: '04.22 — 12.22',
    company: 'MoMo',
    role: 'UX/UI Designer',
    description:
      'Designed financial service experiences for one of Vietnam’s largest super apps, with a focus on P2P and bill payment flows.',
    accentColor: '#C10078',
  },
];