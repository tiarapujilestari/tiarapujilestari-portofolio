# Tiara Pujilestari — Portfolio (Motion Redesign)

Premium dark portfolio dibangun dengan React + TypeScript + Vite + Tailwind CSS v4 + Motion for React.

## Menjalankan project

```bash
npm install
npm run dev
```

Build production:

```bash
npm run build
npm run preview
```

## Yang PERLU kamu ganti (placeholder)

Semua ditandai `TODO` di kode:

1. **`src/data/projects.ts`** — ganti judul, deskripsi, tech stack, `githubUrl`, `liveUrl` dengan project asli kamu.
2. **`public/projects/`** — ganti file `.txt` di sini dengan screenshot/gambar project asli (format `.jpg`/`.png`), lalu update path `image` di `src/data/projects.ts` (mis. `/projects/project-1.jpg`).
3. **`src/data/experience.ts`** — sesuaikan tahun & isi journey/pengalaman kamu.
4. **GitHub link** — belum ada, tambahkan sendiri di `src/components/layout/Footer.tsx` dan `src/components/sections/Contact.tsx` (cari komentar `TODO`). Email dan LinkedIn sudah terisi data asli.
5. **Foto profil & CV** — sudah terhubung ke Hero (`src/components/sections/Hero.tsx`), tapi filenya masih **placeholder** (foto abu-abu bertuliskan "REPLACE ME" dan PDF kosong). Ganti langsung file-nya di `src/assets/FOTOPROFILE.png` dan `src/assets/Tiara-Pujilestari-CV-ATS.pdf` dengan file asli kamu — **nama file harus persis sama** supaya tidak perlu ubah kode lagi.

## Form kontak (EmailJS)

Section Contact sudah punya form kirim pesan fungsional pakai `@emailjs/browser`,
dengan Service ID, Template ID, dan Public Key yang sudah diisi di
`src/components/sections/Contact.tsx`. Public Key EmailJS memang didesain
aman untuk ditaruh di sisi client. Kalau kamu ganti akun EmailJS, update
3 konstanta di bagian atas file tersebut.

## Struktur folder

```
src/
  components/
    layout/     -> Navbar, Footer
    sections/   -> Hero, About, Skills, Projects, Experience, MarqueeBanner, Contact
    motion/     -> Reveal, MagneticButton, VelocityMarquee, CustomCursor, ScrollProgress
    ui/         -> GlassCard, ProjectCard, Button
  data/         -> projects.ts, skills.ts, experience.ts
  types/        -> index.ts
```

## Catatan teknis

- Icon brand (GitHub/LinkedIn logo) sudah tidak tersedia di `lucide-react` versi terbaru (dihapus karena trademark). Saat ini pakai icon generik (`Code2`, `Link2`) sebagai gantinya — kalau mau logo asli, install `simple-icons` atau taruh SVG custom.
- Custom cursor otomatis nonaktif di mobile/tablet dan saat `prefers-reduced-motion` aktif.
- Semua animasi scroll pakai `transform`/`opacity` (bukan width/height) untuk performa.
