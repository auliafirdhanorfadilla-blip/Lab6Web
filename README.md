# Lab6Web

## JavaScript DOM dan Event Handling | Pemrograman Web

### 1. DOM sebagai representasi dokumen HTML
DOM adalah **denah/blueprint** yang bisa dibaca oleh JavaScript. 

**Manfaat utama DOM :** agar website lebih hidup, tidak perlu reload halaman.

![Gambar 1](ss/)
Mengapa memakai textContent bukan innerHTML?
- `textContent` = (isi sebagai teks polos) itu menulis teks apa adanya. Jika user mengetik sesuatu,
akan tampil tulisan yang sama persis
- `innerHTML` = (isi sebagai HTML) itu menempel konten yang tag-nya dibaca jadi format sungguhan. (Berbahaya)


### 2. Event Click
Menampilkan waktu saat tombol diklik.

![Gambar](ss/)
- `addEventListener` = berfungsi untuk membuat event (click, change) dan menjalankan fungsi (callback)
- `submit` = saat form dikirim
- `input` = saat user mengetik di input
- `mouseover` = saat mouse lewat di atas elemen

### 3. Mengubah Gaya CSS
Mengganti tampilan tanpa ubah file CSS.

*style.css*
![Gambar](ss/)

*script.jss*
![Gambar](ss/)
- `classList.add("highlight")` -> Selalu tambah
- `classList.remove("highlight")` -> Selalu hapus
- `classList.toggle("highlight")` -> Tanda selesai

### 4. Event input dan penghitung karakter
Membuat input teks dan indikator jumlah karakter yang diperbarui saat pengguna mengetik. 

![Gambar](ss/)
- Event `input` lebih cepat dari `change.input` deteksi tiap ketikan, `change` menunggu user selesai & klik luar.

### 5. Validasi Form
Membuat form nama, email, dan usia.

*index.html*
![Gambar](ss/)
- `novalidate` = artinya "Matikan validasi bawaan browser". Karena kita mau bikin validasi kita sendiri pakai JS.
- `id="pesanForm"` = tempat untuk menampilkan pesan error/sukses.
- `aria-live="polite"` = jika ada screen raeder, dia akan bacakan pesan errornya.

*script.js*
![Gambar](ss/)
- `event.preventDefault` = kalau kita klik tombol `type=submit`, browser akan langsung reload halaman & kirim data.
Tanpa ini, validasi tidak akan pernah terlihat.
- `.value.trim()` = Validasi nama tidak kosong
    - `.value` = ambil isi ketikan user.
    - `.trim()` = buang semua spasi di depan & belakang.

### 6. Daftar tugas sederhana (To-do List)
Membuat aplikasi kecil untuk menambahkan tugas dan menandai tugas selesai.

*index.html*
![Gambar](ss/)
- `<p id ="pesanTugas">` = tempat pesan "Tulis tugas dulu" atau "Tugas ditambahkan"
- `<ul id="daftarTugas"></ul>` = wadah kosong. nanti semua tugas `<li>` akan dimasukkan ke sini oleh JavaScript.

*style.css*
![Gambar](ss/)
- User klik "Tanda Selesai" -> (CSS) `.selesai span { text-decoration: line-through }` aktif -> tulisan kecoret

*script.js*
![Gambar](ss/)