"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

export default function SqlDasarPage() {
  const [isTyping, setIsTyping] = useState(false);

  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/sql-dasar-ddl-dml', isActive: true },
          { label: 'Latihan Query', href: '/sql-dasar-ddl-dml/latihan', isActive: false }
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-canvas relative" style={{ backgroundImage: 'radial-gradient(var(--color-outline) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">

            {/* Header & Hero Section */}
            <section className="bg-black border-4 border-black p-6 md:p-12 shadow-neo-xl text-center relative overflow-hidden text-white">
              <div className="absolute top-0 left-0 bg-white text-black font-black px-4 py-1 border-b-4 border-r-4 border-black shadow-neo-sm z-20 uppercase">
                Database 06
              </div>
              <div className="absolute -top-10 -right-10 z-0">
                <span className="material-symbols-outlined text-[150px] md:text-[250px] text-white opacity-20 transform rotate-12">terminal</span>
              </div>
              
              <div className="relative z-10 pt-8">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-mint-soft tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[4px_4px_0px_rgba(255,255,255,0.2)]">
                  Bahasa SQL Dasar: <br className="hidden md:block" /> DDL & DML
                </h1>
                <p className="text-base md:text-xl font-bold text-black bg-white inline-block px-4 py-2 md:px-6 md:py-3 border-4 border-black mb-8 md:mb-10 shadow-neo-md uppercase tracking-tight">
                  Cara manusia memerintah database layaknya bos!
                </p>
                <div>
                  <button
                    onClick={() => setIsTyping(!isTyping)}
                    className="bg-jade-vibrant text-white font-black text-xl md:text-3xl px-8 py-5 md:px-12 md:py-6 border-4 border-white shadow-neo-lg hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_#FFF] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all uppercase tracking-widest flex items-center gap-4 mx-auto"
                  >
                    {isTyping ? (
                      <><span>Mengetik Perintah...</span> <span className="material-symbols-outlined font-black text-4xl animate-pulse">keyboard</span></>
                    ) : (
                      <><span>Buka Terminal</span> <span className="material-symbols-outlined font-black text-4xl">code</span></>
                    )}
                  </button>
                </div>
              </div>
            </section>

            {/* Section 1: Aturan Main SQL */}
            <section className="bg-white border-4 border-black shadow-neo-xl p-6 md:p-12 rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-forest-teal text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">01</span>
                Aturan Main SQL
              </h2>

              <div className="flex flex-col md:flex-row gap-8 items-stretch">
                <div className="flex-1 bg-mint-soft border-4 border-black p-6 md:p-8 shadow-neo-md">
                  <span className="material-symbols-outlined text-5xl text-black mb-4">g_translate</span>
                  <h3 className="text-2xl font-black uppercase mb-2">Bahasa Universal</h3>
                  <p className="font-bold text-lg">
                    SQL (<em>Structured Query Language</em>) adalah bahasa ajaib yang dimengerti oleh hampir semua jenis database relasional di dunia (MySQL, PostgreSQL, Oracle, dll).
                  </p>
                </div>

                <div className="flex-1 bg-pine-deep text-white border-4 border-black p-6 md:p-8 shadow-neo-md">
                  <span className="material-symbols-outlined text-5xl text-white mb-4">spellcheck</span>
                  <h3 className="text-2xl font-black uppercase mb-2">Santai Tapi Tegas</h3>
                  <p className="font-bold text-lg">
                    Huruf BESAR atau <span className="lowercase">kecil</span>? Komputer tidak peduli (<em>Case-Insensitive</em>). TAPI, satu hal yang wajib: kamu <strong>HARUS</strong> mengakhiri setiap perintah dengan <strong>Titik Koma (;)</strong>.
                  </p>
                  <p className="font-black text-3xl bg-black text-jade-vibrant text-center p-2 mt-4 border-2 border-white">;</p>
                </div>
              </div>
            </section>

            {/* Section 2: DDL (Data Definition Language) */}
            <section className="bg-canvas border-4 border-black shadow-neo-xl p-6 md:p-12 -rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-black text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">02</span>
                DDL (Membangun Wadah)
              </h2>

              <p className="text-lg md:text-xl font-bold text-forest-teal mb-8">
                <strong>Data Definition Language</strong> adalah kumpulan mantra untuk membangun, mengubah, atau menghancurkan "Wadah" (Database & Tabel).
              </p>

              <div className="space-y-6">
                <div className="bg-white border-4 border-black shadow-neo-md p-6 flex flex-col md:flex-row items-center gap-6 group hover:-translate-y-1 transition-transform">
                  <div className="bg-black text-white font-mono p-4 w-full md:w-1/2 border-2 border-black">
                    <span className="text-pink-400">CREATE DATABASE</span> db_toko;
                  </div>
                  <div className="w-full md:w-1/2">
                    <h4 className="font-black text-xl uppercase mb-1 flex items-center gap-2">
                      <span className="material-symbols-outlined">kitchen</span> Beli Lemari
                    </h4>
                    <p className="font-bold text-gray-700">Menciptakan database (lemari) baru dari ketiadaan.</p>
                  </div>
                </div>

                <div className="bg-white border-4 border-black shadow-neo-md p-6 flex flex-col md:flex-row items-center gap-6 group hover:-translate-y-1 transition-transform">
                  <div className="bg-black text-white font-mono p-4 w-full md:w-1/2 border-2 border-black">
                    <span className="text-pink-400">CREATE TABLE</span> siswa (...);
                  </div>
                  <div className="w-full md:w-1/2">
                    <h4 className="font-black text-xl uppercase mb-1 flex items-center gap-2">
                      <span className="material-symbols-outlined">inventory_2</span> Pasang Laci
                    </h4>
                    <p className="font-bold text-gray-700">Membuat tabel (laci) di dalam database beserta kolom-kolomnya.</p>
                  </div>
                </div>

                <div className="bg-white border-4 border-black shadow-neo-md p-6 flex flex-col md:flex-row items-center gap-6 group hover:-translate-y-1 transition-transform">
                  <div className="bg-[#FF0000] text-white font-mono p-4 w-full md:w-1/2 border-2 border-black shadow-[4px_4px_0px_0px_#000]">
                    <span className="text-black font-black">DROP TABLE</span> siswa;
                  </div>
                  <div className="w-full md:w-1/2">
                    <h4 className="font-black text-xl uppercase mb-1 flex items-center gap-2 text-[#FF0000]">
                      <span className="material-symbols-outlined">delete_forever</span> Bom Atom!
                    </h4>
                    <p className="font-bold text-gray-700">Hati-hati! Ini akan menghancurkan tabel secara permanen beserta seluruh isinya tanpa sisa!</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: DML (CRUD) */}
            <section className="bg-jade-vibrant border-4 border-black shadow-neo-xl p-6 md:p-12 rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-white text-black w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">03</span>
                DML (Mengelola Isi / CRUD)
              </h2>

              <p className="text-lg md:text-xl font-bold text-white mb-8 bg-black p-4 border-4 border-white shadow-[4px_4px_0px_0px_#FFF]">
                <strong>Data Manipulation Language</strong>. Jika wadahnya sudah ada, saatnya kita memasukkan, membaca, mengubah, dan menghapus barang di dalamnya. Kita menyebutnya siklus <strong>C-R-U-D</strong>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* CREATE */}
                <div className="bg-white border-4 border-black p-6 shadow-neo-md hover:-translate-y-2 transition-transform">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-black uppercase text-black">Create (C)</h3>
                    <span className="bg-mint-soft px-3 py-1 border-2 border-black font-black uppercase text-sm">Insert</span>
                  </div>
                  <div className="bg-black text-mint-soft font-mono text-sm p-4 border-2 border-black mb-4">
                    <span className="text-pink-400">INSERT INTO</span> siswa (nama) <br/>
                    <span className="text-pink-400">VALUES</span> ('Budi');
                  </div>
                  <p className="font-bold text-forest-teal">Menambahkan data kartu baru ke dalam laci.</p>
                </div>

                {/* READ */}
                <div className="bg-white border-4 border-black p-6 shadow-neo-md hover:-translate-y-2 transition-transform">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-black uppercase text-black">Read (R)</h3>
                    <span className="bg-[#FFD700] px-3 py-1 border-2 border-black font-black uppercase text-sm">Select</span>
                  </div>
                  <div className="bg-black text-mint-soft font-mono text-sm p-4 border-2 border-black mb-4">
                    <span className="text-pink-400">SELECT</span> * <span className="text-pink-400">FROM</span> siswa;
                  </div>
                  <p className="font-bold text-forest-teal">Tampilkan (baca) semua data di dalam laci. (Tanda bintang <code>*</code> artinya "Semua Kolom").</p>
                </div>

                {/* UPDATE */}
                <div className="bg-white border-4 border-black p-6 shadow-neo-md hover:-translate-y-2 transition-transform">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-black uppercase text-black">Update (U)</h3>
                    <span className="bg-blue-400 text-white px-3 py-1 border-2 border-black font-black uppercase text-sm">Update</span>
                  </div>
                  <div className="bg-black text-mint-soft font-mono text-sm p-4 border-2 border-black mb-4">
                    <span className="text-pink-400">UPDATE</span> siswa <br/>
                    <span className="text-pink-400">SET</span> nama='Andi' <br/>
                    <span className="text-yellow-400">WHERE</span> id=1;
                  </div>
                  <p className="font-bold text-forest-teal">Mengubah isi tulisan di kartu yang sudah ada.</p>
                </div>

                {/* DELETE */}
                <div className="bg-white border-4 border-black p-6 shadow-neo-md hover:-translate-y-2 transition-transform">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-black uppercase text-black">Delete (D)</h3>
                    <span className="bg-[#FF0000] text-white px-3 py-1 border-2 border-black font-black uppercase text-sm">Delete</span>
                  </div>
                  <div className="bg-black text-mint-soft font-mono text-sm p-4 border-2 border-black mb-4">
                    <span className="text-pink-400">DELETE FROM</span> siswa <br/>
                    <span className="text-yellow-400">WHERE</span> id=1;
                  </div>
                  <p className="font-bold text-forest-teal">Merobek dan membuang kartu dari laci.</p>
                </div>
              </div>
            </section>

            {/* TIPS ANTI-FRUSTRASI (WARNING) */}
            <section className="bg-black border-4 border-black shadow-neo-xl p-6 md:p-12 -rotate-1 hover:rotate-0 transition-transform">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="flex-shrink-0 animate-bounce pt-4">
                  <span className="material-symbols-outlined text-[100px] text-[#FFD700] drop-shadow-[4px_4px_0px_#FFF]">warning</span>
                </div>
                <div className="text-white">
                  <h2 className="text-3xl md:text-5xl font-black uppercase text-[#FFD700] tracking-tighter mb-6 border-b-4 border-white pb-4">
                    Tips Anti-Frustrasi Pemula!
                  </h2>
                  <ol className="list-decimal pl-6 space-y-6 text-lg font-bold">
                    <li className="pl-2">
                      <span className="bg-white text-black px-2 py-1 uppercase font-black border-2 border-white">Kutip Tunggal untuk Teks!</span><br/>
                      Jika kolom bertipe <code>VARCHAR</code> atau <code>TEXT</code>, datanya <strong>WAJIB</strong> diapit tanda kutip tunggal: <code>'Budi'</code>. Jika tipe angkanya <code>INT</code>, tidak perlu tanda kutip: <code>1000</code>.
                    </li>
                    <li className="pl-2">
                      <span className="bg-[#FF0000] text-white px-2 py-1 uppercase font-black border-2 border-white shadow-[2px_2px_0px_0px_#FFF]">JANGAN LUPA KLAUSA "WHERE"!</span><br/>
                      Jangan pernah mengeksekusi <code>UPDATE</code> atau <code>DELETE</code> tanpa perintah <code>WHERE</code> (kondisi). Jika kamu mengetik <code>DELETE FROM siswa;</code>, maka <strong>SELURUH ISI DATABASESEMU AKAN TERHAPUS TANPA SISA!</strong> (Kiamat Data).
                    </li>
                    <li className="pl-2">
                      <span className="bg-jade-vibrant text-white px-2 py-1 uppercase font-black border-2 border-white">Gunakan phpMyAdmin</span><br/>
                      Setelah mengetik perintah buta di layar Terminal hitam, selalu intip hasilnya secara visual di software GUI <strong>phpMyAdmin</strong>. Supaya kamu yakin datanya benar-benar masuk/berubah.
                    </li>
                  </ol>
                </div>
              </div>
            </section>
            
            {/* Footer Nav */}
            <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4">
              <a href="/anatomi-tipe-data-tabel" className="bg-white text-black font-black uppercase text-sm md:text-lg px-4 py-3 md:px-6 md:py-4 border-4 border-black shadow-neo-md hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
                <span className="material-symbols-outlined font-black">arrow_back</span> Anatomi Tabel
              </a>
              <a href="/advanced-query-sql" className="bg-forest-teal text-white font-black uppercase text-sm md:text-lg px-4 py-3 md:px-6 md:py-4 border-4 border-black shadow-neo-md hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 w-full sm:w-auto justify-center text-center">
                Lanjut ke: Advanced Query <span className="material-symbols-outlined font-black">arrow_forward</span>
              </a>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}
