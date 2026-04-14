gsap.registerPlugin(ScrollTrigger);

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.getElementById('themeToggle');

// EmailJS Init
emailjs.init("lli5jV6AjE77bZgax");

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        if (window.innerWidth <= 968) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

gsap.from('.timeline-item', {
    scrollTrigger: {
        trigger: '.education-experience-section',
        start: 'top 80%',
    },
    opacity: 0,
    x: -50,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
});

const certCards = document.querySelectorAll('.certification-card');
certCards.forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: '.certifications-section',
            start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.15,
        ease: 'back.out(1.7)'
    });
});

const blogCards = document.querySelectorAll('.blog-card');
blogCards.forEach((card, index) => {
    card.style.display = 'block';
    card.style.opacity = '1';
    card.style.visibility = 'visible';
    
    gsap.from(card, {
        scrollTrigger: {
            trigger: '.blog-section',
            start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.2,
        ease: 'back.out(1.7)',
        onComplete: () => {
            card.style.opacity = '1';
            card.style.visibility = 'visible';
        }
    });
});

gsap.from('.contact-info', {
    scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 80%',
    },
    opacity: 0,
    x: -50,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.contact-form', {
    scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 80%',
    },
    opacity: 0,
    x: 50,
    duration: 1,
    ease: 'power3.out'
});

const skillCards = document.querySelectorAll('.skill-category-card');
skillCards.forEach((card, index) => {
    card.style.display = 'block';
    card.style.opacity = '1';
    card.style.visibility = 'visible';
    
    gsap.from(card, {
        scrollTrigger: {
            trigger: '.skills-section',
            start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.2,
        ease: 'back.out(1.7)',
        onComplete: () => {
            card.style.opacity = '1';
            card.style.visibility = 'visible';
        }
    });
});

const skillProgressBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const width = progressBar.style.width;
            progressBar.style.width = '0%';
            
            setTimeout(() => {
                progressBar.style.width = width;
            }, 100);
            
            skillObserver.unobserve(progressBar);
        }
    });
}, { threshold: 0.5 });

skillProgressBars.forEach(bar => {
    skillObserver.observe(bar);
});

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.display = 'block';
    card.style.opacity = '1';
    card.style.visibility = 'visible';
    
    gsap.from(card, {
        scrollTrigger: {
            trigger: '.projects-section',
            start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.15,
        ease: 'back.out(1.7)',
        onComplete: () => {
            card.style.opacity = '1';
            card.style.visibility = 'visible';
        }
    });
});

const observerOptions = {
    threshold: 0.6,
    rootMargin: '-80px 0px -40% 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

document.querySelectorAll('section[id]').forEach(section => {
    observer.observe(section);
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const icon = themeToggle.querySelector('i');
    
    if (document.body.classList.contains('light-theme')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});

gsap.from('.nav-logo', {
    opacity: 0,
    x: -50,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.nav-item', {
    opacity: 0,
    y: -20,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out',
    delay: 0.3
});

gsap.from('.theme-toggle', {
    opacity: 0,
    scale: 0,
    duration: 0.5,
    ease: 'back.out(1.7)',
    delay: 1
});

document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

gsap.from('.hero-badge', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out',
    delay: 0.5
});

gsap.from('.binary-text', {
    opacity: 0,
    x: -50,
    duration: 1,
    ease: 'power2.out',
    delay: 0.7
});

gsap.from('.hero-title', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    delay: 0.9
});

gsap.from('.hero-subtitle', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power2.out',
    delay: 1.1
});

gsap.from('.hero-description', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power2.out',
    delay: 1.3
});

gsap.from('.hero-cta .btn', {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.15,
    ease: 'back.out(1.7)',
    delay: 1.5
});

gsap.from('.hero-stats', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power2.out',
    delay: 1.8
});

gsap.from('.terminal-window', {
    opacity: 0,
    x: 100,
    duration: 1,
    ease: 'power3.out',
    delay: 1
});

gsap.from('.profile-image-wrapper', {
    opacity: 0,
    scale: 0.5,
    duration: 1.2,
    ease: 'back.out(1.7)',
    delay: 1
});

gsap.from('.profile-status', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power2.out',
    delay: 1.5
});

gsap.from('.profile-ring', {
    opacity: 0,
    scale: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power2.out',
    delay: 1.2
});

gsap.from('.float-icon', {
    opacity: 0,
    scale: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'back.out(1.7)',
    delay: 2
});

const statValues = document.querySelectorAll('.stat-value');

const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            statValues.forEach(stat => animateCounter(stat));
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

const typingText = document.querySelector('.typing-text');
if (typingText) {
    const titles = [
        'CyberSecurity Analyst',
        'Ethical Hacker',
        'Cybersecurity Researcher',
        'Red & Blue Teaming',
        'Pentester'
    ];
    
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const typeWriter = () => {
        const currentTitle = titles[titleIndex];
        
        if (isDeleting) {
            typingText.textContent = currentTitle.substring(0, charIndex - 1) + '|';
            charIndex--;
        } else {
            typingText.textContent = currentTitle.substring(0, charIndex + 1) + '|';
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentTitle.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            typeSpeed = 500;
        }
        
        setTimeout(typeWriter, typeSpeed);
    };
    
    setTimeout(typeWriter, 2000);
}

gsap.from('.section-header', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 80%',
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.about-text p', {
    scrollTrigger: {
        trigger: '.about-text',
        start: 'top 80%',
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
});

gsap.from('.info-card', {
    scrollTrigger: {
        trigger: '.about-info',
        start: 'top 80%',
    },
    opacity: 0,
    x: 50,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
});

gsap.from('.profile-intro', {
    scrollTrigger: {
        trigger: '.profile-section',
        start: 'top 80%',
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power2.out'
});

gsap.from('.profile-card', {
    scrollTrigger: {
        trigger: '.profile-grid',
        start: 'top 80%',
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.15,
    ease: 'back.out(1.7)'
});

const profileCards = document.querySelectorAll('.profile-platform-card');
profileCards.forEach((card, index) => {
    card.style.display = 'flex';
    card.style.opacity = '1';
    card.style.visibility = 'visible';
    
    gsap.from(card, {
        scrollTrigger: {
            trigger: '.my-profile-section',
            start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.15,
        ease: 'back.out(1.7)',
        onComplete: () => {
            card.style.opacity = '1';
            card.style.visibility = 'visible';
        }
    });
});

// Contact Form with EmailJS and reCAPTCHA
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const recaptchaResponse = grecaptcha.getResponse();
    if (recaptchaResponse.length === 0) {
        alert("Please complete the reCAPTCHA verification.");
        return;
    }

    const btn = document.querySelector(".submit-btn span");
    btn.textContent = "Sending...";

    emailjs.sendForm("service_xqvzeni", "template_ahwddld", this)
        .then(function() {
            alert("Message sent successfully!");
            document.getElementById("contactForm").reset();
            grecaptcha.reset();
            btn.textContent = "Send Message";
        }, function(error) {
            alert("Failed to send: " + JSON.stringify(error));
            console.error("EmailJS error:", error);
            btn.textContent = "Send Message";
        });
});