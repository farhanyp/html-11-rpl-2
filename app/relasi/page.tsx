"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import CodeBlock from '@/components/CodeBlock';

export default function RelasiPage() {
  return (
    <>
      <Headbar 
        links={[
          { label: 'Materi', href: '/relasi', isActive: true },
          { label: 'Soal Teori', href: '/relasi/soal', isActive: false },
          { label: 'Soal Praktek', href: '/relasi/praktek', isActive: false }
        ]} 
      />
      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />
        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-16">
            
            {/* Header & Hero Section */}
            <section className="bg-[#2DD4BF] border-4 border-black p-5 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
               <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-black tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">
                 Menghubungkan Data: Konsep Relasi & Perintah JOIN
               </h1>
               <p className="text-sm md:text-xl font-bold text-black bg-white inline-block px-4 md:px-6 py-2 md:py-3 border-4 border-black mb-6 md:mb-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                 Belajar bagaimana tabel-tabel di dalam database saling berbicara dan menyatukan informasi.
               </p>
               <div>
                 <Link href="#section1" className="bg-[#FF49DB] inline-flex items-center gap-3 text-white font-black text-sm sm:text-base md:text-2xl px-6 md:px-10 py-3 md:py-5 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all uppercase">
                   Mulai Belajar Relasi
                   <span className="material-symbols-outlined text-4xl">hub</span>
                 </Link>
               </div>
            </section>

            {/* Section 1: Kenapa Harus Berelasi & Jenis Relasi */}
            <section id="section1" className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-5 md:p-12">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#FACC15] text-black w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">1</span>
                Mengapa Data Harus Terhubung?
              </h2>
              
              <div className="bg-[#F4F0EA] border-4 border-black p-4 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-10">
                <p className="font-bold text-sm md:text-lg text-black/80 leading-relaxed">
                  Bayangkan jika semua data siswa, nilai, dan kelas disimpan dalam satu buku besar. Jika satu siswa pindah kelas, kita harus mencari dan menghapus namanya berulang-ulang di berbagai halaman. Sangat melelahkan, bukan? 
                  <br/><br/>
                  Itulah alasan kita <strong>memecah data</strong> ke laci-laci kecil (tabel berbeda) agar rapi, tidak lelah menulis ulang, dan mencegah data ganda. Agar tetap saling kenal, kita hubungkan mereka dengan "Relasi"!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* One-to-Many */}
                <div className="border-4 border-black p-4 md:p-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <div className="w-16 h-16 bg-[#2DD4BF] border-4 border-black flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="material-symbols-outlined text-4xl text-black font-black">family_restroom</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-black uppercase mb-4">One-to-Many <br/><span className="text-xs md:text-sm">(Satu ke Banyak)</span></h3>
                  <p className="font-bold text-black/80 text-sm md:text-base leading-relaxed">
                    <strong className="text-black bg-[#FACC15] px-1 border border-black">Analogi:</strong> Seperti satu ibu yang memiliki banyak anak. <br/><br/>
                    <strong className="text-black bg-[#FF49DB] text-white px-1 border border-black">Di Sekolah:</strong> Satu Kelas bisa menampung banyak siswa, tapi siswa hanya punya satu kelas utama!
                  </p>
                </div>

                {/* One-to-One */}
                <div className="border-4 border-black p-4 md:p-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <div className="w-16 h-16 bg-[#FF49DB] border-4 border-black flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="material-symbols-outlined text-4xl text-white font-black">favorite</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-black uppercase mb-4">One-to-One <br/><span className="text-xs md:text-sm">(Satu ke Satu)</span></h3>
                  <p className="font-bold text-black/80 text-sm md:text-base leading-relaxed">
                    <strong className="text-black bg-[#FACC15] px-1 border border-black">Analogi:</strong> Seperti satu orang hanya memiliki satu pasangan resmi (suami-istri). <br/><br/>
                    <strong className="text-black bg-[#FF49DB] text-white px-1 border border-black">Di Sekolah:</strong> Satu siswa hanya memiliki satu akun login ujian ujian yang unik.
                  </p>
                </div>

                {/* Many-to-Many */}
                <div className="border-4 border-black p-4 md:p-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <div className="w-16 h-16 bg-[#FACC15] border-4 border-black flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="material-symbols-outlined text-4xl text-black font-black">restaurant_menu</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-black uppercase mb-4">Many-to-Many <br/><span className="text-xs md:text-sm">(Banyak ke Banyak)</span></h3>
                  <p className="font-bold text-black/80 text-sm md:text-base leading-relaxed">
                    <strong className="text-black bg-[#2DD4BF] px-1 border border-black">Analogi:</strong> Murid bebas memilih banyak makanan di kantin, makanan juga dibeli banyak murid. <br/><br/>
                    <strong className="text-black bg-[#FF49DB] text-white px-1 border border-black">Di Sekolah:</strong> Banyak siswa bisa mengambil banyak mata pelajaran berbeda.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Cara Menghubungkan Tabel */}
            <section className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-5 md:p-12 overflow-x-hidden min-w-0">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#FF49DB] text-white w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">2</span>
                Membuat Tali Pengikat Antar-Tabel
              </h2>

              <p className="font-bold text-sm md:text-lg text-black/80 leading-relaxed mb-8">
                Untuk mengikat tabel, kita butuh tali! Di database, tali ini bernama <strong className="text-black bg-[#F4F0EA] px-2 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">FOREIGN KEY</strong>. 
                Cara kerjanya adalah dengan <strong>menitipkan Primary Key</strong> dari satu tabel (induk) ke dalam tabel lainnya (anak). <br/><br/>
                <strong>Kenapa kita melakukan ini?</strong> <br/>
                Bayangkan jika kita harus menulis "XI Rekayasa Perangkat Lunak" berulang kali untuk tiap siswa. Sangat rentan salah ketik (typo), bukan? Dengan menitipkan ID kelasnya saja (misal angka 1), kita menghemat kapasitas penyimpanan dan memastikan konsistensi data!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 min-w-0">
                <div className="border-4 border-black bg-[#e0fff8] p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-x-auto">
                  <h4 className="text-lg md:text-xl font-black text-black mb-4 flex items-center gap-2 min-w-max">
                    Tabel Induk: <code className="bg-white px-2 border-2 border-black">kelas</code>
                  </h4>
                  <div className="bg-white border-4 border-black p-3 md:p-4 font-mono text-xs md:text-sm min-w-max">
                    <div className="flex border-b-2 border-black pb-2 mb-2 font-black">
                      <span className="flex-1 pr-4 text-[#FF49DB]">id_kelas (PK)</span>
                      <span className="flex-1">nama_kelas</span>
                    </div>
                    <div className="flex mb-2">
                      <span className="flex-1 pr-4 text-[#FF49DB] font-bold bg-yellow-200">1</span>
                      <span className="flex-1">XI RPL</span>
                    </div>
                    <div className="flex">
                      <span className="flex-1 pr-4 text-[#FF49DB] font-bold">2</span>
                      <span className="flex-1">XI TKJ</span>
                    </div>
                  </div>
                </div>

                <div className="border-4 border-black bg-[#ffeaeb] p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-x-auto">
                  <h4 className="text-lg md:text-xl font-black text-black mb-4 flex items-center gap-2 min-w-max">
                    Tabel Anak: <code className="bg-white px-2 border-2 border-black">siswa</code>
                  </h4>
                  <div className="bg-white border-4 border-black p-3 md:p-4 font-mono text-xs md:text-sm min-w-max">
                    <div className="flex border-b-2 border-black pb-2 mb-2 font-black">
                      <span className="flex-1 pr-4">nama_siswa</span>
                      <span className="flex-1 text-[#2DD4BF]">id_kelas_tamu (FK)</span>
                    </div>
                    <div className="flex mb-2">
                      <span className="flex-1 pr-4">Andi Budi</span>
                      <span className="flex-1 text-[#2DD4BF] font-bold bg-yellow-200">1</span>
                    </div>
                    <div className="flex">
                      <span className="flex-1 pr-4">Siti Nur</span>
                      <span className="flex-1 text-[#2DD4BF] font-bold">2</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F4F0EA] border-4 border-black p-4 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] min-w-0">
                <p className="font-bold text-sm md:text-lg text-black/80 leading-relaxed mb-4 md:mb-6">
                  Perhatikan bagian yang diblok kuning di atas! Angka <code>1</code> milik <code>id_kelas</code> dititipkan ke kolom tamu di tabel siswa. <br/>
                  Sekarang mari kita ubah konsep teori tersebut menjadi baris kode <strong>DDL (Data Definition Language)</strong> yang nyata:
                </p>
                
                <CodeBlock 
                  code={`-- 1. Buat wadah kelas terlebih dahulu
CREATE TABLE kelas (
  id_kelas INT AUTO_INCREMENT PRIMARY KEY,
  nama_kelas VARCHAR(50) NOT NULL
);

-- 2. Buat tabel siswa dan hubungkan!
CREATE TABLE siswa (
  nisn INT PRIMARY KEY,
  nama_siswa VARCHAR(100) NOT NULL,
  id_kelas_tamu INT,
  FOREIGN KEY (id_kelas_tamu) REFERENCES kelas(id_kelas)
);`} 
                />
              </div>
            </section>

            {/* Section 3: Membaca Data Terhubung */}
            <section className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-5 md:p-12 overflow-x-hidden min-w-0">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#2DD4BF] text-black w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">3</span>
                Menyatukan Laci Data dengan Query JOIN
              </h2>

              <p className="font-bold text-sm md:text-lg text-black/80 leading-relaxed mb-8">
                Setelah tabel terhubung, ada masalah baru! Saat kita membaca tabel <code className="bg-[#F4F0EA] px-2 py-1 border-2 border-black">siswa</code>, kolom kelas hanya menampilkan <strong>angka kode</strong> (seperti `id_kelas = 1`) yang bikin bingung manusia. Kita perlu perintah khusus untuk menerjemahkan angka itu menjadi nama kelas aslinya.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 min-w-0">
                <div className="border-4 border-black bg-[#ffeaeb] p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-x-auto relative">
                  <h4 className="text-lg md:text-xl font-black text-black mb-4 flex items-center gap-2 min-w-max">
                    <span className="material-symbols-outlined text-[#FF49DB]">cancel</span> 
                    Sebelum di-JOIN (Membingungkan)
                  </h4>
                  <div className="bg-white border-4 border-black p-3 md:p-4 font-mono text-xs md:text-sm min-w-max">
                    <div className="flex border-b-2 border-black pb-2 mb-2 font-black">
                      <span className="flex-1 pr-4">nama_siswa</span>
                      <span className="flex-1 text-right">id_kelas_tamu</span>
                    </div>
                    <div className="flex mb-2">
                      <span className="flex-1 pr-4">Andi Budi</span>
                      <span className="flex-1 text-right text-[#FF49DB] font-bold">1</span>
                    </div>
                    <div className="flex">
                      <span className="flex-1 pr-4">Siti Nur</span>
                      <span className="flex-1 text-right text-[#FF49DB] font-bold">2</span>
                    </div>
                  </div>
                </div>

                <div className="border-4 border-black bg-[#e0fff8] p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-x-auto relative">
                  <h4 className="text-lg md:text-xl font-black text-black mb-4 flex items-center gap-2 min-w-max">
                    <span className="material-symbols-outlined text-[#2DD4BF]">check_circle</span> 
                    Sesudah di-JOIN (Sempurna!)
                  </h4>
                  <div className="bg-white border-4 border-black p-3 md:p-4 font-mono text-xs md:text-sm min-w-max">
                    <div className="flex border-b-2 border-black pb-2 mb-2 font-black">
                      <span className="flex-1 pr-4">nama_siswa</span>
                      <span className="flex-1 text-right">nama_kelas</span>
                    </div>
                    <div className="flex mb-2">
                      <span className="flex-1 pr-4">Andi Budi</span>
                      <span className="flex-1 text-right text-[#2DD4BF] font-bold">XI RPL</span>
                    </div>
                    <div className="flex">
                      <span className="flex-1 pr-4">Siti Nur</span>
                      <span className="flex-1 text-right text-[#2DD4BF] font-bold">XI TKJ</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F4F0EA] border-4 border-black p-4 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] min-w-0">
                <p className="font-bold text-sm md:text-lg text-black/80 leading-relaxed mb-4">
                  Bagaimana cara menyulapnya? Ini dia mantra <strong className="text-black bg-[#FACC15] px-2 py-1 border-2 border-black">JOIN</strong> yang digunakan:
                </p>
                <CodeBlock 
                  code={`SELECT siswa.nisn, siswa.nama_siswa, kelas.nama_kelas
FROM siswa
JOIN kelas ON siswa.id_kelas_tamu = kelas.id_kelas;`} 
                />
              </div>
            </section>

            {/* Footer */}
            <div className="bg-[#FACC15] border-4 border-black p-5 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center animate-pulse">
              <span className="material-symbols-outlined text-4xl md:text-6xl text-black mb-4">stars</span>
              <p className="text-lg md:text-2xl font-black text-black leading-snug">
                Hebat! Sekarang Anda sudah paham bagaimana cara tabel saling mengobrol di database.<br/><br/>
                <span className="bg-white px-3 py-1 border-2 md:border-4 border-black inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Fondasi relasi dan JOIN ini adalah bekal utama Anda sebelum mulai coding sistem CRUD sesungguhnya!</span>
              </p>
            </div>
            
            <div className="h-8 w-full"></div>
          </div>
        </main>
      </div>
    </>
  );
}
