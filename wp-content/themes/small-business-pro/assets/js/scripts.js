/**
 * Koala Coats Painting - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {

  // ==========================================
  // MOBILE MENU TOGGLE
  // ==========================================
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      mainNav.classList.toggle('active');
      document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
    });
  }

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (mainNav.classList.contains('active')) {
        mobileMenuToggle.classList.remove('active');
        mainNav.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // ==========================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ==========================================
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Ignore empty hashes
      if (href === '#') {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==========================================
  // HEADER SCROLL EFFECT
  // ==========================================
  const siteHeader = document.querySelector('.site-header');
  let lastScroll = 0;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });

  // ==========================================
  // FADE IN ANIMATION ON SCROLL
  // ==========================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all service cards, process steps, etc.
  const animateElements = document.querySelectorAll('.service-card, .process-step, .testimonial-card, .gallery-item');
  animateElements.forEach(element => {
    observer.observe(element);
  });

  // ==========================================
  // CLICK TO CALL TRACKING (Optional)
  // ==========================================
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
  phoneLinks.forEach(link => {
    link.addEventListener('click', function() {
      // You can add analytics tracking here if needed
      console.log('Phone number clicked');
    });
  });

  // ==========================================
  // GALLERY LIGHTBOX (Simple)
  // ==========================================
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (galleryItems.length > 0) {
    galleryItems.forEach(item => {
      item.addEventListener('click', function() {
        const img = this.querySelector('img');
        if (img) {
          // Create simple lightbox
          const lightbox = document.createElement('div');
          lightbox.className = 'lightbox';
          lightbox.innerHTML = `
            <div class="lightbox-content">
              <span class="lightbox-close">&times;</span>
              <img src="${img.src}" alt="${img.alt}">
            </div>
          `;
          document.body.appendChild(lightbox);
          document.body.style.overflow = 'hidden';

          // Close lightbox
          lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox || e.target.className === 'lightbox-close') {
              document.body.removeChild(lightbox);
              document.body.style.overflow = '';
            }
          });
        }
      });
    });
  }

  // ==========================================
  // FORM VALIDATION (Additional to Contact Form 7)
  // ==========================================
  const contactForms = document.querySelectorAll('.contact-form');
  contactForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const phoneInput = form.querySelector('input[type="tel"]');
      if (phoneInput && phoneInput.value) {
        // Basic phone validation
        const phonePattern = /^[\d\s\-\(\)]+$/;
        if (!phonePattern.test(phoneInput.value)) {
          e.preventDefault();
          alert('Please enter a valid phone number');
          phoneInput.focus();
        }
      }
    });
  });

  // ==========================================
  // ACTIVE NAV LINK ON SCROLL
  // ==========================================
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.main-nav a[href="#${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        if (navLink) {
          document.querySelectorAll('.main-nav a').forEach(link => {
            link.classList.remove('active');
          });
          navLink.classList.add('active');
        }
      }
    });
  });

});

// ==========================================
// LIGHTBOX STYLES (Injected)
// ==========================================
const lightboxStyles = `
  <style>
    .lightbox {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      cursor: pointer;
    }
    .lightbox-content {
      max-width: 90%;
      max-height: 90%;
      position: relative;
    }
    .lightbox-content img {
      max-width: 100%;
      max-height: 90vh;
      display: block;
    }
    .lightbox-close {
      position: absolute;
      top: -40px;
      right: 0;
      color: white;
      font-size: 40px;
      cursor: pointer;
      z-index: 10000;
    }
  </style>
`;
document.head.insertAdjacentHTML('beforeend', lightboxStyles);
