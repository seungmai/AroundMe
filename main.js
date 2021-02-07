'use strict'

const navbar = document.querySelector('navbar');
navbar.addEventListener('click', () => {
    console.log();
})

const navbarMenu = document.querySelector('.navbar__menu'); 
navbarMenu.addEventListener('click', (event) => { 
    const target = event.target; 
    const link = target.dataset.link; 
    if (link === null) { 
        return; 
    }
    navbarMenu.classList.remove('open');
    scrollIntoView(link); 
    selectNavItem(target);
});


