const hamburger = document.getElementById('#menu-toggle');
const navMenu = document.getElementById('nav-menu');
const closeIcon = document.getElementById('nav-close');

hamburger.addEventListener('click', () =>{
    navMenu.classList.toggle('hidden')
})
