# 🌐 Portofolio Web Personal — Reza Abdul Latif

Portofolio web modern, responsif, dan ramah aksesibilitas yang dibangun dari nol (*from scratch*) menggunakan standar web murni: **HTML5 Semantik**, **Modern CSS3**, dan **Vanilla JavaScript**. Website ini memuat informasi profil, minat teknologi, aspirasi karier di bidang Data, serta fokus pada aksesibilitas dan inklusivitas kampus.

---

## 📑 Daftar Isi
1. [Ringkasan Proyek](#-ringkasan-proyek)
2. [Tampilan Antarmuka (UI Preview & Wireframe)](#-tampilan-antarmuka-ui-preview--wireframe)
3. [Fitur Utama](#-fitur-utama)
4. [Struktur Proyek](#-struktur-proyek)
5. [Bedah Kode Sumber](#-bedah-kode-sumber)
   - [HTML5 (`index.html`)](#1-html5-indexhtml)
   - [CSS3 (`style.css`)](#2-css3-stylecss)
   - [JavaScript (`script.js`)](#3-javascript-scriptjs)
6. [Panduan Menjalankan (Cara Run)](#-panduan-menjalankan-cara-run)
7. [Profil Pengembang](#-profil-pengembang)

---

## 📌 Ringkasan Proyek

| Kategori | Keterangan |
| :--- | :--- |
| **Pemilik / Pengembang** | **Reza Abdul Latif** (Mahasiswa TI, Universitas Brawijaya) |
| **Target Karier** | *Full-Stack Developer*, *Data Analyst*, *Data Scientist* |
| **Teknologi** | HTML5 (Semantik & A11y), CSS3 (Flexbox, Grid, CSS Variables), Vanilla JS |
| **Aset Visual** | `assets/fot.png` (Background Hero) |
| **Dependensi Eksternal**| **Nol (Zero-dependency)** — Murni Vanilla Web Client-Side |

---

## 🖥️ Tampilan Antarmuka (UI Preview & Wireframe)

### 1. Skema Tata Letak Halaman (Visual Wireframe)

```text
+-----------------------------------------------------------------------+
|  [Logo: Portofolio.]   Beranda  Tentang  Keahlian  Kontak   [☾ Dark]  |  <- Sticky Navbar
+-----------------------------------------------------------------------+
|                                                                       |
|                       Full-Stack Developer                            |  <- Hero Section
|      Menggabungkan kemampuan Front-End dan Back-End untuk...           |     (Background: fot.png
|                         [ Kenali Saya → ]                             |      + Linear Overlay)
|                                                                       |
+-----------------------------------------------------------------------+
|                             TENTANG SAYA                              |
|  +----------------------------+  +---------------------------------+  |
|  | Belajar, Berkembang,       |  | Reza Abdul Latif (TI UB)        |  |  <- About Section
|  | Berdampak                  |  | Minat Web, Desain & Data        |  |     (2 Kolom Grid)
|  | Solusi nyata...            |  | Aspirasi Data Analyst/Scientist |  |
|  +----------------------------+  +---------------------------------+  |
+-----------------------------------------------------------------------+
|                       TEKNOLOGI YANG BERDAMPAK                        |
|  +------------------+  +--------------------+  +-------------------+  |
|  | 01. Inklusivitas |  | 02. Bahasa Isyarat |  | 03. Riset         |  |  <- Skills / Interests
|  |     Kampus       |  |     (BISINDO)      |  |     Deaf Interp.  |  |     (3 Kolom Cards)
|  +------------------+  +--------------------+  +-------------------+  |
+-----------------------------------------------------------------------+
|  RAL.  Membangun teknologi inklusif...             HUBUNGI SAYA       |
|                                            Rezaabdullatif50@gmail.com |  <- Footer
|  © 2026 Reza Abdul Latif                        [ 13:45:20 WIB ]      |     (Info + Live Clock)
+-----------------------------------------------------------------------+
```

### 2. Skema Warna & Variabel Tema (Light vs Dark)

Sistem warna diatur secara dinamis melalui CSS Variables pada [`style.css`](style.css):

| Variabel CSS | Mode Terang (Default) | Mode Gelap (`body.dark`) | Fungsi Elemen |
| :--- | :--- | :--- | :--- |
| `--page-bg` | `#f8fafc` (Slate 50) | `#0b1120` (Dark Navy) | Warna latar belakang halaman utama |
| `--surface` | `#ffffff` (Putih murni) | `#111827` (Dark Slate) | Kartu konten, navbar, dan footer |
| `--surface-alt` | `#eef2ff` (Indigo soft) | `#172554` (Deep Blue) | Kontainer highlight "Tentang Saya" |
| `--text` | `#0f172a` (Charcoal) | `#f1f5f9` (Off-white) | Warna teks utama dan judul |
| `--text-muted` | `#64748b` (Slate Gray) | `#a3b2c7` (Cool Gray) | Teks paragraf dan deskripsi |
| `--primary` | `#2563eb` (Royal Blue) | `#60a5fa` (Sky Blue) | Aksen tombol, tautan, dan border aktif |
| `--border` | `#e2e8f0` | `#293548` | Garis batas (*border*) navbar & kartu |

---

## ✨ Fitur Utama

1. **Dual Theme (Light & Dark Mode)**:
   - Tombol toggle di navbar beralih instan antara mode terang dan gelap.
   - Sinkronisasi atribut aksesibilitas pembaca layar (`aria-pressed`, `aria-label`) dan label teks tombol (`Light Mode` / `Dark Mode`).
2. **Jam Digital Real-time & Copyright Otomatis**:
   - Menampilkan waktu lokal (`id-ID`) berformat 24 jam dengan pembaruan per detik (`setInterval`).
   - Tahun hak cipta terisi otomatis berdasarkan tahun berjalan (`new Date().getFullYear()`).
3. **Navigasi Responsif & Mobile Drawer**:
   - Menu desktop beralih menjadi tombol *hamburger* interaktif pada layar ponsel (`<= 768px`).
   - Otomatis tertutup saat tautan diklik, saat tombol `Escape` ditekan, atau saat layar diperlebar.
4. **Desain Aksesibel (A11y Oriented)**:
   - Menggunakan tag HTML semantik (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
   - Indikator fokus keyboard jelas (`:focus-visible`).
   - Menghormati pengaturan pengguna hemat gerak melalui media query `@media (prefers-reduced-motion: reduce)`.
5. **Smooth Scrolling**:
   - Pergerakan gulir halus antar-seksi dengan penyesuaian *offset* navbar lengket (`scroll-padding-top: 100px`).

---

## 🗂️ Struktur Proyek

```text
basic-frontend-development-2026/
├── assets/
│   └── fot.png          # Gambar latar belakang hero section
├── index.html           # Struktur semantik halaman web & konten
├── style.css            # Desain tata letak, tema (Dark/Light), dan media query
├── script.js            # Interaktivitas: Jam real-time, menu mobile, toggle tema
└── README.md            # Dokumentasi lengkap proyek
```

---

## 💻 Bedah Kode Sumber

### 1. HTML5 (`index.html`)

Halaman distrukturkan menjadi 4 seksi utama:
- **Navbar (`<header class="navbar">`)**:
  - Logo `Portofolio.` sebagai pintasan kembali ke `#beranda`.
  - Navigasi utama `<nav class="nav-links" id="navLinks">` yang memuat tautan Beranda, Tentang, Keahlian, dan Kontak.
  - Aksi tema `<button class="dark-toggle">` dan tombol `<button class="hamburger">`.
- **Hero Section (`<section class="hero" id="beranda">`)**:
  - Judul `<h1>Full-Stack <span>Developer</span></h1>`.
  - Tombol aksi `Kenali Saya →` yang mengarahkan pengguna ke seksi `#tentang`.
- **Tentang Saya (`<section class="about" id="tentang">`)**:
  - Tata letak grid 2 kolom: sisi kiri berisi prinsip "Belajar, Berkembang, Berdampak", dan sisi kanan berisi profil Reza Abdul Latif di Universitas Brawijaya.
- **Keahlian & Minat (`<section class="skills" id="keahlian">`)**:
  - Menampilkan 3 kartu `<article class="card">`:
    1. **Inklusivitas Kampus**: Lingkungan setara bagi penyandang disabilitas.
    2. **Bahasa Isyarat**: Pembelajaran BISINDO untuk komunikasi sosial dan akademik.
    3. **Bahasa dan Riset**: Eksplorasi peran *Deaf Interpreter* dalam komunikasi inklusif.
- **Footer (`<footer class="footer" id="kontak">`)**:
  - Logo `RAL`, email kontak `Rezaabdullatif50@gmail.com`, tahun dinamis `<span id="currentYear"></span>`, dan display jam `<p id="currentTime">`.

### 2. CSS3 (`style.css`)

- **Root & Dark Mode Variables**: Menggunakan properti khusus `--primary`, `--surface`, `--page-bg`, dll.
- **Hero Styling**:
  ```css
  .hero {
      background-image: 
          linear-gradient(var(--hero-overlay), var(--hero-overlay)),
          url("assets/fot.png");
      background-position: center;
      background-size: cover;
  }
  ```
- **Fluid Typography**: Menggunakan fungsi CSS modern `clamp()` (misal: `font-size: clamp(2.5rem, 7vw, 5rem);`) agar ukuran judul otomatis proporsional di layar apa pun tanpa perlu ratusan *media query*.
- **Responsive Breakpoints**:
  - `@media (max-width: 1024px)`: Penyesuaian padding kontainer dan grid kartu 2 kolom.
  - `@media (max-width: 768px)`: Menu navbar desktop beralih ke mobile menu drawer vertikal, kartu menjadi 1 kolom.
  - `@media (max-width: 380px)`: Optimalisasi untuk layar ponsel ultra-kecil.
  - `@media (prefers-reduced-motion: reduce)`: Menonaktifkan animasi berat untuk kenyamanan vestibular pengguna.

### 3. JavaScript (`script.js`)

- **Jam Digital Real-time**:
  ```javascript
  function tampilkanJam() {
      const sekarang = new Date();
      currentTime.textContent = sekarang.toLocaleTimeString("id-ID", {
          hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false
      });
      currentYear.textContent = sekarang.getFullYear();
  }
  tampilkanJam();
  setInterval(tampilkanJam, 1000); // Diperbarui setiap detik
  ```
- **Kontrol Menu Mobile**:
  - Toggle kelas `.open` pada menu dan `.active` pada hamburger.
  - Menutup otomatis saat menekan tombol `Escape` atau jika ukuran jendela melebihi `768px`.
- **Pengalih Tema Gelap (Dark Mode)**:
  - Toggle kelas `dark` pada elemen `document.body`.
  - Memperbarui teks ikon (☀ / ☾), label tombol, dan atribut aksesibilitas `aria-pressed`.

---

## 🚀 Panduan Menjalankan (Cara Run)

Karena proyek ini tidak menggunakan framework berat (*zero build step*), proyek dapat dijalankan secara instan dengan beberapa pilihan berikut:

### Cara 1: Langsung Melalui Browser (Paling Cepat)
1. Buka folder proyek di komputer Anda:
   `c:\Users\rezaa\Desktop\basic-frontend-development-2026`
2. Klik dua kali (*double click*) pada file [`index.html`](index.html).
3. Halaman web akan langsung terbuka di browser default Anda (Google Chrome, Microsoft Edge, Firefox, Brave, dll.).

---

### Cara 2: Menggunakan Ekstensi VS Code Live Server (Direkomendasikan untuk Development)
Jika Anda menggunakan Visual Studio Code:
1. Pastikan ekstensi **Live Server** (oleh Ritwick Dey) sudah terpasang di VS Code.
2. Klik kanan pada file [`index.html`](index.html) di panel Explorer sebelah kiri.
3. Pilih **"Open with Live Server"** (atau gunakan shortcut `Alt + L` lalu `Alt + O`).
4. Proyek akan berjalan di alamat `http://127.0.0.1:5500/index.html` dengan fitur *auto-reload* setiap kali Anda menyimpan perubahan file.


## 👤 Profil Pengembang

- **Nama**: Reza Abdul Latif
- **Program Studi**: Teknologi Informasi
- **Fakultas / Kampus**: Fakultas Ilmu Komputer, Universitas Brawijaya
- **Email**: [Rezaabdullatif50@gmail.com](mailto:Rezaabdullatif50@gmail.com)
- **Repositori GitHub**: [RALxPro0/basic-frontend-development-2026](https://github.com/RALxPro0/basic-frontend-development-2026)
