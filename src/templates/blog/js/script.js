// Blog Template JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Blog template loaded');
  
  // Search icon functionality
  const searchIcon = document.querySelector('.search-icon');
  if (searchIcon) {
    searchIcon.addEventListener('click', function() {
      // In a real application, this would toggle a search form
      alert('Search functionality would be implemented here in a real application.');
    });
  }
  
  // Subscribe form submission
  const subscribeForms = document.querySelectorAll('.subscribe-form, .footer-subscribe-form');
  subscribeForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get email value
      const email = this.querySelector('input[type="email"]').value;
      
      // In a real application, you would send this data to a server
      console.log('Subscription form submitted with email:', email);
      
      // Show success message
      alert(`Thank you for subscribing with ${email}! In a real application, this would be sent to a server.`);
      
      // Reset the form
      this.reset();
    });
  });
  
  // Add animation to post cards when they come into view
  const postCards = document.querySelectorAll('.post-card');
  
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
    postCards.forEach(card => {
      if (isInViewport(card)) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }
    });
  }
  
  // Set initial styles for animation
  postCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // Check visibility on load and scroll
  window.addEventListener('load', checkVisibility);
  window.addEventListener('scroll', checkVisibility);
  
  // Pagination functionality
  const paginationLinks = document.querySelectorAll('.pagination-link, .pagination-next');
  paginationLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all links
      document.querySelectorAll('.pagination-link').forEach(link => {
        link.classList.remove('active');
      });
      
      // Add active class to clicked link if it's a pagination-link
      if (this.classList.contains('pagination-link')) {
        this.classList.add('active');
      }
      
      // In a real application, this would load new content
      console.log('Pagination link clicked:', this.textContent);
      
      // Scroll to top of posts container
      const postsContainer = document.querySelector('.posts-container');
      if (postsContainer) {
        postsContainer.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
