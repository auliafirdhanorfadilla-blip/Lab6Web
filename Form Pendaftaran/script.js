const form = document.getElementById("formWorkshop");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const sesi = document.getElementById("sesi");

const pesan = document.getElementById("pesan");
const jumlahKarakter = document.getElementById("jumlahKarakter");

const errorNama = document.getElementById("errorNama");
const errorEmail = document.getElementById("errorEmail");
const errorSesi = document.getElementById("errorSesi");

// Fungsi memperbarui ringkasan
function updateRingkasan() {
  document.getElementById("previewNama").textContent =
    nama.value.trim() || "-";

  document.getElementById("previewEmail").textContent =
    email.value.trim() || "-";

  document.getElementById("previewSesi").textContent =
    sesi.value || "-";
}

// Fungsi menghapus pesan status
function hapusPesan() {
  pesan.textContent = "";
  pesan.className = "";
}

// 1. Menghitung karakter nama secara langsung
nama.addEventListener("input", function() {
  jumlahKarakter.textContent =
    nama.value.length + "/50 karakter";

  errorNama.textContent = "";
  hapusPesan();
  updateRingkasan();
});

// 2. Menampilkan email secara langsung
email.addEventListener("input", function() {
  errorEmail.textContent = "";
  hapusPesan();
  updateRingkasan();
});

// 3. Mendeteksi perubahan sesi
sesi.addEventListener("change", function() {
  errorSesi.textContent = "";
  hapusPesan();
  updateRingkasan();
});

// 4. Validasi saat tombol daftar diklik
form.addEventListener("submit", function(event) {
  event.preventDefault();

  let valid = true;

  errorNama.textContent = "";
  errorEmail.textContent = "";
  errorSesi.textContent = "";
  hapusPesan();

  // Validasi nama
  if (nama.value.trim().length < 3) {
    errorNama.textContent =
      "Nama minimal 3 karakter!";
    valid = false;
  }

  // Validasi email
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!polaEmail.test(email.value.trim())) {
    errorEmail.textContent =
      "Masukkan alamat email yang valid!";
    valid = false;
  }

  // Validasi sesi
  if (sesi.value === "") {
    errorSesi.textContent =
      "Silakan pilih sesi workshop!";
    valid = false;
  }

  // Menampilkan pesan
  if (valid) {
    pesan.textContent =
      "Pendaftaran berhasil! Terima kasih sudah mendaftar.";
    pesan.className = "sukses";
  } else {
    pesan.textContent =
      "Pendaftaran gagal. Periksa kembali data kamu!";
    pesan.className = "gagal";
  }
});

// 5. Menghapus semua input dengan tombol reset
form.addEventListener("reset", function() {
  errorNama.textContent = "";
  errorEmail.textContent = "";
  errorSesi.textContent = "";

  jumlahKarakter.textContent = "0/50 karakter";
  hapusPesan();

  // Menunggu nilai input kembali kosong
  setTimeout(updateRingkasan, 0);
});