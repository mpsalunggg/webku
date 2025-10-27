# Setup Summary - Supabase + Prisma untuk Project Views

## ✅ Yang Sudah Di-Setup

### 1. Dependencies Installed
- `@supabase/supabase-js` - Supabase client
- `@prisma/client` - Prisma ORM
- `prisma` (dev) - Prisma CLI
- `ts-node` (dev) - TypeScript executor untuk seed

### 2. File Structure Created

```
webku/
├── prisma/
│   ├── schema.prisma           # Database schema (ProjectView model)
│   └── seed.ts                 # Seed file untuk initialize data
├── prisma.config.ts            # Prisma config
├── src/
│   ├── lib/
│   │   ├── supabase.ts        # Supabase client config
│   │   ├── prisma.ts          # Prisma client singleton
│   │   └── projectViews.ts    # Helper functions (get, increment views)
│   └── hooks/
│       └── useProjectViews.ts # React hook untuk views tracking
├── .env                       # Environment variables (EDIT INI!)
├── .env.example              # Template untuk .env
├── SUPABASE_SETUP.md         # Panduan setup Supabase
├── USAGE_EXAMPLE.md          # Contoh usage di component
└── SETUP_SUMMARY.md          # File ini
```

### 3. Database Schema

```prisma
model ProjectView {
  id        String   @id @default(cuid())
  slug      String   @unique
  views     Int      @default(0)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("project_views")
}
```

### 4. NPM Scripts Added

```json
{
  "prisma:generate": "prisma generate",
  "prisma:push": "prisma db push",
  "prisma:seed": "ts-node prisma/seed.ts",
  "prisma:studio": "prisma studio"
}
```

## 🚀 Next Steps (Yang Perlu Anda Lakukan)

### Step 1: Setup Supabase Account

1. Buka [https://supabase.com](https://supabase.com)
2. Sign up / Login
3. Create New Project
4. Tunggu project selesai di-provision (~2 menit)

### Step 2: Get Credentials

Di Supabase Dashboard:

**A. API Credentials**
- Go to: **Project Settings > API**
- Copy **Project URL** dan **anon/public key**

**B. Database Connection String**
- Go to: **Project Settings > Database**
- Scroll ke **Connection String**
- Pilih mode **Transaction** (bukan Session)
- Copy connection string

### Step 3: Update .env File

Edit file [.env](./.env) dan ganti dengan credentials Anda:

```env
# Supabase
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Database
DATABASE_URL="postgresql://postgres.xxxxx:YOUR_PASSWORD@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres"
```

⚠️ **IMPORTANT**: Ganti `YOUR_PASSWORD` dengan password database Anda!

### Step 4: Push Schema ke Database

```bash
pnpm prisma:push
```

Ini akan:
- ✅ Generate Prisma Client
- ✅ Create table `project_views` di Supabase

### Step 5: Seed Initial Data

```bash
pnpm prisma:seed
```

Ini akan create initial records untuk 7 projects:
- hammercode-web
- edu-quiz
- iqos-rfid-web
- iqos-rfid-dashboard
- wellnest-event
- kopi-garuda
- netflix-clone

### Step 6: Verify (Optional)

Buka Prisma Studio untuk cek data:

```bash
pnpm prisma:studio
```

Atau cek di Supabase Dashboard:
- Go to: **Table Editor**
- Pilih table `project_views`
- Harusnya ada 7 rows dengan views = 0

## 📖 How to Use

### Display Views Count

```tsx
import { useProjectViews } from '@/hooks/useProjectViews'

function ProjectCard({ title }: { title: string }) {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  const { views } = useProjectViews(slug, false)

  return <div>{views} views</div>
}
```

### Increment Views (on detail page)

```tsx
import { useProjectViews } from '@/hooks/useProjectViews'

function ProjectDetailPage({ slug }: { slug: string }) {
  // Set incrementOnMount = true
  const { views } = useProjectViews(slug, true)

  return <div>This project has {views} views</div>
}
```

Lihat [USAGE_EXAMPLE.md](./USAGE_EXAMPLE.md) untuk contoh lengkap!

## 🛠️ Available Functions

### From `src/lib/projectViews.ts`

```typescript
// Get views count
const views = await getProjectViews('hammercode-web')

// Increment views
const newViews = await incrementProjectViews('hammercode-web')

// Get all project views (sorted by views DESC)
const allViews = await getAllProjectViews()
```

## 📚 Documentation

- [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) - Detail setup Supabase
- [USAGE_EXAMPLE.md](./USAGE_EXAMPLE.md) - Usage examples
- [Prisma Docs](https://www.prisma.io/docs/)
- [Supabase Docs](https://supabase.com/docs)

## 🔥 Arsitektur

```
┌─────────────────┐
│   MDX Files     │  ← Project content (title, desc, tech)
│  (Static Data)  │
└─────────────────┘
         │
         │ Read
         ▼
┌─────────────────┐
│  React App      │  ← Display projects
│  (Frontend)     │
└─────────────────┘
         │
         │ Track Views
         ▼
┌─────────────────┐
│ Supabase DB     │  ← Store views & slug only
│ (PostgreSQL)    │
└─────────────────┘
```

## ❓ Troubleshooting

### Problem: "Can't reach database server"

**Solution:**
1. Cek `.env` file - pastikan `DATABASE_URL` benar
2. Pastikan password database benar (bukan `[YOUR-PASSWORD]`)
3. Cek koneksi internet

### Problem: "Environment variables not found"

**Solution:**
1. Pastikan file `.env` ada di root project
2. Restart dev server: `pnpm dev`

### Problem: Prisma Client tidak ter-generate

**Solution:**
```bash
pnpm prisma:generate
```

## ✨ Features

- ✅ Track views per project
- ✅ Auto-increment views
- ✅ Get most viewed projects
- ✅ Type-safe with TypeScript
- ✅ Ready for production
- ✅ Static data di MDX + dynamic views di DB

## 📊 What's Next?

1. Implement views display di [CardProject.tsx](./src/pages/projects/components/CardProject.tsx)
2. Create project detail page dengan auto-increment views
3. (Optional) Add "Most Viewed" section di homepage
4. (Optional) Add Supabase Realtime untuk live view counts

---

Jika ada pertanyaan atau issue, refer ke dokumentasi atau buat issue di repo! 🚀
