'use state'

const hamburgerEl = document.querySelector('.hamburger');
const navbarItems = document.querySelector('.navigation')

hamburgerEl.addEventListener('click', () => {
  hamburgerEl.classList.toggle('active');
  navbarItems.classList.toggle('active');
});

const closeNav = () => {
  navbarItems.classList.remove('active');
}

window.addEventListener('scroll', function() {
  const header = document.querySelector('.navbar');
  header.classList.toggle('sticky', window.scrollY > 0) 
})
