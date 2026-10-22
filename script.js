const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const darkToggle = document.querySelector(".dark-toggle");
const themeIcon = document.querySelector(".theme-icon");
const themeLabel = document.querySelector(".theme-label");
const currentTime = document.getElementById("currentTime");
const currentYear = document.getElementById("currentYear");

function tampilkanJam() {
    const sekarang = new Date();

    if (currentTime) {
        currentTime.textContent = sekarang.toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        });
    }

    if (currentYear) {
        currentYear.textContent = sekarang.getFullYear();
    }
}

tampilkanJam();
setInterval(tampilkanJam, 1000);

function tutupMenu() {
    navLinks.classList.remove("open");
    hamburger.classList.remove("active");

    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", "Buka menu");
}

hamburger.addEventListener("click", function () {
    const menuTerbuka = navLinks.classList.toggle("open");

    hamburger.classList.toggle("active", menuTerbuka);
    hamburger.setAttribute("aria-expanded", String(menuTerbuka));
    hamburger.setAttribute(
        "aria-label",
        menuTerbuka ? "Tutup menu" : "Buka menu"
    );
});

navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", tutupMenu);
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        tutupMenu();
    }
});

window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        tutupMenu();
    }
});


function perbaruiTombolTema(isDark) {
    themeIcon.textContent = isDark ? "☀" : "☾";
    themeLabel.textContent = isDark ? "Light Mode" : "Dark Mode";

    darkToggle.setAttribute(
        "aria-label",
        isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap"
    );

    darkToggle.setAttribute("aria-pressed", String(isDark));
}

darkToggle.addEventListener("click", function () {
    const isDark = document.body.classList.toggle("dark");

    perbaruiTombolTema(isDark);
});
