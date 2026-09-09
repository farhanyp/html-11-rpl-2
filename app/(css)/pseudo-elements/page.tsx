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

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-canvas relative" style={{ backgroundImage: 'radial-gradient(var(--color-outline) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">

            <section className="bg-white border-4 border-black p-6 md:p-12 shadow-neo-xl text-center relative overflow-hidden transform rotate-1 hover:rotate-0 transition-transform">
              <div className="absolute top-0 left-0 bg-jade-vibrant text-white font-black px-4 py-1 border-b-4 border-r-4 border-black shadow-neo-sm z-20">
                MATERI 13
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-black tracking-tighter uppercase mt-6 mb-4 md:mb-6">
                Elemen Gaib: Pseudo-Elements
              </h1>
              <p className="text-base md:text-xl font-bold text-white bg-forest-teal inline-block px-4 py-2 md:px-6 md:py-3 border-4 border-black mb-4 md:mb-6 shadow-neo-md uppercase tracking-tight">
                Menciptakan elemen "hantu" fiktif dari CSS tanpa mengotori file HTML!
              </p>
            </section>

            <section className="bg-white border-4 border-black shadow-neo-xl p-6 md:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="material-symbols-outlined text-4xl md:text-5xl text-white bg-pine-deep p-2 border-4 border-black shadow-neo-sm flex-shrink-0">magic_button</span>
                Kekuatan ::before & ::after
              </h2>

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mb-12 items-stretch">
                <div className="lg:w-1/2 space-y-8">
                  <p className="font-bold text-forest-teal text-lg md:text-xl leading-relaxed bg-mint-canvas p-4 border-4 border-black shadow-neo-sm">
                    Developer pro tidak mau mengotori HTML dengan tag <code className="bg-white text-black px-1 font-black">&lt;div&gt;</code> kosong hanya untuk membuat desain geometris garis/ikon. Mereka memanggil entitas gaib ini!
                  </p>
                  
                  <div className="bg-jade-vibrant text-white border-4 border-black p-6 shadow-neo-md relative hover:-translate-y-2 hover:shadow-neo-lg transition-transform">
                    <span className="material-symbols-outlined absolute -top-4 -right-4 text-4xl bg-black text-mint-soft rounded-full border-4 border-black p-1">warning</span>
                    <h3 className="font-black text-2xl mb-3 uppercase tracking-tight drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Syarat Mutlak:</h3>
                    <p className="font-bold text-lg leading-relaxed">Roh elemen gaib tidak akan terwujud tanpa wadah. Mereka <strong>WAJIB</strong> diberikan properti <code className="bg-white text-black px-2 py-1 font-black shadow-[2px_2px_0px_rgba(0,0,0,1)] mt-1 inline-block">content: '';</code> (string kosong) agar eksis di layar!</p>
                  </div>

                  <ul className="space-y-6">
                    <li className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-canvas border-4 border-black p-4 shadow-neo-sm hover:translate-x-2 transition-transform">
                      <span className="bg-black text-white px-3 py-1 border-4 border-white shadow-[2px_2px_0px_rgba(0,0,0,1)] font-black text-xl uppercase tracking-widest flex-shrink-0">::before</span>
                      <div>
                        <p className="font-bold text-forest-teal text-base md:text-lg">Menciptakan elemen gaib tepat di posisi <strong>SEBELUM</strong> letak isi elemen asli.</p>
                      </div>
                    </li>
                    <li className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-canvas border-4 border-black p-4 shadow-neo-sm hover:translate-x-2 transition-transform">
                      <span className="bg-black text-white px-3 py-1 border-4 border-white shadow-[2px_2px_0px_rgba(0,0,0,1)] font-black text-xl uppercase tracking-widest flex-shrink-0">::after</span>
                      <div>
                        <p className="font-bold text-forest-teal text-base md:text-lg">Menciptakan elemen gaib tepat di posisi <strong>SESUDAH</strong> letak isi elemen asli.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="lg:w-1/2 space-y-8 flex flex-col">
                  <div className="bg-black border-4 border-black p-1 shadow-neo-lg flex-1 flex flex-col transform -rotate-1 hover:rotate-0 transition-transform">
                    <div className="bg-mint-soft border-b-4 border-black p-3 font-black uppercase text-center">Garis Waktu Magis (Timeline)</div>
                    <div className="flex-grow p-1">
                      <CodeBlock 
                        language="css" 
                        code={`/* Wadah penampung harus jadi patokan */
.timeline {
  position: relative;
}

/* Memanggil garis tiang listrik gaib */
.timeline::after {
  content: ''; /* HARGA MATI, WAJIB ADA! */
  position: absolute;
  top: 0;
  left: -20px;
  width: 6px;
  height: 100%;
  background-color: black;
}`} 
                      />
                    </div>
                  </div>
                  
                  {/* Visualisasi Timeline Brutalist */}
                  <div className="bg-canvas border-4 border-black p-6 md:p-8 shadow-neo-md hover:scale-[1.02] transition-transform relative pl-12 md:pl-16">
                    <p className="text-sm md:text-base font-black uppercase mb-6 text-black tracking-widest bg-white border-2 border-black inline-block px-3 py-1">Demonstrasi Timeline Hantu</p>
                    
                    {/* Fake pseudo-element timeline line brutalist */}
                    <div className="absolute top-20 bottom-8 left-6 md:left-8 w-2 bg-black border-r-2 border-white"></div>
                    
                    <div className="space-y-8 relative">
                      <div className="bg-white border-4 border-black p-4 relative shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">
                        {/* Dot indicator */}
                        <div className="absolute top-1/2 -translate-y-1/2 -left-[28px] md:-left-[36px] w-6 h-6 bg-jade-vibrant border-4 border-black rounded-none shadow-[2px_2px_0px_rgba(0,0,0,1)] z-10 animate-pulse"></div>
                        <h4 className="font-black text-xl uppercase tracking-widest mb-1 text-black">Evolusi 2022</h4>
                        <p className="text-base font-bold text-forest-teal">Menaklukkan Pondasi HTML Murni</p>
                      </div>
                      <div className="bg-white border-4 border-black p-4 relative shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">
                        {/* Dot indicator */}
                        <div className="absolute top-1/2 -translate-y-1/2 -left-[28px] md:-left-[36px] w-6 h-6 bg-mint-soft border-4 border-black rounded-none shadow-[2px_2px_0px_rgba(0,0,0,1)] z-10"></div>
                        <h4 className="font-black text-xl uppercase tracking-widest mb-1 text-black">Evolusi 2023</h4>
                        <p className="text-base font-bold text-forest-teal">Mendominasi CSS Layouting Brutal</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Other Pseudo Elements */}
              <div className="bg-pine-deep border-4 border-black p-6 md:p-12 shadow-neo-xl mt-16 flex flex-col xl:flex-row gap-10 items-stretch text-white transform rotate-1 hover:rotate-0 transition-transform">
                <div className="xl:w-1/2 space-y-8">
                  <h3 className="text-2xl md:text-4xl font-black uppercase flex items-center gap-3 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                    <span className="material-symbols-outlined text-4xl md:text-5xl bg-mint-soft text-black p-2 rounded-none border-4 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">text_format</span>
                    Sihir Manipulasi Teks
                  </h3>
                  <p className="font-bold text-lg md:text-xl leading-relaxed bg-black p-4 border-4 border-mint-soft">
                    Selain memanggil elemen geometri, Pseudo-elements sangat ditakuti karena kemampuannya meretas <strong className="text-jade-vibrant uppercase underline decoration-2">bagian spesifik isi teks</strong> tanpa membungkusnya secara manual di HTML!
                  </p>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4 bg-white text-black border-4 border-black p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
                      <span className="bg-black text-white px-2 py-1 border-4 border-white text-sm font-black uppercase tracking-widest flex-shrink-0 mt-1">::first-letter</span>
                      <div>
                        <p className="font-bold text-forest-teal text-base">Secara misterius membajak <strong>huruf terdepan</strong> dari sebuah paragraf. Senjata mematikan untuk desain <em>Drop Cap</em> layaknya majalah koran retro kuno!</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 bg-white text-black border-4 border-black p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
                      <span className="bg-black text-white px-2 py-1 border-4 border-white text-sm font-black uppercase tracking-widest flex-shrink-0 mt-1">::selection</span>
                      <div>
                        <p className="font-bold text-forest-teal text-base">Membajak warna saat user melakukan <strong>blok sorotan teks (highlight)</strong> pakai mouse. Tinggalkan warna biru norak bawaan browser!</p>
                      </div>
                    </li>
                  </ul>
                  
                  <div className="bg-white border-4 border-black p-6 mt-8 shadow-[6px_6px_0px_rgba(0,0,0,1)]">
                    <p className="first-letter:text-6xl first-letter:font-black first-letter:text-white first-letter:bg-black first-letter:px-2 first-letter:py-1 first-letter:mr-3 first-letter:float-left first-letter:border-4 first-letter:border-white selection:bg-jade-vibrant selection:text-black leading-relaxed font-bold text-black text-lg md:text-xl text-justify">
                      Cobalah blok atau sorot teks paragraf brutal ini dengan mouse-mu sekarang juga! Kamu akan terkejut melihat warna sorotannya berubah jadi hijau neon yang menyilaukan mata, bukan warna biru basi. Dan lihat huruf 'C' raksasa penjaga gerbang di awal paragraf ini? Ia disihir mandiri tanpa tag HTML sedikitpun!
                    </p>
                  </div>
                </div>

                <div className="xl:w-1/2 w-full flex flex-col bg-black border-4 border-black p-1 shadow-neo-md">
                   <div className="bg-mint-soft border-b-4 border-black p-3 font-black uppercase text-center text-black">Mantra Typografi</div>
                  <div className="flex-grow p-1">
                    <CodeBlock 
                      language="css" 
                      code={`/* Menyulap huruf perdana jadi raksasa (Drop Cap) */
p::first-letter {
  font-size: 4rem;
  font-weight: 900;
  color: white;
  background-color: black;
  float: left;
  margin-right: 12px;
}

/* Mengubah warna kursor blok teks */
/* Sangat detail dan berkelas */
::selection {
  background-color: var(--jade-vibrant);
  color: black;
}`} 
                    />
                  </div>
                </div>
              </div>

            </section>

            {/* Footer / Penutup */}
            <footer className="bg-jade-vibrant border-4 border-black p-8 md:p-12 shadow-neo-xl text-center relative hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined absolute -top-4 -right-4 md:-top-6 md:-right-6 text-5xl md:text-6xl text-white bg-pine-deep rounded-none border-4 border-black p-3 shadow-neo-md hover:scale-110 transition-transform cursor-pointer">format_list_bulleted</span>
              <p className="text-2xl md:text-4xl font-black text-white uppercase leading-relaxed max-w-4xl mx-auto drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] tracking-tight">
                "Trik gaib ini luar biasa sakti untuk membuat dekorasi garis pada Riwayat Hidup CV (Timeline) atau bullet list modern!"
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
