# 🏗️ Architecture & Technical Standards - WebPoint LMS

Dokumen ini mendefinisikan arsitektur teknis, standar penulisan kode, dan pola desain yang digunakan dalam pengembangan WebPoint LMS.

---

## 1. Tech Stack & Environment
- **Framework Utama**: Next.js 14/15 (App Router).
- **Bahasa**: TypeScript (Strict Mode).
- **Database**: PostgreSQL (Production) / SQLite atau PostgreSQL (Local Development).
- **ORM**: Prisma Client.
- **Styling**: Tailwind CSS.
- **Authentication**: Custom JWT (menggunakan `jose`) disimpan pada HttpOnly Secure Cookies.
- **Validation**: Zod (untuk validasi input form dan payload API).
- **Icons**: Lucide React / Heroicons.

---

## 2. Directory & Module Structure
Struktur direktori dipisahkan secara modular untuk memisahkan UI, logika bisnis, dan utilitas.

```text
/
├── app/                  # Next.js App Router
│   ├── (auth)/           # Route group untuk halaman Login & Register
│   ├── (dashboard)/      # Route group untuk layout Dashboard (Superadmin, Guru, Murid)
│   ├── (materi)/         # Struktur materi saat ini (bisa bertahap migrasi ke Dinamis / DB)
│   │   ├── (arsitektur-web)/
│   │   ├── (bootstrap)/
│   │   ├── (css)/
│   │   ├── (database)/
│   │   ├── (html)/
│   │   ├── (js)/
│   │   └── (php)/
│   ├── api/              # Route Handlers (Auth API, Webhooks, dll)
│   ├── globals.css       # Tailwind base styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Halaman utama (Landing Page)
├── components/           # Reusable UI components
│   ├── ui/               # 🆕 Base components (Button, Input, Form, Table)
│   ├── CodeBlock.tsx     # Komponen syntax highlighter materi
│   ├── Headbar.tsx       # Komponen navigasi atas
│   └── Sidebar.tsx       # Komponen navigasi samping
├── docs/                 # Dokumentasi (ARCHITECTURE.md, PRD.md, ERD_LMS.md, DESIGN_ADMIN.md)
├── lib/                  # Konfigurasi library & utilitas umum
│   ├── prisma.ts         # Singleton instance Prisma
│   └── session.ts        # 🆕 Utilitas manajemen JWT & Cookie
├── modules/              # 🌟 🆕 Business Logic (Service Layer untuk LMS)
│   ├── auth/             # Logika verifikasi password, sign JWT
│   ├── materials/        # Logika akses materi & sekuensial (lock/unlock)
│   └── quizzes/          # Logika validasi jawaban & kalkulasi skor
├── prisma/               # Schema dan migrasi database
│   ├── schema.prisma     # Definisi 11 Tabel & Enum LMS
│   └── seed.ts           # 🆕 Script inisialisasi data awal (Superadmin)
└── public/               # Asset statis
```

---

## 3. Separation of Concerns & Design Patterns
Kita menggunakan variasi **Service Pattern** untuk memisahkan antara *UI Layer* dan *Business Logic*.

1. **Controller / Handler Layer** (`app/`):
   - Server Actions (`actions.ts`) atau Route Handlers (`app/api/...`).
   - Bertugas menerima request, memanggil validator (Zod), dan memanggil Service Layer.
2. **Service Layer** (`modules/`):
   - Tempat *Business Logic* berada.
   - Contoh: Fungsi `calculateQuizScore(attemptId, answers)`.
   - Tidak boleh mengembalikan Response HTTP secara langsung.
3. **Data Access Layer** (via `Prisma`):
   - Digunakan di dalam Service Layer. Query langsung ke database (`prisma.user.findUnique()`).

---

## 4. Data Validation & Security Standards

### A. Data Validation (Zod)
- Semua input dari klien (Form Data / JSON) **WAJIB** divalidasi menggunakan Zod sebelum diproses.
- Schema diletakkan berdekatan dengan fitur atau di dalam folder `modules/{feature}/schemas.ts`.

### B. Security Standards
- **XSS Prevention**: Menggunakan default sanitization React.
- **Token Security**: JWT **tidak pernah** dikembalikan ke body response. Token langsung di-set ke Header sebagai `Set-Cookie` dengan opsi: `HttpOnly`, `Secure` (di production), `SameSite=Lax/Strict`, dan `Path=/`.
- **Password Hashing**: Menggunakan `bcryptjs` dengan *salt rounds* minimal 10.

---

## 5. Standardized Response & Error Handling
Baik Server Actions maupun API Routes harus mengembalikan struktur data yang konsisten.

### A. Standard Action Response
Server actions selalu mereturn object standar:
```typescript
type ActionResponse<T> = {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>; // Untuk validasi error dari Zod
};
```

### B. Error Handling
- Jangan membocorkan error database (contoh: Prisma constraint error) ke klien.
- Tangkap error di try-catch pada Service/Action layer dan kembalikan pesan *user-friendly* (contoh: "Email sudah digunakan").

---

## 6. State Management & Data Fetching Strategy

### Server Components vs Client Components
- **Default**: Gunakan **React Server Components (RSC)** untuk melakukan fetching data secara langsung dari database menggunakan Prisma (tanpa fetch/API). Ini membuat aplikasi sangat cepat dan SEO friendly.
-Gunakan `"use client"` **hanya** ketika membutuhkan interaktivitas (onClick, useState, form handling, hooks).

### Client State
- State lokal form menggunakan `useState` atau React Hook Form.
- Jika ada state global (misal status sidebar toggle), gunakan `Zustand` atau React `Context`.

---

## 7. Authentication & Authorization Flow

1. **Login Action**: Menerima kredensial, verifikasi hash, *generate* JWT, pasang ke HttpOnly Cookie.
2. **Middleware (`middleware.ts`)**:
   - Berjalan sebelum request mencapai halaman/API.
   - Mengambil cookie JWT, memverifikasi *signature*.
   - Mengekstrak isi payload (Role: `MURID`, dll).
   - **Route Guarding**: Jika payload role adalah `MURID` mencoba mengakses `/dashboard/guru`, Middleware akan me-redirect (HTTP 307) ke `/unauthorized` atau halaman home.

---

## 8. Database Strategy (Migration & Seeding)

- **Perubahan Skema**: Setiap merubah `schema.prisma`, harus menjalankan perintah `npx prisma migrate dev --name deskripsi_perubahan` agar riwayat perubahan (history) tersimpan dalam folder `prisma/migrations`.
- **Seeding (`prisma/seed.ts`)**: 
  - Harus ada seeder default untuk mendaftarkan 1 akun SUPERADMIN.
  - Membantu developer baru agar database langsung memiliki data *dummy* kategori (HTML, CSS) tanpa perlu mengisi manual.
