// 1. Toggle Menu Mobile
const mobileBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Tutup menu mobile otomatis saat link diklik
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// 2. Countdown Timer Hari Besar
// EDIT DI SINI: Ubah tanggal acara sesuai format "Month Day, Year HH:MM:SS"
const targetDate = new Date("December 22, 2026 17:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, "0");
    document.getElementById("hours").innerText = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerText = String(minutes).padStart(
      2,
      "0",
    );
    document.getElementById("seconds").innerText = String(seconds).padStart(
      2,
      "0",
    );
  }
}, 1000);

// 3. Filter Tab Jadwal Ibadah (Hover hilang otomatis saat kursor pindah)
function filterJadwal(category, activeButton) {
  const cards = document.querySelectorAll(".jadwal-card");

  // Lepaskan fokus klik agar tombol kembali ke warna semula saat kursor bergeser
  if (activeButton) {
    activeButton.blur();
  }

  cards.forEach((card) => {
    if (category === "all" || card.classList.contains(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// 4. Salin Nomor Rekening
function copyRekening() {
  const norek = document.getElementById("norek-text").innerText;
  navigator.clipboard.writeText(norek);

  const notif = document.getElementById("copy-notif");
  notif.classList.remove("hidden");
  setTimeout(() => notif.classList.add("hidden"), 3000);
}

// 5. Kontrol Modal Give & Lightbox Galeri
function openGiveModal() {
  document.getElementById("give-modal").classList.remove("hidden");
}

function closeGiveModal() {
  document.getElementById("give-modal").classList.add("hidden");
}

function openLightbox(src) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").classList.remove("hidden");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.add("hidden");
}
