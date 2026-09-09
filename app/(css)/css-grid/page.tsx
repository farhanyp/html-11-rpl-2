"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import CodeBlock from '@/components/CodeBlock';

export default function CssGridPage() {
  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/css-grid', isActive: true },
          { label: 'Soal Teori', href: '/css-grid/soal', isActive: false }
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">

            <section className="bg-[#FF49DB] border-4 border-black p-6 md:p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                11. Modern Layout 2: CSS Grid
              </h1>
              <p className="text-base md:text-xl font-bold text-black bg-white inline-block px-3 py-2 md:px-4 md:py-2 border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Jika Flexbox adalah rel kereta (1 Dimensi), Grid adalah papan catur (2 Dimensi)!
              </p>
            </section>

            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-4">
                <span className="material-symbols-outlined text-4xl md:text-5xl text-[#2DD4BF]">grid_view</span>
                Menyusun Baris & Kolom
              </h2>

              <div className="flex flex-col lg:flex-row gap-8 mb-12">
                <div className="lg:w-1/2 space-y-6">
                  <p className="font-bold text-black/80 text-lg leading-relaxed">
                    CSS Grid sangat cocok digunakan untuk membuat tata letak yang lebih kompleks, seperti <strong>Galeri Foto</strong> atau <strong>Daftar Proyek (Card Layout)</strong> yang responsif.
                  </p>
                  
                  <div className="bg-[#FACC15] text-black border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative rotate-1 hover:rotate-0 transition-transform">
                    <span className="material-symbols-outlined absolute -top-4 -right-4 text-3xl bg-white rounded-full border-2 border-black p-1">auto_awesome</span>
                    <h3 className="font-black text-xl mb-2">Kode Ajaib Grid!</h3>
                    <p className="font-bold">Perhatikan kode <code className="bg-white px-1">grid-template-columns: repeat(auto-fit, minmax(...))</code> di samping. Itu adalah rahasia membuat grid responsif tanpa Media Query!</p>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="bg-[#2DD4BF] p-1 border-2 border-black inline-block mt-1">🔄</span>
                      <div>
                        <strong className="block text-xl uppercase font-black">auto-fit</strong>
                        <p className="font-bold text-black/70">Otomatis menyesuaikan jumlah kolom berdasarkan lebar layar yang tersedia.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#FF49DB] p-1 border-2 border-black text-white inline-block mt-1">↔️</span>
                      <div>
                        <strong className="block text-xl uppercase font-black">minmax(300px, 1fr)</strong>
                        <p className="font-bold text-black/70">Lebar minimal kotak adalah 300px. Jika ada sisa ruang, kotak akan membesar mengisi sisa ruang tersebut (1 <em>fraction</em>).</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="lg:w-1/2 space-y-6">
                  <div className="-rotate-1 hover:rotate-0 transition-transform">
                    <CodeBlock 
                      language="css" 
                      code={`.projects-grid {
  display: grid;
  
  /* Kolom otomatis, minimal 300px */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  
  gap: 2rem;
}`} 
                    />
                  </div>
                  
                  {/* Visualisasi Grid */}
                  <div className="bg-[#F4F0EA] border-4 border-black p-4 mt-6 hover:scale-[1.02] transition-transform">
                    <p className="text-sm font-bold uppercase mb-2 text-black/60 tracking-widest text-center">Visualisasi (Layar Lebar)</p>
                    <div className="grid grid-cols-2 gap-2 w-full p-2 bg-white border-2 border-black shadow-[inset_4px_4px_0px_0px_rgba(0,0,0,0.1)]">
                      <div className="h-16 bg-[#2DD4BF] border-2 border-black font-black flex items-center justify-center">1</div>
                      <div className="h-16 bg-[#FF49DB] border-2 border-black font-black flex items-center justify-center text-white">2</div>
                      <div className="h-16 bg-[#FACC15] border-2 border-black font-black flex items-center justify-center">3</div>
                      <div className="h-16 bg-black border-2 border-black font-black flex items-center justify-center text-white">4</div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Spanning & Fraction */}
              <div className="bg-[#2DD4BF] border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-12 flex flex-col md:flex-row gap-8 items-center text-black">
                <div className="md:w-1/2 space-y-6">
                  <h3 className="text-2xl font-black uppercase flex items-center gap-2 text-black">
                    <span className="material-symbols-outlined text-4xl bg-[#FF49DB] text-white p-1 rounded-full border-2 border-black">dashboard_customize</span>
                    Span & Proporsi (fr)
                  </h3>
                  <p className="font-bold text-black/80 leading-relaxed">
                    Selain membiarkan kotak otomatis menyesuaikan layar, Grid juga sangat tangguh diatur manual untuk membuat desain ala "Bento Box" (seperti dashboard Apple)!
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="bg-white p-1 border-2 border-black inline-block mt-1 text-black">🧩</span>
                      <div>
                        <strong className="block text-xl uppercase font-black text-black">Fraction (fr)</strong>
                        <p className="font-bold text-black/70">Satuan pecahan khusus Grid. Jika kamu menulis <code className="bg-white/50 px-1 border border-black text-sm">1fr 2fr</code>, maka kolom kedua besarnya adalah 2x lipat dari kolom pertama.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-white p-1 border-2 border-black inline-block mt-1 text-black">🚀</span>
                      <div>
                        <strong className="block text-xl uppercase font-black text-black">grid-column: span 2;</strong>
                        <p className="font-bold text-black/70">Berbeda dengan aturan lain, kode ini ditempel langsung pada <strong>anak elemen</strong> (Isinya), menyuruh elemen tersebut melebarkan dirinya mencaplok 2 kolom sekaligus!</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 w-full -rotate-1 hover:rotate-0 transition-transform">
                  <CodeBlock 
                    language="css" 
                    code={`/* Wadah Utama (Parent) */
.bento-grid {
  display: grid;
  /* Kolom ke-1 1 porsi, Kolom ke-2 2 porsi */
  grid-template-columns: 1fr 2fr; 
  gap: 15px;
}

/* Kotak Spesial (Child) */
.kartu-utama {
  /* Memaksa kartu ini memakan 2 kolom penuh! */
  grid-column: span 2; 
}`} 
                  />
                </div>
              </div>

            </section>

            {/* Footer / Penutup */}
            <footer className="bg-[#2DD4BF] border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined absolute -top-3 -right-3 md:-top-4 md:-right-4 text-4xl md:text-5xl text-black bg-white rounded-full border-2 md:border-4 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">phone_iphone</span>
              <p className="text-xl md:text-3xl font-black text-black uppercase leading-relaxed max-w-4xl mx-auto">
                "Dengan Grid, saat layar laptop luas kartu berjejer 3, tapi di HP otomatis numpuk ke bawah!"
              </p>
            </footer>

            <div className="h-12 w-full"></div>
          </div>
        </main>
      </div>
    </>
  );
}
