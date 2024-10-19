



var theme = 1;



console.log(document.documentElement);
document.querySelector('#theme').addEventListener('click', function() {
    var themebtn = document.getElementById('theme');
    // console.log(themebtn.innerText);
    switch(theme){
        case 1:
            theme = 2;
            document.documentElement.style.backgroundColor = "darkslategray";
            document.documentElement.style.color = "white";
            themebtn.innerText = ' ☀ ';
            break;
        case 2:
            theme = 1;
            document.documentElement.style.backgroundColor = "white";
            document.documentElement.style.color = "black";
            themebtn.innerText = ' 🕶 ';
            break;
    }
});

