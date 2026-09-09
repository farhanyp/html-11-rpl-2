"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import CodeBlock from '@/components/CodeBlock';

export default function PemanggilanCSSPage() {
  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/pemanggilan-css', isActive: true },
          { label: 'Soal Teori', href: '/pemanggilan-css/soal', isActive: false }
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">

            <section className="bg-white border-4 border-black p-6 md:p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tighter uppercase mb-4 md:mb-6">
                2. Cara Memanggil CSS
              </h1>
              <p className="text-base md:text-xl font-bold text-black bg-[#FACC15] inline-block px-3 py-2 md:px-4 md:py-2 border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Agar desain CSS berfungsi di HTML, kita harus menghubungkannya. Ada 3 cara utama!
              </p>
            </section>

            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12 space-y-10">

              {/* Inline CSS */}
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
                <div className="lg:w-1/2 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-black text-black uppercase flex items-center gap-3">
                    <span className="material-symbols-outlined text-4xl text-[#FF49DB]">warning</span>
                    1. Inline CSS
                  </h3>
                  <p className="text-base md:text-lg font-bold text-black/80 leading-relaxed">
                    Ditulis langsung di dalam tag menggunakan atribut <code className="bg-[#2DD4BF] px-1 border-2 border-black text-black font-black">style</code>. <strong className="bg-[#FF49DB] text-white px-1 border-2 border-black">Hanya gunakan untuk keadaan darurat!</strong>
                  </p>
                  <div className="bg-[#F4F0EA] p-4 border-l-4 border-[#FF49DB]">
                    <h4 className="font-black text-sm uppercase text-black mb-1 flex items-center gap-1"><span className="material-symbols-outlined text-base">thumb_down</span> Kelemahan Utama:</h4>
                    <p className="text-sm font-bold text-black/70">Kode HTML akan menjadi sangat berantakan dan sulit dibaca. Sangat menyusahkan jika ingin mendaur ulang gaya untuk elemen lain yang sama.</p>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full rotate-1 hover:rotate-0 transition-transform">
                  <CodeBlock 
                    language="html" 
                    code={`<h1 style="color: red; font-size: 20px;">Teks Merah</h1>`} 
                  />
                </div>
              </div>

              {/* Internal CSS */}
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start border-t-4 border-black border-dashed pt-10">
                <div className="lg:w-1/2 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-black text-black uppercase flex items-center gap-3">
                    <span className="material-symbols-outlined text-4xl text-[#FACC15]">inventory_2</span>
                    2. Internal CSS
                  </h3>
                  <p className="text-base md:text-lg font-bold text-black/80 leading-relaxed">
                    Ditulis di dalam tag <code className="bg-[#2DD4BF] px-1 border-2 border-black text-black font-black">&lt;style&gt;</code> pada bagian <code className="bg-[#2DD4BF] px-1 border-2 border-black text-black font-black">&lt;head&gt;</code> dokumen HTML.
                  </p>
                  <div className="bg-[#F4F0EA] p-4 border-l-4 border-[#FACC15]">
                    <h4 className="font-black text-sm uppercase text-black mb-1 flex items-center gap-1"><span className="material-symbols-outlined text-base">info</span> Kapan Digunakan?</h4>
                    <p className="text-sm font-bold text-black/70">Berguna untuk <em>email template</em> HTML atau jika kamu sedang bereksperimen pada proyek super sederhana yang hanya terdiri dari 1 halaman saja.</p>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full -rotate-1 hover:rotate-0 transition-transform">
                  <CodeBlock 
                    language="html" 
                    code={`<style>
  h1 {
    color: blue;
  }
</style>`} 
                  />
                </div>
              </div>

              {/* External CSS */}
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start bg-[#2DD4BF] p-6 md:p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative mt-10">
                <span className="material-symbols-outlined absolute -top-5 -right-5 text-4xl text-black bg-[#FACC15] rounded-full border-4 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-12">star</span>
                <div className="lg:w-1/2 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-black text-black uppercase flex items-center gap-3">
                    <span className="material-symbols-outlined text-4xl text-black">local_fire_department</span>
                    3. External CSS
                  </h3>
                  <p className="text-base md:text-lg font-bold text-black/80 leading-relaxed">
                    Semua kode desain disimpan dalam file berakhiran <code className="bg-white px-1 border-2 border-black text-black font-black">.css</code>, lalu dipanggil di HTML menggunakan tag <code className="bg-white px-1 border-2 border-black text-black font-black">&lt;link&gt;</code>. <strong className="bg-[#FF49DB] text-white px-1 border-2 border-black">Cara ini paling direkomendasikan di industri!</strong>
                  </p>
                  <div className="bg-white p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black text-sm uppercase text-black mb-2 flex items-center gap-1"><span className="material-symbols-outlined text-base">verified</span> Keuntungan Utama:</h4>
                    <ul className="text-sm font-bold text-black/80 list-disc list-inside space-y-1">
                      <li>File HTML menjadi jauh lebih bersih & rapi.</li>
                      <li>Cukup ubah 1 file CSS, 1000 halaman web akan ikut berubah.</li>
                      <li>File CSS di-<em>cache</em> oleh browser, membuat <em>loading</em> website super cepat.</li>
                    </ul>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full rotate-1 hover:rotate-0 transition-transform">
                  <CodeBlock 
                    language="html" 
                    code={`<!-- Ditaruh di dalam <head> HTML -->
<link rel="stylesheet" href="style.css">`} 
                  />
                </div>
              </div>

            </section>

            {/* Section 2: Best Practice */}
            <section className="bg-[#FACC15] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-white text-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">!</span>
                Praktik Terbaik (Best Practices)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-4xl text-[#FF49DB]">rule_folder</span>
                    <h3 className="text-xl font-black uppercase tracking-tight">Struktur Folder</h3>
                  </div>
                  <p className="font-bold text-black/80 leading-relaxed text-sm md:text-base">
                    Selalu biasakan untuk menaruh file <code className="bg-[#F4F0EA] px-1 border-2 border-black text-black">.css</code> di dalam folder khusus (misalnya <code className="bg-[#F4F0EA] px-1 border-2 border-black text-black">/css/</code> atau <code className="bg-[#F4F0EA] px-1 border-2 border-black text-black">/assets/</code>) agar proyekmu tetap terorganisir saat ukurannya membesar.
                  </p>
                </div>
                
                <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-4xl text-[#2DD4BF]">format_quote</span>
                    <h3 className="text-xl font-black uppercase tracking-tight">Gunakan Komentar</h3>
                  </div>
                  <p className="font-bold text-black/80 leading-relaxed text-sm md:text-base">
                    Kode CSS bisa menjadi ribuan baris. Gunakan komentar <code className="bg-[#F4F0EA] px-1 border-2 border-black text-black">/* Komentar */</code> untuk memisahkan bagian-bagian penting (seperti Header, Footer, dll) supaya mudah dibaca.
                  </p>
                </div>
              </div>
            </section>

            {/* Footer / Penutup */}
            <footer className="bg-white border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined absolute -top-3 -right-3 md:-top-4 md:-right-4 text-4xl md:text-5xl text-white bg-[#FF49DB] rounded-full border-2 md:border-4 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">psychology</span>
              <p className="text-xl md:text-3xl font-black text-black uppercase leading-relaxed max-w-4xl mx-auto">
                "Pisahkan kode HTML dan CSS di file yang berbeda agar hidupmu sebagai Developer jauh lebih tenang!"
              </p>
            </footer>
            <div className="h-12 w-full"></div>
          </div>
        </main>
      </div>
    </>
  );
}
