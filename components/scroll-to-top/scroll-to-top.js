function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Show/hide scroll to top button based on scroll position
window.addEventListener('DOMContentLoaded', function() {
  const scrollButton = document.querySelector('.scroll-to-top');
  
  if (scrollButton) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollButton.classList.add('visible');
      } else {
        scrollButton.classList.remove('visible');
      }
    });
  }
});

// Intersection Observer for fade-in animations
window.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('div[id^="section"], .fade-in').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
});
