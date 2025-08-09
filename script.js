// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a');

for (const link of navLinks) {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
    });
}
