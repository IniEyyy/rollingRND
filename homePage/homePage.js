

 

const tombol = document.querySelector('#submit');
// dom event
tombol.addEventListener('click', function() {
    var name,pass;
    if(name === "RNDuser" && pass === "RNDpass123_"){
        alert('anda berhasil login, mengalihkan ke home page..');
        window.location.href = "homePage.html";
    }else{
        alert("yang bener");
    }
});


const pictures = ['satu.jpg','dua.jpg','tiga.jpg'];



