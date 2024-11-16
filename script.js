// Function to show the current time
function showTime() {
    document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
    showTime();
}, 1000);
// JavaScript for Toggle Functionality




document.addEventListener('DOMContentLoaded', function () {
    const testimonialContent = document.querySelector('.testimonial-content');
    const speed = 2; // Controls the speed of the sliding effect

    // Clone the testimonials for seamless scrolling
    const clone = testimonialContent.cloneNode(true);
    testimonialContent.parentElement.appendChild(clone);

    let position = 0;

    function slideTestimonials() {
        position -= speed;
        if (Math.abs(position) >= testimonialContent.offsetWidth) {
            position = 0; // Reset the position once it reaches the end
        }
        testimonialContent.parentElement.style.transform = `translateX(${position}px)`;
    }

    // Start the sliding effect
    setInterval(slideTestimonials, 20); // Adjust the interval for smoother/slower sliding
});

function openModal(img) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = img.src; // Set the source of the modal image to the clicked image
    modal.style.display = "flex"; // Show the modal
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none"; // Hide the modal when clicked
}

// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const quoteForm = document.querySelector('.quote-form');
    if (quoteForm) {  // Check if form exists on the page
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Create email body
            const emailBody = `
                Name: ${data.name}
                Email: ${data.email}
                Phone: ${data.countryCode} ${data.phone}
                Address: ${data.address}
            `;
            
            // Open email client
            window.location.href = `mailto:styleandstage08@gmail.com?subject=Quote Request from ${data.name}&body=${encodeURIComponent(emailBody)}`;
        });
    }
});
