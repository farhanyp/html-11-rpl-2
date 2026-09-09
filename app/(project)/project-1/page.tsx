"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import CodeBlock from '@/components/CodeBlock';
import { useState } from 'react';

export default function Project1Page() {
  const [showFullCode, setShowFullCode] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const snippetHtmlCode = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Template Portfolio">
    <title>Nama Anda - Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <!-- Navbar -->
        <nav>
            <div class="logo">[Nama/Logo]</div>
            <div class="nav-links">
                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <!-- ... Tautan Menu ... -->
            </div>
        </nav>

        <!-- ... 200+ baris kode lainnya disembunyikan ... -->
        <!-- Klik tombol "Tampilkan Kode Lengkap" untuk melihat/menyalin semua -->`;
  const fullHtmlCode = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Template Portfolio">
    <title>Nama Anda - Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <!-- Navbar -->
        <nav>
            <div class="logo">[Nama/Logo]</div>
            <div class="nav-links">
                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#experience">Experience</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>

        <!-- 1. Hero Section -->
        <section class="hero" id="home">
            <div class="hero-content">
                <h1>Halo, saya <br><span style="color: var(--accent-color);">[Nama Lengkap Anda]</span></h1>
                <h2>[Profesi/Peran Anda] | [Deskripsi singkat tentang apa yang Anda kerjakan atau passion Anda]</h2>
                <a href="#" class="btn btn-primary">Download CV</a>
            </div>
            <div class="hero-image">
                <!-- Tempat siswa memasukkan tag <img> nantinya -->
                <div class="image-placeholder">
                    [Tempat Foto Profil]
                </div>
            </div>
        </section>

        <!-- 2. Featured Projects -->
        <section id="projects">
            <h2 class="section-title">Featured <span>Projects</span></h2>
            <div class="projects-grid">
                <!-- Project 1 -->
                <div class="project-card">
                    <h3 class="project-title">[Judul Proyek 1]</h3>
                    <p class="project-desc">
                        <strong>Masalah:</strong> [Deskripsikan masalah yang coba diselesaikan dalam 1-2 kalimat]<br>
                        <strong>Solusi:</strong> [Deskripsikan solusi yang Anda buat atau kontribusi Anda]
                    </p>
                    <div class="tech-stack">
                        <span class="tech-tag">[Teknologi 1]</span>
                        <span class="tech-tag">[Teknologi 2]</span>
                        <span class="tech-tag">[Teknologi 3]</span>
                    </div>
                    <div class="project-links">
                        <a href="#" class="btn btn-primary" style="padding: 8px 16px; font-size: 0.9rem;">Live Demo</a>
                        <a href="#" class="btn btn-secondary" style="padding: 8px 16px; font-size: 0.9rem;">Repository</a>
                    </div>
                </div>
                <!-- Project 2 & 3 disembunyikan untuk ringkas, lihat kode asli -->
            </div>
        </section>

        <!-- 3. Tech Stack & Skills -->
        <section id="skills">
            <h2 class="section-title">Tech Stack & <span>Skills</span></h2>
            <div class="skills-container">
                <div class="skill-category">
                    <h3>[Kategori Skill 1]</h3>
                    <ul class="skill-list">
                        <li>[Nama Skill 1]</li>
                        <li>[Nama Skill 2]</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- 4. Experience & Milestones -->
        <section id="experience">
            <h2 class="section-title">Experience & <span>Milestones</span></h2>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>[Jabatan/Posisi Anda]</h3>
                        <span class="timeline-date">[Nama Perusahaan/Organisasi] | [Bulan Tahun] - [Bulan Tahun]</span>
                        <p>[Deskripsi singkat tentang peran Anda secara umum]</p>
                        <ul>
                            <li>[Pencapaian atau tanggung jawab utama 1]</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- 5. About Me -->
        <section id="about">
            <h2 class="section-title">About <span>Me</span></h2>
            <div class="about-content">
                <p>
                    [Tuliskan paragraf pertama tentang diri Anda]
                </p>
            </div>
        </section>

        <!-- 6. Contact & Footer -->
        <section id="contact" style="padding-bottom: 0;">
            <div class="contact">
                <h2 class="section-title" style="margin-bottom: 1rem;">Get in <span>Touch</span></h2>
                <form class="contact-form">
                    <input type="text" placeholder="Nama Anda" required>
                    <input type="email" placeholder="Email Anda" required>
                    <textarea placeholder="Tulis pesan Anda di sini..." required></textarea>
                    <button type="submit" class="btn btn-primary" style="width: 100%;">Kirim Pesan</button>
                </form>
            </div>
        </section>
    </div>

    <footer>
        <p>&copy; 2026 [Nama Anda]. All rights reserved.</p>
    </footer>
</body>
</html>`;

  return (
    <>
      <Headbar
        links={[
          { label: 'Project', href: '/project-1', isActive: true },
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">

            <section className="bg-[#FF49DB] border-4 border-black p-6 md:p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                Project 1: Portfolio HTML
              </h1>
              <p className="text-base md:text-xl font-bold text-black bg-[#FACC15] inline-block px-3 py-2 md:px-4 md:py-2 border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Membedah Struktur Kerangka Website Portfolio Profesional!
              </p>
            </section>

            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-4">
                <span className="material-symbols-outlined text-4xl md:text-5xl text-[#2DD4BF]">code_blocks</span>
                Kode Utama HTML
              </h2>
              <p className="font-bold text-black/80 text-lg leading-relaxed mb-6 bg-[#F4F0EA] p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Di bawah ini adalah <em>blueprint</em> atau kerangka kasar dari sebuah halaman Portofolio modern. Saat ini mungkin belum terlihat cantik karena belum ada CSS-nya, namun secara struktur HTML-nya sudah sangat rapi dan siap pakai! <strong>Silakan salin (copy) kode di bawah ini untuk memulai proyek pertamamu!</strong>
              </p>

              <div className="mb-12 relative">
                {/* Header Action Bar */}
                <div className="bg-[#FF49DB] border-4 border-black border-b-0 p-3 flex justify-between items-center w-full shadow-[4px_0px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                    <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                    <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => {
                        const newShowFullCode = !showFullCode;
                        setShowFullCode(newShowFullCode);
                        if (!newShowFullCode) {
                          // Scroll to the top of the code section when collapsing
                          window.scrollTo({ top: document.getElementById('code-section-html')?.offsetTop || 0, behavior: 'smooth' });
                        }
                      }}
                      className="bg-black text-white px-3 py-1 text-sm font-bold border-2 border-black hover:-translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-base">
                        {showFullCode ? 'visibility_off' : 'visibility'}
                      </span>
                      <span className="hidden sm:inline">{showFullCode ? 'Sembunyikan' : 'Lihat Full Kode'}</span>
                    </button>
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText(fullHtmlCode);
                        setIsCopied(true);
                        setTimeout(() => setIsCopied(false), 2000);
                      }}
                      className="bg-[#2DD4BF] text-black px-3 py-1 text-sm font-bold border-2 border-black hover:-translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-base">
                        {isCopied ? 'check' : 'content_copy'}
                      </span>
                      {isCopied ? 'Tersalin!' : 'Copy Semua'}
                    </button>
                  </div>
                </div>

                {/* Code Area */}
                <div id="code-section-html" className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-black transition-all relative">
                  <CodeBlock language="html" code={showFullCode ? fullHtmlCode : snippetHtmlCode} />
                  
                  {/* Click to expand overlay (only if snippet) */}
                  {!showFullCode && (
                    <div 
                      onClick={() => setShowFullCode(true)}
                      className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 flex items-end justify-center pb-6 md:pb-12 cursor-pointer hover:to-black/100 transition-all"
                    >
                      <button className="bg-[#FACC15] text-black border-4 border-black px-4 py-2 md:px-6 md:py-3 font-black uppercase tracking-wider flex items-center gap-2 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all text-sm md:text-base">
                        <span className="material-symbols-outlined">expand_more</span>
                        Tampilkan Kode Lengkap (210 Baris)
                        <span className="material-symbols-outlined">expand_more</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Tempat Gambar Hasil Akhir */}
              <div className="mb-16 bg-white border-4 border-black p-6 md:p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
                <h2 className="text-2xl md:text-3xl font-black text-black uppercase mb-4 flex justify-center items-center gap-2">
                  <span className="material-symbols-outlined text-4xl text-[#FF49DB]">image</span>
                  Hasil Tampilan (Preview)
                </h2>
                <p className="font-bold text-black/80 mb-6 bg-[#F4F0EA] p-3 border-2 border-black inline-block">
                  Ini adalah gambaran hasil akhir dari HTML di atas jika dibuka di browser <strong>sebelum diberikan CSS</strong>.
                </p>
                <div className="border-4 border-dashed border-black bg-[#F4F0EA] min-h-[400px] flex items-center justify-center relative group overflow-hidden">

                  {/* ===== TEMPAT GAMBAR ===== */}
                  {/* Hapus komentar dan ganti src dengan lokasi gambar yang benar nantinya */}
                  <img src="/project-1/msedge_8KrNhRDZ8C.png" alt="Hasil Render HTML" className="w-full h-auto object-cover relative z-10" />

                </div>
              </div>

              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-4 mt-16">
                <span className="material-symbols-outlined text-4xl md:text-5xl text-[#FACC15]">search_insights</span>
                Membedah Struktur Kode
              </h2>

              <div className="space-y-8">
                {/* Bagian 1 */}
                <div className="bg-[#F4F0EA] border-4 border-black p-6 md:p-8 relative hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="absolute -top-5 -left-5 bg-black text-white w-10 h-10 flex items-center justify-center font-black text-xl border-2 border-white rounded-full">1</div>
                  <h3 className="text-xl md:text-2xl font-black uppercase mb-3 text-[#FF49DB] drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">Meta & Tag HEAD</h3>
                  <p className="font-bold text-black/80 mb-4 leading-relaxed">
                    Bagian <code>&lt;head&gt;</code> adalah otak dari dokumen HTML yang menyimpan pengaturan penting:
                  </p>
                  <ul className="list-disc ml-6 font-bold text-black/70 space-y-3">
                    <li><code className="bg-white px-1 border border-black">meta name="viewport"</code>: Aturan mutlak agar website bisa menyesuaikan diri dengan lebar layar perangkat (responsif di HP/Tablet).</li>
                    <li><code className="bg-white px-1 border border-black">meta name="description"</code>: Deskripsi singkat web yang akan dibaca oleh mesin pencari seperti Google (SEO).</li>
                    <li><code className="bg-white px-1 border border-black">Google Fonts</code>: Meminjam gaya huruf "Outfit" dari server Google agar tipografi web lebih modern dan tebal.</li>
                    <li><code className="bg-white px-1 border border-black">style.css</code>: Tempat nantinya kita meracik CSS ajaib untuk memperindah kerangka HTML ini.</li>
                  </ul>
                </div>

                {/* Bagian 2 */}
                <div className="bg-[#2DD4BF] border-4 border-black p-6 md:p-8 relative hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="absolute -top-5 -left-5 bg-white text-black w-10 h-10 flex items-center justify-center font-black text-xl border-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">2</div>
                  <h3 className="text-xl md:text-2xl font-black uppercase mb-3">Navigasi Utama (Navbar)</h3>
                  <p className="font-bold text-black/80 mb-4 leading-relaxed">
                    Dibungkus dalam semantic tag <code>&lt;nav&gt;</code>, bagian ini dibagi dua: <code>.logo</code> untuk teks/gambar logo, dan <code>.nav-links</code> untuk menu navigasinya.
                  </p>
                  <div className="bg-black text-white p-4 border-2 border-white font-bold mb-4">
                    <strong>Penting: Tanda Pagar (#) pada href</strong><br />
                    Alih-alih memanggil file HTML baru seperti <code>about.html</code>, kita menggunakan Anchor Link (misal: <code>href="#projects"</code>). Ini akan memerintahkan browser untuk langsung meluncur (scroll) ke bagian <code>&lt;section id="projects"&gt;</code> di dalam file yang sama!
                  </div>
                </div>

                {/* Bagian 3 */}
                <div className="bg-[#FACC15] border-4 border-black p-6 md:p-8 relative hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="absolute -top-5 -left-5 bg-black text-white w-10 h-10 flex items-center justify-center font-black text-xl border-2 border-white rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">3</div>
                  <h3 className="text-xl md:text-2xl font-black uppercase mb-3">Seksi Konten & Inline Style</h3>
                  <p className="font-bold text-black/80 leading-relaxed mb-4">
                    Website dipecah menjadi blok-blok menggunakan <code>&lt;section&gt;</code>. Di dalam "Hero Section" (beranda atas), perhatikan kode ini:
                    <br /><br />
                    <code className="bg-white px-2 py-1 border border-black inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">&lt;span style="color: var(--accent-color);"&gt;</code>
                  </p>
                  <p className="font-bold text-black/80 leading-relaxed">
                    Itu adalah <strong>Inline CSS</strong> yang digabungkan dengan <strong>CSS Variable</strong>. Nantinya, saat kita mendefinisikan <code>--accent-color: biru;</code> di file CSS, nama kamu akan otomatis berubah menjadi warna biru!
                  </p>
                </div>

                {/* Bagian 4 */}
                <div className="bg-white border-4 border-black p-6 md:p-8 relative hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="absolute -top-5 -left-5 bg-[#FF49DB] text-white w-10 h-10 flex items-center justify-center font-black text-xl border-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">4</div>
                  <h3 className="text-xl md:text-2xl font-black uppercase mb-3">Struktur Kartu (Card) Project</h3>
                  <p className="font-bold text-black/80 leading-relaxed">
                    Pada seksi "Featured Projects", terdapat <code>&lt;div class="projects-grid"&gt;</code> yang bertugas menjadi wadah (kontainer). Di dalamnya terdapat beberapa anak berupa <code>&lt;div class="project-card"&gt;</code>.
                    <br /><br />
                    Pola desain "Pembungkus & Anak" ini disiapkan agar nantinya saat kita belajar <strong>CSS Flexbox/Grid</strong>, kita bisa dengan mudah menyulap kartu-kartu yang berjejer ke bawah ini menjadi grid (kotak-kotak) menyamping dengan sangat rapi!
                  </p>
                </div>

                {/* Bagian 5 */}
                <div className="bg-black text-white border-4 border-black p-6 md:p-8 relative hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="absolute -top-5 -left-5 bg-[#2DD4BF] text-black w-10 h-10 flex items-center justify-center font-black text-xl border-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">5</div>
                  <h3 className="text-xl md:text-2xl font-black uppercase mb-3 text-[#FACC15]">Formulir Kontak & SVG Ikon</h3>
                  <p className="font-bold text-white/80 leading-relaxed mb-4">
                    Di seksi terakhir, terdapat formulir menggunakan tag <code>&lt;form&gt;</code>. Inputnya disetel sebagai <code>required</code> (wajib isi) sehingga pengguna tidak bisa menekan tombol kirim jika masih kosong.
                  </p>
                  <p className="font-bold text-white/80 leading-relaxed">
                    Sedangkan di bagian <code>&lt;footer&gt;</code>, kamu akan menemukan banyak angka yang aneh (<code>&lt;path d="M16 8a6..."&gt;</code>). Itu adalah <strong>SVG (Scalable Vector Graphics)</strong>.
                    Itu adalah cara memasukkan ikon (seperti logo LinkedIn dan GitHub) secara murni menggunakan kode matematika pembentuk garis, sehingga ukurannya tidak akan pernah pecah (blur) sekecil atau sebesar apapun ia di-zoom!
                  </p>
                </div>

              </div>
            </section>

            <div className="h-12 w-full"></div>
          </div>
        </main>
      </div>
    </>
  );
}
