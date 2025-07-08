document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA PARA O MENU MOBILE ---
    const mobileMenuIcon = document.querySelector('.menu-mobile-icon');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const pagePath = window.location.pathname.split("/").pop();

    // Adiciona a classe 'active' ao link da página atual
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === pagePath || (pagePath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Função para alternar o menu mobile
    mobileMenuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileMenuIcon.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Função para fechar o menu ao clicar em um link (para mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = mobileMenuIcon.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

});
