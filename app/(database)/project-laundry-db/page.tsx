"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

export default function ProjectLaundryPage() {
  const [isWashing, setIsWashing] = useState(false);

  return (
    <>
      <Headbar
        links={[
          { label: 'Proyek Akhir', href: '/project-laundry-db', isActive: true },
          { label: 'Kumpulkan Tugas', href: '/project-laundry-db/submit', isActive: false }
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-canvas relative" style={{ backgroundImage: 'radial-gradient(var(--color-outline) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">

            {/* Header & Hero Section */}
            <section className="bg-black border-4 border-black p-6 md:p-12 shadow-neo-xl text-center relative overflow-hidden text-white">
              <div className="absolute top-0 left-0 bg-[#FFD700] text-black font-black px-4 py-1 border-b-4 border-r-4 border-black shadow-neo-sm z-20 uppercase">
                Final Project Database
              </div>
              <div className="absolute -top-10 -right-10 z-0">
                <span className="material-symbols-outlined text-[150px] md:text-[250px] text-white opacity-20 transform rotate-12">local_laundry_service</span>
              </div>
              
              <div className="relative z-10 pt-8">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#FFD700] tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[4px_4px_0px_rgba(255,255,255,0.2)]">
                  Proyek Puncak: <br className="hidden md:block" /> Sistem Laundry
                </h1>
                <p className="text-base md:text-xl font-bold text-black bg-white inline-block px-4 py-2 md:px-6 md:py-3 border-4 border-black mb-8 md:mb-10 shadow-neo-md uppercase tracking-tight">
                  Terapkan semua ilmumu dari nol hingga menghasilkan laporan keuangan!
                </p>
                <div>
                  <button
                    onClick={() => setIsWashing(!isWashing)}
                    className="bg-jade-vibrant text-white font-black text-xl md:text-3xl px-8 py-5 md:px-12 md:py-6 border-4 border-white shadow-neo-lg hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_#FFF] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all uppercase tracking-widest flex items-center gap-4 mx-auto"
                  >
                    {isWashing ? (
                      <><span>Mesin Cuci Berputar!</span> <span className="material-symbols-outlined font-black text-4xl animate-spin">cyclone</span></>
                    ) : (
                      <><span>Mulai Proyek</span> <span className="material-symbols-outlined font-black text-4xl">play_circle</span></>
                    )}
                  </button>
                </div>
              </div>
            </section>

            {/* Section 1: Desain Visual (DBML) */}
            <section className="bg-white border-4 border-black shadow-neo-xl p-6 md:p-12 rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-forest-teal text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">01</span>
                Langkah 1: Cetak Biru (DBML)
              </h2>

              <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                <div className="flex-1 space-y-6">
                  <p className="text-lg md:text-xl font-bold text-forest-teal leading-relaxed">
                    Setiap sistem hebat dimulai dari gambar cetak biru. Buka <strong>dbdiagram.io</strong> dan rancang dua buah tabel: Tabel <code className="bg-mint-soft px-1 border border-black">paket</code> (jenis layanan cuci) dan Tabel <code className="bg-mint-soft px-1 border border-black">transaksi</code> (orderan pelanggan).
                  </p>
                  <div className="bg-black text-mint-soft font-mono p-4 border-4 border-black text-sm">
                    <span className="text-pink-400">Table</span> paket {"{"} <br/>
                    &nbsp;&nbsp;id <span className="text-blue-300">int</span> [<span className="text-yellow-300">pk</span>, <span className="text-yellow-300">increment</span>] <br/>
                    &nbsp;&nbsp;nama_paket <span className="text-blue-300">varchar</span> <br/>
                    &nbsp;&nbsp;harga_per_kg <span className="text-blue-300">int</span> <br/>
                    {"}"}
                    <br/><br/>
                    <span className="text-pink-400">Table</span> transaksi {"{"} <br/>
                    &nbsp;&nbsp;id_transaksi <span className="text-blue-300">int</span> [<span className="text-yellow-300">pk</span>] <br/>
                    &nbsp;&nbsp;nama_pelanggan <span className="text-blue-300">varchar</span> <br/>
                    &nbsp;&nbsp;id_paket <span className="text-blue-300">int</span> <span className="text-gray-500">{"// Foreign Key!"}</span><br/>
                    &nbsp;&nbsp;berat_kg <span className="text-blue-300">int</span> <br/>
                    {"}"}
                  </div>
                </div>
                <div className="lg:w-1/3 bg-pine-deep text-white border-4 border-black shadow-neo-md p-6 flex flex-col items-center justify-center transform rotate-2">
                  <span className="material-symbols-outlined text-[100px] mb-4 text-mint-soft">design_services</span>
                  <h3 className="font-black text-2xl uppercase mb-2">Relasi 1:N</h3>
                  <p className="font-bold text-center">Satu jenis paket bisa dipesan oleh banyak pelanggan di tabel transaksi.</p>
                </div>
              </div>
            </section>

            {/* Section 2: Pembuatan Wadah (DDL) */}
            <section className="bg-mint-soft border-4 border-black shadow-neo-xl p-6 md:p-12 -rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-black text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">02</span>
                Langkah 2: Eksekusi DDL
              </h2>

              <p className="text-lg font-bold text-black mb-8 bg-white p-4 border-4 border-black shadow-neo-sm">
                Buka Terminal MySQL / phpMyAdmin. Waktunya mewujudkan gambarmu ke dalam database sungguhan!
              </p>

              <div className="space-y-6">
                <div className="bg-black text-white font-mono p-6 border-4 border-black shadow-neo-lg text-sm md:text-base">
                  <span className="text-gray-500 block mb-2">-- Membuat Lemari Utama</span>
                  <span className="text-pink-400 font-black">CREATE DATABASE</span> db_laundry; <br/>
                  <span className="text-pink-400 font-black">USE</span> db_laundry; <br/><br/>
                  
                  <span className="text-gray-500 block mb-2">-- Membuat Tabel Paket Induk</span>
                  <span className="text-pink-400 font-black">CREATE TABLE</span> paket ( <br/>
                  &nbsp;&nbsp;id <span className="text-blue-300">INT PRIMARY KEY AUTO_INCREMENT</span>, <br/>
                  &nbsp;&nbsp;nama_paket <span className="text-blue-300">VARCHAR(50)</span>, <br/>
                  &nbsp;&nbsp;harga_per_kg <span className="text-blue-300">INT</span> <br/>
                  ); <br/><br/>

                  <span className="text-gray-500 block mb-2">-- Membuat Tabel Transaksi dengan Relasi (Tamu)</span>
                  <span className="text-pink-400 font-black">CREATE TABLE</span> transaksi ( <br/>
                  &nbsp;&nbsp;id <span className="text-blue-300">INT PRIMARY KEY AUTO_INCREMENT</span>, <br/>
                  &nbsp;&nbsp;nama_pelanggan <span className="text-blue-300">VARCHAR(50)</span>, <br/>
                  &nbsp;&nbsp;id_paket <span className="text-blue-300">INT</span>, <span className="text-gray-500"> -- Ini si Kunci Tamu</span><br/>
                  &nbsp;&nbsp;berat_kg <span className="text-blue-300">INT</span> <br/>
                  );
                </div>
              </div>
            </section>

            {/* Section 3: Pengisian Data (DML) */}
            <section className="bg-canvas border-4 border-black shadow-neo-xl p-6 md:p-12 rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-jade-vibrant text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">03</span>
                Langkah 3: Toko Buka! (DML)
              </h2>

              <p className="text-lg md:text-xl font-bold text-forest-teal mb-8">
                Tabel sudah siap. Sekarang kita masukkan daftar paket laundry dan simulasikan ada 2 pelanggan yang datang mencuci!
              </p>

              <div className="bg-black text-mint-soft font-mono p-6 border-4 border-black shadow-neo-lg text-sm md:text-base">
                <span className="text-gray-500 block mb-2">-- Input Jenis Paket (Combo)</span>
                <span className="text-pink-400 font-black">INSERT INTO</span> paket (nama_paket, harga_per_kg) <span className="text-pink-400 font-black">VALUES</span> <br/>
                (<span className="text-jade-vibrant">'Cuci Kering Standar'</span>, <span className="text-orange-400">6000</span>), <br/>
                (<span className="text-jade-vibrant">'Cuci Setrika Kilat'</span>, <span className="text-orange-400">10000</span>); <br/><br/>

                <span className="text-gray-500 block mb-2">-- Pelanggan Budi (Pilih paket Standar ID 1, Berat 5kg)</span>
                <span className="text-pink-400 font-black">INSERT INTO</span> transaksi (nama_pelanggan, id_paket, berat_kg) <br/>
                <span className="text-pink-400 font-black">VALUES</span> (<span className="text-jade-vibrant">'Budi'</span>, <span className="text-orange-400">1</span>, <span className="text-orange-400">5</span>); <br/><br/>

                <span className="text-gray-500 block mb-2">-- Pelanggan Siti (Pilih paket Kilat ID 2, Berat 3kg)</span>
                <span className="text-pink-400 font-black">INSERT INTO</span> transaksi (nama_pelanggan, id_paket, berat_kg) <br/>
                <span className="text-pink-400 font-black">VALUES</span> (<span className="text-jade-vibrant">'Siti'</span>, <span className="text-orange-400">2</span>, <span className="text-orange-400">3</span>);
              </div>
            </section>

            {/* Section 4: Laporan Keuangan (JOIN + Agregasi) */}
            <section className="bg-pine-deep border-4 border-black shadow-neo-xl p-6 md:p-12 text-white">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#FFD700] uppercase mb-8 md:mb-10 border-b-4 border-white pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-[#FFD700] text-black w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-white shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">04</span>
                Langkah 4: Laporan Keuangan
              </h2>

              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-1 space-y-6">
                  <p className="text-lg md:text-xl font-bold text-white leading-relaxed">
                    Bos memintamu menghitung total omzet hari ini. Berapa rupiah yang masuk ke kasir?
                  </p>
                  <p className="text-lg font-bold text-black bg-mint-soft p-4 border-4 border-black">
                    <strong>Tantangannya:</strong> Harga per-KG ada di tabel <code>paket</code>, sedangkan Berat cucian ada di tabel <code>transaksi</code>. Kita harus men-JOIN mereka, lalu mengalikannya, dan melakukan SUM!
                  </p>
                </div>
                <div className="lg:w-1/3 flex justify-center">
                  <span className="material-symbols-outlined text-[120px] text-[#FFD700] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] animate-bounce">request_quote</span>
                </div>
              </div>

              <div className="mt-8 bg-black text-white font-mono p-6 border-4 border-[#FFD700] shadow-[8px_8px_0px_0px_#FFD700]">
                <span className="text-gray-500 block mb-4">-- Ultimate Query: JOIN + Hitung Matematika + SUM</span>
                <span className="text-pink-400 font-black text-lg md:text-xl">SELECT</span> <br/>
                &nbsp;&nbsp;<span className="text-jade-vibrant font-black text-lg md:text-xl">SUM</span>(transaksi.berat_kg * paket.harga_per_kg) <span className="text-yellow-400">AS</span> Total_Omzet <br/>
                <span className="text-pink-400 font-black text-lg md:text-xl">FROM</span> transaksi <br/>
                <span className="text-blue-300 font-black text-lg md:text-xl">INNER JOIN</span> paket <span className="text-yellow-400">ON</span> transaksi.id_paket = paket.id;
              </div>

              <div className="mt-8 bg-[#FFD700] text-black p-6 border-4 border-white text-center shadow-neo-md transform -rotate-1 hover:rotate-0 transition-transform">
                <h3 className="font-black text-2xl uppercase mb-2">Hasil di Layar Komputer:</h3>
                <div className="text-5xl font-black">
                  Total_Omzet: Rp 60.000
                </div>
                <p className="font-bold mt-2">
                  (Budi: 5kg x 6rb = 30rb) + (Siti: 3kg x 10rb = 30rb) = 60.000! <strong>Ajaib!</strong>
                </p>
              </div>
            </section>
            
            {/* Footer Nav */}
            <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4">
              <a href="/join-matematika-bisnis" className="bg-canvas text-black font-black uppercase text-sm md:text-lg px-4 py-3 md:px-6 md:py-4 border-4 border-black shadow-neo-md hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
                <span className="material-symbols-outlined font-black">arrow_back</span> JOIN & Agregasi
              </a>
              <a href="/konsep-php" className="bg-[#2965F1] text-white font-black uppercase text-sm md:text-lg px-4 py-3 md:px-6 md:py-4 border-4 border-black shadow-neo-md hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 w-full sm:w-auto justify-center text-center">
                Mulai Modul PHP (Backend) <span className="material-symbols-outlined font-black">php</span>
              </a>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}
