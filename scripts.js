const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuButton = document.getElementById('close-menu-button');
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
}

menuButton.addEventListener('click', toggleMobileMenu);
closeMenuButton.addEventListener('click', toggleMobileMenu);
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', toggleMobileMenu);
});

function updateActiveNavLink() {
    let currentSectionId = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSectionId) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

function revealSections() {
    const elements = document.querySelectorAll('.slide-in');
    elements.forEach(element => {
        const elementTop = element.offsetTop;
        const elementHeight = element.clientHeight;
        if (window.scrollY >= elementTop - window.innerHeight + 200) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealSections);
revealSections(); // Chama na carga da página para exibir elementos visíveis inicialmente