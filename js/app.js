const menu = document.getElementById('js_btn-menu');
const closeMenu = document.getElementById('js_btn-close');
const overlay = document.querySelector('.overlay');

function navToggler() {
    document.querySelector('.nav__list').classList.toggle('nav__list--active');
    document.querySelector('.overlay').classList.toggle('hide');
}

menu.addEventListener('click', () => {
    navToggler();
});

closeMenu.addEventListener('click', () => {
    navToggler();
});

overlay.addEventListener('click', () => {
    navToggler();
});