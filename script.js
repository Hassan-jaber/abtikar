/* ==================== SHOW MENU ==================== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Menu show
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Menu hidden
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/* ==================== DARK MODE ==================== */
const themeButton = document.getElementById('theme-button');
const themeIcon = document.getElementById('theme-icon');
const darkTheme = 'dark-theme';
const iconMoon = 'fa-moon';
const iconSun = 'fa-sun';

// Previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => {
    if (themeIcon) {
        return themeIcon.classList.contains(iconMoon) ? iconMoon : iconSun;
    }
    return iconMoon;
};

// We validate if the user previously chose a theme
if (selectedTheme && themeIcon) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeIcon.classList[selectedIcon === iconMoon ? 'add' : 'remove'](iconSun);
    themeIcon.classList[selectedIcon === iconMoon ? 'remove' : 'add'](iconMoon);
}

// Activate / deactivate the theme manually with the button
if (themeButton && themeIcon) {
    themeButton.addEventListener('click', () => {
        // Add or remove the dark theme
        document.body.classList.toggle(darkTheme);
        themeIcon.classList.toggle(iconMoon);
        themeIcon.classList.toggle(iconSun);
        // We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme());
        localStorage.setItem('selected-icon', getCurrentIcon());
    });
}

/* ==================== REMOVE MENU MOBILE ==================== */
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.remove('show-menu');
    }
};

navLink.forEach(n => n.addEventListener('click', linkAction));

/* ==================== CHANGE BACKGROUND HEADER ==================== */
const scrollHeader = () => {
    const header = document.getElementById('header');
    if (header) {
        if (window.scrollY >= 50) {
            header.classList.add('scroll-header');
        } else {
            header.classList.remove('scroll-header');
        }
    }
};

window.addEventListener('scroll', scrollHeader);

/* ==================== SHOW SCROLL UP AND FLOATING CONTACTS ==================== */
const handleScroll = () => {
    const scrollUpBtn = document.getElementById('scroll-up');
    const floatingContacts = document.getElementById('floating-contacts');
    
    // Show scroll up button when scrollY >= 350px
    if (scrollUpBtn) {
        if (window.scrollY >= 350) {
            scrollUpBtn.classList.add('show-scroll');
        } else {
            scrollUpBtn.classList.remove('show-scroll');
        }
    }
    
    // Show floating contacts when scrollY >= 400px
    if (floatingContacts) {
        if (window.scrollY >= 400) {
            floatingContacts.classList.add('show-contacts');
        } else {
            floatingContacts.classList.remove('show-contacts');
        }
    }
};

window.addEventListener('scroll', handleScroll);

/* ==================== SCROLL SECTIONS ACTIVE LINK ==================== */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass?.classList.add('active-link');
        } else {
            sectionsClass?.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);

/* ==================== INITIALIZE AOS ==================== */
// Lazy initialize AOS only when needed
if (typeof AOS !== 'undefined') {
    // Initialize with performance-optimized settings
    window.addEventListener('load', () => {
        AOS.init({
            duration: 800,  // Faster animations
            easing: 'ease-out-cubic',
            once: true,  // Animate only once
            mirror: false,
            offset: 50,  // Trigger earlier
            delay: 0,  // No delay
            disable: function() {
                // Disable on mobile for better performance
                return window.innerWidth < 768;
            }
        });
    });
} else {
    // Fallback: Add a simple class when element is in viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    document.querySelectorAll('[data-aos]').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s, transform 0.6s';
        observer.observe(el);
    });
}

/* ==================== PORTFOLIO FILTER ==================== */
const portfolioFilters = document.querySelectorAll('.portfolio__filter');
const portfolioItems = document.querySelectorAll('.portfolio__item');

const filterPortfolio = (category) => {
    portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        
        if (category === 'all' || itemCategory === category) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 100);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
};

portfolioFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        portfolioFilters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');
        const category = filter.getAttribute('data-filter');
        filterPortfolio(category);
    });
});

// Initialize with all items visible
if (portfolioItems.length > 0) {
    filterPortfolio('all');
}

/* ==================== TESTIMONIALS SWIPER ==================== */
// Function to initialize Swiper
function initSwiper() {
    if (typeof Swiper !== 'undefined') {
        const testimonialSwiper = new Swiper('.testimonials__container', {
            // Loop Mode
            loop: true,
            
            // Space between slides
            spaceBetween: 24,
            
            // Grab cursor
            grabCursor: true,
            
            // Initial slides per view (mobile first)
            slidesPerView: 1,
            
            // Center slides
            centeredSlides: false,
            
            // Pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 1,
            },
            
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            
            // Responsive breakpoints - Mobile First
            breakpoints: {
                // >= 480px
                480: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // >= 640px
                640: {
                    slidesPerView: 1.5,
                    spaceBetween: 24,
                    centeredSlides: true
                },
                // >= 768px (tablets)
                768: {
                    slidesPerView: 2,
                    spaceBetween: 28,
                    centeredSlides: false
                },
                // >= 1024px (small desktop)
                1024: {
                    slidesPerView: 2.5,
                    spaceBetween: 30
                },
                // >= 1200px (desktop)
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 32
                }
            },
            
            // Autoplay
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },
            
            // Speed
            speed: 600,
            
            // Effect
            effect: 'slide',
            
            // Lazy loading (if using images in future)
            lazy: {
                loadPrevNext: true,
            },
            
            // Keyboard control
            keyboard: {
                enabled: true,
                onlyInViewport: true,
            },
            
            // Mousewheel control
            mousewheel: {
                forceToAxis: true,
            },
            
            // Touch resistance
            resistance: true,
            resistanceRatio: 0.85,
            
            // Accessibility
            a11y: {
                enabled: true,
                prevSlideMessage: 'الشريحة السابقة',
                nextSlideMessage: 'الشريحة التالية',
            },
            
            // Observer to update on changes
            observer: true,
            observeParents: true,
        });
        
        console.log('✅ Swiper initialized successfully');
        return true;
    } else {
        console.warn('⚠️ Swiper not loaded yet');
        return false;
    }
}

// Try to initialize Swiper with retry mechanism
function tryInitSwiper(attempt = 0) {
    const maxAttempts = 20; // Try for 2 seconds max
    
    if (initSwiper()) {
        // Success!
        return;
    }
    
    if (attempt < maxAttempts) {
        // Retry after 100ms
        setTimeout(() => tryInitSwiper(attempt + 1), 100);
    } else {
        console.error('❌ Failed to initialize Swiper after multiple attempts');
    }
}

// Start trying to initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => tryInitSwiper());
} else {
    tryInitSwiper();
}

// Final fallback on window load
window.addEventListener('load', () => {
    const swiperContainer = document.querySelector('.testimonials__container');
    if (swiperContainer && !swiperContainer.swiper) {
        console.log('🔄 Attempting final Swiper init on window load...');
        initSwiper();
    }
});

/* ==================== CONTACT FORM ==================== */
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !phone || !subject || !message) {
        showMessage('الرجاء ملء جميع الحقول', 'error');
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showMessage('الرجاء إدخال بريد إلكتروني صحيح', 'error');
        return;
    }
    
    setTimeout(() => {
        showMessage('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً', 'success');
        contactForm.reset();
    }, 1000);
};

const showMessage = (text, type) => {
    if (contactMessage) {
        contactMessage.textContent = text;
        contactMessage.className = `contact__message ${type}`;
        setTimeout(() => {
            contactMessage.className = 'contact__message';
        }, 5000);
    }
};

if (contactForm) {
    contactForm.addEventListener('submit', sendEmail);
}

/* ==================== SMOOTH SCROLL ==================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const header = document.querySelector('.header');
            const headerHeight = header ? header.offsetHeight : 0;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/* ==================== PARALLAX EFFECT ==================== */
// Parallax disabled to prevent scrollbar issues
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const parallaxElements = document.querySelectorAll('.floating-element');
    
//     parallaxElements.forEach((element, index) => {
//         const speed = 0.5 + (index * 0.1);
//         element.style.transform = `translateY(${scrolled * speed}px)`;
//     });
// });

/* ==================== ANIMATE ON SCROLL ==================== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service__card, .portfolio__item, .why-us__card').forEach(el => {
    observer.observe(el);
});

/* ==================== COUNTER ANIMATION ==================== */
const counters = document.querySelectorAll('.hero__stat-number');
const counterSpeed = 200;

const animateCounter = (counter) => {
    const target = +counter.innerText.replace(/\+/g, '');
    const increment = target / counterSpeed;
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            counter.innerText = Math.ceil(current) + '+';
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target + '+';
        }
    };
    
    updateCounter();
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => {
    counterObserver.observe(counter);
});

/* ==================== DYNAMIC YEAR ==================== */
const yearElement = document.querySelector('.footer__copy');
if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear);
}

/* ==================== FORM INPUTS ANIMATION ==================== */
const formInputs = document.querySelectorAll('.contact__input');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focus');
    });
    
    input.addEventListener('blur', function() {
        if (this.value === '') {
            this.parentElement.classList.remove('focus');
        }
    });
});

/* ==================== NEWSLETTER FORM ==================== */
const newsletterForm = document.querySelector('.footer__newsletter');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        if (email) {
            alert('شكراً لاشتراكك في النشرة الإخبارية!');
            newsletterForm.reset();
        }
    });
}

/* ==================== PERFORMANCE OPTIMIZATION ==================== */
const debounce = (func, wait = 10) => {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
};

/* ==================== ACCESSIBILITY ==================== */
const skipLink = document.createElement('a');
skipLink.href = '#main';
skipLink.className = 'skip-link';
skipLink.textContent = 'تخطي إلى المحتوى الرئيسي';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    right: 0;
    background: var(--primary-color);
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 100;
`;

skipLink.addEventListener('focus', function() {
    this.style.top = '0';
});

skipLink.addEventListener('blur', function() {
    this.style.top = '-40px';
});

document.body.insertBefore(skipLink, document.body.firstChild);

const mainElement = document.querySelector('.main');
if (mainElement) {
    mainElement.id = 'main';
}

/* ==================== CONSOLE MESSAGE ==================== */
console.log('%c مرحباً بك في منظمة الابتكار! ', 'background: #4F46E5; color: white; font-size: 20px; padding: 10px;');

/* ==================== INITIALIZATION ==================== */
// Fast initialization with minimal blocking
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Website loaded successfully!');
    
    // Quick logo animation
    const logoSvg = document.querySelector('.nav__logo-svg');
    if (logoSvg) {
        logoSvg.style.transform = 'scale(0) rotate(-180deg)';
        setTimeout(() => {
            logoSvg.style.transition = 'transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            logoSvg.style.transform = 'scale(1) rotate(0deg)';
        }, 100);
    }
    
    // Performance monitoring (only in dev)
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        const domContentLoaded = perfData.domContentLoadedEventEnd - perfData.navigationStart;
        const firstPaint = performance.getEntriesByType('paint')[0]?.startTime || 0;
        
        console.log(`⚡ Performance Metrics:`);
        console.log(`   First Paint: ${Math.round(firstPaint)}ms`);
        console.log(`   DOM Ready: ${Math.round(domContentLoaded)}ms`);
        console.log(`   Page Load: ${Math.round(pageLoadTime)}ms`);
    }
    
    // Lazy load images if present
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

/* ==================== ERROR HANDLING ==================== */
window.addEventListener('error', (e) => {
    console.error('Error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled rejection:', e.reason);
});
