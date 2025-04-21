// Portfolio Template JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Portfolio template loaded');

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      this.querySelector('i').classList.toggle('fa-bars');
      this.querySelector('i').classList.toggle('fa-times');
    });
  }

  // Theme toggle functionality
  const themeSwitch = document.getElementById('theme-switch');
  const body = document.body;

  if (themeSwitch) {
    // Check for saved theme preference or use default
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.className = `${currentTheme}-theme`;

    // Update checkbox state based on current theme
    themeSwitch.checked = currentTheme === 'dark';

    themeSwitch.addEventListener('change', function() {
      if (this.checked) {
        body.className = 'dark-theme';
        localStorage.setItem('theme', 'dark');
      } else {
        body.className = 'light-theme';
        localStorage.setItem('theme', 'light');
      }
    });
  }

  // Form submission handler
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject')?.value || '';
      const message = document.getElementById('message').value;

      // In a real application, you would send this data to a server
      console.log('Form submitted with the following data:');
      console.log({ name, email, subject, message });

      // Show success message (in a real app, this would happen after successful submission)
      alert('Thank you for your message! In a real application, this would be sent to a server.');

      // Reset the form
      contactForm.reset();
    });
  }

  // Newsletter form submission
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const email = this.querySelector('input[type="email"]').value;

      // In a real application, you would send this data to a server
      console.log('Newsletter subscription:', email);

      // Show success message
      alert(`Thank you for subscribing with ${email}! In a real application, this would be sent to a server.`);

      // Reset the form
      this.reset();
    });
  }

  // Smooth scrolling for all internal links
  const allInternalLinks = document.querySelectorAll('a[href^="#"]');
  allInternalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return; // Skip if it's just a '#' link

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Close mobile menu if it's open
        if (mobileMenu && mobileMenu.classList.contains('active')) {
          mobileMenu.classList.remove('active');
          mobileMenuBtn.querySelector('i').classList.add('fa-bars');
          mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        }

        // Scroll to the element
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Project filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));

        // Add active class to clicked button
        this.classList.add('active');

        const filter = this.getAttribute('data-filter');

        // Show/hide projects based on filter
        projectCards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'block';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 100);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 500);
          }
        });
      });
    });
  }

  // Scroll to top button
  const scrollToTopBtn = document.querySelector('.scroll-to-top');

  if (scrollToTopBtn) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
      } else {
        scrollToTopBtn.classList.remove('show');
      }
    });
  }

  // Animate elements when they come into view
  const animatedElements = document.querySelectorAll('.project-card, .skill-item, .timeline-item, .education-item');

  // Simple function to check if an element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to add animation class when elements come into view
  function checkVisibility() {
    animatedElements.forEach(element => {
      if (isInViewport(element)) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  }

  // Set initial styles for animation
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  // Check visibility on load and scroll
  window.addEventListener('load', checkVisibility);
  window.addEventListener('scroll', checkVisibility);

  // Floating icons animation
  const floatingIcons = document.querySelectorAll('.floating-icon');

  floatingIcons.forEach(icon => {
    // Set random animation duration between 3-6 seconds
    const duration = 3 + Math.random() * 3;
    // Set random delay between 0-2 seconds
    const delay = Math.random() * 2;

    icon.style.animationDuration = `${duration}s`;
    icon.style.animationDelay = `${delay}s`;
  });
});
