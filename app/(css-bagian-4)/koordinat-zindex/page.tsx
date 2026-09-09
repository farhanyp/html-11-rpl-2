"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import CodeBlock from '@/components/CodeBlock';

export default function KoordinatZIndexPage() {
  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/koordinat-zindex', isActive: true },
          { label: 'Soal Teori', href: '/koordinat-zindex/soal', isActive: false }
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">

            <section className="bg-[#2DD4BF] border-4 border-black p-6 md:p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden hover:scale-[1.01] transition-transform">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tighter uppercase mb-4 md:mb-6">
                12. Posisi & Z-Index
              </h1>
              <p className="text-base md:text-xl font-bold text-black bg-white inline-block px-3 py-2 md:px-4 md:py-2 border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Properti "position" melepaskan elemen dari hukum alam HTML!
              </p>
            </section>

            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-4">
                <span className="material-symbols-outlined text-4xl md:text-5xl text-[#FF49DB]">layers</span>
                Mengendalikan Koordinat
              </h2>

              <div className="flex flex-col lg:flex-row gap-8 mb-12">
                <div className="lg:w-1/2 space-y-6">
                  <p className="font-bold text-black/80 text-lg leading-relaxed">
                    Setiap elemen punya hukum asalnya (<em>static</em>). Dengan mengubah properti <code className="bg-gray-200 px-1 border border-black">position</code>, kamu bisa menggerakkan elemen secara bebas menggunakan koordinat <code className="bg-white px-1">top</code>, <code className="bg-white px-1">right</code>, <code className="bg-white px-1">bottom</code>, dan <code className="bg-white px-1">left</code>.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="bg-[#F4F0EA] p-1 border-2 border-black inline-block mt-1">📌</span>
                      <div>
                        <strong className="block text-xl uppercase font-black">static</strong>
                        <p className="font-bold text-black/70">Posisi normal bawaan HTML. Tidak bisa digeser dengan koordinat.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#2DD4BF] p-1 border-2 border-black inline-block mt-1">📍</span>
                      <div>
                        <strong className="block text-xl uppercase font-black">relative</strong>
                        <p className="font-bold text-black/70">Bergeser dari posisi aslinya, tanpa merusak atau mengubah tata letak elemen di sekitarnya.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#FF49DB] text-white p-1 border-2 border-black inline-block mt-1">🚀</span>
                      <div>
                        <strong className="block text-xl uppercase font-black">absolute</strong>
                        <p className="font-bold text-black/70">Mengambang bebas tanpa batas! Elemen ini akan mencari "induk" (parent) terdekat yang memiliki posisi <em>relative</em> untuk dijadikan patokan koordinat.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#FACC15] p-1 border-2 border-black inline-block mt-1">🧲</span>
                      <div>
                        <strong className="block text-xl uppercase font-black">sticky</strong>
                        <p className="font-bold text-black/70">Gabungan normal dan <em>fixed</em>. Elemen akan menempel "nyangkut" di layar saat kamu nge-scroll ke bawah (Sangat berguna untuk Navbar!).</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="lg:w-1/2 w-full rotate-1 hover:rotate-0 transition-transform">
                  <CodeBlock 
                    language="css" 
                    code={`/* Wadah dijadikan patokan */
.parent-container {
  position: relative;
}

/* Anak melayang di pojok kanan atas wadah */
.badge-notifikasi {
  position: absolute;
  top: -5px;
  right: -5px;
}

/* Navbar yang menempel di atap saat scroll */
.navbar {
  position: sticky;
  top: 0;
}`} 
                  />
                </div>
              </div>

              {/* Fixed Position Section */}
              <div className="bg-[#FF49DB] border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-12 flex flex-col md:flex-row gap-8 items-center text-black">
                <div className="md:w-1/2 space-y-6">
                  <h3 className="text-2xl font-black uppercase flex items-center gap-2">
                    <span className="material-symbols-outlined text-4xl bg-white rounded-full p-1 border-2 border-black">push_pin</span>
                    Position: Fixed
                  </h3>
                  <p className="font-bold text-black/80 leading-relaxed">
                    Selain empat posisi di atas, ada satu lagi yang sangat sakti: <code className="bg-white px-1 border border-black">fixed</code>! 
                  </p>
                  <p className="font-bold text-black/80 leading-relaxed bg-white p-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] inline-block">
                    Elemen dengan posisi <strong>fixed</strong> akan terkunci secara absolut pada <strong>layar browser (Viewport)</strong>, bukan pada elemen induknya.
                  </p>
                  <ul className="space-y-4 text-sm font-bold text-black/80">
                    <li className="flex items-start gap-2">
                      <span className="text-xl">⚠️</span>
                      <p><strong>Beda Absolute vs Fixed:</strong> <br/> Absolute akan ikut tergulung (scroll) ke atas bersama halamannya. Sedangkan Fixed akan diam mematung di kaca layar komputermu walau web di-scroll sampai ke paling bawah!</p>
                    </li>
                  </ul>
                  <div className="font-bold text-black/80 leading-relaxed mt-4 flex items-start gap-2 bg-[#FACC15] p-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="material-symbols-outlined mt-1">lightbulb</span>
                    <p><strong>Kasus Penggunaan:</strong> Sangat populer untuk membuat tombol melayang seperti "Chat WA", "Kembali ke Atas", atau iklan pop-up (Modal) yang menutupi layar!</p>
                  </div>
                </div>
                <div className="md:w-1/2 w-full -rotate-1 hover:rotate-0 transition-transform">
                  <CodeBlock 
                    language="css" 
                    code={`/* Tombol melayang di pojok kanan bawah */
.tombol-whatsapp {
  position: fixed; /* Mengunci ke kaca layar */
  bottom: 20px;    /* Jarak 20px dari bawah layar */
  right: 20px;     /* Jarak 20px dari kanan layar */
  z-index: 999;    /* Pastikan selalu paling depan */
}`} 
                  />
                </div>
              </div>

              {/* Z-Index Section */}
              <div className="bg-[#1e1e1e] border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(45,212,191,1)] relative mt-12 flex flex-col lg:flex-row gap-8 items-center text-white">
                <div className="lg:w-1/2 space-y-4">
                  <h3 className="text-2xl font-black uppercase flex items-center gap-2 text-[#FACC15]">
                    <span className="material-symbols-outlined text-4xl">view_agenda</span>
                    Apa itu Z-Index?
                  </h3>
                  <p className="text-base font-bold text-white/80 leading-relaxed">
                    Jika ada dua elemen yang posisinya saling bertumpuk (misalnya menggunakan <em>absolute</em> atau <em>sticky</em>), siapa yang akan tampil di atas dan menutupi yang lain?
                  </p>
                  <p className="text-base font-bold text-white/80 leading-relaxed mb-4">
                    Properti <code className="bg-white/20 px-1 border border-white text-white">z-index</code> (ibarat lapisan kue) menentukan tingkat kedalamannya. Semakin besar angkanya, semakin dia berada di depan/atas!
                  </p>
                  
                  <div className="relative h-32 w-full mt-4 flex items-center justify-center">
                    <div className="absolute w-24 h-24 bg-[#FF49DB] border-2 border-black shadow-[2px_2px_0px_0px_#000] -left-4 z-10 flex items-center justify-center font-black text-black transform rotate-6 hover:z-50 cursor-pointer transition-transform">z-index: 10</div>
                    <div className="absolute w-24 h-24 bg-[#2DD4BF] border-2 border-black shadow-[2px_2px_0px_0px_#000] z-20 flex items-center justify-center font-black text-black hover:z-50 cursor-pointer transition-transform">z-index: 20</div>
                    <div className="absolute w-24 h-24 bg-[#FACC15] border-2 border-black shadow-[2px_2px_0px_0px_#000] left-12 z-30 flex items-center justify-center font-black text-black transform -rotate-6 hover:z-50 cursor-pointer transition-transform">z-index: 30</div>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full -rotate-1 hover:rotate-0 transition-transform">
                  <CodeBlock 
                    language="css" 
                    code={`nav {
  position: sticky;
  top: 0;
  
  /* Pastikan navbar selalu paling atas */
  /* Tidak tertimpa elemen lain saat di-scroll */
  z-index: 100; 
}`} 
                  />
                </div>
              </div>

            </section>

            {/* Footer / Penutup */}
            <footer className="bg-white border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined absolute -top-3 -right-3 md:-top-4 md:-right-4 text-4xl md:text-5xl text-white bg-[#FF49DB] rounded-full border-2 md:border-4 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">library_add_check</span>
              <p className="text-xl md:text-3xl font-black text-black uppercase leading-relaxed max-w-4xl mx-auto">
                "Kuasai kombinasi Relative & Absolute, maka tak ada lagi elemen yang berantakan!"
              </p>
            </footer>

            <div className="h-12 w-full"></div>
          </div>
        </main>
      </div>
    </>
  );
}
