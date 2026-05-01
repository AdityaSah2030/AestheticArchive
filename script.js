document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const closeMenuBtn = document.querySelector('.close-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    const backToTop = document.querySelector('.back-to-top');
    const header = document.querySelector('header');

    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    });

    closeMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close mobile menu when clicking a link
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Back to top button functionality and Header shadow
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }

        // Add subtle shadow to header on scroll
        if (window.pageYOffset > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
