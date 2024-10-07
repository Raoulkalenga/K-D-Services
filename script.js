const headerContainer = document.getElementById('header-container');
const footerContainer = document.getElementById('footer-container');

function fetchAndInsertHtml(url, container) {
  fetch(url)
    .then(response => response.text())
    .then(data => container.innerHTML = data);
}

document.addEventListener('DOMContentLoaded', () => {
  fetchAndInsertHtml('header.html', headerContainer);
  fetchAndInsertHtml('footer.html', footerContainer);
});

function toggleMenu() { 
  const navLinks = document.querySelector('.nav-links'); 
  const closeMenu = document.querySelector('.close-menu'); 
  navLinks.classList.toggle('show-nav'); 
  closeMenu.classList.toggle('show-nav');
}

for (let i of document.querySelectorAll(".gallery img")) {
  i.onclick = () => i.classList.toggle("full");
}