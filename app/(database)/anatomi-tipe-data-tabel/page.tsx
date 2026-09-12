"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

export default function AnatomiTabelPage() {
  const [isScanned, setIsScanned] = useState(false);

  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/anatomi-tipe-data-tabel', isActive: true },
          { label: 'Latihan Tipe Data', href: '/anatomi-tipe-data-tabel/latihan', isActive: false }
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-canvas relative" style={{ backgroundImage: 'radial-gradient(var(--color-outline) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">

            {/* Header & Hero Section */}
            <section className="bg-black border-4 border-black p-6 md:p-12 shadow-neo-xl text-center relative overflow-hidden text-white">
              <div className="absolute top-0 left-0 bg-white text-black font-black px-4 py-1 border-b-4 border-r-4 border-black shadow-neo-sm z-20 uppercase">
                Database 05
              </div>
              <div className="absolute -top-10 -right-10 z-0">
                <span className="material-symbols-outlined text-[150px] md:text-[250px] text-white opacity-20 transform rotate-12">biotech</span>
              </div>
              
              <div className="relative z-10 pt-8">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-mint-soft tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[4px_4px_0px_rgba(255,255,255,0.2)]">
                  Anatomi Tabel <br className="hidden md:block" /> & Jebakan Data
                </h1>
                <p className="text-base md:text-xl font-bold text-black bg-white inline-block px-4 py-2 md:px-6 md:py-3 border-4 border-black mb-8 md:mb-10 shadow-neo-md uppercase tracking-tight">
                  Mengenal isi perut tabel sebelum mulai memasukkan data!
                </p>
                <div>
                  <button
                    onClick={() => setIsScanned(!isScanned)}
                    className="bg-jade-vibrant text-white font-black text-xl md:text-3xl px-8 py-5 md:px-12 md:py-6 border-4 border-white shadow-neo-lg hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_#FFF] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all uppercase tracking-widest flex items-center gap-4 mx-auto"
                  >
                    {isScanned ? (
                      <><span>Hasil Lab Keluar!</span> <span className="material-symbols-outlined font-black text-4xl animate-pulse">check_circle</span></>
                    ) : (
                      <><span>Bedah Tabel</span> <span className="material-symbols-outlined font-black text-4xl">content_cut</span></>
                    )}
                  </button>
                </div>
              </div>
            </section>

            {/* Section 1: Aturan Mutlak Tabel */}
            <section className="bg-white border-4 border-black shadow-neo-xl p-6 md:p-12 rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-forest-teal text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">01</span>
                Aturan Mutlak Tabel
              </h2>

              <p className="text-lg md:text-xl font-bold text-forest-teal mb-8">
                Setiap tabel yang baik memiliki aturan baku yang pantang dilanggar. Tanpa dua hal ini, tabelmu akan kacau balau saat datanya sudah mencapai ribuan!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Primary Key */}
                <div className="bg-canvas border-4 border-black p-8 shadow-neo-md hover:-translate-y-2 transition-transform">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="material-symbols-outlined text-5xl text-jade-vibrant bg-white border-4 border-black p-2 rounded-full shadow-neo-sm">vpn_key</span>
                    <h3 className="text-2xl md:text-3xl font-black uppercase text-black">Primary Key</h3>
                  </div>
                  <p className="font-bold text-black text-lg bg-white p-4 border-2 border-black">
                    <strong>Syarat wajib tiap tabel!</strong> Ini adalah pengenal unik untuk setiap baris data yang sama sekali tidak boleh kembar.
                  </p>
                  <p className="mt-4 text-sm font-black uppercase bg-[#FFD700] inline-block px-3 py-1 border-2 border-black">Mirip: NIK KTP atau NISN Siswa</p>
                </div>

                {/* Auto Increment */}
                <div className="bg-mint-soft border-4 border-black p-8 shadow-neo-md hover:-translate-y-2 transition-transform">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="material-symbols-outlined text-5xl text-black bg-white border-4 border-black p-2 shadow-neo-sm rounded-none">plus_one</span>
                    <h3 className="text-2xl md:text-3xl font-black uppercase text-black tracking-tight">Auto Increment</h3>
                  </div>
                  <p className="font-bold text-black text-lg bg-white p-4 border-2 border-black">
                    <strong>Fitur ajaib database!</strong> Kolom ID akan bertambah sendiri secara otomatis (1, 2, 3...) tiap kali ada data baru masuk.
                  </p>
                  <p className="mt-4 text-sm font-black uppercase bg-black text-white inline-block px-3 py-1 border-2 border-white">Kita tidak perlu mengetik ID manual!</p>
                </div>
              </div>
            </section>

            {/* Section 2: Tipe Data & Jebakan Nomor HP */}
            <section className="bg-pine-deep border-4 border-black shadow-neo-xl p-6 md:p-12 -rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-white text-black w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">02</span>
                Tipe Data Terpopuler
              </h2>

              <p className="text-lg md:text-xl font-bold text-white mb-8 bg-black p-4 border-4 border-white shadow-[4px_4px_0px_0px_#FFF]">
                Komputer tidak sepintar manusia. Kamu harus memberitahu secara spesifik, apakah suatu kolom itu berisi huruf, angka, atau waktu.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {/* INT */}
                <div className="bg-white border-4 border-black p-6 shadow-neo-sm flex items-start gap-4 hover:translate-x-2 transition-transform">
                  <span className="material-symbols-outlined text-4xl text-forest-teal">pin</span>
                  <div>
                    <h3 className="text-xl font-black uppercase text-black mb-1">INT (Integer)</h3>
                    <p className="font-bold text-sm">Hanya untuk <strong>angka murni</strong> yang bisa dihitung matematika. (Contoh: Harga, Stok, ID).</p>
                  </div>
                </div>

                {/* VARCHAR */}
                <div className="bg-white border-4 border-black p-6 shadow-neo-sm flex items-start gap-4 hover:translate-x-2 transition-transform">
                  <span className="material-symbols-outlined text-4xl text-forest-teal">match_case</span>
                  <div>
                    <h3 className="text-xl font-black uppercase text-black mb-1">VARCHAR</h3>
                    <p className="font-bold text-sm">Untuk <strong>teks pendek</strong> campuran huruf dan angka (Max 255 karakter). (Contoh: Nama, Judul).</p>
                  </div>
                </div>

                {/* TEXT */}
                <div className="bg-white border-4 border-black p-6 shadow-neo-sm flex items-start gap-4 hover:translate-x-2 transition-transform">
                  <span className="material-symbols-outlined text-4xl text-forest-teal">article</span>
                  <div>
                    <h3 className="text-xl font-black uppercase text-black mb-1">TEXT</h3>
                    <p className="font-bold text-sm">Untuk <strong>teks yang sangat panjang</strong> berparagraf-paragraf. (Contoh: Isi Artikel, Pesan Buku Tamu).</p>
                  </div>
                </div>

                {/* TIMESTAMP */}
                <div className="bg-white border-4 border-black p-6 shadow-neo-sm flex items-start gap-4 hover:translate-x-2 transition-transform">
                  <span className="material-symbols-outlined text-4xl text-forest-teal">schedule</span>
                  <div>
                    <h3 className="text-xl font-black uppercase text-black mb-1">TIMESTAMP</h3>
                    <p className="font-bold text-sm"><strong>Penanda waktu otomatis.</strong> Akan mencatat tanggal & jam persis saat data masuk.</p>
                  </div>
                </div>
              </div>

              {/* JEBAKAN WARNING BLOCK */}
              <div className="bg-[#FF0000] border-4 border-black p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center shadow-[8px_8px_0px_0px_#000] transform rotate-2 hover:rotate-0 transition-transform">
                <span className="material-symbols-outlined text-white text-[80px] font-black drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] animate-bounce">warning</span>
                <div className="text-black">
                  <h3 className="text-2xl md:text-4xl font-black uppercase mb-2 text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] tracking-tight">
                    Jebakan Pemula: Nomor HP!
                  </h3>
                  <div className="bg-white border-4 border-black p-4 mt-4 text-lg font-bold shadow-neo-sm">
                    Jangan pernah gunakan tipe <code className="bg-black text-white px-2 uppercase">INT</code> untuk Nomor Telepon/WA! Kenapa? Karena angka <code className="text-[#FF0000]">0</code> di depan (0812...) akan dianggap tidak penting oleh matematika dan dibuang komputer menjadi (812...).
                    <br/><br/>
                    <strong>Aturan Emas:</strong> Jika angka itu tidak dipakai untuk ditambah/dikali (rumus matematika), selalu gunakan <code className="bg-jade-vibrant text-white px-2 uppercase border-2 border-black">VARCHAR</code>!
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Konsep NULL */}
            <section className="bg-canvas border-4 border-black shadow-neo-xl p-6 md:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-jade-vibrant text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">03</span>
                Misteri "NULL"
              </h2>

              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-1 space-y-6">
                  <p className="text-lg md:text-xl font-bold text-forest-teal leading-relaxed">
                    Dalam database, kamu akan sering melihat kata <strong className="bg-black text-white px-2 uppercase border-2 border-black">NULL</strong>. Apa artinya?
                  </p>
                  <p className="text-lg md:text-xl font-bold text-forest-teal leading-relaxed">
                    <code>NULL</code> artinya <strong>"Data Benar-benar Belum Diisi / Tidak Diketahui"</strong>. 
                  </p>
                  <div className="bg-mint-soft border-4 border-black p-6 shadow-neo-md">
                    <h3 className="text-xl font-black uppercase mb-2">NULL ≠ 0 atau Teks Kosong</h3>
                    <ul className="font-bold text-black text-base md:text-lg list-disc pl-5 space-y-2">
                      <li>Angka <code>0</code> adalah sebuah nilai (saldo nol rupiah).</li>
                      <li>Teks <code>""</code> (kosong) adalah sebuah nilai teks yang panjangnya nol.</li>
                      <li><code>NULL</code> berarti kotaknya belum tersentuh sama sekali!</li>
                    </ul>
                  </div>
                </div>

                <div className="lg:w-1/3 bg-white border-4 border-black shadow-neo-md p-6 text-center transform rotate-2 hover:rotate-0 transition-transform">
                  <span className="material-symbols-outlined text-[80px] text-gray-400 mb-4">question_mark</span>
                  <p className="font-black uppercase text-2xl text-black border-b-4 border-black pb-2 mb-2">Kekosongan Absolut</p>
                  <p className="font-bold text-forest-teal">Sama seperti kertas ujian yang belum ditulisi nama sekalipun.</p>
                </div>
              </div>
            </section>
            
            {/* Footer Nav */}
            <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4">
              <a href="/relasi-tabel" className="bg-white text-black font-black uppercase text-sm md:text-lg px-4 py-3 md:px-6 md:py-4 border-4 border-black shadow-neo-md hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
                <span className="material-symbols-outlined font-black">arrow_back</span> Relasi Tabel
              </a>
              <a href="/sql-dasar-ddl-dml" className="bg-forest-teal text-white font-black uppercase text-sm md:text-lg px-4 py-3 md:px-6 md:py-4 border-4 border-black shadow-neo-md hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 w-full sm:w-auto justify-center text-center">
                Lanjut ke: Bahasa SQL Dasar <span className="material-symbols-outlined font-black">arrow_forward</span>
              </a>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}
