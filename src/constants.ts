import type { Company, SocialLink } from './types';
import beclean from './assets/beclean.png';
import banqup from './assets/banqup.png';
import bedelivery from './assets/bedelivery.png';
import bounceMultipleVehicles from './assets/bounce-multiple-vehicles.png';
import expenseManagement from './assets/expense-management.png';

export {
  beclean,
  banqup,
  bedelivery,
  bounceMultipleVehicles,
  expenseManagement,
};

export const COMPANIES: Company[] = [
    {
        id: 'unified',
        name: 'Unifiedpost Group',
        role: 'UX Designer',
        period: '03.25 — Present',
        description: 'Mobile UX Designer crafting smart invoicing and payment solutions for European SMEs.',
        bgColor: '#4238CA',
        textColor: '#FFFFFF',
        projects: [
            {
                title: "🔒 Building a Scalable Invoice & Receipt Experience for B2B Users on Banqup One Mobile",
                desc: "Streamlining multinational B2B invoicing flows for millions of business users across the EU ecosystem.",
                img: banqup,
                link: "https://minhdo-design.notion.site/Building-a-Scalable-Invoice-Receipt-Experience-for-B2B-Users-on-Banqup-One-Mobile-2e07dcb00ef2807ea398ce1a5fcd001f?pvs=74"
            }
        ]
    },
    {
        id: 'beGroup',
        name: 'Be Group',
        role: 'Product Designer',
        period: '12.22 — 03.25',
        description: 'Led the user experience for Ride-hailing tribe, overseeing 5 squads of beTransport, beDelivery, beClean, Customer App, bePartner App.',
        extraInfo: 'Earned beStar 2024 - Employee of the Year.',
        bgColor: '#FFD200',
        textColor: '#111111',
        projects: [
            {
                title: "beClean: Hourly Cleaning Service",
                desc: "Research and design for beClean - a new service of be that provides hourly house cleaning services.",
                img: beclean,
                link: "https://minhdo-design.notion.site/Coming-soon-be-beClean-Hourly-Cleaning-Service-2e07dcb00ef28085a20fdb632174a126"
            },
            {
                title: "Bounce Dispatch to Multiple Vehicles",
                desc: "Allows customers to select other vehicles as additional options after requesting a ride. Aimed to reducing cancellation rate.",
                img: bounceMultipleVehicles,
                link: "https://minhdo-design.notion.site/be-Bounce-Dispatch-to-Multiple-Vehicles-when-finding-drivers-2e07dcb00ef280438c81da736e25fddf?pvs=74"
            },
            {
                title: "Revamp beDelivery Home Screen",
                desc: "Revamp the home screen of beDelivery service, increasing CTR.",
                img: bedelivery,
                link: "https://minhdo-design.notion.site/be-Revamp-beDelivery-Home-Screen-2e07dcb00ef28028a4b2fb5cb7e9ff94?pvs=74"
            }
        ]
    },
    {
        id: 'momo',
        name: 'MoMo',
        role: 'UX/UI Designer',
        period: '04.22 — 12.22',
        description: "UX Designer for Vietnam's largest financial super app. Focused on P2P and Billpay services.",
        bgColor: '#A50064',
        textColor: '#FFFFFF',
        projects: [
            {
                title: "Revamp MoMo's Expense Management Mini-App",
                desc: "Revamping financial health tools to help users track spending habits more intuitively.",
                img: expenseManagement,
                link: "https://minhdo-design.notion.site/MoMo-Revamp-Expense-Management-feature-2e07dcb00ef28049b540ea7e35d0046a?pvs=74"
            }
        ]
    },
    // {
    //     id: 'usum',
    //     name: 'USUM Software',
    //     role: 'UX/UI Designer',
    //     period: '09.21 — 04.22',
    //     description: "Designing complex internal systems and high-conversion e-commerce flows.",
    //     bgColor: '#111111',
    //     textColor: '#FFFFFF',
    //     projects: [
    //         {
    //             title: "Internal Admin Redesign",
    //             desc: "Simplifying complex data management tasks for enterprise operators through system-wide UX patterns."
    //         }
    //     ]
    // }
];

export const SOCIAL_LINKS: SocialLink[] = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/minhdo15/' },
    // { name: 'Twitter', url: '#' },
    { name: 'Resume', url: 'https://drive.google.com/file/d/1M0Tlwq7YOs0olPEkVoLKGfujj29akQY6/view?usp=sharing' }
];

// ... your existing COMPANIES code ...

export const EXPERIENCE = [
    {
        id: 1,
        date: "2025 - Present",
        company: "Unifiedpost Group",
        role: "UX Designer",
        link: "https://www.unifiedpostgroup.com/"
    },
    {
        id: 2,
        date: "2022 - 2025",
        company: "BE Group",
        role: "Product Designer",
        link: "https://be.com.vn/"
    },
    {
        id: 3,
        date: "2022",
        company: "MoMo (M_Service)",
        role: "UX/UI Designer",
        link: "https://www.momo.vn/"
    },
    {
        id: 4,
        date: "2021 - 2022",
        company: "USUM Software",
        role: "Intern - Junior UX/UI Designer",
        link: "https://www.usumsoftware.com/"
    }
];