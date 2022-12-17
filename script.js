function Checkform(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(password)
    console.log(username)

    if(username == "" || password == ""){
        swal("Maaf","from tidak boleh kosong", "error");
    }
     else {
   swal({
           title: "Okey",
       text: "Anda Berhasil Login",
          icon: "success",
      })
    
     .then((lanjut) =>  {
                if(lanjut){
                    window.location.href = 'Hal1.html';
              }
      });
    }
}