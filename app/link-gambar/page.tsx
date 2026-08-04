"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import CodeBlock from '@/components/CodeBlock';

export default function LinkGambarPage() {
  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/link-gambar', isActive: true },
          { label: 'Soal Teori', href: '/link-gambar/soal', isActive: false }
        ]}
      />
      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />
        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">

            {/* Header & Hero Section */}
            <section className="bg-[#2DD4BF] border-4 border-black p-6 md:p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">
                Link & Gambar
              </h1>
              <p className="text-base md:text-xl font-bold text-black bg-white inline-block px-4 py-2 md:px-6 md:py-3 border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Hubungkan halamanmu dan tambahkan visual yang menarik!
              </p>
            </section>

            {/* Section 1: Link (Tautan) */}
            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#FF49DB] text-white w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">1</span>
                Tautan (Link) Menggunakan &lt;a&gt;
              </h2>
              
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="flex-1">
                  <p className="font-bold text-black/80 text-base md:text-lg mb-4 leading-relaxed">
                    Tag <code>&lt;a&gt;</code> (singkatan dari <em>Anchor</em>) digunakan untuk membuat sebuah tautan atau <em>hyperlink</em> yang bisa diklik untuk berpindah ke halaman lain.
                  </p>
                  <div className="bg-[#F4F0EA] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4">
                    <p className="font-bold text-black">Tag ini membutuhkan atribut wajib yaitu <strong className="bg-[#FACC15] px-1 border-2 border-black">href</strong> yang berisi alamat URL tujuan.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {/* External Link */}
                <div className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6 transition-transform rotate-1 hover:rotate-0 bg-white">
                  <h3 className="font-black text-xl uppercase mb-2">1. Link ke Website Lain (External Link)</h3>
                  <p className="text-sm font-bold text-black/70 mb-4">Pastikan menuliskan alamat lengkap beserta awalan <code>http://</code> atau <code>https://</code>.</p>
                  <CodeBlock 
                    language="html"
                    code={`<a href="https://www.google.com">Buka Google</a>`}
                  />
                  <div className="mt-4 flex items-center gap-4">
                    <span className="font-black uppercase text-sm">Hasil:</span>
                    <a href="#" className="text-blue-600 underline font-bold hover:text-blue-800">Buka Google</a>
                  </div>
                </div>

                {/* Internal Link */}
                <div className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6 transition-transform -rotate-1 hover:rotate-0 bg-white">
                  <h3 className="font-black text-xl uppercase mb-2">2. Link ke Halaman Sendiri (Internal Link)</h3>
                  <p className="text-sm font-bold text-black/70 mb-4">Digunakan jika ingin berpindah antar halaman di dalam website yang sama. Cukup tuliskan path-nya saja.</p>
                  <CodeBlock 
                    language="html"
                    code={`<a href="/tentang-kami">Ke Halaman Tentang Kami</a>\n<a href="kontak.html">Hubungi Kami</a>`}
                  />
                </div>

                {/* Open in New Tab */}
                <div className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6 bg-[#2DD4BF]">
                  <h3 className="font-black text-xl uppercase mb-2">3. Membuka Link di Tab Baru</h3>
                  <p className="text-sm font-bold text-black/90 mb-4">Gunakan atribut <strong className="bg-white px-1 border-2 border-black">target="_blank"</strong> agar saat link diklik, browser akan membuka tab baru.</p>
                  <CodeBlock 
                    language="html"
                    code={`<a href="https://www.wikipedia.org" target="_blank">Buka Wikipedia di Tab Baru</a>`}
                  />
                </div>
              </div>
            </section>

            {/* Section 2: Gambar */}
            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#FACC15] text-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">2</span>
                Gambar (Images) Menggunakan &lt;img&gt;
              </h2>

              <p className="font-bold text-black/80 text-base md:text-lg mb-8 leading-relaxed">
                Menampilkan gambar di halaman HTML sangatlah mudah. Kita menggunakan tag <code>&lt;img&gt;</code>. Tag ini adalah <strong>elemen tunggal (void element)</strong> yang berarti tidak memiliki tag penutup.
              </p>

              <div className="bg-[#F4F0EA] border-4 border-black p-6 mb-8 flex flex-col md:flex-row items-center gap-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex-1 w-full">
                  <h3 className="font-black text-2xl uppercase mb-4 text-[#FF49DB] drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">Atribut Wajib &lt;img&gt;</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-black font-black mt-1">check_box</span>
                      <p className="font-bold">
                        <strong className="bg-white px-1 border-2 border-black inline-block mb-1">src=""</strong> <br/>
                        <em>Source</em>. Berisi alamat atau lokasi file gambar (URL atau path file).
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-black font-black mt-1">check_box</span>
                      <p className="font-bold">
                        <strong className="bg-white px-1 border-2 border-black inline-block mb-1">alt=""</strong> <br/>
                        <em>Alternative Text</em>. Teks pengganti jika gambar gagal dimuat. Ini sangat penting untuk <strong>SEO</strong> dan aksesibilitas (pembaca layar bagi tunanetra).
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contoh Penggunaan Gambar */}
              <div className="border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 md:p-6 mb-8">
                <h3 className="font-black uppercase mb-4 border-b-4 border-black pb-1 inline-block">Contoh Code</h3>
                <CodeBlock 
                  language="html"
                  code={`<!-- Menampilkan gambar kucing dengan teks alternatif -->\n<img src="kucing.jpg" alt="Foto Anak Kucing Lucu">\n\n<!-- Gambar dari URL Internet dengan pengaturan ukuran -->\n<img src="https://example.com/logo.png" alt="Logo Perusahaan" width="200" height="100">`}
                />
              </div>

              <div className="bg-[#FF49DB] border-4 border-black p-4 flex gap-4 items-start shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-white">
                <span className="material-symbols-outlined text-4xl text-[#FACC15] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">lightbulb</span>
                <div>
                  <h4 className="font-black uppercase mb-1 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Atribut Lebar & Tinggi</h4>
                  <p className="font-bold text-white/90 text-sm md:text-base">
                    Kamu bisa mengatur ukuran asli gambar langsung di HTML dengan atribut <code>width=""</code> (lebar) dan <code>height=""</code> (tinggi) dalam hitungan pixel, tapi biasanya mengatur ukuran disarankan menggunakan <strong>CSS</strong> di masa sekarang agar lebih responsif.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Gambar sebagai Link */}
            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12 rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#4ade80] text-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">3</span>
                Gambar Sebagai Tautan (Clickable Image)
              </h2>

              <p className="font-bold text-black/80 text-base md:text-lg mb-6 leading-relaxed">
                Kita bisa menggabungkan tag <code>&lt;a&gt;</code> dan <code>&lt;img&gt;</code> dengan cara memasukkan tag gambar ke dalam tag tautan. Dengan begini, saat gambar diklik, pengguna akan diarahkan ke sebuah link.
              </p>

              <div className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-0">
                <CodeBlock 
                  language="html"
                  code={`<a href="https://www.youtube.com" target="_blank">\n  <img src="logo-youtube.png" alt="Buka YouTube">\n</a>`}
                />
              </div>
            </section>

            {/* Footer */}
            <footer className="mt-12 mb-12 flex flex-col md:flex-row justify-between items-center gap-4 opacity-70">
              <p className="font-black text-xs md:text-sm uppercase tracking-widest text-black text-center md:text-left">© 2024 EDUBRUTAL // SYSTEM STATUS: NOMINAL</p>
            </footer>
          </div>
        </main>
      </div>
    </>
  );
}
