document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    // Toggle menu when hamburger is clicked
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 480) {
                menuToggle.checked = false;
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 480 && 
            !event.target.closest('.navbar') && 
            navMenu.classList.contains('active')) {
            menuToggle.checked = false;
            navMenu.classList.remove('active');
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 480) {
            navMenu.classList.remove('active');
            menuToggle.checked = false;
        }
    });
});