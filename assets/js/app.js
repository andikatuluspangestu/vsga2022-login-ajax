// Deklarasi Variabel untuk DOM
var $form = document.querySelector(".form");
var $error = document.querySelector('.error');
var $inputFields = document.querySelectorAll('.input-field');
var $email = document.getElementById('email');
var $password = document.getElementById('password');

// Buat fungsi untuk menampilkan notifikasi nilai eeror
function tampilError(message) {
    $error.innerHTML = message;
    $error.style.display = 'block';
}

// Buat fungsi untuk menyembunyikan notifikasi error
function sembunyikanError() {
    $error.innerHTML = '';
    $error.style.display = 'hidden';
}

// Validasi login - Fungsi Validasi
function validate(event) {

    // Alihkan Hyperlink ke fungsi Javascript - cegah event bawaan DOM
    event.preventDefault();
    $error.style.display = 'none';

    // Jika email tidak sama dengan value atau password tidak sama dengan value (true)
    if ($email.value !== 'admin@example.com' || $password.value !== 'password') {
      // Maka tampilkan pesan eror
      tampilError("Email atau password salah");
      // Jika kondisi diatas tidak terpenuhi (false)
    } else {
        // Hapus notifikasi eror dan tampilkan notifikasi 
        // berhasil login dengan menggunakan alert
        sembunyikanError();
        window.location.href = './dashboard/index.html';
    }
}

// Validasi jika tombol submit di klik
$form.addEventListener('submit', validate);
