"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import CodeBlock from '@/components/CodeBlock';

export default function QuerySqlPage() {
  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/query-sql', isActive: true },
          { label: 'Soal Teori', href: '/query-sql/soal', isActive: false },
          { label: 'Soal Praktek', href: '/query-sql/praktek', isActive: false }
        ]}
      />
      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />
        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">

            {/* Header & Hero Section */}
            <section className="bg-[#2DD4BF] border-4 border-black p-5 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-black tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">
                Menguasai Bahasa SQL & Operasi CRUD Dasar
              </h1>
              <p className="text-sm md:text-xl font-bold text-black bg-white inline-block px-4 md:px-6 py-2 md:py-3 border-4 border-black mb-6 md:mb-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Jembatan utama yang menghubungkan baris kode aplikasi Anda dengan pusat data.
              </p>
              <div>
                <Link href="#section1" className="bg-[#FF49DB] inline-flex items-center gap-3 text-white font-black text-sm sm:text-base md:text-2xl px-6 md:px-10 py-3 md:py-5 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all uppercase">
                  Mulai Belajar Perintah SQL
                  <span className="material-symbols-outlined text-4xl">terminal</span>
                </Link>
              </div>
            </section>

            {/* Section 1: Pengenalan Bahasa SQL */}
            <section id="section1" className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-5 md:p-12">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#FACC15] text-black w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">1</span>
                Pengenalan Bahasa SQL
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Kolom 1 */}
                <div className="border-4 border-black p-5 md:p-8 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <div className="w-16 h-16 bg-[#2DD4BF] border-4 border-black flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="material-symbols-outlined text-4xl text-black font-black">question_mark</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-black uppercase mb-4">Mengapa SQL?</h3>
                  <p className="font-bold text-black/80 text-sm md:text-lg leading-relaxed">
                    <strong className="text-black bg-[#FACC15] px-1 border border-black">SQL (Structured Query Language)</strong> adalah bahasa standar dunia untuk berkomunikasi dengan DBMS. DBMS adalah program yang kaku dan membutuhkan instruksi pasti. Tanpa SQL, aplikasi web atau mobile tidak akan bisa menyimpan data pendaftaran atau menampilkan data barang.
                  </p>
                </div>

                {/* Kolom 2 */}
                <div className="border-4 border-black p-5 md:p-8 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <div className="w-16 h-16 bg-[#FF49DB] border-4 border-black flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="material-symbols-outlined text-4xl text-white font-black">gavel</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-black uppercase mb-4">Aturan Emas Penulisan</h3>
                  <p className="font-bold text-black/80 text-sm md:text-lg leading-relaxed">
                    Perintah SQL <strong className="text-black">tidak case-sensitive</strong> (<code className="bg-black text-white px-2 py-1 mx-1 font-mono text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">SELECT</code> sama dengan <code className="bg-[#F4F0EA] text-black border-2 border-black px-2 py-1 mx-1 font-mono text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">select</code>), namun best practice-nya kata kerja perintah ditulis <strong className="text-black underline decoration-4 decoration-[#FF49DB] underline-offset-4">HURUF KAPITAL</strong>. Setiap akhir perintah <strong className="text-black">wajib diakhiri</strong> dengan tanda titik koma (<code className="bg-[#FACC15] text-black px-2 py-1 border-2 border-black font-black font-mono shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mx-1">;</code>).
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Tipe Data SQL & Konsep Kunci (Keys) */}
            <section className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-5 md:p-12">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#2DD4BF] text-black w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">2</span>
                Tipe Data & Konsep Kunci
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Kolom Tipe Data */}
                <div className="bg-[#F4F0EA] border-4 border-black p-5 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-xl md:text-2xl font-black text-black uppercase mb-6 flex items-center gap-3">
                    <span className="material-symbols-outlined text-4xl text-[#FF49DB]">data_object</span>
                    Tipe Data Populer
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <strong className="font-mono text-xl bg-[#FACC15] px-2 py-1 border-2 border-black mr-2 inline-block mb-1">INT</strong>
                      <span className="font-bold text-black/80 text-sm md:text-lg block">Angka bilangan bulat (contoh: 1, 100, 5000). Sangat cocok untuk ID, Umur, atau Harga.</span>
                    </div>
                    <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <strong className="font-mono text-xl bg-[#2DD4BF] px-2 py-1 border-2 border-black mr-2 inline-block mb-1">VARCHAR(n)</strong>
                      <span className="font-bold text-black/80 text-sm md:text-lg block">Teks pendek dengan batas maksimal karakter 'n'. Cocok untuk Nama, Email, atau Password.</span>
                    </div>
                    <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <strong className="font-mono text-xl bg-[#FF49DB] text-white px-2 py-1 border-2 border-black mr-2 inline-block mb-1">TEXT</strong>
                      <span className="font-bold text-black/80 text-sm md:text-lg block">Teks super panjang tanpa batas pasti. Cocok untuk Artikel, Deskripsi, atau Komentar.</span>
                    </div>
                    <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <strong className="font-mono text-xl bg-black text-white px-2 py-1 border-2 border-black mr-2 inline-block mb-1">UUID</strong>
                      <span className="font-bold text-black/80 text-sm md:text-lg block">Kode identitas unik acak sepanjang 36 karakter (contoh: <code className="bg-gray-200 px-1 text-sm">123e4567-e89b-12d3...</code>). Lebih aman dari INT untuk Primary Key agar sulit ditebak!</span>
                    </div>
                  </div>
                </div>

                {/* Kolom Keys */}
                <div className="bg-[#F4F0EA] border-4 border-black p-5 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-xl md:text-2xl font-black text-black uppercase mb-6 flex items-center gap-3">
                    <span className="material-symbols-outlined text-4xl text-[#FACC15]">key</span>
                    Konsep Kunci (Keys)
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <strong className="text-lg md:text-xl underline decoration-4 decoration-[#FF49DB] block mb-2">PRIMARY KEY</strong>
                      <span className="font-bold text-black/80 text-sm md:text-lg">Kolom super penting yang bertugas sebagai <strong>Identitas Unik</strong> tiap baris data (seperti NIK di KTP). Data di kolom ini tidak boleh kembar dan tidak boleh kosong.</span>
                    </div>
                    <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <strong className="text-lg md:text-xl underline decoration-4 decoration-[#2DD4BF] block mb-2">FOREIGN KEY</strong>
                      <span className="font-bold text-black/80 text-sm md:text-lg">Kolom penghubung! Berguna untuk menyambungkan data dari satu tabel ke Primary Key di tabel lain (Konsep Relasi / <em>Relationship</em>).</span>
                    </div>
                    <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <strong className="text-lg md:text-xl underline decoration-4 decoration-[#FACC15] block mb-2">AUTO_INCREMENT</strong>
                      <span className="font-bold text-black/80 text-sm md:text-lg">Fitur ajaib (khusus angka) agar Primary Key bisa bertambah sendiri secara otomatis (1, 2, 3...) tanpa perlu kita ketik manual.</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Klasifikasi Perintah SQL */}
            <section className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-5 md:p-12 overflow-x-auto">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#FF49DB] text-white w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">3</span>
                Klasifikasi Perintah SQL
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Kartu DDL */}
                <div className="bg-[#F4F0EA] border-4 border-black p-5 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all relative">
                  <span className="material-symbols-outlined absolute -top-4 -right-4 text-6xl text-[#2DD4BF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] bg-white rounded-full border-4 border-black p-2 z-10 group-hover:rotate-12 transition-transform">architecture</span>
                  <h3 className="text-2xl md:text-3xl font-black text-black uppercase mb-2">DDL</h3>
                  <h4 className="text-base md:text-lg font-black text-black/60 uppercase mb-6 tracking-wider">Data Definition Language</h4>
                  <p className="font-bold text-black/80 text-sm md:text-lg mb-6 leading-relaxed">
                    Digunakan untuk membangun, mengubah, atau menghapus wadah/struktur database dan tabel (seperti membuat laci baru).
                  </p>
                  <div className="space-y-4 w-full">
                    <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <span className="font-black font-mono text-lg md:text-xl mb-2 block border-b-2 border-black pb-1">CREATE</span>
                      <p className="font-bold text-black/80 text-sm mb-3">
                        <strong>Fungsi:</strong> Membangun tabel atau database baru dari nol.<br />
                        <strong>Maksud Query:</strong> "Buat tabel baru bernama <code className="bg-gray-200 px-1">siswa</code> yang memiliki satu kolom bernama <code className="bg-gray-200 px-1">id</code> bertipe angka (INT)".
                      </p>
                      <CodeBlock language='sql' code="CREATE TABLE siswa (id INT);" />
                    </div>
                    <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <span className="font-black font-mono text-lg md:text-xl mb-2 block border-b-2 border-black pb-1">ALTER</span>
                      <p className="font-bold text-black/80 text-sm mb-3">
                        <strong>Fungsi:</strong> Mengubah struktur/bentuk tabel yang sudah ada.<br />
                        <strong>Maksud Query:</strong> "Ubah tabel <code className="bg-gray-200 px-1">siswa</code> dengan menambahkan kolom baru bernama <code className="bg-gray-200 px-1">umur</code> bertipe angka".
                      </p>
                      <CodeBlock code="ALTER TABLE siswa ADD umur INT;" />
                    </div>
                    <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <span className="font-black font-mono text-lg md:text-xl mb-2 block border-b-2 border-black pb-1">DROP</span>
                      <p className="font-bold text-black/80 text-sm mb-3">
                        <strong>Fungsi:</strong> Menghapus tabel atau database secara permanen.<br />
                        <strong>Maksud Query:</strong> "Hancurkan atau hapus tabel <code className="bg-gray-200 px-1">siswa</code> secara permanen beserta semua isinya".
                      </p>
                      <CodeBlock code="DROP TABLE siswa;" />
                    </div>
                  </div>
                </div>

                {/* Kartu DML */}
                <div className="bg-[#F4F0EA] border-4 border-black p-5 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all relative">
                  <span className="material-symbols-outlined absolute -top-4 -right-4 text-6xl text-[#FF49DB] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] bg-white rounded-full border-4 border-black p-2 z-10 group-hover:-rotate-12 transition-transform">settings_b_roll</span>
                  <h3 className="text-2xl md:text-3xl font-black text-black uppercase mb-2">DML</h3>
                  <h4 className="text-base md:text-lg font-black text-black/60 uppercase mb-6 tracking-wider">Data Manipulation Language</h4>
                  <p className="font-bold text-black/80 text-base md:text-lg mb-6 leading-relaxed">
                    <strong className="text-black bg-[#FACC15] px-1 border-2 border-black">Jantung dari CRUD!</strong> Digunakan untuk memanipulasi atau mengolah isi data di dalam tabel yang sudah dibuat.
                  </p>
                  <div className="space-y-4 w-full">
                    <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <span className="font-black font-mono text-lg md:text-xl mb-2 block text-[#FF49DB] border-b-2 border-black pb-1">INSERT</span>
                      <p className="font-bold text-black/80 text-sm mb-3">
                        <strong>Fungsi:</strong> Memasukkan data atau baris baru ke dalam tabel.<br />
                        <strong>Maksud Query:</strong> "Masukkan data bernilai <code className="bg-gray-200 px-1">1</code> ke dalam tabel <code className="bg-gray-200 px-1">siswa</code>".
                      </p>
                      <CodeBlock code="INSERT INTO siswa VALUES (1);" />
                    </div>
                    <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <span className="font-black font-mono text-lg md:text-xl mb-2 block text-[#FF49DB] border-b-2 border-black pb-1">SELECT</span>
                      <p className="font-bold text-black/80 text-sm mb-3">
                        <strong>Fungsi:</strong> Menampilkan atau membaca data yang sudah tersimpan.<br />
                        <strong>Maksud Query:</strong> "Tampilkan semua kolom (<code className="bg-gray-200 px-1">*</code>) yang ada dari tabel <code className="bg-gray-200 px-1">siswa</code>".
                      </p>
                      <CodeBlock code="SELECT * FROM siswa;" />
                    </div>
                    <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <span className="font-black font-mono text-lg md:text-xl mb-2 block text-[#FACC15] border-b-2 border-black pb-1">UPDATE</span>
                      <p className="font-bold text-black/80 text-sm mb-3">
                        <strong>Fungsi:</strong> Memperbarui nilai data lama yang sudah ada di tabel.<br />
                        <strong>Maksud Query:</strong> "Ubah nilai pada kolom <code className="bg-gray-200 px-1">umur</code> menjadi <code className="bg-gray-200 px-1">15</code> untuk data di dalam tabel <code className="bg-gray-200 px-1">siswa</code>".
                      </p>
                      <CodeBlock code="UPDATE siswa SET umur = 15;" />
                    </div>
                    <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <span className="font-black font-mono text-lg md:text-xl mb-2 block text-black border-b-2 border-black pb-1">DELETE</span>
                      <p className="font-bold text-black/80 text-sm mb-3">
                        <strong>Fungsi:</strong> Menghapus baris data tertentu dari dalam tabel.<br />
                        <strong>Maksud Query:</strong> "Hapus baris data dari tabel <code className="bg-gray-200 px-1">siswa</code> di mana nilai <code className="bg-gray-200 px-1">id</code> adalah <code className="bg-gray-200 px-1">1</code>".
                      </p>
                      <CodeBlock code="DELETE FROM siswa WHERE id = 1;" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Catatan JOIN */}
              <div className="bg-[#2DD4BF] border-4 border-black p-4 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex gap-4 items-start">
                <span className="material-symbols-outlined font-black text-black text-4xl bg-white border-4 border-black rounded-full p-3 flex-shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">link</span>
                <div>
                  <h4 className="text-lg md:text-xl font-black text-black uppercase mb-2">Info Ekstra: JOIN</h4>
                  <p className="font-bold text-black/90 text-sm md:text-lg">
                    Dilengkapi penjelasan singkat mengenai perintah <strong className="bg-white px-2 py-1 border-2 border-black font-mono shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mx-1">JOIN</strong> yang digunakan untuk menggabungkan data dari dua tabel atau lebih berdasarkan Foreign Key saat membaca data relasional.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Panduan Praktik Pembuatan Wadah (DDL) */}
            <section className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-5 md:p-12">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#2DD4BF] text-black w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">4</span>
                Step-by-Step Membuat Wadah Data (DDL)
              </h2>

              <div className="space-y-6 md:space-y-8 relative before:absolute before:inset-0 before:ml-[19px] md:before:ml-[38px] before:-translate-x-px md:before:translate-x-0 before:h-full before:w-1 before:bg-black">
                {/* Step 1 */}
                <div className="relative flex items-start gap-4 md:gap-8">
                  <div className="w-10 h-10 md:w-20 md:h-20 bg-[#FACC15] border-4 border-black rounded-full flex items-center justify-center font-black text-lg md:text-3xl z-10 flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">1</div>
                  <div className="bg-[#F4F0EA] border-4 border-black p-4 md:p-6 flex-1 min-w-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
                    <p className="font-bold text-sm md:text-xl text-black">
                      Buka XAMPP, aktifkan MySQL, dan buka terminal.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex items-start gap-4 md:gap-8">
                  <div className="w-10 h-10 md:w-20 md:h-20 bg-[#A78BFA] border-4 border-black rounded-full flex items-center justify-center font-black text-lg md:text-3xl z-10 flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">2</div>
                  <div className="bg-[#F4F0EA] border-4 border-black p-4 md:p-6 flex-1 min-w-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
                    <p className="font-bold text-sm md:text-xl text-black mb-3 md:mb-4">
                      Masuk ke MySQL dengan menjalankan kode ini di terminal:
                    </p>
                    <CodeBlock code="mysql -u root -p" />
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex items-start gap-4 md:gap-8">
                  <div className="w-10 h-10 md:w-20 md:h-20 bg-[#2DD4BF] border-4 border-black rounded-full flex items-center justify-center font-black text-lg md:text-3xl z-10 flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">3</div>
                  <div className="bg-[#F4F0EA] border-4 border-black p-4 md:p-6 flex-1 min-w-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
                    <p className="font-bold text-sm md:text-xl text-black mb-3 md:mb-4">
                      Buat database baru dengan menjalankan kode ini:
                    </p>
                    <CodeBlock code="CREATE DATABASE db_toko_sekolah;" />
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative flex items-start gap-4 md:gap-8">
                  <div className="w-10 h-10 md:w-20 md:h-20 bg-[#FF49DB] text-white border-4 border-black rounded-full flex items-center justify-center font-black text-lg md:text-3xl z-10 flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">4</div>
                  <div className="bg-[#F4F0EA] border-4 border-black p-4 md:p-6 flex-1 min-w-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
                    <p className="font-bold text-sm md:text-xl text-black mb-3 md:mb-4">
                      Aktifkan database dengan kode:
                    </p>
                    <CodeBlock code="USE db_toko_sekolah;" />
                  </div>
                </div>

                {/* Step 5 */}
                <div className="relative flex items-start gap-4 md:gap-8">
                  <div className="w-10 h-10 md:w-20 md:h-20 bg-white border-4 border-black rounded-full flex items-center justify-center font-black text-lg md:text-3xl z-10 flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">5</div>
                  <div className="bg-[#F4F0EA] border-4 border-black p-4 md:p-6 flex-1 min-w-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
                    <p className="font-bold text-sm md:text-xl text-black mb-3 md:mb-4">
                      Buat tabel produk dengan <strong className="bg-[#FACC15] px-2 py-1 border-2 border-black mx-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Primary Key</strong> unik melalui kode:
                    </p>
                    <CodeBlock
                      code={`CREATE TABLE produk (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama_produk VARCHAR(100) NOT NULL,
  harga INT NOT NULL,
  stok INT DEFAULT 0
);`}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Simulasi Praktik Operasi CRUD (DML) */}
            <section className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-5 md:p-12">
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-10 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#FACC15] text-black w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">5</span>
                Simulasi Praktik Operasi CRUD (DML)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* [C]reate */}
                <div className="border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all flex flex-col min-w-0">
                  <div className="bg-[#2DD4BF] border-b-4 border-black p-3 md:p-4 flex items-center gap-2 md:gap-3">
                    <span className="bg-white font-black text-lg md:text-2xl border-4 border-black w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">C</span>
                    <h3 className="text-lg md:text-2xl font-black text-black uppercase">reate <span className="text-xs md:text-sm opacity-70">(INSERT)</span></h3>
                  </div>
                  <div className="p-4 md:p-6 flex-1 flex flex-col">
                    <p className="font-bold text-black/80 text-sm md:text-lg mb-4 md:mb-6 flex-1">
                      Memasukkan data produk baru ke tabel.
                    </p>
                    <CodeBlock code="INSERT INTO produk (nama_produk, harga, stok) VALUES ('Buku Tulis Pack', 45000, 20);" />
                  </div>
                </div>

                {/* [R]ead */}
                <div className="border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all flex flex-col min-w-0">
                  <div className="bg-[#FF49DB] border-b-4 border-black p-3 md:p-4 flex items-center gap-2 md:gap-3">
                    <span className="bg-white font-black text-lg md:text-2xl border-4 border-black w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">R</span>
                    <h3 className="text-lg md:text-2xl font-black text-white uppercase">ead <span className="text-xs md:text-sm opacity-90 text-black">(SELECT)</span></h3>
                  </div>
                  <div className="p-4 md:p-6 flex-1 flex flex-col">
                    <p className="font-bold text-black/80 text-sm md:text-lg mb-4 md:mb-6 flex-1">
                      Menampilkan data produk berharga di bawah 50.000 dengan penyaringan <strong className="bg-[#FF49DB] text-white px-2 py-1 border-2 border-black inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mx-1">WHERE</strong>.
                    </p>
                    <CodeBlock code="SELECT nama_produk, harga FROM produk WHERE harga < 50000;" />
                  </div>
                </div>

                {/* [U]pdate */}
                <div className="border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all flex flex-col min-w-0">
                  <div className="bg-[#FACC15] border-b-4 border-black p-3 md:p-4 flex items-center gap-2 md:gap-3">
                    <span className="bg-white font-black text-lg md:text-2xl border-4 border-black w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">U</span>
                    <h3 className="text-lg md:text-2xl font-black text-black uppercase">pdate <span className="text-xs md:text-sm opacity-70">(UPDATE)</span></h3>
                  </div>
                  <div className="p-4 md:p-6 flex-1 flex flex-col">
                    <p className="font-bold text-black/80 text-sm md:text-lg mb-4 md:mb-6 flex-1">
                      Memperbarui stok barang berdasarkan ID spesifik (<strong className="bg-[#FACC15] px-2 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Wajib pakai WHERE!</strong>).
                    </p>
                    <CodeBlock code="UPDATE produk SET stok = 15 WHERE id = 1;" />
                  </div>
                </div>

                {/* [D]elete */}
                <div className="border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all flex flex-col min-w-0">
                  <div className="bg-white border-b-4 border-black p-3 md:p-4 flex items-center gap-2 md:gap-3">
                    <span className="bg-black font-black text-lg md:text-2xl text-white border-4 border-black w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">D</span>
                    <h3 className="text-lg md:text-2xl font-black text-black uppercase">elete <span className="text-xs md:text-sm opacity-70">(DELETE)</span></h3>
                  </div>
                  <div className="p-4 md:p-6 flex-1 flex flex-col">
                    <p className="font-bold text-black/80 text-sm md:text-lg mb-4 md:mb-6 flex-1">
                      Menghapus data produk dari tabel berdasarkan ID-nya (<strong className="bg-black text-white px-2 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Wajib pakai WHERE!</strong>).
                    </p>
                    <CodeBlock code="DELETE FROM produk WHERE id = 1;" />
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <section className="bg-[#2DD4BF] p-5 md:p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-[-1deg] hover:rotate-0 transition-transform">
              <p className="text-lg md:text-2xl font-black text-black uppercase leading-relaxed text-center">
                "Selamat Praktik! Kuasai perintah DDL untuk membuat rumah data, dan gunakan DML berulang kali untuk menggerakkan fungsi CRUD aplikasi web Anda."
              </p>
            </section>

            <footer className="mt-12 mb-12 flex justify-between items-center opacity-70">
              <p className="font-black text-sm uppercase tracking-widest text-black">© 2024 EDUBRUTAL // SYSTEM STATUS: NOMINAL</p>
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
