export interface Project {
    title: string
    description: string
    tech: string[]
    image?: string
    github?: string
    demo?: string
    featured?: boolean
    category: string
    slug: string
    views?: number
}

export const projects: Project[] = [
    // {
    //     title: "Ask Me",
    //     slug: 'ask-me',
    //     description:
    //         'A web-based platform that allows users to ask questions and get answers from a community of experts.',
    //     tech: ['React', 'TypeScript', 'Tailwind CSS', 'Shadcn'],
    //     image: '/projects/project_1.webp',
    //     github: 'https://github.com/mpsalunggg/ask-me',
    //     demo: 'https://askme-neon.vercel.app/',
    //     category: 'Frontend',
    // },
    {
        title: 'Hammercode Web',
        slug: 'hammercode-web',
        description:
            'A community-driven platform in development to help youth manage and enjoy their learning through features like events, educational blogs, and upcoming course sales.',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Tanstack Query', 'React Hook Form', 'Zod'],
        image: '/projects/project_1.webp',
        github: 'https://github.com/hammercode-dev/hammercode-web',
        demo: 'https://www.hammercode.org/',
        category: 'Frontend',
    },
    {
        title: 'Edu Quiz',
        slug: 'edu-quiz',
        description:
            'A dynamic quiz app using the Fisher–Yates Shuffle algorithm and Redux for efficient state management. Supports student and teacher roles with distinct permissions and features.',
        tech: ['React', 'Redux', 'TypeScript', 'Tailwind CSS'],
        image: '/projects/project_2.webp',
        github: "https://github.com/mpsalunggg/edu-quiz",
        demo: 'https://edu-quiz-fe.vercel.app/',
        category: 'Full Stack',
    },
    {
        title: 'IQOS RFID Web',
        slug: 'iqos-rfid-web',
        description:
            'A web-based RFID system that enhances user experience and operations through secure authentication, reward management, and real-time logistics tracking.',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'RFID Integration'],
        image: '/projects/project_4.webp',
        category: 'Frontend',
    },
    {
        title: 'IQOS RFID Dashboard',
        slug: 'iqos-rfid-dashboard',
        description:
            'An administrative dashboard providing visibility and control over all RFID-based operations, including user monitoring, sales validation, and inventory tracking.',
        tech: ['React', 'TypeScript', 'Tailwind CSS'],
        image: "/projects/project_7.webp",
        category: 'Frontend',
    },
    // {
    //   title: 'Peduli Ilmu',
    //   description:
    //     'A foundation committed to developing quality Islamic education in Central Sulawesi, aiming to produce intellectually and morally strong generations through education and da'wah programs.',
    //   tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    //   image: project2,
    //   demo: 'https://www.peduliilmu.org/en',
    //   category: 'Frontend',
    // },
    {
        title: 'Wellnest Event',
        slug: 'wellnest-event',
        description:
            'A corporate wellness event booking system with HR and vendor dashboards, built using React, Node.js, and MongoDB, featuring role-based access and event verification workflows.',
        tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
        image: "/projects/project_5.webp",
        demo: 'https://wellnest-event.vercel.app/',
        category: 'Full Stack',
    },
    {
        title: 'Kopi Garuda',
        slug: 'kopi-garuda',
        description:
            'A freelance project developing a clean landing page for a local Makassar coffee brand, with plans to expand into an e-commerce coffee ordering platform.',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        image: "/projects/project_6.webp",
        demo: 'https://kopi-garuda.vercel.app/',
        category: 'Frontend',
    },
    {
        title: 'Netflix Clone',
        slug: 'netflix-clone',
        description:
            'A streaming UI app integrated with the TMDB API, designed to mimic Netflix interface and demonstrate skills in UI development and API data handling.',
        tech: ['React', 'TMDB API', 'Firebase'],
        image: "/projects/project_3.webp",
        demo: 'https://netflix-clone-c74e3.web.app/',
        category: 'Frontend',
    },

    // {
    //   title: 'GIS SmartParty Demokrat',
    //   description:
    //     'A GIS-based system for internal use that visualizes and monitors the organizational structure of the Democratic Party across Indonesia with interactive mapping.',
    //   tech: ['Next.js', 'Leaflet', 'TypeScript'],
    //   image: project4,
    //   category: 'Internal System',
    // },
    // {
    //   title: 'Dashboard Customer Oneflux',
    //   description:
    //     'A real-time management dashboard for monitoring Oneflux services, subscriptions, and tower mapping, built to empower customers with self-service capabilities.',
    //   tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    //   image: project5,
    //   category: 'Internal System',
    // },
]
