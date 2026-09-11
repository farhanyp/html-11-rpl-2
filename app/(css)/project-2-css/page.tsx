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

                <main className="md:ml-[280px] w-full p-4 md:p-10 bg-canvas relative" style={{ backgroundImage: 'radial-gradient(var(--color-outline) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
                    <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">

                        <section className="bg-black border-4 border-black p-6 md:p-12 shadow-[6px_6px_0px_rgba(45,212,191,1)] text-center relative overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform">
                            <div className="absolute top-0 left-0 bg-jade-vibrant text-black font-black px-4 py-1 border-b-4 border-r-4 border-black shadow-neo-sm z-20">
                                PROJECT 2
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mt-6 mb-4 md:mb-6">
                                Portfolio CSS
                            </h1>
                            <p className="text-base md:text-xl font-bold text-black bg-mint-soft inline-block px-4 py-2 md:px-6 md:py-3 border-4 border-black mb-4 md:mb-6 shadow-[4px_4px_0px_rgba(255,255,255,1)] uppercase tracking-tight">
                                Menyulap Kerangka Tengkorak HTML Menjadi Desain Web Sekelas Profesional Industri!
                            </p>
                        </section>

                        <section className="bg-white border-4 border-black shadow-neo-xl p-6 md:p-12">

                            <div className="bg-pine-deep text-white border-4 border-black p-6 md:p-8 mb-16 shadow-neo-md hover:-translate-y-2 hover:shadow-neo-lg transition-transform">
                                <h3 className="text-xl md:text-2xl font-black uppercase mb-4 flex items-center gap-3 text-jade-vibrant tracking-widest border-b-4 border-white pb-3">
                                    <span className="material-symbols-outlined text-4xl">warning</span> Instruksi Pengerjaan
                                </h3>
                                <p className="font-bold text-mint-soft text-base md:text-lg leading-relaxed">
                                    Pada pertarungan <strong>Project 1</strong> sebelumnya, kita telah membangun kerangka tulangnya. Sekarang di <strong>Project 2</strong> ini, tugas utamamu adalah memahat membuat file baru bernama <code className="bg-black text-white px-2 py-1 font-black uppercase tracking-widest border-2 border-white shadow-[2px_2px_0px_rgba(255,255,255,1)]">style.css</code> di dalam folder utama proyekmu, lalu <strong className="text-white uppercase underline decoration-2">salin total atau ketik ulang</strong> seluruh baris kode CSS di bawah ini! Jangan sampai ada satu titik koma (<code>;</code>) atau kurung kurawal (<code>{"{}"}</code>) pun yang luput dari pandanganmu!
                                </p>
                            </div>

                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                                <span className="material-symbols-outlined text-4xl md:text-5xl text-white bg-black p-2 border-4 border-black shadow-neo-sm flex-shrink-0">brush</span>
                                Master Code CSS
                            </h2>

                            <div className="mb-16 relative">
                                {/* Header Action Bar */}
                                <div className="bg-jade-vibrant border-4 border-black border-b-0 p-3 md:p-4 flex justify-between items-center w-full shadow-neo-sm">
                                    <div className="flex gap-2">
                                        <div className="w-4 h-4 rounded-full bg-white border-2 border-black"></div>
                                        <div className="w-4 h-4 rounded-full bg-white border-2 border-black"></div>
                                        <div className="w-4 h-4 rounded-full bg-white border-2 border-black"></div>
                                    </div>
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => {
                                                const newShowFullCode = !showFullCode;
                                                setShowFullCode(newShowFullCode);
                                                if (!newShowFullCode) {
                                                    // Scroll to the top of the code section when collapsing
                                                    window.scrollTo({ top: document.getElementById('code-section')?.offsetTop || 0, behavior: 'smooth' });
                                                }
                                            }}
                                            className="bg-black text-white px-3 py-2 md:px-4 text-sm md:text-base font-black uppercase tracking-widest border-2 border-black hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(255,255,255,1)] transition-all flex items-center gap-2"
                                        >
                                            <span className="material-symbols-outlined text-xl">
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
                                            className="bg-mint-soft text-black px-3 py-2 md:px-4 text-sm md:text-base font-black uppercase tracking-widest border-2 border-black hover:-translate-y-1 hover:shadow-neo-sm transition-all flex items-center gap-2"
                                        >
                                            <span className="material-symbols-outlined text-xl">
                                                {isCopied ? 'check' : 'content_copy'}
                                            </span>
                                            {isCopied ? 'Tersalin!' : 'Copy Semua'}
                                        </button>
                                    </div>
                                </div>

                                {/* Code Area */}
                                <div id="code-section" className="border-4 border-black shadow-neo-lg bg-black transition-all relative">
                                    <CodeBlock language="css" code={showFullCode ? fullCssCode : snippetCssCode} />

                                    {/* Click to expand overlay (only if snippet) */}
                                    {!showFullCode && (
                                        <div
                                            onClick={() => setShowFullCode(true)}
                                            className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 flex items-end justify-center pb-6 md:pb-12 cursor-pointer hover:to-black/100 transition-all"
                                        >
                                            <button className="bg-pine-deep text-white border-4 border-black px-4 py-3 md:px-8 md:py-4 font-black uppercase tracking-widest flex items-center gap-2 hover:-translate-y-2 hover:shadow-[4px_4px_0px_rgba(255,255,255,1)] transition-all text-sm md:text-lg">
                                                <span className="material-symbols-outlined text-2xl">expand_more</span>
                                                Tampilkan Kode Lengkap (446 Baris)
                                                <span className="material-symbols-outlined text-2xl">expand_more</span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Tempat Gambar Hasil Akhir */}
                            <div className="mb-16 bg-canvas border-4 border-black p-6 md:p-12 shadow-neo-xl text-center relative overflow-hidden transform rotate-1 hover:rotate-0 transition-transform">
                                <h2 className="text-2xl md:text-3xl font-black text-black uppercase mb-6 flex justify-center items-center gap-3">
                                    <span className="material-symbols-outlined text-4xl text-black bg-white p-2 border-4 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">image</span>
                                    Hasil Desain CSS (Preview Akhir)
                                </h2>
                                <p className="font-bold text-forest-teal text-base md:text-lg mb-8 bg-white p-4 border-4 border-black inline-block shadow-neo-sm">
                                    Ini adalah puncak keajaiban CSS sejati! Beginilah rupa wajah menawan website portofolio tersebut <strong>setelah file sakti CSS ini dikawinkan dihubungkan</strong> ke dalam ragam HTML murni sebelumnya.
                                </p>
                                <div className="border-4 border-black border-dashed bg-mint-canvas min-h-[400px] flex items-center justify-center relative group overflow-hidden shadow-inner p-4">
                                    <img src="/project-2/msedge_yR6wKPDQyH.png" alt="Hasil Akhir CSS" className="w-full h-auto object-cover relative z-10 border-4 border-black shadow-neo-md" />
                                </div>
                            </div>

                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-12 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 mt-20 tracking-tighter">
                                <span className="material-symbols-outlined text-4xl md:text-5xl text-black bg-mint-soft p-2 border-4 border-black shadow-neo-sm flex-shrink-0">plumbing</span>
                                Bedah Forensik CSS
                            </h2>

                            <p className="font-bold text-forest-teal text-lg md:text-xl leading-relaxed mb-10 bg-mint-canvas p-4 border-4 border-black shadow-neo-sm">
                                Apa sih yang sebenarnya dilakukan di balik layar oleh barisan ratusan kode CSS mematikan di atas? Mari kita bedah operasi forensik satu per satu rahasia arsitekturnya!
                            </p>

                            <div className="space-y-10">
                                {/* Bedah 1 */}
                                <div className="bg-black text-white border-4 border-black p-6 md:p-10 relative hover:-translate-y-2 hover:shadow-[6px_6px_0px_rgba(45,212,191,1)] transition-transform shadow-[4px_4px_0px_rgba(45,212,191,1)] flex flex-col md:flex-row gap-6 items-start">
                                    <div className="flex-shrink-0 bg-white text-black w-14 h-14 flex items-center justify-center font-black text-3xl border-4 border-black rounded-none shadow-[4px_4px_0px_rgba(255,255,255,1)] -mt-2 md:-mt-4 -ml-2 md:-ml-4">1</div>
                                    <div>
                                        <h3 className="text-xl md:text-3xl font-black uppercase mb-4 text-mint-soft tracking-widest border-b-4 border-mint-soft pb-2 inline-block">Variabel Global (:root) & Reset (*)</h3>
                                        <p className="font-bold text-white/80 text-base md:text-lg leading-relaxed mb-6">
                                            Tepat di gerbang awal baris, kita menanam selektor <code>:root</code> untuk mendepositokan kepingan palet warna paten seperti <code>--bg-color</code> dan <code>--accent-color</code>. Kenapa harus repot? Agar jika besok bos klien tiba-tiba marah minta ganti tema merah neon, kamu <strong>cukup sentuh ubah 1 baris variabel ini saja</strong>, maka ratusan elemen lainnya akan sujud patuh mengikuti otomatis!
                                        </p>
                                        <p className="font-bold text-white/80 text-base md:text-lg leading-relaxed bg-pine-deep p-4 border-4 border-white shadow-[4px_4px_0px_rgba(255,255,255,1)] transform -rotate-1">
                                            Tak lupa setelah itu senjata sapu jagad bintang <code>*</code> dikerahkan bertugas <strong>me-reset luluh lantakkan <em>margin</em> dan <em>padding</em> egois bawaan browser</strong> menjadi titik 0 mutlak, dan memaksa <code>box-sizing: border-box</code> agar ukuran bangunan elemen tidak melar berantakan meledak saat disuntik dengan padding tambahan.
                                        </p>
                                    </div>
                                </div>

                                {/* Bedah 2 */}
                                <div className="bg-canvas border-4 border-black p-6 md:p-10 relative hover:-translate-y-2 hover:shadow-neo-lg transition-transform shadow-neo-md flex flex-col md:flex-row gap-6 items-start">
                                    <div className="flex-shrink-0 bg-black text-white w-14 h-14 flex items-center justify-center font-black text-3xl border-4 border-white rounded-none shadow-[4px_4px_0px_rgba(0,0,0,1)] -mt-2 md:-mt-4 -ml-2 md:-ml-4">2</div>
                                    <div>
                                        <h3 className="text-xl md:text-3xl font-black uppercase mb-4 text-black tracking-widest border-b-4 border-black pb-2 inline-block">Sticky Navbar & Flexbox</h3>
                                        <p className="font-bold text-forest-teal text-base md:text-lg leading-relaxed mb-4">
                                            Selidiki area kompartemen <code>.nav</code>. Di sana bersarang <code>position: sticky; top: 24px;</code>. Perintah militer ini membuat bilah Navbar akan menolak pergi dan terus <strong>menempel abadi di atas layar plafon</strong> mengikuti kemanapun pengunjung melakukan gulir <em>scroll</em> ke ujung bawah neraka!
                                        </p>
                                        <p className="font-bold text-black text-base md:text-lg leading-relaxed bg-white p-4 border-4 border-black shadow-neo-sm">
                                            Lalu terdapat operasi <code>display: flex; justify-content: space-between;</code> yang dengan elegan bertugas menyebar membanting ujung Logo ke titik tembok kiri, dan menendang gerombolan barisan Tautan Menu ke titik pojok kanan dengan sendirinya.
                                        </p>
                                    </div>
                                </div>

                                {/* Bedah 3 */}
                                <div className="bg-pine-deep text-white border-4 border-black p-6 md:p-10 relative hover:-translate-y-2 hover:shadow-neo-lg transition-transform shadow-neo-md flex flex-col md:flex-row gap-6 items-start">
                                    <div className="flex-shrink-0 bg-jade-vibrant text-black w-14 h-14 flex items-center justify-center font-black text-3xl border-4 border-black rounded-none shadow-[4px_4px_0px_rgba(255,255,255,1)] -mt-2 md:-mt-4 -ml-2 md:-ml-4">3</div>
                                    <div>
                                        <h3 className="text-xl md:text-3xl font-black uppercase mb-4 text-white tracking-widest border-b-4 border-white pb-2 inline-block drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Kekuatan Murni CSS Grid</h3>
                                        <p className="font-bold text-mint-soft text-base md:text-lg leading-relaxed mb-6">
                                            Lihatlah tajam kode mesin <code>.projects-grid</code>. Ini adalah ilmu sihir level atas industri! Kode <code>grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));</code> adalah baris rumus matematis yang paling berbahaya.
                                        </p>
                                        <div className="bg-black text-white p-6 border-4 border-white font-bold mb-2 shadow-[4px_4px_0px_rgba(255,255,255,1)] transform rotate-1">
                                            <strong className="text-xl uppercase text-jade-vibrant block mb-2 tracking-widest">ARTINYA TERJEMAHAN:</strong>
                                            "Tolong buatkan saya beberapa belah kolom. Namun perhatikan baik-baik: Lebar fisik tiap kolomnya haram hukumnya menyusut kurang dari <code>300px</code>. Jika layar mendadak ditarik membesar, penuhi rakus seluruh sisa ruang kosongnya (<code>1fr</code>). Namun jika layar dicekik menyempit hingga kritis, pindahkan lempar elemen sisanya ke baris bawah dengan otomatis <strong className="text-white underline">TANPA</strong> campur tangan Media Query!"
                                        </div>
                                    </div>
                                </div>

                                {/* Bedah 4 */}
                                <div className="bg-jade-vibrant text-black border-4 border-black p-6 md:p-10 relative hover:-translate-y-2 hover:shadow-neo-lg transition-transform shadow-neo-md flex flex-col md:flex-row gap-6 items-start">
                                    <div className="flex-shrink-0 bg-white text-black w-14 h-14 flex items-center justify-center font-black text-3xl border-4 border-black rounded-none shadow-[4px_4px_0px_rgba(0,0,0,1)] -mt-2 md:-mt-4 -ml-2 md:-ml-4">4</div>
                                    <div>
                                        <h3 className="text-xl md:text-3xl font-black uppercase mb-4 text-black tracking-widest border-b-4 border-black pb-2 inline-block drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">Sihir Timeline (Pseudo)</h3>
                                        <p className="font-bold text-black text-base md:text-lg leading-relaxed mb-6 bg-white p-4 border-4 border-black shadow-neo-sm">
                                            Lalu bagaimana caranya dukun CSS menciptakan membuat garis vertikal pedang panjang dan bulatan dot presisi pada rute sejarah bagian *Experience* di atas tanpa perlu repot mencemari menambah tag fisik lagi di kerangka HTML? Panggil ilusi setan <strong>Pseudo-elements</strong>!
                                        </p>
                                        <ul className="space-y-4 font-bold text-black text-base md:text-lg">
                                            <li className="flex items-start gap-3 bg-canvas p-4 border-4 border-black shadow-neo-sm hover:translate-x-2 transition-transform">
                                                <span className="text-2xl mt-1">🗡️</span>
                                                <span>Siluman <code className="bg-black text-white px-2 py-1 uppercase font-black tracking-widest border-2 border-black">.timeline::after</code> ditugaskan eksklusif untuk menggambar bayangan sebuah "garis panjang" rel kokoh setebal 2px lurus dari kutub atas ke bawah.</span>
                                            </li>
                                            <li className="flex items-start gap-3 bg-canvas p-4 border-4 border-black shadow-neo-sm hover:translate-x-2 transition-transform">
                                                <span className="text-2xl mt-1">⚪</span>
                                                <span>Lalu siluman <code className="bg-black text-white px-2 py-1 uppercase font-black tracking-widest border-2 border-black">.timeline-item::after</code> diperintahkan menggambar patung "bulatan" putih dengan pinggiran cat cincin berwarna biru murni (<code className="bg-white text-black border-2 border-black px-1 mt-1 inline-block">border: 4px solid var(--accent-color)</code>) di tiap ujung anak tangganya layaknya pos penjagaan sejarah.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Bedah 5 */}
                                <div className="bg-black text-white border-4 border-black p-6 md:p-10 relative hover:-translate-y-2 hover:shadow-neo-lg transition-transform shadow-[6px_6px_0px_rgba(255,255,255,1)] flex flex-col md:flex-row gap-6 items-start">
                                    <div className="flex-shrink-0 bg-mint-soft text-black w-14 h-14 flex items-center justify-center font-black text-3xl border-4 border-black rounded-none shadow-[4px_4px_0px_rgba(0,0,0,1)] -mt-2 md:-mt-4 -ml-2 md:-ml-4">5</div>
                                    <div>
                                        <h3 className="text-xl md:text-3xl font-black uppercase mb-4 text-white tracking-widest border-b-4 border-white pb-2 inline-block">Aturan Responsif (Media Queries)</h3>
                                        <p className="font-bold text-white/80 text-base md:text-lg leading-relaxed mb-6">
                                            Di garis baris ujung paling bawah jurang, bertengger benteng komando <code>@media (max-width: 768px)</code>. Jika ukuran radar layar monitor pengguna terpantau lebih kecil dari sempit 768px (terdeteksi HP genggam biasa), maka sirene protokol diaktifkan:
                                        </p>
                                        <div className="space-y-4">
                                            <div className="bg-pine-deep p-4 border-4 border-white shadow-[4px_4px_0px_rgba(255,255,255,1)] transform -rotate-1">
                                                <strong className="text-xl uppercase block mb-1 text-jade-vibrant">PROTOKOL 1: PEMUSNAHAN MENU BAR</strong>
                                                <p className="text-white/90">Kompi <code>.nav-links</code> (menu teks berjejer kanan) akan seketika ditembak mati dihilangkan paksa dengan <code>display: none;</code> agar layar tidak berjejalan sempit hancur.</p>
                                            </div>
                                            <div className="bg-pine-deep p-4 border-4 border-white shadow-[4px_4px_0px_rgba(255,255,255,1)] transform rotate-1">
                                                <strong className="text-xl uppercase block mb-1 text-jade-vibrant">PROTOKOL 2: REPOSISI VERTICAL HERO</strong>
                                                <p className="text-white/90">Blok teritorial <code>.hero</code> formasinya disabotase diubah menjadi <code>flex-direction: column-reverse;</code>. Ini manipulasi brutal yang memutar balik posisi, menarik gambar hero ke plafon atas, dan membanting menendang teks sambutan ke posisi bawahnya agar lebih pas ergonomis mutlak saat HP digenggam secara vertikal (Portrait)!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>

                        {/* Footer / Penutup */}
                        <div className="mt-16 mb-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t-4 border-black pt-8">
                            <p className="font-black text-sm md:text-base uppercase tracking-widest text-forest-teal bg-white border-4 border-black px-4 py-2 shadow-neo-sm text-center md:text-left">
                                © 2026 FARHAN YUDHA PRATAMA
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
