"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import CodeBlock from '@/components/CodeBlock';
import { useState } from 'react';

export default function PengenalanCSSPage() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/pengenalan-css', isActive: true },
          { label: 'Soal Teori', href: '/pengenalan-css/soal', isActive: false }
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">

            {/* Header & Hero Section */}
            <section className="bg-[#2DD4BF] border-4 border-black p-6 md:p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
              <div className="absolute top-2 md:top-4 left-2 md:left-4">
                <span className="material-symbols-outlined text-6xl md:text-[80px] opacity-20">brush</span>
              </div>
              <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4">
                <span className="material-symbols-outlined text-6xl md:text-[80px] opacity-20">format_paint</span>
              </div>
              <div className="relative z-10">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">
                  1. Pengenalan & Filosofi CSS
                </h1>
                <p className="text-base md:text-xl font-bold text-black bg-white inline-block px-3 py-2 md:px-4 md:py-2 border-2 md:border-4 border-black mb-6 md:mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  Mewarnai dan mendandani kerangka HTML agar tampil lebih cantik dan responsif.
                </p>
                <div>
                  <button
                    onClick={() => setIsStarted(!isStarted)}
                    className="bg-[#FF49DB] text-white font-black text-lg md:text-2xl px-6 py-4 md:px-10 md:py-5 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] md:active:translate-x-[6px] md:active:translate-y-[6px] active:shadow-none transition-all uppercase"
                  >
                    {isStarted ? "Sedang Belajar..." : "Mulai Belajar Sekarang"}
                  </button>
                </div>
              </div>
            </section>

            {/* Section 1: Analogi */}
            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#FACC15] text-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">1</span>
                CSS Ibarat Desain Interior
              </h2>

              <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8 md:mb-10 items-center">
                <div className="flex-1">
                  <p className="text-base md:text-xl font-bold text-black/80 leading-relaxed">
                    Jika <strong className="bg-[#2DD4BF] px-1 border-2 border-black text-black">HTML</strong> adalah susunan batu bata, pondasi, dan tiang (kerangka), maka <strong className="bg-[#FF49DB] text-white px-1 border-2 border-black">CSS (Cascading Style Sheets)</strong> adalah cat tembok, wallpaper, lampu hias, dan tirai jendelanya. Tanpa CSS, halaman web (seperti Facebook atau YouTube) hanya akan berupa teks hitam putih yang berjejer kaku dari atas ke bawah.
                  </p>
                </div>
                <div className="md:w-1/3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-2 hover:rotate-0 transition-transform flex items-center justify-center bg-[#FACC15] p-8 h-48">
                  <span className="material-symbols-outlined text-[100px] text-black drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">palette</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-10">
                <div className="bg-[#2DD4BF] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all group">
                  <span className="material-symbols-outlined text-4xl text-black mb-2 group-hover:scale-110 transition-transform">format_color_text</span>
                  <h3 className="text-lg font-black text-black uppercase mb-2">Tampilan</h3>
                  <p className="text-sm font-bold text-black/80">Mengubah warna, ukuran, dan jenis huruf.</p>
                </div>
                <div className="bg-[#FF49DB] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all group">
                  <span className="material-symbols-outlined text-4xl text-white mb-2 group-hover:scale-110 transition-transform">view_quilt</span>
                  <h3 className="text-lg font-black text-white uppercase mb-2 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Tata Letak</h3>
                  <p className="text-sm font-bold text-white/90">Mengatur letak elemen (bersebelahan atau tumpuk).</p>
                </div>
                <div className="bg-[#FACC15] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all group">
                  <span className="material-symbols-outlined text-4xl text-black mb-2 group-hover:scale-110 transition-transform">animation</span>
                  <h3 className="text-lg font-black text-black uppercase mb-2">Animasi</h3>
                  <p className="text-sm font-bold text-black/80">Memberikan efek interaktif seperti hover.</p>
                </div>
                <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all group">
                  <span className="material-symbols-outlined text-4xl text-black mb-2 group-hover:scale-110 transition-transform">devices</span>
                  <h3 className="text-lg font-black text-black uppercase mb-2">Responsif</h3>
                  <p className="text-sm font-bold text-black/80">Menyesuaikan tampilan di HP, Tablet, & Laptop.</p>
                </div>
              </div>
            </section>

            {/* Section 2: Pemisahan Tugas */}
            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#FF49DB] text-white w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">2</span>
                Kenapa Dipisah dari HTML?
              </h2>

              <div className="flex flex-col lg:flex-row gap-8 mb-10 items-start">
                <div className="lg:w-2/3 space-y-6">
                  <p className="text-base md:text-xl font-bold text-black/80 leading-relaxed">
                    Dulu (sebelum CSS diciptakan pada tahun 1994 oleh Håkon Wium Lie), developer web harus menuliskan gaya visual langsung di dalam setiap baris kode HTML. Bayangkan jika kamu punya 100 halaman web, dan ingin mengubah warna judul dari biru ke merah. Kamu harus mengedit 100 file HTML satu per satu!
                  </p>
                  <p className="text-base md:text-xl font-bold text-black/80 leading-relaxed">
                    Dengan CSS, kita menerapkan prinsip <strong className="bg-[#2DD4BF] px-1 border-2 border-black text-black uppercase">Separation of Concerns</strong> (Pemisahan Tugas). HTML murni mengurus <strong className="underline decoration-[#FF49DB] decoration-4">Struktur/Isi</strong>, sementara CSS murni mengurus <strong className="underline decoration-[#FF49DB] decoration-4">Tampilan</strong>. Kini, cukup ubah 1 file CSS, dan warna judul di 100 halaman akan berubah otomatis secara instan!
                  </p>
                </div>
                
                {/* Visual Before/After */}
                <div className="lg:w-1/3 flex flex-col gap-4 w-full">
                  <div className="rotate-1 hover:rotate-0 transition-transform flex flex-col">
                    <div className="bg-[#FF49DB] border-4 border-black border-b-0 px-4 py-2 self-start shadow-[4px_0px_0px_0px_rgba(0,0,0,1)] z-10 relative top-1">
                      <span className="text-white font-black text-xs uppercase">Zaman Dulu (HTML)</span>
                    </div>
                    <CodeBlock 
                      language="html" 
                      code={`<font color="red" size="5">Judul</font>`} 
                    />
                  </div>
                  <div className="-rotate-1 hover:rotate-0 transition-transform flex flex-col mt-2">
                    <div className="bg-[#2DD4BF] border-4 border-black border-b-0 px-4 py-2 self-start shadow-[4px_0px_0px_0px_rgba(0,0,0,1)] z-10 relative top-1">
                      <span className="text-black font-black text-xs uppercase">Zaman Now (CSS)</span>
                    </div>
                    <CodeBlock 
                      language="css" 
                      code={`h1 { \n  color: red; \n  font-size: 24px; \n}`} 
                    />
                  </div>
                </div>
              </div>

              {/* Callout Box */}
              <div className="bg-[#FACC15] border-4 border-black p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[1deg]">
                <span className="material-symbols-outlined text-5xl md:text-7xl text-black drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">speed</span>
                <p className="text-lg md:text-2xl font-black text-black uppercase leading-tight text-center md:text-left">
                  "Website memuat lebih cepat karena file CSS hanya didownload 1 kali oleh browser dan disimpan (cache) untuk halaman lainnya!"
                </p>
              </div>
            </section>

            {/* Section 3: Arti CSS */}
            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#2DD4BF] text-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">3</span>
                Makna dari "Cascading"
              </h2>

              <p className="text-base md:text-xl font-bold text-black/80 leading-relaxed mb-8">
                Pernah penasaran dari mana nama <strong>Cascading Style Sheets</strong> berasal? Mari kita bedah namanya!
              </p>

              <div className="space-y-6">
                <div className="flex flex-col md:flex-row border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <div className="bg-[#FF49DB] p-6 border-b-4 md:border-b-0 md:border-r-4 border-black flex flex-col justify-center items-center w-full md:w-1/3">
                    <span className="material-symbols-outlined text-5xl md:text-7xl text-white mb-2 group-hover:scale-110 transition-transform drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">water_drop</span>
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase text-center drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Cascading</h3>
                  </div>
                  <div className="p-6 flex items-center bg-[#F4F0EA] flex-1">
                    <p className="text-base md:text-lg font-bold text-black/80 leading-relaxed">
                      Artinya "Air Terjun". Menandakan bahwa aturan desain mengalir dari atas ke bawah. Jika ada dua aturan yang bertentangan untuk elemen yang sama, aturan yang <strong>paling bawah</strong> atau paling spesifik yang akan menang (aturan Specificity).
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <div className="bg-[#FACC15] p-6 border-b-4 md:border-b-0 md:border-r-4 border-black flex flex-col justify-center items-center w-full md:w-1/3">
                    <span className="material-symbols-outlined text-5xl md:text-7xl text-black mb-2 group-hover:scale-110 transition-transform">style</span>
                    <h3 className="text-xl md:text-2xl font-black text-black uppercase text-center">Style Sheets</h3>
                  </div>
                  <div className="p-6 flex items-center bg-[#F4F0EA] flex-1">
                    <p className="text-base md:text-lg font-bold text-black/80 leading-relaxed">
                      "Lembaran Gaya". CSS adalah dokumen terpisah (lembaran) yang secara eksklusif berisi aturan-aturan desain untuk merias dokumen lainnya (HTML).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer / Penutup */}
            <footer className="bg-[#2DD4BF] border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative rotate-1 hover:rotate-0 transition-transform">
              <span className="material-symbols-outlined absolute -top-3 -right-3 md:-top-4 md:-right-4 text-4xl md:text-5xl text-black bg-white rounded-full border-2 md:border-4 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">push_pin</span>
              <p className="text-xl md:text-3xl font-black text-black uppercase leading-relaxed max-w-4xl mx-auto">
                "HTML dan CSS adalah dua sahabat yang tidak terpisahkan dalam membentuk wajah sebuah Website!"
              </p>
            </footer>

            <div className="h-12 w-full"></div>
          </div>
        </main>
      </div>
    </>
  );
}
