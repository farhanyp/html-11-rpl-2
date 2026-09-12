"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

export default function PengantarPhpPage() {
  const [isCooking, setIsCooking] = useState(false);

  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/pengantar-php', isActive: true },
          { label: 'Kuis Pengantar', href: '/pengantar-php/kuis', isActive: false }
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-canvas relative" style={{ backgroundImage: 'radial-gradient(var(--color-outline) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">

            {/* Header & Hero Section */}
            <section className="bg-[#2965F1] border-4 border-black p-6 md:p-12 shadow-neo-xl text-center relative overflow-hidden text-white">
              <div className="absolute top-0 left-0 bg-white text-black font-black px-4 py-1 border-b-4 border-r-4 border-black shadow-neo-sm z-20 uppercase">
                PHP Dinamis 01
              </div>
              <div className="absolute -bottom-10 -right-10 z-0">
                <span className="material-symbols-outlined text-[150px] md:text-[250px] text-white opacity-20 transform rotate-12">restaurant_menu</span>
              </div>
              
              <div className="relative z-10 pt-8">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                  Pengantar PHP: <br className="hidden md:block" /> Koki di Balik Layar
                </h1>
                <p className="text-base md:text-xl font-bold text-black bg-[#FFD700] inline-block px-4 py-2 md:px-6 md:py-3 border-4 border-black mb-8 md:mb-10 shadow-neo-md uppercase tracking-tight">
                  Ubah web statis membosankan menjadi aplikasi hidup!
                </p>
                <div>
                  <button
                    onClick={() => setIsCooking(!isCooking)}
                    className="bg-black text-white font-black text-xl md:text-3xl px-8 py-5 md:px-12 md:py-6 border-4 border-white shadow-[8px_8px_0px_0px_#FFF] hover:-translate-y-2 hover:-translate-x-2 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all uppercase tracking-widest flex items-center gap-4 mx-auto"
                  >
                    {isCooking ? (
                      <><span>Sedang Memasak...</span> <span className="material-symbols-outlined font-black text-4xl animate-bounce">soup_kitchen</span></>
                    ) : (
                      <><span>Masuk ke Dapur</span> <span className="material-symbols-outlined font-black text-4xl">local_fire_department</span></>
                    )}
                  </button>
                </div>
              </div>
            </section>

            {/* Section 1: Analogi Restoran */}
            <section className="bg-white border-4 border-black shadow-neo-xl p-6 md:p-12 rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-[#2965F1] text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">01</span>
                Analogi Dapur Restoran
              </h2>

              <p className="text-lg md:text-xl font-bold text-black mb-8">
                Untuk memahami cara kerja website secara utuh, bayangkanlah sebuah restoran mewah. Setiap teknologi punya perannya masing-masing:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-canvas border-4 border-black p-6 shadow-neo-md hover:-translate-y-2 transition-transform text-center flex flex-col h-full group">
                  <span className="material-symbols-outlined text-[60px] mb-4 text-[#E34F26] group-hover:scale-110 transition-transform">foundation</span>
                  <h3 className="font-black text-2xl uppercase mb-2">HTML</h3>
                  <p className="font-bold text-gray-700 text-sm md:text-base mt-auto">Sebagai kerangka bangunan, meja, dan piring kosong tempat makanan akan ditaruh.</p>
                </div>
                
                <div className="bg-canvas border-4 border-black p-6 shadow-neo-md hover:-translate-y-2 transition-transform text-center flex flex-col h-full group">
                  <span className="material-symbols-outlined text-[60px] mb-4 text-[#1572B6] group-hover:scale-110 transition-transform">format_paint</span>
                  <h3 className="font-black text-2xl uppercase mb-2">CSS</h3>
                  <p className="font-bold text-gray-700 text-sm md:text-base mt-auto">Sebagai taplak meja yang indah, seragam pelayan, dan dekorasi lampu restoran.</p>
                </div>

                <div className="bg-[#2965F1] border-4 border-black p-6 shadow-neo-md hover:-translate-y-2 transition-transform text-center flex flex-col h-full group text-white transform md:-translate-y-4">
                  <span className="material-symbols-outlined text-[60px] mb-4 group-hover:scale-110 transition-transform text-[#FFD700]">skillet</span>
                  <h3 className="font-black text-2xl uppercase mb-2">PHP</h3>
                  <p className="font-bold text-white text-sm md:text-base mt-auto"><strong>Sang Koki Utama!</strong> Berada di dapur tertutup, meracik pesanan dari bahan mentah, dan mematangkannya.</p>
                </div>
              </div>
            </section>

            {/* Section 2: Alur Kerja Koki */}
            <section className="bg-mint-soft border-4 border-black shadow-neo-xl p-6 md:p-12 -rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-black text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">02</span>
                Alur Kerja PHP
              </h2>

              <p className="text-lg md:text-xl font-bold text-forest-teal mb-8 bg-white p-4 border-4 border-black">
                Bagaimana koki PHP bekerja sama dengan Kulkas (Database MySQL) untuk melayani pembeli?
              </p>

              <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
                
                {/* Garis koneksi (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-10 right-10 h-2 bg-black z-0 border-b-4 border-dashed border-gray-400"></div>

                <div className="bg-white border-4 border-black p-6 shadow-neo-md z-10 w-full md:w-1/3 flex flex-col items-center text-center">
                  <div className="bg-[#FFD700] p-4 rounded-full border-4 border-black mb-4">
                    <span className="material-symbols-outlined text-4xl">assignment</span>
                  </div>
                  <h3 className="font-black uppercase mb-2 text-xl">1. Pesanan Masuk</h3>
                  <p className="font-bold text-sm">Pembeli mengisi Form HTML (contoh: Form Buku Tamu) lalu menekan tombol <em>Submit</em>.</p>
                </div>

                <div className="bg-white border-4 border-black p-6 shadow-neo-md z-10 w-full md:w-1/3 flex flex-col items-center text-center transform md:-translate-y-6">
                  <div className="bg-[#2965F1] text-white p-4 rounded-full border-4 border-black mb-4">
                    <span className="material-symbols-outlined text-4xl">kitchen</span>
                  </div>
                  <h3 className="font-black uppercase mb-2 text-xl text-[#2965F1]">2. PHP Mengolah</h3>
                  <p className="font-bold text-sm">Koki PHP menerima pesanan, lalu mengambil bahan atau menyimpan data ke Kulkas (Database MySQL).</p>
                </div>

                <div className="bg-white border-4 border-black p-6 shadow-neo-md z-10 w-full md:w-1/3 flex flex-col items-center text-center">
                  <div className="bg-jade-vibrant text-white p-4 rounded-full border-4 border-black mb-4">
                    <span className="material-symbols-outlined text-4xl">room_service</span>
                  </div>
                  <h3 className="font-black uppercase mb-2 text-xl">3. Sajian HTML</h3>
                  <p className="font-bold text-sm">PHP menyajikan kembali data yang sudah matang ke depan layar pengguna dalam wujud piring HTML biasa!</p>
                </div>

              </div>
            </section>

            {/* Section 3: Sifat Rahasia Server-Side */}
            <section className="bg-canvas border-4 border-black shadow-neo-xl p-6 md:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-[#FF0000] text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">03</span>
                Rahasia Dapur (Server-Side)
              </h2>

              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-1 space-y-6">
                  <div className="bg-[#FF0000] text-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_#000] transform -rotate-1">
                    <h3 className="text-3xl font-black uppercase mb-4 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Sangat Rahasia!</h3>
                    <p className="font-bold text-lg leading-relaxed">
                      Kamu harus selalu ingat: Kode PHP <strong>TIDAK AKAN PERNAH TERLIHAT</strong> oleh pengunjung web.
                    </p>
                  </div>
                  <p className="text-lg md:text-xl font-bold text-black leading-relaxed">
                    Bahkan jika *hacker* menekan klik kanan dan memilih <strong>"View Page Source"</strong> di browser, mereka hanya akan melihat kode HTML matang hasil masakan koki, bukan bumbu rahasia PHP-nya!
                  </p>
                  <p className="text-lg md:text-xl font-bold text-black leading-relaxed bg-white border-2 border-black p-4">
                    Karena itulah PHP disebut sebagai bahasa <strong>Server-Side</strong>. Ia dieksekusi secara rahasia di dalam ruangan tertutup bernama Web Server (aplikasi <strong>XAMPP</strong>).
                  </p>
                </div>

                <div className="lg:w-1/3 bg-black text-white p-6 border-4 border-black shadow-neo-md text-center transform rotate-2 hover:rotate-0 transition-transform">
                  <span className="material-symbols-outlined text-[80px] text-[#FFD700] mb-4">visibility_off</span>
                  <p className="font-black uppercase text-2xl text-white mb-2">View Source</p>
                  <div className="text-left font-mono text-xs bg-gray-900 p-3 border-2 border-gray-700 text-gray-400">
                    {"<!-- Yang diketik Programmer: -->"} <br/>
                    <span className="text-pink-400">{"<?php"}</span> <br/>
                    &nbsp;&nbsp;<span className="text-blue-300">echo</span> <span className="text-yellow-300">"Halo Dunia!"</span>; <br/>
                    <span className="text-pink-400">{"?>"}</span> <br/><br/>
                    {"<!-- Yang dilihat Pengunjung: -->"} <br/>
                    <span className="text-white font-black">Halo Dunia!</span>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Footer Nav */}
            <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4">
              <a href="/ujian-akhir-database" className="bg-canvas text-black font-black uppercase text-sm md:text-lg px-4 py-3 md:px-6 md:py-4 border-4 border-black shadow-neo-md hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
                <span className="material-symbols-outlined font-black">arrow_back</span> Selesai Database
              </a>
              <a href="/instalasi-server-lokal" className="bg-[#2965F1] text-white font-black uppercase text-sm md:text-lg px-4 py-3 md:px-6 md:py-4 border-4 border-black shadow-neo-md hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 w-full sm:w-auto justify-center text-center">
                Lanjut ke: Instalasi XAMPP <span className="material-symbols-outlined font-black">arrow_forward</span>
              </a>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}
