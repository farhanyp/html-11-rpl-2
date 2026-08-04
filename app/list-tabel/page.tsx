"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import CodeBlock from '@/components/CodeBlock';

export default function ListTabelPage() {
  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/list-tabel', isActive: true },
          { label: 'Soal Teori', href: '/list-tabel/soal', isActive: false }
        ]}
      />
      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />
        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">

            {/* Header & Hero Section */}
            <section className="bg-[#FACC15] border-4 border-black p-6 md:p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">
                List & Tabel
              </h1>
              <p className="text-base md:text-xl font-bold text-black bg-white inline-block px-4 py-2 md:px-6 md:py-3 border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Mengelompokkan data ke dalam daftar poin dan menyusun data tabular!
              </p>
            </section>

            {/* Section 1: Lists (Daftar) */}
            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#FF49DB] text-white w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">1</span>
                Membuat Daftar (Lists)
              </h2>
              
              <div className="mb-8">
                <p className="font-bold text-black/80 text-base md:text-lg mb-4 leading-relaxed">
                  HTML menyediakan dua jenis utama untuk membuat daftar: <strong>Unordered List</strong> (Daftar tidak berurutan dengan simbol titik/peluru) dan <strong>Ordered List</strong> (Daftar berurutan dengan angka/huruf). Di dalam keduanya, setiap item harus dibungkus dengan tag <code>&lt;li&gt;</code> (List Item).
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Unordered List */}
                <div className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white flex flex-col">
                  <div className="bg-[#2DD4BF] border-b-4 border-black p-4">
                    <h3 className="font-black text-xl uppercase text-black">Unordered List &lt;ul&gt;</h3>
                  </div>
                  <div className="p-4 flex-1">
                    <p className="text-sm font-bold text-black/70 mb-4">Gunakan <code>&lt;ul&gt;</code> untuk daftar yang urutannya tidak terlalu penting (contoh: daftar belanja).</p>
                    <CodeBlock 
                      language="html"
                      code={`<ul>\n  <li>Apel</li>\n  <li>Jeruk</li>\n  <li>Mangga</li>\n</ul>`}
                    />
                  </div>
                  <div className="bg-[#F4F0EA] border-t-4 border-black p-4 font-bold">
                    <p className="mb-2 uppercase text-xs tracking-widest text-black/50">Hasil:</p>
                    <ul className="list-disc list-inside space-y-1 marker:text-[#FF49DB] marker:text-xl">
                      <li>Apel</li>
                      <li>Jeruk</li>
                      <li>Mangga</li>
                    </ul>
                  </div>
                </div>

                {/* Ordered List */}
                <div className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white flex flex-col">
                  <div className="bg-[#FACC15] border-b-4 border-black p-4">
                    <h3 className="font-black text-xl uppercase text-black">Ordered List &lt;ol&gt;</h3>
                  </div>
                  <div className="p-4 flex-1">
                    <p className="text-sm font-bold text-black/70 mb-4">Gunakan <code>&lt;ol&gt;</code> untuk daftar yang memerlukan urutan langkah (contoh: resep masakan atau ranking).</p>
                    <CodeBlock 
                      language="html"
                      code={`<ol>\n  <li>Panaskan air</li>\n  <li>Masukkan mi</li>\n  <li>Tiriskan mi</li>\n</ol>`}
                    />
                  </div>
                  <div className="bg-[#F4F0EA] border-t-4 border-black p-4 font-bold">
                    <p className="mb-2 uppercase text-xs tracking-widest text-black/50">Hasil:</p>
                    <ol className="list-decimal list-inside space-y-1 marker:font-black marker:text-[#2DD4BF]">
                      <li>Panaskan air</li>
                      <li>Masukkan mi</li>
                      <li>Tiriskan mi</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Tabel */}
            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12 rotate-[-1deg] hover:rotate-0 transition-transform">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#2DD4BF] text-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">2</span>
                Membuat Tabel (Tables)
              </h2>

              <p className="font-bold text-black/80 text-base md:text-lg mb-8 leading-relaxed">
                Tabel digunakan untuk menampilkan data dalam bentuk baris dan kolom. Di HTML, tabel dibangun dari beberapa tag secara bersamaan:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-center">
                <div className="bg-[#F4F0EA] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-black text-xl mb-1">&lt;table&gt;</h4>
                  <p className="text-xs font-bold text-black/70">Wadah utama tabel</p>
                </div>
                <div className="bg-[#F4F0EA] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-black text-xl mb-1">&lt;tr&gt;</h4>
                  <p className="text-xs font-bold text-black/70">Table Row (Membuat baris mendatar)</p>
                </div>
                <div className="bg-[#F4F0EA] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-black text-xl mb-1">&lt;th&gt;</h4>
                  <p className="text-xs font-bold text-black/70">Table Header (Kolom judul, tebal & tengah)</p>
                </div>
                <div className="bg-[#F4F0EA] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-black text-xl mb-1">&lt;td&gt;</h4>
                  <p className="text-xs font-bold text-black/70">Table Data (Isi sel di dalam kolom)</p>
                </div>
              </div>

              <div className="flex flex-col xl:flex-row gap-8">
                {/* Kode Tabel */}
                <div className="flex-1 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white p-4">
                  <h3 className="font-black uppercase mb-4 inline-block border-b-4 border-black pb-1">Contoh Code Tabel</h3>
                  <CodeBlock 
                    language="html"
                    code={`<table border="1">\n  <tr>\n    <th>Nama</th>\n    <th>Kelas</th>\n    <th>Nilai</th>\n  </tr>\n  <tr>\n    <td>Andi</td>\n    <td>11 RPL 1</td>\n    <td>85</td>\n  </tr>\n  <tr>\n    <td>Budi</td>\n    <td>11 RPL 2</td>\n    <td>90</td>\n  </tr>\n</table>`}
                  />
                  <p className="mt-4 text-xs font-bold text-black/60">* Catatan: Atribut border="1" digunakan agar garis tabel terlihat (biasanya digantikan oleh CSS).</p>
                </div>

                {/* Visualisasi Tabel */}
                <div className="xl:w-1/3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#FF49DB] p-6 flex flex-col justify-center">
                  <h3 className="font-black text-white uppercase mb-4 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] text-center">Tampilan Tabel</h3>
                  <div className="bg-white border-4 border-black w-full overflow-hidden">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-[#FACC15] border-b-4 border-black">
                          <th className="p-3 border-r-4 border-black font-black uppercase text-center">Nama</th>
                          <th className="p-3 border-r-4 border-black font-black uppercase text-center">Kelas</th>
                          <th className="p-3 font-black uppercase text-center">Nilai</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b-4 border-black font-bold">
                          <td className="p-3 border-r-4 border-black text-center">Andi</td>
                          <td className="p-3 border-r-4 border-black text-center">11 RPL 1</td>
                          <td className="p-3 text-center">85</td>
                        </tr>
                        <tr className="font-bold">
                          <td className="p-3 border-r-4 border-black text-center">Budi</td>
                          <td className="p-3 border-r-4 border-black text-center">11 RPL 2</td>
                          <td className="p-3 text-center">90</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Colspan & Rowspan */}
            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12 mb-16">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#4ade80] text-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">3</span>
                Menggabungkan Sel (Colspan & Rowspan)
              </h2>

              <p className="font-bold text-black/80 text-base md:text-lg mb-8 leading-relaxed">
                Tabel memiliki berbagai atribut tambahan. Selain atribut struktural seperti <em>Merge Cells</em> pada Excel, HTML lama juga mengenal pengaturan jarak dan garis pinggir:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-[#F4F0EA] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-black text-lg mb-1 flex items-center gap-1"><span className="material-symbols-outlined text-black">border_all</span> Border</h3>
                  <p className="text-xs font-bold text-black/80">Menambahkan ketebalan garis tepi (contoh: <code>border="1"</code>). Di masa kini digantikan oleh CSS.</p>
                </div>
                <div className="bg-[#F4F0EA] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-black text-lg mb-1 flex items-center gap-1"><span className="material-symbols-outlined text-[#FF49DB]">width</span> Colspan</h3>
                  <p className="text-xs font-bold text-black/80">Menggabungkan <strong>kolom</strong> (melebar ke samping). Contoh: <code>colspan="2"</code> akan memakan 2 ruang kolom mendatar.</p>
                </div>
                <div className="bg-[#F4F0EA] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-black text-lg mb-1 flex items-center gap-1"><span className="material-symbols-outlined text-[#2DD4BF]">height</span> Rowspan</h3>
                  <p className="text-xs font-bold text-black/80">Menggabungkan <strong>baris</strong> (memanjang ke bawah). Contoh: <code>rowspan="2"</code> akan memakan 2 ruang baris menurun.</p>
                </div>
              </div>

              <div className="flex flex-col xl:flex-row gap-8 mb-8">
                {/* Kode Colspan Rowspan */}
                <div className="flex-1 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white p-4">
                  <h3 className="font-black uppercase mb-4 inline-block border-b-4 border-black pb-1">Contoh Merge Cells</h3>
                  <CodeBlock 
                    language="html"
                    code={`<table border="1">\n  <tr>\n    <th colspan="2">Daftar Piket (Gabung 2 Kolom)</th>\n  </tr>\n  <tr>\n    <td rowspan="2">Senin (Gabung 2 Baris)</td>\n    <td>Andi</td>\n  </tr>\n  <tr>\n    <td>Budi</td>\n  </tr>\n</table>`}
                  />
                </div>

                {/* Visualisasi Merge */}
                <div className="xl:w-1/3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#4ade80] p-6 flex flex-col justify-center">
                  <h3 className="font-black text-black uppercase mb-4 text-center">Tampilan Tabel</h3>
                  <div className="bg-white border-4 border-black w-full overflow-hidden">
                    <table className="w-full text-left border-collapse border-4 border-black">
                      <tbody>
                        <tr className="bg-[#FACC15] border-b-4 border-black">
                          <th colSpan={2} className="p-3 border-r-4 border-black font-black text-center text-sm">Daftar Piket (Gabung 2 Kolom)</th>
                        </tr>
                        <tr className="border-b-4 border-black font-bold">
                          <td rowSpan={2} className="p-3 border-r-4 border-black text-center align-middle bg-[#FF49DB] text-white font-black text-sm">Senin<br/>(Gabung 2 Baris)</td>
                          <td className="p-3 text-center border-b-4 border-black">Andi</td>
                        </tr>
                        <tr className="font-bold">
                          <td className="p-3 text-center">Budi</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Semantic Table (<thead>, <tbody>, <tfoot>) */}
            <section className="bg-[#F4F0EA] border-4 border-black p-6 md:p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-4xl md:text-5xl text-[#FF49DB] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">tips_and_updates</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-black uppercase mb-2">
                    <span className="bg-[#FF49DB] text-white w-8 h-8 md:w-10 md:h-10 inline-flex items-center justify-center border-2 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mr-3">4</span>
                    Tabel Semantik Lanjutan (Advanced)
                  </h3>
                  <p className="font-bold text-black/80 mb-4 text-sm md:text-base leading-relaxed mt-4">
                    Untuk tabel yang panjang dan kompleks, sangat disarankan menggunakan struktur pembagian tabel yang lebih rapi (semantik). Ini akan memudahkan pembacaan oleh browser maupun saat dicetak:
                  </p>
                  <ul className="space-y-3 font-bold text-black/80">
                    <li className="flex gap-2">
                      <span className="bg-white border-2 border-black px-2 text-black">&lt;thead&gt;</span>
                      Untuk membungkus baris <code>&lt;tr&gt;</code> yang berisi bagian kepala (header) tabel.
                    </li>
                    <li className="flex gap-2">
                      <span className="bg-white border-2 border-black px-2 text-black">&lt;tbody&gt;</span>
                      Untuk membungkus bagian badan atau konten utama dari tabel.
                    </li>
                    <li className="flex gap-2">
                      <span className="bg-white border-2 border-black px-2 text-black">&lt;tfoot&gt;</span>
                      Untuk membungkus baris kaki tabel, sering digunakan sebagai baris hasil/total.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="mt-12 mb-12 flex flex-col md:flex-row justify-between items-center gap-4 opacity-70">
              <p className="font-black text-xs md:text-sm uppercase tracking-widest text-black text-center md:text-left">© 2024 EDUBRUTAL // SYSTEM STATUS: NOMINAL</p>
            </footer>
          </div>
        </main>
      </div>
    </>
  );
}
