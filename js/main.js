/**
 * QS Global Solutions - Main JavaScript
 * Handles animations, navigation, and interactive features
 */

(function() {
  'use strict';

  // ============================================
  // DOM Ready
  // ============================================
  document.addEventListener('DOMContentLoaded', function() {
    initHeader();
    initMobileNav();
    initScrollAnimations();
    initCounterAnimations();
    initSmoothScroll();
    initFormValidation();
    initServiceNavigation();
  });

  // ============================================
  // Header Scroll Effect
  // ============================================
  function initHeader() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateHeader() {
      const scrollY = window.scrollY;

      // Add shadow when scrolled
      if (scrollY > 10) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }

      lastScrollY = scrollY;
      ticking = false;
    }

    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    });

    // Initial check
    updateHeader();
  }

  // ============================================
  // Mobile Navigation
  // ============================================
  function initMobileNav() {
    const toggle = document.querySelector('.nav__toggle');
    const navList = document.querySelector('.nav__list');
    const dropdowns = document.querySelectorAll('.nav__dropdown');

    if (!toggle || !navList) return;

    // Toggle mobile menu
    toggle.addEventListener('click', function() {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !isExpanded);
      navList.classList.toggle('active');
      document.body.style.overflow = navList.classList.contains('active') ? 'hidden' : '';

      // Animate hamburger
      toggle.classList.toggle('active');
    });

    // Handle dropdown clicks on mobile
    dropdowns.forEach(function(dropdown) {
      const toggleLink = dropdown.querySelector('.nav__dropdown-toggle');

      if (toggleLink) {
        toggleLink.addEventListener('click', function(e) {
          if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('active');
          }
        });
      }
    });

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav__link:not(.nav__dropdown-toggle), .nav__dropdown-item');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          navList.classList.remove('active');
          toggle.setAttribute('aria-expanded', 'false');
          toggle.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });

    // Close menu on resize to desktop
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        navList.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.classList.remove('active');
        document.body.style.overflow = '';

        dropdowns.forEach(function(dropdown) {
          dropdown.classList.remove('active');
        });
      }
    });
  }

  // ============================================
  // Scroll Animations (Intersection Observer)
  // ============================================
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
      '.animate-fade-in-up, .animate-fade-in, .animate-scale, .animate-slide-left, .animate-slide-right'
    );

    if (!animatedElements.length) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      animatedElements.forEach(function(el) {
        el.classList.add('animated');
      });
      return;
    }

    const observer = new IntersectionObserver(
      function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
      }
    );

    animatedElements.forEach(function(el) {
      observer.observe(el);
    });
  }

  // ============================================
  // Counter Animations
  // ============================================
  function initCounterAnimations() {
    const counters = document.querySelectorAll('[data-counter]');

    if (!counters.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute('data-counter'), 10);
            const duration = parseInt(counter.getAttribute('data-duration') || '2000', 10);
            const suffix = counter.getAttribute('data-suffix') || '';

            if (prefersReducedMotion) {
              counter.textContent = target + suffix;
            } else {
              animateCounter(counter, target, duration, suffix);
            }

            observer.unobserve(counter);
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    counters.forEach(function(counter) {
      observer.observe(counter);
    });
  }

  function animateCounter(element, target, duration, suffix) {
    const start = 0;
    const startTime = performance.now();

    function easeOutQuad(t) {
      return t * (2 - t);
    }

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuad(progress);
      const current = Math.floor(easedProgress * target);

      element.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = target + suffix;
      }
    }

    requestAnimationFrame(update);
  }

  // ============================================
  // Smooth Scroll for Anchor Links
  // ============================================
  function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        if (href === '#') return;

        const target = document.querySelector(href);

        if (target) {
          e.preventDefault();

          const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
          const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Update URL without jumping
          history.pushState(null, '', href);
        }
      });
    });
  }

  // ============================================
  // Form Validation
  // ============================================
  function initFormValidation() {
    const forms = document.querySelectorAll('form[data-validate]');

    forms.forEach(function(form) {
      const inputs = form.querySelectorAll('.form-input, .form-select, .form-textarea');

      // Real-time validation
      inputs.forEach(function(input) {
        input.addEventListener('blur', function() {
          validateField(this);
        });

        input.addEventListener('input', function() {
          if (this.classList.contains('is-invalid')) {
            validateField(this);
          }
        });
      });

      // Form submission
      form.addEventListener('submit', function(e) {
        let isValid = true;

        inputs.forEach(function(input) {
          if (!validateField(input)) {
            isValid = false;
          }
        });

        if (!isValid) {
          e.preventDefault();

          // Focus first invalid field
          const firstInvalid = form.querySelector('.is-invalid');
          if (firstInvalid) {
            firstInvalid.focus();
          }
        }
      });
    });
  }

  function validateField(field) {
    const value = field.value.trim();
    const isRequired = field.hasAttribute('required');
    const type = field.type;
    let isValid = true;
    let message = '';

    // Remove existing error
    removeFieldError(field);

    // Required check
    if (isRequired && !value) {
      isValid = false;
      message = 'This field is required';
    }
    // Email validation
    else if (type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        message = 'Please enter a valid email address';
      }
    }
    // Phone validation
    else if (type === 'tel' && value) {
      const phoneRegex = /^[\d\s\+\-\(\)]{7,20}$/;
      if (!phoneRegex.test(value)) {
        isValid = false;
        message = 'Please enter a valid phone number';
      }
    }

    if (!isValid) {
      showFieldError(field, message);
    }

    return isValid;
  }

  function showFieldError(field, message) {
    field.classList.add('is-invalid');
    field.style.borderColor = '#e53e3e';

    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.style.cssText = 'color: #e53e3e; font-size: 0.875rem; margin-top: 0.25rem;';
    errorDiv.textContent = message;

    field.parentNode.appendChild(errorDiv);
  }

  function removeFieldError(field) {
    field.classList.remove('is-invalid');
    field.style.borderColor = '';

    const error = field.parentNode.querySelector('.form-error');
    if (error) {
      error.remove();
    }
  }

  // ============================================
  // Service Navigation (Sticky Sidebar)
  // ============================================
  function initServiceNavigation() {
    const serviceNav = document.querySelector('.service-nav');
    const serviceLinks = document.querySelectorAll('.service-nav__link');
    const sections = document.querySelectorAll('[data-section]');

    if (!serviceNav || !sections.length) return;

    // Highlight active section on scroll
    const observer = new IntersectionObserver(
      function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section');

            serviceLinks.forEach(function(link) {
              link.classList.remove('service-nav__link--active');
              if (link.getAttribute('href') === '#' + sectionId) {
                link.classList.add('service-nav__link--active');
              }
            });
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
      }
    );

    sections.forEach(function(section) {
      observer.observe(section);
    });

    // Smooth scroll to sections
    serviceLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.querySelector('[data-section="' + targetId + '"]');

        if (targetSection) {
          const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
          const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ============================================
  // Parallax Effect
  // ============================================
  function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    if (!parallaxElements.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ticking = false;

    function updateParallax() {
      const scrollY = window.scrollY;

      parallaxElements.forEach(function(el) {
        const speed = parseFloat(el.getAttribute('data-parallax')) || 0.5;
        const yPos = -(scrollY * speed);
        el.style.transform = 'translate3d(0, ' + yPos + 'px, 0)';
      });

      ticking = false;
    }

    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    });
  }

  // Initialize parallax on load
  window.addEventListener('load', initParallax);

  // ============================================
  // File Upload Preview
  // ============================================
  window.handleFileUpload = function(input) {
    const preview = input.parentNode.querySelector('.file-preview');
    const label = input.parentNode.querySelector('.file-label');

    if (input.files && input.files[0]) {
      const file = input.files[0];
      const fileName = file.name;
      const fileSize = (file.size / 1024 / 1024).toFixed(2);

      if (label) {
        label.textContent = fileName + ' (' + fileSize + ' MB)';
      }

      if (preview) {
        preview.textContent = 'Selected: ' + fileName;
        preview.style.display = 'block';
      }
    }
  };

  // ============================================
  // Form Submission Handler
  // ============================================
  window.handleFormSubmit = function(form, event) {
    event.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner"></span> Sending...';

    // Simulate form submission (replace with actual submission logic)
    setTimeout(function() {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;

      // Show success message
      const successMsg = document.createElement('div');
      successMsg.className = 'form-success';
      successMsg.style.cssText = 'background: #48bb78; color: white; padding: 1rem; border-radius: 0.5rem; margin-top: 1rem; text-align: center;';
      successMsg.textContent = 'Thank you! Your message has been sent successfully.';

      form.appendChild(successMsg);
      form.reset();

      // Remove success message after 5 seconds
      setTimeout(function() {
        successMsg.remove();
      }, 5000);
    }, 2000);
  };

})();
