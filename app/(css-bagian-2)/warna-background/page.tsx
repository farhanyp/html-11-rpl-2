"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import CodeBlock from '@/components/CodeBlock';

export default function WarnaBackgroundPage() {
  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/warna-background', isActive: true },
          { label: 'Soal Teori', href: '/warna-background/soal', isActive: false }
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">

            <section className="bg-[#2DD4BF] border-4 border-black p-6 md:p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tighter uppercase mb-4 md:mb-6">
                7. Warna & Background
              </h1>
              <p className="text-base md:text-xl font-bold text-black bg-white inline-block px-3 py-2 md:px-4 md:py-2 border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Dunia website tidak lengkap tanpa palet warna yang memukau.
              </p>
            </section>

            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-4">
                <span className="material-symbols-outlined text-4xl md:text-5xl text-[#FF49DB]">palette</span>
                3 Cara Mewarnai di CSS
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {/* Nama Warna */}
                <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-red-500 border-4 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-4"></div>
                  <h3 className="text-xl font-black uppercase mb-2">Nama (Keyword)</h3>
                  <p className="font-bold text-black/80 mb-4 text-sm flex-1">Sangat terbatas. <code className="bg-[#F4F0EA] px-1 border-2 border-black">red</code>, <code className="bg-[#F4F0EA] px-1 border-2 border-black">blue</code>, <code className="bg-[#F4F0EA] px-1 border-2 border-black">green</code>, dsb.</p>
                </div>
                
                {/* Kode Hex */}
                <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#3b82f6] border-4 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-4"></div>
                  <h3 className="text-xl font-black uppercase mb-2">Kode Hex</h3>
                  <p className="font-bold text-black/80 mb-4 text-sm flex-1">Paling sering dipakai desainer! Kombinasi angka & huruf. Contoh: <code className="bg-[#F4F0EA] px-1 border-2 border-black">#3b82f6</code></p>
                </div>

                {/* RGBA */}
                <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[rgba(0,0,0,0.5)] border-4 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
                  </div>
                  <h3 className="text-xl font-black uppercase mb-2">RGBA (Transparan)</h3>
                  <p className="font-bold text-black/80 mb-4 text-sm flex-1">Bisa mengatur tingkat keburaman (transparansi) dengan parameter Alpha.</p>
                </div>
              </div>

              {/* Code Application */}
              <div className="flex flex-col lg:flex-row gap-8 items-center bg-[#F4F0EA] border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="lg:w-1/2 space-y-4">
                  <h3 className="text-2xl font-black uppercase flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#FACC15] text-3xl">format_paint</span>
                    Teks vs Latar Belakang
                  </h3>
                  <p className="text-base font-bold text-black/80 leading-relaxed">
                    Bedakan penggunaan <code className="bg-white px-1 border-2 border-black">color</code> dan <code className="bg-white px-1 border-2 border-black">background-color</code>!
                  </p>
                  <ul className="space-y-2 font-bold text-sm">
                    <li>🔹 <code className="bg-[#2DD4BF] px-1 border-2 border-black">color</code>: Digunakan khusus untuk mewarnai teks/tulisan di dalamnya.</li>
                    <li>🔹 <code className="bg-[#FF49DB] px-1 text-white border-2 border-black">background-color</code>: Digunakan untuk memberikan warna pada area wadah / latarnya.</li>
                  </ul>
                </div>
                <div className="lg:w-1/2 w-full rotate-1 hover:rotate-0 transition-transform">
                  <CodeBlock 
                    language="css" 
                    code={`.kotak {
  /* Teks berwarna abu-abu gelap (Hex) */
  color: #1f2937;              
  
  /* Latar belakang berwarna putih (Hex) */
  background-color: #ffffff;     
}`} 
                  />
                </div>
              </div>

              {/* Background Image */}
              <div className="bg-[#2DD4BF] border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-12 flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/2 space-y-4">
                  <h3 className="text-2xl font-black uppercase flex items-center gap-2 text-black">
                    <span className="material-symbols-outlined text-[#FACC15] text-4xl bg-black rounded-full p-1 border-2 border-white">image</span>
                    Latar Belakang Gambar
                  </h3>
                  <p className="text-base font-bold text-black/80 leading-relaxed">
                    Selain warna solid, kamu juga bisa menggunakan gambar sebagai latar belakang elemen menggunakan properti <code className="bg-white px-1 border-2 border-black text-black">background-image</code>.
                  </p>
                  <p className="text-base font-bold text-black/80 leading-relaxed mb-4">
                    Jangan lupa atur <code className="bg-white px-1 border-2 border-black text-black">background-size: cover</code> agar gambar menutupi seluruh area tanpa terpotong atau berulang dengan aneh!
                  </p>
                </div>
                <div className="lg:w-1/2 w-full rotate-1 hover:rotate-0 transition-transform">
                  <CodeBlock 
                    language="css" 
                    code={`.hero-banner {
  background-image: url('pemandangan.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}`} 
                  />
                </div>
              </div>

              {/* Gradient */}
              <div className="bg-[#1e1e1e] border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-12 flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/2 w-full -rotate-1 hover:rotate-0 transition-transform order-2 lg:order-1">
                  <CodeBlock 
                    language="css" 
                    code={`.gradasi {
  /* Gradasi dari atas ke bawah */
  background: linear-gradient(to bottom, #FF49DB, #2DD4BF);
  
  /* Atau dari kiri ke kanan */
  /* background: linear-gradient(to right, ...); */
}`} 
                  />
                </div>
                <div className="lg:w-1/2 space-y-4 order-1 lg:order-2">
                  <h3 className="text-2xl font-black uppercase flex items-center gap-2 text-[#FF49DB]">
                    <span className="material-symbols-outlined text-4xl text-[#2DD4BF]">gradient</span>
                    Gradasi Warna (Gradient)
                  </h3>
                  <p className="text-base font-bold text-white/80 leading-relaxed">
                    Website modern jarang menggunakan satu warna solid. Mereka sering menggunakan <strong>Gradient</strong>!
                  </p>
                  <p className="text-base font-bold text-white/80 leading-relaxed mb-4">
                    CSS memiliki fungsi bawaan <code className="bg-black px-1 border-2 border-[#2DD4BF] text-white">linear-gradient()</code> untuk mencampur dua warna atau lebih secara transisi mulus.
                  </p>
                  <div className="h-12 w-full border-4 border-white shadow-[4px_4px_0px_0px_rgba(45,212,191,1)]" style={{ background: 'linear-gradient(to right, #FF49DB, #2DD4BF)' }}></div>
                </div>
              </div>

            </section>

            {/* Footer / Penutup */}
            <footer className="bg-[#FF49DB] border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined absolute -top-3 -right-3 md:-top-4 md:-right-4 text-4xl md:text-5xl text-black bg-white rounded-full border-2 md:border-4 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">imagesmode</span>
              <p className="text-xl md:text-3xl font-black text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] uppercase leading-relaxed max-w-4xl mx-auto">
                "Pahami kodenya, dan mulailah mewarnai duniamu dengan Hexadesimal dan RGBA!"
              </p>
            </footer>

            <div className="h-12 w-full"></div>
          </div>
        </main>
      </div>
    </>
  );
}
