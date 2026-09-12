"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

export default function ErdDatabasePage() {
  const [isDrawing, setIsDrawing] = useState(false);

  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/erd-database', isActive: true },
          { label: 'Tantangan ERD', href: '/erd-database/tugas', isActive: false }
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-canvas relative" style={{ backgroundImage: 'radial-gradient(var(--color-outline) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">

            {/* Header & Hero Section */}
            <section className="bg-black border-4 border-black p-6 md:p-12 shadow-neo-xl text-center relative overflow-hidden text-white">
              <div className="absolute top-0 left-0 bg-white text-black font-black px-4 py-1 border-b-4 border-r-4 border-black shadow-neo-sm z-20 uppercase">
                Database 03
              </div>
              <div className="absolute -top-10 -right-10 z-0">
                <span className="material-symbols-outlined text-[150px] md:text-[250px] text-white opacity-20 transform rotate-12">architecture</span>
              </div>
              
              <div className="relative z-10 pt-8">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-mint-soft tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[4px_4px_0px_rgba(255,255,255,0.2)]">
                  Cetak Biru Database: <br className="hidden md:block" /> Merancang ERD
                </h1>
                <p className="text-base md:text-xl font-bold text-black bg-white inline-block px-4 py-2 md:px-6 md:py-3 border-4 border-black mb-8 md:mb-10 shadow-neo-md uppercase tracking-tight">
                  Tukang bangunan butuh denah, Programmer butuh ERD!
                </p>
                <div>
                  <button
                    onClick={() => setIsDrawing(!isDrawing)}
                    className="bg-jade-vibrant text-white font-black text-xl md:text-3xl px-8 py-5 md:px-12 md:py-6 border-4 border-white shadow-neo-lg hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_#FFF] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all uppercase tracking-widest flex items-center gap-4 mx-auto"
                  >
                    {isDrawing ? (
                      <><span>Menggambar Denah...</span> <span className="material-symbols-outlined font-black text-4xl animate-pulse">draw</span></>
                    ) : (
                      <><span>Mulai Merancang</span> <span className="material-symbols-outlined font-black text-4xl">design_services</span></>
                    )}
                  </button>
                </div>
              </div>
            </section>

            {/* Section 1: Kenapa Harus Menggambar? */}
            <section className="bg-white border-4 border-black shadow-neo-xl p-6 md:p-12 rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-forest-teal text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">01</span>
                Kenapa Harus Menggambar?
              </h2>

              <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                <div className="flex-1 space-y-6">
                  <p className="text-lg md:text-xl font-bold text-forest-teal leading-relaxed">
                    Sebelum mengetik kode program (SQL) yang panjang dan rumit, seorang <strong className="bg-mint-soft text-black px-2 border-2 border-black">Arsitek Database</strong> wajib merancang <em>blueprint</em> (cetak biru) terlebih dahulu.
                  </p>
                  <div className="bg-canvas border-4 border-black p-6 shadow-neo-md">
                    <p className="font-bold text-black text-lg">
                      Diagram cetak biru ini disebut <strong>ERD (Entity Relationship Diagram)</strong>. Jika kita membangun database tanpa ERD, itu sama seperti kuli bangunan yang nekat membangun rumah tingkat tanpa panduan denah dari arsitek—ujung-ujungnya pasti rubuh!
                    </p>
                  </div>
                </div>
                
                <div className="lg:w-1/3 bg-pine-deep border-4 border-black shadow-neo-md p-6 text-white flex flex-col items-center justify-center -rotate-2 hover:rotate-0 transition-transform">
                  <span className="material-symbols-outlined text-[80px] text-white mb-4">account_tree</span>
                  <p className="font-black uppercase text-center text-xl">Denah Logika Data</p>
                </div>
              </div>
            </section>

            {/* Section 2: 3 Simbol Sakti ERD */}
            <section className="bg-mint-soft border-4 border-black shadow-neo-xl p-6 md:p-12 -rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-black text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">02</span>
                3 Simbol Sakti ERD
              </h2>

              <p className="text-lg font-bold text-black mb-8 bg-white p-4 border-4 border-black shadow-neo-sm">
                Dalam bahasa gambar ERD standar, kita cukup menggunakan tiga bentuk geometri utama untuk mendeskripsikan kerumitan sistem apa pun di dunia ini!
              </p>

              <div className="flex flex-col gap-6">
                
                {/* 1. Entitas */}
                <div className="bg-white border-4 border-black flex flex-col md:flex-row shadow-neo-md hover:translate-x-2 transition-transform">
                  <div className="md:w-1/3 bg-forest-teal p-8 flex flex-col items-center justify-center text-white border-b-4 md:border-b-0 md:border-r-4 border-black">
                    <div className="w-32 h-16 border-4 border-white bg-transparent flex items-center justify-center shadow-[4px_4px_0px_0px_#FFF]">
                      <span className="font-black uppercase text-xl">Pelanggan</span>
                    </div>
                    <span className="mt-6 font-black uppercase tracking-widest">Persegi Panjang</span>
                  </div>
                  <div className="p-6 md:p-8 flex-1">
                    <h3 className="text-3xl font-black uppercase text-black mb-2 flex items-center gap-2">
                      <span className="bg-jade-vibrant text-white w-8 h-8 flex items-center justify-center rounded-full text-lg border-2 border-black">1</span>
                      Entitas (Entity)
                    </h3>
                    <p className="font-bold text-forest-teal text-lg leading-relaxed">
                      Merupakan <strong>Objek Utama</strong> atau tokoh utama dalam ceritamu. Sesuatu yang wujud fisiknya atau logikanya nyata.
                      Saat ERD ini nantinya diubah menjadi kode (SQL), sebuah Entitas akan berubah wujud menjadi sebuah <strong>Tabel Utama</strong>.
                    </p>
                    <p className="mt-4 text-sm font-black uppercase bg-canvas inline-block px-3 py-1 border-2 border-black">Contoh: Siswa, Guru, Barang, Buku</p>
                  </div>
                </div>

                {/* 2. Atribut */}
                <div className="bg-white border-4 border-black flex flex-col md:flex-row shadow-neo-md hover:translate-x-2 transition-transform">
                  <div className="md:w-1/3 bg-pine-deep p-8 flex flex-col items-center justify-center text-white border-b-4 md:border-b-0 md:border-r-4 border-black">
                    <div className="w-32 h-16 border-4 border-white bg-transparent flex items-center justify-center rounded-[50%] shadow-[4px_4px_0px_0px_#FFF]">
                      <span className="font-black uppercase text-xl text-center leading-none">Nama</span>
                    </div>
                    <span className="mt-6 font-black uppercase tracking-widest">Oval (Elips)</span>
                  </div>
                  <div className="p-6 md:p-8 flex-1">
                    <h3 className="text-3xl font-black uppercase text-black mb-2 flex items-center gap-2">
                      <span className="bg-jade-vibrant text-white w-8 h-8 flex items-center justify-center rounded-full text-lg border-2 border-black">2</span>
                      Atribut (Attribute)
                    </h3>
                    <p className="font-bold text-forest-teal text-lg leading-relaxed">
                      Merupakan <strong>Sifat atau Rincian</strong> yang menjelaskan sang Entitas. Oval ini biasanya menempel bagai ranting pada Entitas.
                      Nantinya saat menjadi database sungguhan, Atribut akan berubah peran menjadi <strong>Kolom (Field)</strong>.
                    </p>
                    <p className="mt-4 text-sm font-black uppercase bg-canvas inline-block px-3 py-1 border-2 border-black">Contoh: NISN, Nama_Lengkap, Alamat, Harga</p>
                  </div>
                </div>

                {/* 3. Relasi */}
                <div className="bg-white border-4 border-black flex flex-col md:flex-row shadow-neo-md hover:translate-x-2 transition-transform">
                  <div className="md:w-1/3 bg-jade-vibrant p-8 flex flex-col items-center justify-center text-white border-b-4 md:border-b-0 md:border-r-4 border-black">
                    <div className="w-24 h-24 border-4 border-white bg-transparent flex items-center justify-center rotate-45 shadow-[4px_4px_0px_0px_#FFF] relative mt-4">
                      <span className="font-black uppercase text-sm -rotate-45">Membeli</span>
                    </div>
                    <span className="mt-10 font-black uppercase tracking-widest">Belah Ketupat</span>
                  </div>
                  <div className="p-6 md:p-8 flex-1">
                    <h3 className="text-3xl font-black uppercase text-black mb-2 flex items-center gap-2">
                      <span className="bg-forest-teal text-white w-8 h-8 flex items-center justify-center rounded-full text-lg border-2 border-black">3</span>
                      Relasi (Relationship)
                    </h3>
                    <p className="font-bold text-forest-teal text-lg leading-relaxed">
                      Bentuk ini adalah "jembatan" atau <strong>Kata Kerja</strong> penghubung yang mengikat dua Entitas agar bisa saling berkomunikasi. 
                      Relasi menjelaskan bagaimana dua benda tersebut berinteraksi.
                    </p>
                    <p className="mt-4 text-sm font-black uppercase bg-canvas inline-block px-3 py-1 border-2 border-black">Contoh: Pelanggan [MEMBELI] Barang</p>
                  </div>
                </div>

              </div>
            </section>

            {/* Section 3: Praktik Modern AI & DBML */}
            <section className="bg-white border-4 border-black shadow-neo-xl p-6 md:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-jade-vibrant text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">03</span>
                Praktik Industri Modern
              </h2>

              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/2 space-y-6">
                  <p className="text-lg md:text-xl font-bold text-forest-teal leading-relaxed">
                    Dulu, mahasiswa IT harus menggambar diagram ERD secara manual di atas kertas atau menggunakan software lambat (seperti Visio).
                  </p>
                  <p className="text-lg md:text-xl font-bold text-forest-teal leading-relaxed">
                    <strong>Sekarang?</strong> Perusahaan modern menggunakan pendekatan <em>"Diagram as Code"</em>. Artinya, kamu cukup mengetik kode pendek (DBML), dan gambar diagram yang cantik serta profesional akan tercipta otomatis di layar!
                  </p>
                  <div className="bg-black text-white p-6 border-4 border-black shadow-neo-md -rotate-1">
                    <h3 className="text-xl font-black uppercase text-mint-soft mb-2">Alat Sakti: dbdiagram.io</h3>
                    <p className="font-bold">Website canggih ini memungkinkanmu membuat ERD hanya bermodalkan ketikan jari. Sangat cepat, modern, dan langsung siap dipresentasikan ke bos/klien!</p>
                  </div>
                </div>

                <div className="lg:w-1/2 w-full border-4 border-black shadow-neo-lg bg-pine-deep p-6 md:p-8 transform rotate-2 hover:rotate-0 transition-transform">
                  <div className="bg-black rounded-none p-4 font-mono text-sm md:text-base text-mint-soft mb-4">
                    <span className="text-pink-400">Table</span> Pelanggan {"{"} <br/>
                    &nbsp;&nbsp;id <span className="text-blue-300">int</span> [<span className="text-yellow-300">pk</span>] <br/>
                    &nbsp;&nbsp;nama <span className="text-blue-300">varchar</span> <br/>
                    {"}"}
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-white mr-2">arrow_downward</span>
                    <span className="font-black uppercase text-white">Otomatis Menjadi Gambar Visual!</span>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Footer Nav */}
            <div className="flex justify-between items-center pt-8">
              <a href="/teknis-database-modern" className="bg-canvas text-black font-black uppercase text-sm md:text-lg px-4 py-3 md:px-6 md:py-4 border-4 border-black shadow-neo-md hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2">
                <span className="material-symbols-outlined font-black">arrow_back</span> Lanskap DB
              </a>
              <a href="/relasi-tabel" className="bg-white text-black font-black uppercase text-sm md:text-lg px-4 py-3 md:px-6 md:py-4 border-4 border-black shadow-neo-md hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2">
                Lanjut ke: Relasi Antar Tabel <span className="material-symbols-outlined font-black">arrow_forward</span>
              </a>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}
