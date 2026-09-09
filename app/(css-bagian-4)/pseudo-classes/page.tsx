"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import CodeBlock from '@/components/CodeBlock';

export default function PseudoClassesPage() {
  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/pseudo-classes', isActive: true },
          { label: 'Soal Teori', href: '/pseudo-classes/soal', isActive: false }
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">

            <section className="bg-[#FF49DB] border-4 border-black p-6 md:p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                14. Interaksi & Animasi
              </h1>
              <p className="text-base md:text-xl font-bold text-black bg-white inline-block px-3 py-2 md:px-4 md:py-2 border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Menghidupkan elemen kaku menjadi interaktif dengan Pseudo-classes!
              </p>
            </section>

            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-4">
                <span className="material-symbols-outlined text-4xl md:text-5xl text-[#2DD4BF]">touch_app</span>
                Mersepons Sentuhan
              </h2>

              <div className="flex flex-col lg:flex-row gap-8 mb-12">
                <div className="lg:w-1/2 space-y-6">
                  <p className="font-bold text-black/80 text-lg leading-relaxed">
                    Kamu bisa memberikan CSS khusus ketika elemen sedang berada dalam <em>keadaan tertentu</em> (misalnya sedang disentuh kursor) menggunakan <strong>Pseudo-classes</strong> (ditandai dengan awalan titik dua <code className="bg-gray-200 px-1 border border-black">:</code>).
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="bg-[#2DD4BF] p-1 border-2 border-black inline-block mt-1">🖱️</span>
                      <div>
                        <strong className="block text-xl uppercase font-black">:hover</strong>
                        <p className="font-bold text-black/70">Memicu perubahan CSS saat kursor mouse melayang di atas elemen.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#FACC15] p-1 border-2 border-black inline-block mt-1">⌨️</span>
                      <div>
                        <strong className="block text-xl uppercase font-black">:focus</strong>
                        <p className="font-bold text-black/70">Memicu perubahan CSS saat elemen (seperti input teks) diklik dan sedang diketik oleh pengguna.</p>
                      </div>
                    </li>
                  </ul>
                  
                  <div className="bg-[#F4F0EA] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-8">
                    <p className="font-bold text-sm uppercase mb-3 text-black/60 tracking-widest text-center">Cobalah Interaksi Berikut!</p>
                    <div className="flex flex-col gap-4">
                      {/* Interactive Hover */}
                      <button className="bg-black text-white font-black p-3 border-2 border-black hover:bg-[#FF49DB] transition-colors cursor-pointer text-left pl-4">
                        Arahkan Mouse ke Sini (:hover)
                      </button>
                      {/* Interactive Focus */}
                      <input 
                        type="text" 
                        placeholder="Klik dan ketik sesuatu... (:focus)" 
                        className="bg-white p-3 border-2 border-black outline-none focus:border-[#2DD4BF] focus:shadow-[4px_4px_0px_0px_rgba(45,212,191,1)] transition-all font-bold placeholder:font-normal"
                      />
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 space-y-6">
                  
                  <div className="bg-black text-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative rotate-1 hover:rotate-0 transition-transform">
                    <h3 className="font-black text-2xl mb-4 text-[#FACC15] flex items-center gap-2">
                      <span className="material-symbols-outlined">animation</span>
                      Animasi Halus!
                    </h3>
                    <p className="font-bold text-white/80 mb-4 leading-relaxed">
                      Perubahan warna yang tiba-tiba sangat kaku. Tambahkan <code className="bg-white/20 px-1 border border-white">transition</code> agar perubahannya punya durasi waktu. Dan gunakan <code className="bg-white/20 px-1 border border-white">transform</code> untuk efek bergerak memutar, membesar, atau terangkat!
                    </p>
                    <CodeBlock 
                      language="css" 
                      code={`.btn {
  background-color: blue;
  
  /* Semua efek butuh waktu 0.3 detik */
  transition: all 0.3s ease; 
}

.btn:hover {
  background-color: darkblue;
  
  /* Elemen akan terangkat 5 pixel! */
  transform: translateY(-5px); 
}`} 
                    />
                    
                    <div className="mt-6 flex justify-center">
                      <button className="bg-[#2DD4BF] text-black text-xl font-black px-6 py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:bg-[#FF49DB] transition-all duration-300 ease-out cursor-pointer">
                        Hover Me! 🚀
                      </button>
                    </div>
                  </div>

                </div>
              </div>

              {/* Structural Pseudo-classes */}
              <div className="bg-[#2DD4BF] border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-12 flex flex-col md:flex-row gap-8 items-center text-black">
                <div className="md:w-1/2 space-y-6">
                  <h3 className="text-2xl font-black uppercase flex items-center gap-2">
                    <span className="material-symbols-outlined text-4xl bg-white rounded-full p-1 border-2 border-black">format_list_numbered</span>
                    Targeting Spesifik
                  </h3>
                  <p className="font-bold text-black/80 leading-relaxed">
                    Selain efek interaktif, Pseudo-classes juga sangat sakti untuk memanipulasi elemen berdasarkan <strong>urutan posisinya</strong> di dalam HTML (tanpa perlu repot memberi <code>class</code> satu per satu pada tiap elemen!).
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="bg-[#FACC15] p-1 border-2 border-black inline-block mt-1">1️⃣</span>
                      <div>
                        <strong className="block text-xl uppercase font-black text-black">:first-child / :last-child</strong>
                        <p className="font-bold text-black/70">Membidik elemen anak pertama atau anak terakhir saja secara instan. Sangat berguna untuk menghapus garis batas (border) pada ujung sebuah list!</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#FF49DB] text-white p-1 border-2 border-black inline-block mt-1">🔢</span>
                      <div>
                        <strong className="block text-xl uppercase font-black text-black">:nth-child(n)</strong>
                        <p className="font-bold text-black/70">Kamu bisa mengisi kurungnya dengan urutan angka (misal: 3), atau menggunakan kata ajaib <code className="bg-white/50 px-1 border border-black text-sm text-black">odd</code> (Ganjil) dan <code className="bg-white/50 px-1 border border-black text-sm text-black">even</code> (Genap) untuk membuat desain tabel belang-belang (Zebra Striping).</p>
                      </div>
                    </li>
                  </ul>
                  
                  <div className="bg-white border-2 border-black p-4 mt-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <p className="font-bold text-sm uppercase mb-3 text-black/60 tracking-widest text-center">Visualisasi :nth-child(odd)</p>
                    <ul className="border-2 border-black font-bold">
                      <li className="p-2 bg-[#FACC15] border-b-2 border-black">Baris 1 (Ganjil)</li>
                      <li className="p-2 bg-white border-b-2 border-black">Baris 2 (Genap)</li>
                      <li className="p-2 bg-[#FACC15] border-b-2 border-black">Baris 3 (Ganjil)</li>
                      <li className="p-2 bg-white">Baris 4 (Genap)</li>
                    </ul>
                  </div>
                </div>

                <div className="md:w-1/2 w-full rotate-1 hover:rotate-0 transition-transform">
                  <CodeBlock 
                    language="css" 
                    code={`/* Menghapus garis bawah pada baris terakhir list */
li:last-child {
  border-bottom: none;
}

/* Mewarnai kuning pada setiap baris GANJIL */
/* Trik jitu untuk membuat "Zebra Tabel" */
li:nth-child(odd) {
  background-color: #FACC15;
}

/* Mewarnai teks merah di baris ke-3 spesifik */
li:nth-child(3) {
  color: red;
}`} 
                  />
                </div>
              </div>

            </section>

            {/* Footer / Penutup */}
            <footer className="bg-white border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined absolute -top-3 -right-3 md:-top-4 md:-right-4 text-4xl md:text-5xl text-white bg-black rounded-full border-2 md:border-4 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">sports_esports</span>
              <p className="text-xl md:text-3xl font-black text-black uppercase leading-relaxed max-w-4xl mx-auto">
                "Sebuah website tanpa efek :hover bagaikan benda mati. Hidupkan dengan Transition!"
              </p>
            </footer>

            <div className="h-12 w-full"></div>
          </div>
        </main>
      </div>
    </>
  );
}
