"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

export default function UndefinedArrayKeyPage() {
  const [isTrapped, setIsTrapped] = useState(false);

  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/undefined-array-key', isActive: true },
          { label: 'Kuis Kunci', href: '/undefined-array-key/kuis', isActive: false }
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className={`md:ml-[280px] w-full p-4 md:p-10 relative transition-colors duration-500 ${isTrapped ? 'bg-black text-white' : 'bg-canvas text-black'}`} style={{ backgroundImage: 'radial-gradient(var(--color-outline) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">

            {/* Header & Hero Section */}
            <section className={`border-4 border-black p-6 md:p-12 shadow-neo-xl text-center relative overflow-hidden transition-colors duration-500 ${isTrapped ? 'bg-yellow-400 text-black' : 'bg-black text-white'}`}>
              <div className="absolute top-0 left-0 bg-[#FFD700] text-black font-black px-4 py-1 border-b-4 border-r-4 border-black shadow-neo-sm z-20 uppercase">
                PHP Dinamis 08
              </div>
              <div className="absolute -bottom-10 -right-10 z-0 flex gap-4">
                <span className={`material-symbols-outlined text-[150px] md:text-[250px] opacity-20 transform -rotate-12 ${isTrapped ? 'text-black' : 'text-[#FFD700]'}`}>pest_control_rodent</span>
              </div>
              
              <div className="relative z-10 pt-8">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[4px_4px_0px_rgba(255,255,255,0.2)]">
                  Jebakan Batman: <br className="hidden md:block" /> Undefined Array Key
                </h1>
                <p className={`text-base md:text-xl font-bold inline-block px-4 py-2 md:px-6 md:py-3 border-4 border-black mb-8 md:mb-10 shadow-neo-md uppercase tracking-tight ${isTrapped ? 'bg-black text-white' : 'bg-[#FFD700] text-black'}`}>
                  Error Nomor 1 Paling Sering Dialami Pemula!
                </p>
                <div>
                  <button
                    onClick={() => setIsTrapped(!isTrapped)}
                    className="bg-[#FF0000] text-white font-black text-xl md:text-3xl px-8 py-5 md:px-12 md:py-6 border-4 border-white shadow-[8px_8px_0px_0px_#FFF] hover:-translate-y-2 hover:-translate-x-2 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all uppercase tracking-widest flex items-center gap-4 mx-auto"
                  >
                    {isTrapped ? (
                      <><span>Keluar dari Jebakan!</span> <span className="material-symbols-outlined font-black text-4xl animate-bounce">exit_to_app</span></>
                    ) : (
                      <><span>Injak Jebakan</span> <span className="material-symbols-outlined font-black text-4xl">warning</span></>
                    )}
                  </button>
                </div>
              </div>
            </section>

            {/* Section 1: Akar Masalah */}
            <section className="bg-white text-black border-4 border-black shadow-neo-xl p-6 md:p-12 rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-[#FF0000] text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">01</span>
                Si Kunci yang Hilang
              </h2>

              <p className="text-lg md:text-xl font-bold text-gray-700 leading-relaxed mb-6">
                Ini adalah pesan *error* sejuta umat yang pasti akan kamu temui: 
              </p>
              
              <div className="bg-gray-100 border-l-8 border-[#FF0000] p-4 mb-6 shadow-neo-sm">
                <p className="font-mono text-[#FF0000] font-black text-lg md:text-xl break-all">
                  Warning: Undefined array key "nama" in C:\xampp\htdocs\sekolah\proses.php on line 10
                </p>
              </div>

              <div className="bg-mint-soft border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000] flex flex-col md:flex-row gap-6 items-center transform -rotate-1">
                <span className="material-symbols-outlined text-[80px] text-forest-teal">key_off</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-black uppercase mb-2">Mengapa Terjadi?</h3>
                  <p className="text-lg font-bold">
                    Penyebabnya sepele: <strong>Ketidakcocokan Nama!</strong> HTML mengirimkan kunci bernama <code>"nama_lengkap"</code>, namun PHP malah mencoba membuka tas menggunakan kunci bernama <code>"nama"</code>.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Analisis Benar vs Salah */}
            <section className="bg-pine-deep text-white border-4 border-black shadow-neo-xl p-6 md:p-12 -rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-8 md:mb-10 border-b-4 border-white pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-[#FFD700] text-black w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">02</span>
                Analisis Kasus
              </h2>

              <p className="text-lg font-bold text-white mb-8 bg-black p-4 border-4 border-white shadow-[4px_4px_0px_0px_#FFF]">
                Mari kita bongkar sepasang file HTML dan PHP yang saling berkomunikasi ini. Perhatikan atribut <code>name="..."</code> pada HTML!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Bagian HTML */}
                <div className="bg-canvas text-black border-4 border-black shadow-neo-md flex flex-col">
                  <div className="bg-[#E34F26] text-white p-3 border-b-4 border-black font-black uppercase flex items-center gap-2">
                    <span className="material-symbols-outlined">html</span> Form HTML
                  </div>
                  <div className="p-4 font-mono text-sm bg-gray-100 flex-1">
                    <span className="text-gray-500">{"<!-- Input Nama -->"}</span><br/>
                    <span className="text-blue-600">{"<input"}</span> <span className="text-purple-600">type=</span><span className="text-green-700">"text"</span> <span className="text-red-500 font-black bg-yellow-200 px-1">name="nama_lengkap"</span><span className="text-blue-600">{">"}</span>
                  </div>
                  <div className="bg-black text-white p-4 border-t-4 border-black font-bold text-sm text-center">
                    HTML menciptakan kunci bernama: <br/>
                    <strong className="text-[#FFD700] text-xl">nama_lengkap</strong>
                  </div>
                </div>

                {/* Bagian PHP (Salah) */}
                <div className="bg-canvas text-black border-4 border-black shadow-neo-md flex flex-col relative opacity-90 transform hover:scale-105 transition-transform">
                  <div className="absolute top-2 right-2 bg-[#FF0000] text-white font-black px-2 py-1 rotate-12 border-2 border-black">SALAH!</div>
                  <div className="bg-[#2965F1] text-white p-3 border-b-4 border-black font-black uppercase flex items-center gap-2">
                    <span className="material-symbols-outlined">php</span> Koki PHP
                  </div>
                  <div className="p-4 font-mono text-sm bg-black text-white flex-1">
                    <span className="text-gray-500">{"// Menerima Data"}</span><br/>
                    <span className="text-blue-300">$nama_user</span> = <span className="text-pink-400">$_POST</span>[<span className="text-red-500 font-black bg-white px-1">"nama"</span>];
                  </div>
                  <div className="bg-[#FF0000] text-white p-4 border-t-4 border-black font-bold text-sm text-center">
                    PHP memaksa minta kunci: <br/>
                    <strong className="text-white text-xl">nama</strong><br/>
                    <span className="text-xs uppercase bg-black text-[#FFD700] px-1 mt-1 inline-block">Hasil: Error Undefined Array Key!</span>
                  </div>
                </div>

                {/* Bagian PHP (Benar) - Spanning 2 cols on md */}
                <div className="bg-canvas text-black border-4 border-black shadow-neo-md flex flex-col relative md:col-span-2 transform hover:-translate-y-2 transition-transform">
                  <div className="absolute top-2 right-2 bg-jade-vibrant text-white font-black px-2 py-1 rotate-12 border-2 border-black">BENAR!</div>
                  <div className="bg-[#2965F1] text-white p-3 border-b-4 border-black font-black uppercase flex items-center gap-2">
                    <span className="material-symbols-outlined">php</span> Koki PHP
                  </div>
                  <div className="p-4 font-mono text-sm bg-black text-white">
                    <span className="text-gray-500">{"// Menerima Data yang Tepat"}</span><br/>
                    <span className="text-blue-300">$nama_user</span> = <span className="text-pink-400">$_POST</span>[<span className="text-green-500 font-black bg-white px-1">"nama_lengkap"</span>];
                  </div>
                  <div className="bg-jade-vibrant text-white p-4 border-t-4 border-black font-bold text-sm text-center">
                    <strong>Kuncinya Cocok!</strong> PHP berhasil mengambil data dari tas kurir.
                  </div>
                </div>

              </div>
            </section>
            
            {/* Footer Nav */}
            <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4">
              <a href="/get-vs-post-php" className="bg-canvas text-black font-black uppercase text-sm md:text-lg px-4 py-3 md:px-6 md:py-4 border-4 border-black shadow-neo-md hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
                <span className="material-symbols-outlined font-black">arrow_back</span> GET vs POST
              </a>
              <a href="/koneksi-mysql-php" className="bg-[#2965F1] text-white font-black uppercase text-sm md:text-lg px-4 py-3 md:px-6 md:py-4 border-4 border-black shadow-neo-md hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 w-full sm:w-auto justify-center text-center">
                Lanjut ke: Koneksi MySQL <span className="material-symbols-outlined font-black">arrow_forward</span>
              </a>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}
