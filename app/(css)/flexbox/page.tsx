"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import CodeBlock from '@/components/CodeBlock';

export default function FlexboxPage() {
  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/flexbox', isActive: true },
          { label: 'Soal Teori', href: '/flexbox/soal', isActive: false }
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-canvas relative" style={{ backgroundImage: 'radial-gradient(var(--color-outline) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">

            <section className="bg-white border-4 border-black p-6 md:p-12 shadow-neo-xl text-center relative overflow-hidden transform rotate-1 hover:rotate-0 transition-transform">
              <div className="absolute top-0 left-0 bg-jade-vibrant text-white font-black px-4 py-1 border-b-4 border-r-4 border-black shadow-neo-sm z-20">
                MATERI 10
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-black tracking-tighter uppercase mt-6 mb-4 md:mb-6">
                Modern Layout: Flexbox
              </h1>
              <p className="text-base md:text-xl font-bold text-white bg-forest-teal inline-block px-4 py-2 md:px-6 md:py-3 border-4 border-black mb-4 md:mb-6 shadow-neo-md uppercase tracking-tight">
                Keajaiban tata letak CSS Modern!
              </p>
            </section>

            <section className="bg-white border-4 border-black shadow-neo-xl p-6 md:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="material-symbols-outlined text-4xl md:text-5xl text-white bg-pine-deep p-2 border-4 border-black shadow-neo-sm flex-shrink-0">view_kanban</span>
                Menyusun Elemen Otomatis
              </h2>

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mb-12 items-stretch">
                <div className="lg:w-1/2 space-y-8">
                  <p className="font-bold text-forest-teal text-lg md:text-xl leading-relaxed bg-mint-canvas p-4 border-4 border-black shadow-neo-sm">
                    Digunakan untuk merapikan elemen berjejer ke samping (kolom) atau ke bawah (baris) secara otomatis, tanpa perlu repot menghitung lebar pixel secara manual.
                  </p>
                  
                  <div className="bg-jade-vibrant text-white border-4 border-black p-6 shadow-neo-md relative hover:-translate-y-2 hover:shadow-neo-lg transition-transform">
                    <span className="material-symbols-outlined absolute -top-4 -right-4 text-4xl bg-black text-mint-soft rounded-full border-4 border-black p-1">key</span>
                    <h3 className="font-black text-2xl mb-3 uppercase tracking-tight drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Syarat Utama:</h3>
                    <p className="font-bold text-lg leading-relaxed">Kamu <strong className="uppercase underline decoration-2">WAJIB</strong> mengubah sifat wadah besarnya (<em>Parent Container</em>) menjadi <code className="bg-white text-black px-2 py-1 font-black shadow-[2px_2px_0px_rgba(0,0,0,1)] mt-1 inline-block">display: flex;</code> terlebih dahulu!</p>
                  </div>

                  <ul className="space-y-6">
                    <li className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-canvas border-4 border-black p-4 shadow-neo-sm hover:translate-x-2 transition-transform">
                      <span className="bg-white p-2 border-4 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] text-2xl flex-shrink-0">↔️</span>
                      <div>
                        <strong className="block text-xl uppercase font-black text-black tracking-widest mb-1">justify-content</strong>
                        <p className="font-bold text-forest-teal text-base">Mengatur perataan/jarak di sumbu utama (Horizontal secara default).</p>
                      </div>
                    </li>
                    <li className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-canvas border-4 border-black p-4 shadow-neo-sm hover:translate-x-2 transition-transform">
                      <span className="bg-white p-2 border-4 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] text-2xl flex-shrink-0">↕️</span>
                      <div>
                        <strong className="block text-xl uppercase font-black text-black tracking-widest mb-1">align-items</strong>
                        <p className="font-bold text-forest-teal text-base">Mengatur perataan vertikal (Sumbu bersilang).</p>
                      </div>
                    </li>
                    <li className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-canvas border-4 border-black p-4 shadow-neo-sm hover:translate-x-2 transition-transform">
                      <span className="bg-white p-2 border-4 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] text-2xl flex-shrink-0 text-black">📏</span>
                      <div>
                        <strong className="block text-xl uppercase font-black text-black tracking-widest mb-1">gap</strong>
                        <p className="font-bold text-forest-teal text-base">Memberi jarak otomatis antar elemen di dalamnya tanpa perlu repot mengatur margin.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="lg:w-1/2 space-y-8 flex flex-col">
                  <div className="bg-black border-4 border-black p-1 shadow-neo-lg flex-1 flex flex-col transform -rotate-1 hover:rotate-0 transition-transform">
                    <div className="bg-mint-soft border-b-4 border-black p-3 font-black uppercase text-center">Kode CSS Flexbox</div>
                    <div className="flex-grow p-1">
                      <CodeBlock 
                        language="css" 
                        code={`.wadah {
  display: flex;
  
  /* Mengatur jarak horizontal */
  justify-content: space-between; 
  
  /* Perataan vertikal ke tengah */
  align-items: center;            
  
  /* Jarak antar elemen 20px */
  gap: 20px;                      
}`} 
                      />
                    </div>
                  </div>
                  
                  {/* Visualisasi Flexbox Navbar */}
                  <div className="bg-canvas border-4 border-black p-6 shadow-neo-md hover:scale-[1.02] transition-transform">
                    <p className="text-sm font-black uppercase mb-4 text-black tracking-widest text-center bg-white border-2 border-black px-2 py-1 inline-block mx-auto">Visualisasi (justify-content: space-between)</p>
                    <div className="w-full bg-white border-4 border-black p-4 flex justify-between items-center shadow-[inset_4px_4px_0px_0px_rgba(0,0,0,0.2)] gap-2">
                      <div className="w-14 h-14 bg-jade-vibrant border-4 border-black font-black flex items-center justify-center text-white text-xs hover:-translate-y-1 transition-transform cursor-pointer shadow-[2px_2px_0px_rgba(0,0,0,1)]">Logo</div>
                      <div className="flex gap-4">
                        <div className="w-16 h-10 bg-mint-soft border-4 border-black font-black text-black text-xs flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer shadow-[2px_2px_0px_rgba(0,0,0,1)]">Link 1</div>
                        <div className="w-16 h-10 bg-mint-soft border-4 border-black font-black text-black text-xs flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer shadow-[2px_2px_0px_rgba(0,0,0,1)]">Link 2</div>
                      </div>
                      <div className="w-24 h-12 bg-pine-deep text-white border-4 border-black font-black text-sm flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-pointer active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">Daftar</div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Flex Direction & Wrap */}
              <div className="bg-pine-deep border-4 border-black p-6 md:p-12 shadow-neo-xl mt-16 flex flex-col xl:flex-row-reverse gap-10 items-stretch text-white transform rotate-1 hover:rotate-0 transition-transform">
                <div className="xl:w-1/2 space-y-8">
                  <h3 className="text-2xl md:text-4xl font-black uppercase flex items-center gap-3 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                    <span className="material-symbols-outlined text-4xl md:text-5xl bg-mint-soft text-black p-2 rounded-none border-4 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">sync_alt</span>
                    Arah & Gulungan <br/> <span className="text-xl md:text-2xl bg-black text-white px-2 mt-2 inline-block border-2 border-white">(Direction & Wrap)</span>
                  </h3>
                  <p className="font-bold text-lg md:text-xl leading-relaxed bg-black p-4 border-4 border-mint-soft">
                    Secara default, Flexbox akan menata elemen berjejer ke samping (baris). Tapi kamu punya kendali penuh untuk mengubah arahnya!
                  </p>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4 bg-white text-black border-4 border-black p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
                      <span className="bg-canvas p-2 border-4 border-black text-2xl flex-shrink-0">⬇️</span>
                      <div>
                        <strong className="block text-xl uppercase font-black tracking-widest mb-1 text-jade-vibrant">flex-direction: column;</strong>
                        <p className="font-bold text-forest-teal text-base">Mengubah arah jejaran dari kiri-ke-kanan menjadi <strong className="text-black uppercase">atas-ke-bawah</strong>. Sangat berguna saat membuat tampilan web berubah dari layar Desktop (menyamping) ke layar HP (menumpuk)!</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 bg-white text-black border-4 border-black p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
                      <span className="bg-canvas p-2 border-4 border-black text-2xl flex-shrink-0">🔄</span>
                      <div>
                        <strong className="block text-xl uppercase font-black tracking-widest mb-1 text-jade-vibrant">flex-wrap: wrap;</strong>
                        <p className="font-bold text-forest-teal text-base">Secara bawaan, elemen Flexbox akan terus memaksa berada di satu baris mengecil walau layarnya sempit. Berikan <code className="bg-mint-canvas text-black font-black px-1 border-2 border-black">wrap</code> agar elemen yang sudah tidak muat otomatis turun ke baris baru di bawahnya.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="xl:w-1/2 w-full flex flex-col bg-black border-4 border-black p-1 shadow-neo-md">
                   <div className="bg-mint-soft border-b-4 border-black p-3 font-black uppercase text-center text-black">Arah Custom Flexbox</div>
                  <div className="flex-grow p-1">
                    <CodeBlock 
                      language="css" 
                      code={`/* Flexbox Mode Kolom (Atas ke Bawah) */
.wadah-kolom {
  display: flex;
  flex-direction: column; 
  gap: 15px;
}

/* Flexbox Bungkus Otomatis (Jika Penuh) */
.wadah-bungkus {
  display: flex;
  flex-wrap: wrap; 
  gap: 10px;
}`} 
                    />
                  </div>
                </div>
              </div>

            </section>

            {/* Footer / Penutup */}
            <footer className="bg-jade-vibrant border-4 border-black p-8 md:p-12 shadow-neo-xl text-center relative hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined absolute -top-4 -right-4 md:-top-6 md:-right-6 text-5xl md:text-6xl text-white bg-pine-deep rounded-none border-4 border-black p-3 shadow-neo-md hover:scale-110 transition-transform cursor-pointer">web</span>
              <p className="text-2xl md:text-4xl font-black text-white uppercase leading-relaxed max-w-4xl mx-auto drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] tracking-tight">
                "Flexbox sangat sering dan wajib digunakan untuk membuat Menu Navigasi (Navbar) modern!"
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
