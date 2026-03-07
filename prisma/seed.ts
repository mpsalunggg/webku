import 'dotenv/config'
import { prisma } from '../src/lib/prisma'

function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

const projectSlugs = [
  { title: 'Hammercode Web', views: 0 },
  { title: 'Edu Quiz', views: 0 },
  { title: 'IQOS RFID Web', views: 0 },
  { title: 'IQOS RFID Dashboard', views: 0 },
  { title: 'Wellnest Event', views: 0 },
  { title: 'Kopi Garuda', views: 0 },
  { title: 'Netflix Clone', views: 0 },
  { title: 'Ask Me', views: 0 },
]

async function main() {
  for (const project of projectSlugs) {
    const slug = createSlug(project.title)

    const existing = await prisma.projectView.findUnique({
      where: { slug },
    })

    if (existing) {
      console.log(`Skipped (already exists): ${slug}`)
      continue
    }

    await prisma.projectView.create({
      data: {
        slug,
        views: project.views,
      },
    })

    console.log(`Created: ${slug} (${project.title})`)
  }

  console.log('Seed completed!')
}

main()
  .catch(() => {
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
