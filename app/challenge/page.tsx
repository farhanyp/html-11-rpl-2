"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';

export default function ChallengePage() {
  return (
    <>
      <Headbar 
        links={[
          { label: 'Ujian Akhir (Challenge)', href: '/challenge', isActive: true },
        ]} 
      />
      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />
        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-10 md:space-y-16">

            {/* Header Section */}
            <section className="bg-black border-4 border-black p-5 md:p-12 shadow-[8px_8px_0px_0px_rgba(255,73,219,1)] text-center relative overflow-hidden">
               <span className="material-symbols-outlined absolute -top-4 -left-4 text-[120px] opacity-20 text-white rotate-12">military_tech</span>
               <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-[120px] opacity-20 text-white -rotate-12">local_fire_department</span>
               <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4 md:mb-6 relative z-10">
                 Tugas Akhir: <br/><span className="text-[#FF49DB] drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">Bikin Sistem CRUD Sendiri!</span>
               </h1>
               <p className="text-sm md:text-xl font-bold text-black bg-[#FACC15] inline-block px-4 md:px-6 py-2 md:py-3 border-4 border-black mb-6 md:mb-10 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] relative z-10">
                 Waktunya membuktikan ilmu ERD, Relasi, dan DDL/DML yang sudah kalian pelajari.
               </p>
            </section>

            {/* Briefing Section */}
            <section className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-5 md:p-12">
              <h2 className="text-2xl md:text-3xl font-black text-black uppercase mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#2DD4BF] text-black w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 material-symbols-outlined text-2xl md:text-3xl">assignment</span>
                Misi Anda
              </h2>
              
              <div className="space-y-6 text-sm md:text-lg font-bold text-black/80 leading-relaxed">
                <p>
                  Selama ini kalian sudah belajar teori dan mengerjakan studi kasus yang sudah saya siapkan (seperti Sistem Laundry). Sekarang, saatnya kalian yang menjadi <strong>Arsitek Utama</strong>!
                </p>
                <p className="bg-[#effefb] p-4 md:p-6 border-l-[8px] md:border-l-[12px] border-[#2DD4BF] border-y-4 border-r-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
                  <strong>Tantangannya:</strong> Buatlah sebuah rancangan sistem database (ERD) minimal yang terdiri dari <strong>2 Tabel yang saling Berelasi (One-to-Many)</strong>, lalu eksekusi database tersebut menggunakan perintah SQL di terminal MySQL. Tema sistemnya <strong>BEBAS</strong>! Sesuaikan dengan hobi atau ketertarikan kalian.
                </p>
              </div>
            </section>

            {/* Syarat Kelulusan */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-[#FF49DB] border-4 border-black p-5 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl md:text-2xl font-black text-white uppercase mb-6 flex items-center gap-3">
                  <span className="material-symbols-outlined text-3xl md:text-4xl">rule</span>
                  Syarat Wajib
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 bg-white p-3 md:p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <span className="material-symbols-outlined text-[#FF49DB] font-black">check_box</span>
                    <span className="font-bold text-sm md:text-base">Ada 2 Tabel Induk dan Anak (berelasi).</span>
                  </li>
                  <li className="flex items-start gap-3 bg-white p-3 md:p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <span className="material-symbols-outlined text-[#FF49DB] font-black">check_box</span>
                    <span className="font-bold text-sm md:text-base">Menggunakan fitur AUTO_INCREMENT untuk Primary Key.</span>
                  </li>
                  <li className="flex items-start gap-3 bg-white p-3 md:p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <span className="material-symbols-outlined text-[#FF49DB] font-black">check_box</span>
                    <span className="font-bold text-sm md:text-base">Wajib membuktikan perintah JOIN bisa berjalan (DML).</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#FACC15] border-4 border-black p-5 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl md:text-2xl font-black text-black uppercase mb-6 flex items-center gap-3">
                  <span className="material-symbols-outlined text-3xl md:text-4xl">casino</span>
                  Ide Tema (Boleh Pakai)
                </h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  <span className="bg-white border-2 border-black px-3 py-1.5 md:px-4 md:py-2 font-black text-xs md:text-sm uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-pointer">🎮 Rental PS</span>
                  <span className="bg-white border-2 border-black px-3 py-1.5 md:px-4 md:py-2 font-black text-xs md:text-sm uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-pointer">📚 Perpustakaan</span>
                  <span className="bg-white border-2 border-black px-3 py-1.5 md:px-4 md:py-2 font-black text-xs md:text-sm uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-pointer">🔧 Bengkel Motor</span>
                  <span className="bg-white border-2 border-black px-3 py-1.5 md:px-4 md:py-2 font-black text-xs md:text-sm uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-pointer">☕ Warnet / Kafe</span>
                  <span className="bg-white border-2 border-black px-3 py-1.5 md:px-4 md:py-2 font-black text-xs md:text-sm uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-pointer">🐱 Pet Shop</span>
                  <span className="bg-white border-2 border-black px-3 py-1.5 md:px-4 md:py-2 font-black text-xs md:text-sm uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-pointer">⚽ Turnamen Futsal</span>
                </div>
              </div>
            </section>

            {/* Checklist Pengumpulan */}
            <section className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-5 md:p-12">
              <h2 className="text-2xl md:text-3xl font-black text-black uppercase mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#2DD4BF] text-black w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 material-symbols-outlined text-2xl md:text-3xl">upload_file</span>
                Yang Harus Dikumpulkan
              </h2>
              
              <div className="space-y-6 font-bold text-sm md:text-lg text-black/80">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-black text-white rounded-full flex items-center justify-center font-black flex-shrink-0">1</div>
                  <div>
                    <h4 className="text-lg md:text-xl font-black text-black uppercase">Screenshot ERD</h4>
                    <p>Gambar ERD yang kalian buat di dbdiagram.io atau draw.io.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-black text-white rounded-full flex items-center justify-center font-black flex-shrink-0">2</div>
                  <div>
                    <h4 className="text-lg md:text-xl font-black text-black uppercase">File SQL / Screenshot Terminal</h4>
                    <p>Bukti eksekusi DDL (CREATE TABLE) dan DML (INSERT, SELECT JOIN) di terminal.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer Alert */}
            <div className="bg-[#FF49DB] border-4 border-black p-5 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
              <p className="text-lg md:text-2xl font-black text-white uppercase leading-relaxed">
                "Jangan takut error! Error adalah guru terbaik bagi seorang Programmer."
              </p>
            </div>
            
            <div className="h-8 w-full"></div>
          </div>
        </main>
      </div>
    </>
  );
}
