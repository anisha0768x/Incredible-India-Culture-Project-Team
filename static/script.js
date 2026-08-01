document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    const currentURL = window.location.href;
    
    links.forEach(link => {
      if (currentURL.includes(link.getAttribute('href'))) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
  