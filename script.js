let daftarMenu = [
    { id: 1, nama: "Mie Ayam Pak Min", kategori: "Berat" },
    { id: 2, nama: "Nasi Goreng Gila", kategori: "Berat" },
    { id: 3, nama: "Sate Taichan Senayan", kategori: "Ringan" }
];

function hitungTotalMenu() {
    return daftarMenu.length;
}

function renderTabelMenu() {
    const tbody = document.getElementById("tabel-menu-body");
    if (!tbody) return;

    tbody.innerHTML = "";

    for (let i = 0; i < daftarMenu.length; i++) {
        let menu = daftarMenu[i];
        let row = `<tr>
            <td>${i + 1}</td>
            <td><strong>${menu.nama}</strong></td>
            <td>${menu.kategori}</td>
        </tr>`;
        tbody.innerHTML += row;
    }

    $("#total-menu-text").text("Total Menu Tersedia: " + hitungTotalMenu());
}

document.addEventListener("DOMContentLoaded", function() {
    renderTabelMenu();
});

$(document).ready(function() {$("#btn-toggle-form").on("click", function() {
        $("#form-tambah-menu").slideToggle("fast");
    });

    $("#form-tambah-menu").on("submit", function(e) {
        e.preventDefault();

        let namaMenu = $("#input-nama").val();
        let kategoriMenu = $("#input-kategori").val();

        if (namaMenu === "" || kategoriMenu === "") {
            $("#notif-pesan").text("Gagal: Nama dan Kategori wajib diisi!").css("color", "red");
            $("#notif-container").fadeIn().delay(3000).fadeOut();
        } else {
            let idBaru = daftarMenu.length + 1;
            daftarMenu.push({ id: idBaru, nama: namaMenu, kategori: kategoriMenu });

            renderTabelMenu();

            $("#input-nama").val("");
            $("#input-kategori").val("");

            $("#notif-pesan").text("Sukses: Menu berhasil ditambahkan!").css("color", "green");
            $("#notif-container").fadeIn().delay(3000).fadeOut();
        }
    });

    $(document).on("mouseenter", "tbody tr", function() {
        $(this).css("background-color", "#f0fdf4");
    }).on("mouseleave", "tbody tr", function() {
        $(this).css("background-color", "");
    });
});