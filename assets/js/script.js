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