const menu = document.querySelector('#menu');
const navBar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}