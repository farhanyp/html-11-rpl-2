"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import CodeBlock from '@/components/CodeBlock';

export default function BoxModelPage() {
  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/box-model', isActive: true },
          { label: 'Soal Teori', href: '/box-model/soal', isActive: false }
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">

            <section className="bg-[#FACC15] border-4 border-black p-6 md:p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden hover:scale-[1.01] transition-transform">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tighter uppercase mb-4 md:mb-6">
                9. Rahasia Terbesar: Box Model
              </h1>
              <p className="text-base md:text-xl font-bold text-black bg-white inline-block px-3 py-2 md:px-4 md:py-2 border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Semua elemen di website pada dasarnya adalah KOTAK!
              </p>
            </section>

            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-4">
                <span className="material-symbols-outlined text-4xl md:text-5xl text-[#FF49DB]">crop_square</span>
                Anatomi Sebuah Kotak
              </h2>

              <div className="flex flex-col lg:flex-row gap-8 mb-12">
                <div className="lg:w-1/2 space-y-6">
                  <p className="font-bold text-black/80 text-lg leading-relaxed">
                    Setiap kotak dalam CSS terdiri dari 4 lapisan utama dari dalam ke luar:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="bg-[#2DD4BF] p-1 border-2 border-black inline-block mt-1">1</span>
                      <div>
                        <strong className="block text-xl uppercase font-black">Content</strong>
                        <p className="font-bold text-black/70">Isi asli dari kotaknya (seperti teks atau gambar).</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#FF49DB] text-white p-1 border-2 border-black inline-block mt-1">2</span>
                      <div>
                        <strong className="block text-xl uppercase font-black">Padding</strong>
                        <p className="font-bold text-black/70">Ruang kosong di <em>dalam</em> kotak (jarak antara konten dengan garis tepi).</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-black text-white p-1 border-2 border-black inline-block mt-1">3</span>
                      <div>
                        <strong className="block text-xl uppercase font-black">Border</strong>
                        <p className="font-bold text-black/70">Garis pembatas kotak. Gunakan <code className="bg-gray-200 px-1 border border-black text-sm">border-radius</code> untuk membuat sudutnya melengkung.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#FACC15] p-1 border-2 border-black inline-block mt-1">4</span>
                      <div>
                        <strong className="block text-xl uppercase font-black">Margin</strong>
                        <p className="font-bold text-black/70">Jarak kosong di <em>luar</em> kotak (untuk mendorong elemen lain agar tidak menempel).</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="lg:w-1/2 flex items-center justify-center p-6 bg-[#F4F0EA] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {/* Visualisasi Box Model */}
                  <div className="w-full max-w-sm aspect-square bg-[#FACC15] border-2 border-dashed border-black relative flex items-center justify-center hover:scale-[1.02] transition-transform">
                    <span className="absolute top-2 left-2 text-xs font-black uppercase tracking-widest text-black/60">Margin (Luar)</span>
                    
                    <div className="w-[80%] h-[80%] bg-black border-[6px] border-black relative flex items-center justify-center">
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-black uppercase tracking-widest text-black">Border (Garis Tepi)</span>
                      
                      <div className="w-full h-full bg-[#FF49DB] relative flex items-center justify-center border-2 border-dashed border-white">
                        <span className="absolute top-2 left-2 text-xs font-black uppercase tracking-widest text-white/80">Padding (Dalam)</span>
                        
                        <div className="w-[60%] h-[60%] bg-[#2DD4BF] border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          <span className="text-sm font-black uppercase tracking-widest text-black text-center px-2">Content<br/>(Isi)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shorthand Section */}
              <div className="bg-[#FF49DB] border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-12 flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 space-y-6 text-black">
                  <h3 className="text-2xl font-black uppercase flex items-center gap-2">
                    <span className="material-symbols-outlined text-4xl bg-white rounded-full p-1 border-2 border-black">schedule</span>
                    Jalan Pintas (Shorthand)
                  </h3>
                  <p className="font-bold text-black/80 leading-relaxed">
                    Daripada menulis panjang lebar <code className="bg-white px-1 border border-black">margin-top</code>, <code className="bg-white px-1 border border-black">margin-right</code>, dan sebagainya, kamu bisa menggunakan <strong>Shorthand</strong> (Jalan Pintas)! Aturan ini berlaku untuk Margin maupun Padding.
                  </p>
                  <p className="font-bold text-black/80 leading-relaxed bg-white p-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] inline-block">
                    Hafalkan putaran jarum jam: <br/><strong>ATAS ➡️ KANAN ➡️ BAWAH ➡️ KIRI</strong> (Top, Right, Bottom, Left).
                  </p>
                  <ul className="space-y-2 font-bold text-black/80 text-sm">
                    <li>🔹 <code className="bg-white px-1 border border-black">margin: 10px;</code> (Keempat sisi 10px)</li>
                    <li>🔹 <code className="bg-white px-1 border border-black">margin: 10px 20px;</code> (Atas-Bawah 10px, Kiri-Kanan 20px)</li>
                  </ul>
                  <div className="font-bold text-black/80 leading-relaxed mt-4 flex items-start gap-2 bg-[#FACC15] p-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="material-symbols-outlined mt-1">lightbulb</span>
                    <p><strong>Trik Rahasia:</strong> Kode <code className="bg-white px-1 border border-black">margin: 0 auto;</code> akan langsung memposisikan kotakmu tepat di tengah layar secara horizontal (selama kotak tersebut memiliki width/lebar)!</p>
                  </div>
                </div>
                <div className="md:w-1/2 w-full rotate-1 hover:rotate-0 transition-transform">
                  <CodeBlock 
                    language="css" 
                    code={`/* Cara Panjang (Capek ngetik!) */
.kotak {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 40px;
}

/* Cara Pintas (Shorthand) */
.kotak {
  /* Atas Kanan Bawah Kiri */
  padding: 10px 20px 30px 40px; 
}

/* Trik memosisikan kotak di tengah */
.tengah {
  width: 500px; /* Wajib ada lebar */
  margin: 0 auto; 
}`} 
                  />
                </div>
              </div>

              {/* CSS Reset Section */}
              <div className="bg-[#1e1e1e] text-white border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative mt-12 flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/2 w-full rotate-1 hover:rotate-0 transition-transform">
                  <CodeBlock 
                    language="css" 
                    code={`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
}`} 
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h3 className="text-2xl font-black uppercase flex items-center gap-2 text-[#FACC15]">
                    <span className="material-symbols-outlined text-4xl">warning</span>
                    CSS Reset Wajib!
                  </h3>
                  <p className="text-base font-bold text-white/80 leading-relaxed">
                    Seringkali <code className="bg-white/20 px-1 border border-white">padding</code> dan <code className="bg-white/20 px-1 border border-white">border</code> membuat ukuran kotak membesar tanpa kendali (melar) dan merusak layout.
                  </p>
                  <p className="text-base font-bold text-white/80 leading-relaxed mb-4">
                    Gunakan kode <strong>"Sapu Jagat"</strong> (menggunakan selektor <code className="bg-white/20 px-1 border border-white">*</code>) di baris paling atas file CSS-mu! <code className="bg-[#2DD4BF] text-black px-1 border border-[#2DD4BF]">box-sizing: border-box;</code> memastikan ukuran kotak tetap stabil (mengunci dimensi) walau ditambahkan padding.
                  </p>
                </div>
              </div>

            </section>

            {/* Footer / Penutup */}
            <footer className="bg-white border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined absolute -top-3 -right-3 md:-top-4 md:-right-4 text-4xl md:text-5xl text-white bg-[#FF49DB] rounded-full border-2 md:border-4 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">inventory_2</span>
              <p className="text-xl md:text-3xl font-black text-black uppercase leading-relaxed max-w-4xl mx-auto">
                "Pahami Box Model, maka kamu telah menguasai ruang dimensi di dunia CSS!"
              </p>
            </footer>

            <div className="h-12 w-full"></div>
          </div>
        </main>
      </div>
    </>
  );
}
