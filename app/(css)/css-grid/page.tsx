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

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-canvas relative" style={{ backgroundImage: 'radial-gradient(var(--color-outline) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">

            <section className="bg-white border-4 border-black p-6 md:p-12 shadow-neo-xl text-center relative overflow-hidden transform rotate-1 hover:rotate-0 transition-transform">
              <div className="absolute top-0 left-0 bg-jade-vibrant text-white font-black px-4 py-1 border-b-4 border-r-4 border-black shadow-neo-sm z-20">
                MATERI 11
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-black tracking-tighter uppercase mt-6 mb-4 md:mb-6">
                Modern Layout: CSS Grid
              </h1>
              <p className="text-base md:text-xl font-bold text-white bg-forest-teal inline-block px-4 py-2 md:px-6 md:py-3 border-4 border-black mb-4 md:mb-6 shadow-neo-md uppercase tracking-tight">
                Jika Flexbox adalah rel kereta (1 Dimensi), Grid adalah Papan Catur Ajaib (2 Dimensi)!
              </p>
            </section>

            <section className="bg-white border-4 border-black shadow-neo-xl p-6 md:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="material-symbols-outlined text-4xl md:text-5xl text-white bg-pine-deep p-2 border-4 border-black shadow-neo-sm flex-shrink-0">grid_view</span>
                Menyusun Baris & Kolom
              </h2>

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mb-12 items-stretch">
                <div className="lg:w-1/2 space-y-8">
                  <p className="font-bold text-forest-teal text-lg md:text-xl leading-relaxed bg-mint-canvas p-4 border-4 border-black shadow-neo-sm">
                    CSS Grid sangat cocok (bahkan yang terbaik) digunakan untuk membuat tata letak super kompleks, seperti <strong className="text-black uppercase">Galeri Foto</strong> atau <strong className="text-black uppercase">Dashboard Card</strong> yang harus adaptif di berbagai ukuran layar.
                  </p>
                  
                  <div className="bg-jade-vibrant text-white border-4 border-black p-6 shadow-neo-md relative hover:-translate-y-2 hover:shadow-neo-lg transition-transform">
                    <span className="material-symbols-outlined absolute -top-4 -right-4 text-4xl bg-black text-mint-soft rounded-full border-4 border-black p-1">auto_awesome</span>
                    <h3 className="font-black text-2xl mb-3 uppercase tracking-tight drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Kode Ajaib Grid!</h3>
                    <p className="font-bold text-lg leading-relaxed">Perhatikan kode <code className="bg-white text-black px-2 py-1 font-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">repeat(auto-fit, minmax(...))</code> di samping. Itu adalah mantra rahasia membuat grid otomatis responsif <strong>tanpa harus menulis satu baris pun Media Query!</strong></p>
                  </div>

                  <ul className="space-y-6">
                    <li className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-canvas border-4 border-black p-4 shadow-neo-sm hover:translate-x-2 transition-transform">
                      <span className="bg-white p-2 border-4 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] text-2xl flex-shrink-0">🔄</span>
                      <div>
                        <strong className="block text-xl uppercase font-black text-black tracking-widest mb-1">auto-fit</strong>
                        <p className="font-bold text-forest-teal text-base">Otomatis menyesuaikan jumlah kolom berdasarkan lebar sisa ruang layar yang tersedia secara ajaib.</p>
                      </div>
                    </li>
                    <li className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-canvas border-4 border-black p-4 shadow-neo-sm hover:translate-x-2 transition-transform">
                      <span className="bg-white p-2 border-4 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] text-2xl flex-shrink-0">↔️</span>
                      <div>
                        <strong className="block text-xl uppercase font-black text-black tracking-widest mb-1">minmax(300px, 1fr)</strong>
                        <p className="font-bold text-forest-teal text-base">Lebar minimal kotak dikunci di 300px. Jika ada sisa ruang, kotak akan melar mengisi penuh ruang tersebut (1 <em>fraction</em>).</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="lg:w-1/2 space-y-8 flex flex-col">
                  <div className="bg-black border-4 border-black p-1 shadow-neo-lg flex-1 flex flex-col transform -rotate-1 hover:rotate-0 transition-transform">
                    <div className="bg-mint-soft border-b-4 border-black p-3 font-black uppercase text-center">Kode CSS Parent</div>
                    <div className="flex-grow p-1">
                      <CodeBlock 
                        language="css" 
                        code={`.projects-grid {
  display: grid;
  
  /* Kolom otomatis, minimal 300px */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  
  /* Jarak spasi antar kotak */
  gap: 2rem;
}`} 
                      />
                    </div>
                  </div>
                  
                  {/* Visualisasi Grid Brutalist */}
                  <div className="bg-canvas border-4 border-black p-6 shadow-neo-md hover:scale-[1.02] transition-transform">
                    <p className="text-sm font-black uppercase mb-4 text-black tracking-widest text-center bg-white border-2 border-black px-2 py-1 inline-block mx-auto">Visualisasi (Layar Lebar Desktop)</p>
                    <div className="grid grid-cols-4 gap-3 w-full p-3 bg-white border-4 border-black shadow-[inset_4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                      <div className="h-20 bg-jade-vibrant border-4 border-black font-black text-white text-2xl flex items-center justify-center shadow-neo-sm hover:-translate-y-1 transition-transform cursor-pointer">1</div>
                      <div className="h-20 bg-pine-deep border-4 border-black font-black text-white text-2xl flex items-center justify-center shadow-neo-sm hover:-translate-y-1 transition-transform cursor-pointer">2</div>
                      <div className="h-20 bg-mint-soft border-4 border-black font-black text-black text-2xl flex items-center justify-center shadow-neo-sm hover:-translate-y-1 transition-transform cursor-pointer">3</div>
                      <div className="h-20 bg-black border-4 border-black font-black text-white text-2xl flex items-center justify-center shadow-neo-sm hover:-translate-y-1 transition-transform cursor-pointer">4</div>
                    </div>
                    <p className="text-xs font-bold text-center mt-3 text-forest-teal">Bayangkan jika dibuka di HP, keempat kotak ini otomatis akan menyusun memanjang ke bawah berkat `minmax`!</p>
                  </div>

                </div>
              </div>

              {/* Spanning & Fraction */}
              <div className="bg-pine-deep border-4 border-black p-6 md:p-12 shadow-neo-xl mt-16 flex flex-col xl:flex-row gap-10 items-stretch text-white transform rotate-1 hover:rotate-0 transition-transform">
                <div className="xl:w-1/2 space-y-8">
                  <h3 className="text-2xl md:text-4xl font-black uppercase flex items-center gap-3 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                    <span className="material-symbols-outlined text-4xl md:text-5xl bg-mint-soft text-black p-2 rounded-none border-4 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">dashboard_customize</span>
                    Span & Proporsi (fr)
                  </h3>
                  <p className="font-bold text-lg md:text-xl leading-relaxed bg-black p-4 border-4 border-mint-soft">
                    Selain membiarkan kotak cerdas menyesuaikan layar, Grid sangat sakti jika diatur manual untuk membuat desain ala <strong>"Bento Box"</strong> (seperti gaya dashboard super premium kekinian)!
                  </p>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4 bg-white text-black border-4 border-black p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
                      <span className="bg-canvas p-2 border-4 border-black text-2xl flex-shrink-0">🧩</span>
                      <div>
                        <strong className="block text-xl uppercase font-black tracking-widest mb-1 text-jade-vibrant">Fraction (fr)</strong>
                        <p className="font-bold text-forest-teal text-base">Satuan pecahan khusus milik Grid. Jika kamu menulis <code className="bg-mint-canvas px-2 py-1 border-2 border-black font-black text-sm text-black">1fr 2fr</code>, maka kolom kedua fisiknya akan 2x lipat lebih besar dibanding kolom pertama.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 bg-white text-black border-4 border-black p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
                      <span className="bg-canvas p-2 border-4 border-black text-2xl flex-shrink-0">🚀</span>
                      <div>
                        <strong className="block text-xl uppercase font-black tracking-widest mb-1 text-jade-vibrant">grid-column: span 2;</strong>
                        <p className="font-bold text-forest-teal text-base">Berbeda dengan instruksi biasa, kode ini ditempel langsung pada <strong className="text-black underline">anak elemen</strong> (isinya), memaksa elemen tersebut brutal melebarkan dirinya mencaplok 2 kolom sekaligus!</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="xl:w-1/2 w-full flex flex-col bg-black border-4 border-black p-1 shadow-neo-md">
                   <div className="bg-mint-soft border-b-4 border-black p-3 font-black uppercase text-center text-black">Bento Box Implementation</div>
                  <div className="flex-grow p-1">
                    <CodeBlock 
                      language="css" 
                      code={`/* Wadah Utama (Parent/Container) */
.bento-grid {
  display: grid;
  /* Kolom ke-1 dapet 1 porsi, Kolom ke-2 dapet 2 porsi */
  grid-template-columns: 1fr 2fr; 
  gap: 15px;
}

/* Kotak Spesial (Child/Item) */
.kartu-utama {
  /* Memaksa kartu ini brutal memakan 2 kolom penuh horizontal! */
  grid-column: span 2; 
  
  /* Bisa juga disuruh memakan 2 baris vertikal */
  /* grid-row: span 2; */
}`} 
                    />
                  </div>
                </div>
              </div>

            </section>

            {/* Footer / Penutup */}
            <footer className="bg-jade-vibrant border-4 border-black p-8 md:p-12 shadow-neo-xl text-center relative hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined absolute -top-4 -right-4 md:-top-6 md:-right-6 text-5xl md:text-6xl text-black bg-white rounded-none border-4 border-black p-3 shadow-neo-md hover:scale-110 transition-transform cursor-pointer">phone_iphone</span>
              <p className="text-2xl md:text-4xl font-black text-white uppercase leading-relaxed max-w-4xl mx-auto drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] tracking-tight">
                "Dengan Grid, saat layar laptop lebar kartu bisa berjejer 4, tapi saat dibuka di HP semuanya antri rapi ke bawah otomatis!"
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
