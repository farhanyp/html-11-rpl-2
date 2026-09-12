"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

export default function SintaksDasarPage() {
  const [isTranslating, setIsTranslating] = useState(false);

  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/sintaks-dasar-php', isActive: true },
          { label: 'Kuis Sintaks', href: '/sintaks-dasar-php/kuis', isActive: false }
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-canvas relative" style={{ backgroundImage: 'radial-gradient(var(--color-outline) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">

            {/* Header & Hero Section */}
            <section className="bg-black border-4 border-black p-6 md:p-12 shadow-neo-xl text-center relative overflow-hidden text-white">
              <div className="absolute top-0 left-0 bg-[#2965F1] text-white font-black px-4 py-1 border-b-4 border-r-4 border-black shadow-neo-sm z-20 uppercase">
                PHP Dinamis 03
              </div>
              <div className="absolute -top-10 -right-10 z-0 flex gap-4">
                <span className="material-symbols-outlined text-[120px] md:text-[200px] text-[#F7DF1E] opacity-20 transform -rotate-12">javascript</span>
                <span className="material-symbols-outlined text-[120px] md:text-[200px] text-[#2965F1] opacity-30 transform rotate-12">php</span>
              </div>
              
              <div className="relative z-10 pt-8">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-mint-soft tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[4px_4px_0px_rgba(255,255,255,0.2)]">
                  Transisi Bahasa: <br className="hidden md:block" /> JS Menuju PHP
                </h1>
                <p className="text-base md:text-xl font-bold text-black bg-[#FFD700] inline-block px-4 py-2 md:px-6 md:py-3 border-4 border-black mb-8 md:mb-10 shadow-neo-md uppercase tracking-tight">
                  Sudah jago JavaScript? Belajar PHP itu sepele!
                </p>
                <div>
                  <button
                    onClick={() => setIsTranslating(!isTranslating)}
                    className="bg-[#2965F1] text-white font-black text-xl md:text-3xl px-8 py-5 md:px-12 md:py-6 border-4 border-white shadow-neo-lg hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_#FFF] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all uppercase tracking-widest flex items-center gap-4 mx-auto"
                  >
                    {isTranslating ? (
                      <><span>Sedang Menerjemahkan...</span> <span className="material-symbols-outlined font-black text-4xl animate-spin">sync</span></>
                    ) : (
                      <><span>Lihat Perbandingan</span> <span className="material-symbols-outlined font-black text-4xl">compare_arrows</span></>
                    )}
                  </button>
                </div>
              </div>
            </section>

            {/* Section 1: Perbandingan JS vs PHP */}
            <section className="bg-white border-4 border-black shadow-neo-xl p-6 md:p-12 rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-jade-vibrant text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">01</span>
                Kamus Penerjemah Dasar
              </h2>

              <p className="text-lg md:text-xl font-bold text-forest-teal mb-8">
                Logika pemrograman JS dan PHP itu 90% sama! Yang berbeda hanyalah cara penulisan sintaks (kosakata)-nya. Perhatikan perbandingan di bawah ini:
              </p>

              <div className="space-y-8">
                
                {/* 1. Variabel */}
                <div className="border-4 border-black shadow-neo-md">
                  <div className="bg-black text-white p-3 border-b-4 border-black">
                    <h3 className="font-black uppercase text-xl flex items-center gap-2"><span className="material-symbols-outlined text-[#FFD700]">monetization_on</span> 1. Membuat Variabel</h3>
                  </div>
                  <div className="flex flex-col md:flex-row divide-y-4 md:divide-y-0 md:divide-x-4 divide-black">
                    <div className="flex-1 p-6 bg-canvas">
                      <span className="bg-[#F7DF1E] text-black font-black px-2 py-1 uppercase text-sm border-2 border-black inline-block mb-3">Di JavaScript</span>
                      <p className="font-mono text-lg bg-white p-3 border-2 border-black">let nama = "Budi";</p>
                    </div>
                    <div className="flex-1 p-6 bg-mint-soft">
                      <span className="bg-[#2965F1] text-white font-black px-2 py-1 uppercase text-sm border-2 border-black inline-block mb-3">Di PHP</span>
                      <p className="font-mono text-lg bg-white p-3 border-2 border-black"><span className="text-[#2965F1] font-black text-xl">$</span>nama = "Budi";</p>
                      <p className="font-bold text-sm mt-2 text-forest-teal">PHP tidak butuh 'let'. Tapi <strong>wajib</strong> memakai tanda Dolar ($) di depan semua nama variabel.</p>
                    </div>
                  </div>
                </div>

                {/* 2. Cetak Layar */}
                <div className="border-4 border-black shadow-neo-md">
                  <div className="bg-black text-white p-3 border-b-4 border-black">
                    <h3 className="font-black uppercase text-xl flex items-center gap-2"><span className="material-symbols-outlined text-[#FFD700]">output</span> 2. Mencetak Teks ke Layar</h3>
                  </div>
                  <div className="flex flex-col md:flex-row divide-y-4 md:divide-y-0 md:divide-x-4 divide-black">
                    <div className="flex-1 p-6 bg-canvas">
                      <span className="bg-[#F7DF1E] text-black font-black px-2 py-1 uppercase text-sm border-2 border-black inline-block mb-3">Di JavaScript</span>
                      <p className="font-mono text-lg bg-white p-3 border-2 border-black">document.write("Halo!");</p>
                    </div>
                    <div className="flex-1 p-6 bg-mint-soft">
                      <span className="bg-[#2965F1] text-white font-black px-2 py-1 uppercase text-sm border-2 border-black inline-block mb-3">Di PHP</span>
                      <p className="font-mono text-lg bg-white p-3 border-2 border-black"><span className="text-[#2965F1] font-black text-xl">echo</span> "Halo!";</p>
                      <p className="font-bold text-sm mt-2 text-forest-teal">Jauh lebih singkat! Koki PHP hanya butuh kata sakti <code>echo</code> untuk membuang tulisan ke lautan HTML.</p>
                    </div>
                  </div>
                </div>

                {/* 3. Gabung Kata */}
                <div className="border-4 border-black shadow-neo-md">
                  <div className="bg-black text-white p-3 border-b-4 border-black">
                    <h3 className="font-black uppercase text-xl flex items-center gap-2"><span className="material-symbols-outlined text-[#FFD700]">link</span> 3. Menggabungkan Variabel & Teks</h3>
                  </div>
                  <div className="flex flex-col md:flex-row divide-y-4 md:divide-y-0 md:divide-x-4 divide-black">
                    <div className="flex-1 p-6 bg-canvas">
                      <span className="bg-[#F7DF1E] text-black font-black px-2 py-1 uppercase text-sm border-2 border-black inline-block mb-3">Di JavaScript</span>
                      <p className="font-mono text-lg bg-white p-3 border-2 border-black">"Halo " <span className="font-black text-red-500 text-xl">+</span> nama;</p>
                      <p className="font-bold text-sm mt-2">Menggunakan tanda Plus (+).</p>
                    </div>
                    <div className="flex-1 p-6 bg-mint-soft">
                      <span className="bg-[#2965F1] text-white font-black px-2 py-1 uppercase text-sm border-2 border-black inline-block mb-3">Di PHP</span>
                      <p className="font-mono text-lg bg-white p-3 border-2 border-black">"Halo " <span className="font-black text-red-500 text-2xl bg-yellow-200 px-1">.</span> $nama;</p>
                      <p className="font-bold text-sm mt-2 text-forest-teal">Menggunakan tanda <strong>Titik (.)</strong>! Hati-hati, tanda plus di PHP HANYA untuk matematika murni.</p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* Section 2: Peringatan Cerewet */}
            <section className="bg-[#FF0000] border-4 border-black shadow-neo-xl p-6 md:p-12 -rotate-1 hover:rotate-0 transition-transform">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0 animate-bounce">
                  <span className="material-symbols-outlined text-[120px] text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">error</span>
                </div>
                
                <div className="text-white w-full">
                  <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                    PHP itu Sangat Cerewet!
                  </h2>
                  <div className="bg-white border-4 border-black p-6 shadow-neo-sm text-black relative">
                    <div className="absolute -top-5 -right-5 w-12 h-12 bg-[#FFD700] border-4 border-black rounded-full flex items-center justify-center font-black text-3xl shadow-neo-sm">
                      ;
                    </div>
                    <p className="text-lg md:text-xl font-bold mb-4">
                      Di JavaScript modern, jika kamu lupa menaruh titik koma (<code>;</code>) di akhir baris, browser akan memaafkanmu dan kodenya tetap berjalan.
                    </p>
                    <p className="text-lg md:text-xl font-black text-[#FF0000] border-l-8 border-[#FF0000] pl-4 bg-gray-100 py-2">
                      Di PHP? JANGAN HARAP!
                    </p>
                    <p className="text-base font-bold mt-4">
                      Satu baris saja lupa titik koma, maka <strong>Koki PHP akan mogok kerja secara instan!</strong> Seluruh halaman webmu akan mati total dan menampilkan error.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Footer Nav */}
            <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4">
              <a href="/aturan-pulau-php" className="bg-white text-black font-black uppercase text-sm md:text-lg px-4 py-3 md:px-6 md:py-4 border-4 border-black shadow-neo-md hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
                <span className="material-symbols-outlined font-black">arrow_back</span> Aturan Pulau PHP
              </a>
              <a href="/misteri-layar-putih-error" className="bg-[#2965F1] text-white font-black uppercase text-sm md:text-lg px-4 py-3 md:px-6 md:py-4 border-4 border-black shadow-neo-md hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 w-full sm:w-auto justify-center text-center">
                Lanjut ke: Misteri Error PHP <span className="material-symbols-outlined font-black">arrow_forward</span>
              </a>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}
