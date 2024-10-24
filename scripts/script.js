const menu_btn = document.querySelector('#menu-btn');
const links = document.querySelector('.links');


menu_btn.addEventListener('click', () => {
  links.classList.toggle('active');
});

// select all the elements in links then loop through them and add an event listener to each of them to remove the active class from the links when clicked
const link = document.querySelectorAll('.link');
link.forEach((link) => {
  link.addEventListener('click', () => {
    links.classList.remove('active');
  });
});



// scripts/script.js

const main = document.querySelector('main');
let startX = 0;
let endX = 0;
const swipeThreshold = 50; // Minimum distance to be considered a swipe

// Touch start event
main.addEventListener('touchstart', (event) => {
  startX = event.touches[0].clientX; // Get starting X coordinate
});

// Touch end event
main.addEventListener('touchend', (event) => {
  endX = event.changedTouches[0].clientX; // Get ending X coordinate
  handleSwipe();
});

// Function to handle swipe logic
function handleSwipe() {
  const distance = endX - startX;

  if (distance > swipeThreshold) {
    // Swipe right (next section)
    navigateToPreviousSection();
  } else if (distance < -swipeThreshold) {
    // Swipe left (previous section)
    navigateToNextSection();
  }
}

// Function to navigate to the next section
function navigateToNextSection() {
  const currentSection = document.querySelector('section:target') || document.querySelector('section'); // Default to first section
  const nextSection = currentSection.nextElementSibling;

  if (nextSection && nextSection.tagName === 'SECTION') {
    window.location.hash = nextSection.id; // Change URL to next section
  }
}

// Function to navigate to the previous section
function navigateToPreviousSection() {
  const currentSection = document.querySelector('section:target') || document.querySelector('section'); // Default to first section
  const previousSection = currentSection.previousElementSibling;

  if (previousSection && previousSection.tagName === 'SECTION') {
    window.location.hash = previousSection.id; // Change URL to previous section
  }
}
