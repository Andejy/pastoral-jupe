document.querySelector('.menu_btn').addEventListener('click', () => {
document.querySelector('.nav_menu').classList.toggle('show');
})

ScrollReveal().reveal('#show_case');
ScrollReveal().reveal('#nuestra_mision', { delay: 500 });
ScrollReveal().reveal('#Nuestro_futuro', { delay: 500 });
ScrollReveal().reveal('#contactos', { delay: 500 });