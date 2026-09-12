"use client";

import Link from 'next/link';
import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';

export default function WebServerApachePage() {
  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/mengenal-web-server-apache', isActive: true },
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-canvas relative" style={{ backgroundImage: 'radial-gradient(var(--color-outline) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          <div className="max-w-5xl mx-auto font-sans">
      {/* Hero Section */}
      <section className="mb-12 border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000] p-6 md:p-12 relative overflow-hidden">
        <div className="absolute top-4 right-4 bg-pine-deep text-white font-black uppercase tracking-tight border-4 border-black px-4 py-2 rotate-2 shadow-[4px_4px_0px_0px_#000]">
          Materi Pokok 4
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black mb-6 mt-8">
          Web Server <span className="text-jade-vibrant">& Apache</span>
        </h1>
        
        <p className="text-lg md:text-xl font-bold text-black max-w-4xl leading-relaxed border-l-8 border-jade-vibrant pl-6 bg-mint-canvas p-4 border-4 border-black shadow-[4px_4px_0px_0px_#000]">
          Mengapa file HTML bisa langsung dibuka, sedangkan file PHP selalu gagal atau malah menampilkan teks kode yang aneh di layar? Di sinilah kita butuh pahlawan bernama <strong>Web Server</strong>!
        </p>
      </section>

      {/* The Problem Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000] p-6 md:p-8 hover:-translate-y-2 transition-transform duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-[#E44D26] text-white p-4 border-4 border-black shadow-[4px_4px_0px_0px_#000]">
              <span className="material-symbols-outlined text-4xl">html</span>
            </div>
            <h2 className="text-2xl font-black uppercase tracking-tight text-black">Klik Ganda HTML</h2>
          </div>
          <p className="font-bold text-black text-lg mb-4">
            Pernahkah kamu membuat file <code>index.html</code>, lalu di-klik ganda (double-click)?
          </p>
          <div className="bg-canvas border-4 border-black p-4 shadow-[4px_4px_0px_0px_#000]">
            <p className="font-medium text-black">
              File itu langsung terbuka <strong>sempurna</strong> di Google Chrome! Chrome langsung paham cara menampilkan tombol, gambar, dan warna dari HTML & CSS kamu.
            </p>
          </div>
        </div>

        <div className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000] p-6 md:p-8 hover:-translate-y-2 transition-transform duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-[#777BB4] text-white p-4 border-4 border-black shadow-[4px_4px_0px_0px_#000]">
              <span className="material-symbols-outlined text-4xl">php</span>
            </div>
            <h2 className="text-2xl font-black uppercase tracking-tight text-black">Klik Ganda PHP?</h2>
          </div>
          <p className="font-bold text-black text-lg mb-4">
            Tapi, coba klik ganda file <code>index.php</code>... <span className="text-red-600">GAGAL!</span>
          </p>
          <div className="bg-[#ffdddd] border-4 border-black p-4 shadow-[4px_4px_0px_0px_#000]">
            <p className="font-bold text-black">
              <strong>Kenapa?</strong> Karena Browser (seperti Chrome) itu sangat "bodoh" dalam hal logika. Browser <strong>TIDAK BISA</strong> membaca kode PHP, dan browser <strong>TIDAK TAHU</strong> cara mengambil data dari Database MySQL!
            </p>
          </div>
        </div>
      </div>

      {/* The Solution Section */}
      <div className="bg-pine-deep border-4 border-black shadow-[8px_8px_0px_0px_#000] p-6 md:p-10 mb-12">
        <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-8 flex items-center gap-4">
          <span className="material-symbols-outlined text-5xl bg-white text-black p-2 border-4 border-black shadow-[4px_4px_0px_0px_#000]">security</span>
          Solusinya: Web Server!
        </h2>
        
        <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_#000]">
          <p className="text-xl font-bold text-black mb-6 border-b-4 border-black pb-4">
            Web Server adalah sebuah <em>software</em> (aplikasi penjaga pintu) yang sangat pintar. Ia bertugas mendengarkan <em>Request</em> (pesanan) dari browser.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-mint-canvas border-4 border-black p-5 shadow-[4px_4px_0px_0px_#000] relative">
              <div className="absolute -top-4 -left-4 bg-black text-white w-8 h-8 flex items-center justify-center font-black border-2 border-black">1</div>
              <h3 className="font-black uppercase text-lg text-black mb-2 mt-2">Mencegat Request</h3>
              <p className="font-medium text-black">Jika browser meminta file PHP, Web Server <strong>tidak</strong> akan langsung memberikannya ke browser (karena browser pasti bingung).</p>
            </div>
            
            <div className="bg-jade-vibrant border-4 border-black p-5 shadow-[4px_4px_0px_0px_#000] relative text-white">
              <div className="absolute -top-4 -left-4 bg-white text-black w-8 h-8 flex items-center justify-center font-black border-2 border-black">2</div>
              <h3 className="font-black uppercase text-lg mb-2 mt-2">Mengolah Kode</h3>
              <p className="font-medium">Web Server menyuruh "Mesin PHP" untuk menjalankan logika kode tersebut dan mengambil data dari Database MySQL.</p>
            </div>
            
            <div className="bg-mint-soft border-4 border-black p-5 shadow-[4px_4px_0px_0px_#000] relative">
              <div className="absolute -top-4 -left-4 bg-black text-white w-8 h-8 flex items-center justify-center font-black border-2 border-black">3</div>
              <h3 className="font-black uppercase text-lg text-black mb-2 mt-2">Mengubah ke HTML</h3>
              <p className="font-medium text-black">Hasil olahan yang ribet itu "disulap" menjadi kode HTML biasa. Barulah HTML yang sudah matang ini dikirim ke Browser!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Apache Spotlight */}
      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] p-8 mb-12 flex flex-col md:flex-row items-center gap-8 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#000] transition-all">
        <div className="bg-forest-teal text-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_#000] rotate-2">
          <span className="material-symbols-outlined text-7xl block text-center">lightbulb</span>
        </div>
        <div>
          <h2 className="text-3xl font-black uppercase tracking-tight text-black mb-2">Halo, Apache!</h2>
          <p className="text-xl font-bold text-black bg-mint-canvas p-4 border-l-4 border-black">
            <strong>Apache</strong> adalah salah satu <em>software</em> Web Server yang paling terkenal dan legendaris di dunia web. Nantinya, kamu akan sering menyalakan "Apache" ini saat membuat web dengan PHP.
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col md:flex-row justify-between gap-6 mt-12">
        <Link 
          href="/anatomi-url-alamat-web" 
          className="bg-white border-4 border-black py-4 px-6 font-black uppercase tracking-tight text-black flex items-center justify-center gap-3 shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
        >
          <span className="material-symbols-outlined font-black">arrow_back</span>
          Sebelumnya: Anatomi URL
        </Link>
        <Link 
          href="/metode-komunikasi-http-kata-kerja-web" 
          className="bg-pine-deep border-4 border-black py-4 px-6 font-black uppercase tracking-tight text-white flex items-center justify-center gap-3 shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
        >
          Selanjutnya: Metode Komunikasi HTTP
          <span className="material-symbols-outlined font-black">arrow_forward</span>
        </Link>
      </div>

          </div>
        </main>
      </div>
    </>
  );
}
