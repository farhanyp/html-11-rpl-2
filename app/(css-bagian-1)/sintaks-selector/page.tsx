"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import CodeBlock from '@/components/CodeBlock';

export default function SintaksSelectorPage() {
  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/sintaks-selector', isActive: true },
          { label: 'Soal Teori', href: '/sintaks-selector/soal', isActive: false }
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">

            <section className="bg-[#FF49DB] border-4 border-black p-6 md:p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                3. Sintaks & Selector
              </h1>
              <p className="text-base md:text-xl font-bold text-black bg-white inline-block px-3 py-2 md:px-4 md:py-2 border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Setiap blok CSS terdiri dari 3 bagian penting: Selector, Property, dan Value.
              </p>
            </section>

            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="md:w-1/2 space-y-6">
                  <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-4 border-b-4 border-black pb-2">Anatomi CSS</h2>
                  <ul className="space-y-4">
                    <li className="bg-[#FACC15] p-4 border-4 border-black font-bold flex gap-4 items-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <span className="text-3xl">🎯</span>
                      <div><strong className="text-xl block">Selector:</strong> Siapa yang mau didandani?</div>
                    </li>
                    <li className="bg-[#2DD4BF] p-4 border-4 border-black font-bold flex gap-4 items-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <span className="text-3xl">🎨</span>
                      <div><strong className="text-xl block">Property:</strong> Apa yang mau diubah?</div>
                    </li>
                    <li className="bg-[#FF49DB] text-white p-4 border-4 border-black font-bold flex gap-4 items-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <span className="text-3xl">🔢</span>
                      <div><strong className="text-xl block drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">Value:</strong> Nilainya apa?</div>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 w-full rotate-1 hover:rotate-0 transition-transform">
                  <CodeBlock 
                    language="css" 
                    code={`/* Selector */
h1 {
  /* Property: Value; */
  color: blue;
  font-size: 24px;
}`} 
                  />
                </div>
              </div>

              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4">Tiga Selector Paling Dasar</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col">
                  <div className="bg-[#2DD4BF] border-2 border-black px-3 py-1 inline-block font-black uppercase text-sm mb-4 self-start">Tag Selector</div>
                  <p className="font-bold text-black/80 mb-4 flex-1">Menargetkan semua tag HTML tersebut. Akan mengubah <strong className="bg-[#FACC15] px-1 border-2 border-black text-black">semua</strong> elemen.</p>
                  <div className="border-2 border-black">
                    <CodeBlock language="css" code={`p {\n  color: red;\n}`} />
                  </div>
                </div>
                <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col">
                  <div className="bg-[#FF49DB] text-white border-2 border-black px-3 py-1 inline-block font-black uppercase text-sm mb-4 self-start">Class Selector (.)</div>
                  <p className="font-bold text-black/80 mb-4 flex-1">Menargetkan elemen yang memiliki atribut class. Sangat fleksibel dipakai berkali-kali.</p>
                  <div className="border-2 border-black">
                    <CodeBlock language="css" code={`.btn {\n  background: blue;\n}`} />
                  </div>
                </div>
                <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col">
                  <div className="bg-[#FACC15] border-2 border-black px-3 py-1 inline-block font-black uppercase text-sm mb-4 self-start">ID Selector (#)</div>
                  <p className="font-bold text-black/80 mb-4 flex-1">Menargetkan satu elemen spesifik. Tidak boleh ada dua elemen dengan ID yang sama.</p>
                  <div className="border-2 border-black">
                    <CodeBlock language="css" code={`#navbar {\n  height: 60px;\n}`} />
                  </div>
                </div>
              </div>

              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mt-12 mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-4">
                <span className="bg-[#2DD4BF] text-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">+</span>
                Selector Gabungan & Universal
              </h2>
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Grouping Selector */}
                <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-1">
                  <h3 className="text-xl md:text-2xl font-black uppercase mb-4 flex items-center gap-2"><span className="material-symbols-outlined text-[#FF49DB] text-3xl">group</span> Grouping Selector (,)</h3>
                  <p className="font-bold text-black/80 mb-6 text-sm md:text-base leading-relaxed">Jika kamu ingin memberikan gaya yang persis sama untuk beberapa elemen berbeda, gunakan koma untuk memisahkan selectornya agar kodemu lebih bersih!</p>
                  <div className="rotate-1 hover:rotate-0 transition-transform">
                    <CodeBlock 
                      language="css" 
                      code={`h1, h2, p {
  text-align: center;
  color: #333;
}`} 
                    />
                  </div>
                </div>

                {/* Universal Selector */}
                <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-1">
                  <h3 className="text-xl md:text-2xl font-black uppercase mb-4 flex items-center gap-2"><span className="material-symbols-outlined text-[#FACC15] text-3xl">public</span> Universal Selector (*)</h3>
                  <p className="font-bold text-black/80 mb-6 text-sm md:text-base leading-relaxed">Menargetkan <strong>semua elemen</strong> di halaman tanpa terkecuali. Sering digunakan oleh profesional untuk mereset margin bawaan dari browser.</p>
                  <div className="-rotate-1 hover:rotate-0 transition-transform">
                    <CodeBlock 
                      language="css" 
                      code={`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`} 
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Footer / Penutup */}
            <footer className="bg-[#FACC15] border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined absolute -top-3 -right-3 md:-top-4 md:-right-4 text-4xl md:text-5xl text-black bg-white rounded-full border-2 md:border-4 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">sports_score</span>
              <p className="text-xl md:text-3xl font-black text-black uppercase leading-relaxed max-w-4xl mx-auto">
                "Kuasai Selector dengan baik, ibarat seorang Sniper yang tahu persis target mana yang akan dibidik!"
              </p>
            </footer>

            <div className="h-12 w-full"></div>
          </div>
        </main>
      </div>
    </>
  );
}
