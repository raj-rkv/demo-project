let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
// Preloader
window.addEventListener('load', function() {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
});

function showSlide(index) {
    // Loop back to the first slide if index exceeds the last slide
    if (index >= slides.length) currentSlide = 0;
    // Loop back to the last slide if index goes below 0
    if (index < 0) currentSlide = slides.length - 1;

    // Hide all slides
    slides.forEach(slide => slide.style.display = "none");
    // Show the current slide
    slides[currentSlide].style.display = "block";
}

function changeSlide(n) {
    showSlide(currentSlide += n);
}

// Initial slide display
showSlide(currentSlide);

// Auto-play slides every 5 seconds
setInterval(() => changeSlide(1), 5000);

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animation observer
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.visibility = 'visible';
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    // Observe elements for animation
    document.querySelectorAll('.amenity-item, .price-card, .overview-features li, .location-highlights li, .gallery-section img').forEach(el => {
        el.style.visibility = 'hidden';
        animationObserver.observe(el);
    });

    // Handle Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = '#fff';
            navbar.style.boxShadow = 'none';
        }

        lastScrollTop = scrollTop;
    });




    // Rest of your existing JavaScript
    // ... (previous content) ...
});
