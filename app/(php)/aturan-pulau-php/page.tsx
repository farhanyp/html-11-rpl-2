"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

export default function PulauPhpPage() {
  const [isSailing, setIsSailing] = useState(false);

  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/aturan-pulau-php', isActive: true },
          { label: 'Latihan Tag PHP', href: '/aturan-pulau-php/latihan', isActive: false }
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-canvas relative" style={{ backgroundImage: 'radial-gradient(var(--color-outline) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">

            {/* Header & Hero Section */}
            <section className="bg-pine-deep border-4 border-black p-6 md:p-12 shadow-neo-xl text-center relative overflow-hidden text-white">
              <div className="absolute top-0 left-0 bg-[#2965F1] text-white font-black px-4 py-1 border-b-4 border-r-4 border-black shadow-neo-sm z-20 uppercase">
                PHP Dinamis 02
              </div>
              <div className="absolute -bottom-10 -right-10 z-0">
                <span className="material-symbols-outlined text-[150px] md:text-[250px] text-white opacity-20 transform rotate-12">sailing</span>
              </div>
              
              <div className="relative z-10 pt-8">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-mint-soft tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[4px_4px_0px_rgba(255,255,255,0.2)]">
                  Aturan Pulau PHP <br className="hidden md:block" /> di Lautan HTML
                </h1>
                <p className="text-base md:text-xl font-bold text-black bg-[#FFD700] inline-block px-4 py-2 md:px-6 md:py-3 border-4 border-black mb-8 md:mb-10 shadow-neo-md uppercase tracking-tight">
                  Cara menggabungkan PHP ke dalam file HTML-mu!
                </p>
                <div>
                  <button
                    onClick={() => setIsSailing(!isSailing)}
                    className="bg-[#2965F1] text-white font-black text-xl md:text-3xl px-8 py-5 md:px-12 md:py-6 border-4 border-white shadow-neo-lg hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_#FFF] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all uppercase tracking-widest flex items-center gap-4 mx-auto"
                  >
                    {isSailing ? (
                      <><span>Sedang Berlayar...</span> <span className="material-symbols-outlined font-black text-4xl animate-pulse">waves</span></>
                    ) : (
                      <><span>Mulai Berlayar</span> <span className="material-symbols-outlined font-black text-4xl">sailing</span></>
                    )}
                  </button>
                </div>
              </div>
            </section>

            {/* Section 1: Aturan Ekstensi File */}
            <section className="bg-white border-4 border-black shadow-neo-xl p-6 md:p-12 rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-[#FF0000] text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">01</span>
                Tinggalkan Akhiran .html
              </h2>

              <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                <div className="flex-1 space-y-6">
                  <p className="text-lg md:text-xl font-bold text-forest-teal leading-relaxed">
                    Syarat utama dan paling mutlak untuk memanggil si Koki PHP adalah: <strong>Kamu HARUS mengubah akhiran file-mu dari <code className="bg-gray-200 px-1 border-2 border-black line-through text-gray-500">.html</code> menjadi <code className="bg-[#2965F1] text-white px-1 border-2 border-black">.php</code></strong>.
                  </p>
                  <p className="text-lg md:text-xl font-bold text-forest-teal leading-relaxed bg-canvas p-4 border-4 border-black shadow-neo-sm">
                    Jangan khawatir! File berakhiran <code>.php</code> (seperti <code>index.php</code>) <strong>tetap bisa membaca dan menampilkan kode HTML/CSS aslimu 100% normal</strong>.
                  </p>
                </div>
                
                <div className="lg:w-1/3 bg-black text-white p-6 border-4 border-black shadow-neo-md flex flex-col items-center justify-center text-center transform -rotate-2">
                  <span className="material-symbols-outlined text-[60px] text-[#FFD700] mb-2">autorenew</span>
                  <p className="font-black text-2xl uppercase mb-2 line-through text-gray-500">index.html</p>
                  <p className="font-black text-4xl uppercase text-[#2965F1]">index.php</p>
                </div>
              </div>
            </section>

            {/* Section 2: Analogi Pulau & Lautan */}
            <section className="bg-[#1572B6] border-4 border-black shadow-neo-xl p-6 md:p-12 -rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-[#FFD700] text-black w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">02</span>
                Analogi Pulau PHP
              </h2>

              <p className="text-lg font-bold text-white mb-8 bg-black p-4 border-4 border-white shadow-[4px_4px_0px_0px_#FFF]">
                Bayangkan file <code>index.php</code> milikmu adalah sebuah <strong>Lautan Luas</strong> yang isinya hanyalah air (Kode HTML murni).
              </p>

              <div className="bg-canvas p-8 border-4 border-black shadow-neo-lg text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[#1572B6] opacity-10"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight mb-4 text-left">
                    Lautan HTML
                  </h3>
                  
                  {/* Pulau 1 */}
                  <div className="bg-[#8B4513] p-4 border-4 border-black shadow-neo-md my-6 rotate-2 mx-auto md:w-2/3">
                    <div className="bg-jade-vibrant border-4 border-black p-4 text-white">
                      <span className="material-symbols-outlined text-4xl mb-2">park</span>
                      <h4 className="font-black uppercase text-xl mb-2">Pulau PHP</h4>
                      <p className="font-bold text-sm">
                        Kamu bisa menciptakan "pulau kecil" di tengah lautan HTML dengan menggunakan tag ajaib: <br/>
                        <code className="bg-black px-2 py-1 mt-2 inline-block font-black text-[#FFD700] border-2 border-white">&lt;?php ... ?&gt;</code>
                      </p>
                    </div>
                  </div>

                  <p className="font-bold text-black text-left mt-8 max-w-2xl">
                    <strong>Penting:</strong> Ketika kamu berada di dalam "Pulau PHP", kamu sedang berbicara dengan Koki Server. Kamu <strong>TIDAK BISA</strong> asal mengetik tag <code>&lt;h1&gt;</code> HTML di sana tanpa bantuan alat!
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Praktik Kode (Bagaimana Menulisnya?) */}
            <section className="bg-white border-4 border-black shadow-neo-xl p-6 md:p-12 rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-black text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">03</span>
                Praktek di Dalam File
              </h2>

              <p className="text-lg md:text-xl font-bold text-forest-teal mb-6">
                Ini adalah contoh penampakan file <code>index.php</code> yang menggabungkan lautan HTML dengan pulau PHP.
              </p>

              <div className="bg-black border-4 border-black shadow-[8px_8px_0px_0px_#000] font-mono text-sm md:text-base overflow-x-auto relative">
                {/* Header File */}
                <div className="bg-gray-800 text-gray-400 p-2 border-b-2 border-gray-600 flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#FF0000] rounded-full"></span>
                  <span className="w-3 h-3 bg-[#FFD700] rounded-full"></span>
                  <span className="w-3 h-3 bg-jade-vibrant rounded-full"></span>
                  <span className="ml-2">index.php</span>
                </div>
                
                <div className="p-6 leading-relaxed">
                  <span className="text-gray-500">{"<!-- Ini Lautan HTML biasa -->"}</span><br/>
                  <span className="text-blue-300">{"<h1>"}</span><span className="text-white">Selamat Datang di Portofolio Saya!</span><span className="text-blue-300">{"</h1>"}</span><br/><br/>
                  
                  <div className="bg-gray-900 border-l-4 border-[#2965F1] pl-4 py-2 my-2">
                    <span className="text-[#2965F1] font-black text-lg">{"<?php"}</span> <br/>
                    &nbsp;&nbsp;<span className="text-gray-500">{"// Ini Pulau PHP! Kamu tidak bisa mengetik HTML sembarangan di sini."}</span><br/>
                    &nbsp;&nbsp;<span className="text-blue-300">echo</span> <span className="text-yellow-300">"&lt;h2&gt;Halo, ini dicetak dari Koki PHP!&lt;/h2&gt;"</span>; <br/>
                    <span className="text-[#2965F1] font-black text-lg">{"?>"}</span>
                  </div><br/>

                  <span className="text-gray-500">{"<!-- Kembali lagi ke Lautan HTML bebas -->"}</span><br/>
                  <span className="text-blue-300">{"<p>"}</span><span className="text-white">Kembali berenang di HTML biasa.</span><span className="text-blue-300">{"</p>"}</span>
                </div>
              </div>

              <div className="mt-8 bg-[#FFD700] border-4 border-black p-4 flex gap-4 items-center shadow-neo-sm -rotate-1">
                <span className="material-symbols-outlined text-4xl text-black animate-bounce">tips_and_updates</span>
                <p className="font-bold text-black">
                  Perhatikan kata <code className="bg-black text-white px-2">echo</code>! Itu adalah alat khusus milik Koki PHP untuk "melemparkan" kembali teks atau tag HTML HTML ke layar (agar HTML-nya bisa tampil).
                </p>
              </div>
            </section>
            
            {/* Footer Nav */}
            <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4">
              <a href="/pengantar-php" className="bg-canvas text-black font-black uppercase text-sm md:text-lg px-4 py-3 md:px-6 md:py-4 border-4 border-black shadow-neo-md hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
                <span className="material-symbols-outlined font-black">arrow_back</span> Pengantar PHP
              </a>
              <a href="/sintaks-dasar-php" className="bg-[#2965F1] text-white font-black uppercase text-sm md:text-lg px-4 py-3 md:px-6 md:py-4 border-4 border-black shadow-neo-md hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 w-full sm:w-auto justify-center text-center">
                Lanjut ke: Sintaks Dasar <span className="material-symbols-outlined font-black">arrow_forward</span>
              </a>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}
