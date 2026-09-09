"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import CodeBlock from '@/components/CodeBlock';

export default function HeadingParagrafPage() {
  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/heading-paragraf', isActive: true },
          { label: 'Soal Teori', href: '/heading-paragraf/soal', isActive: false }
        ]}
      />
      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />
        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">

            {/* Header & Hero Section */}
            <section className="bg-[#FF49DB] border-4 border-black p-6 md:p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">
                Heading & Paragraf
              </h1>
              <p className="text-base md:text-xl font-bold text-black bg-white inline-block px-4 py-2 md:px-6 md:py-3 border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Tata letak teks dasar pembentuk setiap tulisan di website!
              </p>
            </section>

            {/* Section 1: Heading HTML */}
            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#2DD4BF] text-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">1</span>
                Heading (Judul Tulisan)
              </h2>
              
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="flex-1">
                  <p className="font-bold text-black/80 text-base md:text-lg mb-4 leading-relaxed">
                    Tag Heading digunakan untuk membuat judul atau sub-judul. Dalam HTML, terdapat <strong className="bg-[#FACC15] px-1 border-2 border-black text-black">6 tingkatan</strong> heading, mulai dari <code>&lt;h1&gt;</code> hingga <code>&lt;h6&gt;</code>.
                  </p>
                  <p className="font-bold text-black/80 text-base md:text-lg mb-4 leading-relaxed">
                    <code>&lt;h1&gt;</code> adalah judul paling penting (ukuran terbesar), sedangkan <code>&lt;h6&gt;</code> adalah yang paling tidak penting (ukuran terkecil).
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-1 hover:rotate-0 transition-transform bg-white">
                  <div className="bg-[#2DD4BF] border-b-4 border-black p-3 font-black uppercase flex gap-2 items-center">
                    <span className="material-symbols-outlined">code</span> Kode HTML
                  </div>
                  <div className="p-0">
                    <CodeBlock 
                      language="html"
                      code={`<h1>Ini Heading 1</h1>\n<h2>Ini Heading 2</h2>\n<h3>Ini Heading 3</h3>\n<h4>Ini Heading 4</h4>\n<h5>Ini Heading 5</h5>\n<h6>Ini Heading 6</h6>`}
                    />
                  </div>
                </div>

                <div className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-1 hover:rotate-0 transition-transform bg-white p-6 flex flex-col gap-2">
                  <div className="bg-[#FF49DB] border-b-4 border-black p-3 -mx-6 -mt-6 mb-4 font-black uppercase text-white flex gap-2 items-center">
                    <span className="material-symbols-outlined">preview</span> Hasil di Browser
                  </div>
                  <h1 className="text-4xl font-bold m-0 border-b-2 border-dashed border-gray-300 pb-1">Ini Heading 1</h1>
                  <h2 className="text-3xl font-bold m-0 border-b-2 border-dashed border-gray-300 pb-1">Ini Heading 2</h2>
                  <h3 className="text-2xl font-bold m-0 border-b-2 border-dashed border-gray-300 pb-1">Ini Heading 3</h3>
                  <h4 className="text-xl font-bold m-0 border-b-2 border-dashed border-gray-300 pb-1">Ini Heading 4</h4>
                  <h5 className="text-lg font-bold m-0 border-b-2 border-dashed border-gray-300 pb-1">Ini Heading 5</h5>
                  <h6 className="text-base font-bold m-0 text-gray-700">Ini Heading 6</h6>
                </div>
              </div>

              <div className="mt-8 bg-[#F4F0EA] border-4 border-black p-4 flex gap-4 items-start shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="material-symbols-outlined text-4xl text-[#FF49DB]">warning</span>
                <div>
                  <h4 className="font-black uppercase mb-1">Penting Untuk SEO!</h4>
                  <p className="font-bold text-black/80 text-sm md:text-base">
                    Gunakan heading dengan berurutan. Jangan gunakan <code>&lt;h1&gt;</code> hanya untuk memperbesar tulisan. Mesin pencari (Google) menggunakan struktur heading ini untuk memahami isi dari website kamu. Idealnya, hanya ada <strong>satu</strong> <code>&lt;h1&gt;</code> dalam setiap halaman.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Paragraf */}
            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#FACC15] text-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">2</span>
                Paragraf & Formatting
              </h2>

              <p className="font-bold text-black/80 text-base md:text-lg mb-8 leading-relaxed">
                Tag <code>&lt;p&gt;</code> mendefinisikan sebuah paragraf. Browser secara otomatis menambahkan spasi atau jarak kosong di atas dan di bawah paragraf untuk memisahkannya dengan elemen lain.
              </p>

              <div className="space-y-6">
                {/* Paragraf Biasa */}
                <div className="border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 md:p-6 flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="font-black uppercase mb-2 border-b-4 border-black pb-1 inline-block">1. Tag &lt;p&gt; Dasar</h3>
                    <p className="font-bold text-black/70 text-sm mb-4">Setiap tag p akan membuat blok teks baru yang otomatis terpisah baris.</p>
                    <CodeBlock 
                      language="html"
                      code={`<p>Ini adalah paragraf pertama saya.</p>\n<p>Paragraf kedua otomatis berada di bawah.</p>`}
                    />
                  </div>
                  <div className="flex-1 bg-[#F4F0EA] border-4 border-black p-4 flex flex-col justify-center">
                    <p className="mb-4 bg-white border-2 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Ini adalah paragraf pertama saya.</p>
                    <p className="bg-white border-2 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Paragraf kedua otomatis berada di bawah.</p>
                  </div>
                </div>

                {/* Teks Formatting */}
                <div className="border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 md:p-6 flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="font-black uppercase mb-2 border-b-4 border-black pb-1 inline-block">2. Format Teks Inline</h3>
                    <p className="font-bold text-black/70 text-sm mb-4">Kamu bisa mengubah bentuk teks menggunakan tag seperti <code>&lt;b&gt;</code> (bold), <code>&lt;i&gt;</code> (italic), dan <code>&lt;u&gt;</code> (underline) di dalam paragraf.</p>
                    <CodeBlock 
                      language="html"
                      code={`<p>Teks ini <b>Tebal</b>, yang ini <i>Miring</i>, dan ini <u>Garis Bawah</u>.</p>`}
                    />
                  </div>
                  <div className="flex-1 bg-[#F4F0EA] border-4 border-black p-4 flex flex-col justify-center">
                    <p className="bg-white border-2 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      Teks ini <b>Tebal</b>, yang ini <i>Miring</i>, dan ini <u>Garis Bawah</u>.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Tag <br> dan <hr> */}
            <section className="bg-[#2DD4BF] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-white text-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">3</span>
                Pindah Baris & Garis Pembatas
              </h2>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-2xl font-black text-black uppercase mb-2">Tag &lt;br&gt;</h3>
                  <p className="font-bold text-black/80 mb-4 text-sm md:text-base">Gunakan <code>&lt;br&gt;</code> jika kamu ingin turun baris (enter) <strong>tanpa</strong> membuat paragraf baru.</p>
                  <CodeBlock 
                      language="html"
                      code={`<p>Baris satu <br> Baris dua <br> Baris tiga</p>`}
                  />
                  <div className="mt-4 bg-[#F4F0EA] border-4 border-black p-4 text-sm">
                    Baris satu <br/> Baris dua <br/> Baris tiga
                  </div>
                </div>

                <div className="flex-1 bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-2xl font-black text-black uppercase mb-2">Tag &lt;hr&gt;</h3>
                  <p className="font-bold text-black/80 mb-4 text-sm md:text-base">Gunakan <code>&lt;hr&gt;</code> untuk membuat garis mendatar pembatas antar topik atau sesi bacaan.</p>
                  <CodeBlock 
                      language="html"
                      code={`<p>Cerita Bab 1</p>\n<hr>\n<p>Cerita Bab 2</p>`}
                  />
                  <div className="mt-4 bg-[#F4F0EA] border-4 border-black p-4 text-sm">
                    <p>Cerita Bab 1</p>
                    <hr className="my-2 border-t-2 border-black" />
                    <p>Cerita Bab 2</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Inline CSS */}
            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12 rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#FF49DB] text-white w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">4</span>
                Atribut Style (Inline CSS)
              </h2>

              <p className="text-base md:text-xl font-bold text-black/80 leading-relaxed mb-6">
                Meskipun biasanya warna dan desain diatur di file terpisah (CSS), HTML mengizinkan kita melakukan desain <strong className="bg-[#FACC15] px-1 border-2 border-black text-black">"dadakan"</strong> langsung di dalam tag menggunakan atribut <code className="bg-[#2DD4BF] px-1 border-2 border-black text-black">style</code>. Ini disebut sebagai <strong>Inline CSS</strong>.
              </p>

              <div className="flex flex-col lg:flex-row gap-6 mb-8">
                <div className="w-full lg:w-1/2 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-0">
                  <div className="bg-[#2DD4BF] border-b-4 border-black p-3 font-black uppercase flex gap-2 items-center">
                    <span className="material-symbols-outlined">code</span> Contoh Penggunaan
                  </div>
                  <CodeBlock 
                    language="html"
                    code={`<p style="color: red; font-size: 20px;">Teks ini berwarna merah dan besar.</p>\n<span style="background-color: yellow;">Teks dengan stabilo kuning</span>`}
                  />
                </div>
                
                <div className="w-full lg:w-1/2 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white p-6 flex flex-col gap-4 justify-center">
                  <div className="bg-[#FF49DB] text-white border-4 border-black p-3 font-black uppercase drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] mb-2 self-start">
                    Hasil:
                  </div>
                  <div className="border-2 border-dashed border-gray-400 p-4">
                    <p style={{ color: 'red', fontSize: '20px' }} className="mb-2">Teks ini berwarna merah dan besar.</p>
                    <span style={{ backgroundColor: 'yellow', color: 'black' }}>Teks dengan stabilo kuning</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#F4F0EA] border-4 border-black p-4 flex gap-4 items-start shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="material-symbols-outlined text-4xl text-[#FF49DB] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">warning</span>
                <div>
                  <h4 className="font-black uppercase mb-1">Catatan Penting</h4>
                  <p className="font-bold text-black/80 text-sm md:text-base">
                    Penggunaan <code className="bg-white px-1 border-2 border-black">style</code> di HTML (Inline CSS) biasanya hanya digunakan untuk kasus darurat atau spesifik. Desainer web profesional selalu meletakkan desainnya di file CSS terpisah agar kode HTML tetap bersih dan mudah dikelola!
                  </p>
                </div>
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
