



// document.querySelector('#home').addEventListener('click', function() {
//     //
// });


document.addEventListener('DOMContentLoaded', function() {
    const themeOptions = document.querySelectorAll('.theme-option');
    
    themeOptions.forEach(option => {
        option.addEventListener('click', function() {
            const selectedTheme = this.getAttribute('data-theme');
            document.body.className = selectedTheme;
        });
    });
});

