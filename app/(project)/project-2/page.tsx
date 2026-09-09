"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import CodeBlock from '@/components/CodeBlock';
import { useState } from 'react';

export default function Project2Page() {
  const [showFullCode, setShowFullCode] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const snippetCssCode = `:root {
    --bg-color: #f3f4f6;
    --surface-color: #ffffff;
    --text-primary: #1f2937;
    --text-secondary: #4b5563;
    
    /* ... 430+ baris kode lainnya disembunyikan ... */
    /* Klik tombol "Tampilkan Kode Lengkap" untuk melihat/menyalin semua */
}`;
  const fullCssCode = `:root {
    --bg-color: #f3f4f6;
    --surface-color: #ffffff;
    --text-primary: #1f2937;
    --text-secondary: #4b5563;
    --accent-color: #3b82f6;
    --card-hover-bg: #f9fafb;
    --border-color: #d1d5db;
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Outfit', sans-serif;
    scroll-behavior: smooth;
}

body {
    background-color: var(--bg-color);
    color: var(--text-primary);
    line-height: 1.6;
}

a {
    text-decoration: none;
    color: inherit;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}

/* Navbar */
nav {
    padding: 16px 24px;
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 24px;
    background: var(--surface-color);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    z-index: 100;
}

.logo {
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--accent-color);
}

.nav-links {
    display: flex;
    gap: 2rem;
}

.nav-links a {
    font-size: 1rem;
    font-weight: 400;
    transition: var(--transition);
}

.nav-links a:hover {
    color: var(--accent-color);
}

/* Buttons */
.btn {
    display: inline-block;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    border: none;
    outline: none;
    text-align: center;
}

.btn-primary {
    background: var(--accent-color);
    color: white;
    border: 1px solid var(--accent-color);
}

.btn-primary:hover {
    opacity: 0.9;
}

.btn-secondary {
    background: transparent;
    border: 1px solid var(--accent-color);
    color: var(--accent-color);
}

.btn-secondary:hover {
    background: var(--bg-color);
}

/* Typography */
section {
    padding: 100px 0;
}

.section-title {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    text-align: center;
    font-weight: 700;
}

.section-title span {
    color: var(--accent-color);
}

/* 1. Hero Section */
.hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 80vh;
    gap: 2rem;
}

.hero-content {
    flex: 1;
}

.hero h1 {
    font-size: 3.5rem;
    line-height: 1.2;
    margin-bottom: 1rem;
}

.hero h2 {
    font-size: 1.5rem;
    color: var(--text-secondary);
    font-weight: 400;
    margin-bottom: 2rem;
}

.hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
}

.hero-image img {
    width: 100%;
    max-width: 400px;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    background-color: var(--surface-color);
}

.image-placeholder {
    width: 100%;
    max-width: 400px;
    aspect-ratio: 1 / 1;
    border-radius: 8px;
    border: 2px dashed var(--border-color);
    background-color: var(--bg-color);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    font-weight: 600;
}

/* 2. Featured Projects */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.project-card {
    background: var(--surface-color);
    border-radius: 8px;
    padding: 2rem;
    transition: var(--transition);
    border: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
}

.project-card:hover {
    transform: translateY(-5px);
    background: var(--card-hover-bg);
    border-color: var(--accent-color);
}

.project-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.project-desc {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
    flex-grow: 1;
}

.tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

.tech-tag {
    background: var(--bg-color);
    border: 1px solid var(--border-color);
    color: var(--text-secondary);
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
}

.project-links {
    display: flex;
    gap: 1rem;
}

/* 3. Tech Stack & Skills */
.skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.skill-category {
    background: var(--surface-color);
    padding: 2rem;
    border-radius: 8px;
    border: 1px solid var(--border-color);
}

.skill-category h3 {
    margin-bottom: 1.5rem;
    color: var(--accent-color);
    font-size: 1.25rem;
}

.skill-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.skill-list li {
    color: var(--text-secondary);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.skill-list li::before {
    content: "•";
    color: var(--accent-color);
    font-weight: bold;
}

/* 4. Experience & Milestones */
.timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
}

.timeline::after {
    content: '';
    position: absolute;
    width: 2px;
    background: var(--border-color);
    top: 0;
    bottom: 0;
    left: 20px;
    margin-left: -1px;
}

.timeline-item {
    padding: 10px 40px;
    position: relative;
    width: 100%;
    margin-bottom: 2rem;
}

.timeline-item::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    right: auto;
    background-color: var(--surface-color);
    border: 4px solid var(--accent-color);
    top: 15px;
    border-radius: 50%;
    z-index: 1;
    left: 12px;
}

.timeline-content {
    background: var(--surface-color);
    padding: 24px;
    border-radius: 8px;
    border: 1px solid var(--border-color);
}

.timeline-content h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
}

.timeline-date {
    color: var(--accent-color);
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    display: inline-block;
}

.timeline-content p {
    color: var(--text-secondary);
    font-size: 0.95rem;
}

.timeline-content ul {
    margin-top: 1rem;
    padding-left: 1.5rem;
    color: var(--text-secondary);
    font-size: 0.95rem;
}

.timeline-content li {
    margin-bottom: 0.5rem;
}

/* 5. About Me */
.about-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

.about-content p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
}

/* 6. Contact & Footer */
.contact {
    background: var(--surface-color);
    border-radius: 8px;
    border: 1px solid var(--border-color);
    padding: 4rem 2rem;
    text-align: center;
    margin-bottom: 4rem;
}

.contact p {
    color: var(--text-secondary);
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.contact-form {
    max-width: 500px;
    margin: 0 auto 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    background: var(--bg-color);
    border: 1px solid var(--border-color);
    color: var(--text-primary);
    font-family: inherit;
}

.contact-form textarea {
    resize: vertical;
    min-height: 120px;
}

.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: var(--accent-color);
}

footer {
    text-align: center;
    padding: 2rem 0;
    border-top: 1px solid var(--border-color);
    color: var(--text-secondary);
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
}

.social-links a {
    font-size: 1.5rem;
    transition: var(--transition);
}

.social-links a:hover {
    color: var(--accent-color);
    transform: translateY(-2px);
}

@media (max-width: 768px) {
    .hero {
        flex-direction: column-reverse;
        text-align: center;
        padding-top: 2rem;
    }

    .hero h1 {
        font-size: 2.5rem;
    }

    .nav-links {
        display: none;
    }
}`;

  return (
    <>
      <Headbar
        links={[
          { label: 'Project 2', href: '/project-2', isActive: true },
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">

            <section className="bg-black border-4 border-black p-6 md:p-10 shadow-[4px_4px_0px_0px_rgba(45,212,191,1)] md:shadow-[8px_8px_0px_0px_rgba(45,212,191,1)] text-center relative overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4 md:mb-6">
                Project 2: Portfolio CSS
              </h1>
              <p className="text-base md:text-xl font-bold text-black bg-[#2DD4BF] inline-block px-3 py-2 md:px-4 md:py-2 border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                Menyulap Kerangka HTML Menjadi Desain Web Berkelas Profesional!
              </p>
            </section>

            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              
              <div className="bg-[#FACC15] border-4 border-black p-6 mb-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-black uppercase mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined">warning</span> Instruksi Pengerjaan
                </h3>
                <p className="font-bold text-black/80">
                  Pada <strong>Project 1</strong>, kita telah membangun kerangka tulangnya. Sekarang di <strong>Project 2</strong> ini, tugasmu adalah membuat file bernama <code className="bg-white px-1 border border-black">style.css</code> di folder proyekmu, lalu <strong>salin/ketik ulang</strong> seluruh kode CSS di bawah ini! Jangan sampai ada tanda kurung kurawal <code>{"{}"}</code> atau titik koma <code>;</code> yang terlewat ya!
                </p>
              </div>

              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-4">
                <span className="material-symbols-outlined text-4xl md:text-5xl text-[#FF49DB]">brush</span>
                Kode Utama CSS
              </h2>
              
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
                          window.scrollTo({ top: document.getElementById('code-section')?.offsetTop || 0, behavior: 'smooth' });
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
                        navigator.clipboard.writeText(fullCssCode);
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
                <div id="code-section" className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-black transition-all relative">
                  <CodeBlock language="css" code={showFullCode ? fullCssCode : snippetCssCode} />
                  
                  {/* Click to expand overlay (only if snippet) */}
                  {!showFullCode && (
                    <div 
                      onClick={() => setShowFullCode(true)}
                      className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 flex items-end justify-center pb-6 md:pb-12 cursor-pointer hover:to-black/100 transition-all"
                    >
                      <button className="bg-[#FACC15] text-black border-4 border-black px-4 py-2 md:px-6 md:py-3 font-black uppercase tracking-wider flex items-center gap-2 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all text-sm md:text-base">
                        <span className="material-symbols-outlined">expand_more</span>
                        Tampilkan Kode Lengkap (446 Baris)
                        <span className="material-symbols-outlined">expand_more</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-4 mt-16">
                <span className="material-symbols-outlined text-4xl md:text-5xl text-[#2DD4BF]">plumbing</span>
                Membedah Rumus CSS
              </h2>

              <p className="font-bold text-black/80 text-lg leading-relaxed mb-8 bg-[#F4F0EA] p-4 border-2 border-black">
                Apa sih yang sebenarnya dilakukan oleh kode ratusan baris di atas? Mari kita bongkar satu per satu rahasia arsitekturnya!
              </p>

              <div className="space-y-8">
                {/* Bedah 1 */}
                <div className="bg-[#1e1e1e] text-white border-4 border-black p-6 md:p-8 relative hover:translate-x-2 transition-transform shadow-[4px_4px_0px_0px_#FACC15]">
                  <h3 className="text-xl md:text-2xl font-black uppercase mb-3 text-[#FACC15]">1. Variabel Global (:root) & Reset (*)</h3>
                  <p className="font-bold text-white/80 leading-relaxed mb-4">
                    Di awal baris, kita menggunakan selektor <code>:root</code> untuk menyimpan palet warna seperti <code>--bg-color</code> dan <code>--accent-color</code>. Kenapa? Agar kalau klien minta ganti warna tema, kita cukup ubah 1 baris ini saja, sisanya akan mengikuti otomatis!
                  </p>
                  <p className="font-bold text-white/80 leading-relaxed">
                    Setelah itu ada bintang <code>*</code> yang bertugas me-reset <em>margin</em> dan <em>padding</em> bawaan browser menjadi 0, dan mengubah <code>box-sizing: border-box</code> agar ukuran elemen tidak melar berantakan saat diberi padding.
                  </p>
                </div>

                {/* Bedah 2 */}
                <div className="bg-white text-black border-4 border-black p-6 md:p-8 relative hover:translate-x-2 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-xl md:text-2xl font-black uppercase mb-3 text-[#FF49DB]">2. Sticky Navbar & Flexbox</h3>
                  <p className="font-bold text-black/80 leading-relaxed">
                    Lihat *class* <code>.nav</code>. Di sana tertulis <code>position: sticky; top: 24px;</code>. Rumus ini membuat Navbar akan "menempel" di atas layar saat kamu melakukan *scroll* ke bawah!
                    <br/><br/>
                    Di sana juga ada <code>display: flex; justify-content: space-between;</code> yang bertugas menyebar Logo ke ujung kiri, dan kumpulan Tautan Menu ke ujung kanan dengan otomatis.
                  </p>
                </div>

                {/* Bedah 3 */}
                <div className="bg-[#2DD4BF] text-black border-4 border-black p-6 md:p-8 relative hover:translate-x-2 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-xl md:text-2xl font-black uppercase mb-3">3. Senjata Rahasia CSS Grid</h3>
                  <p className="font-bold text-black/80 leading-relaxed">
                    Lihatlah class <code>.projects-grid</code>. Ini adalah ilmu tingkat lanjut! Kode <code>grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));</code> adalah rumus ajaib.
                    <br/><br/>
                    <strong>Artinya:</strong> "Buatkan saya beberapa kolom. Lebar tiap kolom jangan sampai kurang dari <code>300px</code>. Jika layar membesar, penuhi ruang yang tersisa (<code>1fr</code>). Jika layar menyempit, pindahkan sisanya ke baris bawah otomatis tanpa <em>Media Query</em>!"
                  </p>
                </div>

                {/* Bedah 4 */}
                <div className="bg-[#FACC15] text-black border-4 border-black p-6 md:p-8 relative hover:translate-x-2 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-xl md:text-2xl font-black uppercase mb-3">4. Sihir Timeline (Pseudo-elements)</h3>
                  <p className="font-bold text-black/80 leading-relaxed mb-4">
                    Bagaimana cara membuat garis vertikal dan bulatan pada bagian *Experience* tanpa menambah HTML? Gunakan <strong>Pseudo-elements</strong>!
                  </p>
                  <ul className="list-disc ml-6 font-bold text-black/70 space-y-2">
                    <li><code>.timeline::after</code> digunakan untuk menggambar sebuah "garis panjang" setebal 2px dari atas ke bawah.</li>
                    <li><code>.timeline-item::after</code> digunakan untuk menggambar "bulatan" putih dengan pinggiran berwarna biru (<code>border: 4px solid var(--accent-color)</code>) di tiap anak tangganya.</li>
                  </ul>
                </div>

                {/* Bedah 5 */}
                <div className="bg-black text-white border-4 border-black p-6 md:p-8 relative hover:translate-x-2 transition-transform shadow-[4px_4px_0px_0px_#2DD4BF]">
                  <h3 className="text-xl md:text-2xl font-black uppercase mb-3 text-[#2DD4BF]">5. Responsive (Media Queries)</h3>
                  <p className="font-bold text-white/80 leading-relaxed">
                    Di baris paling bawah, terdapat <code>@media (max-width: 768px)</code>. Jika ukuran layar pengguna lebih kecil dari 768px (ukuran layar HP):
                    <br/>1. <code>.nav-links</code> (menu kanan) akan di-<code>display: none;</code> agar tidak berjejalan.
                    <br/>2. <code>.hero</code> diubah menjadi <code>flex-direction: column-reverse;</code>. Artinya gambar akan dipindah ke atas, dan teks di pindah ke bawah agar lebih mudah dibaca saat dipegang vertikal!
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
