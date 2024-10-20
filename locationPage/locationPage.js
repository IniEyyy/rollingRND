
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropdownMenu = document.querySelector('.dropdown_menu');
toggleBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
    const isShow = dropdownMenu.classList.contains('show');
    toggleBtnIcon.classList = isShow?'fa-solid fa-xmark':'fa-solid fa-bars';
});