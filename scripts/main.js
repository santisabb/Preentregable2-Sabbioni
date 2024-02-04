const navbar = document.querySelector('#navbar');
const open = document.querySelector('#open-menu')
const close = document.querySelector('#close-menu');

open.addEventListener("click", ()=>{
    navbar.classList.add('visible');
})

close.addEventListener("click", ()=>{
    navbar.classList.remove('visible');
})