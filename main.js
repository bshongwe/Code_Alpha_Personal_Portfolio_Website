// Hamburger Menu Toggle
const burgerMenu = document.querySelector('.burger-menu-icon');
const navList = document.querySelector('.nav-list');

if (burgerMenu && navList) {
  burgerMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
    burgerMenu.classList.toggle('toggle');
  });
}

// Scroll to sections on click
const navLinks = document.querySelectorAll('.nav-link');

if (navLinks.length) {
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50, // offset for fixed header
          behavior: 'smooth'
        });
      }
    });
  });
}

// Scroll Down Button (Landing Page)
const scrollDownBtn = document.querySelector('.scroll-down');

if (scrollDownBtn) {
  scrollDownBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = document.getElementById('about');
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 50, // offset for fixed header
        behavior: 'smooth'
      });
    }
  });
}

// Project Section - Toggle Visibility on Hover
const projectItems = document.querySelectorAll('.project-item');

if (projectItems.length) {
  projectItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const description = item.querySelector('.project-description');
      if (description) {
        description.classList.add('active');
      }
    });

    item.addEventListener('mouseleave', () => {
      const description = item.querySelector('.project-description');
      if (description) {
        description.classList.remove('active');
      }
    });
  });
}

// Scroll Animations for Sections (Simple Fade-In Effect)
const sections = document.querySelectorAll('section');

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function checkVisibility() {
  sections.forEach(section => {
    if (isInViewport(section)) {
      section.classList.add('in-view');
    }
  });
}

// Initialize Scroll Event (with requestAnimationFrame for better performance)
let isScrolling = false;

function onScroll() {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      checkVisibility();
      isScrolling = false;
    });
    isScrolling = true;
  }
}

window.addEventListener('scroll', onScroll);
window.addEventListener('load', checkVisibility);

// Highlight Nav Items when Scrolling
const navItems = document.querySelectorAll('.nav-item a');

function highlightNav() {
  let currentSection = '';

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 50) {
      currentSection = section.getAttribute('id');
    }
  });

  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('active');
    }
  });
}

// Initialize Scroll Event for Nav Highlight
window.addEventListener('scroll', highlightNav);
