//internship scroll animation
document.addEventListener('DOMContentLoaded', function() {
    const perksContainer = document.querySelector('.perks-container');
    let autoScroll = true;
  
    // Auto scroll when hovering over the perks container
    perksContainer.addEventListener('mouseenter', () => {
        autoScroll = false;  // Pause auto-scrolling on hover
    });
  
    perksContainer.addEventListener('mouseleave', () => {
        autoScroll = true;  // Resume auto-scrolling when mouse leaves
    });
  
    // Auto-scrolling functionality
    function scrollPerks() {
        if (autoScroll) {
            perksContainer.scrollBy({
                left: 2,
                behavior: 'smooth'
            });
  
            // Loop to the start when reaching the end
            if (perksContainer.scrollLeft + perksContainer.clientWidth >= perksContainer.scrollWidth) {
                perksContainer.scrollLeft = 0;
            }
        }
    }
  
    setInterval(scrollPerks, 30);  // Adjust speed of auto-scroll here
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
