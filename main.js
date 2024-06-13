/*Header*/

document.addEventListener('DOMContentLoaded', function() {
    let lastScrollY = window.scrollY;
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY < lastScrollY) {
            // Rolování nahoru
            header.classList.remove('header-hidden');
        } else {
            // Rolování dolů
            header.classList.add('header-hidden');
        }
        lastScrollY = window.scrollY;
    });
});

const headerLinks = document.querySelectorAll('header a');
headerLinks.forEach(link => {
    if (link.classList.contains('active')) {
        link.style.color = '#84cc16'; // Lime-500 barva
    }
});

//Hamburger menu//

document.addEventListener('DOMContentLoaded', function () {
    const navbarBurger = document.querySelector('.navbar-burger');
    const navbarMenu = document.querySelector('.navbar-menu');
    const navbarClose = document.querySelector('.navbar-close');
    const navbarBackdrop = document.querySelector('.navbar-backdrop');

    function toggleNavbarMenu() {
        navbarMenu.classList.toggle('hidden');
        navbarBackdrop.classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden');
    }


    navbarBurger.addEventListener('click', function () {
        toggleNavbarMenu();
    });

    navbarClose.addEventListener('click', function () {
        toggleNavbarMenu();
    });

  
    navbarBackdrop.addEventListener('click', function () {
        toggleNavbarMenu();
    });
});



