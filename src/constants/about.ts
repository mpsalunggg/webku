import {
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siVuedotjs,
  siGraphql,
  siTailwindcss,
  siStyledcomponents,
  siChakraui,
  siMui,
  siShadcnui,
  siFramer,
  siNodedotjs,
  siExpress,
  siNestjs,
  siMysql,
  siMongodb,
  siGit,
  siDocker,
  siJest,
  siVitest,
  siTurborepo,
  siGooglemaps,
  siNuxt,
} from 'simple-icons'
import type { SimpleIcon } from 'simple-icons'

export const iconMap: Record<string, SimpleIcon> = {
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siVuedotjs,
  siGraphql,
  siTailwindcss,
  siStyledcomponents,
  siChakraui,
  siMui,
  siShadcnui,
  siFramer,
  siNodedotjs,
  siExpress,
  siNestjs,
  siMysql,
  siMongodb,
  siGit,
  siDocker,
  siJest,
  siVitest,
  siTurborepo,
  siGooglemaps,
  siNuxt,
}

export const skills = [
  {
    category: 'Frontend Development',
    isLearning: false,
    items: [
      { name: 'TypeScript', icon: 'siTypescript' },
      { name: 'React', icon: 'siReact' },
      { name: 'Next.js', icon: 'siNextdotjs' },
      { name: 'Vue.js', icon: 'siVuedotjs' },
      { name: 'Nuxt.js', icon: 'siNuxt' },
      { name: 'Graphql Apollo Client', icon: 'siGraphql' },
    ],
  },
  {
    category: 'Styling & UI',
    isLearning: false,
    items: [
      { name: 'Tailwind CSS', icon: 'siTailwindcss' },
      { name: 'Styled Components', icon: 'siStyledcomponents' },
      { name: 'Chakra UI', icon: 'siChakraui' },
      { name: 'Material UI', icon: 'siMui' },
      { name: 'Shadcn/ui', icon: 'siShadcnui' },
      { name: 'Framer Motion', icon: 'siFramer' },
    ],
  },
  {
    category: 'Backend & Database',
    isLearning: true,
    items: [
      { name: 'Node.js', icon: 'siNodedotjs' },
      { name: 'Express', icon: 'siExpress' },
      { name: 'NestJS', icon: 'siNestjs' },
      { name: 'MySQL', icon: 'siMysql' },
      { name: 'MongoDB', icon: 'siMongodb' },
      { name: 'Apollo Server', icon: 'siGraphql' },
    ],
  },
  {
    category: 'Tools & Others',
    isLearning: true,
    items: [
      { name: 'Git', icon: 'siGit' },
      { name: 'Docker', icon: 'siDocker' },
      { name: 'Jest', icon: 'siJest' },
      { name: 'Vitest', icon: 'siVitest' },
      { name: 'Turborepo', icon: 'siTurborepo' },
      { name: 'Google Maps API', icon: 'siGooglemaps' },
    ],
  },
]

export const achievements = [
  {
    year: '2024',
    title: 'Best Student in Faculty of Engineering',
    organization: 'Tadulako University - 123rd Graduation',
  },
  {
    year: '2023',
    title: 'Best Intern & Golden Ticket MSIB Batch 4',
    organization: 'Educourse.id',
    tooltip:
      'Golden ticket is allows direct employment at the company upon program completion without additional testing',
  },
  {
    year: '2023',
    title: 'Selected Participant Internship (1 of 350)',
    organization: 'Generasi Gigih 3.0 - GoTo Impact Foundation',
  },
]

export const workExperiences = [
  {
    period: '10/2024 - Present',
    company: 'Tan Digital',
    position: 'Frontend Engineer',
    location: 'South Tangerang, Indonesia',
    type: 'Contract',
    responsibilities: [
      'Developed a dynamic GIS interface with Google Maps API, featuring layered views, polygon drawing, data filtering, and marker integration to enhance spatial analysis.',
      'Migrate 90% of the GIS project from Frappe server-side scripts to a modern frontend with Nuxt and TypeScript.',
      'Develop a B2B dashboard with Midtrans integration to simplify and secure client payment workflows.',
      'Provide technical guidance and monitor the frontend team to ensure code quality, consistency, and project goal.',
    ],
  },
  {
    period: '10/2024 - 02/2025',
    company: 'Amerta Digital Wijaya',
    position: 'Frontend Engineer',
    location: 'Jakarta, Indonesia',
    type: 'Freelance',
    responsibilities: [
      'Developed an RFID-based web app for seamless event authentication and efficient purchase management.',
      'Developed features like point redemption, locker/device rental management, and reward claiming via RFID.',
      'Developed logistics tracking to support booth-to-booth item quantity checks, and efficient stock management.',
      'Created a clean folder structure and maintainable code to improve scalability and team collaboration.',
    ],
  },
  {
    period: '06/2024 - 09/2024',
    company: 'Educourse.id',
    position: 'Software Engineer',
    location: 'South Tangerang, Indonesia',
    type: 'Contract',
    responsibilities: [
      'Integrated a course payment gateway using Xendit, for the transaction flow and enhancing the overall user experience',
      'Built a language switcher (English/Indonesian) to help students access the platform in their preferred language.',
      'Developed a secure and scalable authentication system using NextAuth for session management.',
    ],
  },
  {
    period: '09/2023 - 03/2024',
    company: 'Rey.id',
    position: 'Frontend Engineer',
    location: 'Jakarta, Indonesia',
    type: 'Contract',
    responsibilities: [
      'Contributed to the migration of a real-time chat feature using Next.js and TypeScript, enabling secure and efficient remote consultations between patients and doctors while significantly improving application performance.',
      'Applied clean code principles to enhance code readability, maintainability, and ease of future development.',
      'Developed unit tests in Jest with mocked API calls to verify the reliability and consistency of UI components.',
    ],
  },
  {
    period: '02/2023 - 06/2023',
    company: 'Educourse.id',
    position: 'Frontend Engineer',
    location: 'South Tangerang, Indonesia',
    type: 'Internship',
    responsibilities: [
      'Selected as one of the participants from over 2,000+ students across Indonesia for a government internship program.',
      'Built a React.js-based quiz platform with Redux Toolkit, used by schools to facilitate student assessments.',
      'Designed a mobile-optimized UI using Tailwind CSS and the Ant Design UI library to ensure consistent layout.',
    ],
  },
]

export const activities = [
  {
    period: '07/2023 - 12/2023',
    organization: 'GoTo Impact Foundation - Generasi Gigih 3.0',
    role: 'Fullstack Engineer Learning Path',
    location: 'Jakarta, Indonesia',
    responsibilities: [
      'Learned the MERN stack (MongoDB, Express.js, React, Node.js) for fullstack app development.',
      'Built complex applications, including a Spotify clone and Tokopedia Play clone with user authentication.',
      'Studied Docker for image creation and container management.',
    ],
  },
  {
    period: '08/2022 - 12/2022',
    organization: 'RuangGuru',
    role: 'Frontend Engineering Learning Path',
    location: 'Jakarta, Indonesia',
    responsibilities: [
      'Learned the fundamentals of Tailwind CSS, JavaScript, Git, ReactJS, and Chakra UI.',
      'Gained experience in integrating Web APIs and consuming RESTful APIs.',
    ],
  },
  {
    period: '09/2022 - 06/2024',
    organization: 'Hammercode Community',
    role: 'Frontend Engineer Mentor & Lead Community',
    location: 'Palu, Indonesia',
    responsibilities: [
      'Contributed to the development of Palu\'s tech ecosystem through mentorship and events.',
      'Taught frontend development fundamentals using ReactJS and REST API integration.',
      'Built a web-based Hammercode Web to support the community.',
    ],
  },
]
