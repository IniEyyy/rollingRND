



var theme = 1;

document.querySelector('#theme').addEventListener('click', function() {
    var themebtn = document.getElementById('theme');
    var allStyle = document.documentElement.style;
    var topbar = document.querySelector('.topbar').style;
    switch(theme){
        case 1:
            theme = 2;
            allStyle.backgroundColor = "teal";
            topbar.backgroundColor = "darkslategray";
            allStyle.color = "black";
            themebtn.innerText = ' 🌙 ';
            break;
        case 2:
            theme = 1;
            allStyle.backgroundColor = "darkslategray";
            topbar.backgroundColor = "teal";
            allStyle.color = "white";
            themebtn.innerText = ' 🌞 ';
            break;
    }
});

