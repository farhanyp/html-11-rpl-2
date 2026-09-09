"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import CodeBlock from '@/components/CodeBlock';

export default function SatuanUkuranPage() {
  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/satuan-ukuran', isActive: true },
          { label: 'Soal Teori', href: '/satuan-ukuran/soal', isActive: false }
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">

            <section className="bg-[#FACC15] border-4 border-black p-6 md:p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tighter uppercase mb-4 md:mb-6">
                5. Satuan Ukuran
              </h1>
              <p className="text-base md:text-xl font-bold text-black bg-white inline-block px-3 py-2 md:px-4 md:py-2 border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Di CSS, ada banyak cara mengukur panjang, lebar, atau besaran font.
              </p>
            </section>

            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-4">
                <span className="material-symbols-outlined text-4xl md:text-5xl text-[#FF49DB]">straighten</span>
                4 Satuan Wajib Tahu
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                
                {/* px */}
                <div className="border-4 border-black bg-[#F4F0EA] p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col group">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-[#2DD4BF] text-black font-black text-2xl border-4 border-black px-4 py-2 uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1 transition-transform">px</span>
                    <h3 className="text-xl md:text-2xl font-black uppercase">Pixels (Mutlak)</h3>
                  </div>
                  <p className="font-bold text-black/80 mb-4 flex-1">Satuan statis. <strong className="bg-white px-1 border-2 border-black">16px</strong> akan selalu sebesar itu, tidak peduli ukuran layar. Biasanya dipakai untuk border atau shadow.</p>
                  <div className="border-2 border-black rotate-1 group-hover:rotate-0 transition-transform">
                    <CodeBlock 
                      language="css" 
                      code={`.kotak {
  border: 4px solid black;
  width: 200px;
}`} 
                    />
                  </div>
                </div>

                {/* % */}
                <div className="border-4 border-black bg-[#F4F0EA] p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col group">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-[#FF49DB] text-white font-black text-2xl border-4 border-black px-4 py-2 uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1 transition-transform">%</span>
                    <h3 className="text-xl md:text-2xl font-black uppercase">Persen (Relatif)</h3>
                  </div>
                  <p className="font-bold text-black/80 mb-4 flex-1">Relatif terhadap parent (wadahnya). Jika wadahnya 1000px, <strong className="bg-white px-1 border-2 border-black">50%</strong> berarti ukurannya 500px.</p>
                  <div className="border-2 border-black -rotate-1 group-hover:rotate-0 transition-transform">
                    <CodeBlock 
                      language="css" 
                      code={`.container { width: 800px; }
.anak { 
  width: 50%; /* = 400px */ 
}`} 
                    />
                  </div>
                </div>

                {/* rem */}
                <div className="border-4 border-black bg-[#F4F0EA] p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col group">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-[#FACC15] text-black font-black text-2xl border-4 border-black px-4 py-2 uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1 transition-transform">rem</span>
                    <h3 className="text-xl md:text-2xl font-black uppercase">Root EM</h3>
                  </div>
                  <p className="font-bold text-black/80 mb-4 flex-1">Satuan dinamis modern! Berdasarkan ukuran font HTML (default 16px). Sangat dianjurkan untuk tipografi web responsif.</p>
                  <div className="border-2 border-black rotate-1 group-hover:rotate-0 transition-transform">
                    <CodeBlock 
                      language="css" 
                      code={`p {
  /* 1.5 * 16px = 24px */
  font-size: 1.5rem; 
}`} 
                    />
                  </div>
                </div>

                {/* vh/vw */}
                <div className="border-4 border-black bg-[#F4F0EA] p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col group">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-black text-white font-black text-2xl border-4 border-black px-4 py-2 uppercase shadow-[4px_4px_0px_0px_rgba(255,73,219,1)] group-hover:-translate-y-1 transition-transform">vh/vw</span>
                    <h3 className="text-xl md:text-2xl font-black uppercase">Viewport</h3>
                  </div>
                  <p className="font-bold text-black/80 mb-4 flex-1">Persentase dari layar yang <em>terlihat</em>. <strong className="bg-white px-1 border-2 border-black">100vh</strong> artinya menutupi 100% tinggi layar HP/Laptop user.</p>
                  <div className="border-2 border-black -rotate-1 group-hover:rotate-0 transition-transform">
                    <CodeBlock 
                      language="css" 
                      code={`.hero-section {
  width: 100vw;
  height: 100vh;
}`} 
                    />
                  </div>
                </div>

              </div>

              {/* Tips Section */}
              <div className="bg-[#2DD4BF] border-4 border-black p-6 md:p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative mt-8">
                <span className="material-symbols-outlined absolute -top-5 -right-5 text-4xl text-black bg-[#FF49DB] rounded-full border-4 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-12">functions</span>
                <h3 className="text-2xl font-black text-black uppercase mb-4 flex items-center gap-2">
                  Senjata Rahasia: <code className="bg-white px-2 py-1 border-2 border-black">calc()</code>
                </h3>
                <p className="font-bold text-black/80 text-lg mb-6 leading-relaxed">
                  CSS bisa melakukan matematika dasar! Kamu bisa menggabungkan satuan mutlak (<code className="bg-white px-1 border-2 border-black">px</code>) dan relatif (<code className="bg-white px-1 border-2 border-black">%</code>) secara bersamaan dalam satu baris kode.
                </p>
                <div className="bg-white border-4 border-black p-2 hover:scale-[1.01] transition-transform">
                  <CodeBlock 
                    language="css" 
                    code={`.sidebar {
  /* Lebar layarnya dikurangi 200px! */
  width: calc(100% - 200px); 
}`} 
                  />
                </div>
              </div>

            </section>

            {/* Footer / Penutup */}
            <footer className="bg-[#FACC15] border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined absolute -top-3 -right-3 md:-top-4 md:-right-4 text-4xl md:text-5xl text-white bg-[#FF49DB] rounded-full border-2 md:border-4 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">monitor</span>
              <p className="text-xl md:text-3xl font-black text-black uppercase leading-relaxed max-w-4xl mx-auto">
                "Penggunaan satuan relatif (Rem, Persen, VW/VH) adalah kunci rahasia membuat web responsif tanpa pusing!"
              </p>
            </footer>

            <div className="h-12 w-full"></div>
          </div>
        </main>
      </div>
    </>
  );
}
