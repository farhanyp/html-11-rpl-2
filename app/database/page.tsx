"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';

export default function DatabasePage() {
  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/database', isActive: true },
          { label: 'Soal Teori', href: '/database/soal', isActive: false }
        ]}
      />
      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />
        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">

            {/* Header & Hero Section */}
            <section className="bg-[#FF49DB] border-4 border-black p-6 md:p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">
                Melangkah Lebih Jauh ke Dunia Teknis Database
              </h1>
              <p className="text-base md:text-xl font-bold text-black bg-white inline-block px-4 py-2 md:px-6 md:py-3 border-2 md:border-4 border-black mb-8 md:mb-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Dari perbedaan SQL vs NoSQL hingga mengenal teknologi masa kini seperti Vector Database untuk AI.
              </p>
              <div>
                <Link href="#section1" className="bg-[#FACC15] inline-flex items-center gap-2 md:gap-3 text-black font-black text-lg md:text-2xl px-6 py-4 md:px-10 md:py-5 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] md:active:translate-x-[6px] md:active:translate-y-[6px] active:shadow-none transition-all uppercase">
                  Mulai Jelajahi Materi
                  <span className="material-symbols-outlined text-4xl">travel_explore</span>
                </Link>
              </div>
            </section>

            {/* Section 1: Definisi Teknis & Cara Menyimpan Basis Data */}
            <section id="section1" className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#2DD4BF] text-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">1</span>
                Definisi Teknis & Cara Menyimpan Basis Data
              </h2>
              <p className="text-base md:text-xl font-bold text-black/80 leading-relaxed mb-8 md:mb-10 bg-[#F4F0EA] p-4 md:p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Secara teknis, <strong className="text-black">Database</strong> adalah sekumpulan data digital yang terstruktur, saling berhubungan, dan disimpan dalam media penyimpanan elektronik (seperti Harddisk atau SSD).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Kolom 1 */}
                <div className="border-4 border-black p-4 md:p-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FACC15] border-2 md:border-4 border-black flex items-center justify-center mb-4 md:mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="material-symbols-outlined text-3xl md:text-4xl text-black font-black">description</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-black uppercase mb-2 md:mb-4 leading-tight">Berbasis Berkas <br /><span className="text-sm md:text-lg bg-black text-white px-2 py-1 mt-1 inline-block">(File-Based)</span></h3>
                  <p className="font-bold text-black/80 text-sm md:text-lg">
                    Database disimpan sebagai file biasa di dalam komputer (contohnya SQLite). Sangat praktis untuk aplikasi kecil atau aplikasi mobile karena tidak perlu server khusus.
                  </p>
                </div>
                {/* Kolom 2 */}
                <div className="border-4 border-black p-4 md:p-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#2DD4BF] border-2 md:border-4 border-black flex items-center justify-center mb-4 md:mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="material-symbols-outlined text-3xl md:text-4xl text-black font-black">dns</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-black uppercase mb-2 md:mb-4 leading-tight">Berbasis Server <br /><span className="text-sm md:text-lg bg-black text-white px-2 py-1 mt-1 inline-block">(Server-Based)</span></h3>
                  <p className="font-bold text-black/80 text-sm md:text-lg">
                    Database berjalan di sebuah server khusus (seperti MySQL atau PostgreSQL). Aplikasi harus terhubung melalui jaringan komputer untuk mengakses data di server ini.
                  </p>
                </div>
                {/* Kolom 3 */}
                <div className="border-4 border-black p-4 md:p-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FF49DB] border-2 md:border-4 border-black flex items-center justify-center mb-4 md:mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="material-symbols-outlined text-3xl md:text-4xl text-white font-black">cloud</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-black uppercase mb-2 md:mb-4 leading-tight">Berbasis Awan <br /><span className="text-sm md:text-lg bg-black text-white px-2 py-1 mt-1 inline-block">(Cloud-Based)</span></h3>
                  <p className="font-bold text-black/80 text-sm md:text-lg">
                    Database tidak disimpan di komputer fisik kita, melainkan di infrastruktur internet milik penyedia layanan cloud seperti Google Cloud (Firebase) atau AWS.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: SQL vs NoSQL */}
            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#FF49DB] text-white w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">2</span>
                SQL vs NoSQL: Apa Bedanya?
              </h2>

              <div className="mb-8 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-1 hover:rotate-0 transition-transform bg-[#FACC15] p-3 max-w-sm md:max-w-md mx-auto">
                <img src="/images/sql_vs_nosql.png" alt="Ilustrasi SQL vs NoSQL" className="w-full h-48 md:h-64 object-cover border-4 border-black bg-white" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Card SQL */}
                <div className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-[#F4F0EA] group hover:-translate-y-1 transition-transform">
                  <div className="bg-[#2DD4BF] border-b-4 border-black p-4 md:p-6 flex items-center gap-4">
                    <span className="material-symbols-outlined text-4xl md:text-5xl text-black">table</span>
                    <h3 className="text-xl md:text-3xl font-black text-black uppercase leading-tight">SQL <br/><span className="text-sm md:text-lg font-bold">(Relational)</span></h3>
                  </div>
                  <div className="p-6 space-y-6">
                    <div>
                      <h4 className="font-black text-black uppercase border-b-2 border-black mb-2 inline-block">Bentuk Data</h4>
                      <p className="font-bold text-black/80 text-sm md:text-base">Sangat kaku. Data wajib berbentuk <strong className="text-black bg-[#2DD4BF] px-1">Tabel</strong> yang memiliki Baris dan Kolom.</p>
                    </div>
                    <div>
                      <h4 className="font-black text-black uppercase border-b-2 border-black mb-2 inline-block">Struktur (Skema)</h4>
                      <p className="font-bold text-black/80 text-sm md:text-base">Harus ditentukan di awal. Jika kolomnya ada 3, maka semua data wajib memiliki 3 kolom.</p>
                    </div>
                    <div>
                      <h4 className="font-black text-black uppercase border-b-2 border-black mb-2 inline-block">Hubungan (Relasi)</h4>
                      <p className="font-bold text-black/80 text-sm md:text-base">Sangat kuat. Menggunakan perintah <strong className="bg-[#FF49DB] text-white px-1">JOIN</strong> untuk menghubungkan antar-tabel.</p>
                    </div>
                    <div>
                      <h4 className="font-black text-black uppercase border-b-2 border-black mb-2 inline-block">Contoh Software</h4>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="bg-[#FACC15] px-2 py-1 border-2 border-black font-bold text-xs md:text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">MySQL</span>
                        <span className="bg-[#FACC15] px-2 py-1 border-2 border-black font-bold text-xs md:text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">MariaDB</span>
                        <span className="bg-[#FACC15] px-2 py-1 border-2 border-black font-bold text-xs md:text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">PostgreSQL</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card NoSQL */}
                <div className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-[#F4F0EA] group hover:-translate-y-1 transition-transform">
                  <div className="bg-[#FF49DB] border-b-4 border-black p-4 md:p-6 flex items-center gap-4">
                    <span className="material-symbols-outlined text-4xl md:text-5xl text-white">data_object</span>
                    <h3 className="text-xl md:text-3xl font-black text-white uppercase drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] leading-tight">NoSQL <br/><span className="text-sm md:text-lg font-bold drop-shadow-none text-black">(Non-Relational)</span></h3>
                  </div>
                  <div className="p-6 space-y-6">
                    <div>
                      <h4 className="font-black text-black uppercase border-b-2 border-black mb-2 inline-block">Bentuk Data</h4>
                      <p className="font-bold text-black/80 text-sm md:text-base">Sangat fleksibel. Data bisa berbentuk <strong className="text-black bg-[#FACC15] px-1">dokumen JSON</strong>, grafik, atau pasangan Key-Value.</p>
                    </div>
                    <div>
                      <h4 className="font-black text-black uppercase border-b-2 border-black mb-2 inline-block">Struktur (Skema)</h4>
                      <p className="font-bold text-black/80 text-sm md:text-base">Bebas berubah kapan saja. Baris pertama boleh punya 3 data, baris kedua boleh punya 5 data.</p>
                    </div>
                    <div>
                      <h4 className="font-black text-black uppercase border-b-2 border-black mb-2 inline-block">Hubungan (Relasi)</h4>
                      <p className="font-bold text-black/80 text-sm md:text-base">Tidak mendukung relasi rumit. Data biasanya ditumpuk jadi satu di satu tempat secara dokumen utuh.</p>
                    </div>
                    <div>
                      <h4 className="font-black text-black uppercase border-b-2 border-black mb-2 inline-block">Contoh Software</h4>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="bg-[#2DD4BF] px-2 py-1 border-2 border-black font-bold text-xs md:text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">MongoDB</span>
                        <span className="bg-[#2DD4BF] px-2 py-1 border-2 border-black font-bold text-xs md:text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Redis</span>
                        <span className="bg-[#2DD4BF] px-2 py-1 border-2 border-black font-bold text-xs md:text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Cassandra</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Jenis Database Populer di Industri Modern */}
            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#2DD4BF] text-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">3</span>
                Jenis Database Populer di Industri Modern
              </h2>

              <div className="mb-10 flex justify-center">
                <div className="border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-1 hover:rotate-0 transition-transform bg-[#FF49DB] p-3 max-w-sm md:max-w-md w-full">
                  <img src="/images/modern_databases.png" alt="Ilustrasi Jenis Database Modern" className="w-full h-48 md:h-64 object-cover border-4 border-black bg-white" />
                </div>
              </div>

              <div className="space-y-6">
                {/* Kartu 1 */}
                <div className="flex flex-col md:flex-row border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all bg-[#F4F0EA]">
                  <div className="h-4 md:h-auto md:w-6 bg-[#2DD4BF] border-b-4 md:border-b-0 md:border-r-4 border-black"></div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-black text-black uppercase mb-2 md:mb-4">Document Database (NoSQL)</h3>
                    <p className="font-bold text-black/80 text-sm md:text-lg mb-4 md:mb-6 leading-relaxed">
                      Menyimpan data dalam bentuk dokumen teks terstruktur seperti JSON. Sangat cocok untuk e-commerce di mana spesifikasi tiap produk berbeda-beda (baju punya kolom 'Ukuran', handphone punya kolom 'RAM').
                    </p>
                    <span className="bg-white border-2 md:border-4 border-black px-3 py-1 md:px-4 md:py-2 font-black text-xs md:text-sm uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block">Contoh: MongoDB</span>
                  </div>
                </div>

                {/* Kartu 2 */}
                <div className="flex flex-col md:flex-row border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all bg-[#F4F0EA]">
                  <div className="h-4 md:h-auto md:w-6 bg-[#2DD4BF] border-b-4 md:border-b-0 md:border-r-4 border-black"></div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-black text-black uppercase mb-2 md:mb-4">In-Memory Database (Key-Value)</h3>
                    <p className="font-bold text-black/80 text-sm md:text-lg mb-4 md:mb-6 leading-relaxed">
                      Disimpan langsung di dalam RAM (Memory) komputer, bukan di harddisk. Kecepatannya luar biasa tinggi, digunakan untuk sistem caching agar aplikasi terasa super cepat.
                    </p>
                    <span className="bg-white border-2 md:border-4 border-black px-3 py-1 md:px-4 md:py-2 font-black text-xs md:text-sm uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block">Contoh: Redis</span>
                  </div>
                </div>

                {/* Kartu 3 */}
                <div className="flex flex-col md:flex-row border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all bg-[#F4F0EA]">
                  <div className="h-4 md:h-auto md:w-6 bg-[#2DD4BF] border-b-4 md:border-b-0 md:border-r-4 border-black"></div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-black text-black uppercase mb-2 md:mb-4 flex flex-wrap items-center gap-3 md:gap-4">
                      Vector Database
                      <span className="bg-[#FF49DB] text-white px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm border-2 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Era AI & ML</span>
                    </h3>
                    <p className="font-bold text-black/80 text-sm md:text-lg mb-4 md:mb-6 leading-relaxed">
                      Tren paling panas di era AI. Tidak menyimpan teks biasa, melainkan koordinat angka matematis (vektor) dari sebuah data. Digunakan oleh ChatGPT atau sistem pengenalan wajah untuk mencari kemiripan makna/visual secara instan.
                    </p>
                    <span className="bg-white border-2 md:border-4 border-black px-3 py-1 md:px-4 md:py-2 font-black text-xs md:text-sm uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mr-2 md:mr-4 inline-block mb-2">Contoh: Pinecone</span>
                    <span className="bg-white border-2 md:border-4 border-black px-3 py-1 md:px-4 md:py-2 font-black text-xs md:text-sm uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block">Milvus</span>
                  </div>
                </div>

                {/* Kartu 4 */}
                <div className="flex flex-col md:flex-row border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all bg-[#F4F0EA]">
                  <div className="h-4 md:h-auto md:w-6 bg-[#2DD4BF] border-b-4 md:border-b-0 md:border-r-4 border-black"></div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-black text-black uppercase mb-2 md:mb-4">Time-Series Database</h3>
                    <p className="font-bold text-black/80 text-sm md:text-lg mb-4 md:mb-6 leading-relaxed">
                      Dioptimalkan khusus untuk menyimpan data yang terus berubah berdasarkan urutan waktu (timestamp), seperti grafik saham, cuaca, atau sensor IoT.
                    </p>
                    <span className="bg-white border-2 md:border-4 border-black px-3 py-1 md:px-4 md:py-2 font-black text-xs md:text-sm uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block">Contoh: InfluxDB</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Aturan Emas & Kesimpulan */}
            <section className="bg-white p-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-[-1deg] hover:rotate-0 transition-transform">
              <div className="bg-[#ccfbf1] border-4 border-black p-6 md:p-12 relative">
                <span className="material-symbols-outlined absolute -top-5 -right-5 md:-top-8 md:-right-8 text-5xl md:text-7xl text-[#FACC15] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] md:drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] rotate-12 bg-white rounded-full border-2 md:border-4 border-black p-2">lightbulb</span>
                <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-8 md:mb-10 border-b-4 border-black pb-4">
                  💡 Tips Singkat Seorang Software Engineer
                </h2>

                <ul className="space-y-6 md:space-y-8 mb-8 md:mb-12">
                  <li className="flex flex-col md:flex-row gap-4 md:gap-6">
                    <span className="bg-[#2DD4BF] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-black text-xl md:text-2xl text-black border-2 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 self-start md:self-auto">1</span>
                    <p className="text-base md:text-xl font-bold text-black/90 leading-relaxed pt-1">
                      <strong className="text-black bg-white px-2 border-2 border-black inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mr-2 mb-1">Gunakan SQL jika:</strong>
                      Data terstruktur jelas, hubungan antar-data sangat penting (seperti aplikasi bank atau nilai sekolah), dan butuh keamanan transaksi ketat.
                    </p>
                  </li>
                  <li className="flex flex-col md:flex-row gap-4 md:gap-6">
                    <span className="bg-[#FF49DB] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-black text-xl md:text-2xl text-white border-2 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 self-start md:self-auto">2</span>
                    <p className="text-base md:text-xl font-bold text-black/90 leading-relaxed pt-1">
                      <strong className="text-black bg-white px-2 border-2 border-black inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mr-2 mb-1">Gunakan NoSQL jika:</strong>
                      Data tidak menentu strukturnya, aplikasi berkembang sangat cepat, dan butuh performa tinggi untuk menampung jutaan data acak.
                    </p>
                  </li>
                </ul>

                <div className="bg-[#FACC15] border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-lg md:text-2xl font-black text-black uppercase leading-relaxed text-center">
                    "MySQL yang akan kita gunakan untuk praktik CRUD nanti adalah bagian dari keluarga SQL (Relational Database) yang menjadi fondasi wajib sebelum kita mengeksplorasi database modern lainnya."
                  </p>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="mt-12 mb-12 flex flex-col md:flex-row justify-between items-center gap-4 opacity-70">
              <p className="font-black text-xs md:text-sm uppercase tracking-widest text-black text-center md:text-left">© 2024 EDUBRUTAL // SYSTEM STATUS: NOMINAL</p>
              <div className="flex gap-4">
                <span className="material-symbols-outlined font-black text-black">terminal</span>
                <span className="material-symbols-outlined font-black text-black">help</span>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </>
  );
}
