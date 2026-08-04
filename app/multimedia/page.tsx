"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import CodeBlock from '@/components/CodeBlock';

export default function MultimediaPage() {
  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/multimedia', isActive: true },
          { label: 'Soal Teori', href: '/multimedia/soal', isActive: false }
        ]}
      />
      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />
        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">

            {/* Header & Hero Section */}
            <section className="bg-[#FACC15] border-4 border-black p-6 md:p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">
                Multimedia & Embed
              </h1>
              <p className="text-base md:text-xl font-bold text-black bg-white inline-block px-4 py-2 md:px-6 md:py-3 border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Menambahkan Video, Audio, dan Konten dari Website Lain!
              </p>
            </section>

            {/* Section 1: Memasukkan Video & Audio */}
            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#2DD4BF] text-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">1</span>
                HTML Video & Audio
              </h2>
              
              <p className="font-bold text-black/80 text-base md:text-lg mb-8 leading-relaxed">
                Di masa HTML5, kita tidak lagi butuh plugin eksternal (seperti Flash Player) untuk memutar video atau audio. HTML sudah menyediakan tag native (bawaan) yaitu <code>&lt;video&gt;</code> dan <code>&lt;audio&gt;</code>. Keduanya membutuhkan atribut <strong>controls</strong> agar tombol <em>Play</em> dan <em>Pause</em> muncul di layar.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                
                {/* Audio */}
                <div className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white flex flex-col transition-transform rotate-1 hover:rotate-0">
                  <div className="bg-[#FF49DB] border-b-4 border-black p-4">
                    <h3 className="font-black text-xl uppercase text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] flex items-center gap-2">
                      <span className="material-symbols-outlined">music_note</span> Tag &lt;audio&gt;
                    </h3>
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-bold text-black/70 mb-4">Gunakan format file umum seperti .mp3 atau .ogg.</p>
                    <CodeBlock 
                      language="html"
                      code={`<!-- controls memunculkan tombol putar -->\n<audio controls>\n  <source src="lagu.mp3" type="audio/mpeg">\n  Browser kamu tidak support audio.\n</audio>`}
                    />
                  </div>
                  <div className="bg-[#F4F0EA] border-t-4 border-black p-4">
                    <p className="mb-2 font-black uppercase text-sm">Contoh Tampilan:</p>
                    {/* Dummy Audio Player */}
                    <div className="bg-white border-2 border-black rounded-full h-12 flex items-center px-4 gap-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <span className="material-symbols-outlined text-black cursor-pointer">play_arrow</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full relative">
                        <div className="absolute top-0 left-0 h-full w-1/3 bg-[#FF49DB] rounded-full"></div>
                        <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-black rounded-full -translate-y-1/2 -ml-1"></div>
                      </div>
                      <span className="font-bold text-xs">1:03</span>
                    </div>
                  </div>
                </div>

                {/* Video */}
                <div className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white flex flex-col transition-transform -rotate-1 hover:rotate-0">
                  <div className="bg-[#2DD4BF] border-b-4 border-black p-4">
                    <h3 className="font-black text-xl uppercase text-black flex items-center gap-2">
                      <span className="material-symbols-outlined">movie</span> Tag &lt;video&gt;
                    </h3>
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-bold text-black/70 mb-4">Gunakan format file .mp4 atau .webm. Bisa juga mengatur ukuran awalnya.</p>
                    <CodeBlock 
                      language="html"
                      code={`<video width="320" height="240" controls>\n  <source src="film.mp4" type="video/mp4">\n  Browser kamu tidak support video.\n</video>`}
                    />
                  </div>
                  <div className="bg-[#F4F0EA] border-t-4 border-black p-4">
                    <p className="mb-2 font-black uppercase text-sm">Contoh Tampilan:</p>
                    {/* Dummy Video Player */}
                    <div className="bg-black w-full aspect-video border-2 border-black relative flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <span className="material-symbols-outlined text-white text-5xl opacity-80 cursor-pointer hover:opacity-100 transition-opacity">play_circle</span>
                      <div className="absolute bottom-0 w-full h-8 bg-black/80 border-t-2 border-gray-700 flex items-center px-2 gap-2">
                        <span className="material-symbols-outlined text-white text-sm">play_arrow</span>
                        <div className="flex-1 h-1 bg-gray-600"><div className="h-full w-1/4 bg-[#2DD4BF]"></div></div>
                        <span className="material-symbols-outlined text-white text-sm">volume_up</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              
              <div className="bg-[#FF49DB] border-4 border-black p-4 flex gap-4 items-start shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-white mt-8">
                <span className="material-symbols-outlined text-4xl text-[#FACC15] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">tips_and_updates</span>
                <div>
                  <h4 className="font-black uppercase mb-1 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Atribut Autoplay & Loop</h4>
                  <p className="font-bold text-white/90 text-sm md:text-base">
                    Kamu bisa menambahkan atribut <code>autoplay</code> (memutar otomatis saat halaman dimuat) dan <code>loop</code> (mengulang terus-menerus) pada tag video/audio. Contoh: <code>&lt;video autoplay loop muted&gt;</code>. <br/> 
                    *Catatan: Browser modern mewajibkan atribut <code>muted</code> (bisu) agar <em>autoplay</em> bisa berfungsi.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Embed Website Lain (Iframe) */}
            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#FACC15] text-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">2</span>
                Embed Konten dengan &lt;iframe&gt;
              </h2>

              <p className="font-bold text-black/80 text-base md:text-lg mb-8 leading-relaxed">
                Bagaimana cara memasukkan video YouTube atau peta Google Maps ke dalam website kita? Jawabannya adalah menggunakan <strong>Inline Frame</strong> atau disingkat <code>&lt;iframe&gt;</code>. Iframe membuat "jendela kecil" di dalam halaman web kita untuk menampilkan halaman web lain.
              </p>

              <div className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#F4F0EA] mb-8">
                <div className="p-6">
                  <h3 className="font-black text-xl uppercase mb-4 flex items-center gap-2"><span className="material-symbols-outlined text-[#FF49DB]">code</span> Atribut Iframe</h3>
                  <ul className="space-y-4 font-bold text-black/80">
                    <li className="flex gap-3">
                      <span className="bg-white px-2 py-1 border-2 border-black inline-block">src="..."</span>
                      <p className="mt-1">Menentukan URL atau link sumber yang akan dimuat di dalam jendela iframe.</p>
                    </li>
                    <li className="flex gap-3">
                      <span className="bg-white px-2 py-1 border-2 border-black inline-block">title="..."</span>
                      <p className="mt-1">Memberikan deskripsi singkat tentang isi iframe (sangat penting untuk aksesibilitas dan SEO).</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col xl:flex-row gap-8 items-stretch">
                <div className="flex-1 bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-black text-xl uppercase mb-4 text-center">Contoh Code</h3>
                  <CodeBlock 
                    language="html"
                    code={`<!-- Memasukkan Halaman Web -->\n<iframe \n  src="https://id.wikipedia.org/" \n  title="Wikipedia Indonesia"\n  width="100%" \n  height="300">\n</iframe>`}
                  />
                  <p className="mt-4 text-xs font-bold text-black/60">* Hati-hati, tidak semua website mengizinkan halamannya di-embed ke dalam iframe (faktor keamanan XSS/Clickjacking).</p>
                </div>

                <div className="xl:w-1/2 bg-[#2DD4BF] border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-center">
                  <h3 className="font-black text-black uppercase mb-4 text-center">Tampilan Embed (Simulasi)</h3>
                  <div className="bg-white border-4 border-black w-full h-48 overflow-hidden relative">
                    {/* Fake Wikipedia Header */}
                    <div className="w-full h-10 border-b-2 border-gray-300 flex items-center px-4 bg-[#f8f9fa] gap-3">
                      <div className="w-6 h-6 rounded-full bg-gray-400"></div>
                      <span className="font-serif font-bold text-gray-800">Wikipedia</span>
                      <div className="ml-auto w-24 h-5 bg-white border border-gray-300 rounded flex items-center justify-end px-1"><span className="material-symbols-outlined text-[10px] text-gray-400">search</span></div>
                    </div>
                    {/* Fake Content */}
                    <div className="p-4 space-y-2">
                      <div className="w-1/2 h-4 bg-gray-200"></div>
                      <div className="w-full h-3 bg-gray-100"></div>
                      <div className="w-full h-3 bg-gray-100"></div>
                      <div className="w-3/4 h-3 bg-gray-100"></div>
                    </div>
                  </div>
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
