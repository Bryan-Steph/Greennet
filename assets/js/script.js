// WEBSOFT
document.addEventListener('DOMContentLoaded', function() {
    // Animated counter for stats
    const counters = document.querySelectorAll('.gn-stat-number');
    const speed = 200;
    
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-count');
      const count = +counter.innerText;
      const increment = target / speed;
      
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target;
      }
      
      function updateCounter() {
        const current = +counter.innerText;
        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCounter, 1);
        } else {
          counter.innerText = target;
        }
      }
    });
    
    // Particle animation
    const particles = document.querySelectorAll('.gn-hero-particle');
    particles.forEach(particle => {
      // Randomize animation duration/delay
      const duration = 15 + Math.random() * 20;
      const delay = Math.random() * 5;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;
    });
  });
// END WEBSOFT

// section-2 start
document.addEventListener('DOMContentLoaded', function() {
    // Animated counters
    const statCounters = document.querySelectorAll('.gn-stat-number');
    const animationDuration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
  
    statCounters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-count'));
      const start = 0;
      const totalFrames = Math.round(animationDuration / frameDuration);
      let currentFrame = 0;
  
      const animate = () => {
        currentFrame++;
        const progress = currentFrame / totalFrames;
        const currentCount = Math.floor(progress * target);
  
        if (currentCount <= target) {
          counter.textContent = currentCount.toLocaleString();
          requestAnimationFrame(animate);
        } else {
          counter.textContent = target.toLocaleString();
        }
      };
  
      // Trigger on scroll
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          animate();
          observer.unobserve(counter);
        }
      }, { threshold: 0.5 });
  
      observer.observe(counter);
    });
  

  });
// section-2 end



document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navMenu = document.querySelector('.nav-menu');
  
  navbarToggler.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      
      // Change icon based on menu state
      const icon = this.querySelector('i');
      if (navMenu.classList.contains('active')) {
          icon.classList.remove('bi-list');
          icon.classList.add('bi-x');
      } else {
          icon.classList.remove('bi-x');
          icon.classList.add('bi-list');
      }
  });
  
  // Dropdown functionality
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(dropdown => {
      const link = dropdown.querySelector('.nav-link');
      
      link.addEventListener('click', function(e) {
          if (window.innerWidth < 992) {
              e.preventDefault();
              const submenu = this.nextElementSibling;
              
              if (submenu) {
                  submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
              }
          }
      });
  });

  // Action icons functionality
  const actionIcons = document.querySelectorAll('.action-icon');
    
  actionIcons.forEach(icon => {
      icon.addEventListener('click', function(e) {
          e.preventDefault();
          const ariaLabel = this.getAttribute('aria-label');
          alert(`${ariaLabel} clicked!`);
          // In a real application, you would handle each action accordingly
      });
  });
  
  // Search functionality
  const searchBtn = document.querySelector('.search-btn');
  const searchInput = document.querySelector('.search-input');
  
  searchBtn.addEventListener('click', function() {
      if (searchInput.value.trim() !== '') {
          alert(`Searching for: ${searchInput.value}`);
          // In a real application, you would submit the search form here
      }
  });
  
  searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' && this.value.trim() !== '') {
          alert(`Searching for: ${this.value}`);
          // In a real application, you would submit the search form here
      }
  });
})

document.addEventListener('DOMContentLoaded', function() {
    // Set animation order for category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach((card, index) => {
        card.style.setProperty('--order', index);
    });
    
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const categoryItems = document.querySelectorAll('.category-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filter categories
            categoryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    item.style.animation = 'scaleIn 0.5s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const featuredSection = document.querySelector('.featured-categories');
    observer.observe(featuredSection);
    
    // Mobile horizontal scroll enhancement
    const categoriesContainer = document.querySelector('.categories-container');
    let isDown = false;
    let startX;
    let scrollLeft;
    
    if (window.innerWidth <= 768) {
        categoriesContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - categoriesContainer.offsetLeft;
            scrollLeft = categoriesContainer.scrollLeft;
            categoriesContainer.style.cursor = 'grabbing';
        });
        
        categoriesContainer.addEventListener('mouseleave', () => {
            isDown = false;
            categoriesContainer.style.cursor = 'grab';
        });
        
        categoriesContainer.addEventListener('mouseup', () => {
            isDown = false;
            categoriesContainer.style.cursor = 'grab';
        });
        
        categoriesContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - categoriesContainer.offsetLeft;
            const walk = (x - startX) * 2;
            categoriesContainer.scrollLeft = scrollLeft - walk;
        });
        
        // Touch events for mobile
        categoriesContainer.addEventListener('touchstart', (e) => {
            isDown = true;
            startX = e.touches[0].pageX - categoriesContainer.offsetLeft;
            scrollLeft = categoriesContainer.scrollLeft;
        });
        
        categoriesContainer.addEventListener('touchend', () => {
            isDown = false;
        });
        
        categoriesContainer.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            const x = e.touches[0].pageX - categoriesContainer.offsetLeft;
            const walk = (x - startX) * 2;
            categoriesContainer.scrollLeft = scrollLeft - walk;
        });
    }
});

// Add to your existing script.js
document.querySelectorAll('.dropdown').forEach(dropdown => {
    // Mobile toggle
    if (window.innerWidth <= 992) {
      const link = dropdown.querySelector('.nav-link');
      link.addEventListener('click', function(e) {
        e.preventDefault();
        dropdown.classList.toggle('active');
        
        // Rotate chevron
        const icon = this.querySelector('i');
        icon.style.transform = dropdown.classList.contains('active') 
          ? 'rotate(180deg)' 
          : 'rotate(0)';
      });
    }
  });



  document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.gn-tab-btn');
    const tabPanes = document.querySelectorAll('.gn-tab-pane');
  
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active classes
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Show corresponding pane
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
      });
    });
  });


//   PRODUCT SHOWCASE
document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.gn-filter-btn');
    const productCards = document.querySelectorAll('.gn-product-card');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Filter products
        const filter = this.getAttribute('data-filter');
        
        productCards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  });

  


document.addEventListener('DOMContentLoaded', function() {
  // Password Toggle
  const passwordToggles = document.querySelectorAll('.gn-password-toggle');
  passwordToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const input = this.parentElement.querySelector('input');
      const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
      input.setAttribute('type', type);
      this.innerHTML = type === 'password' ? '<i class="bi bi-eye"></i>' : '<i class="bi bi-eye-slash"></i>';
    });
  });

  // Password Validation
  const passwordInputs = document.querySelectorAll('input[type="password"]');
  passwordInputs.forEach(input => {
    if (input.id.includes('Password') && !input.id.includes('Confirm')) {
      input.addEventListener('input', function() {
        const hints = this.parentElement.parentElement.querySelectorAll('.gn-hint');
        const value = this.value;

        // Check length
        hints[0].classList.toggle('valid', value.length >= 8);

        // Check uppercase
        hints[1].classList.toggle('valid', /[A-Z]/.test(value));

        // Check number
        hints[2].classList.toggle('valid', /\d/.test(value));
      });
    }
  });

  // Form Steps
  if (document.getElementById('registerForm')) {
    const formSteps = document.querySelectorAll('.gn-form-step');
    const stepButtons = document.querySelectorAll('[data-next], [data-prev]');

    stepButtons.forEach(button => {
      button.addEventListener('click', function() {
        const currentStep = this.closest('.gn-form-step');
        const targetStep = this.getAttribute('data-next') || this.getAttribute('data-prev');
        
        // Validate before proceeding
        if (this.hasAttribute('data-next')) {
          const inputs = currentStep.querySelectorAll('input[required], select[required]');
          let isValid = true;

          inputs.forEach(input => {
            if (!input.value) {
              input.focus();
              input.style.borderColor = '#ff6b35';
              setTimeout(() => input.style.borderColor = '#e2e8f0', 2000);
              isValid = false;
            }
          });

          if (!isValid) return;
        }

        // Switch steps
        currentStep.classList.remove('active');
        document.querySelector(`.gn-form-step[data-step="${targetStep}"]`).classList.add('active');

        // Update progress
        document.querySelectorAll('.gn-step').forEach(step => {
          step.classList.remove('active');
          if (parseInt(step.getAttribute('data-step')) <= parseInt(targetStep)) {
            step.classList.add('active');
          }
        });
      });
    });
  }

  // Form Submission
  const forms = document.querySelectorAll('.gn-auth-form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulate submission
      const submitBtn = this.querySelector('button[type="submit"]');
      submitBtn.innerHTML = '<i class="bi bi-arrow-repeat spin"></i> Processing';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = 'Success! <i class="bi bi-check"></i>';
        setTimeout(() => {
          if (form.id === 'registerForm') {
            window.location.href = 'dashboard.html';
          } else {
            window.location.href = 'profile.html';
          }
        }, 1000);
      }, 1500);
    });
  });
});