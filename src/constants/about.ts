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


