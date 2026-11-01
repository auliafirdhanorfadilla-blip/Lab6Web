# Lab6Web

## JavaScript DOM dan Event Handling | Pemrograman Web

### 1. DOM sebagai representasi dokumen HTML
DOM adalah **denah/blueprint** yang bisa dibaca oleh JavaScript. 

**Manfaat utama DOM :** agar website lebih hidup, tidak perlu reload halaman.

*index.html*
![Gambar 1](ss/ss1.png)

*script.js*
![Gambar 2](ss/js1.png)
Mengapa memakai textContent bukan innerHTML?
- `textContent` = (isi sebagai teks polos) itu menulis teks apa adanya. Jika user mengetik sesuatu,
akan tampil tulisan yang sama persis
- `innerHTML` = (isi sebagai HTML) itu menempel konten yang tag-nya dibaca jadi format sungguhan. (Berbahaya)

![Gambar 3](ss/output1.png)

### 2. Event Click
Menampilkan waktu saat tombol diklik.

*index.html*
![Gambar 4](ss/ss2.png)

*script.js*
![Gambar 5](ss/j2.png)
- `addEventListener` = berfungsi untuk membuat event (click, change) dan menjalankan fungsi (callback)
- `submit` = saat form dikirim
- `input` = saat user mengetik di input
- `mouseover` = saat mouse lewat di atas elemen

![Gambar 6](ss/output2.png)

### 3. Mengubah Gaya CSS
Mengganti tampilan tanpa ubah file CSS.

*index.html*
![Gambar 7](ss/ss3.png)

*style.css*
![Gambar 8](ss/css3.png)

*script.js*
![Gambar 9](ss/js3.png)
- `classList.add("highlight")` -> Selalu tambah
- `classList.remove("highlight")` -> Selalu hapus
- `classList.toggle("highlight")` -> Tanda selesai

![Gambar 10](ss/output3.png)

### 4. Event input dan penghitung karakter
Membuat input teks dan indikator jumlah karakter yang diperbarui saat pengguna mengetik. 

*index.html*
![Gambar 11](ss/ss4.png)
- Event `input` lebih cepat dari `change.input` deteksi tiap ketikan, `change` menunggu user selesai & klik luar.

*script.js*
![Gambar 12](ss/js4.png)

![Gambar 13](ss/output4.png)

### 5. Validasi Form
Membuat form nama, email, dan usia.

*index.html*
![Gambar 14](ss/ss5.png)
- `novalidate` = artinya "Matikan validasi bawaan browser". Karena kita mau bikin validasi kita sendiri pakai JS.
- `id="pesanForm"` = tempat untuk menampilkan pesan error/sukses.
- `aria-live="polite"` = jika ada screen raeder, dia akan bacakan pesan errornya.

*script.js*
![Gambar 15](ss/js5.png)
- `event.preventDefault` = kalau kita klik tombol `type=submit`, browser akan langsung reload halaman & kirim data.
Tanpa ini, validasi tidak akan pernah terlihat.
- `.value.trim()` = Validasi nama tidak kosong
    - `.value` = ambil isi ketikan user.
    - `.trim()` = buang semua spasi di depan & belakang.

### 6. Daftar tugas sederhana (To-do List)
Membuat aplikasi kecil untuk menambahkan tugas dan menandai tugas selesai.

*index.html*
![Gambar 16](ss/ss6.png)
- `<p id ="pesanTugas">` = tempat pesan "Tulis tugas dulu" atau "Tugas ditambahkan"
- `<ul id="daftarTugas"></ul>` = wadah kosong. nanti semua tugas `<li>` akan dimasukkan ke sini oleh JavaScript.

*style.css*
![Gambar 17](ss/css6.png)
- User klik "Tanda Selesai" -> (CSS) `.selesai span { text-decoration: line-through }` aktif -> tulisan kecoret

*script.js*
![Gambar 18](ss/js6.png)