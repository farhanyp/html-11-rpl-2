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

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-canvas relative" style={{ backgroundImage: 'radial-gradient(var(--color-outline) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">

            <section className="bg-white border-4 border-black p-6 md:p-12 shadow-neo-xl text-center relative overflow-hidden transform rotate-1 hover:rotate-0 transition-transform">
              <div className="absolute top-0 left-0 bg-jade-vibrant text-white font-black px-4 py-1 border-b-4 border-r-4 border-black shadow-neo-sm z-20">
                MATERI 12
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-black tracking-tighter uppercase mt-6 mb-4 md:mb-6">
                Posisi & Z-Index
              </h1>
              <p className="text-base md:text-xl font-bold text-white bg-forest-teal inline-block px-4 py-2 md:px-6 md:py-3 border-4 border-black mb-4 md:mb-6 shadow-neo-md uppercase tracking-tight">
                Properti "position" melepaskan elemen dari hukum alam HTML!
              </p>
            </section>

            <section className="bg-white border-4 border-black shadow-neo-xl p-6 md:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="material-symbols-outlined text-4xl md:text-5xl text-white bg-pine-deep p-2 border-4 border-black shadow-neo-sm flex-shrink-0">layers</span>
                Mengendalikan Koordinat
              </h2>

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mb-12 items-stretch">
                <div className="lg:w-1/2 space-y-8">
                  <p className="font-bold text-forest-teal text-lg md:text-xl leading-relaxed bg-mint-canvas p-4 border-4 border-black shadow-neo-sm">
                    Setiap elemen punya hukum asalnya (<em>static</em>). Dengan mengubah properti <code className="bg-white text-black px-2 border-2 border-black font-black uppercase tracking-widest">position</code>, kamu bisa menggerakkan elemen secara bebas!
                  </p>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4 bg-canvas border-4 border-black p-4 shadow-neo-sm hover:translate-x-2 transition-transform">
                      <span className="bg-white p-2 border-4 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] text-2xl flex-shrink-0">📌</span>
                      <div>
                        <strong className="block text-xl uppercase font-black text-black tracking-widest mb-1">static</strong>
                        <p className="font-bold text-forest-teal text-base">Posisi normal bawaan HTML. Tidak bisa digeser dengan koordinat.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 bg-canvas border-4 border-black p-4 shadow-neo-sm hover:translate-x-2 transition-transform">
                      <span className="bg-white p-2 border-4 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] text-2xl flex-shrink-0">📍</span>
                      <div>
                        <strong className="block text-xl uppercase font-black text-black tracking-widest mb-1">relative</strong>
                        <p className="font-bold text-forest-teal text-base">Bergeser dari posisi aslinya, tanpa merusak atau mengubah tata letak elemen di sekitarnya.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 bg-white text-black border-4 border-black p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
                      <span className="bg-canvas p-2 border-4 border-black text-2xl flex-shrink-0">🚀</span>
                      <div>
                        <strong className="block text-xl uppercase font-black tracking-widest mb-1 text-jade-vibrant">absolute</strong>
                        <p className="font-bold text-forest-teal text-base">Mengambang bebas tanpa batas! Elemen ini akan mencari "induk" (parent) terdekat yang memiliki posisi <em>relative</em> untuk dijadikan patokan koordinat.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 bg-white text-black border-4 border-black p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
                      <span className="bg-canvas p-2 border-4 border-black text-2xl flex-shrink-0">🧲</span>
                      <div>
                        <strong className="block text-xl uppercase font-black tracking-widest mb-1 text-jade-vibrant">sticky</strong>
                        <p className="font-bold text-forest-teal text-base">Gabungan normal dan <em>fixed</em>. Elemen akan menempel "nyangkut" di layar saat kamu nge-scroll ke bawah (Sangat berguna untuk Navbar!).</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="lg:w-1/2 space-y-8 flex flex-col">
                  <div className="bg-black border-4 border-black p-1 shadow-neo-lg flex-1 flex flex-col transform -rotate-1 hover:rotate-0 transition-transform">
                    <div className="bg-mint-soft border-b-4 border-black p-3 font-black uppercase text-center text-black">Kode Koordinat CSS</div>
                    <div className="flex-grow p-1">
                      <CodeBlock 
                        language="css" 
                        code={`/* Wadah dijadikan patokan (Harus!) */
.parent-container {
  position: relative;
}

/* Anak melayang bebas di pojok kanan atas wadah */
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
                </div>
              </div>

              {/* Fixed Position Section */}
              <div className="bg-pine-deep border-4 border-black p-6 md:p-12 shadow-neo-xl mt-16 flex flex-col xl:flex-row gap-10 items-stretch text-white transform rotate-1 hover:rotate-0 transition-transform">
                <div className="xl:w-1/2 space-y-8">
                  <h3 className="text-2xl md:text-4xl font-black uppercase flex items-center gap-3 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                    <span className="material-symbols-outlined text-4xl md:text-5xl bg-mint-soft text-black p-2 rounded-none border-4 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">push_pin</span>
                    Position: Fixed
                  </h3>
                  <p className="font-bold text-lg md:text-xl leading-relaxed bg-black p-4 border-4 border-mint-soft">
                    Selain empat posisi di atas, ada satu lagi yang sangat sakti: <code className="bg-white text-black font-black px-2 border-2 border-black uppercase tracking-widest">fixed</code>! 
                  </p>
                  <p className="font-black text-xl leading-relaxed bg-white text-black p-4 border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                    Elemen dengan posisi <strong>fixed</strong> akan terkunci secara absolut pada <strong className="text-jade-vibrant uppercase underline decoration-4 decoration-black">layar browser (Viewport)</strong>, bukan pada elemen induknya.
                  </p>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4 bg-canvas text-black border-4 border-black p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
                      <span className="text-3xl flex-shrink-0 mt-1">⚠️</span>
                      <p className="font-bold text-base md:text-lg text-forest-teal"><strong className="text-black uppercase">Beda Absolute vs Fixed:</strong> <br/> Absolute akan ikut tergulung (scroll) ke atas bersama halamannya. Sedangkan Fixed akan diam mematung di kaca layar komputermu walau web di-scroll sampai ke paling bawah!</p>
                    </li>
                  </ul>
                  <div className="font-bold text-black text-base md:text-lg leading-relaxed mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-mint-soft p-4 border-4 border-black shadow-neo-sm">
                    <span className="material-symbols-outlined text-5xl">lightbulb</span>
                    <p><strong className="uppercase text-xl block mb-1 tracking-widest">Kasus Penggunaan:</strong> Sangat populer untuk membuat tombol melayang seperti "Chat WA", "Kembali ke Atas", atau iklan pop-up (Modal) yang menutupi layar!</p>
                  </div>
                </div>
                <div className="xl:w-1/2 w-full flex flex-col bg-black border-4 border-black p-1 shadow-neo-md">
                   <div className="bg-mint-soft border-b-4 border-black p-3 font-black uppercase text-center text-black">Penerapan Fixed</div>
                  <div className="flex-grow p-1">
                    <CodeBlock 
                      language="css" 
                      code={`/* Tombol melayang di pojok kanan bawah */
.tombol-whatsapp {
  position: fixed; /* Mengunci ke kaca layar */
  bottom: 20px;    /* Jarak 20px dari bawah layar */
  right: 20px;     /* Jarak 20px dari kanan layar */
  
  /* Pastikan selalu paling depan (Tidak tertumpuk) */
  z-index: 999;    
}`} 
                    />
                  </div>
                </div>
              </div>

              {/* Z-Index Section */}
              <div className="bg-canvas border-4 border-black p-6 md:p-12 shadow-neo-xl relative mt-16 flex flex-col lg:flex-row gap-10 items-stretch transform -rotate-1 hover:rotate-0 transition-transform">
                <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
                  <h3 className="text-2xl md:text-4xl font-black uppercase flex items-center gap-3 text-black tracking-tighter">
                    <span className="material-symbols-outlined text-4xl md:text-5xl text-white bg-black p-2 border-4 border-black">view_agenda</span>
                    Apa itu Z-Index?
                  </h3>
                  <p className="text-base md:text-lg font-bold text-forest-teal leading-relaxed">
                    Jika ada dua elemen yang posisinya saling bertumpuk (misalnya menggunakan <em>absolute</em> atau <em>sticky</em>), siapa yang akan tampil di atas dan menutupi yang lain?
                  </p>
                  <p className="text-base md:text-lg font-bold text-forest-teal leading-relaxed mb-4 bg-mint-soft p-4 border-4 border-black shadow-neo-sm">
                    Properti <code className="bg-black text-white px-2 py-1 border-2 border-black font-black uppercase tracking-widest">z-index</code> (ibarat lapisan kue) menentukan tingkat kedalamannya. <strong className="text-black uppercase">Semakin besar angkanya, semakin dia berada di depan/atas!</strong>
                  </p>
                  
                  {/* Visualisasi Tumpukan Z-index Brutalist */}
                  <div className="relative h-48 w-full mt-6 flex items-center justify-center">
                    <div className="absolute w-32 h-32 bg-mint-soft border-4 border-black shadow-[4px_4px_0px_0px_#000] -left-0 md:left-4 z-10 flex flex-col items-center justify-center font-black text-black transform rotate-6 hover:z-50 hover:scale-110 cursor-pointer transition-all">
                      <span className="text-xs uppercase tracking-widest">Paling Bawah</span>
                      <span className="text-2xl mt-1">z: 10</span>
                    </div>
                    <div className="absolute w-32 h-32 bg-jade-vibrant border-4 border-black shadow-[4px_4px_0px_0px_#000] z-20 flex flex-col items-center justify-center font-black text-white hover:z-50 hover:scale-110 cursor-pointer transition-all">
                      <span className="text-xs uppercase tracking-widest">Di Tengah</span>
                      <span className="text-2xl mt-1">z: 20</span>
                    </div>
                    <div className="absolute w-32 h-32 bg-pine-deep border-4 border-black shadow-[4px_4px_0px_0px_#000] left-20 md:left-40 z-30 flex flex-col items-center justify-center font-black text-white transform -rotate-6 hover:z-50 hover:scale-110 cursor-pointer transition-all">
                      <span className="text-xs uppercase tracking-widest">Paling Atas</span>
                      <span className="text-2xl mt-1">z: 30</span>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full flex flex-col bg-black border-4 border-black p-1 shadow-neo-md transform group-hover:scale-[1.02] transition-transform">
                  <div className="bg-mint-soft font-black uppercase text-center py-2 border-b-4 border-black">Z-Index Implementation</div>
                  <div className="flex-grow p-1">
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
              </div>

            </section>

            {/* Footer / Penutup */}
            <footer className="bg-jade-vibrant border-4 border-black p-8 md:p-12 shadow-neo-xl text-center relative hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined absolute -top-4 -right-4 md:-top-6 md:-right-6 text-5xl md:text-6xl text-white bg-pine-deep rounded-none border-4 border-black p-3 shadow-neo-md hover:scale-110 transition-transform cursor-pointer">library_add_check</span>
              <p className="text-2xl md:text-4xl font-black text-white uppercase leading-relaxed max-w-4xl mx-auto drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] tracking-tight">
                "Kuasai kombinasi Relative & Absolute, maka tak ada lagi elemen yang letaknya berantakan!"
              </p>
            </footer>

            <div className="mt-16 mb-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t-4 border-black pt-8">
              <p className="font-black text-sm md:text-base uppercase tracking-widest text-forest-teal bg-white border-4 border-black px-4 py-2 shadow-neo-sm text-center md:text-left">
                © 2026 FARHAN YUDHA PRATAMA
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
