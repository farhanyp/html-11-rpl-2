"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import CodeBlock from '@/components/CodeBlock';

export default function PseudoElementsPage() {
  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/pseudo-elements', isActive: true },
          { label: 'Soal Teori', href: '/pseudo-elements/soal', isActive: false }
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">

            <section className="bg-black border-4 border-black p-6 md:p-10 shadow-[4px_4px_0px_0px_rgba(45,212,191,1)] md:shadow-[8px_8px_0px_0px_rgba(45,212,191,1)] text-center relative overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4 md:mb-6">
                13. Elemen Gaib: Pseudo-Elements
              </h1>
              <p className="text-base md:text-xl font-bold text-black bg-[#2DD4BF] inline-block px-3 py-2 md:px-4 md:py-2 border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                Menciptakan elemen "hantu" dari CSS tanpa perlu repot menulis HTML!
              </p>
            </section>

            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-4">
                <span className="material-symbols-outlined text-4xl md:text-5xl text-[#FF49DB]">magic_button</span>
                ::before & ::after
              </h2>

              <div className="flex flex-col lg:flex-row gap-8 mb-12">
                <div className="lg:w-1/2 space-y-6">
                  <p className="font-bold text-black/80 text-lg leading-relaxed bg-[#F4F0EA] p-4 border-2 border-black">
                    Terkadang kita butuh membuat bentuk geometris, garis hiasan, atau ikon tambahan tanpa harus mengotori HTML dengan kode <code className="bg-white px-1">&lt;div&gt;</code> kosong. Kita bisa memanggil elemen gaib dari CSS!
                  </p>
                  
                  <div className="bg-[#FACC15] text-black border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative rotate-1 hover:rotate-0 transition-transform">
                    <span className="material-symbols-outlined absolute -top-4 -right-4 text-3xl bg-white rounded-full border-2 border-black p-1">warning</span>
                    <h3 className="font-black text-xl mb-2">Syarat Mutlak:</h3>
                    <p className="font-bold">Pseudo-elements wajib memiliki properti <code className="bg-white px-1 border border-black">content: '';</code> agar bisa muncul di layar. Walaupun isinya kosong, properti ini tidak boleh dihilangkan!</p>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="bg-black text-white p-1 border-2 border-black inline-block mt-1 font-black px-2">::before</span>
                      <div>
                        <p className="font-bold text-black/70 mt-1">Menciptakan elemen gaib tepat di <strong>sebelum</strong> isi elemen asli.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-black text-white p-1 border-2 border-black inline-block mt-1 font-black px-2">::after</span>
                      <div>
                        <p className="font-bold text-black/70 mt-1">Menciptakan elemen gaib tepat di <strong>sesudah</strong> isi elemen asli.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="lg:w-1/2 space-y-6">
                  <div className="-rotate-1 hover:rotate-0 transition-transform">
                    <CodeBlock 
                      language="css" 
                      code={`/* Membuat garis vertikal pada Timeline */
.timeline {
  position: relative;
}

.timeline::after {
  content: ''; /* Wajib ada! */
  position: absolute;
  top: 0;
  left: -20px;
  width: 4px;
  height: 100%;
  background-color: gray;
}`} 
                    />
                  </div>
                  
                  {/* Visualisasi Timeline */}
                  <div className="bg-[#F4F0EA] border-4 border-black p-6 mt-6 hover:scale-[1.02] transition-transform relative pl-12">
                    <p className="text-sm font-bold uppercase mb-4 text-black/60 tracking-widest">Visualisasi Penggunaan ::after</p>
                    
                    {/* Fake pseudo-element timeline line */}
                    <div className="absolute top-16 bottom-6 left-6 w-1 bg-black"></div>
                    
                    <div className="space-y-4 relative">
                      <div className="bg-white border-2 border-black p-3 relative">
                        <div className="absolute top-3 -left-[30px] w-4 h-4 bg-[#FF49DB] border-2 border-black rounded-full z-10"></div>
                        <h4 className="font-black uppercase">Tahun 2022</h4>
                        <p className="text-sm font-bold text-black/60">Mulai belajar HTML Dasar</p>
                      </div>
                      <div className="bg-white border-2 border-black p-3 relative">
                        <div className="absolute top-3 -left-[30px] w-4 h-4 bg-[#2DD4BF] border-2 border-black rounded-full z-10"></div>
                        <h4 className="font-black uppercase">Tahun 2023</h4>
                        <p className="text-sm font-bold text-black/60">Menguasai CSS Layouting</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Other Pseudo Elements */}
              <div className="bg-[#FACC15] border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-12 flex flex-col md:flex-row gap-8 items-center text-black">
                <div className="md:w-1/2 space-y-6">
                  <h3 className="text-2xl font-black uppercase flex items-center gap-2">
                    <span className="material-symbols-outlined text-4xl bg-white rounded-full p-1 border-2 border-black">text_format</span>
                    Sihir Teks Lainnya
                  </h3>
                  <p className="font-bold text-black/80 leading-relaxed">
                    Selain membuat elemen kotak gaib, Pseudo-elements juga bisa digunakan untuk menargetkan bagian spesifik dari sebuah teks tanpa perlu membungkusnya dengan HTML tambahan secara manual!
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="bg-black text-white p-1 border-2 border-white inline-block mt-1 font-black px-2 text-sm">::first-letter</span>
                      <div>
                        <p className="font-bold text-black/70">Hanya menargetkan <strong>huruf pertama</strong> dari sebuah paragraf. Sangat cocok untuk membuat desain <em>Drop Cap</em> bergaya majalah atau koran klasik!</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-black text-white p-1 border-2 border-white inline-block mt-1 font-black px-2 text-sm">::selection</span>
                      <div>
                        <p className="font-bold text-black/70">Mengubah warna saat pengguna melakukan <strong>blok/sorot (highlight)</strong> pada teks menggunakan mouse.</p>
                      </div>
                    </li>
                  </ul>
                  <div className="bg-white border-2 border-black p-4 mt-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <p className="first-letter:text-5xl first-letter:font-black first-letter:text-[#FF49DB] first-letter:mr-2 first-letter:float-left selection:bg-[#2DD4BF] selection:text-black leading-relaxed font-bold text-black">
                      Coba blok atau sorot teks paragraf ini dengan mousemu! Kamu akan melihat warna sorotannya berubah menjadi tosca, bukan biru bawaan browser. Perhatikan juga huruf 'C' di awal paragraf ini yang menjadi super besar secara otomatis!
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 w-full rotate-1 hover:rotate-0 transition-transform">
                  <CodeBlock 
                    language="css" 
                    code={`/* Membuat huruf awal besar (Drop Cap) */
p::first-letter {
  font-size: 3rem;
  font-weight: 900;
  color: #FF49DB;
  float: left;
  margin-right: 8px;
}

/* Mengubah warna blok (highlight) teks */
::selection {
  background-color: #2DD4BF;
  color: black;
}`} 
                  />
                </div>
              </div>

            </section>

            {/* Footer / Penutup */}
            <footer className="bg-[#2DD4BF] border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined absolute -top-3 -right-3 md:-top-4 md:-right-4 text-4xl md:text-5xl text-black bg-white rounded-full border-2 md:border-4 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">format_list_bulleted</span>
              <p className="text-xl md:text-3xl font-black text-black uppercase leading-relaxed max-w-4xl mx-auto">
                "Trik ini sangat populer untuk membuat garis vertikal pada riwayat pekerjaan (Timeline) atau hiasan pada list!"
              </p>
            </footer>

            <div className="h-12 w-full"></div>
          </div>
        </main>
      </div>
    </>
  );
}
