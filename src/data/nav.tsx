import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faCalculator, faChartLine, faHome, faToolbox } from "@fortawesome/free-solid-svg-icons";

interface INavRoute {
    path: string;
    name: string;
    icon: IconDefinition;
    hasChildren?: boolean;
    children?: INavRoute[];
}
const navLinks: INavRoute[] = [
    {
        name: 'Home',
        hasChildren: false,
        path: '/',
        icon: faHome
    },
    {
        name: 'Loans',
        hasChildren: true,
        path: '/loans',
        icon: faChartLine,
        children: [
            {
                name: 'Finance holding',
                hasChildren: false,
                path: '/loans/finance-holding',
                icon: faHome
            },
            {
                name: 'Regulatory',
                hasChildren: false,
                path: '/loans/regulatory',
                icon: faHome
            },
            {
                name: 'Telcos',
                hasChildren: false,
                path: '/loans/telcos',
                icon: faHome
            },
            {
                name: 'Pension',
                hasChildren: false
                ,
                path: '/loans/pension',
                icon: faHome
            },
            {
                name: 'Insurance',
                hasChildren: false,
                path: '/loans/insurance',
                icon: faHome
            },
            {
                name: 'Capital Market',
                hasChildren: false,
                path: '/loans/capital-market',
                icon: faHome
            },
            {
                name: 'Banking',
                hasChildren: false,
                path: '/loans/banking',
                icon: faHome
            }
        ]
    },
    {
        name: 'About',
        hasChildren: false,
        path: '/about',
        icon: faHome
    },
    {
        name: 'Contact',
        hasChildren: false,
        path: '/contact',
        icon: faHome
    },
    {
        name: 'Tools',
        hasChildren: true,
        path: '/tools',
        icon: faToolbox,
        children: [
            {
                name: 'Calculator',
                hasChildren: false,
                path: '/tools/calculator',
                icon: faCalculator
            }
        ]
    },
    {
        name: 'Sectors',
        hasChildren: true,
        path: '/sectors',
        icon: faToolbox,
        children: [
            {
                name: 'Agriculture',
                hasChildren: true,
                icon: faHome,
                path: '/sectors/agriculture',
                children: [
                    {
                        name: 'Crops',
                        hasChildren: false,
                        path: '/sectors/agriculture/crops',
                        icon: faHome
                    },
                    {
                        name: 'Livestock',
                        hasChildren: false,
                        path: '/sectors/agriculture/livestock',
                        icon: faHome
                    },
                    {
                        name: 'Fisheries',
                        hasChildren: false,
                        path: '/sectors/agriculture/fisheries',
                        icon: faHome
                    },
                    {
                        name: 'Forestry',
                        hasChildren: false,
                        path: '/sectors/agriculture/forestry',
                        icon: faHome
                    }
                ]
            },
            {
                name: 'Industry',
                hasChildren: true,
                icon: faHome,
                path: '/sectors/industry',
                children: [
                    {
                        name: 'Mining and quarrying',
                        hasChildren: false,
                        path: '/sectors/industry/mining-and-quarrying',
                        icon: faHome
                    },
                    {
                        name: 'Manufacturing',
                        hasChildren: false,
                        path: '/sectors/industry/manufacturing',
                        icon: faHome
                    },
                    {
                        name: 'Electricity and water supply',
                        hasChildren: false,
                        path: '/sectors/industry/electricity-and-water-supply',
                        icon: faHome
                    },
                    {
                        name: 'Construction',
                        hasChildren: false,
                        path: '/sectors/industry/construction',
                        icon: faHome
                    }
                ]
            },
            {
                name: 'Services',
                hasChildren: true,
                icon: faHome,
                path: '/sectors/services',
                children: [
                    {
                        name: 'Trade',
                        hasChildren: false,
                        path: '/sectors/services/trade',
                        icon: faHome
                    },
                    {
                        name: 'Hospitality',
                        hasChildren: false,
                        path: '/sectors/services/hospitality',
                        icon: faHome
                    },
                    {
                        name: 'Transport and storage',
                        hasChildren: false,
                        path: '/sectors/services/transport-and-storage',
                        icon: faHome
                    },
                    {
                        name: 'Technology',
                        hasChildren: false,
                        path: '/sectors/services/technology',
                        icon: faHome
                    },
                    {
                        name: 'Financial',
                        hasChildren: false,
                        path: '/sectors/services/financial',
                        icon: faHome
                    },
                    {
                        name: 'Insurance',
                        hasChildren: false,
                        path: '/sectors/services/insurance',
                        icon: faHome
                    },
                    {
                        name: 'Public administration',
                        hasChildren: false,
                        path: '/sectors/services/public-administration',
                        icon: faHome
                    },
                    {
                        name: 'Professional support services',
                        hasChildren: false,
                        path: '/sectors/services/professional-support-services',
                        icon: faHome
                    },
                    {
                        name: 'Real estate',
                        hasChildren: false,
                        path: '/sectors/services/real-estate',
                        icon: faHome
                    },
                    {
                        name: 'Education',
                        hasChildren: false,
                        path: '/sectors/services/education',
                        icon: faHome
                    },
                    {
                        name: 'Health',
                        hasChildren: false,
                        path: '/sectors/services/health',
                        icon: faHome
                    }
                ]
            },
        ]
    }
]

export { navLinks };
export default Object.freeze({
    navLinks
});