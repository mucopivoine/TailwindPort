document.addEventListener('DOMContentLoaded', () =>{


const menuBar = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuBar.addEventListener('click', () =>{
    navMenu.classList.toggle('hidden');
});

const sections = document.querySelectorAll('section');
 const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('animate-fadeIn', 'animate-slideRight');
            observer.unobserve(entry.target);
        }
    });
    });
    sections.forEach(section =>{
     observer.observe(section);
    });

    document.getElementById('open-modal-btn').addEventListener('click', () =>{
    document.getElementById('modal-wrapper').classList.remove('hidden')
    })
    document.getElementById('close-modal-btn').addEventListener('click',() =>{
     document.getElementById('modal-wrapper').classList.add('hidden')
    })
});