function validasi() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;
    var pes = document.getElementById("pes").value;
    var jum = document.getElementById("jum").value;
    var telp = document.getElementById("telp").value;
    if (nama != "" || email != "" || alamat !="" ||pes != "" ||  jum!= "" ||telp!=""){
        swal({
            title: "Yakin!",
            text: "Apakah Data Anda Sudah Benar?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("data anda sudah tersimpan", {
                icon: "success",
            })
            } else {
              swal("silahkan ubah data anda");
            }
        })
    }
    else{
        swal("Maaf","from tidak boleh kosong", "error");  
}
}
function logout(){
  swal({
    title: "Yakin!",
    text: "Apakah anda yakin akan Logout",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Anda berhasil keluar", {
        icon: "success",
    }).then(function(){
         window.location.href = 'index.html'
      })
    } 
})
}