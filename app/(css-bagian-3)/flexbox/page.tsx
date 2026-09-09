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

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">

            <section className="bg-white border-4 border-black p-6 md:p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tighter uppercase mb-4 md:mb-6">
                10. Modern Layout 1: Flexbox
              </h1>
              <p className="text-base md:text-xl font-bold text-black bg-[#2DD4BF] inline-block px-3 py-2 md:px-4 md:py-2 border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Flexbox (Flexible Box) adalah keajaiban tata letak CSS modern!
              </p>
            </section>

            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-4">
                <span className="material-symbols-outlined text-4xl md:text-5xl text-[#FACC15]">view_kanban</span>
                Menyusun Elemen Otomatis
              </h2>

              <div className="flex flex-col lg:flex-row gap-8 mb-12">
                <div className="lg:w-1/2 space-y-6">
                  <p className="font-bold text-black/80 text-lg leading-relaxed bg-[#F4F0EA] p-4 border-2 border-black">
                    Digunakan untuk merapikan elemen berjejer ke samping (kolom) atau ke bawah (baris) secara otomatis, tanpa perlu repot menghitung lebar pixel secara manual.
                  </p>
                  
                  <div className="bg-[#FF49DB] text-black border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative rotate-1 hover:rotate-0 transition-transform">
                    <span className="material-symbols-outlined absolute -top-4 -right-4 text-3xl bg-white rounded-full border-2 border-black p-1">key</span>
                    <h3 className="font-black text-xl mb-2">Syarat Utama:</h3>
                    <p className="font-bold">Kamu WAJIB mengubah sifat wadah besarnya (<em>Parent Container</em>) menjadi <code className="bg-white px-1 border border-black">display: flex;</code> terlebih dahulu!</p>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="bg-[#2DD4BF] p-1 border-2 border-black inline-block mt-1">↔️</span>
                      <div>
                        <strong className="block text-xl uppercase font-black">justify-content</strong>
                        <p className="font-bold text-black/70">Mengatur perataan/jarak di sumbu utama (Horizontal secara default).</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#FACC15] p-1 border-2 border-black inline-block mt-1">↕️</span>
                      <div>
                        <strong className="block text-xl uppercase font-black">align-items</strong>
                        <p className="font-bold text-black/70">Mengatur perataan vertikal (Sumbu bersilang).</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-black text-white p-1 border-2 border-black inline-block mt-1">📏</span>
                      <div>
                        <strong className="block text-xl uppercase font-black">gap</strong>
                        <p className="font-bold text-black/70">Memberi jarak otomatis antar elemen di dalamnya tanpa perlu repot mengatur margin.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="lg:w-1/2 space-y-6">
                  <div className="-rotate-1 hover:rotate-0 transition-transform">
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
                  
                  {/* Visualisasi Flexbox Navbar */}
                  <div className="bg-[#F4F0EA] border-4 border-black p-4 mt-6 hover:scale-[1.02] transition-transform">
                    <p className="text-sm font-bold uppercase mb-2 text-black/60 tracking-widest text-center">Visualisasi (justify-content: space-between)</p>
                    <div className="w-full bg-white border-2 border-black p-4 flex justify-between items-center h-20 shadow-[inset_4px_4px_0px_0px_rgba(0,0,0,0.1)]">
                      <div className="w-12 h-12 bg-[#FF49DB] border-2 border-black font-black flex items-center justify-center text-white text-xs">Logo</div>
                      <div className="flex gap-4">
                        <div className="w-16 h-8 bg-[#2DD4BF] border-2 border-black font-black text-xs flex items-center justify-center">Link 1</div>
                        <div className="w-16 h-8 bg-[#2DD4BF] border-2 border-black font-black text-xs flex items-center justify-center">Link 2</div>
                      </div>
                      <div className="w-20 h-10 bg-[#FACC15] border-2 border-black font-black text-sm flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-pointer">Daftar</div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Flex Direction & Wrap */}
              <div className="bg-[#1e1e1e] border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(45,212,191,1)] mt-12 flex flex-col md:flex-row gap-8 items-center text-white">
                <div className="md:w-1/2 w-full rotate-1 hover:rotate-0 transition-transform">
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
                <div className="md:w-1/2 space-y-6">
                  <h3 className="text-2xl font-black uppercase flex items-center gap-2 text-[#FF49DB]">
                    <span className="material-symbols-outlined text-4xl">sync_alt</span>
                    Arah & Gulungan (Direction & Wrap)
                  </h3>
                  <p className="font-bold text-white/80 leading-relaxed">
                    Secara default, Flexbox akan menata elemen berjejer ke samping (baris). Tapi kamu punya kendali penuh untuk mengubah arahnya!
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="bg-[#2DD4BF] p-1 border-2 border-white inline-block mt-1 text-black">⬇️</span>
                      <div>
                        <strong className="block text-xl uppercase font-black text-[#2DD4BF]">flex-direction: column;</strong>
                        <p className="font-bold text-white/70">Mengubah arah jejaran dari kiri-ke-kanan menjadi <strong>atas-ke-bawah</strong>. Sangat berguna saat membuat tampilan web berubah dari layar Desktop (menyamping) ke layar HP (menumpuk)!</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#FACC15] p-1 border-2 border-white inline-block mt-1 text-black">🔄</span>
                      <div>
                        <strong className="block text-xl uppercase font-black text-[#FACC15]">flex-wrap: wrap;</strong>
                        <p className="font-bold text-white/70">Secara bawaan, elemen Flexbox akan terus memaksa berada di satu baris mengecil walau layarnya sempit. Berikan <code className="bg-white/20 px-1 border border-white text-sm">wrap</code> agar elemen yang sudah tidak muat otomatis turun ke baris baru di bawahnya.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

            </section>

            {/* Footer / Penutup */}
            <footer className="bg-[#2DD4BF] border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined absolute -top-3 -right-3 md:-top-4 md:-right-4 text-4xl md:text-5xl text-black bg-white rounded-full border-2 md:border-4 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">web</span>
              <p className="text-xl md:text-3xl font-black text-black uppercase leading-relaxed max-w-4xl mx-auto">
                "Flexbox sangat sering digunakan untuk membuat Menu Navigasi (Navbar) modern!"
              </p>
            </footer>

            <div className="h-12 w-full"></div>
          </div>
        </main>
      </div>
    </>
  );
}
