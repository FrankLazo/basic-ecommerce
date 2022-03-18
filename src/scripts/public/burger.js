const toggleMenu = document.querySelector('.toggle-menu');
const navbar = document.querySelector('.navbar');

toggleMenu.addEventListener('click', () => {
    toggleMenu.classList.toggle('open-burger');
    navbar.classList.toggle('open-navbar');
})
