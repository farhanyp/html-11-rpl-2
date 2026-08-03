"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

const soalPraktek = [
  {
    id: 1,
    title: "Soal 1: Membuat Database Baru",
    text: "Buka terminal MySQL kamu dan buatlah sebuah database baru bernama db_sekolah_relasi."
  },
  {
    id: 2,
    title: "Soal 2: Memilih Database",
    text: "Aktifkan database db_sekolah_relasi agar sistem siap menerima pembuatan tabel-tabel baru di dalamnya."
  },
  {
    id: 3,
    title: "Soal 3: Membuat Tabel Induk (DDL)",
    text: "Buat tabel bernama 'guru' yang memiliki 2 kolom: 'id_guru' bertipe INT (jadikan sebagai PRIMARY KEY dan AUTO_INCREMENT), dan 'nama_guru' bertipe teks (VARCHAR 100)."
  },
  {
    id: 4,
    title: "Soal 4: Memasukkan Data Induk (DML)",
    text: "Masukkan 3 nama guru sekaligus ke dalam tabel 'guru' (misal: 'Bapak Budi', 'Ibu Siti', 'Bapak Andi'). Karena id_guru sudah diset otomatis, kamu hanya perlu memasukkan nilainya untuk kolom nama_guru."
  },
  {
    id: 5,
    title: "Soal 5: Mengecek Data Induk (DML)",
    text: "Tampilkan seluruh isi dari tabel 'guru' untuk memastikan ketiga guru tadi berhasil masuk dan memiliki ID masing-masing (1, 2, dan 3)."
  },
  {
    id: 6,
    title: "Soal 6: Membuat Tabel Anak (Tantangan Relasi)",
    text: "Buat tabel kedua bernama 'kelas' dengan 3 kolom: 'id_kelas' (INT AUTO_INCREMENT PRIMARY KEY), 'nama_kelas' (VARCHAR 50), dan 'id_wali' (INT). Deklarasikan 'id_wali' sebagai FOREIGN KEY yang terikat pada kolom 'id_guru' di tabel 'guru'."
  },
  {
    id: 7,
    title: "Soal 7: Memasukkan Data Anak (DML)",
    text: "Masukkan 2 kelas baru ('XI RPL' dan 'XI TKJ') ke dalam tabel 'kelas'. Jadikan guru ber-ID 1 sebagai wali kelas XI RPL, dan guru ber-ID 2 sebagai wali kelas XI TKJ."
  },
  {
    id: 8,
    title: "Soal 8: Membaca Data Anak (DML)",
    text: "Tampilkan seluruh isi tabel 'kelas'. Perhatikan baik-baik pada kolom 'id_wali', data yang muncul hanyalah angka kode guru, bukan nama asli mereka."
  },
  {
    id: 9,
    title: "Soal 9: Menyatukan Data (JOIN Dasar)",
    text: "Gabungkan tabel 'kelas' dan 'guru' agar lebih mudah dibaca. Tampilkan kolom 'nama_kelas' dari tabel kelas dan 'nama_guru' dari tabel guru menggunakan perintah JOIN."
  },
  {
    id: 10,
    title: "Soal 10: Menyederhanakan Sintaks (Klausa AS)",
    text: "Lakukan perintah JOIN yang persis sama seperti soal nomor 9, namun persingkat nama tabel menggunakan Alias (misal tabel kelas disingkat jadi huruf 'k' dan guru menjadi 'g')."
  },
  {
    id: 11,
    title: "Soal 11: Menyaring Hasil JOIN (Klausa WHERE)",
    text: "Tampilkan kembali gabungan data (JOIN) seperti sebelumnya, namun tambahkan filter di akhir perintah untuk HANYA menampilkan data kelas 'XI RPL' beserta nama wali kelasnya."
  },
  {
    id: 12,
    title: "Soal 12: Mengurutkan Hasil JOIN (ORDER BY)",
    text: "Lakukan JOIN sekali lagi! Namun kali ini, urutkan hasil gabungannya berdasarkan 'nama_guru' secara berurutan abjad dari A ke Z."
  },
  {
    id: 13,
    title: "Soal 13: Uji Keamanan Relasi (DELETE Berbahaya)",
    text: "Cobalah paksa hapus data guru yang memiliki ID 1 (Bapak Budi) dari tabel 'guru'. Jika muncul pesan Error, selamat! Itu artinya Foreign Key sukses melindungi data induk agar tidak sembarangan dihapus saat masih terikat dengan tabel anak."
  },
  {
    id: 14,
    title: "Soal 14: Modifikasi Data Terikat (UPDATE)",
    text: "Karena Bapak Budi tidak bisa dihapus, mari kita pindahkan saja tugas wali kelasnya! Ubah data di tabel 'kelas', ganti id_wali yang sebelumnya bernilai 1 menjadi 3."
  },
  {
    id: 15,
    title: "Soal 15: Membersihkan Area Kerja",
    text: "Kerja bagus! Sebagai langkah pamungkas, hancurkan database 'db_sekolah_relasi' secara permanen untuk mengakhiri tantangan ini."
  }
];

export default function RelasiPraktekPage() {
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
          { label: 'Materi', href: '/relasi', isActive: false },
          { label: 'Soal Teori', href: '/relasi/soal', isActive: false },
          { label: 'Soal Praktek', href: '/relasi/praktek', isActive: true }
        ]}
      />

      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />

        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">

            {/* Header */}
            <div className="bg-[#2DD4BF] border-4 border-black p-5 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
              <span className="material-symbols-outlined absolute -top-4 -right-4 text-[120px] opacity-20 rotate-12">hub</span>
              <h1 className="text-3xl md:text-5xl font-black text-black tracking-tighter uppercase mb-4 relative z-10 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">
                15 Soal Praktek Relasi & JOIN
              </h1>
              <p className="text-sm md:text-lg font-bold text-black bg-white inline-block px-4 py-2 md:px-6 md:py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative z-10">
                Pemanasan DDL dan DML dilanjut dengan menyatukan tabel! Ingat, tidak ada contekan sintaks!
              </p>
            </div>

            {isAllCompleted && (
              <div className="bg-[#FACC15] border-4 border-black p-5 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center animate-bounce">
                <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-2">SELURUH RELASI TERHUBUNG! 🎉</h2>
                <p className="font-bold text-sm md:text-xl text-black">Kamu telah resmi menguasai fondasi utama dari sistem database relasional!</p>
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
