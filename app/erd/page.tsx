"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import CodeBlock from '@/components/CodeBlock';

export default function ErdPage() {
  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/erd', isActive: true },

        ]}
      />
      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />
        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-16">

            {/* Header & Hero Section */}
            <section className="bg-[#FACC15] border-4 border-black p-5 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-black tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">
                Mendesain Cetak Biru Database dengan ERD
              </h1>
              <p className="text-sm md:text-xl font-bold text-black bg-white inline-block px-4 md:px-6 py-2 md:py-3 border-4 border-black mb-6 md:mb-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Gambarkan denah rumah data Anda secara terstruktur sebelum mulai menyentuh kode query.
              </p>
              <div>
                <Link href="#section1" className="bg-[#2DD4BF] inline-flex items-center gap-3 text-black font-black text-sm sm:text-base md:text-2xl px-6 md:px-10 py-3 md:py-5 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all uppercase">
                  Belajar Gambar ERD
                  <span className="material-symbols-outlined text-4xl">draw</span>
                </Link>
              </div>
            </section>

            {/* Section 1: Apa itu ERD & Analogi Arsitek */}
            <section id="section1" className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-5 md:p-12">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#FF49DB] text-white w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">1</span>
                Mengapa Kita Butuh ERD?
              </h2>

              <div className="bg-[#F4F0EA] border-4 border-black p-4 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-10">
                <p className="font-bold text-sm md:text-lg text-black/80 leading-relaxed">
                  Bayangkan Anda adalah seorang arsitek yang diminta membangun sebuah gedung sekolah raksasa. Apakah Anda akan langsung menyemen bata secara acak? Tentu tidak! Anda pasti akan menggambar <strong>Cetak Biru (Blueprint)</strong> alias denahnya terlebih dahulu agar susunan ruang kelas, ruang guru, dan toilet tidak saling bertabrakan atau berantakan.<br /><br />
                  Di dunia pemrograman, <strong>ERD (Entity Relationship Diagram)</strong> adalah peta atau denah awal tersebut! Kita harus menggambar bentuk tabel dan hubungannya di atas kertas (atau aplikasi) sebelum benar-benar membuat database di komputer.
                </p>
              </div>

              <h3 className="text-2xl font-black text-black uppercase mb-6 text-center">3 Komponen Utama ERD</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Entitas */}
                <div className="border-4 border-black p-4 md:p-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 md:hover:-translate-y-2 transition-all flex flex-col items-center text-center min-w-0">
                  <div className="h-24 md:h-32 flex items-center justify-center mb-4 w-full">
                    {/* Visualisasi Persegi Panjang */}
                    <div className="bg-[#2DD4BF] border-4 border-black px-4 md:px-6 py-2 md:py-4 font-black text-lg md:text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase">
                      Siswa
                    </div>
                  </div>
                  <h4 className="text-lg md:text-xl font-black text-black uppercase mb-2">Entitas <br /><span className="text-xs md:text-sm">(Persegi Panjang)</span></h4>
                  <p className="font-bold text-black/80 text-xs md:text-sm leading-relaxed">
                    Objek nyata berbentuk kata benda yang datanya ingin disimpan di dalam sistem.
                  </p>
                </div>

                {/* Atribut */}
                <div className="border-4 border-black p-4 md:p-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 md:hover:-translate-y-2 transition-all flex flex-col items-center text-center min-w-0">
                  <div className="h-24 md:h-32 flex items-center justify-center mb-4 w-full">
                    {/* Visualisasi Oval */}
                    <div className="bg-[#FACC15] border-4 border-black px-6 md:px-8 py-2 md:py-4 font-black text-lg md:text-2xl rounded-[100%] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <span className="underline decoration-4">NISN</span>
                    </div>
                  </div>
                  <h4 className="text-lg md:text-xl font-black text-black uppercase mb-2">Atribut <br /><span className="text-xs md:text-sm">(Oval)</span></h4>
                  <p className="font-bold text-black/80 text-xs md:text-sm leading-relaxed">
                    Ciri atau karakteristik dari entitas. Khusus <strong className="text-black bg-white border border-black px-1">Primary Key</strong> namanya wajib diberi garis bawah!
                  </p>
                </div>

                {/* Relasi */}
                <div className="border-4 border-black p-4 md:p-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 md:hover:-translate-y-2 transition-all flex flex-col items-center text-center overflow-hidden min-w-0">
                  <div className="h-24 md:h-32 flex items-center justify-center mb-4 w-full relative">
                    {/* Visualisasi Belah Ketupat */}
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-[#FF49DB] border-4 border-black rotate-45 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <span className="-rotate-45 font-black text-white text-[10px] md:text-xs uppercase leading-none text-center">Menempati</span>
                    </div>
                  </div>
                  <h4 className="text-lg md:text-xl font-black text-black uppercase mb-2">Relasi <br /><span className="text-xs md:text-sm">(Belah Ketupat)</span></h4>
                  <p className="font-bold text-black/80 text-xs md:text-sm leading-relaxed">
                    Kata kerja penghubung yang menjelaskan interaksi atau ikatan antar-entitas.
                  </p>
                </div>

              </div>
            </section>

            {/* Section 2: Contoh Kasus & Cardinality */}
            <section className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-5 md:p-12 overflow-x-hidden min-w-0">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#2DD4BF] text-black w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">2</span>
                Menentukan Hubungan (One-to-Many)
              </h2>

              <p className="font-bold text-sm md:text-lg text-black/80 leading-relaxed mb-6 md:mb-10">
                Mari kita buat contoh ERD untuk kasus <strong className="bg-[#FACC15] px-2 py-1 border-2 border-black text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] inline-block mt-1 mb-1">Toko Sekolah</strong>. Kita memiliki dua buah entitas: <strong>KATEGORI</strong> (seperti Makanan, Alat Tulis) dan <strong>PRODUK</strong> (seperti Pensil, Roti).
              </p>

              {/* ERD Diagram Visualisation */}
              <div className="bg-[#1e1e1e] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-6 md:mb-10 w-full overflow-x-auto flex justify-start md:justify-center items-center rounded-sm">
                <img src="/erd.svg" alt="Entity Relationship Diagram Kategori dan Produk" className="min-w-[500px] md:min-w-0 max-w-none md:max-w-full h-auto drop-shadow-md" />
              </div>

              <div className="bg-white border-4 border-black p-4 md:p-6 border-l-[8px] md:border-l-[12px] border-l-[#FF49DB] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="text-lg md:text-xl font-black text-black mb-2 uppercase">Aturan Pengikatan (Kunci Tamu):</h4>
                <p className="font-bold text-black/80 leading-relaxed text-sm md:text-lg">
                  Perhatikan huruf <strong className="text-black text-lg md:text-2xl mx-1">1</strong> dan <strong className="text-black text-lg md:text-2xl mx-1">M</strong> (Many/Banyak) pada gambar! <br /><br />
                  Karena <strong className="bg-[#2DD4BF] px-1 border border-black text-black inline-block mb-1">1 Kategori bisa memiliki Banyak Produk</strong>, maka ID (Primary Key) dari tabel Kategori HARUS dititipkan sebagai <strong>Kunci Tamu (Foreign Key)</strong> ke dalam tabel Produk agar mereka terikat resmi dalam sistem database.
                </p>
              </div>

            </section>

            {/* Section 3: Transisi ERD ke SQL Code */}
            <section className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-5 md:p-12 overflow-x-hidden min-w-0">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#FACC15] text-black w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">3</span>
                Dari Gambar Menjadi Kode Tabel
              </h2>

              <p className="font-bold text-sm md:text-lg text-black/80 leading-relaxed mb-6 md:mb-8">
                Inilah keajaiban ERD! Gambar denah di atas kini bisa langsung diterjemahkan menjadi baris kode <strong>SQL DDL (Data Definition Language)</strong> yang siap dieksekusi di terminal Anda.
              </p>

              <CodeBlock
                code={`-- 1. Menerjemahkan Entitas Induk (Kategori)
CREATE TABLE kategori (
  id_kategori INT AUTO_INCREMENT PRIMARY KEY,
  nama_kategori VARCHAR(50) NOT NULL
);

-- 2. Menerjemahkan Entitas Anak (Produk) berserta ikatan Relasinya
CREATE TABLE produk (
  id_produk INT AUTO_INCREMENT PRIMARY KEY,
  nama_produk VARCHAR(100) NOT NULL,
  harga INT NOT NULL,
  stok INT DEFAULT 0,
  
  -- Menitipkan ID Kategori (Sesuai aturan 1-to-Many di ERD)
  id_kategori_tamu INT,
  FOREIGN KEY (id_kategori_tamu) REFERENCES kategori(id_kategori)
);`}
              />
            </section>

            {/* Footer */}
            <div className="bg-[#FF49DB] border-4 border-black p-5 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center animate-pulse">
              <span className="material-symbols-outlined text-4xl md:text-6xl text-white mb-4">gpp_good</span>
              <p className="text-lg md:text-2xl font-black text-white leading-snug">
                Luar biasa! Denah rumah data Anda sudah selesai dirancang dan diimplementasikan.<br /><br />
                <span className="bg-white text-black px-3 py-1 border-2 md:border-4 border-black inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-2">Sekarang, Anda sudah siap 100% untuk masuk ke ruang praktik utama: Eksekusi Query CRUD!</span>
              </p>
            </div>

            <div className="h-8 w-full"></div>
          </div>
        </main>
      </div>
    </>
  );
}
