


function warn(str){
    alert(str);
    console.log(str);
}

document.querySelector('#submit').addEventListener('click', function() {
    var name = document.getElementById('username').value,pass = document.getElementById('password').value;
    if(name === "RNDuser" && pass === "RNDpass123_"){
        window.location.href = "../homePage/homePage.html";
    }else{
        warn("Username/ password salah!\nSilahkan coba lagi.");
    }
});
