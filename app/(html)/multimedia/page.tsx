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
        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-canvas relative" style={{ backgroundImage: 'radial-gradient(var(--color-outline) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">

            {/* Header & Hero Section */}
            <section className="bg-white border-4 border-black p-6 md:p-12 shadow-neo-xl text-center relative overflow-hidden transform rotate-1 hover:rotate-0 transition-transform">
              <div className="absolute top-0 left-0 bg-jade-vibrant text-white font-black px-4 py-1 border-b-4 border-r-4 border-black shadow-neo-sm">
                MATERI 09
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-black tracking-tighter uppercase mt-6 mb-4 md:mb-6">
                Multimedia & Embed
              </h1>
              <p className="text-base md:text-xl font-bold text-white bg-forest-teal inline-block px-4 py-2 md:px-6 md:py-3 border-4 border-black mb-4 md:mb-6 shadow-neo-md uppercase tracking-tight">
                Menambahkan Video, Audio, dan Konten dari Website Lain!
              </p>
            </section>

            {/* Section 1: Memasukkan Video & Audio */}
            <section className="bg-white border-4 border-black shadow-neo-xl p-6 md:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-mint-soft text-black w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">01</span>
                HTML Video & Audio
              </h2>

              <div className="mb-10 bg-mint-canvas border-4 border-black p-6 shadow-neo-sm">
                <p className="font-bold text-forest-teal text-lg md:text-xl leading-relaxed">
                  Di masa HTML5, kita <strong className="text-black uppercase underline decoration-4 decoration-jade-vibrant">tidak lagi butuh</strong> plugin pihak ketiga (seperti Flash Player jadul) untuk memutar video atau lagu. HTML modern sudah menyediakan tag native (bawaan) yang super ngebut: <code className="bg-white px-2 py-1 border-2 border-black text-black">&lt;video&gt;</code> dan <code className="bg-white px-2 py-1 border-2 border-black text-black">&lt;audio&gt;</code>. Keduanya membutuhkan atribut sakti <strong className="bg-jade-vibrant text-white px-2 py-1 border-2 border-black uppercase tracking-widest font-black shadow-neo-sm ml-1">controls</strong> agar tombol <em>Play</em> dan pengatur suara muncul di layar!
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-10">

                {/* Audio */}
                <div className="border-4 border-black shadow-neo-md bg-canvas flex flex-col hover:-translate-y-2 hover:shadow-neo-lg transition-transform cursor-default">
                  <div className="bg-pine-deep border-b-4 border-black p-4 md:p-6">
                    <h3 className="font-black text-2xl uppercase text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] flex items-center gap-3">
                      <span className="material-symbols-outlined text-4xl">music_note</span> Tag &lt;audio&gt;
                    </h3>
                  </div>
                  <div className="p-6 md:p-8 flex-1">
                    <p className="text-base font-bold text-forest-teal mb-6 bg-white border-4 border-black p-4 shadow-neo-sm">Gunakan format file umum masa kini seperti <code className="text-black">.mp3</code> atau <code className="text-black">.ogg</code>.</p>
                    <div className="border-4 border-black mb-6">
                      <CodeBlock
                        language="html"
                        code={`<!-- controls memunculkan UI putar -->\n<audio controls>\n  <source src="lagu.mp3" type="audio/mpeg">\n  Ganti browsermu kocak.\n</audio>`}
                      />
                    </div>
                  </div>
                  <div className="bg-white border-t-4 border-black p-6 font-bold">
                    <p className="mb-4 font-black uppercase text-sm tracking-widest text-forest-teal border-b-2 border-black pb-1 inline-block">Mockup Player:</p>
                    {/* Dummy Audio Player Brutalist */}
                    <div className="bg-mint-canvas border-4 border-black h-16 flex items-center px-4 gap-4 shadow-neo-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-transform cursor-pointer">
                      <div className="w-10 h-10 bg-jade-vibrant border-2 border-black rounded-full flex items-center justify-center shadow-[2px_2px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-[2px]">
                        <span className="material-symbols-outlined text-white text-xl font-black">play_arrow</span>
                      </div>
                      <div className="flex-1 h-3 border-2 border-black bg-white rounded-full relative overflow-hidden">
                        <div className="absolute top-0 left-0 h-full w-[45%] bg-pine-deep border-r-2 border-black"></div>
                      </div>
                      <span className="font-black text-sm text-black bg-white px-2 py-1 border-2 border-black">1:03</span>
                    </div>
                  </div>
                </div>

                {/* Video */}
                <div className="border-4 border-black shadow-neo-md bg-canvas flex flex-col hover:-translate-y-2 hover:shadow-neo-lg transition-transform cursor-default">
                  <div className="bg-jade-vibrant border-b-4 border-black p-4 md:p-6">
                    <h3 className="font-black text-2xl uppercase text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] flex items-center gap-3">
                      <span className="material-symbols-outlined text-4xl">movie</span> Tag &lt;video&gt;
                    </h3>
                  </div>
                  <div className="p-6 md:p-8 flex-1">
                    <p className="text-base font-bold text-forest-teal mb-6 bg-white border-4 border-black p-4 shadow-neo-sm">Gunakan format <code className="text-black">.mp4</code> atau <code className="text-black">.webm</code>. Atribut lebar & tinggi bisa di set via HTML.</p>
                    <div className="border-4 border-black mb-6">
                      <CodeBlock
                        language="html"
                        code={`<video width="320" height="240" controls>\n  <source src="film.mp4" type="video/mp4">\n  Browser kamu busuk.\n</video>`}
                      />
                    </div>
                  </div>
                  <div className="bg-white border-t-4 border-black p-6 font-bold flex-1 flex flex-col justify-end">
                    <p className="mb-4 font-black uppercase text-sm tracking-widest text-forest-teal border-b-2 border-black pb-1 inline-block">Mockup Player:</p>
                    {/* Dummy Video Player Brutalist */}
                    <div className="bg-black w-full aspect-video border-4 border-black relative flex items-center justify-center shadow-neo-sm overflow-hidden group cursor-pointer">
                      <div className="absolute inset-0 bg-pine-deep opacity-20 group-hover:opacity-40 transition-opacity"></div>
                      <div className="w-16 h-16 bg-white border-4 border-black rounded-full flex items-center justify-center shadow-neo-sm z-10 group-hover:scale-110 group-active:scale-95 transition-transform">
                        <span className="material-symbols-outlined text-black text-4xl ml-1">play_arrow</span>
                      </div>
                      <div className="absolute bottom-0 w-full h-12 bg-white border-t-4 border-black flex items-center px-4 gap-4 translate-y-full group-hover:translate-y-0 transition-transform">
                        <span className="material-symbols-outlined text-black font-black text-xl hover:text-jade-vibrant">pause</span>
                        <div className="flex-1 h-3 bg-canvas border-2 border-black rounded-full relative overflow-hidden">
                          <div className="h-full w-1/4 bg-jade-vibrant border-r-2 border-black"></div>
                        </div>
                        <span className="font-black text-xs text-black">10:42</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="bg-forest-teal border-4 border-black p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start shadow-neo-md text-white">
                <span className="material-symbols-outlined text-6xl text-mint-soft drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">tips_and_updates</span>
                <div>
                  <h4 className="font-black text-2xl uppercase mb-3 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] text-mint-soft">Autoplay & Looping</h4>
                  <p className="font-bold text-white text-base md:text-lg leading-relaxed bg-black p-4 border-4 border-mint-soft">
                    Biar makin estetik layaknya background website keren, kamu bisa menambahkan atribut <code className="text-jade-vibrant">autoplay</code> (memutar otomatis) dan <code className="text-jade-vibrant">loop</code> (mengulang tanpa henti). Contoh: <code className="text-white bg-pine-deep px-2 py-1 font-mono">&lt;video autoplay loop muted&gt;</code>.<br /><br />
                    <span className="text-mint-soft uppercase tracking-widest font-black text-sm">* SYARAT MUTLAK:</span> Browser modern mewajibkan atribut <code className="bg-jade-vibrant text-white px-2 py-1 font-black">muted</code> (dibisukan) agar <em>autoplay video</em> diizinkan jalan!
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Embed Website Lain (Iframe) */}
            <section className="bg-white border-4 border-black shadow-neo-xl p-6 md:p-12 transform -rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-jade-vibrant text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">02</span>
                Iframe (Jendela Ajaib)
              </h2>

              <p className="font-bold text-forest-teal text-lg md:text-xl mb-10 leading-relaxed bg-mint-canvas p-6 border-4 border-black shadow-neo-sm">
                Gimana sih cara masukin video YouTube, playlist Spotify, atau peta Google Maps ke website kita sendiri? Jawabannya: <strong className="text-black uppercase">Inline Frame</strong> atau <code className="bg-white px-2 py-1 border-2 border-black text-black font-black">&lt;iframe&gt;</code>. Iframe itu ibarat membuat "lubang jendela" ajaib di website kita agar bisa mengintip dan nampilin halaman dari website orang lain!
              </p>

              <div className="border-4 border-black shadow-neo-md bg-canvas mb-10 hover:-translate-y-2 hover:shadow-neo-lg transition-transform">
                <div className="p-6 md:p-8">
                  <h3 className="font-black text-2xl uppercase mb-6 flex items-center gap-3 border-b-4 border-black pb-2 text-black"><span className="material-symbols-outlined text-4xl text-pine-deep">code_blocks</span> Anatomi Atribut Iframe</h3>
                  <ul className="space-y-6 font-bold text-forest-teal text-lg">
                    <li className="flex flex-col sm:flex-row gap-3 sm:items-center">
                      <span className="bg-white text-black font-black uppercase tracking-widest px-3 py-2 border-4 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] self-start sm:self-auto">src="..."</span>
                      <p className="mt-1 sm:mt-0 bg-white border-4 border-black p-3 flex-1 shadow-neo-sm">Menentukan link/URL target yang mau ditampilkan di dalam jendela.</p>
                    </li>
                    <li className="flex flex-col sm:flex-row gap-3 sm:items-center">
                      <span className="bg-white text-black font-black uppercase tracking-widest px-3 py-2 border-4 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] self-start sm:self-auto">title="..."</span>
                      <p className="mt-1 sm:mt-0 bg-white border-4 border-black p-3 flex-1 shadow-neo-sm">Deskripsi tentang isi iframe (sangat <strong className="text-black">wajib untuk aksesibilitas & SEO</strong>).</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col xl:flex-row gap-8 lg:gap-10 items-stretch">
                <div className="flex-1 bg-black border-4 border-black p-1 shadow-neo-lg flex flex-col">
                  <div className="bg-mint-soft border-b-4 border-black p-4 font-black text-xl uppercase text-black">Kode Integrasi</div>
                  <div className="flex-grow">
                    <CodeBlock
                      language="html"
                      code={`<!-- Contoh Memasukkan Halaman Web -->\n<iframe \n  src="https://id.wikipedia.org/" \n  title="Wikipedia Indonesia"\n  width="100%" \n  height="300">\n</iframe>`}
                    />
                  </div>
                  <div className="bg-white border-t-4 border-black p-4">
                    <p className="text-sm font-bold text-forest-teal bg-mint-canvas border-4 border-black p-3"><strong className="text-black uppercase">Peringatan Keras:</strong><br />Tidak semua website (seperti google.com biasa) mengizinkan webnya di-embed oleh web lain karena alasan keamanan <em>XSS/Clickjacking</em>.</p>
                  </div>
                </div>

                <div className="xl:w-1/2 bg-pine-deep border-4 border-black p-6 md:p-8 shadow-neo-lg flex flex-col justify-center hover:scale-[1.02] transition-transform">
                  <h3 className="font-black text-white text-2xl uppercase mb-6 text-center drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Tampilan Embed (Simulasi)</h3>
                  <div className="bg-white border-4 border-black w-full h-56 md:h-64 overflow-hidden relative shadow-neo-sm">
                    {/* Fake Wikipedia Header */}
                    <div className="w-full h-12 border-b-4 border-black flex items-center px-4 bg-canvas gap-4">
                      <div className="w-7 h-7 rounded-none border-2 border-black bg-white flex items-center justify-center font-serif font-black text-sm">W</div>
                      <span className="font-serif font-black text-black text-lg tracking-tight">Wikipedia</span>
                      <div className="ml-auto w-24 h-7 bg-white border-2 border-black flex items-center justify-end px-2 shadow-[2px_2px_0px_rgba(0,0,0,1)]"><span className="material-symbols-outlined text-[14px] text-black font-black">search</span></div>
                    </div>
                    {/* Fake Content Brutalist */}
                    <div className="p-6 space-y-4">
                      <div className="w-3/4 h-8 bg-black"></div>
                      <div className="space-y-3 mt-6">
                        <div className="w-full h-3 bg-mint-canvas border-b-2 border-black"></div>
                        <div className="w-full h-3 bg-mint-canvas border-b-2 border-black"></div>
                        <div className="w-5/6 h-3 bg-mint-canvas border-b-2 border-black"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="mt-16 mb-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t-4 border-black pt-8">
              <p className="font-black text-sm md:text-base uppercase tracking-widest text-forest-teal bg-white border-4 border-black px-4 py-2 shadow-neo-sm text-center md:text-left">
                © 2026 FARHAN YUDHA PRATAMA
              </p>
            </footer>
          </div>
        </main>
      </div>
    </>
  );
}
