function inputdata(event) {
  event.preventDefault();
  let data1 = document.getElementById("note").value;
  let data2 = document.getElementById("keterangan").value;

  let siswa = JSON.parse(localStorage.getItem("siswa")) || [];
  siswa.push({ note: data1, label: data2 });
  localStorage.setItem("siswa", JSON.stringify(siswa));

  event.target.reset();
  tampilkan();
}

// tampil data local + tombol hapus per item
function tampilkan() {
  let data = JSON.parse(localStorage.getItem("siswa")) || [];
  const ul = document.getElementById("data-tampil");
  ul.innerHTML = "";

  data.forEach((item, i) => {
    const li = document.createElement("li");

    const teks = document.createElement("span");
    teks.textContent = `${item.note} - ${item.label}`;

    const tombol = document.createElement("button");
    tombol.type = "button";
    tombol.className = "btn-hapus";
    tombol.onclick = () => hapusSatu(i, tombol);
    tombol.innerHTML = `
      <span class="tong-sampah">
        <span class="tutup-tong"></span>
        <span class="badan-tong"></span>
      </span>
    `;

    li.appendChild(teks);
    li.appendChild(tombol);
    ul.appendChild(li);
  });
}

// hapus satu item: konfirmasi, animasi tong sampah, lalu hapus
function hapusSatu(index, tombol) {
  if (!confirm("Yakin ingin menghapus data ini?")) return;

  tombol.classList.add("buka");

  setTimeout(() => {
    let data = JSON.parse(localStorage.getItem("siswa")) || [];
    data.splice(index, 1);
    localStorage.setItem("siswa", JSON.stringify(data));
    tampilkan();
  }, 500);
}

// hapus semua data
function deletedata() {
  if (!confirm("Yakin ingin menghapus semua data?")) return;

  localStorage.removeItem("siswa");
  tampilkan();
  alert("Data berhasil dihapus");
}

tampilkan();