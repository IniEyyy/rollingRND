



document.querySelector('#submit').addEventListener('click', function() {
    var name = document.getElementById('unique').value,pass = document.getElementById('unique').value;
    if(name === "RNDuser" && pass === "RNDpass123_"){
        alert('anda berhasil login, mengalihkan ke home page..');
        window.location.href = "homePage.html";
    }else{
        alert("yang bener");
    }
});




