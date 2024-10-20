

const p4 = document.getElementById('text');


document.querySelector('#submit').addEventListener('click', function() {
    var name = document.getElementById('username').value,pass = document.getElementById('password').value;
    if(name === "RNDuser" && pass === "RNDpass123_"){
        window.location.href = "../homePage/homePage.html";
    }else{
        p4.textContent = "Username/ password salah.";
        p4.style.color = "red";
        setTimeout(function() {
            // alert('Username/ password salah!\nSilahkan coba lagi.');
            p4.textContent = 'Silahkan coba lagi.';
            p4.style.color = "white"
        }, 1000);
    }
});
