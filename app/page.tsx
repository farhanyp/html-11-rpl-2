"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <Headbar 
        links={[
          { label: 'Materi', href: '#', isActive: true }
        ]} 
      />
      
      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />
        
        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 mt-4 text-center">
              <span className="bg-[#FF49DB] border-4 border-black px-4 md:px-6 py-2 font-black text-white uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] inline-block tracking-widest text-sm md:text-xl mb-4 rotate-[-2deg]">
                👋 Hello World!
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mt-4 md:mt-6 text-black tracking-tighter uppercase drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                Selamat Datang
              </h2>
            </div>
            
            <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden mt-8 md:mt-12">
              {/* Header Bar */}
              <div className="bg-[#2DD4BF] border-b-4 border-black p-3 md:p-4 flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-full border-2 md:border-4 border-black bg-[#FF49DB]"></div>
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-full border-2 md:border-4 border-black bg-[#FACC15]"></div>
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-full border-2 md:border-4 border-black bg-white"></div>
                </div>
                <span className="font-black text-xs md:text-sm uppercase tracking-widest text-black">ReadMe.md</span>
              </div>
              
              <div className="p-6 md:p-12 relative z-10">
                <div className="space-y-8 md:space-y-12">
                  
                  {/* Section 1: Intro */}
                  <div className="border-4 border-black p-6 md:p-8 bg-[#FACC15] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    <h3 className="text-xl sm:text-2xl md:text-4xl font-black text-black uppercase mb-4 flex items-center gap-3 md:gap-4">
                      <span className="material-symbols-outlined text-3xl md:text-5xl">rocket_launch</span>
                      Materi Apa Ini?
                    </h3>
                    <p className="text-base md:text-xl font-bold text-black/90 leading-relaxed">
                      Ini adalah platform pembelajaran interaktif <strong className="underline decoration-white decoration-4">HTML Dasar</strong> (Web Master). 
                      Dirancang khusus untuk memandu kamu dari nol hingga mahir dalam membuat dan menyusun struktur halaman web layaknya profesional sesungguhnya!
                    </p>
                  </div>

                  {/* Section 2: Tujuan */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="border-4 border-black p-6 md:p-8 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
                      <div className="w-10 h-10 md:w-16 md:h-16 bg-[#FF49DB] border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4 md:mb-6">
                        <span className="material-symbols-outlined font-black text-white text-2xl md:text-4xl">emoji_objects</span>
                      </div>
                      <h4 className="text-lg md:text-2xl font-black mt-4 text-black uppercase mb-3">Tujuan Belajar</h4>
                      <ul className="font-bold list-disc list-inside space-y-2 text-sm md:text-lg text-black/80">
                        <li>Memahami konsep dasar dan struktur dokumen HTML.</li>
                        <li>Mampu menggunakan berbagai tag dan elemen HTML.</li>
                        <li>Menguasai pembuatan form, tabel, dan multimedia.</li>
                        <li>Menerapkan HTML pada project pembuatan website nyata.</li>
                      </ul>
                    </div>

                    <div className="border-4 border-black p-6 md:p-8 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
                      <div className="w-10 h-10 md:w-16 md:h-16 bg-[#2DD4BF] border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4 md:mb-6">
                        <span className="material-symbols-outlined font-black text-black text-2xl md:text-4xl">route</span>
                      </div>
                      <h4 className="text-lg md:text-2xl font-black mt-4 text-black uppercase mb-3">Cara Menggunakan</h4>
                      <p className="text-sm md:text-lg font-bold text-black/80 mb-4">
                        Platform ini disusun secara berurutan. Mulailah dari materi paling atas di sidebar kiri dan kerjakan kuis/soal teori jika tersedia.
                      </p>
                      <span className="inline-block bg-[#FACC15] border-2 md:border-4 border-black px-3 py-1 font-black text-xs md:text-sm uppercase">100% Interaktif</span>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-6 border-t-4 border-black pt-8 md:pt-10">
                  <Link 
                    href="/pendahuluan"
                    className="bg-[#FF49DB] text-white font-black text-base md:text-2xl px-6 py-4 md:px-12 md:py-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] md:active:translate-x-[8px] md:active:translate-y-[8px] active:shadow-none transition-all flex items-center gap-2 md:gap-4 uppercase tracking-wider text-center"
                  >
                    Mulai Belajar Sekarang
                    <span className="material-symbols-outlined font-black text-xl md:text-4xl">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <footer className="mt-12 mb-12 flex flex-col md:flex-row justify-between items-center gap-4 opacity-70">
              <p className="font-black text-xs md:text-sm uppercase tracking-widest text-black text-center md:text-left">© 2024 EDUBRUTAL // SYSTEM STATUS: NOMINAL</p>
              <div className="flex gap-4">
                <span className="material-symbols-outlined font-black text-black">terminal</span>
                <span className="material-symbols-outlined font-black text-black">help</span>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </>
  );
}
