"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import CodeBlock from '@/components/CodeBlock';
import { useState } from 'react';

export default function DomFunctionPage() {
  const [isStarted, setIsStarted] = useState(false);
  const [isCopiedHtml, setIsCopiedHtml] = useState(false);
  const [isCopiedCss, setIsCopiedCss] = useState(false);
  const [isCopiedJs, setIsCopiedJs] = useState(false);

  const htmlCode = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aplikasi Sapa Pengunjung</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="kartu">
        <h1>Halo, Kawan! 👋</h1>
        <p>Tekan tombol di bawah untuk mendapatkan sapaan spesial dariku.</p>
        <button id="btn-sapa">Sapa Saya!</button>
    </div>
    
    <!-- Memanggil otak JS -->
    <script src="script.js"></script>
</body>
</html>`;

  const cssCode = `/* Reset dasar */
body {
    background-color: #EAF4ED;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: Arial, sans-serif;
    margin: 0;
}

/* Kotak Kontainer bergaya Brutalism */
.kartu {
    background-color: white;
    padding: 30px;
    border: 4px solid black;
    box-shadow: 8px 8px 0px 0px black;
    text-align: center;
    max-width: 400px;
}

/* Tombol Interaktif */
button {
    background-color: #2A835F;
    color: white;
    font-weight: bold;
    padding: 12px 24px;
    border: 4px solid black;
    box-shadow: 4px 4px 0px 0px black;
    cursor: pointer;
    font-size: 16px;
    margin-top: 15px;
    transition: all 0.2s;
}

/* Efek saat mouse mengambang di atas tombol */
button:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px 0px black;
}`;

  const jsCode = `// 1. DOM: JS menugaskan agen mencari tombol
const tombolSapa = document.getElementById('btn-sapa');

// 2. FUNCTION: Kita buat dan simpan resep tindakannya
function berikanSapaan(event) {
    // Variabel ini berada di dalam Local Scope!
    // Hanya bisa dipakai di dalam kurung kurawal ini.
    let pesanSapaan = "Halo! Selamat datang di dunia JavaScript yang sangat menyenangkan! 🚀"; 
    
    // Memunculkan pop-up alert berisi teks dari variabel
    alert(pesanSapaan);
}

// 3. EVENT LISTENER: Sang Telinga bersiap...
// HATI-HATI: Jangan panggil dengan () di sini!
// Cukup berikan nama fungsinya saja.
tombolSapa.addEventListener('click', berikanSapaan);`;

  return (
    <>
      <Headbar
        links={[
          { label: 'Materi JS', href: '/dom-function', isActive: true },
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-canvas relative" style={{ backgroundImage: 'radial-gradient(var(--color-outline) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">

            {/* Header & Hero Section */}
            <section className="bg-jade-vibrant text-black border-4 border-black p-6 md:p-12 shadow-neo-xl text-center relative overflow-hidden transform rotate-1 hover:rotate-0 transition-transform">
              <div className="absolute top-0 left-0 bg-black text-white font-black px-4 py-1 border-b-4 border-r-4 border-black shadow-neo-sm z-20">
                MODUL 2
              </div>
              <div className="absolute top-2 md:top-4 left-2 md:left-4">
                <span className="material-symbols-outlined text-6xl md:text-[80px] opacity-20">account_tree</span>
              </div>
              <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4">
                <span className="material-symbols-outlined text-6xl md:text-[80px] opacity-20">hearing</span>
              </div>
              <div className="relative z-10">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-black tracking-tighter uppercase mt-6 mb-4 md:mb-6 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">
                  DOM & Function
                </h1>
                <p className="text-base md:text-xl font-bold text-white bg-pine-deep inline-block px-4 py-2 md:px-6 md:py-3 border-4 border-black mb-6 md:mb-8 shadow-neo-md uppercase tracking-tight">
                  Berkomunikasi dengan HTML & Merapikan Kode!
                </p>
                <div>
                  <button
                    onClick={() => setIsStarted(!isStarted)}
                    className="bg-white text-black font-black text-lg md:text-2xl px-6 py-4 md:px-10 md:py-5 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all uppercase tracking-widest cursor-pointer"
                  >
                    {isStarted ? "MEMANGGIL DOM... 📡" : "MULAI BELAJAR SEKARANG"}
                  </button>
                </div>
              </div>
            </section>

            {/* Section 1: Teori Dasar */}
            <section className="bg-white border-4 border-black shadow-neo-xl p-6 md:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-mint-soft text-black w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">1</span>
                Senjata Utama JavaScript
              </h2>

              <p className="text-lg md:text-xl font-bold text-forest-teal leading-relaxed mb-8 bg-mint-canvas p-6 border-4 border-black shadow-neo-sm">
                Bagaimana cara otak (JS) memerintah tulang (HTML) untuk bergerak? Kita menggunakan kombinasi dari <strong>DOM</strong>, <strong>Event Listener</strong>, dan <strong>Function</strong>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* DOM */}
                <div className="bg-black border-4 border-black p-6 shadow-[6px_6px_0px_rgba(45,212,191,1)] hover:-translate-y-2 transition-transform flex flex-col text-white relative">
                  <div className="absolute top-4 right-4 text-jade-vibrant opacity-30">
                    <span className="material-symbols-outlined text-7xl">account_tree</span>
                  </div>
                  <h3 className="text-2xl font-black uppercase mb-3 tracking-widest text-jade-vibrant z-10 border-b-2 border-jade-vibrant pb-2 inline-block self-start">DOM</h3>
                  <p className="text-sm font-black mb-2 uppercase tracking-wider text-mint-soft z-10">Document Object Model</p>
                  <p className="text-base font-bold z-10 leading-relaxed text-gray-200">
                    Cara JavaScript mengenali struktur halaman HTML. Anggap saja ini adalah <strong>Radar</strong> atau <strong>Peta</strong>. JS menggunakannya untuk menunjuk elemen yang spesifik.
                  </p>
                  <div className="mt-4 z-10">
                    <code className="bg-white text-black px-2 py-1 font-black text-sm block mb-2 border-2 border-white">document.getElementById('btn')</code>
                    <code className="bg-white text-black px-2 py-1 font-black text-sm block border-2 border-white">document.querySelector('.kartu')</code>
                  </div>
                </div>

                {/* Event Listener */}
                <div className="bg-pine-deep border-4 border-black p-6 shadow-[6px_6px_0px_rgba(255,255,255,1)] hover:-translate-y-2 transition-transform flex flex-col text-white relative">
                  <div className="absolute top-4 right-4 text-white opacity-20">
                    <span className="material-symbols-outlined text-7xl">hearing</span>
                  </div>
                  <h3 className="text-2xl font-black uppercase mb-3 tracking-widest text-white z-10 border-b-2 border-white pb-2 inline-block self-start">Event Listener</h3>
                  <p className="text-sm font-black mb-2 uppercase tracking-wider text-mint-soft z-10">Telinga Pendengar</p>
                  <p className="text-base font-bold z-10 leading-relaxed text-gray-100">
                    Ini adalah <strong>'Telinga'</strong> JS yang ditugaskan untuk mendengarkan aksi user. Apakah tombol itu "diklik"? Apakah form "disubmit"? Apakah mouse "digeser"? JS selalu siaga!
                  </p>
                  <div className="mt-4 z-10">
                    <code className="bg-black text-white px-2 py-1 font-black text-sm block mb-2 border-2 border-white">.addEventListener('click', ...)</code>
                    <code className="bg-black text-white px-2 py-1 font-black text-sm block border-2 border-white">.addEventListener('submit', ...)</code>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Function & Scope */}
            <section className="bg-pine-deep text-white border-4 border-black shadow-neo-xl p-6 md:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white uppercase mb-8 md:mb-10 border-b-4 border-white pb-4 flex items-center gap-3 md:gap-4 tracking-tighter drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                <span className="bg-white text-black w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] flex-shrink-0 text-2xl md:text-4xl">2</span>
                Function & Scope
              </h2>

              <div className="space-y-10">
                {/* Function */}
                <div className="flex flex-col lg:flex-row gap-6 bg-white text-black border-4 border-black p-6 md:p-8 shadow-neo-sm transform rotate-1 hover:rotate-0 transition-transform">
                  <div className="lg:w-1/3 flex flex-col justify-center items-center text-center border-b-4 lg:border-b-0 lg:border-r-4 border-black pb-6 lg:pb-0 lg:pr-6">
                    <span className="material-symbols-outlined text-[80px] text-jade-vibrant mb-2">menu_book</span>
                    <h3 className="text-3xl font-black uppercase tracking-widest">Function</h3>
                  </div>
                  <div className="lg:w-2/3 flex flex-col justify-center">
                    <p className="text-lg font-bold leading-relaxed">
                      <strong>Function</strong> ibarat sebuah <strong>"Buku Resep Masakan"</strong>. Kita bisa menulis ratusan instruksi (kode) di dalamnya, memberikannya sebuah NAMA, lalu membungkusnya.
                    </p>
                    <p className="text-lg font-bold leading-relaxed mt-4 bg-mint-canvas p-4 border-l-4 border-forest-teal">
                      Sifat uniknya: Instruksi di dalam resep itu <strong>tidak akan berjalan sendirinya</strong> sampai kita dengan sengaja <strong>"memanggil"</strong> nama resep tersebut! Ini membuat kode kita jadi sangat terorganisir dan bisa dipakai berulang kali.
                    </p>
                  </div>
                </div>

                {/* Scope */}
                <div className="flex flex-col lg:flex-row gap-6 bg-black text-white border-4 border-white p-6 md:p-8 shadow-neo-sm transform -rotate-1 hover:rotate-0 transition-transform">
                  <div className="lg:w-1/3 flex flex-col justify-center items-center text-center border-b-4 lg:border-b-0 lg:border-r-4 border-white pb-6 lg:pb-0 lg:pr-6">
                    <span className="material-symbols-outlined text-[80px] text-mint-soft mb-2">vpn_key</span>
                    <h3 className="text-3xl font-black uppercase tracking-widest text-mint-soft">Scope</h3>
                  </div>
                  <div className="lg:w-2/3 flex flex-col justify-center">
                    <p className="text-lg font-bold leading-relaxed">
                      <strong>Scope</strong> berarti Batas Wilayah. Jika kamu membuat Variabel di dalam kurung kurawal <code className="bg-white text-black px-1">{"{ }"}</code> milik sebuah Function, maka variabel itu hanya "hidup" dan bisa diakses di dalam kurung itu saja.
                    </p>
                    <p className="text-lg font-bold leading-relaxed mt-4 bg-forest-teal p-4 border-l-4 border-jade-vibrant">
                      Ini disebut <strong>Local Scope</strong>. Artinya rahasia dapur tidak boleh bocor keluar!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Praktik Lengkap Sapa Pengunjung */}
            <section className="bg-canvas border-4 border-black shadow-neo-xl p-6 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-jade-vibrant rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>
              
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter relative z-10">
                <span className="bg-jade-vibrant text-black w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">3</span>
                Praktik: Aplikasi Sapa
              </h2>

              <div className="bg-white border-4 border-black p-6 md:p-8 mb-10 shadow-neo-md relative z-10">
                <p className="text-xl font-bold text-forest-teal mb-4 uppercase tracking-widest flex items-center gap-2">
                  <span className="material-symbols-outlined text-jade-vibrant text-3xl">build</span> Target Misi Kita:
                </p>
                <p className="text-lg font-bold leading-relaxed">
                  Kita akan membuat sebuah aplikasi mini super simpel: <strong>Tombol Sapaan!</strong> Silakan *copy-paste* tiga file di bawah ini ke *text editor* milikmu (seperti VS Code) untuk melihat hasilnya secara langsung di browser.
                </p>
              </div>

              <div className="space-y-12 relative z-10">
                
                {/* HTML Block */}
                <div className="relative">
                    {/* Header Action Bar */}
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
                                    navigator.clipboard.writeText(htmlCode);
                                    setIsCopiedHtml(true);
                                    setTimeout(() => setIsCopiedHtml(false), 2000);
                                }}
                                className="bg-mint-soft text-black px-3 py-2 md:px-4 text-sm md:text-base font-black uppercase tracking-widest border-2 border-white hover:-translate-y-1 hover:shadow-neo-sm transition-all flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined text-xl">
                                    {isCopiedHtml ? 'check' : 'content_copy'}
                                </span>
                                {isCopiedHtml ? 'Tersalin!' : 'Copy'}
                            </button>
                        </div>
                    </div>
                    {/* Code Area */}
                    <div className="border-4 border-black shadow-neo-lg bg-black transition-all relative">
                        <CodeBlock language="html" code={htmlCode} />
                    </div>
                </div>

                {/* CSS Block */}
                <div className="relative">
                    {/* Header Action Bar */}
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
                                    navigator.clipboard.writeText(cssCode);
                                    setIsCopiedCss(true);
                                    setTimeout(() => setIsCopiedCss(false), 2000);
                                }}
                                className="bg-white text-black px-3 py-2 md:px-4 text-sm md:text-base font-black uppercase tracking-widest border-2 border-black hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(255,255,255,1)] transition-all flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined text-xl">
                                    {isCopiedCss ? 'check' : 'content_copy'}
                                </span>
                                {isCopiedCss ? 'Tersalin!' : 'Copy'}
                            </button>
                        </div>
                    </div>
                    {/* Code Area */}
                    <div className="border-4 border-black shadow-[6px_6px_0px_rgba(255,255,255,1)] bg-black transition-all relative">
                        <CodeBlock language="css" code={cssCode} />
                    </div>
                </div>

                {/* JS Block */}
                <div className="relative">
                    {/* Header Action Bar */}
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
                                    navigator.clipboard.writeText(jsCode);
                                    setIsCopiedJs(true);
                                    setTimeout(() => setIsCopiedJs(false), 2000);
                                }}
                                className="bg-black text-white px-3 py-2 md:px-4 text-sm md:text-base font-black uppercase tracking-widest border-2 border-black hover:-translate-y-1 hover:shadow-neo-sm transition-all flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined text-xl">
                                    {isCopiedJs ? 'check' : 'content_copy'}
                                </span>
                                {isCopiedJs ? 'Tersalin!' : 'Copy'}
                            </button>
                        </div>
                    </div>
                    {/* Code Area */}
                    <div className="border-4 border-black shadow-[6px_6px_0px_rgba(45,212,191,1)] bg-black transition-all relative">
                        <CodeBlock language="javascript" code={jsCode} />
                    </div>
                </div>

                <div className="bg-mint-canvas text-black border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row gap-6 items-center">
                  <span className="material-symbols-outlined text-[60px] md:text-[80px]">warning</span>
                  <div>
                    <h4 className="text-2xl font-black uppercase mb-2 tracking-widest">Hati-Hati Pemanggilan!</h4>
                    <p className="text-lg font-bold leading-relaxed">
                      Perhatikan baris paling bawah pada <code>script.js</code>. Kita memanggil nama <code>berikanSapaan</code> <strong>tanpa tanda kurung ()</strong>. Jika kita menuliskannya dengan <code>berikanSapaan()</code>, maka fungsi tersebut akan tereksekusi paksa seketika sebelum tombol sempat diklik! Kita hanya menempelkan <em>namanya</em> saja ke Event Listener.
                    </p>
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
                Lanjut ke Modul 3 <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}
