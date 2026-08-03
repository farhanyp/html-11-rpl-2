"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

const questions = [
  {
    id: 1,
    question: "Perintah SQL yang digunakan untuk membangun atau membuat tabel baru dari nol adalah?",
    options: [
      "CREATE",
      "ALTER",
      "INSERT",
      "DROP"
    ],
    answer: 0
  },
  {
    id: 2,
    question: "Apa fungsi utama dari perintah ALTER dalam kelompok DDL?",
    options: [
      "Memasukkan baris data baru",
      "Mengubah struktur atau bentuk tabel yang sudah ada",
      "Menghapus tabel secara permanen",
      "Menampilkan seluruh isi tabel"
    ],
    answer: 1
  },
  {
    id: 3,
    question: "Jika kamu ingin menghancurkan sebuah tabel beserta seluruh isinya secara permanen, perintah apa yang tepat?",
    options: [
      "DELETE",
      "DROP",
      "REMOVE",
      "CLEAR"
    ],
    answer: 1
  },
  {
    id: 4,
    question: "Manakah penulisan query yang paling tepat untuk memasukkan baris data baru ke dalam tabel 'siswa'?",
    options: [
      "INSERT INTO siswa VALUES (1);",
      "PUT INTO siswa (1);",
      "ADD DATA siswa (1);",
      "CREATE siswa VALUES (1);"
    ],
    answer: 0
  },
  {
    id: 5,
    question: "Kamu diminta untuk membaca atau menampilkan seluruh kolom data dari tabel 'produk'. Query manakah yang benar?",
    options: [
      "SHOW ALL FROM produk;",
      "SELECT * FROM produk;",
      "DISPLAY produk;",
      "READ produk *;"
    ],
    answer: 1
  },
  {
    id: 6,
    question: "Karakter apa yang menjadi 'Aturan Emas' dan wajib diletakkan di akhir setiap eksekusi perintah SQL?",
    options: [
      "Titik dua (:)",
      "Tanda kurung ()",
      "Tanda tanya (?)",
      "Titik koma (;)"
    ],
    answer: 3
  },
  {
    id: 7,
    question: "Saat memperbarui harga barang, kita menggunakan UPDATE. Mengapa klausa WHERE (misal: WHERE id = 1) sangat wajib disertakan saat melakukan UPDATE?",
    options: [
      "Agar tabel tidak secara otomatis terhapus",
      "Agar proses loading query menjadi lebih lambat",
      "Agar tidak SEMUA baris data di tabel tersebut ikut berubah nilainya",
      "Karena disuruh oleh sistem operasi Windows"
    ],
    answer: 2
  },
  {
    id: 8,
    question: "Perintah DML mana yang berfungsi khusus untuk menghapus baris data tertentu (bukan menghancurkan keseluruhan tabel)?",
    options: [
      "DROP",
      "ERASE",
      "TRUNCATE",
      "DELETE"
    ],
    answer: 3
  },
  {
    id: 9,
    question: "Aturan penulisan perintah SQL pada dasarnya tidak bersifat 'case-sensitive'. Apa maksud dari hal tersebut?",
    options: [
      "Harus selalu mengetik memakai huruf kapital semua",
      "Perintah SELECT sama saja artinya dengan perintah select",
      "Database sangat sensitif terhadap penempatan spasi",
      "Tidak boleh menggunakan angka sama sekali"
    ],
    answer: 1
  },
  {
    id: 10,
    question: "DDL dan DML adalah dua kategori utama perintah SQL. INSERT, SELECT, UPDATE, dan DELETE masuk ke dalam kategori mana?",
    options: [
      "DDL (Data Definition Language)",
      "HTML (Hypertext Markup Language)",
      "DML (Data Manipulation Language)",
      "CSS (Cascading Style Sheets)"
    ],
    answer: 2
  }
];

export default function QuerySqlSoalPage() {
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
          { label: 'Materi', href: '/query-sql', isActive: false },
          { label: 'Soal Teori', href: '/query-sql/soal', isActive: true },
          { label: 'Soal Praktek', href: '/query-sql/praktek', isActive: false }
        ]} 
      />
      
      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />
        
        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
            
            {/* Header */}
            <div className="bg-[#FF49DB] border-4 border-black p-5 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
              <span className="material-symbols-outlined absolute -top-4 -right-4 text-[120px] opacity-20 -rotate-12">terminal</span>
              <h1 className="text-3xl md:text-5xl font-black text-black tracking-tighter uppercase mb-4 relative z-10 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">
                Soal Praktek: Query SQL
              </h1>
              <p className="text-sm md:text-lg font-bold text-black bg-white inline-block px-3 py-2 md:px-4 md:py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative z-10">
                Uji kemampuanmu membedakan perintah DDL dan DML!
              </p>
            </div>

            {/* Score Result (Shown after submit) */}
            {isSubmitted && (
              <div className={`border-4 border-black p-5 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center animate-bounce ${score >= 70 ? 'bg-[#2DD4BF]' : 'bg-[#FF49DB]'}`}>
                <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-4">
                  {score >= 70 ? 'Kode Berhasil Dieksekusi! 🎉' : 'Query Error, Coba Lagi! 🐛'}
                </h2>
                <div className="text-5xl md:text-7xl font-black text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                  {score} / 100
                </div>
                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setAnswers({});
                    setScore(0);
                  }}
                  className="mt-6 bg-[#FACC15] text-black font-black text-sm md:text-xl px-6 py-3 md:px-8 md:py-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all uppercase"
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
                      <div className="bg-[#FACC15] border-4 border-black w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-black text-lg md:text-xl flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
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
                        if (isSelected && !isSubmitted) optClass = "bg-[#2DD4BF] text-black translate-x-2";
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
                                <span className={opt.includes(';') || opt.includes('SELECT') || opt.includes('INSERT') || opt.includes('UPDATE') || opt.includes('DELETE') || opt.includes('DROP') || opt.includes('CREATE') || opt.includes('ALTER') ? "font-mono" : ""}>{opt}</span>
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
                  className={`font-black text-sm md:text-2xl px-6 py-4 md:px-12 md:py-6 border-4 border-black transition-all uppercase flex items-center gap-2 md:gap-4 mx-auto ${
                    isAllAnswered 
                      ? 'bg-[#2DD4BF] text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] active:translate-x-[8px] active:translate-y-[8px] active:shadow-none cursor-pointer' 
                      : 'bg-[#ddd9d4] text-black/50 shadow-none cursor-not-allowed'
                  }`}
                >
                  Eksekusi Jawaban
                  <span className="material-symbols-outlined font-black text-2xl md:text-4xl">play_circle</span>
                </button>
                {!isAllAnswered && (
                  <p className="mt-4 font-bold text-[#FF49DB] text-sm md:text-lg bg-white border-2 border-black inline-block px-3 py-2 md:px-4 md:py-2">
                    * Jawab semua {questions.length} pertanyaan terlebih dahulu.
                  </p>
                )}
              </div>
            )}
            
            <div className="h-12 w-full"></div>
          </div>
        </main>
      </div>
    </>
  );
}
