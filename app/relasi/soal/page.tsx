"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

const questions = [
  {
    id: 1,
    question: "Apa alasan utama kita harus memecah data menjadi beberapa tabel dan menghubungkannya dengan relasi?",
    options: [
      "Agar tampilan website menjadi lebih berwarna",
      "Menghindari penulisan data yang berulang-ulang dan mencegah inkonsistensi",
      "Karena diwajibkan oleh bahasa pemrograman HTML",
      "Agar kapasitas penyimpanan database menjadi lebih boros"
    ],
    answer: 1
  },
  {
    id: 2,
    question: "Dalam analogi sekolah, kondisi di mana 'Satu Kelas bisa menampung Banyak Siswa' disebut sebagai jenis relasi?",
    options: [
      "One-to-One",
      "Many-to-Many",
      "One-to-Many",
      "Many-to-One"
    ],
    answer: 2
  },
  {
    id: 3,
    question: "Relasi 'Satu siswa hanya memiliki satu akun login ujian yang unik' adalah contoh paling tepat dari relasi?",
    options: [
      "One-to-One",
      "One-to-Many",
      "Many-to-Many",
      "Zero-to-One"
    ],
    answer: 0
  },
  {
    id: 4,
    question: "Kolom spesial yang bertugas sebagai identitas utama nan unik di dalam sebuah tabel (seperti halnya NIK di KTP) disebut?",
    options: [
      "FOREIGN KEY",
      "PRIMARY KEY",
      "UNIQUE KEY",
      "SUPER KEY"
    ],
    answer: 1
  },
  {
    id: 5,
    question: "Tali pengikat yang digunakan untuk menyambungkan tabel anak ke Primary Key di tabel induk disebut dengan?",
    options: [
      "FOREIGN KEY",
      "SECONDARY KEY",
      "MANDATORY KEY",
      "JOIN KEY"
    ],
    answer: 0
  },
  {
    id: 6,
    question: "Bagaimana cara penulisan sintaks SQL yang benar untuk mendeklarasikan 'id_kelas_tamu' sebagai jembatan ke tabel 'kelas(id_kelas)'?",
    options: [
      "FOREIGN KEY (id_kelas) TO kelas(id_kelas_tamu)",
      "CONNECT (id_kelas_tamu) WITH kelas(id_kelas)",
      "JOIN KEY (id_kelas_tamu) ON kelas(id_kelas)",
      "FOREIGN KEY (id_kelas_tamu) REFERENCES kelas(id_kelas)"
    ],
    answer: 3
  },
  {
    id: 7,
    question: "Apa masalah utama yang biasa terjadi jika kita melihat data pada tabel anak yang memiliki relasi, TANPA menggabungkannya dengan tabel induk?",
    options: [
      "Tabel anak akan otomatis terhapus",
      "Data yang muncul hanya berupa angka/kode ID yang sulit dipahami manusia",
      "Komputer akan mengalami error sistem",
      "Semua data siswa akan berubah menjadi huruf kapital"
    ],
    answer: 1
  },
  {
    id: 8,
    question: "Perintah/Klausa SQL apa yang digunakan untuk menyatukan baris dari dua tabel berbeda agar saling terhubung saat datanya dibaca?",
    options: [
      "MERGE",
      "COMBINE",
      "JOIN",
      "ATTACH"
    ],
    answer: 2
  },
  {
    id: 9,
    question: "Jika kita memiliki tabel 'kelas' dan 'siswa', sintaks penghubung (Klausa ON) manakah yang tepat dalam sebuah perintah JOIN?",
    options: [
      "ON siswa.id_kelas_tamu = kelas.id_kelas",
      "WHERE siswa = kelas",
      "ON siswa.nama = kelas.nama",
      "CONNECT siswa TO kelas"
    ],
    answer: 0
  },
  {
    id: 10,
    question: "Di kantin, 'Murid bebas memilih banyak makanan, dan satu jenis makanan bisa dibeli oleh banyak murid'. Ini merupakan contoh relasi?",
    options: [
      "One-to-One",
      "Many-to-Many",
      "One-to-Many",
      "Semua jawaban salah"
    ],
    answer: 1
  }
];

export default function RelasiSoalPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (questionIndex: number, optionIndex: number) => {
    if (isSubmitted) return;
    setAnswers({ ...answers, [questionIndex]: optionIndex });
  };

  const isAllAnswered = Object.keys(answers).length === questions.length;

  const handleSubmit = () => {
    if (!isAllAnswered) return;
    
    let currentScore = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.answer) {
        currentScore += 10;
      }
    });
    setScore(currentScore);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Headbar 
        links={[
          { label: 'Materi', href: '/relasi', isActive: false },
          { label: 'Soal Teori', href: '/relasi/soal', isActive: true },
          { label: 'Soal Praktek', href: '/relasi/praktek', isActive: false }
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
                Ujian Teori: Relasi & JOIN
              </h1>
              <p className="text-sm md:text-lg font-bold text-black bg-white inline-block px-3 py-2 md:px-4 md:py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative z-10">
                Buktikan pemahamanmu tentang bagaimana tabel-tabel di database saling berbicara!
              </p>
            </div>

            {/* Score Result (Shown after submit) */}
            {isSubmitted && (
              <div className={`border-4 border-black p-5 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center animate-bounce ${score >= 70 ? 'bg-[#FF49DB] text-white' : 'bg-[#FACC15] text-black'}`}>
                <h2 className="text-2xl md:text-4xl font-black uppercase mb-4">
                  {score >= 70 ? 'Luar Biasa! Tali Relasi Tersambung! 🔗' : 'Waduh, Relasinya Terputus! 💔'}
                </h2>
                <div className="text-5xl md:text-7xl font-black drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                  {score} / 100
                </div>
                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setAnswers({});
                    setScore(0);
                  }}
                  className="mt-6 bg-white text-black font-black text-sm md:text-xl px-6 py-3 md:px-8 md:py-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all uppercase"
                >
                  Ulangi Kuis
                </button>
              </div>
            )}

            {/* Questions Form */}
            <div className="space-y-8">
              {questions.map((q, qIndex) => {
                const isCorrect = isSubmitted && answers[qIndex] === q.answer;
                const isWrong = isSubmitted && answers[qIndex] !== q.answer;
                
                return (
                  <div 
                    key={q.id} 
                    className={`bg-white border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all ${isCorrect ? 'border-[#2DD4BF] bg-[#effefb]' : ''} ${isWrong ? 'border-[#FF49DB] bg-[#fff0f9]' : ''}`}
                  >
                    <div className="flex gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="bg-[#FF49DB] text-white border-4 border-black w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-black text-lg md:text-xl flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        {q.id}
                      </div>
                      <h3 className="text-lg md:text-2xl font-black text-black leading-snug">
                        {q.question}
                      </h3>
                    </div>
                    
                    <div className="space-y-4">
                      {q.options.map((opt, optIndex) => {
                        const isSelected = answers[qIndex] === optIndex;
                        const showCorrectMarker = isSubmitted && optIndex === q.answer;
                        const showWrongMarker = isSubmitted && isSelected && optIndex !== q.answer;
                        
                        let optClass = "bg-white text-black hover:bg-[#F4F0EA]";
                        if (isSelected && !isSubmitted) optClass = "bg-[#FACC15] text-black translate-x-2";
                        if (showCorrectMarker) optClass = "bg-[#2DD4BF] text-black translate-x-2 shadow-[inset_4px_4px_0px_0px_rgba(0,0,0,1)]";
                        if (showWrongMarker) optClass = "bg-[#FF49DB] text-white translate-x-2 shadow-[inset_4px_4px_0px_0px_rgba(0,0,0,1)]";

                        return (
                          <div 
                            key={optIndex}
                            onClick={() => handleSelect(qIndex, optIndex)}
                            className={`border-4 border-black p-3 md:p-4 font-bold text-sm md:text-lg cursor-pointer transition-all ${optClass} ${isSubmitted ? 'cursor-default' : ''}`}
                          >
                            <div className="flex justify-between items-center">
                              <div className="flex gap-4">
                                <span className="w-6 flex-shrink-0 font-black">{String.fromCharCode(65 + optIndex)}.</span>
                                <span className={opt.includes('FOREIGN KEY') || opt.includes('ON ') || opt.includes('JOIN') ? "font-mono" : ""}>{opt}</span>
                              </div>
                              {showCorrectMarker && <span className="material-symbols-outlined font-black text-black text-2xl flex-shrink-0">check_circle</span>}
                              {showWrongMarker && <span className="material-symbols-outlined font-black text-white text-2xl flex-shrink-0">cancel</span>}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Submit Button */}
            {!isSubmitted && (
              <div className="text-center pt-8">
                <button 
                  onClick={handleSubmit}
                  disabled={!isAllAnswered}
                  className={`font-black text-sm md:text-2xl px-6 py-4 md:px-12 md:py-6 border-4 border-black transition-all uppercase tracking-wider
                    ${isAllAnswered 
                      ? 'bg-[#2DD4BF] text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] active:translate-x-[8px] active:translate-y-[8px] active:shadow-none' 
                      : 'bg-[#ddd9d4] text-black/50 shadow-none cursor-not-allowed'
                    }
                  `}
                >
                  {isAllAnswered ? 'Kumpulkan Jawaban!' : 'Jawab Semua Soal Dulu!'}
                </button>
              </div>
            )}
            
            <div className="h-12 w-full"></div>
          </div>
        </main>
      </div>
    </>
  );
}
