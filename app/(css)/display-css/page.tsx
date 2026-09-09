"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import CodeBlock from '@/components/CodeBlock';

export default function DisplayCSSPage() {
  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/display-css', isActive: true },
          { label: 'Soal Teori', href: '/display-css/soal', isActive: false }
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">

            <section className="bg-white border-4 border-black p-6 md:p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tighter uppercase mb-4 md:mb-6">
                8. Sifat Tampilan (Display)
              </h1>
              <p className="text-base md:text-xl font-bold text-black bg-[#FACC15] inline-block px-3 py-2 md:px-4 md:py-2 border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Properti "display" menentukan bagaimana suatu elemen memakan ruang di layar.
              </p>
            </section>

            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-4">
                <span className="material-symbols-outlined text-4xl md:text-5xl text-[#2DD4BF]">view_in_ar</span>
                4 Jenis Display Utama
              </h2>

              <div className="space-y-8 mb-12">
                
                {/* Block */}
                <div className="bg-[#F4F0EA] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row gap-6 hover:scale-[1.01] transition-transform">
                  <div className="md:w-1/3 flex flex-col justify-center items-center p-4 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
                    <div className="w-full h-8 bg-[#FF49DB] border-2 border-black mb-2"></div>
                    <div className="w-full h-8 bg-[#FF49DB] border-2 border-black"></div>
                  </div>
                  <div className="md:w-2/3 flex flex-col justify-center">
                    <h3 className="text-2xl font-black uppercase mb-2 flex items-center gap-2">
                      <span className="bg-[#FF49DB] text-white px-2 py-1 border-2 border-black text-sm">block</span>
                    </h3>
                    <p className="font-bold text-black/80 mb-4 leading-relaxed">
                      Elemen mengambil <strong>satu baris penuh</strong> (100% lebar). Memaksa elemen selanjutnya untuk turun ke bawah. (Contoh bawaan: <code className="bg-white px-1 border border-black">&lt;div&gt;</code>, <code className="bg-white px-1 border border-black">&lt;h1&gt;</code>, <code className="bg-white px-1 border border-black">&lt;p&gt;</code>).
                    </p>
                    <CodeBlock language="css" code={`.kotak { display: block; }`} />
                  </div>
                </div>

                {/* Inline */}
                <div className="bg-[#F4F0EA] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row gap-6 hover:scale-[1.01] transition-transform">
                  <div className="md:w-1/3 flex flex-row justify-center items-center gap-2 p-4 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div className="w-12 h-8 bg-[#2DD4BF] border-2 border-black flex items-center justify-center font-bold text-xs">teks</div>
                    <div className="w-16 h-8 bg-[#2DD4BF] border-2 border-black flex items-center justify-center font-bold text-xs">lagi</div>
                  </div>
                  <div className="md:w-2/3 flex flex-col justify-center">
                    <h3 className="text-2xl font-black uppercase mb-2 flex items-center gap-2">
                      <span className="bg-[#2DD4BF] text-black px-2 py-1 border-2 border-black text-sm">inline</span>
                    </h3>
                    <p className="font-bold text-black/80 mb-4 leading-relaxed">
                      Elemen hanya selebar isinya dan <strong>bersebelahan</strong>. Aturan <code className="bg-white px-1 border border-black">width</code> dan <code className="bg-white px-1 border border-black">height</code> <strong>TIDAK</strong> akan berpengaruh! (Contoh bawaan: <code className="bg-white px-1 border border-black">&lt;span&gt;</code>, <code className="bg-white px-1 border border-black">&lt;a&gt;</code>).
                    </p>
                    <CodeBlock language="css" code={`.link { display: inline; }`} />
                  </div>
                </div>

                {/* Inline-Block */}
                <div className="bg-[#F4F0EA] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row gap-6 hover:scale-[1.01] transition-transform">
                  <div className="md:w-1/3 flex flex-row justify-center items-center gap-2 p-4 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div className="w-20 h-12 bg-[#FACC15] border-2 border-black flex items-center justify-center font-bold text-xs">Box</div>
                    <div className="w-16 h-12 bg-[#FACC15] border-2 border-black flex items-center justify-center font-bold text-xs">Box</div>
                  </div>
                  <div className="md:w-2/3 flex flex-col justify-center">
                    <h3 className="text-2xl font-black uppercase mb-2 flex items-center gap-2">
                      <span className="bg-[#FACC15] text-black px-2 py-1 border-2 border-black text-sm">inline-block</span>
                    </h3>
                    <p className="font-bold text-black/80 mb-4 leading-relaxed">
                      Kombinasi terbaik! Elemen tetap bersebelahan seperti <em>inline</em>, <strong>TAPI</strong> kamu bisa mengatur <code className="bg-white px-1 border border-black">width</code> dan <code className="bg-white px-1 border border-black">height</code>-nya seperti <em>block</em>. Sering dipakai membuat tombol.
                    </p>
                    <CodeBlock language="css" code={`.btn { display: inline-block; width: 150px; }`} />
                  </div>
                </div>

                {/* None */}
                <div className="bg-[#1e1e1e] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row gap-6 items-center hover:scale-[1.01] transition-transform">
                  <div className="md:w-1/3 flex justify-center text-white">
                    <span className="material-symbols-outlined text-6xl opacity-50">visibility_off</span>
                  </div>
                  <div className="md:w-2/3 text-white flex flex-col justify-center">
                    <h3 className="text-2xl font-black uppercase mb-2 flex items-center gap-2">
                      <span className="bg-black text-white px-2 py-1 border-2 border-white text-sm">none</span>
                    </h3>
                    <p className="font-bold text-white/80 mb-4 leading-relaxed">
                      Menyembunyikan elemen seolah-olah dihapus dari layar (tidak memakan tempat sama sekali). Sangat berguna untuk elemen yang disembunyikan pakai JavaScript (misal: modal / dropdown).
                    </p>
                    <CodeBlock language="css" code={`.hilang { display: none; }`} />
                  </div>
                </div>

              </div>

              {/* Modern Display Teaser */}
              <div className="bg-[#2DD4BF] border-4 border-black p-6 md:p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative mt-12 flex flex-col md:flex-row gap-6 items-center">
                <span className="material-symbols-outlined absolute -top-5 -right-5 text-4xl text-black bg-[#FF49DB] rounded-full border-4 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-12">rocket_launch</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-black uppercase mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-3xl">star</span>
                    Display Modern (Flex & Grid)
                  </h3>
                  <p className="font-bold text-black/80 text-lg mb-4 leading-relaxed">
                    Selain 4 tipe dasar di atas, CSS modern memiliki dua senjata terkuat untuk menyusun tata letak: <code className="bg-white px-1 border-2 border-black">display: flex;</code> dan <code className="bg-white px-1 border-2 border-black">display: grid;</code>.
                  </p>
                  <p className="font-bold text-black/80 text-lg mb-0 leading-relaxed">
                    Keduanya sangat <em>powerful</em> sehingga kita akan mempelajarinya secara mendalam dan khusus pada bab <strong>Materi Pokok 4 (Dimensi & Tata Letak)</strong> nanti. Bersiaplah!
                  </p>
                </div>
              </div>

            </section>

            {/* Footer / Penutup */}
            <footer className="bg-[#2DD4BF] border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined absolute -top-3 -right-3 md:-top-4 md:-right-4 text-4xl md:text-5xl text-black bg-white rounded-full border-2 md:border-4 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">layers</span>
              <p className="text-xl md:text-3xl font-black text-black uppercase leading-relaxed max-w-4xl mx-auto">
                "Pahami sifat Display, karena inilah rahasia utama menyusun tata letak sebuah website!"
              </p>
            </footer>

            <div className="h-12 w-full"></div>
          </div>
        </main>
      </div>
    </>
  );
}
