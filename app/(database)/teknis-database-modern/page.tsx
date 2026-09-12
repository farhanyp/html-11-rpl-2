"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

export default function TeknisDatabasePage() {
  const [isExplored, setIsExplored] = useState(false);

  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/teknis-database-modern', isActive: true },
          { label: 'Kuis Singkat', href: '/teknis-database-modern/kuis', isActive: false }
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-canvas relative" style={{ backgroundImage: 'radial-gradient(var(--color-outline) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">

            {/* Header & Hero Section */}
            <section className="bg-pine-deep border-4 border-black p-6 md:p-12 shadow-neo-xl text-center relative overflow-hidden text-white">
              <div className="absolute top-0 left-0 bg-white text-black font-black px-4 py-1 border-b-4 border-r-4 border-black shadow-neo-sm z-20 uppercase">
                Database 02
              </div>
              <div className="absolute -bottom-10 -left-10 z-0">
                <span className="material-symbols-outlined text-[150px] md:text-[250px] text-white opacity-10 transform -rotate-12">storage</span>
              </div>
              
              <div className="relative z-10 pt-8">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                  Lanskap Modern <br className="hidden md:block" /> Dunia Database
                </h1>
                <p className="text-base md:text-xl font-bold text-black bg-mint-soft inline-block px-4 py-2 md:px-6 md:py-3 border-4 border-black mb-8 md:mb-10 shadow-neo-md uppercase tracking-tight">
                  Dari sekadar file teks hingga otak ingatan AI!
                </p>
                <div>
                  <button
                    onClick={() => setIsExplored(!isExplored)}
                    className="bg-white text-black font-black text-xl md:text-3xl px-8 py-5 md:px-12 md:py-6 border-4 border-black shadow-neo-lg hover:-translate-y-2 hover:-translate-x-2 hover:shadow-neo-xl active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all uppercase tracking-widest flex items-center gap-4 mx-auto"
                  >
                    {isExplored ? (
                      <><span>Sedang Memindai...</span> <span className="material-symbols-outlined font-black text-4xl animate-spin">radar</span></>
                    ) : (
                      <><span>Eksplorasi Sekarang</span> <span className="material-symbols-outlined font-black text-4xl">travel_explore</span></>
                    )}
                  </button>
                </div>
              </div>
            </section>

            {/* Section 1: Evolusi Penyimpanan */}
            <section className="bg-white border-4 border-black shadow-neo-xl p-6 md:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-forest-teal text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">01</span>
                3 Era Evolusi Penyimpanan
              </h2>

              <p className="text-lg md:text-xl font-bold text-forest-teal mb-8">
                Secara teknis, database hanyalah "sekumpulan data digital yang terstruktur". Tapi cara kita menyimpannya terus berevolusi dari masa ke masa:
              </p>

              <div className="flex flex-col md:flex-row gap-6 items-stretch">
                {/* Era 1 */}
                <div className="flex-1 bg-canvas border-4 border-black p-6 shadow-neo-md hover:-translate-y-2 hover:shadow-neo-lg transition-transform group flex flex-col">
                  <div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center rounded-none mb-4 shadow-neo-sm group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-4xl text-black font-black">description</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-black uppercase mb-3">1. File-Based</h3>
                  <div className="mt-auto">
                    <span className="bg-black text-white text-xs font-black uppercase px-2 py-1 mb-2 inline-block">Masa Lalu</span>
                    <p className="text-base font-bold text-forest-teal">Menyimpan data di file Excel atau TXT biasa. Rentan hilang, lambat, dan tidak bisa diakses banyak orang secara bersamaan.</p>
                  </div>
                </div>

                {/* Era 2 */}
                <div className="flex-1 bg-mint-soft border-4 border-black p-6 shadow-neo-md hover:-translate-y-2 hover:shadow-neo-lg transition-transform group flex flex-col transform md:-translate-y-4">
                  <div className="w-16 h-16 bg-forest-teal border-4 border-black flex items-center justify-center rounded-none mb-4 shadow-neo-sm group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-4xl text-white font-black">dns</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-black uppercase mb-3">2. Server-Based</h3>
                  <div className="mt-auto">
                    <span className="bg-black text-white text-xs font-black uppercase px-2 py-1 mb-2 inline-block">Masa Kini</span>
                    <p className="text-base font-bold text-forest-teal">Data disimpan di komputer server khusus yang menyala 24 jam. Sangat cepat dan terstruktur rapi.</p>
                  </div>
                </div>

                {/* Era 3 */}
                <div className="flex-1 bg-jade-vibrant border-4 border-black p-6 shadow-neo-md hover:-translate-y-2 hover:shadow-neo-lg transition-transform group flex flex-col">
                  <div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center rounded-none mb-4 shadow-neo-sm group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-4xl text-black font-black">cloud</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase mb-3 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">3. Cloud-Based</h3>
                  <div className="mt-auto">
                    <span className="bg-white text-black text-xs font-black uppercase px-2 py-1 mb-2 inline-block">Masa Depan</span>
                    <p className="text-base font-bold text-white">Disimpan di server raksasa milik Google/Amazon. Tidak perlu beli server fisik, tinggal sewa dan akses lewat internet.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: SQL vs NoSQL */}
            <section className="bg-canvas border-4 border-black shadow-neo-xl p-6 md:p-12 rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-black text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">02</span>
                Pertarungan: SQL vs NoSQL
              </h2>

              <div className="flex flex-col lg:flex-row gap-0 border-4 border-black shadow-neo-lg">
                {/* SQL Side */}
                <div className="flex-1 bg-white p-8 border-b-4 lg:border-b-0 lg:border-r-4 border-black">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-forest-teal">SQL</h3>
                    <span className="bg-jade-vibrant text-white font-black uppercase px-3 py-1 border-2 border-black rotate-3">Relational</span>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-jade-vibrant font-black">table</span>
                      <p className="font-bold text-lg text-black">Data berbentuk <strong>tabel kaku</strong> (seperti Excel).</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-jade-vibrant font-black">schema</span>
                      <p className="font-bold text-lg text-black"><strong>Wajib punya skema awal.</strong> Jika tabel belum dibuat, data tidak bisa masuk.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-jade-vibrant font-black">account_tree</span>
                      <p className="font-bold text-lg text-black">Sangat kuat untuk data yang saling <strong>berhubungan erat</strong> (Siswa - Kelas - Nilai).</p>
                    </li>
                  </ul>
                  <div className="mt-8 pt-6 border-t-4 border-black border-dashed">
                    <p className="text-sm font-black uppercase text-gray-500 mb-2">Contoh Populer:</p>
                    <div className="flex gap-2">
                      <span className="bg-mint-soft text-black px-3 py-1 border-2 border-black font-bold">MySQL</span>
                      <span className="bg-mint-soft text-black px-3 py-1 border-2 border-black font-bold">PostgreSQL</span>
                    </div>
                  </div>
                </div>

                {/* VS Badge */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black text-white font-black text-2xl border-4 border-white items-center justify-center z-10 rotate-12 shadow-neo-md">
                  VS
                </div>

                {/* NoSQL Side */}
                <div className="flex-1 bg-pine-deep p-8 text-white">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">NoSQL</h3>
                    <span className="bg-black text-white font-black uppercase px-3 py-1 border-2 border-white -rotate-3">Non-Relational</span>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-mint-soft font-black">data_object</span>
                      <p className="font-bold text-lg text-white">Data berbentuk <strong>dokumen fleksibel</strong> (mirip JSON).</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-mint-soft font-black">shape_line</span>
                      <p className="font-bold text-lg text-white"><strong>Tidak butuh baris/kolom baku.</strong> Kamu bisa memasukkan data apa saja bebas.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-mint-soft font-black">speed</span>
                      <p className="font-bold text-lg text-white">Sangat cepat untuk memproses <strong>data yang super besar</strong> dan tidak beraturan.</p>
                    </li>
                  </ul>
                  <div className="mt-8 pt-6 border-t-4 border-white border-dashed">
                    <p className="text-sm font-black uppercase text-gray-300 mb-2">Contoh Populer:</p>
                    <div className="flex gap-2">
                      <span className="bg-white text-black px-3 py-1 border-2 border-black font-bold">MongoDB</span>
                      <span className="bg-white text-black px-3 py-1 border-2 border-black font-bold">Firebase</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Era Modern AI */}
            <section className="bg-white border-4 border-black shadow-neo-xl p-6 md:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-mint-soft text-black w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">03</span>
                Era Database Modern & AI
              </h2>

              <p className="text-lg md:text-xl font-bold text-forest-teal mb-8">
                Teknologi tidak pernah berhenti. Saat ini muncul inovasi-inovasi database baru yang melayani kebutuhan spesifik, terutama untuk Kecerdasan Buatan (AI).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border-4 border-black p-6 bg-canvas hover:bg-mint-soft transition-colors group">
                  <span className="material-symbols-outlined text-5xl text-black mb-4 group-hover:animate-spin">memory</span>
                  <h3 className="text-xl font-black uppercase mb-2">In-Memory DB</h3>
                  <p className="font-bold text-black text-sm">Menyimpan data di dalam RAM komputer. Kecepatannya kilat, biasanya digunakan untuk <em>Cache</em> agar web loadingnya instan.</p>
                  <p className="text-xs font-black bg-white border-2 border-black px-2 py-1 inline-block mt-4">Contoh: Redis</p>
                </div>

                <div className="border-4 border-black p-6 bg-canvas hover:bg-jade-vibrant hover:text-white transition-colors group">
                  <span className="material-symbols-outlined text-5xl text-black group-hover:text-white mb-4 group-hover:-translate-y-2 transition-transform">monitoring</span>
                  <h3 className="text-xl font-black uppercase mb-2">Time-Series DB</h3>
                  <p className="font-bold text-black group-hover:text-white text-sm">Didesain khusus untuk mencatat data yang berubah setiap detiknya berdasarkan waktu, seperti grafik harga saham atau suhu cuaca.</p>
                  <p className="text-xs font-black bg-white text-black border-2 border-black px-2 py-1 inline-block mt-4">Contoh: InfluxDB</p>
                </div>

                <div className="border-4 border-black p-6 bg-canvas hover:bg-black hover:text-white transition-colors group">
                  <span className="material-symbols-outlined text-5xl text-black group-hover:text-mint-soft mb-4 group-hover:scale-110 transition-transform">smart_toy</span>
                  <h3 className="text-xl font-black uppercase mb-2">Vector Database</h3>
                  <p className="font-bold text-black group-hover:text-white text-sm">Inovasi terbaru! Digunakan untuk melatih AI (seperti ChatGPT). Mampu menyimpan "makna" dari kata-kata layaknya memori otak manusia.</p>
                  <p className="text-xs font-black bg-white text-black border-2 border-black px-2 py-1 inline-block mt-4">Contoh: Pinecone</p>
                </div>
              </div>

              {/* Callout Info */}
              <div className="mt-10 bg-[#FFD700] border-4 border-black p-6 flex flex-col md:flex-row items-center gap-6 text-black shadow-neo-md -rotate-1 hover:rotate-0 transition-transform">
                <span className="material-symbols-outlined text-6xl text-black animate-pulse">tips_and_updates</span>
                <div className="text-center md:text-left">
                  <h4 className="font-black text-2xl uppercase mb-2">Fokus Kita: SQL!</h4>
                  <p className="font-bold text-black text-lg">Walaupun ada banyak jenis database modern, fondasi utamanya tetaplah <strong>SQL</strong> (terutama MySQL). Menguasai SQL berarti kamu sudah memegang kunci untuk memahami jenis database lainnya di masa depan!</p>
                </div>
              </div>
            </section>
            
            {/* Footer Nav */}
            <div className="flex justify-between items-center pt-8">
              <a href="/konsep-database" className="bg-canvas text-black font-black uppercase text-sm md:text-lg px-4 py-3 md:px-6 md:py-4 border-4 border-black shadow-neo-md hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2">
                <span className="material-symbols-outlined font-black">arrow_back</span> Kembali
              </a>
              <a href="/erd-database" className="bg-white text-black font-black uppercase text-sm md:text-lg px-4 py-3 md:px-6 md:py-4 border-4 border-black shadow-neo-md hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2">
                Lanjut ke: Merancang ERD <span className="material-symbols-outlined font-black">arrow_forward</span>
              </a>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}
