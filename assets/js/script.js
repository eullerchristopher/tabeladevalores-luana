/*=============== SHOW MENU ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav_link');
    const scrollTopButton = document.getElementById('scroll-top');

    // Menu show
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });

    // Menu hidden
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });

    // Hide menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    });
});

/*=============== BLUR HEADER ===============*/

const blurHeader = () => {
    const header = document.getElementById('header');
    
    // Correct scrollY usage and condition
    if (window.scrollY > 50) {
        header.classList.add('blur-header');
    } else {
        header.classList.remove('blur-header');
    }
}

window.addEventListener('scroll', blurHeader);

/*===== SCROLL REVEAL ANIMATION =====*/

document.addEventListener('DOMContentLoaded', function() {
    const sr = ScrollReveal({
        distance: '60px',
        duration: 2000,
        delay: 200,
        reset: true  // Ativar se eu quiser que os elementos revelem novamente ao rolar
    });

    // Configurações para diferentes elementos
    sr.reveal('.home_data', {
        origin: 'top'
    });

    sr.reveal ('.alongamento_card, .manutencoes_texto, .localizacao_data', {
        origin: 'bottom',
        interval: 200 
    })

    sr.reveal ('.p1, .p3, .p5',{
        origin: 'right',
        interval: 200
    })

    sr.reveal ('.p2, .p4',{
        origin: 'left',
        interval: 200
    })

    sr.reveal('.banhogel_img', {
        origin: 'right',
        delay: 400
    });

    sr.reveal('.banhogel_card', {
        origin: 'left',
        delay: 400
    });
    sr.reveal('.curso_info', {
        interval: 200
    });
    sr.reveal('.contato_input, .contato_button', {
        interval: 200
    });
});