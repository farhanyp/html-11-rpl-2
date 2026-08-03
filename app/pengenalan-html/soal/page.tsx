"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import { useState } from 'react';

const questions = [
  {
    id: 1,
    question: "Apa kepanjangan dari HTML?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlink and Text Markup Language",
      "Home Tool Markup Language"
    ],
    answer: 0
  },
  {
    id: 2,
    question: "Fungsi utama HTML dalam pembuatan halaman web adalah?",
    options: [
      "Mengatur tampilan agar lebih menarik",
      "Membuat kerangka dasar dan struktur halaman web",
      "Membuat website menjadi interaktif dengan animasi",
      "Mengelola database pada server"
    ],
    answer: 1
  },
  {
    id: 3,
    question: "Tag dasar mana yang digunakan untuk membungkus seluruh konten HTML?",
    options: [
      "<head>",
      "<body>",
      "<html>",
      "<title>"
    ],
    answer: 2
  },
  {
    id: 4,
    question: "Di bagian mana kita biasanya meletakkan judul halaman, metadata, dan link ke file CSS?",
    options: [
      "<body>",
      "<head>",
      "<footer>",
      "<header>"
    ],
    answer: 1
  },
  {
    id: 5,
    question: "Apa tag yang digunakan untuk membuat paragraf di HTML?",
    options: [
      "<pr>",
      "<text>",
      "<paragraph>",
      "<p>"
    ],
    answer: 3
  },
  {
    id: 6,
    question: "HTML bukanlah sebuah bahasa pemrograman, melainkan bahasa...",
    options: [
      "Pemrograman tingkat tinggi",
      "Query",
      "Markup",
      "Desain"
    ],
    answer: 2
  },
  {
    id: 7,
    question: "Siapa penemu HTML?",
    options: [
      "Bill Gates",
      "Tim Berners-Lee",
      "Steve Jobs",
      "Mark Zuckerberg"
    ],
    answer: 1
  },
  {
    id: 8,
    question: "Apa ekstensi file yang umum digunakan untuk menyimpan dokumen HTML?",
    options: [
      ".html atau .htm",
      ".ht",
      ".web",
      ".txt"
    ],
    answer: 0
  },
  {
    id: 9,
    question: "Apa fungsi tag <title> di dalam elemen <head>?",
    options: [
      "Menampilkan judul di dalam halaman web dengan ukuran paling besar",
      "Menentukan judul halaman web yang muncul di tab browser",
      "Membuat teks menjadi tebal",
      "Menambahkan gambar ke dalam website"
    ],
    answer: 1
  },
  {
    id: 10,
    question: "Struktur paling dasar dari sebuah dokumen HTML5 diawali dengan deklarasi apa?",
    options: [
      "<html5>",
      "<!DOCTYPE html>",
      "<?xml version=\"1.0\"?>",
      "<document type=\"html\">"
    ],
    answer: 1
  }
];

export default function SoalPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (questionIndex: number, optionIndex: number) => {
    if (isSubmitted) return; // Prevent changing answer after submit
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
          { label: 'Materi', href: '/pengenalan-html', isActive: false },
          { label: 'Soal Teori', href: '/pengenalan-html/soal', isActive: true }
        ]} 
      />
      
      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />
        
        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
            
            {/* Header */}
            <div className="bg-[#FF49DB] border-4 border-black p-5 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
              <span className="material-symbols-outlined absolute -top-4 -right-4 text-[120px] opacity-20 rotate-12">quiz</span>
              <h1 className="text-3xl md:text-5xl font-black text-black tracking-tighter uppercase mb-4 relative z-10 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">
                Soal Teori: Pengenalan HTML
              </h1>
              <p className="text-sm md:text-lg font-bold text-black bg-white inline-block px-3 py-2 md:px-4 md:py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative z-10">
                Uji pemahamanmu dari materi sebelumnya!
              </p>
            </div>

            {/* Score Result (Shown after submit) */}
            {isSubmitted && (
              <div className={`border-4 border-black p-5 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center animate-bounce ${score >= 70 ? 'bg-[#2DD4BF]' : 'bg-[#FF49DB]'}`}>
                <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-4">
                  {score >= 70 ? 'Luar Biasa! 🎉' : 'Coba Lagi Ya! 💪'}
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
                      <div className="bg-[#FACC15] border-4 border-black w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-black text-lg md:text-xl flex-shrink-0">
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
                                <span>{String.fromCharCode(65 + optIndex)}.</span>
                                <span>{opt}</span>
                              </div>
                              {showCorrectMarker && <span className="material-symbols-outlined font-black text-black text-2xl">check_circle</span>}
                              {showWrongMarker && <span className="material-symbols-outlined font-black text-white text-2xl">cancel</span>}
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
                  Lihat Hasil
                  <span className="material-symbols-outlined font-black text-2xl md:text-4xl">inventory</span>
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
