"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

export default function PengenalanHTMLPage() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/pengenalan-html', isActive: true },
          { label: 'Soal Teori', href: '/pengenalan-html/soal', isActive: false }
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">

            {/* Header & Hero Section */}
            <section className="bg-[#FF49DB] border-4 border-black p-6 md:p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
              <div className="absolute top-2 md:top-4 left-2 md:left-4">
                <span className="material-symbols-outlined text-6xl md:text-[80px] opacity-20">html</span>
              </div>
              <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4">
                <span className="material-symbols-outlined text-6xl md:text-[80px] opacity-20">code</span>
              </div>
              <div className="relative z-10">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">
                  Berkenalan dengan HTML
                </h1>
                <p className="text-base md:text-xl font-bold text-black bg-white inline-block px-3 py-2 md:px-4 md:py-2 border-2 md:border-4 border-black mb-6 md:mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  Belajar pondasi utama dari setiap halaman web dengan cara yang seru dan mudah dipahami.
                </p>
                <div>
                  <button
                    onClick={() => setIsStarted(!isStarted)}
                    className="bg-[#FACC15] text-black font-black text-lg md:text-2xl px-6 py-4 md:px-10 md:py-5 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] md:active:translate-x-[6px] md:active:translate-y-[6px] active:shadow-none transition-all uppercase"
                  >
                    {isStarted ? "Sedang Belajar..." : "Mulai Belajar Sekarang"}
                  </button>
                </div>
              </div>
            </section>

            {/* Section 1: Analogi Dunia Nyata */}
            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#2DD4BF] text-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">1</span>
                HTML Ibarat Rangka Bangunan
              </h2>

              <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8 md:mb-10 items-center">
                <div className="flex-1">
                  <p className="text-base md:text-xl font-bold text-black/80 leading-relaxed">
                    Bayangkan kamu sedang membangun sebuah <strong className="bg-[#FACC15] px-1 border-2 border-black text-black">Rumah</strong>. Sebelum rumah itu dicat atau dipasangi listrik, kamu harus membangun pondasi, dinding bata, dan tiang-tiang penyangganya. Nah, <strong className="bg-[#FF49DB] text-white px-1 border-2 border-black">HTML (HyperText Markup Language)</strong> adalah kerangka atau struktur dari sebuah halaman web. Tanpa HTML, tidak akan ada teks, gambar, atau elemen apapun yang bisa ditampilkan di browsermu!
                  </p>
                </div>
                <div className="md:w-1/3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-2 hover:rotate-0 transition-transform flex items-center justify-center bg-[#2DD4BF] p-8 h-48">
                  <img src="/house.png" alt="Ilustrasi Rumah" className="w-full h-full object-contain drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
                <div className="bg-[#2DD4BF] border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all group">
                  <span className="material-symbols-outlined text-4xl md:text-5xl text-black mb-2 group-hover:scale-110 transition-transform">view_stream</span>
                  <h3 className="text-xl md:text-2xl font-black text-black uppercase mb-2">Struktur Utama</h3>
                  <p className="text-sm md:text-base font-bold text-black/80">HTML menentukan di mana judul, paragraf, dan gambar ditempatkan.</p>
                </div>
                <div className="bg-[#FF49DB] border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all group">
                  <span className="material-symbols-outlined text-4xl md:text-5xl text-white mb-2 group-hover:scale-110 transition-transform">language</span>
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase mb-2 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Bahasa Web</h3>
                  <p className="text-sm md:text-base font-bold text-white/90">Semua browser (Chrome, Firefox, dll) membaca HTML untuk menampilkan halaman.</p>
                </div>
                <div className="bg-[#FACC15] border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all group">
                  <span className="material-symbols-outlined text-4xl md:text-5xl text-black mb-2 group-hover:scale-110 transition-transform">integration_instructions</span>
                  <h3 className="text-xl md:text-2xl font-black text-black uppercase mb-2">Bukan Programming</h3>
                  <p className="text-sm md:text-base font-bold text-black/80">HTML adalah bahasa "Markup", bukan bahasa pemrograman karena tidak punya logika.</p>
                </div>
              </div>

              {/* Callout Box */}
              <div className="bg-[#F4F0EA] border-4 border-black p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-1deg]">
                <span className="material-symbols-outlined text-5xl md:text-7xl text-[#FF49DB] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">lightbulb</span>
                <p className="text-xl md:text-3xl font-black text-black uppercase leading-tight text-center md:text-left">
                  "HTML adalah pondasinya, CSS adalah desain/catnya, dan JavaScript adalah listrik/air yang membuatnya hidup."
                </p>
              </div>
            </section>

            {/* Section 2: Bongkar Isi HTML */}
            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#FACC15] text-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">2</span>
                Anatomi Elemen HTML
              </h2>

              <div className="flex justify-center mb-10">
                <div className="w-full md:w-2/3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-1 hover:rotate-0 transition-transform bg-[#2DD4BF] p-6 text-center">
                  <h3 className="text-2xl md:text-4xl font-black text-black mb-4 font-mono">&lt;p class="teks"&gt;Halo!&lt;/p&gt;</h3>
                  <p className="font-black uppercase text-sm md:text-lg text-black bg-white inline-block px-4 py-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Struktur Tag HTML</p>
                </div>
              </div>

              <div className="space-y-6 md:space-y-8">
                {/* Item 1 */}
                <div className="flex flex-col md:flex-row border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <div className="bg-[#2DD4BF] p-6 md:p-8 border-b-4 md:border-b-0 md:border-r-4 border-black flex flex-col justify-center items-center w-full md:w-2/5">
                    <span className="material-symbols-outlined text-6xl md:text-8xl text-black mb-2 md:mb-4 group-hover:scale-110 transition-transform">code</span>
                    <h3 className="text-2xl md:text-3xl font-black text-black uppercase text-center">Tag Pembuka</h3>
                    <span className="bg-white px-2 py-1 md:px-3 md:py-1 border-2 md:border-4 border-black font-black mt-2 md:mt-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-sm md:text-lg">&lt;p&gt;</span>
                  </div>
                  <div className="p-6 md:p-8 flex items-center bg-[#F4F0EA]">
                    <p className="text-base md:text-xl font-bold text-black/80 leading-relaxed">
                      Tag pembuka digunakan untuk memulai sebuah elemen. Ditulis dengan menggunakan kurung sudut (angle brackets). Di contoh ini kita menggunakan p yang berarti Paragraf.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col md:flex-row border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <div className="bg-[#FF49DB] p-6 md:p-8 border-b-4 md:border-b-0 md:border-r-4 border-black flex flex-col justify-center items-center w-full md:w-2/5">
                    <span className="material-symbols-outlined text-6xl md:text-8xl text-white mb-2 md:mb-4 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform">label</span>
                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase text-center drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Atribut</h3>
                    <span className="bg-white px-2 py-1 md:px-3 md:py-1 border-2 md:border-4 border-black font-black mt-2 md:mt-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-sm md:text-lg text-black">class="teks"</span>
                  </div>
                  <div className="p-6 md:p-8 flex items-center bg-[#F4F0EA]">
                    <p className="text-base md:text-xl font-bold text-black/80 leading-relaxed">
                      Atribut memberikan informasi tambahan pada sebuah elemen HTML, selalu diletakkan di dalam tag pembuka dan biasanya berbentuk name="value".
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col md:flex-row border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <div className="bg-[#FACC15] p-6 md:p-8 border-b-4 md:border-b-0 md:border-r-4 border-black flex flex-col justify-center items-center w-full md:w-2/5">
                    <span className="material-symbols-outlined text-6xl md:text-8xl text-black mb-2 md:mb-4 group-hover:scale-110 transition-transform">code_off</span>
                    <h3 className="text-2xl md:text-3xl font-black text-black uppercase text-center">Tag Penutup</h3>
                    <span className="bg-white px-2 py-1 md:px-3 md:py-1 border-2 md:border-4 border-black font-black mt-2 md:mt-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-sm md:text-lg">&lt;/p&gt;</span>
                  </div>
                  <div className="p-6 md:p-8 flex items-center bg-[#F4F0EA]">
                    <p className="text-base md:text-xl font-bold text-black/80 leading-relaxed">
                      Menandakan akhir dari sebuah elemen. Sama seperti tag pembuka namun ditambahkan garis miring (slash) di depan nama tag-nya.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Struktur Dasar HTML */}
            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#FF49DB] text-white w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">3</span>
                Struktur Dasar Wajib HTML5
              </h2>

              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mb-8 items-start">
                <div className="flex-1 space-y-6">
                  <p className="text-base md:text-xl font-bold text-black/80 leading-relaxed">
                    Setiap kali kamu membuat file HTML baru, kamu harus selalu menuliskan kerangka dasarnya. Tanpa kerangka ini, browser bisa salah membaca isi website kamu. Ibaratnya, ini adalah <strong className="bg-[#2DD4BF] px-1 border-2 border-black text-black">Cetak Biru</strong> dari website-mu!
                  </p>
                  
                  {/* Penjelasan Tag/Atribut */}
                  <div className="space-y-4">
                    <div className="bg-[#F4F0EA] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-shrink-0">
                        <span className="bg-white px-3 py-2 border-2 border-black font-mono font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-lg">&lt;!DOCTYPE html&gt;</span>
                      </div>
                      <p className="font-bold text-black/80 text-sm md:text-base leading-relaxed">Baris paling atas yang <strong className="bg-[#FACC15] px-1 border-2 border-black text-black">wajib</strong> ada. Ini memberitahu browser, "Hei, ini adalah file HTML versi 5 (terbaru)!"</p>
                    </div>

                    <div className="bg-[#F4F0EA] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-shrink-0">
                        <span className="bg-white px-3 py-2 border-2 border-black font-mono font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-lg">&lt;html lang="id"&gt;</span>
                      </div>
                      <p className="font-bold text-black/80 text-sm md:text-base leading-relaxed">Membungkus seluruh halaman. Atribut <code className="bg-white px-1 border-2 border-black font-black">lang="id"</code> memberitahu Google dan Browser bahwa website ini menggunakan bahasa Indonesia.</p>
                    </div>

                    <div className="bg-[#F4F0EA] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-shrink-0 flex gap-2">
                        <span className="bg-white px-3 py-2 border-2 border-black font-mono font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-lg">&lt;head&gt;</span>
                        <span className="bg-white px-3 py-2 border-2 border-black font-mono font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-lg">&lt;body&gt;</span>
                      </div>
                      <p className="font-bold text-black/80 text-sm md:text-base leading-relaxed">Tag <code className="bg-[#2DD4BF] px-1 border-2 border-black text-black font-black">&lt;head&gt;</code> untuk pengaturan (seperti judul tab), sedangkan <code className="bg-[#2DD4BF] px-1 border-2 border-black text-black font-black">&lt;body&gt;</code> adalah tempat semua konten ditampilkan.</p>
                    </div>
                  </div>
                </div>

                {/* Code Block Visual */}
                <div className="w-full lg:w-2/5 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-[#1e1e1e] group overflow-hidden flex flex-col mt-4 lg:mt-0 rotate-1 hover:rotate-0 transition-transform">
                  <div className="w-full h-10 border-b-4 border-black bg-[#E5E5E5] flex items-center px-4 gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#FF5F56] border-2 border-black"></div>
                    <div className="w-4 h-4 rounded-full bg-[#FFBD2E] border-2 border-black"></div>
                    <div className="w-4 h-4 rounded-full bg-[#27C93F] border-2 border-black"></div>
                    <span className="ml-4 font-black uppercase text-sm text-black bg-white px-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">index.html</span>
                  </div>
                  <div className="p-6 relative">
                    <pre className="font-mono text-sm md:text-base whitespace-pre-wrap leading-relaxed relative z-10">
<span className="text-gray-500">&lt;!</span><span className="text-[#FF49DB] font-bold">DOCTYPE</span> <span className="text-[#2DD4BF]">html</span><span className="text-gray-500">&gt;</span><br/>
<span className="text-gray-500">&lt;</span><span className="text-[#FACC15] font-bold">html</span> <span className="text-[#2DD4BF]">lang</span><span className="text-gray-500">=</span><span className="text-[#FF49DB]">"id"</span><span className="text-gray-500">&gt;</span><br/>
<span className="text-gray-500">&lt;</span><span className="text-[#FACC15] font-bold">head</span><span className="text-gray-500">&gt;</span><br/>
  <span className="text-gray-500">&lt;</span><span className="text-[#FACC15] font-bold">title</span><span className="text-gray-500">&gt;</span><span className="text-white">Halaman Pertamaku</span><span className="text-gray-500">&lt;/</span><span className="text-[#FACC15] font-bold">title</span><span className="text-gray-500">&gt;</span><br/>
<span className="text-gray-500">&lt;/</span><span className="text-[#FACC15] font-bold">head</span><span className="text-gray-500">&gt;</span><br/>
<span className="text-gray-500">&lt;</span><span className="text-[#FACC15] font-bold">body</span><span className="text-gray-500">&gt;</span><br/>
  <span className="text-[#2DD4BF]">{"<!--"} Isi website ditaruh di sini {"-->"}</span><br/>
<span className="text-gray-500">&lt;/</span><span className="text-[#FACC15] font-bold">body</span><span className="text-gray-500">&gt;</span><br/>
<span className="text-gray-500">&lt;/</span><span className="text-[#FACC15] font-bold">html</span><span className="text-gray-500">&gt;</span>
                    </pre>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer / Penutup */}
            <footer className="bg-[#2DD4BF] border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative rotate-1 hover:rotate-0 transition-transform">
              <span className="material-symbols-outlined absolute -top-3 -right-3 md:-top-4 md:-right-4 text-4xl md:text-5xl text-black bg-white rounded-full border-2 md:border-4 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">push_pin</span>
              <p className="text-xl md:text-3xl font-black text-black uppercase leading-relaxed max-w-4xl mx-auto">
                "Setiap elemen di layar browser kamu pada dasarnya dibangun dengan kotak-kotak elemen HTML ini!"
              </p>
            </footer>

            <div className="h-12 w-full"></div>
          </div>
        </main>
      </div>
    </>
  );
}
