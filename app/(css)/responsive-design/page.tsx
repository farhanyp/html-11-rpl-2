"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import CodeBlock from '@/components/CodeBlock';

export default function ResponsiveDesignPage() {
  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/responsive-design', isActive: true },
          { label: 'Soal Teori', href: '/responsive-design/soal', isActive: false }
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">

            <section className="bg-[#2DD4BF] border-4 border-black p-6 md:p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tighter uppercase mb-4 md:mb-6">
                15. Variabel & Responsif
              </h1>
              <p className="text-base md:text-xl font-bold text-black bg-white inline-block px-3 py-2 md:px-4 md:py-2 border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Kunci mengelola proyek besar dan membuatnya tampil cantik di semua perangkat!
              </p>
            </section>

            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              
              {/* CSS Variables */}
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-4">
                <span className="material-symbols-outlined text-4xl md:text-5xl text-[#FF49DB]">data_object</span>
                CSS Variables
              </h2>

              <div className="flex flex-col lg:flex-row gap-8 mb-16">
                <div className="lg:w-1/2 space-y-6">
                  <p className="font-bold text-black/80 text-lg leading-relaxed bg-[#F4F0EA] p-4 border-2 border-black">
                    Bayangkan kamu punya 50 elemen berwarna biru di website. Jika klien tiba-tiba minta warna diubah jadi merah, apakah kamu mau mencari dan mengganti 50 baris kode secara manual? Tentu tidak!
                  </p>
                  
                  <div className="bg-[#FACC15] text-black border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative rotate-1 hover:rotate-0 transition-transform">
                    <span className="material-symbols-outlined absolute -top-4 -right-4 text-3xl bg-white rounded-full border-2 border-black p-1">lightbulb</span>
                    <h3 className="font-black text-xl mb-2">Gunakan Variabel!</h3>
                    <p className="font-bold">Dengan CSS Variables (disimpan di elemen <code className="bg-white px-1 border border-black">:root</code>), kamu cukup mengubah nilai di <strong>1 tempat saja</strong>, dan seluruh website akan otomatis menyesuaikan warnanya!</p>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="bg-black text-white p-1 border-2 border-black inline-block mt-1 font-black px-2">--nama</span>
                      <div>
                        <p className="font-bold text-black/70 mt-1">Variabel selalu diawali dengan dua tanda hubung (strip). Contoh: <code className="bg-gray-200 px-1 border border-black text-sm">--warna-utama</code></p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-black text-white p-1 border-2 border-black inline-block mt-1 font-black px-2">var()</span>
                      <div>
                        <p className="font-bold text-black/70 mt-1">Gunakan fungsi <code className="bg-gray-200 px-1 border border-black text-sm">var(--nama-variabel)</code> untuk memanggil dan memakai warnanya.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="lg:w-1/2 w-full -rotate-1 hover:rotate-0 transition-transform">
                  <CodeBlock 
                    language="css" 
                    code={`/* Menyimpan variabel di akar dokumen */
:root {
  --warna-utama: #3b82f6; 
  --warna-teks: #1e1e1e;
}

/* Memanggil variabelnya */
h1 { 
  color: var(--warna-utama); 
}

button { 
  background-color: var(--warna-utama);
  color: white;
}`} 
                  />
                </div>
              </div>

              {/* Responsive Design & Media Queries */}
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-4 mt-12">
                <span className="material-symbols-outlined text-4xl md:text-5xl text-[#2DD4BF]">devices</span>
                Responsive Design (@media)
              </h2>

              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2 space-y-6">
                  <p className="font-bold text-black/80 text-lg leading-relaxed">
                    Website zaman sekarang dibuka di berbagai layar: Monitor besar, Tablet, hingga Layar HP yang sempit. Inilah inti dari <strong>Responsive Web Design</strong>.
                  </p>
                  
                  <div className="bg-[#FF49DB] text-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative rotate-1 hover:rotate-0 transition-transform">
                    <span className="material-symbols-outlined absolute -top-4 -right-4 text-3xl bg-black rounded-full border-2 border-black p-1 text-white">smartphone</span>
                    <h3 className="font-black text-xl mb-2 text-black">Aturan Bersyarat!</h3>
                    <p className="font-bold text-black/80">Kita bisa menyuruh browser: <em>"Tolong pakai CSS ini HANYA JIKA ukuran layarnya kurang dari 768px (ukuran Tablet/HP)!"</em> dengan menggunakan <strong>Media Queries</strong>.</p>
                  </div>

                  <div className="bg-[#F4F0EA] border-4 border-black p-4 mt-6">
                    <p className="font-bold text-sm uppercase mb-3 text-black/60 tracking-widest text-center">Contoh Kasus</p>
                    <p className="font-bold text-black/80 text-center">
                      Di layar Laptop, menu navigasi akan <strong>tampil menyamping</strong>. Tapi saat di layar HP, menu tersebut sengaja <strong>disembunyikan</strong> agar tidak merusak tampilan, dan diganti dengan tombol "Hamburger Menu".
                    </p>
                  </div>
                </div>

                <div className="lg:w-1/2 w-full rotate-1 hover:rotate-0 transition-transform">
                  <CodeBlock 
                    language="css" 
                    code={`/* Tampilan Default (Layar Desktop) */
.nav-links { 
  display: flex; 
  gap: 20px;
}

/* Tampilan Layar Sempit (Mobile/HP) */
/* Hanya aktif jika lebar layar maksimal 768px */
@media (max-width: 768px) {
  
  .nav-links {
    /* Sembunyikan menu di HP */
    /* agar layout tidak berantakan */
    display: none; 
  }
  
}`} 
                  />
                </div>
              </div>

              {/* Desktop First vs Mobile First */}
              <div className="bg-[#1e1e1e] text-white border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(250,204,21,1)] relative mt-12 flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 w-full rotate-1 hover:rotate-0 transition-transform">
                  <CodeBlock 
                    language="css" 
                    code={`/* PENDEKATAN DESKTOP-FIRST */
/* Pakai max-width (Maksimal Lebar) */
.kotak { width: 1000px; }
@media (max-width: 768px) {
  /* Berubah JIKA layar mengecil */
  .kotak { width: 100%; } 
}

/* PENDEKATAN MOBILE-FIRST (Disarankan!) */
/* Pakai min-width (Minimal Lebar) */
.kotak { width: 100%; }
@media (min-width: 768px) {
  /* Berubah JIKA layar membesar */
  .kotak { width: 1000px; } 
}`} 
                  />
                </div>
                <div className="md:w-1/2 space-y-6 text-white">
                  <h3 className="text-2xl font-black uppercase flex items-center gap-2 text-[#FACC15]">
                    <span className="material-symbols-outlined text-4xl">mobile_friendly</span>
                    Pendekatan Mobile-First
                  </h3>
                  <p className="font-bold text-white/80 leading-relaxed">
                    Ada dua mazhab besar dalam membuat <em>Responsive Web Design</em>: Desktop-First dan Mobile-First.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="bg-[#FF49DB] p-1 border-2 border-black inline-block mt-1 text-black">💻</span>
                      <div>
                        <strong className="block text-xl uppercase font-black text-[#FF49DB]">Desktop First (max-width)</strong>
                        <p className="font-bold text-white/70">Mendesain untuk layar besar dulu, lalu mengecilkannya untuk HP menggunakan <code className="bg-white/20 px-1 border border-white text-sm">max-width</code>.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#2DD4BF] p-1 border-2 border-black inline-block mt-1 text-black">📱</span>
                      <div>
                        <strong className="block text-xl uppercase font-black text-[#2DD4BF]">Mobile First (min-width)</strong>
                        <p className="font-bold text-white/70">Mendesain untuk layar HP dulu (layout default HTML yang berjejer menumpuk ke bawah), lalu menatanya menyamping untuk layar besar menggunakan <code className="bg-white/20 px-1 border border-white text-sm">min-width</code>. <strong>Ini standar industri saat ini!</strong></p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Calc Function */}
              <div className="bg-[#FF49DB] border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-12 flex flex-col md:flex-row gap-8 items-center text-black">
                <div className="md:w-1/2 space-y-6">
                  <h3 className="text-2xl font-black uppercase flex items-center gap-2">
                    <span className="material-symbols-outlined text-4xl bg-white rounded-full p-1 border-2 border-black">calculate</span>
                    Fungsi Matematika: calc()
                  </h3>
                  <p className="font-bold text-black/80 leading-relaxed">
                    Tahukah kamu bahwa CSS bisa berhitung? Kamu bisa memasukkan rumus matematika menggunakan fungsi <code className="bg-white px-1 border border-black">calc()</code>! Fungsi ini sangat mematikan jika digabungkan dengan Variabel CSS.
                  </p>
                  <div className="font-bold text-black/80 leading-relaxed mt-4 flex items-start gap-2 bg-white p-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="material-symbols-outlined mt-1 text-[#FF49DB]">info</span>
                    <p><strong>Contoh Kasus:</strong> Kamu ingin membuat tampilan Halaman Depan yang memenuhi seluruh layar (<code>100vh</code>), tapi harus dikurangi dengan tinggi Navbar sebesar <code>80px</code> agar layarnya tidak kelebihan dan muncul <em>scroll</em> yang mengganggu. Gunakan `calc()`!</p>
                  </div>
                </div>
                <div className="md:w-1/2 w-full -rotate-1 hover:rotate-0 transition-transform">
                  <CodeBlock 
                    language="css" 
                    code={`/* CSS BISA MENGHITUNG! */
.hero-section {
  /* Tinggi layar dikurangi tinggi navbar */
  height: calc(100vh - 80px);
}

/* Digabung dengan Variabel CSS */
:root {
  --lebar-sidebar: 280px;
}

.konten-utama {
  /* 100% lebar layar dikurangi Sidebar */
  width: calc(100% - var(--lebar-sidebar));
}`} 
                  />
                </div>
              </div>

            </section>

            {/* Footer / Penutup */}
            <footer className="bg-black border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(45,212,191,1)] md:shadow-[8px_8px_0px_0px_rgba(45,212,191,1)] text-center relative hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined absolute -top-3 -right-3 md:-top-4 md:-right-4 text-4xl md:text-5xl text-black bg-[#FACC15] rounded-full border-2 md:border-4 border-black p-2 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">verified</span>
              <p className="text-xl md:text-3xl font-black text-white uppercase leading-relaxed max-w-4xl mx-auto">
                "Kuasai Variabel dan Media Query, maka kodemu siap masuk skala Industri Profesional!"
              </p>
            </footer>

            <div className="h-12 w-full"></div>
          </div>
        </main>
      </div>
    </>
  );
}
