"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import CodeBlock from '@/components/CodeBlock';

export default function SemanticPage() {
  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/semantic', isActive: true },
          { label: 'Soal Teori', href: '/semantic/soal', isActive: false }
        ]}
      />
      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />
        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">

            {/* Header & Hero Section */}
            <section className="bg-[#FF49DB] border-4 border-black p-6 md:p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">
                Semantic HTML
              </h1>
              <p className="text-base md:text-xl font-bold text-black bg-white inline-block px-4 py-2 md:px-6 md:py-3 border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Menulis kode HTML yang punya makna bagi mesin dan manusia!
              </p>
            </section>

            {/* Section 1: DIV dan SPAN (Non-Semantic) */}
            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#2DD4BF] text-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">1</span>
                Wadah Generik: &lt;div&gt; & &lt;span&gt;
              </h2>
              
              <div className="mb-8">
                <p className="font-bold text-black/80 text-base md:text-lg mb-4 leading-relaxed">
                  Sebelum HTML5 diciptakan, para pembuat web sering kali hanya menggunakan dua tag utama untuk membungkus atau mengelompokkan elemen di dalam desain mereka: <strong>&lt;div&gt;</strong> dan <strong>&lt;span&gt;</strong>.
                  Dua tag ini disebut tag <strong>Non-Semantic</strong> (Tidak memiliki makna khusus tentang apa isi kontennya).
                </p>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 mb-8">
                {/* DIV */}
                <div className="flex-1 bg-[#F4F0EA] border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-black text-2xl uppercase mb-4 text-black border-b-4 border-black pb-2 inline-block">DIV (Division)</h3>
                  <p className="font-bold text-black/80 text-sm md:text-base leading-relaxed mb-4">
                    Tag <code>&lt;div&gt;</code> digunakan untuk mengelompokkan elemen dalam bentuk <strong>Block-level</strong>. Sifatnya akan otomatis turun ke baris baru dan mengambil lebar (width) layar penuh. Bayangkan div sebagai sebuah <strong>kotak besar</strong> untuk mengelompokkan isi halaman.
                  </p>
                  <CodeBlock 
                    language="html"
                    code={`<div>\n  <h2>Judul Artikel</h2>\n  <p>Isi artikel di dalam kotak div.</p>\n</div>`}
                  />
                </div>

                {/* SPAN */}
                <div className="flex-1 bg-[#F4F0EA] border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-black text-2xl uppercase mb-4 text-black border-b-4 border-black pb-2 inline-block">SPAN</h3>
                  <p className="font-bold text-black/80 text-sm md:text-base leading-relaxed mb-4">
                    Tag <code>&lt;span&gt;</code> digunakan untuk mengelompokkan sebagian kecil elemen dalam bentuk <strong>Inline-level</strong>. Sifatnya tidak turun baris. Bayangkan span sebagai cara menyorot (highlight) <strong>kata tertentu di dalam teks</strong>.
                  </p>
                  <CodeBlock 
                    language="html"
                    code={`<p>\n  Ini teks biasa, dan <span style="color:red">ini merah</span>.\n</p>`}
                  />
                </div>
              </div>
            </section>

            {/* Section 2: Semantic HTML5 */}
            <section className="bg-[#2DD4BF] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12 rotate-[-1deg] hover:rotate-0 transition-transform">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#FACC15] text-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">2</span>
                Mengenal Tag Semantic HTML
              </h2>

              <p className="font-bold text-black/80 text-base md:text-lg mb-8 leading-relaxed bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Semua bagian website dulu dibungkus dengan ratusan tag <code>&lt;div&gt;</code>. Ini membuat kode berantakan (sering disebut <em>"Div Soup"</em>). Sekarang, HTML5 menyediakan tag <strong>Semantic</strong> yang 100% sama bentuknya dengan <code>&lt;div&gt;</code>, tetapi nama tag-nya bisa menjelaskan "Apa isi konten di dalamnya".
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Header & Nav */}
                <div className="bg-white border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-4">
                  <div className="flex gap-4">
                    <span className="bg-[#FF49DB] text-white px-2 py-1 font-black uppercase border-2 border-black h-fit">&lt;header&gt;</span>
                    <p className="font-bold text-sm">Digunakan untuk bagian kepala (atas) dari sebuah halaman web atau artikel (sering berisi Logo atau Judul Utama).</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="bg-[#FF49DB] text-white px-2 py-1 font-black uppercase border-2 border-black h-fit">&lt;nav&gt;</span>
                    <p className="font-bold text-sm">Singkatan dari <em>Navigation</em>. Digunakan untuk membungkus sekumpulan link menu (seperti menu di website atau Sidebar navigasi).</p>
                  </div>
                </div>

                {/* Main & Article */}
                <div className="bg-white border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-4">
                  <div className="flex gap-4">
                    <span className="bg-[#FF49DB] text-white px-2 py-1 font-black uppercase border-2 border-black h-fit">&lt;main&gt;</span>
                    <p className="font-bold text-sm">Digunakan untuk menentukan konten utama dari dokumen. Hanya boleh ada satu <code>&lt;main&gt;</code> di setiap halaman!</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="bg-[#FF49DB] text-white px-2 py-1 font-black uppercase border-2 border-black h-fit">&lt;article&gt;</span>
                    <p className="font-bold text-sm">Membungkus konten independen yang bisa berdiri sendiri secara masuk akal (contoh: satu post blog, satu berita, komentar forum).</p>
                  </div>
                </div>

                {/* Section & Aside */}
                <div className="bg-white border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-4">
                  <div className="flex gap-4">
                    <span className="bg-[#FF49DB] text-white px-2 py-1 font-black uppercase border-2 border-black h-fit">&lt;section&gt;</span>
                    <p className="font-bold text-sm">Mengelompokkan konten-konten yang saling berkaitan dalam satu tema. Mirip dengan bab dalam sebuah buku.</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="bg-[#FF49DB] text-white px-2 py-1 font-black uppercase border-2 border-black h-fit">&lt;aside&gt;</span>
                    <p className="font-bold text-sm">Menandakan konten yang terletak di "samping" (tidak secara langsung berhubungan dengan konten utama). Contoh: iklan, widget, link terkait.</p>
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-white border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-4">
                  <div className="flex gap-4">
                    <span className="bg-[#FF49DB] text-white px-2 py-1 font-black uppercase border-2 border-black h-fit">&lt;footer&gt;</span>
                    <p className="font-bold text-sm">Digunakan untuk bagian kaki/bawah dari dokumen atau section. Biasanya berisi hak cipta, kontak, atau link media sosial.</p>
                  </div>
                </div>

              </div>
            </section>

            {/* Section 3: Mengapa Harus Semantic? */}
            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4">
                    Mengapa Harus Repot Pakai Semantic HTML?
                  </h2>
                  <ul className="space-y-6">
                    <li className="flex gap-4 items-start">
                      <span className="bg-[#FACC15] border-2 border-black flex items-center justify-center p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"><span className="material-symbols-outlined text-black font-black">travel_explore</span></span>
                      <div>
                        <h4 className="font-black uppercase text-lg">1. Ramah Mesin Pencari (SEO)</h4>
                        <p className="font-bold text-black/70 text-sm">Google dan Bing lebih mengerti struktur website kamu. Mereka memprioritaskan teks di dalam tag <code>&lt;header&gt;</code> atau <code>&lt;article&gt;</code> daripada di dalam tag generik <code>&lt;div&gt;</code> biasa.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="bg-[#4ade80] border-2 border-black flex items-center justify-center p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"><span className="material-symbols-outlined text-black font-black">accessibility_new</span></span>
                      <div>
                        <h4 className="font-black uppercase text-lg">2. Aksesibilitas (Tunanetra)</h4>
                        <p className="font-bold text-black/70 text-sm">Orang yang buta/tunanetra menggunakan software pembaca layar (Screen Reader). Software ini menggunakan tag semantic untuk memandu penggunanya melompat antar menu navigasi dan konten dengan mudah.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="bg-[#FF49DB] border-2 border-black flex items-center justify-center p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"><span className="material-symbols-outlined text-white font-black">code</span></span>
                      <div>
                        <h4 className="font-black uppercase text-lg">3. Kode Mudah Dibaca</h4>
                        <p className="font-bold text-black/70 text-sm">Bayangkan kamu membaca puluhan baris <code>&lt;div&gt;</code> bertumpuk vs puluhan baris yang rapi dipisah dengan <code>&lt;nav&gt;</code>, <code>&lt;section&gt;</code>, dan <code>&lt;footer&gt;</code>. Pasti lebih mudah dimengerti programmer lain.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="w-full md:w-1/3 bg-[#F4F0EA] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-black uppercase text-center mb-4 bg-white border-2 border-black py-1">Struktur Modern</h4>
                  <CodeBlock 
                      language="html"
                      code={`<body>\n  <header>\n    <nav>Menu</nav>\n  </header>\n\n  <main>\n    <section>\n      <article>Isi Berita</article>\n    </section>\n    <aside>Iklan</aside>\n  </main>\n\n  <footer>Hak Cipta</footer>\n</body>`}
                  />
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
