function inputdata(event){
    event.preventDefault();
    let data1 = document.getElementById("note").value;
    let data2 = document.getElementById("label").value;

    let siswa = JSON.parse(localStorage.getItem("siswa")) || [];
    siswa.push({ note: data1, label: data2 });
    localStorage.setItem("siswa", JSON.stringify(siswa));
    tampilkan();
}

// tampil data local + tombol hapus per item
function tampilkan(){
    let data = JSON.parse(localStorage.getItem("siswa")) || [];
    const ul = document.getElementById("data-tampil");
    ul.innerHTML = "";

    data.forEach((item, i) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span>${item.note} - ${item.label}</span>

            <button class="btn-hapus" onclick="hapusSatu(${i}, this)">
                <span class="tong-sampah">
                    <span class="tutup-tong"></span>
                    <span class="badan-tong"></span>
                </span>
            </button>
        `;

        ul.appendChild(li);
    });
}


function hapusSatu(index, tombol){
    // buka tutup tong
    tombol.classList.add("buka");

    // tunggu animasi selesai
    setTimeout(() => {
        let data = JSON.parse(localStorage.getItem("siswa")) || [];

        data.splice(index, 1);

        localStorage.setItem("siswa", JSON.stringify(data));

        tampilkan();
    }, 500);
}
// hapus satu item berdasarkan index
function hapusSatu(index) {
  if (!confirm("Yakin ingin menghapus data ini?")) return;

  let data = JSON.parse(localStorage.getItem("siswa")) || [];
  data.splice(index, 1);
  localStorage.setItem("siswa", JSON.stringify(data));
  tampilkan();
}

// hapus semua data
function deletedata() {
  if (!confirm("Yakin ingin menghapus semua data?")) return;

  localStorage.removeItem("siswa");
  tampilkan();
  alert("Data berhasil dihapus");
}
// hapus semua data
function deletedata(){
    localStorage.removeItem("siswa");
    tampilkan();
}

tampilkan();