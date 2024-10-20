
 // JavaScript for Parallax Scrolling
 document.addEventListener('DOMContentLoaded', () => {
  const serviceCards = document.querySelectorAll('.service-card');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    serviceCards.forEach((card) => {
      const speed = card.getAttribute('data-speed');
      const yPos = scrollPos * speed * 0.035;
      card.style.transform = `translateY(${yPos}px)`;
    });
  });
});





//books modal
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
  const modals = document.getElementsByClassName('modal');
  for (let i = 0; i < modals.length; i++) {
      if (event.target == modals[i]) {
          modals[i].style.display = "none";
      }
  }
}




// Get the button
const backToTopButton = document.getElementById("backToTop");

// Function to handle scroll event
window.onscroll = function () {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const heroSectionHeight = document.querySelector('.hero').offsetHeight; 
    const footerSection = document.querySelector('footer'); 
    const footerPosition = footerSection.offsetTop;

    // Show the button when scrolling down and hide it when in footer section
    if (scrollPosition > heroSectionHeight && scrollPosition < (footerPosition - window.innerHeight)) {
        backToTopButton.classList.add('show'); // Show the button
    } else {
        backToTopButton.classList.remove('show'); // Hide the button
    }
};

// Scroll to top function
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll to top
    });
});








document.addEventListener('DOMContentLoaded', function() {
  const titleElement = document.querySelector('.title');
  const indicatorElement = document.querySelector('.indicator');
  const today = new Date();

  // Internship 2 dates
  const internshipStart = new Date('2024-09-17');  // Internship start date
  const applicationOpen = new Date(internshipStart); 
  applicationOpen.setDate(internshipStart.getDate() - 15);  // Applications open 15 days prior to start
  const internshipEnd = new Date(internshipStart);
  internshipEnd.setDate(internshipStart.getDate() + 45);  // Internship lasts 45 days

  // Function to update the status
  function updateInternshipStatus() {
    if (today < applicationOpen) {
      // Before applications open
      const daysLeft = Math.ceil((applicationOpen - today) / (1000 * 60 * 60 * 24));
      titleElement.textContent = `Applications open in ${daysLeft} days`;
      titleElement.style.color = '#005cbd';  // Blue color for title
      indicatorElement.style.setProperty('--circle-color', '#005cbd');  // Set circle color to blue
    } else if (today >= applicationOpen && today < internshipStart) {
      // Applications open
      titleElement.textContent = 'Applications Open';
      titleElement.style.color = '#ffd036';  // Yellow color for title
      indicatorElement.style.setProperty('--circle-color', '#ffd036');  // Set circle color to yellow
    } else if (today >= internshipStart && today <= internshipEnd) {
      // Internship ongoing
      titleElement.textContent = 'Internship Ongoing';
      titleElement.style.color = 'green';  // Green color for title
      indicatorElement.style.setProperty('--circle-color', 'green');  // Set circle color to green
    } else {
      // Internship ended
      titleElement.textContent = 'Internship Ended';
      titleElement.style.color = 'red';  // Red color for title
      indicatorElement.style.setProperty('--circle-color', 'red');  // Set circle color to red
    }
  }

  updateInternshipStatus();  // Call function to update the status on page load
});
