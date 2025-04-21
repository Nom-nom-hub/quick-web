// Portfolio Template JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Portfolio template loaded');
  
  // Form submission handler
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // In a real application, you would send this data to a server
      console.log('Form submitted with the following data:');
      console.log({ name, email, message });
      
      // Show success message (in a real app, this would happen after successful submission)
      alert('Thank you for your message! In a real application, this would be sent to a server.');
      
      // Reset the form
      contactForm.reset();
    });
  }
  
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Only apply to links that point to an ID on the page
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Scroll to the element
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Add animation to project cards when they come into view
  // This is a simple example - in a real project you might use a library like AOS
  const projectCards = document.querySelectorAll('.project-card');
  
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
    projectCards.forEach(card => {
      if (isInViewport(card)) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }
    });
  }
  
  // Set initial styles for animation
  projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // Check visibility on load and scroll
  window.addEventListener('load', checkVisibility);
  window.addEventListener('scroll', checkVisibility);
});
