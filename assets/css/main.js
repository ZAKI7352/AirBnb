const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navLinks.forEach((link) => link.classList.remove('active'));
      e.target.classList.add('active');
    });
  });

// Function to toggle the navbar dropdown
function toggleNavbarDropdown(event) {
    event.preventDefault();
    const dropdownMenu = event.currentTarget.nextElementSibling;
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

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

updateSlider();
nextBtn.addEventListener('click', function() {
    if (currentIndex < slides.length - 3) { 
        currentIndex++;
        updateSlider();
    }
});

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    const isNavbarClickInside = document.querySelector('.navbar-links').contains(event.target);
    const isGuestClickInside = document.querySelector('.date-row').contains(event.target);

    if (!isNavbarClickInside) {
        document.querySelector('.dropdown-menu').style.display = 'none';
    }

    if (!isGuestClickInside) {
        document.getElementById('guestDropdown').style.display = 'none';
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


let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const day = document.querySelector(".calendar-dates");

const currdate = document
    .querySelector(".calendar-current-date");

const prenexIcons = document
    .querySelectorAll(".calendar-navigation span");

// Array of month names
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

// Function to generate the calendar
const manipulate = () => {

    // Get the first day of the month
    let dayone = new Date(year, month, 1).getDay();

    // Get the last date of the month
    let lastdate = new Date(year, month + 1, 0).getDate();

    // Get the day of the last date of the month
    let dayend = new Date(year, month, lastdate).getDay();

    // Get the last date of the previous month
    let monthlastdate = new Date(year, month, 0).getDate();

    // Variable to store the generated calendar HTML
    let lit = "";

    // Loop to add the last dates of the previous month
    for (let i = dayone; i > 0; i--) {
        lit +=
            `<li class="inactive">${monthlastdate - i + 1}</li>`;
    }

    // Loop to add the dates of the current month
    for (let i = 1; i <= lastdate; i++) {

        // Check if the current date is today
        let isToday = i === date.getDate()
            && month === new Date().getMonth()
            && year === new Date().getFullYear()
            ? "active"
            : "";
        lit += `<li class="${isToday}">${i}</li>`;
    }

    // Loop to add the first dates of the next month
    for (let i = dayend; i < 6; i++) {
        lit += `<li class="inactive">${i - dayend + 1}</li>`
    }

    // Update the text of the current date element 
    // with the formatted current month and year
    currdate.innerText = `${months[month]} ${year}`;

    // update the HTML of the dates element 
    // with the generated calendar
    day.innerHTML = lit;
}

manipulate();

// Attach a click event listener to each icon
prenexIcons.forEach(icon => {

    // When an icon is clicked
    icon.addEventListener("click", () => {

        // Check if the icon is "calendar-prev"
        // or "calendar-next"
        month = icon.id === "calendar-prev" ? month - 1 : month + 1;

        // Check if the month is out of range
        if (month < 0 || month > 11) {

            // Set the date to the first day of the 
            // month with the new year
            date = new Date(year, month, new Date().getDate());

            // Set the year to the new year
            year = date.getFullYear();

            // Set the month to the new month
            month = date.getMonth();
        }

        else {

            // Set the date to the current date
            date = new Date();
        }

        // Call the manipulate function to 
        // update the calendar display
        manipulate();
    });
});

function toggleDropdown() {
    const dropdown = document.getElementById('guestDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Function to change guest count
function changeCount(type, change) {
    const countElement = document.getElementById(type + 'Count');
    let count = parseInt(countElement.textContent);
    count = Math.max(0, count + change);
    countElement.textContent = count;
    updateGuestSummary();
}

// Function to update guest summary
function updateGuestSummary() {
    const adults = parseInt(document.getElementById('adultsCount').textContent);
    const children = parseInt(document.getElementById('childrenCount').textContent);
    const totalGuests = adults + children;
    const guestSummary = document.getElementById('guestSummary');
    guestSummary.textContent = totalGuests + ' guest' + (totalGuests !== 1 ? 's' : '') + ' ▼';
}

// Function to toggle the guest dropdown
function toggleGuestDropdown(event) {
    event.stopPropagation(); // Prevent event from bubbling up
    const guestDropdown = document.getElementById('guestDropdown');
    guestDropdown.style.display = guestDropdown.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('click', function(event) {
    const isClickInside = document.querySelector('.navbar-links').contains(event.target);
    if (!isClickInside) {
        document.querySelector('.dropdown-menu').style.display = 'none';
    }
});