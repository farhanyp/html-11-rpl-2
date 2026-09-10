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

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-canvas relative" style={{ backgroundImage: 'radial-gradient(var(--color-outline) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">

            <div className="mt-8 md:mt-12 text-center relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none z-0">
                <span className="material-symbols-outlined text-[150px] md:text-[250px] text-pine-deep font-black">html</span>
              </div>
              <div className="relative z-10">
                <span className="bg-jade-vibrant border-4 border-black px-6 py-2 font-black text-white uppercase shadow-neo-sm inline-block tracking-widest text-sm md:text-xl mb-6 transform -rotate-2 hover:rotate-0 hover:scale-110 transition-transform cursor-default">
                  👋 Hello World!
                </span>
                <h2 className="text-5xl sm:text-6xl md:text-8xl font-black mt-2 text-black tracking-tighter uppercase drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform cursor-default">
                  Selamat Datang
                </h2>
              </div>
            </div>

            <div className="bg-white border-4 border-black shadow-neo-xl relative overflow-hidden mt-8 md:mt-12 group hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-shadow">
              {/* Header Bar */}
              <div className="bg-pine-deep border-b-4 border-black p-3 md:p-4 flex justify-between items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white opacity-10 pattern-diagonal-lines group-hover:opacity-20 transition-opacity"></div>
                <div className="flex gap-2 relative z-10">
                  <div className="w-4 h-4 rounded-none border-2 border-black bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-red-500 transition-colors cursor-pointer"></div>
                  <div className="w-4 h-4 rounded-none border-2 border-black bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                  <div className="w-4 h-4 rounded-none border-2 border-black bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-green-500 transition-colors cursor-pointer"></div>
                </div>
                <span className="font-black text-xs md:text-sm uppercase tracking-widest text-white relative z-10">ReadMe.md</span>
              </div>

              <div className="p-6 md:p-12 relative z-10 bg-canvas">
                <div className="space-y-8 md:space-y-12">

                  {/* Section 1: Intro */}
                  <div className="border-4 border-black p-6 md:p-8 bg-jade-vibrant shadow-neo-md hover:-translate-y-2 hover:shadow-neo-lg transition-transform text-white">
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-6 flex items-center gap-3 md:gap-4 tracking-tighter drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] border-b-4 border-white pb-4">
                      <span className="material-symbols-outlined text-4xl md:text-6xl text-white bg-black p-2 border-4 border-white">rocket_launch</span>
                      Materi Apa Ini?
                    </h3>
                    <p className="text-lg md:text-xl font-bold text-black bg-mint-canvas p-6 border-4 border-black shadow-neo-sm leading-relaxed">
                      Ini adalah platform pembelajaran interaktif <strong className="text-jade-vibrant uppercase tracking-widest font-black text-xl underline decoration-4 decoration-black underline-offset-4">HTML Dasar</strong> (Web Master).
                      Dirancang khusus untuk memandu kamu dari nol hingga mahir dalam membuat dan menyusun struktur halaman web layaknya profesional sesungguhnya!
                    </p>
                  </div>

                  {/* Section 2: Tujuan */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="border-4 border-black p-6 md:p-8 bg-white shadow-neo-md hover:-translate-y-2 hover:shadow-neo-lg transition-transform group/card">
                      <div className="w-16 h-16 bg-forest-teal border-4 border-black flex items-center justify-center shadow-neo-sm mb-6 group-hover/card:scale-110 group-hover/card:rotate-6 transition-transform">
                        <span className="material-symbols-outlined font-black text-white text-3xl md:text-4xl">emoji_objects</span>
                      </div>
                      <h4 className="text-2xl md:text-3xl font-black mt-4 text-black uppercase mb-6 border-b-4 border-black pb-2">Tujuan Belajar</h4>
                      <ul className="font-bold list-disc list-inside space-y-4 text-base md:text-lg text-forest-teal marker:text-jade-vibrant">
                        <li>Memahami konsep dasar dan struktur HTML.</li>
                        <li>Menggunakan berbagai tag dan elemen.</li>
                        <li>Menguasai pembuatan form & multimedia.</li>
                        <li>Menerapkan HTML pada project nyata.</li>
                      </ul>
                    </div>

                    <div className="border-4 border-black p-6 md:p-8 bg-white shadow-neo-md hover:-translate-y-2 hover:shadow-neo-lg transition-transform group/card">
                      <div className="w-16 h-16 bg-pine-deep border-4 border-black flex items-center justify-center shadow-neo-sm mb-6 group-hover/card:scale-110 group-hover/card:-rotate-6 transition-transform">
                        <span className="material-symbols-outlined font-black text-white text-3xl md:text-4xl">route</span>
                      </div>
                      <h4 className="text-2xl md:text-3xl font-black mt-4 text-black uppercase mb-6 border-b-4 border-black pb-2">Cara Penggunaan</h4>
                      <p className="text-base md:text-lg font-bold text-forest-teal mb-6 leading-relaxed bg-mint-canvas p-4 border-4 border-black">
                        Platform ini disusun berurutan. Mulailah dari materi teratas di sidebar kiri dan kerjakan kuis/soal teori!
                      </p>
                      <span className="inline-block bg-jade-vibrant border-4 border-black px-6 py-2 font-black text-sm md:text-lg uppercase text-white shadow-neo-sm transform -rotate-2">100% Interaktif ✨</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-12 md:mt-16 flex flex-wrap justify-center border-t-4 border-black pt-8 md:pt-12 relative">
                  <div className="absolute top-0 w-32 h-4 bg-black -translate-y-full"></div>
                  <Link
                    href="/pengenalan-html"
                    className="bg-pine-deep text-white font-black text-xl md:text-4xl px-8 py-5 md:px-16 md:py-8 border-4 border-black shadow-neo-xl hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all flex items-center gap-4 md:gap-6 uppercase tracking-wider text-center group/btn"
                  >
                    Mulai Belajar
                    <span className="material-symbols-outlined font-black text-3xl md:text-5xl group-hover/btn:translate-x-2 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="mt-16 mb-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t-4 border-black pt-8">
              <p className="font-black text-sm md:text-base uppercase tracking-widest text-forest-teal bg-white border-4 border-black px-4 py-2 shadow-neo-sm text-center md:text-left">
                © 2026 FARHAN YUDHA PRATAMA
              </p>
              <div className="flex gap-4">
                <span className="material-symbols-outlined font-black text-forest-teal text-3xl hover:text-jade-vibrant hover:scale-110 transition-all cursor-pointer">terminal</span>
                <span className="material-symbols-outlined font-black text-forest-teal text-3xl hover:text-jade-vibrant hover:scale-110 transition-all cursor-pointer">help</span>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </>
  );
}
