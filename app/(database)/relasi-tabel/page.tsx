"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

export default function RelasiTabelPage() {
  const [isLinked, setIsLinked] = useState(false);

  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/relasi-tabel', isActive: true },
          { label: 'Kuis Relasi', href: '/relasi-tabel/kuis', isActive: false }
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-canvas relative" style={{ backgroundImage: 'radial-gradient(var(--color-outline) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">

            {/* Header & Hero Section */}
            <section className="bg-pine-deep border-4 border-black p-6 md:p-12 shadow-neo-xl text-center relative overflow-hidden text-white">
              <div className="absolute top-0 left-0 bg-white text-black font-black px-4 py-1 border-b-4 border-r-4 border-black shadow-neo-sm z-20 uppercase">
                Database 04
              </div>
              <div className="absolute -bottom-10 -right-10 z-0 flex gap-4">
                <span className="material-symbols-outlined text-[150px] md:text-[200px] text-white opacity-10 transform -rotate-12">link</span>
                <span className="material-symbols-outlined text-[150px] md:text-[200px] text-white opacity-10 transform rotate-12">join_inner</span>
              </div>
              
              <div className="relative z-10 pt-8">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                  Jaringan Logika: <br className="hidden md:block" /> Relasi Antar Tabel
                </h1>
                <p className="text-base md:text-xl font-bold text-black bg-mint-soft inline-block px-4 py-2 md:px-6 md:py-3 border-4 border-black mb-8 md:mb-10 shadow-neo-md uppercase tracking-tight">
                  Seni menghubungkan kepingan data yang terpisah!
                </p>
                <div>
                  <button
                    onClick={() => setIsLinked(!isLinked)}
                    className={`text-white font-black text-xl md:text-3xl px-8 py-5 md:px-12 md:py-6 border-4 border-white shadow-neo-lg hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_#FFF] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all uppercase tracking-widest flex items-center gap-4 mx-auto ${isLinked ? 'bg-forest-teal' : 'bg-jade-vibrant'}`}
                  >
                    {isLinked ? (
                      <><span>Koneksi Stabil!</span> <span className="material-symbols-outlined font-black text-4xl animate-pulse">check_circle</span></>
                    ) : (
                      <><span>Hubungkan Tabel</span> <span className="material-symbols-outlined font-black text-4xl animate-bounce">cable</span></>
                    )}
                  </button>
                </div>
              </div>
            </section>

            {/* Section 1: Kenapa Tabel Harus Dipisah? */}
            <section className="bg-white border-4 border-black shadow-neo-xl p-6 md:p-12 rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-forest-teal text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">01</span>
                Kenapa Dipisah-pisah?
              </h2>

              <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                <div className="flex-1 space-y-6">
                  <p className="text-lg md:text-xl font-bold text-forest-teal leading-relaxed">
                    Siswa awam sering bertanya: <em>"Kenapa kita tidak menggabungkan semua data ke dalam satu tabel raksasa saja biar gampang?"</em>
                  </p>
                  <p className="text-lg md:text-xl font-bold text-forest-teal leading-relaxed">
                    Jawabannya: Untuk mencegah <strong className="bg-[#FFD700] text-black px-2 border-2 border-black">Redudansi (Data Ganda)</strong>!
                  </p>
                  <div className="bg-canvas border-4 border-black p-6 shadow-neo-md">
                    <p className="font-bold text-black text-lg">
                      Bayangkan kamu harus mengetik "Wali Kelas: Bpk. Budi, Ruang: A12" di <strong>setiap nama siswa</strong> yang jumlahnya 36 orang di kelas tersebut. Jika Bpk. Budi pindah ruangan, kamu harus mengubah 36 baris data satu per satu! Sangat merepotkan dan rawan salah ketik, bukan?
                    </p>
                  </div>
                </div>
                
                <div className="lg:w-1/3 bg-black border-4 border-black shadow-neo-md p-6 text-white flex flex-col items-center justify-center -rotate-2 hover:rotate-0 transition-transform">
                  <span className="material-symbols-outlined text-[80px] text-mint-soft mb-4">content_copy</span>
                  <p className="font-black uppercase text-center text-xl">Stop Copy-Paste Data!</p>
                </div>
              </div>
            </section>

            {/* Section 2: Kunci Utama & Kunci Tamu */}
            <section className="bg-mint-soft border-4 border-black shadow-neo-xl p-6 md:p-12 -rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-black text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">02</span>
                Pengikat Logika (Kunci)
              </h2>

              <p className="text-lg font-bold text-black mb-8 bg-white p-4 border-4 border-black shadow-neo-sm">
                Jika tabel kelas dan tabel siswa dipisah, bagaimana cara komputer tahu siswa mana yang duduk di kelas mana? Kita menghubungkannya dengan cara <strong>"Menitipkan Kunci"</strong>!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Primary Key */}
                <div className="bg-white border-4 border-black p-8 shadow-neo-md hover:-translate-y-2 transition-transform relative">
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-jade-vibrant border-4 border-black rounded-full flex items-center justify-center shadow-neo-sm">
                    <span className="material-symbols-outlined text-white font-black text-3xl">key</span>
                  </div>
                  <h3 className="text-3xl font-black uppercase text-black mb-4">Primary Key (PK)</h3>
                  <p className="font-bold text-forest-teal text-lg leading-relaxed mb-4">
                    Kunci Utama. Identitas unik dari sebuah data di tabel asalnya yang tidak boleh kembar (seperti NIK di KTP). 
                  </p>
                  <p className="text-sm font-black uppercase bg-canvas inline-block px-3 py-1 border-2 border-black">Contoh: ID_Kelas = 11</p>
                </div>

                {/* Foreign Key */}
                <div className="bg-pine-deep border-4 border-black p-8 shadow-neo-md hover:-translate-y-2 transition-transform relative text-white">
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-white border-4 border-black rounded-full flex items-center justify-center shadow-neo-sm">
                    <span className="material-symbols-outlined text-black font-black text-3xl">vpn_key</span>
                  </div>
                  <h3 className="text-3xl font-black uppercase text-white mb-4">Foreign Key (FK)</h3>
                  <p className="font-bold text-white text-lg leading-relaxed mb-4">
                    Kunci Tamu. Ini adalah Primary Key dari tabel lain yang <strong>dititipkan</strong> ke tabel kita agar saling terikat.
                  </p>
                  <p className="text-sm font-black uppercase bg-black text-white inline-block px-3 py-1 border-2 border-white">Contoh: Di tabel Siswa, dititipkan ID_Kelas = 11</p>
                </div>
              </div>
            </section>

            {/* Section 3: 3 Jenis Relasi */}
            <section className="bg-canvas border-4 border-black shadow-neo-xl p-6 md:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-jade-vibrant text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">03</span>
                3 Jenis Relasi Utama
              </h2>

              <div className="space-y-6">
                
                {/* One to One */}
                <div className="bg-white border-4 border-black p-6 shadow-neo-md flex flex-col md:flex-row items-center gap-6 hover:translate-x-2 transition-transform">
                  <div className="bg-black text-white font-black text-4xl w-24 h-24 flex items-center justify-center border-4 border-black shrink-0">
                    1:1
                  </div>
                  <div>
                    <h3 className="text-2xl font-black uppercase mb-2 text-forest-teal">One-to-One (Satu ke Satu)</h3>
                    <p className="font-bold text-lg text-black mb-2">Satu data di Tabel A hanya boleh punya SATU pasangan di Tabel B.</p>
                    <p className="text-sm font-black uppercase bg-mint-soft inline-block px-2 py-1 border-2 border-black">Contoh: Penduduk (1) punya KTP (1)</p>
                  </div>
                </div>

                {/* One to Many */}
                <div className="bg-white border-4 border-black p-6 shadow-neo-lg flex flex-col md:flex-row items-center gap-6 hover:translate-x-2 transition-transform relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#FFD700] rounded-full mix-blend-multiply opacity-50 blur-xl z-0"></div>
                  <div className="bg-jade-vibrant text-white font-black text-4xl w-24 h-24 flex items-center justify-center border-4 border-black shrink-0 z-10">
                    1:N
                  </div>
                  <div className="z-10">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-2xl font-black uppercase text-forest-teal">One-to-Many</h3>
                      <span className="bg-black text-mint-soft font-black text-xs uppercase px-2 py-1 animate-pulse">Paling Umum!</span>
                    </div>
                    <p className="font-bold text-lg text-black mb-2">Satu data di Tabel A bisa punya BANYAK pasangan di Tabel B.</p>
                    <p className="text-sm font-black uppercase bg-mint-soft inline-block px-2 py-1 border-2 border-black">Contoh: Kelas (1) berisi Siswa (Banyak)</p>
                  </div>
                </div>

                {/* Many to Many */}
                <div className="bg-white border-4 border-black p-6 shadow-neo-md flex flex-col md:flex-row items-center gap-6 hover:translate-x-2 transition-transform">
                  <div className="bg-pine-deep text-white font-black text-4xl w-24 h-24 flex items-center justify-center border-4 border-black shrink-0">
                    N:M
                  </div>
                  <div>
                    <h3 className="text-2xl font-black uppercase mb-2 text-forest-teal">Many-to-Many (Banyak ke Banyak)</h3>
                    <p className="font-bold text-lg text-black mb-2">Banyak data di Tabel A bisa saling berpasangan dengan banyak data di Tabel B. (Biasanya butuh "tabel penengah" baru).</p>
                    <p className="text-sm font-black uppercase bg-mint-soft inline-block px-2 py-1 border-2 border-black">Contoh: Siswa (Banyak) ikut Ekstrakurikuler (Banyak)</p>
                  </div>
                </div>

              </div>
            </section>
            
            {/* Footer Nav */}
            <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4">
              <a href="/erd-database" className="bg-canvas text-black font-black uppercase text-sm md:text-lg px-4 py-3 md:px-6 md:py-4 border-4 border-black shadow-neo-md hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
                <span className="material-symbols-outlined font-black">arrow_back</span> Merancang ERD
              </a>
              <a href="/anatomi-tipe-data-tabel" className="bg-white text-black font-black uppercase text-sm md:text-lg px-4 py-3 md:px-6 md:py-4 border-4 border-black shadow-neo-md hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 w-full sm:w-auto justify-center text-center">
                Lanjut ke: Anatomi Tabel <span className="material-symbols-outlined font-black">arrow_forward</span>
              </a>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}
