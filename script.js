function tampilkanJam() {
    const sekarang = new Date();
    document.getElementById("currentTime").textContent = sekarang.toLocaleTimeString("id-ID");
}

tampilkanJam();
setInterval(tampilkanJam, 1000);