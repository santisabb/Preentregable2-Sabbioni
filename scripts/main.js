const navbar = document.querySelector('#navbar-list');
const burger = document.querySelector('#burger-menu');

burger.addEventListener("click", ()=>{
    navbar.classList.add('visible');
})