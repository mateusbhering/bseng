const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (!link.target || link.target !== '_blank') {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('header') && navMenu.classList.contains('active')) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Header glassmorphism on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });

// Scroll-triggered fade-up animations
const services = Array.from(document.querySelectorAll('.service.fade-up'));
const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const index = services.indexOf(entry.target);
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 110);
            serviceObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

services.forEach(el => serviceObserver.observe(el));

const fadeEls = document.querySelectorAll('.fade-up:not(.service)');
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

fadeEls.forEach(el => fadeObserver.observe(el));
