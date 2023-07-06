'use state'

const hamburgerEl = document.querySelector('.hamburger');
const navbarItems = document.querySelector('.navigation')

hamburgerEl.addEventListener('click', () => {
  hamburgerEl.classList.toggle('active');
  navbarItems.classList.toggle('active');
})
