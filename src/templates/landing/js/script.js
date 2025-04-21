// Landing Page Template JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Landing page template loaded');
  
  // FAQ accordion functionality
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      // Toggle active class on the question
      this.classList.toggle('active');
      
      // Toggle the plus/minus icon
      if (this.classList.contains('active')) {
        this.style.fontWeight = 'bold';
        this.style.borderBottom = '1px solid rgba(0,0,0,0.1)';
        this.style.marginBottom = '10px';
        this.textContent = this.textContent.replace('+', '-');
      } else {
        this.style.fontWeight = 'normal';
        this.style.borderBottom = 'none';
        this.style.marginBottom = '0';
        this.textContent = this.textContent.replace('-', '+');
      }
      
      // Toggle the visibility of the answer
      const answer = this.nextElementSibling;
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        answer.style.opacity = '0';
      } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.opacity = '1';
      }
    });
  });
  
  // Initialize FAQ items (hide answers initially)
  document.querySelectorAll('.faq-answer').forEach(answer => {
    answer.style.maxHeight = null;
    answer.style.overflow = 'hidden';
    answer.style.transition = 'max-height 0.3s ease, opacity 0.3s ease';
    answer.style.opacity = '0';
  });
  
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a, .footer-links a');
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
  
  // Add animation to feature cards when they come into view
  const featureCards = document.querySelectorAll('.feature-card');
  
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
    featureCards.forEach(card => {
      if (isInViewport(card)) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }
    });
  }
  
  // Set initial styles for animation
  featureCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // Check visibility on load and scroll
  window.addEventListener('load', checkVisibility);
  window.addEventListener('scroll', checkVisibility);
});
