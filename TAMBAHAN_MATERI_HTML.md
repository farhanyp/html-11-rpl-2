# 📝 Tambahan Materi HTML (WebPoint 11 RPL 2)

Dokumen ini berisi draf materi-materi tambahan untuk melengkapi file `MATERI_HTML.md` agar selaras 100% dengan Template Portfolio yang diberikan kepada siswa. Setiap poin dilengkapi dengan **Saran Penempatan** di file utama.

---

## 1. Deklarasi Doctype dan Atribut Bahasa (Language)
> **Saran Penempatan:** Tambahkan di **Bab 1. Pengenalan HTML**, tepat setelah sub-bab "Anatomi Elemen HTML", buatlah sub-bab baru berjudul **"Struktur Dasar Wajib HTML5"**.

### Struktur Dasar Wajib HTML5

Setiap kali kamu membuat file HTML baru, kamu harus selalu menuliskan kerangka dasarnya. Tanpa kerangka ini, browser bisa salah membaca isi website kamu.

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <title>Halaman Pertamaku</title>
</head>
<body>
    <!-- Isi website ditaruh di sini -->
</body>
</html>
```

| Tag/Atribut | Fungsi |
|-------------|--------|
| `<!DOCTYPE html>` | Baris paling atas yang **wajib** ada. Ini memberitahu browser, "Hei, ini adalah file HTML versi 5 (terbaru)!" |
| `<html lang="id">` | Membungkus seluruh halaman. Atribut `lang="id"` memberitahu Google dan Browser bahwa website ini menggunakan bahasa Indonesia. (Gunakan `en` untuk bahasa Inggris). |

---

## 2. Atribut Khusus: `class` dan `id`
> **Saran Penempatan:** Tambahkan di **Bab 2. Elemen & Tag HTML**, buat sub-bab baru di bagian paling bawah bab tersebut.

### Atribut Identitas: `class` dan `id`

Halaman web biasanya memiliki puluhan paragraf atau kotak. Bagaimana cara kita memberikan warna atau memodifikasi satu kotak spesifik tanpa mempengaruhi kotak yang lain? Kita menggunakan atribut **Identitas**.

| Atribut | Aturan Main | Analogi |
|---------|-------------|---------|
| `id="nama"` | Hanya boleh ada **SATU** di seluruh halaman (Unik). Tidak boleh ada elemen lain yang menggunakan ID yang sama. | Seperti Nomor KTP atau NISN. |
| `class="nama"` | Boleh digunakan berkali-kali oleh elemen yang berbeda. | Seperti Seragam Sekolah. Semua siswa kelas 11 RPL bisa memakai class `seragam-rpl`. |

**Contoh Penggunaan:**
```html
<h1 id="judul-utama">Selamat Datang</h1>
<p class="teks-tebal">Paragraf pertama.</p>
<p class="teks-tebal">Paragraf kedua juga memakai desain yang sama.</p>
```
> 💡 **Fungsi Utama:** Nantinya, CSS dan JavaScript akan menggunakan `id` dan `class` ini untuk mencari elemen mana yang ingin diberi warna atau diberi animasi!

---

## 3. Link Meloncat (Anchor Link / Scroll Link)
> **Saran Penempatan:** Tambahkan di **Bab 4. Link & Gambar**, letakkan di bawah sub-bab "Tautan (Link) Menggunakan `<a>`", sebagai poin ke-4.

#### 4. Link Meloncat di Halaman yang Sama (Anchor Link)

Pernahkah kamu mengklik menu di sebuah website, lalu halamannya otomatis *scroll* ke bawah secara mulus? Itu disebut **Anchor Link**.

Caranya adalah dengan menghubungkan nilai `href` dengan `id` dari elemen tujuan menggunakan tanda pagar (`#`).

```html
<!-- Tombol yang diklik -->
<a href="#bagian-kontak">Pergi ke Bawah</a>

<p>... banyak konten panjang di sini ...</p>

<!-- Tujuan tempat mendarat -->
<section id="bagian-kontak">
    <h2>Hubungi Kami</h2>
</section>
```

---

## 4. Atribut Style (Inline CSS)
> **Saran Penempatan:** Tambahkan di **Bab 3. Heading & Paragraf**, di bagian bawah sebelum masuk ke Bab 4. Bisa dimasukkan sebagai sub-bab kecil.

### Modifikasi Tampilan Cepat (Inline CSS)

Meskipun biasanya warna dan desain diatur di file terpisah (CSS), HTML mengizinkan kita melakukan desain "dadakan" langsung di dalam tag menggunakan atribut **`style`**.

```html
<p style="color: red; font-size: 20px;">Teks ini berwarna merah dan besar.</p>
<span style="background-color: yellow;">Teks dengan stabilo kuning</span>
```
> ⚠️ **Catatan:** Penggunaan `style` di HTML (Inline CSS) biasanya hanya digunakan untuk kasus darurat atau spesifik. Desainer web profesional selalu meletakkan desainnya di file CSS terpisah agar kode HTML tetap bersih!

---

## 5. Gambar Vektor (SVG)
> **Saran Penempatan:** Tambahkan di **Bab 4. Link & Gambar**, di bagian paling akhir, atau di **Bab 7. Multimedia & Embed**.

### Mengenal Tag `<svg>` (Scalable Vector Graphics)

Selain menggunakan `<img>` untuk memasukkan foto (JPG/PNG), HTML modern sering menggunakan **SVG** untuk menampilkan logo atau ikon.

SVG adalah gambar yang dibuat menggunakan *kode matematika*, bukan kumpulan pixel. Kelebihannya: gambar SVG tidak akan pernah pecah (blur) meskipun di-zoom sebesar apapun!

```html
<!-- Contoh kode SVG untuk membuat sebuah lingkaran -->
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```
> 💡 **Info:** Dalam template modern, ikon seperti logo Instagram atau GitHub biasanya berupa barisan kode `<svg>` dan `<path>` yang panjang. Kamu tidak perlu menghafalnya, karena ikon ini biasanya di-copy paste langsung dari situs penyedia ikon (seperti *FontAwesome* atau *FeatherIcons*).
