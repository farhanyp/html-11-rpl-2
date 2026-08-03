"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import CodeBlock from '@/components/CodeBlock';

export default function ProjectPage() {
  return (
    <>
      <Headbar 
        links={[
          { label: 'Project Utama', href: '/project', isActive: true }
        ]} 
      />
      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />
        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-16">
            
            {/* Header & Hero Section */}
            <section className="bg-[#2DD4BF] border-4 border-black p-5 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
               <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-black tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">
                 Praktik Mandiri: Sistem Database Laundry
               </h1>
               <p className="text-sm md:text-xl font-bold text-black bg-white inline-block px-4 md:px-6 py-2 md:py-3 border-4 border-black mb-6 md:mb-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                 Implementasi nyata mendesain ERD instan, operasi CRUD, JOIN, dan rumus hitung keuntungan bisnis langsung di MySQL.
               </p>
               <div>
                 <Link href="#section1" className="bg-[#FF49DB] inline-flex items-center gap-3 text-white font-black text-sm sm:text-base md:text-2xl px-6 md:px-10 py-3 md:py-5 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all uppercase">
                   Mulai Praktik Laundry
                   <span className="material-symbols-outlined text-4xl">local_laundry_service</span>
                 </Link>
               </div>
            </section>

            {/* Section 1: Desain ERD Instan */}
            <section id="section1" className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-5 md:p-12 overflow-x-hidden min-w-0">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#FACC15] text-black w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">1</span>
                Desain ERD Instan di dbdiagram.io
              </h2>
              
              <div className="bg-[#F4F0EA] border-4 border-black p-4 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-8">
                <p className="font-bold text-sm md:text-lg text-black/80 leading-relaxed">
                  Sebelum mengetik kode di MySQL, biasakan untuk menggambar visualisasinya! Kita bisa melakukan ini secara instan menggunakan alat <strong className="text-black bg-white px-2 py-1 border-2 border-black">dbdiagram.io</strong>.<br/><br/>
                  <strong>Langkah-langkah:</strong><br/>
                  1. Buka website <a href="https://dbdiagram.io/d" target="_blank" className="text-blue-600 underline font-black">dbdiagram.io</a> di tab baru.<br/>
                  2. Hapus seluruh kode contoh bawaan di sebelah kiri layar.<br/>
                  3. Salin dan tempel (Paste) kode <strong>DBML</strong> di bawah ini, dan lihat gambar ERD ajaib muncul seketika di sebelah kanan!
                </p>
              </div>

              <CodeBlock 
                language="sql" 
                code={`Table paket {
  id_paket int [primary key, increment]
  nama_paket varchar(50) [not null]
  harga_per_kg int [not null]
}

Table transaksi {
  id_transaksi int [primary key, increment]
  nama_pelanggan varchar(100) [not null]
  id_paket_tamu int
  berat_kg float [not null]
  tgl_transaksi date [not null]
}

// Hubungan Relasi (Foreign Key)
Ref: paket.id_paket < transaksi.id_paket_tamu`} 
              />
            </section>

            {/* Section 2: DDL Pembuatan Database */}
            <section className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-5 md:p-12 overflow-x-hidden min-w-0">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#2DD4BF] text-black w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">2</span>
                Perancangan & DDL (Membuat Tabel di MySQL)
              </h2>

              <p className="font-bold text-sm md:text-lg text-black/80 leading-relaxed mb-6 md:mb-8">
                Karena <strong className="bg-[#FF49DB] text-white px-2 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] inline-block mt-1 mb-1">1 Paket (misal: Cuci Kilat) bisa digunakan oleh Banyak Transaksi</strong>, maka sistem ini menggunakan relasi <strong>One-to-Many</strong>. <br/>
                Oleh karena itu, ID Paket harus dititipkan sebagai Kunci Tamu di tabel Transaksi. Salin baris kode DDL ini untuk mengeksekusinya ke dalam MySQL Anda!
              </p>

              <CodeBlock 
                language="sql" 
                code={`-- Membuat dan Mengaktifkan Database
CREATE DATABASE db_laundry_simpel;
USE db_laundry_simpel;

-- Membuat Tabel Induk
CREATE TABLE paket (
    id_paket INT AUTO_INCREMENT PRIMARY KEY,
    nama_paket VARCHAR(50) NOT NULL,
    harga_per_kg INT NOT NULL
);

-- Membuat Tabel Anak dengan Foreign Key
CREATE TABLE transaksi (
    id_transaksi INT AUTO_INCREMENT PRIMARY KEY,
    nama_pelanggan VARCHAR(100) NOT NULL,
    id_paket_tamu INT,
    berat_kg FLOAT NOT NULL,
    tgl_transaksi DATE NOT NULL,
    FOREIGN KEY (id_paket_tamu) REFERENCES paket(id_paket)
);`} 
              />
            </section>

            {/* Section 3: CRUD & DML */}
            <section className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-5 md:p-12 overflow-x-hidden min-w-0">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#FF49DB] text-white w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">3</span>
                Mengisi & Mengolah Data (CRUD)
              </h2>

              <div className="space-y-8 md:space-y-12">
                
                {/* INSERT */}
                <div>
                  <h4 className="text-xl md:text-2xl font-black text-black uppercase mb-4">1. CREATE (Mengisi Data)</h4>
                  <CodeBlock 
                    code={`-- Masukkan Menu Paket Laundry
INSERT INTO paket (nama_paket, harga_per_kg) VALUES
('Cuci Reguler 2 Hari', 6000),
('Cuci Kilat 1 Hari', 10000),
('Cuci Setrika Super', 15000);

-- Masukkan Nota Transaksi Awal
INSERT INTO transaksi (nama_pelanggan, id_paket_tamu, berat_kg, tgl_transaksi) VALUES
('Anya Forger', 2, 3.5, '2026-07-20'),
('Naruto Uzumaki', 1, 5.0, '2026-07-21'),
('Luffy', 3, 10.2, '2026-07-21');`} 
                  />
                </div>

                {/* READ JOIN */}
                <div>
                  <h4 className="text-xl md:text-2xl font-black text-black uppercase mb-4">2. READ (Menyatukan dengan JOIN)</h4>
                  <p className="font-bold text-sm md:text-lg text-black/80 leading-relaxed mb-4">Untuk melihat data transaksi secara utuh (tidak hanya berupa angka ID paket), kita harus menggabungkannya!</p>
                  <CodeBlock 
                    code={`SELECT t.nama_pelanggan, p.nama_paket, t.berat_kg, t.tgl_transaksi
FROM transaksi t
JOIN paket p ON t.id_paket_tamu = p.id_paket;`} 
                  />
                </div>

                {/* UPDATE & DELETE */}
                <div>
                  <h4 className="text-xl md:text-2xl font-black text-black uppercase mb-4">3. UPDATE & DELETE (Awas Lupa WHERE!)</h4>
                  <CodeBlock 
                    code={`-- Anya nambah cucian jadi 4 Kg
UPDATE transaksi 
SET berat_kg = 4.0 
WHERE id_transaksi = 1;

-- Naruto membatalkan cuciannya
DELETE FROM transaksi 
WHERE id_transaksi = 2;`} 
                  />
                </div>

              </div>
            </section>

            {/* Section 4: Perhitungan Matematika Bisnis */}
            <section className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-5 md:p-12 overflow-x-hidden min-w-0">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-8 border-b-4 border-black pb-4 text-center">
                Mengitung Metrik Bisnis Laundry
              </h2>

              <p className="font-bold text-sm md:text-lg text-black/80 leading-relaxed mb-8 text-center">
                Apakah Anda tahu SQL bisa langsung menghitung matematika kompleks? Mari kita buka rahasianya!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                
                {/* Metric 1: Banyak Pesanan */}
                <div className="border-4 border-black p-4 md:p-6 bg-[#effefb] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all min-w-0">
                  <div className="flex items-center gap-3 md:gap-4 mb-4">
                    <span className="material-symbols-outlined text-3xl md:text-4xl text-[#2DD4BF] font-black">receipt_long</span>
                    <h3 className="text-xl md:text-2xl font-black text-black uppercase">Banyak Pesanan Masuk</h3>
                  </div>
                  <p className="font-bold text-black/80 text-sm md:text-base leading-relaxed mb-6">
                    Gunakan fungsi sakti <strong className="bg-[#2DD4BF] px-1 border border-black">COUNT(*)</strong> untuk menghitung jumlah total nota (baris data) di dalam tabel transaksi!
                  </p>
                  <div className="bg-white text-black p-3 md:p-4 border-4 border-black font-mono text-xs md:text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold overflow-x-auto">
                    SELECT COUNT(*) AS total_pesanan<br/>FROM transaksi;
                  </div>
                </div>

                {/* Metric 2: Total Keuntungan */}
                <div className="border-4 border-black p-4 md:p-6 bg-[#fff0f9] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all min-w-0">
                  <div className="flex items-center gap-3 md:gap-4 mb-4">
                    <span className="material-symbols-outlined text-3xl md:text-4xl text-[#FF49DB] font-black">payments</span>
                    <h3 className="text-xl md:text-2xl font-black text-black uppercase">Total Omzet Pendapatan</h3>
                  </div>
                  <p className="font-bold text-black/80 text-sm md:text-base leading-relaxed mb-6">
                    Kombinasikan <strong className="bg-[#FF49DB] text-white px-1 border border-black">SUM()</strong> dengan perkalian matematika (<code className="font-black text-base md:text-lg">berat * harga_per_kg</code>) melalui perintah JOIN!
                  </p>
                  <div className="bg-white text-black p-3 md:p-4 border-4 border-black font-mono text-xs md:text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold overflow-x-auto">
                    SELECT SUM(t.berat_kg * p.harga_per_kg) <br/>
                    AS total_keuntungan_laundry <br/>
                    FROM transaksi t <br/>
                    JOIN paket p ON t.id_paket_tamu = p.id_paket;
                  </div>
                </div>

              </div>
            </section>

            {/* Footer */}
            <div className="bg-[#FACC15] border-4 border-black p-5 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center animate-pulse">
              <span className="material-symbols-outlined text-4xl md:text-6xl text-black mb-4">emoji_events</span>
              <p className="text-lg md:text-2xl font-black text-black leading-snug">
                Luar biasa! Anda telah berhasil menyelesaikan siklus penuh sistem laundry.<br/><br/>
                <span className="bg-white text-black px-3 py-1 border-2 md:border-4 border-black inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-2 text-sm md:text-lg">Mulai dari menggambar visual ERD di dbdiagram.io, mengolah nota transaksi (CRUD), hingga menghitung omzet pendapatan usaha pakai Matematika SQL!</span>
              </p>
            </div>
            
            <div className="h-8 w-full"></div>
          </div>
        </main>
      </div>
    </>
  );
}
