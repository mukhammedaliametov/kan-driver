'use state'

const sendBtn = document.querySelector('#btn');

window.onload = function() {
  document.getElementById("tel").focus();
}

sendBtn.addEventListener("click", () => {
  null
})

const navEl = document.querySelector('.navigation');
const hamburgerEl = document.querySelector('.hamburger');

hamburgerEl.addEventListener('click', () => {
  navEl.classList.toggle('active');
  hamburgerEl.classList.toggle('active');
})

