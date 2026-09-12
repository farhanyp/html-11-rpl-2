"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

export default function ProjectCrudPage() {
  const [isDeploying, setIsDeploying] = useState(false);

  return (
    <>
      <Headbar
        links={[
          { label: 'Proyek Akhir', href: '/project-crud-buku-tamu', isActive: true },
          { label: 'Kumpulkan Karya', href: '/project-crud-buku-tamu/kumpulkan', isActive: false }
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-canvas relative" style={{ backgroundImage: 'radial-gradient(var(--color-outline) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">

            {/* Header & Hero Section */}
            <section className="bg-black border-4 border-black p-6 md:p-12 shadow-neo-xl text-center relative overflow-hidden text-white">
              <div className="absolute top-0 left-0 bg-[#FFD700] text-black font-black px-4 py-1 border-b-4 border-r-4 border-black shadow-neo-sm z-20 uppercase">
                Final Project PHP
              </div>
              <div className="absolute -bottom-10 -right-10 z-0">
                <span className="material-symbols-outlined text-[150px] md:text-[250px] text-white opacity-20 transform rotate-12">menu_book</span>
              </div>
              
              <div className="relative z-10 pt-8">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#FFD700] tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[4px_4px_0px_rgba(255,255,255,0.2)]">
                  Proyek Puncak: <br className="hidden md:block" /> Buku Tamu Dinamis
                </h1>
                <p className="text-base md:text-xl font-bold text-black bg-white inline-block px-4 py-2 md:px-6 md:py-3 border-4 border-black mb-8 md:mb-10 shadow-neo-md uppercase tracking-tight">
                  Waktunya menghidupkan portofoliomu!
                </p>
                <div>
                  <button
                    onClick={() => setIsDeploying(!isDeploying)}
                    className="bg-jade-vibrant text-white font-black text-xl md:text-3xl px-8 py-5 md:px-12 md:py-6 border-4 border-white shadow-neo-lg hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_#FFF] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all uppercase tracking-widest flex items-center gap-4 mx-auto"
                  >
                    {isDeploying ? (
                      <><span>Aplikasi Mengudara!</span> <span className="material-symbols-outlined font-black text-4xl animate-bounce">rocket_launch</span></>
                    ) : (
                      <><span>Mulai Eksekusi CRUD</span> <span className="material-symbols-outlined font-black text-4xl">play_circle</span></>
                    )}
                  </button>
                </div>
              </div>
            </section>

            {/* Section A: CREATE */}
            <section className="bg-white border-4 border-black shadow-neo-xl p-6 md:p-12 rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-[#2965F1] text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">A</span>
                CREATE (Menyimpan)
              </h2>

              <p className="text-lg md:text-xl font-bold text-forest-teal leading-relaxed mb-6">
                Ini adalah kode PHP rahasia yang bertugas menangkap kiriman dari Form HTML, lalu memasukkannya ke dalam Kulkas MySQL menggunakan perintah <code className="bg-mint-soft px-1 border border-black">INSERT INTO</code>.
              </p>

              <div className="bg-black border-4 border-black shadow-[8px_8px_0px_0px_#000] font-mono text-sm md:text-base overflow-x-auto">
                <div className="bg-gray-800 text-white p-2 border-b-2 border-gray-600 font-bold px-4">
                  proses_simpan.php
                </div>
                <div className="p-6 bg-gray-900 leading-relaxed">
                  <span className="text-[#2965F1] font-black text-xl">{"<?php"}</span> <br/>
                  <span className="text-blue-300">include</span> <span className="text-green-400">'koneksi.php'</span>; <span className="text-gray-500">{"// 1. Panggil jembatannya"}</span><br/><br/>

                  <span className="text-[#2965F1] font-black">if</span> (<span className="text-blue-300">isset</span>(<span className="text-pink-400">$_POST</span>[<span className="text-yellow-300">'tombol_kirim'</span>])) {"{"} <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">$nama</span>  = <span className="text-pink-400">$_POST</span>[<span className="text-yellow-300">'nama'</span>];<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">$pesan</span> = <span className="text-pink-400">$_POST</span>[<span className="text-yellow-300">'pesan'</span>];<br/><br/>

                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">{"// 2. Mencegah input kosong (Keamanan Dasar)"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#2965F1] font-black">if</span> (<span className="text-blue-300">$nama</span> != <span className="text-green-400">""</span> && <span className="text-blue-300">$pesan</span> != <span className="text-green-400">""</span>) {"{"} <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">{"// 3. Menitipkan pesan ke MySQL lewat Jembatan"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">mysqli_query</span>(<span className="text-blue-300">$koneksi</span>, <span className="text-green-400">"INSERT INTO buku_tamu (nama, pesan) VALUES ('<span className="text-white">$nama</span>', '<span className="text-white">$pesan</span>')"</span>);<br/><br/>

                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">{"// 4. Lemparkan pengunjung kembali ke halaman depan"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">header</span>(<span className="text-green-400">"Location: index.php"</span>);<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;{"}"} <br/>
                  {"}"} <br/>
                  <span className="text-[#2965F1] font-black text-xl">{"?>"}</span>
                </div>
              </div>
            </section>

            {/* Section B: READ */}
            <section className="bg-mint-soft border-4 border-black shadow-neo-xl p-6 md:p-12 -rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-jade-vibrant text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">B</span>
                READ (Menampilkan)
              </h2>

              <p className="text-lg font-bold text-black mb-6 bg-white p-4 border-4 border-black">
                Bagian ini diletakkan langsung di dalam <code>index.php</code> (tepat di tempat kamu mendesain kotak pesan HTML-mu).
              </p>

              <div className="bg-black border-4 border-black shadow-[8px_8px_0px_0px_#000] font-mono text-sm md:text-base overflow-x-auto relative z-10">
                <div className="bg-gray-800 text-white p-2 border-b-2 border-gray-600 font-bold px-4">
                  index.php
                </div>
                <div className="p-6 bg-gray-900 leading-relaxed">
                  <span className="text-blue-600">{"<div"}</span> <span className="text-purple-400">class=</span><span className="text-green-400">"wadah-pesan"</span><span className="text-blue-600">{">"}</span><br/>
                  
                  <div className="border-l-4 border-[#2965F1] pl-4 my-2">
                    <span className="text-[#2965F1] font-black text-xl">{"<?php"}</span><br/>
                    <span className="text-blue-300">include</span> <span className="text-green-400">'koneksi.php'</span>;<br/>
                    <span className="text-gray-500">{"// Ambil semua pesan, urutkan dari yang terbaru (DESC)"}</span><br/>
                    <span className="text-blue-300">$ambil_data</span> = <span className="text-blue-300">mysqli_query</span>(<span className="text-blue-300">$koneksi</span>, <span className="text-green-400">"SELECT * FROM buku_tamu ORDER BY id DESC"</span>);<br/><br/>
                    
                    <span className="text-gray-500">{"// Ulangi / cetak kotak HTML selama masih ada pesan di laci!"}</span><br/>
                    <span className="text-[#2965F1] font-black">while</span>(<span className="text-blue-300">$tamu</span> = <span className="text-blue-300">mysqli_fetch_assoc</span>(<span className="text-blue-300">$ambil_data</span>)) {"{"} <br/>
                    <span className="text-[#2965F1] font-black text-xl">{"?>"}</span> <span className="text-gray-500">{"// TUTUP DULU PULAU PHP-NYA!"}</span>
                  </div>

                  <div className="pl-8 my-2 border-l-4 border-[#E34F26]">
                    <span className="text-gray-500">{"<!-- Ini pulau HTML biasa, tapi dicetak berulang-ulang -->"}</span><br/>
                    <span className="text-blue-600">{"<div"}</span> <span className="text-purple-400">class=</span><span className="text-green-400">"kotak-pesan"</span><span className="text-blue-600">{">"}</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">{"<h4>"}</span> <span className="bg-[#2965F1] text-white px-1">{"<?php echo $tamu['nama']; ?>"}</span> <span className="text-blue-600">{"</h4>"}</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">{"<p>"}</span> <span className="bg-[#2965F1] text-white px-1">{"<?php echo $tamu['pesan']; ?>"}</span> <span className="text-blue-600">{"</p>"}</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">{"<a"}</span> <span className="text-purple-400">href=</span><span className="text-green-400">"hapus.php?id=<span className="bg-[#2965F1] text-white px-1">{"<?php echo $tamu['id']; ?>"}</span>"</span><span className="text-blue-600">{">"}</span>Hapus<span className="text-blue-600">{"</a>"}</span><br/>
                    <span className="text-blue-600">{"</div>"}</span>
                  </div>

                  <div className="border-l-4 border-[#2965F1] pl-4 my-2">
                    <span className="text-[#2965F1] font-black text-xl">{"<?php"}</span> <br/>
                    {"}"} <span className="text-gray-500">{"// Buka pulau PHP lagi HANYA untuk menutup kurung kurawal looping!"}</span><br/>
                    <span className="text-[#2965F1] font-black text-xl">{"?>"}</span>
                  </div>

                  <span className="text-blue-600">{"</div>"}</span>
                </div>
              </div>
              
              <div className="mt-8 bg-[#FFD700] border-4 border-black p-4 shadow-neo-sm transform rotate-1">
                <p className="font-bold text-black text-center">
                  Trik "Tutup-Buka" Tag PHP di atas dilakukan agar kita bisa leluasa mendesain kotak HTML lengkap dengan warna CSS-nya!
                </p>
              </div>
            </section>

            {/* Section C: DELETE */}
            <section className="bg-canvas border-4 border-black shadow-neo-xl p-6 md:p-12 rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4 tracking-tighter">
                <span className="bg-[#FF0000] text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-black shadow-neo-sm flex-shrink-0 text-2xl md:text-4xl">C</span>
                DELETE (Menghapus)
              </h2>

              <p className="text-lg md:text-xl font-bold text-forest-teal leading-relaxed mb-6">
                Ingatkah kamu tombol "Hapus" di atas? Tombol itu mengirimkan <code className="bg-white border-2 border-black px-1">id</code> lewat tas <code>$_GET</code> (nempel di URL). Mari kita tangkap dan hapus datanya!
              </p>

              <div className="bg-black border-4 border-black shadow-[8px_8px_0px_0px_#000] font-mono text-sm md:text-base overflow-x-auto">
                <div className="bg-gray-800 text-white p-2 border-b-2 border-gray-600 font-bold px-4">
                  hapus.php
                </div>
                <div className="p-6 bg-gray-900 leading-relaxed">
                  <span className="text-[#2965F1] font-black text-xl">{"<?php"}</span> <br/>
                  <span className="text-blue-300">include</span> <span className="text-green-400">'koneksi.php'</span>;<br/><br/>

                  <span className="text-gray-500">{"// 1. Tangkap ID target pencabutan nyawa dari URL"}</span><br/>
                  <span className="text-blue-300">$id_target</span> = <span className="text-pink-400">$_GET</span>[<span className="text-yellow-300">'id'</span>];<br/><br/>

                  <span className="text-gray-500">{"// 2. Perintahkan MySQL untuk menghancurkannya!"}</span><br/>
                  <span className="text-blue-300">mysqli_query</span>(<span className="text-blue-300">$koneksi</span>, <span className="text-green-400">"DELETE FROM buku_tamu WHERE id = '<span className="text-white">$id_target</span>'"</span>);<br/><br/>

                  <span className="text-gray-500">{"// 3. Lemparkan kembali pengunjung ke beranda secara instan"}</span><br/>
                  <span className="text-blue-300">header</span>(<span className="text-green-400">"Location: index.php"</span>);<br/>
                  <span className="text-[#2965F1] font-black text-xl">{"?>"}</span>
                </div>
              </div>
            </section>
            
            {/* Final Celebration */}
            <section className="bg-[#FFD700] border-4 border-black shadow-neo-xl p-8 md:p-16 text-center">
              <span className="material-symbols-outlined text-[100px] text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)] animate-bounce mb-4">military_tech</span>
              
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-black uppercase tracking-tighter mb-6">
                SELAMAT! KAMU LULUS!
              </h2>
              
              <div className="bg-white border-4 border-black p-6 shadow-neo-md max-w-3xl mx-auto">
                <p className="text-lg md:text-2xl font-bold text-black leading-relaxed">
                  Dengan menguasai CRUD menggunakan PHP dan MySQL ini, kamu telah menguasai esensi terdalam dari profesi <strong>Backend Engineer</strong>.
                </p>
                <div className="my-6 border-b-4 border-dashed border-black"></div>
                <p className="text-xl md:text-3xl font-black uppercase text-[#2965F1]">
                  Websitemu bukan sekadar pajangan lagi, melainkan sebuah Sistem Aplikasi yang Hidup!
                </p>
              </div>
            </section>
            
            {/* Footer Nav */}
            <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4 pb-12">
              <a href="/koneksi-mysql-php" className="bg-canvas text-black font-black uppercase text-sm md:text-lg px-4 py-3 md:px-6 md:py-4 border-4 border-black shadow-neo-md hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
                <span className="material-symbols-outlined font-black">arrow_back</span> Koneksi MySQL
              </a>
              <a href="/" className="bg-[#E34F26] text-white font-black uppercase text-sm md:text-lg px-4 py-3 md:px-6 md:py-4 border-4 border-black shadow-neo-md hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 w-full sm:w-auto justify-center text-center">
                Kembali ke Beranda <span className="material-symbols-outlined font-black">home</span>
              </a>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}
