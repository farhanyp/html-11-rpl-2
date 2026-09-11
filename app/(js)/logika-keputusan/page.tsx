"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import CodeBlock from '@/components/CodeBlock';
import { useState } from 'react';

export default function LogikaKeputusanPage() {
  const [isStarted, setIsStarted] = useState(false);
  
  // States for Section 2 (Dark Mode)
  const [isCopiedHtmlDark, setIsCopiedHtmlDark] = useState(false);
  const [isCopiedCssDark, setIsCopiedCssDark] = useState(false);
  const [isCopiedJsDark, setIsCopiedJsDark] = useState(false);

  // States for Section 3 (Form Validasi)
  const [isCopiedHtmlForm, setIsCopiedHtmlForm] = useState(false);
  const [isCopiedCssForm, setIsCopiedCssForm] = useState(false);
  const [isCopiedJsForm, setIsCopiedJsForm] = useState(false);

  /* ================== KODE UNTUK SECTION 2 (DARK MODE) ================== */
  const htmlDarkMode = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Website Mode Gelap</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="kontainer">
        <h1 id="judul">Selamat Datang! 🌞</h1>
        <p>Website ini sangat cerah. Apakah matamu silau? Coba ubah temanya!</p>
        <button id="btn-tema" class="btn">🌙 Mode Gelap</button>
    </div>
    
    <!-- Memanggil Script JS -->
    <script src="script.js"></script>
</body>
</html>`;

  const cssDarkMode = `/* 1. VARIABEL WARNA (Default: Terang) */
:root {
    --bg-color: #f0f4f8;
    --text-color: #333333;
    --box-bg: #ffffff;
}

/* 2. OVERRIDE WARNA SAAT MODE GELAP AKTIF */
body.dark-mode {
    --bg-color: #121212;
    --text-color: #ffffff;
    --box-bg: #1e1e1e;
}

/* 3. STYLING ELEMEN (Menerapkan Variabel) */
body {
    background-color: var(--bg-color);
    color: var(--text-color);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: Arial, sans-serif;
    margin: 0;
    transition: background-color 0.3s, color 0.3s; /* Efek transisi halus */
}

.kontainer {
    background-color: var(--box-bg);
    padding: 40px;
    border: 4px solid #000;
    box-shadow: 8px 8px 0px #000;
    text-align: center;
    transition: background-color 0.3s;
}

.btn {
    background-color: #2A835F;
    color: white;
    font-weight: bold;
    padding: 12px 24px;
    border: 4px solid black;
    box-shadow: 4px 4px 0px black;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
}

.btn:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px black;
}`;

  const jsDarkMode = `// 1. Mencari tombol dan elemen <body>
const tombolTema = document.getElementById('btn-tema');
const judul = document.getElementById('judul');
const bodyWebsite = document.body; // Tag body bisa langsung diakses!

// 2. Memberikan Event Listener pada tombol
tombolTema.addEventListener('click', function(event) {
    
    // Logika If-Else: Cek apakah body SUDAH memiliki class 'dark-mode'
    if (bodyWebsite.classList.contains('dark-mode')) {
        // JIKA IYA (sedang gelap):
        // 1. Hapus class 'dark-mode' (Kembali terang)
        bodyWebsite.classList.remove('dark-mode');
        // 2. Ubah teks tombol dan judul
        tombolTema.textContent = "🌙 Mode Gelap";
        judul.textContent = "Selamat Datang! 🌞";
        
    } else {
        // JIKA TIDAK (sedang terang):
        // 1. Tambahkan class 'dark-mode' (Ubah jadi gelap)
        bodyWebsite.classList.add('dark-mode');
        // 2. Ubah teks tombol dan judul
        tombolTema.textContent = "☀️ Mode Terang";
        judul.textContent = "Mode Malam Aktif 🌙";
    }
    
});`;

  /* ================== KODE UNTUK SECTION 3 (FORM VALIDASI) ================== */
  const htmlFormValidasi = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validasi Kontak</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="kontainer">
        <h2>Kirim Pesan Rahasia 🕵️</h2>
        <!-- Ini adalah form kita -->
        <form class="contact-form">
            <input type="text" id="input-nama" placeholder="Siapa namamu?" />
            <textarea id="input-pesan" placeholder="Tulis pesan rahasiamu di sini..."></textarea>
            <button type="submit" class="btn">Kirim Pesan!</button>
        </form>
    </div>
    
    <script src="script.js"></script>
</body>
</html>`;

  const cssFormValidasi = `/* Reset dasar */
body {
    background-color: #ffe4e1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: 'Courier New', Courier, monospace;
    margin: 0;
}

.kontainer {
    background-color: white;
    padding: 30px;
    border: 4px solid black;
    box-shadow: 8px 8px 0px black;
    text-align: center;
    width: 300px;
}

/* Mengatur tata letak form agar berbaris ke bawah */
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
}

input, textarea {
    padding: 10px;
    border: 4px solid black;
    font-family: inherit;
    font-size: 14px;
    font-weight: bold;
}

textarea {
    resize: none;
    height: 80px;
}

input:focus, textarea:focus {
    outline: none;
    background-color: #eaf4ed;
}

.btn {
    background-color: #092328;
    color: white;
    font-weight: bold;
    padding: 12px;
    border: 4px solid black;
    box-shadow: 4px 4px 0px black;
    cursor: pointer;
    font-size: 16px;
    text-transform: uppercase;
}

.btn:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px black;
}`;

  const jsFormValidasi = `// 1. Mencari elemen form dan input-inputnya
const formKontak = document.querySelector('.contact-form');
const inputNama = document.getElementById('input-nama');
const inputPesan = document.getElementById('input-pesan');

// 2. Memberikan Event Listener 'submit' pada FORM (bukan pada tombol)
formKontak.addEventListener('submit', function(event) {
    
    // Mencegah halaman refresh otomatis saat form dikirim
    event.preventDefault(); 
    
    // Logika OR (||): Jika nama kosong ATAU pesan kosong
    if (inputNama.value === "" || inputPesan.value === "") {
        // Hentikan proses dan beri peringatan
        alert("Peringatan: Nama dan Pesan tidak boleh kosong, agen!");
    } else {
        // Jika keduanya terisi
        alert(\`Pesan berhasil dikirim dari: \${inputNama.value}\`);
        
        // Mengosongkan form kembali otomatis
        formKontak.reset(); 
    }
});`;


  return (
    <>
      <Headbar
        links={[
          { label: 'Materi JS', href: '/logika-keputusan', isActive: true },
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-canvas relative" style={{ backgroundImage: 'radial-gradient(var(--color-outline) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">

            {/* Header & Hero Section */}
            <section className="bg-pine-deep text-white border-4 border-black p-6 md:p-12 shadow-neo-xl text-center relative overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform">
              <div className="absolute top-0 left-0 bg-jade-vibrant text-black font-black px-4 py-1 border-b-4 border-r-4 border-black shadow-neo-sm z-20">
                MODUL 3
              </div>
              <div className="absolute top-2 md:top-4 left-2 md:left-4">
                <span className="material-symbols-outlined text-6xl md:text-[80px] opacity-20 text-white">alt_route</span>
              </div>
              <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4">
                <span className="material-symbols-outlined text-6xl md:text-[80px] opacity-20 text-white">rule</span>
              </div>
              <div className="relative z-10">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mt-6 mb-4 md:mb-6 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                  Logika Keputusan
                </h1>
                <p className="text-base md:text-xl font-bold text-black bg-mint-soft inline-block px-4 py-2 md:px-6 md:py-3 border-4 border-black mb-6 md:mb-8 shadow-neo-md uppercase tracking-tight">
                  Membuat Website Pintar yang Bisa Memilih Tindakan!
                </p>
                <div>
                  <button
                    onClick={() => setIsStarted(!isStarted)}
                    className="bg-white text-black font-black text-lg md:text-2xl px-6 py-4 md:px-10 md:py-5 border-4 border-black shadow-[6px_6px_0px_0px_rgba(45,212,191,1)] md:shadow-[10px_10px_0px_0px_rgba(45,212,191,1)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_0px_rgba(45,212,191,1)] md:hover:shadow-[14px_14px_0px_0px_rgba(45,212,191,1)] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all uppercase tracking-widest cursor-pointer"
                  >
                    {isStarted ? "MESIN LOGIKA AKTIF... ⚙️" : "MULAI BELAJAR SEKARANG"}
                  </button>
                </div>
              </div>
            </section>

            {/* Section 1: Teori Logika Dasar */}
            <section className="bg-white border-4 border-black shadow-neo-xl p-6 md:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-mint-soft text-black w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">1</span>
                Kekuatan Memilih (Conditionals)
              </h2>

              <p className="text-lg md:text-xl font-bold text-forest-teal leading-relaxed mb-8 bg-mint-canvas p-6 border-4 border-black shadow-neo-sm">
                Tanpa logika keputusan, website hanya akan merespons dengan cara yang sama terus-menerus (seperti robot bodoh). Dengan <strong>Conditionals</strong> (Pengkondisian), JavaScript bisa berpikir layaknya manusia: <em>"Jika situasinya begini, lakukan ini. Jika kondisinya begitu, lakukan hal lain!"</em>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Boolean */}
                <div className="bg-black text-white border-4 border-black p-6 shadow-neo-md hover:-translate-y-2 transition-transform">
                  <h3 className="text-2xl font-black uppercase mb-3 text-jade-vibrant tracking-widest flex items-center gap-2">
                    <span className="material-symbols-outlined">toggle_on</span> Tipe Data Boolean
                  </h3>
                  <p className="text-base font-bold text-gray-200">Hanya memiliki dua nilai mutlak di dunia pemrograman: <code className="bg-white text-black px-1">true</code> (benar) atau <code className="bg-white text-black px-1">false</code> (salah). Ibarat saklar lampu, hanya ada nyala atau mati.</p>
                </div>

                {/* Operator Pembanding */}
                <div className="bg-pine-deep text-white border-4 border-black p-6 shadow-neo-md hover:-translate-y-2 transition-transform">
                  <h3 className="text-2xl font-black uppercase mb-3 text-mint-soft tracking-widest flex items-center gap-2">
                    <span className="material-symbols-outlined">balance</span> Pembanding
                  </h3>
                  <ul className="text-base font-bold text-gray-200 space-y-2">
                    <li><code className="bg-black px-1 text-jade-vibrant">===</code> : Sama persis (identik).</li>
                    <li><code className="bg-black px-1 text-red-400">!==</code> : Tidak sama dengan.</li>
                    <li><code className="bg-black px-1">{">"}</code> / <code className="bg-black px-1">{"<"}</code> : Lebih besar / lebih kecil.</li>
                  </ul>
                </div>

                {/* Operator Logika */}
                <div className="bg-jade-vibrant text-black border-4 border-black p-6 shadow-neo-md hover:-translate-y-2 transition-transform">
                  <h3 className="text-2xl font-black uppercase mb-3 tracking-widest flex items-center gap-2">
                    <span className="material-symbols-outlined">hub</span> Operator Logika
                  </h3>
                  <ul className="text-base font-bold space-y-2">
                    <li><code className="bg-white px-1">&&</code> (DAN) : Semua kondisi <strong>wajib</strong> benar.</li>
                    <li><code className="bg-white px-1">||</code> (ATAU) : Cukup <strong>salah satu</strong> kondisi yang benar.</li>
                  </ul>
                </div>

                {/* If-Else */}
                <div className="bg-white text-black border-4 border-black p-6 shadow-[6px_6px_0px_rgba(45,212,191,1)] hover:-translate-y-2 transition-transform">
                  <h3 className="text-2xl font-black uppercase mb-3 text-forest-teal tracking-widest flex items-center gap-2">
                    <span className="material-symbols-outlined">alt_route</span> If-Else Statement
                  </h3>
                  <p className="text-base font-bold text-gray-700">Rumus utama pengambilan keputusan:</p>
                  <div className="bg-canvas p-3 border-2 border-black mt-2 font-black italic">
                    "JIKA [kondisi terpenuhi], maka lakukan [A]. JIKA TIDAK (else), lakukan [B]."
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Praktik Dark Mode */}
            <section className="bg-canvas border-4 border-black shadow-neo-xl p-6 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-black rounded-full mix-blend-multiply filter blur-3xl opacity-10 pointer-events-none"></div>
              
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter relative z-10">
                <span className="bg-black text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">2</span>
                Praktik A: Dark Mode Toggle
              </h2>

              <div className="bg-white border-4 border-black p-6 md:p-8 mb-10 shadow-neo-md relative z-10">
                <p className="text-xl font-bold text-forest-teal mb-4 uppercase tracking-widest flex items-center gap-2">
                  <span className="material-symbols-outlined text-jade-vibrant text-3xl">dark_mode</span> Target Misi Kita:
                </p>
                <p className="text-lg font-bold leading-relaxed">
                  Membuat fitur super populer: <strong>Tombol Pengubah Tema (Mode Gelap)</strong>. Saat pengguna menekan tombol, JS akan mengecek tema saat ini. Jika sedang Terang, ubah jadi Gelap. Jika sedang Gelap, kembalikan jadi Terang!
                </p>
                <p className="text-lg font-bold leading-relaxed mt-4 bg-mint-canvas p-4 border-l-4 border-black">
                  Silakan <em>copy-paste</em> ketiga file di bawah ini ke editor kodemu (seperti VS Code) untuk melihat keajaibannya secara langsung!
                </p>
              </div>

              <div className="space-y-12 relative z-10">
                
                {/* HTML Block (Dark Mode) */}
                <div className="relative">
                    <div className="bg-black text-white border-4 border-black border-b-0 p-3 md:p-4 flex justify-between items-center w-full shadow-neo-sm">
                        <div className="flex gap-2">
                            <span className="font-black tracking-widest uppercase flex items-center gap-2">
                              <span className="material-symbols-outlined text-jade-vibrant">html</span>
                              index.html
                            </span>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(htmlDarkMode);
                                    setIsCopiedHtmlDark(true);
                                    setTimeout(() => setIsCopiedHtmlDark(false), 2000);
                                }}
                                className="bg-mint-soft text-black px-3 py-2 md:px-4 text-sm md:text-base font-black uppercase tracking-widest border-2 border-white hover:-translate-y-1 hover:shadow-neo-sm transition-all flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined text-xl">
                                    {isCopiedHtmlDark ? 'check' : 'content_copy'}
                                </span>
                                {isCopiedHtmlDark ? 'Tersalin!' : 'Copy'}
                            </button>
                        </div>
                    </div>
                    <div className="border-4 border-black shadow-neo-lg bg-black transition-all relative">
                        <CodeBlock language="html" code={htmlDarkMode} />
                    </div>
                </div>

                {/* CSS Block (Dark Mode) */}
                <div className="relative">
                    <div className="bg-pine-deep text-white border-4 border-black border-b-0 p-3 md:p-4 flex justify-between items-center w-full shadow-neo-sm">
                        <div className="flex gap-2">
                            <span className="font-black tracking-widest uppercase flex items-center gap-2">
                              <span className="material-symbols-outlined text-mint-soft">css</span>
                              style.css
                            </span>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(cssDarkMode);
                                    setIsCopiedCssDark(true);
                                    setTimeout(() => setIsCopiedCssDark(false), 2000);
                                }}
                                className="bg-white text-black px-3 py-2 md:px-4 text-sm md:text-base font-black uppercase tracking-widest border-2 border-black hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(255,255,255,1)] transition-all flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined text-xl">
                                    {isCopiedCssDark ? 'check' : 'content_copy'}
                                </span>
                                {isCopiedCssDark ? 'Tersalin!' : 'Copy'}
                            </button>
                        </div>
                    </div>
                    <div className="border-4 border-black shadow-[6px_6px_0px_rgba(255,255,255,1)] bg-black transition-all relative">
                        <CodeBlock language="css" code={cssDarkMode} />
                    </div>
                </div>

                {/* JS Block (Dark Mode) */}
                <div className="relative">
                    <div className="bg-jade-vibrant text-black border-4 border-black border-b-0 p-3 md:p-4 flex justify-between items-center w-full shadow-neo-sm">
                        <div className="flex gap-2">
                            <span className="font-black tracking-widest uppercase flex items-center gap-2">
                              <span className="material-symbols-outlined text-black">javascript</span>
                              script.js
                            </span>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(jsDarkMode);
                                    setIsCopiedJsDark(true);
                                    setTimeout(() => setIsCopiedJsDark(false), 2000);
                                }}
                                className="bg-black text-white px-3 py-2 md:px-4 text-sm md:text-base font-black uppercase tracking-widest border-2 border-black hover:-translate-y-1 hover:shadow-neo-sm transition-all flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined text-xl">
                                    {isCopiedJsDark ? 'check' : 'content_copy'}
                                </span>
                                {isCopiedJsDark ? 'Tersalin!' : 'Copy'}
                            </button>
                        </div>
                    </div>
                    <div className="border-4 border-black shadow-[6px_6px_0px_rgba(45,212,191,1)] bg-black transition-all relative">
                        <CodeBlock language="javascript" code={jsDarkMode} />
                    </div>
                </div>

              </div>

            </section>

            {/* Section 3: Praktik Form Validasi */}
            <section className="bg-pine-deep text-white border-4 border-black shadow-neo-xl p-6 md:p-12 relative overflow-hidden">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white uppercase mb-8 md:mb-10 border-b-4 border-white pb-4 flex items-center gap-3 md:gap-4 tracking-tighter relative z-10 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                <span className="bg-white text-black w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] flex-shrink-0 text-2xl md:text-4xl">3</span>
                Praktik B: Validasi Kontak
              </h2>

              <div className="bg-black text-white border-4 border-white p-6 md:p-8 mb-10 shadow-[6px_6px_0px_rgba(45,212,191,1)] relative z-10">
                <p className="text-xl font-bold text-mint-soft mb-4 uppercase tracking-widest flex items-center gap-2">
                  <span className="material-symbols-outlined text-mint-soft text-3xl">security</span> Target Misi Kita:
                </p>
                <p className="text-lg font-bold leading-relaxed text-gray-200">
                  Formulir di website tidak boleh dikirim dalam keadaan kosong! Kita menggunakan Event Listener tipe <code>'submit'</code> pada Form dan logika <strong>OR (||)</strong> untuk mengecek. <em>"JIKA nama kosong ATAU pesan kosong, maka hentikan pengiriman dan beri peringatan!"</em>
                </p>
                <p className="text-lg font-bold leading-relaxed mt-4 bg-forest-teal text-white p-4 border-l-4 border-mint-soft">
                  Sama seperti Praktik A, silakan <em>copy-paste</em> ketiga file ini untuk mencoba sendiri bagaimana formulir "marah" jika tidak diisi lengkap!
                </p>
              </div>

              <div className="space-y-12 relative z-10">
                
                {/* HTML Block (Form Validasi) */}
                <div className="relative">
                    <div className="bg-white text-black border-4 border-black border-b-0 p-3 md:p-4 flex justify-between items-center w-full shadow-neo-sm">
                        <div className="flex gap-2">
                            <span className="font-black tracking-widest uppercase flex items-center gap-2">
                              <span className="material-symbols-outlined text-jade-vibrant">html</span>
                              index.html
                            </span>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(htmlFormValidasi);
                                    setIsCopiedHtmlForm(true);
                                    setTimeout(() => setIsCopiedHtmlForm(false), 2000);
                                }}
                                className="bg-black text-white px-3 py-2 md:px-4 text-sm md:text-base font-black uppercase tracking-widest border-2 border-black hover:-translate-y-1 hover:shadow-neo-sm transition-all flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined text-xl">
                                    {isCopiedHtmlForm ? 'check' : 'content_copy'}
                                </span>
                                {isCopiedHtmlForm ? 'Tersalin!' : 'Copy'}
                            </button>
                        </div>
                    </div>
                    <div className="border-4 border-black shadow-[6px_6px_0px_rgba(255,255,255,1)] bg-black transition-all relative">
                        <CodeBlock language="html" code={htmlFormValidasi} />
                    </div>
                </div>

                {/* CSS Block (Form Validasi) */}
                <div className="relative">
                    <div className="bg-mint-canvas text-black border-4 border-black border-b-0 p-3 md:p-4 flex justify-between items-center w-full shadow-neo-sm">
                        <div className="flex gap-2">
                            <span className="font-black tracking-widest uppercase flex items-center gap-2">
                              <span className="material-symbols-outlined text-pine-deep">css</span>
                              style.css
                            </span>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(cssFormValidasi);
                                    setIsCopiedCssForm(true);
                                    setTimeout(() => setIsCopiedCssForm(false), 2000);
                                }}
                                className="bg-pine-deep text-white px-3 py-2 md:px-4 text-sm md:text-base font-black uppercase tracking-widest border-2 border-black hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined text-xl">
                                    {isCopiedCssForm ? 'check' : 'content_copy'}
                                </span>
                                {isCopiedCssForm ? 'Tersalin!' : 'Copy'}
                            </button>
                        </div>
                    </div>
                    <div className="border-4 border-black shadow-[6px_6px_0px_rgba(139,187,146,1)] bg-black transition-all relative">
                        <CodeBlock language="css" code={cssFormValidasi} />
                    </div>
                </div>

                {/* JS Block (Form Validasi) */}
                <div className="relative">
                    <div className="bg-jade-vibrant text-black border-4 border-black border-b-0 p-3 md:p-4 flex justify-between items-center w-full shadow-neo-sm">
                        <div className="flex gap-2">
                            <span className="font-black tracking-widest uppercase flex items-center gap-2">
                              <span className="material-symbols-outlined text-black">javascript</span>
                              script.js
                            </span>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(jsFormValidasi);
                                    setIsCopiedJsForm(true);
                                    setTimeout(() => setIsCopiedJsForm(false), 2000);
                                }}
                                className="bg-black text-white px-3 py-2 md:px-4 text-sm md:text-base font-black uppercase tracking-widest border-2 border-black hover:-translate-y-1 hover:shadow-neo-sm transition-all flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined text-xl">
                                    {isCopiedJsForm ? 'check' : 'content_copy'}
                                </span>
                                {isCopiedJsForm ? 'Tersalin!' : 'Copy'}
                            </button>
                        </div>
                    </div>
                    <div className="border-4 border-black shadow-[6px_6px_0px_rgba(45,212,191,1)] bg-black transition-all relative">
                        <CodeBlock language="javascript" code={jsFormValidasi} />
                    </div>
                </div>

              </div>

            </section>

            {/* Footer / Penutup */}
            <div className="mt-16 mb-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t-4 border-black pt-8">
              <p className="font-black text-sm md:text-base uppercase tracking-widest text-forest-teal bg-white border-4 border-black px-4 py-2 shadow-neo-sm text-center md:text-left">
                © 2026 FARHAN YUDHA PRATAMA
              </p>
              <button className="bg-black text-white font-black uppercase text-sm md:text-base px-6 py-3 border-4 border-black shadow-[4px_4px_0px_rgba(45,212,191,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(45,212,191,1)] active:translate-y-[2px] active:translate-x-[2px] active:shadow-none transition-all flex items-center gap-2">
                Lanjut ke Modul 4 <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}
