"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

export default function DebuggingPage() {
  const [isInvestigating, setIsInvestigating] = useState(false);

  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/debugging-php', isActive: true },
          { label: 'Kasus Detektif', href: '/debugging-php/kasus', isActive: false }
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-canvas relative" style={{ backgroundImage: 'radial-gradient(var(--color-outline) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">

            {/* Header & Hero Section */}
            <section className="bg-pine-deep border-4 border-black p-6 md:p-12 shadow-neo-xl text-center relative overflow-hidden text-white">
              <div className="absolute top-0 left-0 bg-[#FFD700] text-black font-black px-4 py-1 border-b-4 border-r-4 border-black shadow-neo-sm z-20 uppercase">
                PHP Dinamis 05
              </div>
              <div className="absolute -bottom-10 -right-10 z-0">
                <span className="material-symbols-outlined text-[150px] md:text-[250px] text-white opacity-20 transform rotate-12">policy</span>
              </div>
              
              <div className="relative z-10 pt-8">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#FFD700] tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                  Teknik Debugging: <br className="hidden md:block" /> Detektif Kode
                </h1>
                <p className="text-base md:text-xl font-bold text-black bg-white inline-block px-4 py-2 md:px-6 md:py-3 border-4 border-black mb-8 md:mb-10 shadow-neo-md uppercase tracking-tight">
                  Mencari asal mula masalah saat webmu bungkam!
                </p>
                <div>
                  <button
                    onClick={() => setIsInvestigating(!isInvestigating)}
                    className="bg-black text-[#FFD700] font-black text-xl md:text-3xl px-8 py-5 md:px-12 md:py-6 border-4 border-[#FFD700] shadow-[8px_8px_0px_0px_#FFD700] hover:-translate-y-2 hover:-translate-x-2 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all uppercase tracking-widest flex items-center gap-4 mx-auto"
                  >
                    {isInvestigating ? (
                      <><span>Sedang Menggeledah...</span> <span className="material-symbols-outlined font-black text-4xl animate-pulse">troubleshoot</span></>
                    ) : (
                      <><span>Mulai Investigasi</span> <span className="material-symbols-outlined font-black text-4xl">travel_explore</span></>
                    )}
                  </button>
                </div>
              </div>
            </section>

            {/* Section 1: Masalah Hening */}
            <section className="bg-white border-4 border-black shadow-neo-xl p-6 md:p-12 rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-black text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">01</span>
                Masalah Paling Menjengkelkan
              </h2>

              <p className="text-lg md:text-xl font-bold text-gray-700 leading-relaxed mb-6">
                Di dunia nyata, *error* layar merah / layar putih itu justru <strong>menguntungkan</strong> karena kamu langsung tahu salahnya di mana.
              </p>

              <div className="bg-mint-soft border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000] flex flex-col md:flex-row gap-6 items-center">
                <span className="material-symbols-outlined text-[80px] text-forest-teal">sentiment_dissatisfied</span>
                <p className="text-lg md:text-xl font-black text-black">
                  Masalah paling menjengkelkan adalah saat layar putih TIDAK MUNCUL, pesan error TIDAK ADA, web seolah normal... TAPI saat kamu submit Form, datanya GAGAL MASUK ke Database!
                </p>
              </div>

              <p className="text-lg font-bold text-black mt-6">
                Jika hal ini terjadi, kamu harus menjadi <strong>Detektif Kode (Debugging)</strong> menggunakan dua jurus andalan Koki PHP.
              </p>
            </section>

            {/* Section 2: var_dump & die */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* var_dump */}
              <section className="bg-canvas border-4 border-black shadow-neo-xl p-6 md:p-8 -rotate-1 hover:rotate-0 transition-transform flex flex-col">
                <div className="bg-[#2965F1] text-white w-16 h-16 flex items-center justify-center border-4 border-black shadow-neo-sm text-4xl mb-6">
                  <span className="material-symbols-outlined">inventory_2</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black uppercase mb-4 text-[#2965F1]">1. var_dump()</h3>
                <p className="text-lg font-bold text-gray-800 mb-4 bg-white p-3 border-2 border-black flex-1">
                  Berfungsi untuk <strong>"Membongkar Paksa"</strong> isi sebuah variabel atau paket data. Ibarat polisi membongkar koper tersangka untuk melihat isinya (apakah isinya kosong atau ada barangnya).
                </p>
                <div className="font-mono text-sm bg-black text-mint-soft p-4 border-4 border-black mt-auto">
                  <span className="text-gray-500">// Bongkar paksa data Form (POST)</span><br/>
                  <span className="text-blue-300">var_dump</span>(<span className="text-pink-400">$_POST</span>);
                </div>
              </section>

              {/* die */}
              <section className="bg-canvas border-4 border-black shadow-neo-xl p-6 md:p-8 rotate-1 hover:rotate-0 transition-transform flex flex-col">
                <div className="bg-[#FF0000] text-white w-16 h-16 flex items-center justify-center border-4 border-black shadow-neo-sm text-4xl mb-6">
                  <span className="material-symbols-outlined">front_hand</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black uppercase mb-4 text-[#FF0000]">2. die()</h3>
                <p className="text-lg font-bold text-gray-800 mb-4 bg-white p-3 border-2 border-black flex-1">
                  Rem darurat! Berfungsi untuk <strong>menghentikan total</strong> eksekusi kode di baris itu juga. Mencegah PHP memproses (menyimpan ke database) sebuah data yang sejak awal sudah cacat/kosong.
                </p>
                <div className="font-mono text-sm bg-black text-mint-soft p-4 border-4 border-black mt-auto">
                  <span className="text-gray-500">// STOP! Jangan proses kode ke bawah!</span><br/>
                  <span className="text-blue-300">die</span>();
                </div>
              </section>
            </div>

            {/* Section 3: Kombinasi Maut */}
            <section className="bg-black text-white border-4 border-black shadow-[12px_12px_0px_0px_#FFD700] p-6 md:p-12 relative overflow-hidden">
              <span className="material-symbols-outlined absolute top-4 right-4 text-[100px] text-gray-800 opacity-50 z-0">lock_open</span>
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#FFD700] uppercase mb-8 md:mb-10 border-b-4 border-[#FFD700] pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                  <span className="bg-[#FFD700] text-black w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_#FFF] flex-shrink-0 text-2xl md:text-4xl">03</span>
                  Kombinasi Detektif
                </h2>

                <p className="text-lg md:text-xl font-bold mb-6">
                  Gabungkan keduanya di baris paling atas kodemu setiap kali ada data form yang masuk. Ini adalah rutinitas wajib saat kode tidak berjalan sesuai keinginan!
                </p>

                <div className="font-mono text-sm md:text-lg bg-gray-900 border-4 border-gray-600 p-6 leading-relaxed">
                  <span className="text-gray-500">{"// CONTOH INVESTIGASI FORM:"}</span><br/><br/>
                  
                  <span className="text-gray-500">{"// 1. Bongkar isinya di layar sekarang!"}</span><br/>
                  <span className="text-blue-300 font-black">var_dump</span>(<span className="text-pink-400">$_POST</span>);<br/><br/>

                  <span className="text-gray-500">{"// 2. Berhenti! Jangan coba simpan ke Database dulu!"}</span><br/>
                  <span className="text-[#FF0000] font-black">die</span>();<br/><br/>
                  
                  <span className="text-gray-500 line-through block mb-1">{"// Kode menyimpan ke database..."}</span>
                  <span className="text-gray-500 line-through block mb-1">{"// Kode redirect ke halaman lain..."}</span>
                </div>

                <div className="mt-8 bg-[#FFD700] p-4 text-black font-black uppercase text-center border-4 border-white transform rotate-1">
                  Jika isi var_dump() adalah "array(0) { }", berarti kopernya KOSONG! <br className="hidden md:block" /> Cek penulisan "name" pada Form HTML-mu!
                </div>
              </div>
            </section>
            
            {/* Footer Nav */}
            <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4">
              <a href="/error-php-layar-putih" className="bg-canvas text-black font-black uppercase text-sm md:text-lg px-4 py-3 md:px-6 md:py-4 border-4 border-black shadow-neo-md hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
                <span className="material-symbols-outlined font-black">arrow_back</span> Error Layar Putih
              </a>
              <a href="/hard-refresh-browser" className="bg-[#2965F1] text-white font-black uppercase text-sm md:text-lg px-4 py-3 md:px-6 md:py-4 border-4 border-black shadow-neo-md hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 w-full sm:w-auto justify-center text-center">
                Lanjut ke: Jurus Hard Refresh <span className="material-symbols-outlined font-black">arrow_forward</span>
              </a>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}
