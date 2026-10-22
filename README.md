# Portofolio Personal - Reza Abdul Latif

Website portofolio pribadi modern, responsif, dan aksesibel yang dibangun menggunakan teknologi web standar (**HTML5 semantic**, **Modern CSS3**, dan **Vanilla JavaScript**). Website ini menampilkan profil, minat, kompetensi di bidang pengembangan web dan data, serta kepedulian terhadap aksesibilitas dan inklusivitas.

---

## 📌 Ringkasan Proyek

| Informasi | Keterangan |
| :--- | :--- |
| **Pemilik / Pengembang** | Reza Abdul Latif (Mahasiswa TI, Universitas Brawijaya) |
| **Fokus & Minat** | Web Development, Data Analysis, Aksesibilitas & Inklusivitas |
| **Teknologi Utama** | HTML5, CSS3 (Custom Properties & Flex/Grid), Vanilla JavaScript |
| **Fitur Unggulan** | Dark/Light Mode, Jam Real-time, Responsive Hamburger Menu, A11y Ready |

---

## ✨ Fitur Utama

- 🌓 **Mode Gelap & Terang (Dark/Light Mode)**  
  Mendukung pergantian tema dinamis menggunakan *CSS Custom Properties* (`:root` dan `body.dark`) serta integrasi atribut ARIA (`aria-pressed`, `aria-label`) untuk aksesibilitas pembaca layar.
- 📱 **Desain Responsif (Mobile-First & Fluid)**  
  Tata letak fleksibel dengan CSS Grid dan Flexbox, tipografi fluid (`clamp()`), serta menu navigasi *hamburger* otomatis untuk layar sentuh/ponsel.
- 🕒 **Jam Digital Real-time & Tahun Dinamis**  
  Menampilkan jam lokal Indonesia (`id-ID`) yang diperbarui setiap detik dan tahun otomatis pada footer melalui JavaScript.
- ♿ **Ramah Aksesibilitas (A11y)**  
  Struktur tag HTML5 semantik (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), manajemen fokus keyboard (`:focus-visible`), navigasi pintas tombol `Escape`, serta dukungan preferensi gerak rendah (`prefers-reduced-motion`).
- 🎨 **UI Modern & Transisi Halus**  
  Navbar dengan efek *frosted-glass* (*backdrop-filter blur*), kartu interaktif dengan efek *hover*, serta *smooth scrolling* antar-seksi.

---

## 🗂️ Struktur Direktori

```text
basic-frontend-development-2026/
├── assets/
│   └── fot.png             # Gambar latar hero section
├── index.html              # Struktur utama dokumen HTML & semantic markup
├── style.css               # Styling, tema (Light/Dark), tata letak & media queries
├── script.js               # Logika interaktivitas, menu, toggle tema & jam real-time
└── README.md               # Dokumentasi proyek
```

---

## 💻 Rincian Modul & Kode

### 1. [index.html](index.html)
- **Metadata**: Meta viewport, deskripsi SEO ramah mesin pencari, dan konfigurasi bahasa Indonesia (`lang="id"`).
- **Struktur Halaman**:
  - `header.navbar`: Brand logo, tautan navigasi, tombol mode gelap, dan tombol menu hamburger.
  - `section#beranda (Hero)`: Headline peran *Full-Stack Developer*, deskripsi singkat, dan tombol *Call to Action* (CTA).
  - `section#tentang (About)`: Highlight filosofi "Belajar, Berkembang, Berdampak" dan latar belakang akademik di Universitas Brawijaya.
  - `section#keahlian (Skills/Interests)`: Kartu-kartu fokus minat (Inklusivitas Kampus, BISINDO / Bahasa Isyarat, serta Riset & Deaf Interpreter).
  - `footer#kontak`: Branding RAL, kontak email langsung, tahun dinamis, dan display jam real-time.

### 2. [style.css](style.css)
- **Sistem Variabel**: Manajemen palet warna terpusat menggunakan CSS Variables (`--page-bg`, `--surface`, `--primary`, `--text`, dll.).
- **Dukungan Mode Gelap**: Transisi mulus pada perubahan variabel di `body.dark`.
- **Desain Adaptif**: *Breakpoints* media query pada `1024px`, `768px`, dan `380px` untuk memastikan tampilan optimal di berbagai ukuran layar.
- **Aksesibilitas Gerak**: Pengurangan durasi transisi dan animasi otomatis jika pengguna mengaktifkan mode `prefers-reduced-motion`.

### 3. [script.js](script.js)
- **Real-time Clock**: Fungsi `tampilkanJam()` yang dieksekusi setiap `1000ms` via `setInterval` dengan format `id-ID` 24 jam.
- **Interaksi Navigasi**: Buka/tutup menu hamburger, penutupan otomatis saat tautan diklik, saat menekan tombol `Escape`, atau saat jendela di-*resize* ke mode desktop (`> 768px`).
- **Pengalih Tema**: Fungsi `perbaruiTombolTema()` yang memperbarui teks ikon, label teks, dan atribut ARIA secara sinkron saat `body.classList.toggle('dark')` dipicu.

---

## 🚀 Cara Menjalankan Proyek

Proyek ini tidak memerlukan instalasi dependensi atau *build tool* eksternal (murni *Client-Side Vanilla Web*).

### Opsi 1: Buka Langsung di Browser
1. Buka folder proyek di File Explorer komputer Anda.
2. Klik dua kali pada file `index.html` (atau klik kanan -> *Open with* -> pilih browser seperti Chrome, Edge, Firefox, atau Brave).

### Opsi 2: Menggunakan Ekstensi Live Server (VS Code)
1. Buka folder ini di Visual Studio Code.
2. Pasang ekstensi **Live Server** (oleh Ritwick Dey).
3. Klik kanan pada file `index.html` dan pilih **Open with Live Server** (biasanya berjalan di `http://127.0.0.1:5500`).

### Opsi 3: Menggunakan Python HTTP Server
Jika Anda memiliki Python terpasang di komputer:
```bash
# Jalankan di terminal folder proyek:
python -m http.server 3000
```
Buka browser dan akses alamat `http://localhost:3000`.

---

## 📬 Kontak

- **Nama**: Reza Abdul Latif
- **Email**: [Rezaabdullatif50@gmail.com](mailto:Rezaabdullatif50@gmail.com)
- **Institusi**: Teknologi Informasi, Universitas Brawijaya
# Portofolio Personal - Reza Abdul Latif

Website portofolio pribadi modern, responsif, dan aksesibel yang dibangun menggunakan teknologi web standar (**HTML5 semantic**, **Modern CSS3**, dan **Vanilla JavaScript**). Website ini menampilkan profil, minat, kompetensi di bidang pengembangan web dan data, serta kepedulian terhadap aksesibilitas dan inklusivitas.

---

## 📌 Ringkasan Proyek

| Informasi | Keterangan |
| :--- | :--- |
| **Pemilik / Pengembang** | Reza Abdul Latif (Mahasiswa TI, Universitas Brawijaya) |
| **Fokus & Minat** | Web Development, Data Analysis, Aksesibilitas & Inklusivitas |
| **Teknologi Utama** | HTML5, CSS3 (Custom Properties & Flex/Grid), Vanilla JavaScript |
| **Fitur Unggulan** | Dark/Light Mode, Jam Real-time, Responsive Hamburger Menu, A11y Ready |

---

## ✨ Fitur Utama

- 🌓 **Mode Gelap & Terang (Dark/Light Mode)**  
  Mendukung pergantian tema dinamis menggunakan *CSS Custom Properties* (`:root` dan `body.dark`) serta integrasi atribut ARIA (`aria-pressed`, `aria-label`) untuk aksesibilitas pembaca layar.
- 📱 **Desain Responsif (Mobile-First & Fluid)**  
  Tata letak fleksibel dengan CSS Grid dan Flexbox, tipografi fluid (`clamp()`), serta menu navigasi *hamburger* otomatis untuk layar sentuh/ponsel.
- 🕒 **Jam Digital Real-time & Tahun Dinamis**  
  Menampilkan jam lokal Indonesia (`id-ID`) yang diperbarui setiap detik dan tahun otomatis pada footer melalui JavaScript.
- ♿ **Ramah Aksesibilitas (A11y)**  
  Struktur tag HTML5 semantik (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), manajemen fokus keyboard (`:focus-visible`), navigasi pintas tombol `Escape`, serta dukungan preferensi gerak rendah (`prefers-reduced-motion`).
- 🎨 **UI Modern & Transisi Halus**  
  Navbar dengan efek *frosted-glass* (*backdrop-filter blur*), kartu interaktif dengan efek *hover*, serta *smooth scrolling* antar-seksi.

---

## 🗂️ Struktur Direktori

```text
basic-frontend-development-2026/
├── assets/
│   └── fot.png             # Gambar latar hero section
├── index.html              # Struktur utama dokumen HTML & semantic markup
├── style.css               # Styling, tema (Light/Dark), tata letak & media queries
├── script.js               # Logika interaktivitas, menu, toggle tema & jam real-time
└── README.md               # Dokumentasi proyek
```

---

## 💻 Rincian Modul & Kode

### 1. [index.html](index.html)
- **Metadata**: Meta viewport, deskripsi SEO ramah mesin pencari, dan konfigurasi bahasa Indonesia (`lang="id"`).
- **Struktur Halaman**:
  - `header.navbar`: Brand logo, tautan navigasi, tombol mode gelap, dan tombol menu hamburger.
  - `section#beranda (Hero)`: Headline peran *Full-Stack Developer*, deskripsi singkat, dan tombol *Call to Action* (CTA).
  - `section#tentang (About)`: Highlight filosofi "Belajar, Berkembang, Berdampak" dan latar belakang akademik di Universitas Brawijaya.
  - `section#keahlian (Skills/Interests)`: Kartu-kartu fokus minat (Inklusivitas Kampus, BISINDO / Bahasa Isyarat, serta Riset & Deaf Interpreter).
  - `footer#kontak`: Branding RAL, kontak email langsung, tahun dinamis, dan display jam real-time.

### 2. [style.css](style.css)
- **Sistem Variabel**: Manajemen palet warna terpusat menggunakan CSS Variables (`--page-bg`, `--surface`, `--primary`, `--text`, dll.).
- **Dukungan Mode Gelap**: Transisi mulus pada perubahan variabel di `body.dark`.
- **Desain Adaptif**: *Breakpoints* media query pada `1024px`, `768px`, dan `380px` untuk memastikan tampilan optimal di berbagai ukuran layar.
- **Aksesibilitas Gerak**: Pengurangan durasi transisi dan animasi otomatis jika pengguna mengaktifkan mode `prefers-reduced-motion`.

### 3. [script.js](script.js)
- **Real-time Clock**: Fungsi `tampilkanJam()` yang dieksekusi setiap `1000ms` via `setInterval` dengan format `id-ID` 24 jam.
- **Interaksi Navigasi**: Buka/tutup menu hamburger, penutupan otomatis saat tautan diklik, saat menekan tombol `Escape`, atau saat jendela di-*resize* ke mode desktop (`> 768px`).
- **Pengalih Tema**: Fungsi `perbaruiTombolTema()` yang memperbarui teks ikon, label teks, dan atribut ARIA secara sinkron saat `body.classList.toggle('dark')` dipicu.

---

## 🚀 Cara Menjalankan Proyek

Proyek ini tidak memerlukan instalasi dependensi atau *build tool* eksternal (murni *Client-Side Vanilla Web*).

### Opsi 1: Buka Langsung di Browser
1. Buka folder proyek di File Explorer komputer Anda.
2. Klik dua kali pada file `index.html` (atau klik kanan -> *Open with* -> pilih browser seperti Chrome, Edge, Firefox, atau Brave).

### Opsi 2: Menggunakan Ekstensi Live Server (VS Code)
1. Buka folder ini di Visual Studio Code.
2. Pasang ekstensi **Live Server** (oleh Ritwick Dey).
3. Klik kanan pada file `index.html` dan pilih **Open with Live Server** (biasanya berjalan di `http://127.0.0.1:5500`).

### Opsi 3: Menggunakan Python HTTP Server
Jika Anda memiliki Python terpasang di komputer:
```bash
# Jalankan di terminal folder proyek:
python -m http.server 3000
```
Buka browser dan akses alamat `http://localhost:3000`.

---

## 📬 Kontak

- **Nama**: Reza Abdul Latif
- **Email**: [Rezaabdullatif50@gmail.com](mailto:Rezaabdullatif50@gmail.com)
- **Institusi**: Teknologi Informasi, Universitas Brawijaya
