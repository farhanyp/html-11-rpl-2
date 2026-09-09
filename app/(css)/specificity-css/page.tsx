"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import CodeBlock from '@/components/CodeBlock';

export default function SpecificityCSSPage() {
  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/specificity-css', isActive: true },
          { label: 'Soal Teori', href: '/specificity-css/soal', isActive: false }
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">

            <section className="bg-white border-4 border-black p-6 md:p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tighter uppercase mb-4 md:mb-6">
                4. Hirarki (Specificity)
              </h1>
              <p className="text-base md:text-xl font-bold text-black bg-[#2DD4BF] inline-block px-3 py-2 md:px-4 md:py-2 border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Pernah menulis kode CSS tapi tidak ada perubahan? Kemungkinan kodemu "kalah kasta".
              </p>
            </section>

            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 text-center">Urutan Kasta Terkuat hingga Terlemah</h2>
              
              <div className="space-y-4 mb-12 max-w-3xl mx-auto">
                <div className="bg-[#FF49DB] text-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-start md:items-center justify-between hover:scale-[1.02] transition-transform gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">🥇</span>
                    <h3 className="text-2xl font-black uppercase drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Inline Style</h3>
                  </div>
                  <code className="bg-white text-black px-2 py-1 border-2 border-black font-black">style="..."</code>
                </div>

                <div className="bg-[#2DD4BF] border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-start md:items-center justify-between hover:scale-[1.02] transition-transform ml-0 lg:ml-8 gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">🥈</span>
                    <h3 className="text-2xl font-black uppercase">ID Selector</h3>
                  </div>
                  <code className="bg-white text-black px-2 py-1 border-2 border-black font-black">#nama</code>
                </div>

                <div className="bg-[#FACC15] border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-start md:items-center justify-between hover:scale-[1.02] transition-transform ml-0 lg:ml-16 gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">🥉</span>
                    <h3 className="text-2xl font-black uppercase">Class Selector</h3>
                  </div>
                  <code className="bg-white text-black px-2 py-1 border-2 border-black font-black">.nama</code>
                </div>

                <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-start md:items-center justify-between hover:scale-[1.02] transition-transform ml-0 lg:ml-24 gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">🗿</span>
                    <h3 className="text-2xl font-black uppercase">Tag Selector</h3>
                  </div>
                  <code className="bg-[#F4F0EA] text-black px-2 py-1 border-2 border-black font-black">h1, p</code>
                </div>
              </div>

              {/* Conflict Example */}
              <div className="border-t-4 border-black border-dashed pt-12 mb-12">
                <h2 className="text-2xl md:text-3xl font-black text-black uppercase mb-6 flex items-center gap-3">
                  <span className="material-symbols-outlined text-4xl text-[#FF49DB]">swords</span>
                  Contoh Pertarungan CSS
                </h2>
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/2 space-y-4">
                    <p className="font-bold text-black/80 text-lg leading-relaxed">
                      Perhatikan kode di samping. Ada sebuah elemen <code className="bg-[#F4F0EA] px-1 border-2 border-black">&lt;h1&gt;</code> yang memiliki <code className="bg-[#F4F0EA] px-1 border-2 border-black">id="judul"</code> dan <code className="bg-[#F4F0EA] px-1 border-2 border-black">class="teks-utama"</code>.
                    </p>
                    <p className="font-bold text-black/80 text-lg leading-relaxed">
                      Lalu di CSS, kita memberikan warna yang berbeda untuk Tag, Class, dan ID. <strong className="bg-[#FACC15] px-1 border-2 border-black text-black">Warna apa yang akan muncul?</strong>
                    </p>
                    <div className="bg-[#2DD4BF] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-1 mt-6">
                      <p className="font-black text-xl text-black uppercase flex items-center gap-2">
                        <span className="material-symbols-outlined">celebration</span>
                        Pemenangnya: MERAH!
                      </p>
                      <p className="font-bold text-black/80 mt-2">Karena ID (<code className="bg-white px-1">#judul</code>) memiliki kasta tertinggi dibandingkan Class maupun Tag.</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2 space-y-4">
                    <div className="rotate-1 hover:rotate-0 transition-transform">
                      <CodeBlock 
                        language="html" 
                        code={`<h1 id="judul" class="teks-utama">
  Website Ku
</h1>`} 
                      />
                    </div>
                    <div className="-rotate-1 hover:rotate-0 transition-transform">
                      <CodeBlock 
                        language="css" 
                        code={`h1 { color: blue; }         /* Tag (Lemah) */
.teks-utama { color: green; } /* Class (Menengah) */
#judul { color: red; }        /* ID (Kuat!) */`} 
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* The Exceptions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-[#F4F0EA] border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-xl md:text-2xl font-black text-black uppercase mb-4 flex items-center gap-2"><span className="material-symbols-outlined text-[#FF49DB] text-3xl">find_replace</span> Aturan Cascading</h3>
                  <p className="text-base font-bold text-black/80 leading-relaxed mb-4">
                    Bagaimana jika spesifisitasnya <strong>sama kuat</strong>? (Misalnya sama-sama menggunakan nama class).
                  </p>
                  <p className="text-base font-bold text-black/80 leading-relaxed mb-6">
                    Maka kode yang ditulis <strong className="bg-[#FACC15] px-1 border-2 border-black text-black">paling bawah / terakhir</strong> yang akan menang, karena dibaca terakhir oleh browser!
                  </p>
                  <CodeBlock 
                    language="css" 
                    code={`.btn { color: blue; }
.btn { color: red; } /* Menang! */`} 
                  />
                </div>

                <div className="bg-[#1e1e1e] border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-white relative overflow-hidden">
                  <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-8xl text-white/10 rotate-12">warning</span>
                  <h3 className="text-xl md:text-2xl font-black uppercase mb-4 flex items-center gap-2 text-[#FF49DB]"><span className="material-symbols-outlined text-3xl">bolt</span> Senjata Pamungkas</h3>
                  <p className="text-base font-bold text-white/80 leading-relaxed mb-4">
                    Ada satu <em>cheat code</em> yang bisa mengalahkan kasta apapun bahkan Inline Style, yaitu:
                  </p>
                  <code className="block bg-black p-3 border-2 border-white font-mono font-black text-center text-[#2DD4BF] mb-4 text-xl">!important</code>
                  <p className="text-sm font-bold text-[#FACC15] leading-relaxed italic">
                    Gunakan ini hanya saat terdesak (misalnya menimpa desain bawaan dari library seperti Bootstrap), karena membuat kode sulit di-debug nantinya!
                  </p>
                </div>
              </div>

            </section>

            {/* Footer / Penutup */}
            <footer className="bg-[#FF49DB] border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined absolute -top-3 -right-3 md:-top-4 md:-right-4 text-4xl md:text-5xl text-black bg-white rounded-full border-2 md:border-4 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">balance</span>
              <p className="text-xl md:text-3xl font-black text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] uppercase leading-relaxed max-w-4xl mx-auto">
                "Pahami spesifisitas agar kamu tidak bingung kenapa warna elemenmu tidak mau berubah!"
              </p>
            </footer>

            <div className="h-12 w-full"></div>
          </div>
        </main>
      </div>
    </>
  );
}
