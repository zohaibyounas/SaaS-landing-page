// ========================
// Analytics Placeholder
// ========================
// Replace with your actual analytics service
// Supports: Google Analytics 4, Mixpanel, Amplitude, Segment, etc.

window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'GA_MEASUREMENT_ID'); // Replace with your GA ID

// Placeholder for Mixpanel
// (function(f,b){if(!b.__SV){var e,g,i,h;window.mixpanel=b;b._i=[];b.init=function(e,d,a){function f(b,d){var c=d.split(".");2==c.length&&(b=b[c[0]],d=c[1]),b[d]=function(){b.push([d].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!=typeof a?c=b[a]=[]:a="mixpanel";c.people=c.people||[];c.toString=function(b){var d="mixpanel";"undefined"!=typeof a&&a!==!1&&(d+="."+a);b||(d+=" (stub)");return d};c.people.toString=function(){return c.toString(!0)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");for(h=0;h<i.length;h++)f(c,i[h]);b._i.push([e,d,a])}})(document,window.mixpanel||[]);
// mixpanel.init("YOUR_TOKEN"); // Replace with your Mixpanel token

// Placeholder for Hotjar
// (function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:123456,hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

// Placeholder for Google Tag Manager
// (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM_ID');

// ========================
// Mobile Menu Toggle
// ========================
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        updateAriaLabel();
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            updateAriaLabel();
        });
    });
}

function updateAriaLabel() {
    const label = mobileMenu.classList.contains('hidden') ? 'Open menu' : 'Close menu';
    hamburger.setAttribute('aria-label', label);
}

// ========================
// Pricing Toggle
// ========================
function togglePricing(period) {
    // Update button states
    document.querySelectorAll('.pricing-toggle').forEach(btn => {
        btn.classList.remove('bg-indigo-600', 'text-white');
        btn.classList.add('text-gray-700');
    });
    document.querySelector(`[data-plan="${period}"]`).classList.add('bg-indigo-600', 'text-white');

    // Update price display
    if (period === 'yearly') {
        document.querySelectorAll('.pricing-period-monthly').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('.pricing-period-yearly').forEach(el => el.classList.remove('hidden'));
    } else {
        document.querySelectorAll('.pricing-period-monthly').forEach(el => el.classList.remove('hidden'));
        document.querySelectorAll('.pricing-period-yearly').forEach(el => el.classList.add('hidden'));
    }

    trackEvent('pricing_toggle', period);
}

// Set initial state
document.querySelector('[data-plan="monthly"]').classList.add('bg-indigo-600', 'text-white');

// ========================
// FAQ Toggle
// ========================
function toggleFAQ(button) {
    const content = button.parentElement.querySelector('.faq-content');
    const icon = button.querySelector('.faq-icon');
    const isOpen = !content.classList.contains('hidden');

    // Close other FAQs
    document.querySelectorAll('.faq-content').forEach(el => {
        if (el !== content) {
            el.classList.add('hidden');
            el.parentElement.querySelector('.faq-icon').classList.remove('rotate-180');
        }
    });

    // Toggle current FAQ
    content.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');

    trackEvent('faq_toggle', button.querySelector('span').textContent);
}

// ========================
// Newsletter Signup
// ========================
function handleNewsletterSignup(event) {
    event.preventDefault();

    const email = event.target.querySelector('input[type="email"]').value;

    // Validate email
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }

    // Simulate API call
    console.log('Newsletter signup:', email);
    trackEvent('newsletter_signup', email);

    showNotification('Check your email for confirmation!', 'success');
    event.target.reset();
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ========================
// Notifications
// ========================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed bottom-4 right-4 px-6 py-3 rounded-lg text-white font-semibold shadow-lg z-50 ${
        type === 'success' ? 'bg-green-500' :
        type === 'error' ? 'bg-red-500' :
        'bg-blue-500'
    }`;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ========================
// Scroll Reveal Animation
// ========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
});

// ========================
// Tracking Function
// ========================
function trackEvent(eventName, eventValue = null) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, {
            'event_value': eventValue
        });
    }

    // Mixpanel
    if (typeof mixpanel !== 'undefined') {
        mixpanel.track(eventName, { value: eventValue });
    }

    // Hotjar
    if (typeof hj !== 'undefined') {
        hj('event', eventName);
    }

    // Console logging for debugging
    console.log('Event tracked:', eventName, eventValue);
}

// ========================
// Smooth Scroll for Anchor Links
// ========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ========================
// Page Load Analytics
// ========================
window.addEventListener('load', () => {
    trackEvent('page_load', window.location.pathname);
});

// ========================
// Exit Intent (Optional - for advanced tracking)
// ========================
let lastX = 0;
let lastY = 0;

document.addEventListener('mousemove', (e) => {
    lastX = e.clientX;
    lastY = e.clientY;
});

document.addEventListener('mouseleave', () => {
    if (lastY < 50) {
        trackEvent('exit_intent');
    }
});

// ========================
// Enhanced Animations
// ========================

// Animate price cards on scroll
function animatePricingCards() {
    const cards = document.querySelectorAll('.pricing-card-popular, .scroll-reveal.stagger-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
            card.style.transition = 'all 0.3s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// Stagger feature cards entrance
function staggerElementsOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting && entry.target.classList.contains('stagger-item')) {
                entry.target.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`;
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.stagger-item').forEach(item => {
        observer.observe(item);
    });
}

// Animate hero image with parallax effect
function addParallaxEffect() {
    const heroImage = document.querySelector('.hero-image-container');
    if (heroImage) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            if (scrollPosition < 800) {
                heroImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
            }
        });
    }
}

// Button pulse animation on hover
function setupButtonAnimations() {
    const buttons = document.querySelectorAll('button[onclick*="trackEvent"]');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.boxShadow = '0 15px 40px rgba(99, 102, 241, 0.4)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.boxShadow = '';
        });
    });
}

// Counter animation for stats
function animateCounters() {
    const counterElements = document.querySelectorAll('[data-target]');
    counterElements.forEach(el => {
        const target = parseInt(el.dataset.target);
        let current = 0;
        const increment = target / 30;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                el.textContent = target;
                clearInterval(timer);
            } else {
                el.textContent = Math.floor(current);
            }
        }, 30);
    });
}

// Initialize all animations when page loads
window.addEventListener('load', () => {
    setTimeout(() => {
        animatePricingCards();
        staggerElementsOnScroll();
        addParallaxEffect();
        setupButtonAnimations();
    }, 500);
});

// Mobile animation optimization
if (window.innerWidth <= 768) {
    // Reduce animation complexity on mobile
    document.documentElement.style.setProperty('--animation-duration', '0.3s');
}