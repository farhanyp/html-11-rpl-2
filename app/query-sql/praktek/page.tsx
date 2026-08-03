"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

const soalPraktek = [
  {
    id: 1,
    title: "Soal 1: Membuat Database Baru (DDL)",
    text: "Buka terminal MySQL kamu dan buatlah sebuah database baru dengan nama db_sekolah_kita."
  },
  {
    id: 2,
    title: "Soal 2: Memilih Database yang Aktif",
    text: "Aktifkan database db_sekolah_kita agar server tahu kita akan menyimpan tabel di dalamnya."
  },
  {
    id: 3,
    title: "Soal 3: Membangun Tabel (DDL)",
    text: "Buat tabel bernama 'siswa' yang memiliki 3 kolom: id (INT PRIMARY KEY), nama_lengkap (VARCHAR 100), dan jurusan (VARCHAR 50)."
  },
  {
    id: 4,
    title: "Soal 4: Menambahkan Kolom Ekstra (DDL)",
    text: "Ternyata kita lupa menambahkan nilai! Tambahkan satu kolom baru bernama 'nilai_akhir' bertipe data INT ke dalam tabel 'siswa'."
  },
  {
    id: 5,
    title: "Soal 5: Memasukkan Data Siswa 1 (DML)",
    text: "Masukkan data siswa berikut: id = 1, nama_lengkap = 'Andika Pratama', jurusan = 'RPL', nilai_akhir = 85."
  },
  {
    id: 6,
    title: "Soal 6: Memasukkan Data Siswa 2 (DML)",
    text: "Masukkan satu data siswa lagi: id = 2, nama_lengkap = 'Siti Nurbaya', jurusan = 'TKJ', nilai_akhir = 92."
  },
  {
    id: 7,
    title: "Soal 7: Membaca Seluruh Data (DML)",
    text: "Coba tampilkan seluruh baris dan kolom dari tabel 'siswa' untuk memastikan kedua data tadi berhasil tersimpan."
  },
  {
    id: 8,
    title: "Soal 8: Membaca Data Khusus (DML)",
    text: "Tampilkan HANYA data milik siswa yang bernama 'Siti Nurbaya'."
  },
  {
    id: 9,
    title: "Soal 9: Mengubah Data / Update (DML)",
    text: "Ubah nilai_akhir milik 'Andika Pratama' (id = 1) menjadi 90 karena ia baru saja menyelesaikan tugas susulan!"
  },
  {
    id: 10,
    title: "Soal 10: Menghapus Data / Delete (DML)",
    text: "Hapus data milik 'Siti Nurbaya' (id = 2) dari tabel, lalu tampilkan kembali seluruh isi tabel 'siswa' untuk membuktikan datanya telah terhapus."
  },
  {
    id: 11,
    title: "Soal 11: Multi-Insert (Tantangan Sedang)",
    text: "Masukkan 3 baris data sekaligus hanya dalam satu kali eksekusi perintah penyisipan data! (Misal: id 3, 4, 5 dengan nama bebas)."
  },
  {
    id: 12,
    title: "Soal 12: Filter Kombinasi AND & OR",
    text: "Tampilkan data siswa yang berada di jurusan 'RPL' DAN memiliki nilai_akhir lebih besar dari (>) 80."
  },
  {
    id: 13,
    title: "Soal 13: Pencarian Pola (LIKE)",
    text: "Tampilkan hanya data siswa yang nama depannya berawalan dengan huruf 'A'."
  },
  {
    id: 14,
    title: "Soal 14: Mengurutkan Data (ORDER BY)",
    text: "Tampilkan seluruh data siswa, tetapi urutkan hasilnya mulai dari nilai_akhir yang paling besar (DESC)."
  },
  {
    id: 15,
    title: "Soal 15: Membatasi Tampilan (LIMIT)",
    text: "Tampilkan hanya 2 data teratas dari tabel siswa (biasanya digunakan untuk sistem paginasi halaman)."
  },
  {
    id: 16,
    title: "Soal 16: Rumus Matematika pada UPDATE",
    text: "Berikan bonus nilai tambahan sebesar 5 poin (+5) ke kolom nilai_akhir untuk SEMUA siswa yang ada di jurusan 'TKJ'."
  },
  {
    id: 17,
    title: "Soal 17: Agregasi Dasar (COUNT)",
    text: "Hitung total keseluruhan baris data (jumlah siswa) di dalam tabel."
  },
  {
    id: 18,
    title: "Soal 18: Menghapus Kolom Tertentu (ALTER)",
    text: "Ubah struktur tabel untuk membuang atau menghapus kolom 'jurusan' dari tabel 'siswa'."
  },
  {
    id: 19,
    title: "Soal 19: Membuat Tabel Kedua",
    text: "Buatlah satu tabel baru bernama 'wali_kelas' dengan 3 kolom: id INT PRIMARY KEY, nama_guru VARCHAR 100, dan no_hp VARCHAR 15."
  },
  {
    id: 20,
    title: "Soal 20: Tahap Akhir (DROP TABLE)",
    text: "Sebagai tahap bersih-bersih, hancurkan tabel 'wali_kelas' yang baru saja dibuat tersebut secara permanen."
  },
  {
    id: 21,
    title: "Soal 21: Insert Sebagian Kolom (DML)",
    text: "Masukkan data siswa baru dengan id 3 dan nama_lengkap 'Rudi Santoso'. Kosongkan (jangan sebutkan) nilai untuk jurusan dan nilai_akhir saat proses input."
  },
  {
    id: 22,
    title: "Soal 22: Mengubah Tipe Data Kolom (DDL)",
    text: "Ubah tipe data pada kolom 'nilai_akhir' yang tadinya angka (INT) menjadi teks (VARCHAR 5)."
  },
  {
    id: 23,
    title: "Soal 23: Mengganti Nama Kolom (DDL)",
    text: "Ubah nama kolom 'nama_lengkap' menjadi 'nama_siswa'."
  },
  {
    id: 24,
    title: "Soal 24: Mengganti Nama Tabel (DDL)",
    text: "Ubah nama tabel kamu dari 'siswa' menjadi 'peserta_didik'."
  },
  {
    id: 25,
    title: "Soal 25: Menampilkan Data Unik (DML)",
    text: "Tampilkan macam-macam jurusan yang ada di tabel 'peserta_didik' tanpa menampilkan hasil yang berulang atau ganda."
  },
  {
    id: 26,
    title: "Soal 26: Update Banyak Kolom Sekaligus (DML)",
    text: "Perbarui data 'Andika Pratama', ganti jurusannya menjadi 'MM' DAN sekaligus ubah nilai_akhirnya menjadi 'A' dalam SATU perintah UPDATE yang sama."
  },
  {
    id: 27,
    title: "Soal 27: Menghapus Multi-Baris (DML)",
    text: "Hapus data siswa yang memiliki id 1 dan 3 sekaligus secara bersamaan dalam SATU eksekusi perintah."
  },
  {
    id: 28,
    title: "Soal 28: Mengosongkan Isi Tabel (DDL)",
    text: "Bersihkan atau hapus seluruh sisa baris data di dalam tabel 'peserta_didik' DENGAN CEPAT tanpa merusak struktur wadah tabelnya."
  },
  {
    id: 29,
    title: "Soal 29: Menghancurkan Tabel (DDL)",
    text: "Setelah tabelnya kosong, sekarang hancurkan wadah tabel 'peserta_didik' tersebut secara permanen."
  },
  {
    id: 30,
    title: "Soal 30: Menghancurkan Database (DDL)",
    text: "Sebagai langkah terakhir pembersihan server MySQL kamu, hancurkan database 'db_sekolah_kita' secara permanen."
  }
];

export default function QuerySqlPraktekPage() {
  const [completedTasks, setCompletedTasks] = useState<Record<number, boolean>>({});

  const toggleTask = (taskId: number) => {
    setCompletedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  const totalTasks = soalPraktek.length;
  const completedCount = Object.keys(completedTasks).filter(k => completedTasks[Number(k)]).length;
  const isAllCompleted = completedCount === totalTasks;

  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/query-sql', isActive: false },
          { label: 'Soal Teori', href: '/query-sql/soal', isActive: false },
          { label: 'Soal Praktek', href: '/query-sql/praktek', isActive: true }
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">

            {/* Header */}
            <div className="bg-[#2DD4BF] border-4 border-black p-5 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
              <span className="material-symbols-outlined absolute -top-4 -right-4 text-[120px] opacity-20 rotate-12">code</span>
              <h1 className="text-3xl md:text-5xl font-black text-black tracking-tighter uppercase mb-4 relative z-10 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">
                30 Soal Praktek SQL Mandiri
              </h1>
              <p className="text-sm md:text-lg font-bold text-black bg-white inline-block px-4 py-2 md:px-6 md:py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative z-10">
                Jalankan setiap perintah langsung di terminal MySQL kamu! Centang jika berhasil. Tidak ada contekan!
              </p>
            </div>

            {isAllCompleted && (
              <div className="bg-[#FACC15] border-4 border-black p-5 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center animate-bounce">
                <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-2">MISI SELESAI! 🎉</h2>
                <p className="font-bold text-sm md:text-xl text-black">Kamu berhasil mengeksekusi 30 Query menantang secara mandiri! Luar biasa!</p>
              </div>
            )}

            {/* Questions list */}
            <div className="space-y-6">
              {soalPraktek.map((soal) => {
                const isDone = completedTasks[soal.id];
                return (
                  <div
                    key={soal.id}
                    className={`bg-white border-4 border-black p-4 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative group transition-all ${isDone ? 'bg-[#effefb] border-[#2DD4BF] opacity-80' : 'hover:-translate-y-1'}`}
                  >
                    <div className="flex gap-4 md:gap-6 items-start">
                      <div
                        onClick={() => toggleTask(soal.id)}
                        className={`w-10 h-10 md:w-12 md:h-12 flex-shrink-0 border-4 border-black cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center justify-center ${isDone ? 'bg-[#2DD4BF]' : 'bg-[#FF49DB]'}`}
                      >
                        {isDone ? (
                          <span className="material-symbols-outlined font-black text-black text-2xl md:text-3xl">check</span>
                        ) : (
                          <span className="font-black text-white text-lg md:text-xl">{soal.id}</span>
                        )}
                      </div>
                      <div className="flex-1 pt-0 md:pt-1">
                        <h3 className={`text-lg md:text-2xl font-black uppercase mb-1 md:mb-2 ${isDone ? 'text-black/50 line-through' : 'text-black'}`}>
                          {soal.title}
                        </h3>
                        <p className={`font-bold text-sm md:text-lg leading-relaxed ${isDone ? 'text-black/50' : 'text-black/80'}`}>
                          {soal.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="h-12 w-full"></div>
          </div>
        </main>
      </div>
    </>
  );
}
