// ============================================
// PORTFOLIO JAVASCRIPT
// Handles navigation, scroll effects, and animations
// ============================================
// restored: 2026-02-02

(function() {
    'use strict';

    // ============================================
    // NAVIGATION SCROLL EFFECT
    // ============================================
    
    const nav = document.querySelector('.nav');
    let lastScroll = 0;

    function handleNavScroll() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow when scrolled
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    }

    window.addEventListener('scroll', handleNavScroll, { passive: true });

    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const navHeight = nav.offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mobileMenu) {
                    mobileMenu.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            }
        });
    });

    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    let mobileMenu = null;

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            
            // Create mobile menu overlay if it doesn't exist
            if (!mobileMenu) {
                mobileMenu = document.createElement('div');
                mobileMenu.className = 'mobile-menu';
                mobileMenu.innerHTML = navLinks.innerHTML;
                document.body.appendChild(mobileMenu);
                
                // Add styles for mobile menu
                const style = document.createElement('style');
                style.textContent = `
                    .mobile-menu {
                        position: fixed;
                        top: 70px;
                        left: 0;
                        right: 0;
                        background: white;
                        padding: 2rem;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                        transform: translateY(-100%);
                        transition: transform 0.3s ease;
                        z-index: 999;
                    }
                    
                    .mobile-menu.active {
                        transform: translateY(0);
                    }
                    
                    .mobile-menu ul {
                        display: flex;
                        flex-direction: column;
                        gap: 1.5rem;
                    }
                    
                    .mobile-menu a {
                        display: block;
                        padding: 0.5rem;
                        font-size: 1.125rem;
                    }
                    
                    .mobile-menu-toggle.active span:nth-child(1) {
                        transform: rotate(45deg) translate(5px, 5px);
                    }
                    
                    .mobile-menu-toggle.active span:nth-child(2) {
                        opacity: 0;
                    }
                    
                    .mobile-menu-toggle.active span:nth-child(3) {
                        transform: rotate(-45deg) translate(7px, -6px);
                    }
                `;
                document.head.appendChild(style);
            }
            
            mobileMenu.classList.toggle('active');
        });
    }

    // ============================================
    // SCROLL ANIMATION OBSERVER
    // ============================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements that should animate on scroll
    const animatedElements = document.querySelectorAll(
        '.project-card, .experience-item, .skill-category, .leadership-card, .education-main, .recognition-sidebar'
    );

    animatedElements.forEach(el => {
        // Reset animation styles
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        
        observer.observe(el);
    });

    // ============================================
    // LAZY LOAD IMAGES
    // ============================================
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                // If image has data-src, load it
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });

    // ============================================
    // TYPING EFFECT FOR CODE WINDOW (Optional Enhancement)
    // ============================================
    
    function initTypeEffect() {
        const codeElement = document.querySelector('.code-content code');
        if (!codeElement) return;
        
        const originalHTML = codeElement.innerHTML;
        codeElement.innerHTML = '';
        
        let index = 0;
        const speed = 20;
        
        function typeCharacter() {
            if (index < originalHTML.length) {
                codeElement.innerHTML += originalHTML.charAt(index);
                index++;
                setTimeout(typeCharacter, speed);
            }
        }
        
        // Start typing after a delay
        // Uncomment the line below to enable typing effect
        // setTimeout(typeCharacter, 1000);
    }

    // ============================================
    // PERFORMANCE OPTIMIZATION
    // ============================================
    
    // Debounce function for scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Throttle function for resize events
    function throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // ============================================
    // HANDLE EXTERNAL LINKS
    // ============================================
    
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        // Add rel attributes for security
        if (!link.getAttribute('rel')) {
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });

    // ============================================
    // INITIALIZE ON LOAD
    // ============================================
    
    window.addEventListener('load', function() {
        // Remove any loading states
        document.body.classList.add('loaded');
        
        // Initialize type effect if desired
        // initTypeEffect();
        
        console.log('Portfolio loaded successfully');
    });

    // ============================================
    // ACTIVE SECTION HIGHLIGHTING IN NAV
    // ============================================
    
    function updateActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const navHeight = nav.offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const scrollPosition = window.pageYOffset;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const id = section.getAttribute('id');
                
                // Remove active class from all nav links
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to current section's nav link
                const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }

    const throttledUpdateActive = throttle(updateActiveSection, 100);
    window.addEventListener('scroll', throttledUpdateActive, { passive: true });

    // ============================================
    // ADD ACTIVE LINK STYLING
    // ============================================
    
    const style = document.createElement('style');
    style.textContent = `
        .nav-links a.active {
            color: var(--color-primary) !important;
            position: relative;
        }
        
        .nav-links a.active::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            right: 0;
            height: 2px;
            background: var(--color-primary);
        }
    `;
    document.head.appendChild(style);

    // ============================================
    // CONSOLE MESSAGE
    // ============================================
    
    console.log('%c👨‍💻 Portfolio by Sheeraz', 'color: #1e3a8a; font-size: 16px; font-weight: bold;');
    console.log('%cInterested in the code? Check out the repo!', 'color: #10b981; font-size: 12px;');

})();