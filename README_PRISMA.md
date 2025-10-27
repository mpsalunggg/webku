# Prisma + Supabase Setup Guide

## 📋 Table of Contents
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Database Schema](#database-schema)
- [Commands](#commands)
- [Troubleshooting](#troubleshooting)

---

## 🎯 Overview

Project ini menggunakan:
- **Prisma ORM** - Type-safe database client
- **Supabase** - PostgreSQL database (managed)
- **TypeScript** - Full type safety

**Arsitektur:**
```
MDX Files (Static Content) → React App → Supabase (Dynamic Views Data)
```

---

## ✅ Prerequisites

1. Node.js >= 18
2. pnpm installed (`npm install -g pnpm`)
3. Supabase account ([supabase.com](https://supabase.com))

---

## 📦 Installation

Dependencies sudah ter-install:
- `@prisma/client` - Prisma client
- `prisma` (dev) - Prisma CLI
- `@supabase/supabase-js` - Supabase client
- `tsx` (dev) - TypeScript executor
- `dotenv` - Environment variables loader

Jika belum, install dengan:
```bash
pnpm install
```

---

## ⚙️ Configuration

### Step 1: Setup Supabase Project

1. Buka [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Click **"New Project"**
3. Fill in:
   - **Name**: Nama project (contoh: "webku")
   - **Database Password**: Buat password yang kuat (SIMPAN INI!)
   - **Region**: Pilih yang terdekat (contoh: Southeast Asia)
4. Click **"Create new project"**
5. Tunggu ~2 menit sampai project selesai provisioning

### Step 2: Get API Credentials

**A. Get Project URL & Anon Key**

1. Di Supabase Dashboard, klik project Anda
2. Go to: **Settings** (icon ⚙️ di sidebar kiri)
3. Click **"API"**
4. Copy:
   - **Project URL** (contoh: `https://xxxxx.supabase.co`)
   - **anon/public key** (string panjang yang dimulai dengan `eyJ...`)

**B. Get Database Connection String**

1. Go to: **Settings > Database**
2. Scroll ke section **"Connection string"**
3. Pilih tab **"Transaction"** (bukan Session)
4. Copy connection string
5. Ganti `[YOUR-PASSWORD]` dengan password yang Anda buat di Step 1

Format connection string:
```
postgresql://postgres.[PROJECT-REF]:[YOUR-PASSWORD]@aws-0-region.pooler.supabase.com:6543/postgres
```

### Step 3: Update `.env` File

Edit file `.env` di root project:

```env
# Supabase API
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Database Connection String
DATABASE_URL="postgresql://postgres.xxxxx:your-actual-password@aws-0-region.pooler.supabase.com:6543/postgres"
```

⚠️ **PENTING:**
- Ganti `xxxxx` dengan project ref Anda
- Ganti `your-actual-password` dengan password database Anda
- Jangan commit file `.env` ke git (sudah ada di `.gitignore`)

---

## 🗄️ Database Schema

Schema Prisma ada di `prisma/schema.prisma`:

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

**Fields:**
- `id` - Unique identifier (auto-generated)
- `slug` - Project slug (unique, contoh: "hammercode-web")
- `views` - View count (default: 0)
- `createdAt` - Record creation timestamp
- `updatedAt` - Last update timestamp

---

## 🚀 Commands

### 1. Generate Prisma Client

```bash
pnpm prisma:generate
```

**Kapan digunakan:**
- Setelah update schema di `prisma/schema.prisma`
- Pertama kali setup project

**Output:** Generate TypeScript types di `node_modules/@prisma/client`

---

### 2. Push Schema ke Database

```bash
pnpm prisma:push
```

**Apa yang terjadi:**
- Sync schema dari `schema.prisma` ke Supabase database
- Create/update tables di database
- Auto-generate Prisma Client

**Kapan digunakan:**
- Pertama kali setup (setelah isi `.env`)
- Setelah update schema

⚠️ **Peringatan:** Command ini akan override existing tables! Untuk production, gunakan `prisma migrate`.

---

### 3. Seed Initial Data

```bash
pnpm prisma:seed
```

**Apa yang terjadi:**
- Insert initial data ke table `project_views`
- Create 7 project records dengan views = 0

**Projects yang di-seed:**
1. hammercode-web
2. edu-quiz
3. iqos-rfid-web
4. iqos-rfid-dashboard
5. wellnest-event
6. kopi-garuda
7. netflix-clone

**File:** `prisma/seed.ts`

---

### 4. Open Prisma Studio

```bash
pnpm prisma:studio
```

**Apa itu Prisma Studio:**
- GUI untuk view & edit database
- Buka di browser: `http://localhost:5555`
- Bisa CRUD data langsung

**Fitur:**
- ✅ View all tables
- ✅ Filter & search records
- ✅ Edit data inline
- ✅ Add/delete records

---

## 📖 Usage in Code

### Import Prisma Client

```typescript
import { prisma } from '@/lib/prisma'
```

### Get Project Views

```typescript
import { getProjectViews } from '@/lib/projectViews'

const views = await getProjectViews('hammercode-web')
console.log(views) // Output: 0 (or current count)
```

### Increment Project Views

```typescript
import { incrementProjectViews } from '@/lib/projectViews'

const newViews = await incrementProjectViews('hammercode-web')
console.log(newViews) // Output: 1 (incremented)
```

### Get All Project Views

```typescript
import { getAllProjectViews } from '@/lib/projectViews'

const allViews = await getAllProjectViews()
// Output:
// [
//   { slug: 'hammercode-web', views: 100 },
//   { slug: 'edu-quiz', views: 50 },
//   ...
// ]
```

### Use in React Component

```typescript
import { useProjectViews } from '@/hooks/useProjectViews'

function ProjectCard({ slug }: { slug: string }) {
  const { views, isLoading } = useProjectViews(slug, false)

  return (
    <div>
      {isLoading ? 'Loading...' : `${views} views`}
    </div>
  )
}
```

---

## 🔧 Troubleshooting

### Error: "Missing required environment variable: DATABASE_URL"

**Penyebab:** File `.env` tidak ditemukan atau `DATABASE_URL` tidak di-set

**Solusi:**
1. Pastikan file `.env` ada di root project
2. Check `DATABASE_URL` sudah diisi dengan benar
3. Restart terminal/IDE

---

### Error: "Can't reach database server"

**Penyebab:** Connection string salah atau database tidak accessible

**Solusi:**
1. Cek `DATABASE_URL` format-nya benar
2. Pastikan password benar (tidak ada karakter `[` atau `]`)
3. Test koneksi internet
4. Pastikan Supabase project status: **Active** (bukan Paused)

**Test connection:**
```bash
npx prisma db pull
```

---

### Error: "Unknown file extension .ts"

**Penyebab:** `ts-node` tidak support ESM

**Solusi:** Sudah fixed! Script menggunakan `tsx` instead of `ts-node`

Check `package.json`:
```json
{
  "scripts": {
    "prisma:seed": "tsx prisma/seed.ts"  // ✅ Correct
  }
}
```

---

### Error: "Table already exists"

**Penyebab:** Table sudah ada di database

**Solusi:**

**Option 1:** Reset database (⚠️ DATA AKAN HILANG!)
```bash
npx prisma db push --force-reset
```

**Option 2:** Skip jika table sudah ada (safe)
```bash
npx prisma db push --skip-generate
```

---

### Seed Error: "Unique constraint failed on slug"

**Penyebab:** Data sudah pernah di-seed sebelumnya

**Solusi:** Ini normal! Script menggunakan `upsert` yang akan update existing data.

**Manual reset data:**
```bash
pnpm prisma:studio
```
Lalu delete semua rows di table `project_views`, kemudian run seed lagi.

---

## 📂 Project Structure

```
webku/
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── seed.ts               # Seed script
├── prisma.config.ts          # Prisma config (loads .env)
├── src/
│   ├── lib/
│   │   ├── prisma.ts         # Prisma client instance
│   │   ├── supabase.ts       # Supabase client
│   │   └── projectViews.ts   # Helper functions
│   └── hooks/
│       └── useProjectViews.ts # React hook
├── .env                      # Environment variables (⚠️ JANGAN COMMIT!)
└── .env.example             # Template untuk .env
```

---

## 🔗 Useful Links

- [Prisma Docs](https://www.prisma.io/docs/)
- [Supabase Docs](https://supabase.com/docs)
- [Prisma + Supabase Guide](https://supabase.com/docs/guides/integrations/prisma)
- [USAGE_EXAMPLE.md](./USAGE_EXAMPLE.md) - Code examples
- [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) - Detailed Supabase setup

---

## 🎓 Best Practices

### 1. Environment Variables

✅ **DO:**
- Simpan credentials di `.env`
- Use `.env.example` sebagai template
- Add `.env` ke `.gitignore`

❌ **DON'T:**
- Commit `.env` ke git
- Share credentials di chat/email
- Hardcode credentials di code

### 2. Database Operations

✅ **DO:**
- Use Prisma Client untuk semua DB operations
- Use transactions untuk multiple operations
- Handle errors dengan try-catch

❌ **DON'T:**
- Write raw SQL (kecuali absolutely necessary)
- Skip error handling
- Expose database errors ke user

### 3. Schema Updates

✅ **DO:**
- Test schema changes di local dulu
- Use migrations untuk production
- Backup data sebelum breaking changes

❌ **DON'T:**
- Run `prisma db push` di production
- Delete fields tanpa migration plan
- Forget to run `prisma generate` after schema changes

---

## 🆘 Need Help?

1. Check [Troubleshooting](#troubleshooting) section
2. Read [SUPABASE_SETUP.md](./SUPABASE_SETUP.md)
3. Check [Prisma Docs](https://www.prisma.io/docs/)
4. Open issue di GitHub repo

---

**Happy coding! 🚀**
