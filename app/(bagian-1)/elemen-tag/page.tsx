"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import CodeBlock from '@/components/CodeBlock';
import Link from 'next/link';

export default function ElemenTagPage() {
  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/elemen-tag', isActive: true },
          { label: 'Soal Teori', href: '/elemen-tag/soal', isActive: false }
        ]}
      />
      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />
        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">

            {/* Header & Hero Section */}
            <section className="bg-[#2DD4BF] border-4 border-black p-6 md:p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">
                Elemen & Tag HTML
              </h1>
              <p className="text-base md:text-xl font-bold text-black bg-white inline-block px-4 py-2 md:px-6 md:py-3 border-2 md:border-4 border-black mb-8 md:mb-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Kuasai blok bangunan dasar pembentuk setiap halaman website!
              </p>
            </section>

            {/* Section 1: Konsep Dasar */}
            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#FF49DB] text-white w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">1</span>
                Apa Beda Elemen dan Tag?
              </h2>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 bg-[#F4F0EA] border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <h3 className="text-xl md:text-2xl font-black text-black uppercase mb-4 border-b-4 border-black pb-2 border-dashed">Tag HTML</h3>
                  <p className="font-bold text-black/80 text-sm md:text-base leading-relaxed">
                    Tag adalah penanda yang diapit oleh kurung sudut <code>&lt; &gt;</code>. Tag memberi tahu browser jenis konten apa yang ada di dalamnya. 
                    Ada tag pembuka (contoh: <code>&lt;p&gt;</code>) dan tag penutup (contoh: <code>&lt;/p&gt;</code>).
                  </p>
                </div>
                
                <div className="flex-1 bg-[#F4F0EA] border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <h3 className="text-xl md:text-2xl font-black text-black uppercase mb-4 border-b-4 border-black pb-2 border-dashed">Elemen HTML</h3>
                  <p className="font-bold text-black/80 text-sm md:text-base leading-relaxed">
                    Elemen adalah keseluruhan blok dari awal tag pembuka, konten di dalamnya, hingga akhir tag penutup. 
                    Satu elemen adalah satu komponen utuh di halaman.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-[#FACC15] border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-1deg] hover:rotate-0 transition-transform">
                <p className="font-black text-black text-lg text-center uppercase tracking-wide">
                  Contoh: <code>&lt;h1&gt;Judul Artikel&lt;/h1&gt;</code> adalah satu ELEMEN utuh!
                </p>
              </div>
            </section>

            {/* Section 2: Elemen Inline vs Block */}
            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#4ade80] text-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">2</span>
                Block vs Inline Element
              </h2>

              <p className="text-base md:text-xl font-bold text-black/80 leading-relaxed mb-8">
                Secara umum, elemen di HTML terbagi menjadi dua sifat utama saat dirender oleh browser: <strong>Block-level</strong> dan <strong>Inline</strong>.
              </p>

              <div className="space-y-8">
                {/* Block Element */}
                <div className="border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="bg-[#FF49DB] border-b-4 border-black p-4">
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">1. Block-Level Element</h3>
                  </div>
                  <div className="p-4 md:p-6">
                    <p className="font-bold text-black/80 mb-4">Elemen ini selalu memulai baris baru dan akan mengambil lebar (width) maksimal dari sisi kiri ke sisi kanan layar/wadahnya secara otomatis.</p>
                    <div className="mb-4">
                      <CodeBlock 
                        language="html"
                        code={`<div>Ini adalah blok pertama</div>\n<p>Ini adalah blok kedua (di baris baru)</p>`}
                      />
                    </div>
                    <div className="bg-[#F4F0EA] border-2 border-black p-3 font-bold text-sm">
                      <strong>Contoh Tag:</strong> <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>, <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code>, <code>&lt;form&gt;</code>, dll.
                    </div>
                  </div>
                </div>

                {/* Inline Element */}
                <div className="border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="bg-[#2DD4BF] border-b-4 border-black p-4">
                    <h3 className="text-xl md:text-2xl font-black text-black uppercase">2. Inline Element</h3>
                  </div>
                  <div className="p-4 md:p-6">
                    <p className="font-bold text-black/80 mb-4">Elemen ini <strong>tidak</strong> memulai baris baru dan hanya mengambil ruang selebar konten di dalamnya saja. Elemen inline bisa diletakkan berjejeran.</p>
                    <div className="mb-4">
                      <CodeBlock 
                        language="html"
                        code={`<span>Teks Satu</span> dan <span>Teks Dua</span> berada di baris yang sama.`}
                      />
                    </div>
                    <div className="bg-[#F4F0EA] border-2 border-black p-3 font-bold text-sm">
                      <strong>Contoh Tag:</strong> <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>, <code>&lt;img&gt;</code>, <code>&lt;button&gt;</code>, dll.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Void / Empty Elements */}
            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12 rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#FACC15] text-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">3</span>
                Void / Empty Elements (Tag Tunggal)
              </h2>

              <p className="text-base md:text-xl font-bold text-black/80 leading-relaxed mb-6">
                Tidak semua elemen HTML memiliki konten dan tag penutup. Beberapa elemen berdiri sendiri. Elemen ini disebut <strong>Void Elements</strong> atau elemen kosong.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-[#F4F0EA] border-4 border-black p-4 flex flex-col items-center text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="bg-white border-2 border-black px-4 py-2 font-black text-2xl mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    &lt;br&gt;
                  </div>
                  <h4 className="font-black uppercase mb-2">Break</h4>
                  <p className="text-sm font-bold text-black/70">Memaksa pindah baris (enter).</p>
                </div>
                
                <div className="bg-[#F4F0EA] border-4 border-black p-4 flex flex-col items-center text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="bg-white border-2 border-black px-4 py-2 font-black text-2xl mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    &lt;hr&gt;
                  </div>
                  <h4 className="font-black uppercase mb-2">Horizontal Rule</h4>
                  <p className="text-sm font-bold text-black/70">Membuat garis lurus mendatar.</p>
                </div>

                <div className="bg-[#F4F0EA] border-4 border-black p-4 flex flex-col items-center text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="bg-white border-2 border-black px-4 py-2 font-black text-2xl mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    &lt;img&gt;
                  </div>
                  <h4 className="font-black uppercase mb-2">Image</h4>
                  <p className="text-sm font-bold text-black/70">Menampilkan gambar (membutuhkan atribut src).</p>
                </div>
              </div>
            </section>

            {/* Section 4: Atribut Khusus Class dan ID */}
            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#FF49DB] text-white w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">4</span>
                Atribut Identitas: class dan id
              </h2>

              <p className="text-base md:text-xl font-bold text-black/80 leading-relaxed mb-8">
                Halaman web biasanya memiliki puluhan paragraf atau kotak. Bagaimana cara kita memberikan warna atau memodifikasi satu kotak spesifik tanpa mempengaruhi kotak yang lain? Kita menggunakan atribut <strong className="bg-[#FACC15] px-1 border-2 border-black text-black">Identitas</strong>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {/* ID Attribute */}
                <div className="bg-[#F4F0EA] border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4 border-b-4 border-black pb-4 border-dashed">
                    <span className="bg-[#2DD4BF] px-3 py-2 border-2 border-black font-mono font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-lg md:text-xl">id="nama"</span>
                    <span className="font-black uppercase tracking-wider text-black/60 text-sm md:text-base">Unik</span>
                  </div>
                  <p className="font-bold text-black/80 mb-4 flex-grow">
                    Hanya boleh ada <strong>SATU</strong> di seluruh halaman. Tidak boleh ada elemen lain yang menggunakan ID yang sama.
                  </p>
                  <div className="bg-white border-2 border-black p-3 flex items-start gap-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-xl">🧑‍🎓</span>
                    <p className="text-sm font-bold text-black/70"><strong>Analogi:</strong> Seperti Nomor KTP atau NISN. Hanya satu orang yang memiliki nomor tersebut.</p>
                  </div>
                </div>

                {/* Class Attribute */}
                <div className="bg-[#F4F0EA] border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4 border-b-4 border-black pb-4 border-dashed">
                    <span className="bg-[#FF49DB] text-white px-3 py-2 border-2 border-black font-mono font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-lg md:text-xl drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">class="nama"</span>
                    <span className="font-black uppercase tracking-wider text-black/60 text-sm md:text-base">Berulang</span>
                  </div>
                  <p className="font-bold text-black/80 mb-4 flex-grow">
                    Boleh digunakan berkali-kali oleh elemen yang berbeda di dalam satu halaman yang sama.
                  </p>
                  <div className="bg-white border-2 border-black p-3 flex items-start gap-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-xl">👕</span>
                    <p className="text-sm font-bold text-black/70"><strong>Analogi:</strong> Seperti Seragam Sekolah. Semua siswa kelas 11 RPL bisa memakai class <code>seragam-rpl</code>.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch">
                <div className="w-full lg:w-1/2 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-[#1e1e1e] group overflow-hidden flex flex-col">
                  <div className="w-full h-10 border-b-4 border-black bg-[#E5E5E5] flex items-center px-4 gap-2">
                     <span className="font-black uppercase text-xs text-black">Contoh Penggunaan</span>
                  </div>
                  <div className="flex-grow">
                    <CodeBlock 
                      language="html"
                      code={`<h1 id="judul-utama">Selamat Datang</h1>\n<p class="teks-tebal">Paragraf pertama.</p>\n<p class="teks-tebal">Paragraf kedua juga memakai desain yang sama.</p>`}
                    />
                  </div>
                </div>

                <div className="w-full lg:w-1/2 bg-[#2DD4BF] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-center rotate-[-1deg] hover:rotate-0 transition-transform">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="material-symbols-outlined text-4xl md:text-5xl text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">lightbulb</span>
                    <h3 className="text-xl md:text-2xl font-black text-black uppercase">Fungsi Utama</h3>
                  </div>
                  <p className="text-base md:text-xl font-bold text-black/90 leading-relaxed bg-white p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    Nantinya, CSS dan JavaScript akan menggunakan <code className="bg-[#FACC15] px-1 border-2 border-black text-black">id</code> dan <code className="bg-[#FACC15] px-1 border-2 border-black text-black">class</code> ini untuk mencari elemen mana yang ingin diberi warna atau diberi animasi!
                  </p>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="mt-12 mb-12 flex flex-col md:flex-row justify-between items-center gap-4 opacity-70">
              <p className="font-black text-xs md:text-sm uppercase tracking-widest text-black text-center md:text-left">© 2024 EDUBRUTAL // SYSTEM STATUS: NOMINAL</p>
            </footer>
          </div>
        </main>
      </div>
    </>
  );
}
