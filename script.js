const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const navbarIcon = navbarToggle.querySelector('img');

const menuIcon = navbarIcon.src;
const closeIcon = navbarIcon.src.includes('/pages/')
    ? '../resources/cross.svg'
    : 'resources/cross.svg';

navbarToggle.addEventListener('click', () => {
    const isOpen = navbarToggle.classList.toggle('active');

    navbarMenu.classList.toggle('active');
    navbarIcon.src = isOpen ? closeIcon : menuIcon;
    navbarToggle.setAttribute('aria-expanded', isOpen);
    navbarToggle.setAttribute(
        'aria-label',
        isOpen ? 'Close navigation menu' : 'Open navigation menu'
    );
});