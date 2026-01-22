const navToggle = document.getElementById('menu-btn');
const primaryNav = document.getElementById('primary-navigation');
const overlay = document.querySelector('.overlay');

// 1. Create a function to handle the toggle
function toggleMenu() {
  const isOpened = navToggle.getAttribute('aria-expanded') === 'true';

  // Toggle the accessibility attribute (flipping true/false)
  navToggle.setAttribute('aria-expanded', !isOpened);

  // Toggle the classes for visual slide-in and dimming
  primaryNav.classList.toggle('opened');
  overlay.classList.toggle('active');

  // Optional: Prevent the body from scrolling when menu is open
  document.body.style.overflow = !isOpened ? 'hidden' : 'auto';
}

// 2. Listen for a click on the hamburger button
navToggle.addEventListener('click', toggleMenu);

// 3. Listen for a click on the overlay to close the menu
overlay.addEventListener('click', toggleMenu);
