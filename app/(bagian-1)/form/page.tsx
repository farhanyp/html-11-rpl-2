"use client";

import Headbar from '@/components/Headbar';
import Sidebar from '@/components/Sidebar';
import CodeBlock from '@/components/CodeBlock';

export default function FormPage() {
  return (
    <>
      <Headbar
        links={[
          { label: 'Materi', href: '/form', isActive: true },
          { label: 'Soal Teori', href: '/form/soal', isActive: false }
        ]}
      />
      <div className="flex pt-[88px] min-h-screen">
        <Sidebar />
        <main className="md:ml-[280px] w-full p-4 md:p-10 bg-[#F4F0EA] relative" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">

            {/* Header & Hero Section */}
            <section className="bg-[#4ade80] border-4 border-black p-6 md:p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">
                Form HTML
              </h1>
              <p className="text-base md:text-xl font-bold text-black bg-white inline-block px-4 py-2 md:px-6 md:py-3 border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Cara interaktif untuk menerima input (masukan) dari pengguna!
              </p>
            </section>

            {/* Section 1: Konsep Form Dasar */}
            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#FF49DB] text-white w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">1</span>
                Struktur Tag &lt;form&gt;
              </h2>
              
              <div className="mb-8">
                <p className="font-bold text-black/80 text-base md:text-lg mb-4 leading-relaxed">
                  Semua input dari pengguna (seperti kolom nama, pilihan ganda, atau kolom password) harus dibungkus di dalam tag <code>&lt;form&gt;</code>. Form biasanya digunakan untuk halaman registrasi, login, atau kolom komentar.
                </p>
              </div>

              <div className="bg-[#F4F0EA] border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8">
                <h3 className="font-black text-xl mb-4 text-[#FF49DB] drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">Atribut Penting Form</h3>
                <ul className="space-y-4 font-bold text-black/80">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-black font-black mt-1">send</span>
                    <p>
                      <strong className="bg-white border-2 border-black px-1">action="..."</strong> Menentukan URL file tujuan ke mana data form tersebut akan dikirimkan saat tombol submit ditekan.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-black font-black mt-1">sync_alt</span>
                    <p>
                      <strong className="bg-white border-2 border-black px-1">method="..."</strong> Cara pengiriman data. Umumnya menggunakan <strong>GET</strong> (data dikirim via URL, tidak aman untuk password) atau <strong>POST</strong> (data dikirim di balik layar, lebih aman).
                    </p>
                  </li>
                </ul>
              </div>

              <div className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-1 hover:rotate-0 transition-transform">
                <CodeBlock 
                  language="html"
                  code={`<form action="/proses-login.php" method="POST">\n  <!-- Isi input (teks, tombol) ditaruh di sini -->\n</form>`}
                />
              </div>
            </section>

            {/* Section 2: Input & Label */}
            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#2DD4BF] text-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">2</span>
                Mengenal Input & Label
              </h2>

              <p className="font-bold text-black/80 text-base md:text-lg mb-8 leading-relaxed">
                Di dalam form, kita butuh kolom ketik. Tag <code>&lt;input&gt;</code> merupakan tag tunggal untuk membuat berbagai macam model kolom masukan. Bentuknya ditentukan oleh atribut <strong className="bg-[#FACC15] px-1 border-2 border-black text-black">type=""</strong>. Jangan lupa tag <code>&lt;label&gt;</code> sebagai teks penjelas kolom tersebut.
              </p>

              <div className="space-y-8">
                
                {/* Text & Password */}
                <div className="border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col xl:flex-row">
                  <div className="flex-1 p-6 border-b-4 xl:border-b-0 xl:border-r-4 border-black">
                    <h3 className="font-black text-xl mb-4 flex items-center gap-2"><span className="material-symbols-outlined text-[#2DD4BF]">text_fields</span> Input Text & Password</h3>
                    <CodeBlock 
                      language="html"
                      code={`<!-- Label 'for' harus sama dengan 'id' pada input -->\n<label for="username">Username:</label>\n<input type="text" id="username" name="username">\n\n<label for="pwd">Password:</label>\n<input type="password" id="pwd" name="pwd">`}
                    />
                  </div>
                  <div className="xl:w-1/3 bg-[#F4F0EA] p-6 flex flex-col justify-center gap-4">
                    <div>
                      <label className="font-bold text-sm block mb-1">Username:</label>
                      <input type="text" placeholder="Ketik nama..." className="w-full border-2 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] outline-none focus:shadow-none focus:translate-x-[2px] focus:translate-y-[2px] transition-all" />
                    </div>
                    <div>
                      <label className="font-bold text-sm block mb-1">Password:</label>
                      <input type="password" placeholder="Ketik rahasia..." className="w-full border-2 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] outline-none focus:shadow-none focus:translate-x-[2px] focus:translate-y-[2px] transition-all" />
                    </div>
                  </div>
                </div>

                {/* Radio & Checkbox */}
                <div className="border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col xl:flex-row">
                  <div className="flex-1 p-6 border-b-4 xl:border-b-0 xl:border-r-4 border-black">
                    <h3 className="font-black text-xl mb-4 flex items-center gap-2"><span className="material-symbols-outlined text-[#FF49DB]">fact_check</span> Radio & Checkbox</h3>
                    <p className="text-sm font-bold text-black/70 mb-4"><strong>Radio:</strong> Pilih salah satu opsi saja. <strong>Checkbox:</strong> Boleh pilih banyak opsi.</p>
                    <CodeBlock 
                      language="html"
                      code={`<!-- name="gender" harus SAMA agar terhubung! -->\n<input type="radio" id="pria" name="gender">\n<label for="pria">Pria</label>\n<input type="radio" id="wanita" name="gender">\n<label for="wanita">Wanita</label>\n\n<input type="checkbox" id="setuju">\n<label for="setuju">Saya setuju dengan syarat</label>`}
                    />
                  </div>
                  <div className="xl:w-1/3 bg-[#F4F0EA] p-6 flex flex-col justify-center gap-6">
                    <div>
                      <p className="font-bold text-sm mb-2">Gender:</p>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 font-bold cursor-pointer">
                          <input type="radio" name="demo-gender" className="w-4 h-4 accent-[#FF49DB]" /> Pria
                        </label>
                        <label className="flex items-center gap-2 font-bold cursor-pointer">
                          <input type="radio" name="demo-gender" className="w-4 h-4 accent-[#FF49DB]" /> Wanita
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="flex items-center gap-2 font-bold cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 accent-[#2DD4BF]" /> Saya setuju
                      </label>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* Section 3: Select, Textarea & Button */}
            <section className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12 rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex items-center gap-3 md:gap-4">
                <span className="bg-[#FACC15] text-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 text-xl md:text-3xl">3</span>
                Dropdown, Pesan, & Tombol
              </h2>

              <div className="space-y-8">
                
                {/* Select & Option */}
                <div className="bg-[#F4F0EA] border-4 border-black p-4 flex flex-col md:flex-row gap-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex-1">
                    <h3 className="font-black uppercase mb-2">Dropdown (Select)</h3>
                    <CodeBlock 
                      language="html"
                      code={`<select name="kelas">\n  <option value="11rpl1">11 RPL 1</option>\n  <option value="11rpl2">11 RPL 2</option>\n</select>`}
                    />
                  </div>
                  <div className="md:w-1/3 flex items-center">
                    <select className="w-full border-2 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold cursor-pointer outline-none">
                      <option>11 RPL 1</option>
                      <option>11 RPL 2</option>
                    </select>
                  </div>
                </div>

                {/* Textarea */}
                <div className="bg-[#F4F0EA] border-4 border-black p-4 flex flex-col md:flex-row gap-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex-1">
                    <h3 className="font-black uppercase mb-2">Pesan Panjang (Textarea)</h3>
                    <p className="text-xs font-bold text-black/70 mb-2">Berbeda dengan <code>&lt;input&gt;</code>, textarea memiliki tag penutup untuk teks panjang (multi-baris).</p>
                    <CodeBlock 
                      language="html"
                      code={`<textarea name="pesan" rows="4"></textarea>`}
                    />
                  </div>
                  <div className="md:w-1/3 flex items-center">
                    <textarea rows={3} placeholder="Tulis keluhanmu..." className="w-full border-2 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] outline-none resize-none"></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="bg-[#FF49DB] border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-white text-center">
                  <h3 className="font-black uppercase text-2xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] mb-4">Tombol Submit</h3>
                  <p className="font-bold text-white/90 mb-4 text-sm max-w-2xl mx-auto">
                    Tombol ini digunakan untuk mengirim isi dari sebuah form ke dalam alamat <code>action</code> yang ditulis pada tag <code>&lt;form&gt;</code>.
                  </p>
                  <CodeBlock 
                      language="html"
                      code={`<input type="submit" value="Kirim Data"> \n<!-- ATAU --> \n<button type="submit">Kirim Data</button>`}
                  />
                  <button className="mt-6 font-black uppercase tracking-wider text-xl px-8 py-3 bg-[#FACC15] text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all">
                    Kirim Data Form
                  </button>
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
