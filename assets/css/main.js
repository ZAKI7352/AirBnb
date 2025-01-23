const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // Prevent default link behavior
    e.preventDefault();
    
    // Remove 'active' class from all links
    navLinks.forEach((link) => link.classList.remove('active'));
    
    // Add 'active' class to the clicked link
    e.target.classList.add('active');
  });
});
