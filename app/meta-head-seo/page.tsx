"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import CodeBlock from '@/components/CodeBlock';

export default function MetaHeadSeoPage() {
  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/meta-head-seo', isActive: true },
          { label: 'Soal Teori', href: '/meta-head-seo/soal', isActive: false }
        ]}
      />
      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />
        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">

            {/* Header & Hero Section */}
            <section className="bg-[#2DD4BF] border-4 border-black p-5 md:p-10 lg:p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">
                Meta, HEAD & SEO
              </h1>
              <p className="text-base md:text-xl font-bold text-black bg-white inline-block px-4 py-2 md:px-6 md:py-3 border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Konfigurasi di Balik Layar yang Menentukan Nasib Websitemu di Google!
              </p>
            </section>

            {/* Section 1: Bagian <head> secara Detail */}
            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-5 md:p-10 lg:p-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#FF49DB] text-white w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">1</span>
                Anatomi Tag &lt;head&gt;
              </h2>
              
              <div className="mb-8">
                <p className="font-bold text-black/80 text-base md:text-lg mb-4 leading-relaxed">
                  Elemen <code>&lt;head&gt;</code> merupakan "otak" dari dokumen HTML. Segala sesuatu yang kita tulis di dalam sini tidak akan tampil langsung di halaman web (kecuali tag title). Bagian ini berfungsi untuk menyimpan metadata (data tentang data), memanggil file CSS eksternal, dan menginstruksikan browser bagaimana cara merender halaman tersebut.
                </p>
              </div>

              <div className="flex flex-col lg:flex-row gap-6 mb-8 items-stretch">
                <div className="lg:w-1/2 bg-[#F4F0EA] border-4 border-black p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-1deg] hover:rotate-0 transition-transform">
                  <h3 className="font-black text-2xl uppercase mb-4 text-black border-b-4 border-black pb-2 inline-block">Title, Link & Favicon</h3>
                  <ul className="space-y-4 font-bold text-black/80 text-sm leading-relaxed mb-4">
                    <li>
                      <strong className="text-black bg-[#FACC15] px-1 border-2 border-black">Title:</strong> Judul yang tampil di Tab Browser dan menjadi judul biru besar saat web dicari di Google. Idealnya panjang title tidak lebih dari 60 karakter agar tidak terpotong oleh Google.
                    </li>
                    <li>
                      <strong className="text-black bg-[#2DD4BF] px-1 border-2 border-black">Link Rel="Stylesheet":</strong> Cara paling umum untuk menghubungkan file CSS eksternal ke dalam kerangka HTML kita.
                    </li>
                    <li>
                      <strong className="text-white bg-[#FF49DB] px-1 border-2 border-black">Favicon:</strong> Menggunakan tag link khusus untuk menaruh ikon/logo kecil berukuran 32x32 pixel di samping judul tab browser.
                    </li>
                  </ul>
                </div>
                <div className="flex-1 min-w-0 bg-white border-4 border-black p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-center">
                  <CodeBlock 
                    language="html"
                    code={`<head>\n  <!-- Judul Tab/Web -->\n  <title>Belajar HTML - EduBrutal</title>\n\n  <!-- Menyambungkan CSS -->\n  <link rel="stylesheet" href="style.css">\n\n  <!-- Ikon Web (Favicon) -->\n  <link rel="icon" href="/favicon.png">\n</head>`}
                  />
                  <div className="mt-4 bg-[#e8eaed] border-2 border-gray-400 h-10 rounded-t-lg flex items-center px-2 gap-2 w-full max-w-sm mx-auto">
                    <div className="w-4 h-4 bg-[#FF49DB] rounded-sm flex items-center justify-center text-[10px] text-white font-black">E</div>
                    <span className="text-xs font-bold text-gray-700 font-sans truncate">Belajar HTML - EduBrutal</span>
                    <span className="material-symbols-outlined text-gray-500 text-xs ml-auto">close</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Meta Tags Wajib (Charset & Viewport) */}
            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-5 md:p-10 lg:p-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#FACC15] text-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">2</span>
                Meta Tag Wajib (Sistem)
              </h2>

              <p className="font-bold text-black/80 text-base md:text-lg mb-8 leading-relaxed">
                Di dalam <code>&lt;head&gt;</code>, terdapat tag <code>&lt;meta&gt;</code> tunggal yang bertugas memberikan perintah teknis kepada browser. Tanpa dua meta tag dasar ini, sebuah website akan mengalami kecacatan tampilan.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                
                {/* Charset */}
                <div className="bg-[#F4F0EA] border-4 border-black p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-4 min-w-0">
                  <div className="flex gap-4 items-center">
                    <span className="material-symbols-outlined text-4xl text-[#FF49DB]">language</span>
                    <h3 className="font-black text-xl uppercase">Meta Charset (Encoding)</h3>
                  </div>
                  <CodeBlock language="html" code={`<meta charset="UTF-8">`} />
                  <p className="font-bold text-sm text-black/80 leading-relaxed">
                    Menentukan format terjemahan karakter (Character Encoding) dokumen HTML. Sering melihat huruf berubah jadi tanda tanya hitam ()? Itu karena komputernya tidak mengenali huruf tersebut. Dengan <strong>UTF-8</strong>, kita mengizinkan browser membaca semua alfabet di bumi, huruf Arab, Kanji, hingga seluruh Emoji 🚀 tanpa ada yang error ().
                  </p>
                </div>

                {/* Viewport */}
                <div className="bg-[#F4F0EA] border-4 border-black p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-4 min-w-0">
                  <div className="flex gap-4 items-center">
                    <span className="material-symbols-outlined text-4xl text-[#2DD4BF]">smartphone</span>
                    <h3 className="font-black text-xl uppercase">Meta Viewport (Mobile)</h3>
                  </div>
                  <CodeBlock language="html" code={`<meta name="viewport" content="width=device-width, initial-scale=1.0">`} />
                  <p className="font-bold text-sm text-black/80 leading-relaxed">
                    Sistem <strong>Responsive Web Design</strong> bergantung sepenuhnya pada baris kode ini.
                    <br/><br/>
                    • <code>width=device-width</code>: Memaksa lebar website mengikuti lebar fisik layar (HP/Tablet).<br/>
                    • <code>initial-scale=1.0</code>: Mengatur tingkat zoom bawaan ke angka 1 (tidak di-zoom in/out).
                  </p>
                </div>
                
              </div>
            </section>

            {/* Section 3: Meta SEO & Social Media Lanjutan */}
            <section className="bg-[#FF49DB] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-5 md:p-10 lg:p-12 rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-white uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                <span className="bg-[#4ade80] text-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">3</span>
                Meta Tag Tingkat Lanjut (SEO & Sosmed)
              </h2>

              <p className="font-bold text-white/90 text-base md:text-lg mb-8 leading-relaxed max-w-3xl">
                Bagian ini adalah kunci agar website kamu mudah ditemukan di Google (Search Engine Optimization) dan tampil menarik saat link-nya dibagikan (WhatsApp, Twitter, Facebook).
              </p>

              <div className="flex flex-col xl:flex-row gap-8 items-start">
                
                {/* Meta SEO Lengkap */}
                <div className="flex-1 space-y-6 min-w-0">
                  
                  {/* Standard SEO */}
                  <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black uppercase mb-1 flex items-center gap-2"><span className="material-symbols-outlined text-black">search</span> 1. SEO Standar (Google)</h4>
                    <p className="font-bold text-black/70 text-sm mb-2"><code>description</code> adalah paragraf abu-abu yang muncul di bawah judul di hasil pencarian Google. Usahakan panjangnya sekitar 150-160 karakter agar tak terpotong titik-titik (...). Sedangkan <code>keywords</code> saat ini sudah mulai diabaikan Google, tetapi masih ada bot pencari lain yang membacanya.</p>
                    <CodeBlock language="html" code={`<!-- Deskripsi ringkas untuk Google -->\n<meta name="description" content="Tutorial HTML terlengkap. Belajar ngoding web dari nol sampai bisa dengan desain Brutalism.">\n\n<!-- Penulis Website -->\n<meta name="author" content="Tim EduBrutal">\n\n<!-- Kata kunci (Opsional/Jarang dipakai) -->\n<meta name="keywords" content="html, belajar web, rpl, coding">`} />
                  </div>

                  {/* Open Graph (Facebook/WA) */}
                  <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black uppercase mb-1 flex items-center gap-2"><span className="material-symbols-outlined text-[#1877F2]">thumb_up</span> 2. Open Graph (Facebook & WhatsApp)</h4>
                    <p className="font-bold text-black/70 text-sm mb-2">Dikembangkan oleh Facebook, atribut <code>property="og:..."</code> bertugas memberikan judul, deskripsi, dan <strong>Thumbnail Gambar</strong> saat sebuah link dikirim ke kolom chat WhatsApp atau FB.</p>
                    <CodeBlock language="html" code={`<meta property="og:type" content="website">\n<meta property="og:title" content="WebPoint HTML">\n<meta property="og:description" content="Belajar HTML paling seru.">\n<meta property="og:url" content="https://edubrutal.com/html">\n<meta property="og:image" content="https://edubrutal.com/thumbnail-sosmed.png">`} />
                  </div>
                  
                  {/* Twitter Cards */}
                  <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black uppercase mb-1 flex items-center gap-2"><span className="material-symbols-outlined text-[#1DA1F2]">chat</span> 3. Twitter Cards</h4>
                    <p className="font-bold text-black/70 text-sm mb-2">Twitter memiliki sistem tag-nya sendiri <code>name="twitter:..."</code> untuk memunculkan gambar besar (*summary_large_image*) saat link di-tweet.</p>
                    <CodeBlock language="html" code={`<meta name="twitter:card" content="summary_large_image">\n<meta name="twitter:title" content="WebPoint HTML">\n<meta name="twitter:image" content="https://edubrutal.com/thumbnail-twitter.png">`} />
                  </div>

                </div>

                {/* Simulasi Google Card */}
                <div className="w-full xl:w-1/3 space-y-6">
                  {/* Google Preview */}
                  <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black uppercase text-center mb-4 border-b-2 border-black pb-2 text-black">Simulasi di Google</h4>
                    <div className="font-sans">
                      <p className="text-[11px] text-gray-800 mb-1 break-all">https://www.edubrutal.com</p>
                      <h3 className="text-lg text-[#1a0dab] font-normal hover:underline cursor-pointer mb-1 line-clamp-2">Belajar HTML - EduBrutal</h3>
                      <p className="text-sm text-[#4d5156] leading-snug">
                        Tutorial HTML terlengkap. Belajar ngoding web dari nol sampai bisa dengan desain Brutalism.
                      </p>
                    </div>
                  </div>
                  
                  {/* WhatsApp/Open Graph Preview */}
                  <div className="bg-[#e5ddd5] border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col relative overflow-hidden h-52 justify-center rounded-xl">
                    {/* Chat Bubble (Mockup) */}
                    <div className="bg-white p-2 rounded-lg max-w-[85%] self-end shadow-sm border border-gray-200">
                      <div className="bg-gray-100 rounded overflow-hidden">
                        {/* Fake image from og:image */}
                        <div className="h-20 bg-cover bg-center bg-[#FACC15] flex items-center justify-center">
                          <span className="font-black text-black tracking-widest text-lg drop-shadow-[1px_1px_0px_rgba(255,255,255,1)]">EDUBRUTAL</span>
                        </div>
                        <div className="p-2 border-t border-gray-200">
                          {/* Fake title from og:title */}
                          <h5 className="font-bold text-[13px] text-gray-800 line-clamp-1">WebPoint HTML</h5>
                          {/* Fake description from og:description */}
                          <p className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">Belajar HTML paling seru.</p>
                          {/* Fake url from og:url */}
                          <p className="text-[10px] text-gray-400 mt-0.5">edubrutal.com</p>
                        </div>
                      </div>
                      <p className="text-[13px] text-gray-800 mt-1">Nih cek link belajarnya!</p>
                      <span className="text-[9px] text-gray-400 float-right mt-1">10:45 AM</span>
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
