const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener('click', () => {
  const isNavVisible = primaryNav.hasAttribute('data-visible');

  if (isNavVisible) {
    navToggle.setAttribute('aria-expanded', 'false');
  } else {
    navToggle.setAttribute('aria-expanded', 'true');
  }

  primaryNav.toggleAttribute("data-visible");
});

document.addEventListener('DOMContentLoaded', function () {
  var navIcons = document.querySelectorAll('#nav-icon3');

  function toggleOpenClass() {
    this.classList.toggle('open');
  }

  navIcons.forEach(function (navIcon) {
    navIcon.addEventListener('click', toggleOpenClass);
  });
});

// Get references to elements
const images = document.querySelectorAll('.top-image');
const leftButton = document.querySelector('.button-left');
const rightButton = document.querySelector('.button-right');

let currentIndex = 0;

// Show initial image
images[currentIndex].style.display = 'block';

// Function to display current image and hide others
function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}

// Event listeners for button clicks
leftButton.addEventListener('click', function () {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

rightButton.addEventListener('click', function () {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

function changeImageSource() {
  const images = document.querySelectorAll('.content-image');

  images.forEach(image => {
    const srcMobile = image.getAttribute('data-src-mobile');
    const srcDesktop = image.getAttribute('data-src-desktop');

    if (window.innerWidth >= 768) {
      image.src = srcDesktop;
    } else {
      image.src = srcMobile;
    }
  });
}

// Initial change on page load
changeImageSource();

// Change image source on window resize
window.addEventListener('resize', changeImageSource);