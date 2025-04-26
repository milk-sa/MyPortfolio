const toggleBtn = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

toggleBtn.addEventListener('click', () => {
  console.log('Menu button clicked!'); // Debugging line
  navLinks.classList.toggle('active');
});
