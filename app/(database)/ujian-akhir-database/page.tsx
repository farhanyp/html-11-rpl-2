"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

export default function UjianAkhirPage() {
  const [isReady, setIsReady] = useState(false);

  return (
    <>
      <Headbar
        links={[
          { label: 'Ujian Kelulusan', href: '/ujian-akhir-database', isActive: true },
          { label: 'Klaim Sertifikat', href: '/ujian-akhir-database/sertifikat', isActive: false }
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-canvas relative" style={{ backgroundImage: 'radial-gradient(var(--color-outline) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">

            {/* Header & Hero Section */}
            <section className="bg-black border-4 border-black p-6 md:p-12 shadow-neo-xl text-center relative overflow-hidden text-white">
              <div className="absolute top-0 left-0 bg-[#FFD700] text-black font-black px-4 py-1 border-b-4 border-r-4 border-black shadow-neo-sm z-20 uppercase">
                Final Boss 10
              </div>
              <div className="absolute -bottom-10 -right-10 z-0 flex gap-4">
                <span className="material-symbols-outlined text-[150px] md:text-[200px] text-[#FFD700] opacity-30 transform -rotate-12">workspace_premium</span>
              </div>
              
              <div className="relative z-10 pt-8">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#FFD700] tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[4px_4px_0px_rgba(255,255,255,0.2)]">
                  Ujian Akhir: <br className="hidden md:block" /> Arsitek Database
                </h1>
                <p className="text-base md:text-xl font-bold text-black bg-white inline-block px-4 py-2 md:px-6 md:py-3 border-4 border-black mb-8 md:mb-10 shadow-neo-md uppercase tracking-tight">
                  Waktunya membuktikan diri! Apakah kamu layak disebut Backend Engineer?
                </p>
                <div>
                  <button
                    onClick={() => setIsReady(!isReady)}
                    className={`font-black text-xl md:text-3xl px-8 py-5 md:px-12 md:py-6 border-4 shadow-neo-lg hover:-translate-y-2 hover:-translate-x-2 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all uppercase tracking-widest flex items-center gap-4 mx-auto ${isReady ? 'bg-jade-vibrant text-white border-white shadow-[8px_8px_0px_0px_#FFF]' : 'bg-[#FFD700] text-black border-black shadow-[8px_8px_0px_0px_#000]'}`}
                  >
                    {isReady ? (
                      <><span>Saya Siap Ujian!</span> <span className="material-symbols-outlined font-black text-4xl animate-pulse">check_circle</span></>
                    ) : (
                      <><span>Terima Tantangan</span> <span className="material-symbols-outlined font-black text-4xl animate-bounce">local_fire_department</span></>
                    )}
                  </button>
                </div>
              </div>
            </section>

            {/* Section 1: Pilih Tema Bisnismu */}
            <section className="bg-white border-4 border-black shadow-neo-xl p-6 md:p-12 rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-[#FFD700] text-black w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">01</span>
                Pilih Tema Bisnismu!
              </h2>

              <p className="text-lg md:text-xl font-bold text-forest-teal mb-8">
                Jika di materi sebelumnya kita bersama-sama membangun <em>Sistem Laundry</em>, di ujian ini kamu bebas <strong>memilih 1 tema bisnis</strong> untuk dibangun dari nol secara mandiri.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-canvas border-4 border-black p-4 flex flex-col items-center justify-center text-center shadow-neo-sm hover:-translate-y-2 transition-transform cursor-pointer group">
                  <span className="material-symbols-outlined text-5xl mb-2 text-black group-hover:text-[#FF0000] transition-colors">sports_esports</span>
                  <h3 className="font-black uppercase">Rental PS</h3>
                </div>
                <div className="bg-canvas border-4 border-black p-4 flex flex-col items-center justify-center text-center shadow-neo-sm hover:-translate-y-2 transition-transform cursor-pointer group">
                  <span className="material-symbols-outlined text-5xl mb-2 text-black group-hover:text-[#FF0000] transition-colors">car_repair</span>
                  <h3 className="font-black uppercase">Bengkel</h3>
                </div>
                <div className="bg-canvas border-4 border-black p-4 flex flex-col items-center justify-center text-center shadow-neo-sm hover:-translate-y-2 transition-transform cursor-pointer group">
                  <span className="material-symbols-outlined text-5xl mb-2 text-black group-hover:text-[#FF0000] transition-colors">auto_stories</span>
                  <h3 className="font-black uppercase">Toko Buku</h3>
                </div>
                <div className="bg-black text-white border-4 border-black p-4 flex flex-col items-center justify-center text-center shadow-neo-sm hover:-translate-y-2 transition-transform cursor-pointer group">
                  <span className="material-symbols-outlined text-5xl mb-2 text-white group-hover:text-jade-vibrant transition-colors">lightbulb</span>
                  <h3 className="font-black uppercase">Atau Ide Lain!</h3>
                </div>
              </div>
            </section>

            {/* Section 2: Syarat Mutlak Kelulusan */}
            <section className="bg-pine-deep text-white border-4 border-black shadow-neo-xl p-6 md:p-12 -rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-8 md:mb-10 border-b-4 border-white pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-black text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-white shadow-[4px_4px_0px_0px_#FFF] flex-shrink-0 text-2xl md:text-4xl">02</span>
                4 Syarat Kelulusan
              </h2>

              <div className="space-y-6">
                {/* Syarat 1 */}
                <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000] flex gap-4 md:gap-6 items-start text-black">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FF0000] shrink-0 border-4 border-black flex items-center justify-center -rotate-6">
                    <span className="font-black text-white text-2xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-2">Desain Blueprint Berelasi</h3>
                    <p className="font-bold text-gray-700">Harus merancang ERD logis minimal 2 tabel yang berelasi (<em className="text-forest-teal">One-to-Many</em>) menggunakan alat bantu desain pilihanmu.</p>
                  </div>
                </div>

                {/* Syarat 2 */}
                <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000] flex gap-4 md:gap-6 items-start text-black">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-jade-vibrant shrink-0 border-4 border-black flex items-center justify-center -rotate-6">
                    <span className="font-black text-white text-2xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-2">Pondasi Anatomi Kuat</h3>
                    <p className="font-bold text-gray-700">Tabel induk dan transaksi wajib memiliki <strong>Primary Key</strong> yang dilengkapi fitur <strong>Auto Increment</strong>.</p>
                  </div>
                </div>

                {/* Syarat 3 */}
                <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000] flex gap-4 md:gap-6 items-start text-black">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-mint-soft shrink-0 border-4 border-black flex items-center justify-center -rotate-6">
                    <span className="font-black text-black text-2xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-2">Demonstrasi C-R-U-D</h3>
                    <p className="font-bold text-gray-700">Mampu mendemonstrasikan proses CRUD penuh secara mandiri lewat terminal/GUI: Memasukkan, Membaca, Mengubah, dan Menghapus data tanpa <em>error</em>.</p>
                  </div>
                </div>

                {/* Syarat 4 */}
                <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000] flex gap-4 md:gap-6 items-start text-black">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FFD700] shrink-0 border-4 border-black flex items-center justify-center -rotate-6">
                    <span className="font-black text-black text-2xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-2">Sihir Laporan Bisnis</h3>
                    <p className="font-bold text-gray-700">Mampu menampilkan laporan akhir dari data yang sudah digabungkan secara utuh menggunakan perintah <strong>JOIN</strong>.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Tiket Kelulusan */}
            <section className="bg-[#FFD700] border-4 border-black shadow-neo-xl p-8 md:p-16 text-center rotate-1 hover:rotate-0 transition-transform">
              <span className="material-symbols-outlined text-[100px] text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)] animate-bounce mb-4">rocket_launch</span>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-black uppercase tracking-tighter mb-6">
                Selamat Bekerja!
              </h2>
              
              <div className="bg-white border-4 border-black p-6 shadow-neo-md max-w-3xl mx-auto">
                <p className="text-lg md:text-2xl font-bold text-black leading-relaxed">
                  Jika kamu berhasil melewati keempat ujian akhir ini secara mandiri tanpa dibantu...
                </p>
                <div className="my-6 border-b-4 border-dashed border-black"></div>
                <p className="text-xl md:text-3xl font-black uppercase text-[#FF0000]">
                  Kamu sudah resmi memiliki logika berpikir seorang <br className="hidden md:block" /> 
                  <span className="bg-black text-[#FFD700] px-4 py-2 mt-4 inline-block border-4 border-black">Backend Engineer & Arsitek Database!</span>
                </p>
              </div>
            </section>
            
            {/* Footer Nav */}
            <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4">
              <a href="/project-laundry-db" className="bg-canvas text-black font-black uppercase text-sm md:text-lg px-4 py-3 md:px-6 md:py-4 border-4 border-black shadow-neo-md hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
                <span className="material-symbols-outlined font-black">arrow_back</span> Proyek Laundry
              </a>
              <a href="/konsep-php" className="bg-[#2965F1] text-white font-black uppercase text-sm md:text-lg px-4 py-3 md:px-6 md:py-4 border-4 border-black shadow-neo-md hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 w-full sm:w-auto justify-center text-center">
                Gas Modul PHP Dinamis! <span className="material-symbols-outlined font-black">rocket</span>
              </a>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}
