# Supabase Setup Guide

## Prerequisites
1. Buat akun di [Supabase](https://supabase.com)
2. Buat project baru di Supabase dashboard

## Setup Steps

### 1. Get Supabase Credentials

Di Supabase Dashboard, pergi ke **Project Settings > API**:

- **Project URL**: Copy dan paste ke `.env` sebagai `VITE_SUPABASE_URL`
- **Anon/Public Key**: Copy dan paste ke `.env` sebagai `VITE_SUPABASE_ANON_KEY`

### 2. Get Database Connection String

Di Supabase Dashboard, pergi ke **Project Settings > Database > Connection String**:

1. Pilih tab **Transaction** (bukan Session)
2. Mode: **Transactions**
3. Copy connection string dan ganti `[YOUR-PASSWORD]` dengan password database Anda
4. Paste ke `.env` sebagai `DATABASE_URL`

Contoh:
```
DATABASE_URL="postgresql://postgres.xxxxx:your-password@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres"
```

### 3. Update .env File

```env
# Supabase
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Database
DATABASE_URL="postgresql://postgres.xxxxx:your-password@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres"
```

### 4. Push Schema ke Database

```bash
pnpm prisma:push
```

Command ini akan:
- Generate Prisma Client
- Push schema `ProjectView` ke Supabase database

### 5. Seed Initial Data

```bash
pnpm prisma:seed
```

Command ini akan:
- Create initial records untuk semua projects dengan views = 0
- Generate slug dari setiap project title

### 6. (Optional) Open Prisma Studio

Untuk melihat data di database:

```bash
pnpm prisma:studio
```

## Project Structure

```
src/
├── lib/
│   ├── supabase.ts        # Supabase client config
│   ├── prisma.ts          # Prisma client singleton
│   └── projectViews.ts    # Utility functions untuk tracking views
prisma/
├── schema.prisma          # Database schema
└── seed.ts               # Seed data
```

## Usage Example

### Get Project Views

```typescript
import { getProjectViews } from '@/lib/projectViews'

const views = await getProjectViews('hammercode-web')
console.log(views) // 0 or current view count
```

### Increment Project Views

```typescript
import { incrementProjectViews } from '@/lib/projectViews'

// When user visits project detail page
const newViews = await incrementProjectViews('hammercode-web')
console.log(newViews) // Updated view count
```

### Get All Project Views

```typescript
import { getAllProjectViews } from '@/lib/projectViews'

const allViews = await getAllProjectViews()
// [
//   { slug: 'hammercode-web', views: 100 },
//   { slug: 'edu-quiz', views: 50 },
//   ...
// ]
```

## Troubleshooting

### Error: "Environment variables loaded from .env Prisma schema not found"

Solution: Pastikan file `.env` ada di root project dan `DATABASE_URL` sudah di-set.

### Error: "Can't reach database server"

Solution:
1. Cek koneksi internet
2. Pastikan `DATABASE_URL` correct
3. Pastikan password database benar (ganti `[YOUR-PASSWORD]`)

### Error: "Invalid connection string"

Solution: Pastikan format connection string benar dan tidak ada typo.

## Available Scripts

```bash
pnpm prisma:generate  # Generate Prisma Client
pnpm prisma:push      # Push schema ke database
pnpm prisma:seed      # Seed initial data
pnpm prisma:studio    # Open Prisma Studio (GUI)
```
