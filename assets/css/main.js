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


// innerpage


(function ($) {
  $(function () {

  });
})(jQuery);





let currentIndex = 0; // Start from the first slide

// Get all slides
let slides = document.querySelectorAll('.slider-container .slide');

// Get the slider container
let sliderContainer = document.querySelector('.slider-container');

// Get the prev and next buttons
let prevBtn = document.querySelector('.prev-btn');
let nextBtn = document.querySelector('.next-btn');

// Show the first set of slides initially
updateSlider();

// Event listener for the "Next" button
nextBtn.addEventListener('click', function() {
    if (currentIndex < slides.length - 3) { // Show up to 3 slides at a time
        currentIndex++;
        updateSlider();
    }
});

// Event listener for the "Prev" button
prevBtn.addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

// Function to update the slider's position
function updateSlider() {
    // Move the slider container to the correct position
    sliderContainer.style.transform = `translateX(-${currentIndex * (slides[0].offsetWidth + 20)}px)`;
}




