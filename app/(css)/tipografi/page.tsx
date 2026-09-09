"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import CodeBlock from '@/components/CodeBlock';

export default function TipografiPage() {
  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/tipografi', isActive: true },
          { label: 'Soal Teori', href: '/tipografi/soal', isActive: false }
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">

            <section className="bg-[#FF49DB] border-4 border-black p-6 md:p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                6. Tipografi & Font
              </h1>
              <p className="text-base md:text-xl font-bold text-black bg-white inline-block px-3 py-2 md:px-4 md:py-2 border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                CSS bisa menyulap wajah tulisan menjadi apapun yang kamu bayangkan.
              </p>
            </section>

            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-4">
                <span className="material-symbols-outlined text-4xl md:text-5xl text-[#2DD4BF]">font_download</span>
                Properti Utama Tipografi
              </h2>

              <div className="flex flex-col lg:flex-row gap-8 mb-12">
                <div className="lg:w-1/2 space-y-6">
                  <p className="font-bold text-black/80 text-lg leading-relaxed">
                    Kombinasi properti berikut adalah resep dasar untuk mengatur teks:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="bg-[#FACC15] p-1 border-2 border-black inline-block mt-1">📌</span>
                      <div>
                        <strong className="block text-xl uppercase font-black">font-family</strong>
                        <p className="font-bold text-black/70">Jenis/gaya huruf (Misal: Arial, Times New Roman, Outfit).</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#2DD4BF] p-1 border-2 border-black inline-block mt-1">📏</span>
                      <div>
                        <strong className="block text-xl uppercase font-black">font-size</strong>
                        <p className="font-bold text-black/70">Besaran huruf (menggunakan px, rem, dsb).</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#FF49DB] p-1 border-2 border-black inline-block mt-1 text-white">💪</span>
                      <div>
                        <strong className="block text-xl uppercase font-black">font-weight</strong>
                        <p className="font-bold text-black/70">Ketebalan huruf. 400 untuk normal, 700 untuk <strong>bold</strong>.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-black text-white p-1 border-2 border-black inline-block mt-1">↔️</span>
                      <div>
                        <strong className="block text-xl uppercase font-black">text-align</strong>
                        <p className="font-bold text-black/70">Rata teks (left, right, center, justify).</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="lg:w-1/2 rotate-1 hover:rotate-0 transition-transform">
                  <CodeBlock 
                    language="css" 
                    code={`p {
  font-family: 'Outfit', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.6;
  text-decoration: none;
}`} 
                  />
                </div>
              </div>

              {/* Google Fonts Highlight */}
              <div className="bg-[#F4F0EA] border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative mt-8 flex flex-col md:flex-row gap-6 items-center">
                <span className="material-symbols-outlined text-6xl md:text-[80px] text-[#FACC15] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">lightbulb</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-black uppercase mb-2">Google Fonts</h3>
                  <p className="text-base md:text-lg font-bold text-black/80 leading-relaxed mb-4">
                    Pernah melihat <code className="bg-white px-1 border-2 border-black text-sm">&lt;link href="...fonts.googleapis.com..."&gt;</code> di HTML?
                  </p>
                  <p className="text-base md:text-lg font-bold text-black/80 leading-relaxed">
                    Itu adalah cara meminjam font keren dari internet (Google) agar bisa dipakai di properti <strong className="bg-[#2DD4BF] px-1 border-2 border-black text-black">font-family</strong> CSS-mu tanpa perlu menginstalnya secara lokal!
                  </p>
                </div>
              </div>

              {/* Advanced Typography */}
              <div className="bg-black text-white border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(45,212,191,1)] mt-12 flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 space-y-6">
                  <h3 className="text-2xl font-black uppercase flex items-center gap-2 text-[#2DD4BF]">
                    <span className="material-symbols-outlined text-4xl">text_format</span>
                    Dekorasi & Spasi
                  </h3>
                  <p className="font-bold text-white/80 leading-relaxed">
                    Bukan hanya jenis huruf, CSS juga bisa mengatur detail dekorasi dan jarak untuk meningkatkan kenyamanan membaca (<em>readability</em>):
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="bg-[#FF49DB] p-1 border-2 border-white inline-block mt-1">✨</span>
                      <div>
                        <strong className="block text-xl uppercase font-black text-[#FF49DB]">text-transform</strong>
                        <p className="font-bold text-white/70">Memaksa teks menjadi <code className="bg-white/20 px-1">uppercase</code> (KAPITAL), <code className="bg-white/20 px-1">lowercase</code> (kecil), atau <code className="bg-white/20 px-1">capitalize</code> (Huruf Besar Di Awal).</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#FACC15] p-1 border-2 border-white inline-block mt-1">↕️</span>
                      <div>
                        <strong className="block text-xl uppercase font-black text-[#FACC15]">line-height</strong>
                        <p className="font-bold text-white/70">Mengatur jarak spasi antar baris. Sangat penting agar paragraf panjang tidak berdempetan!</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-white text-black p-1 border-2 border-white inline-block mt-1">➖</span>
                      <div>
                        <strong className="block text-xl uppercase font-black text-white">text-decoration</strong>
                        <p className="font-bold text-white/70">Memberi garis (<code className="bg-white/20 px-1">underline</code>), coret (<code className="bg-white/20 px-1">line-through</code>), atau menghilangkannya (<code className="bg-white/20 px-1">none</code> - sering dipakai untuk link).</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 w-full -rotate-1 hover:rotate-0 transition-transform">
                  <CodeBlock 
                    language="css" 
                    code={`.artikel {
  text-transform: capitalize;
  line-height: 1.8; /* Spasi baris 1.8x */
  letter-spacing: 1px; /* Jarak antar huruf */
}

a.link-bersih {
  text-decoration: none; /* Hilangkan garis bawah */
}`} 
                  />
                </div>
              </div>

            </section>

            {/* Footer / Penutup */}
            <footer className="bg-white border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined absolute -top-3 -right-3 md:-top-4 md:-right-4 text-4xl md:text-5xl text-white bg-[#FF49DB] rounded-full border-2 md:border-4 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">edit_document</span>
              <p className="text-xl md:text-3xl font-black text-black uppercase leading-relaxed max-w-4xl mx-auto">
                "Tipografi yang baik adalah suara yang jernih bagi pembaca website-mu."
              </p>
            </footer>

            <div className="h-12 w-full"></div>
          </div>
        </main>
      </div>
    </>
  );
}
