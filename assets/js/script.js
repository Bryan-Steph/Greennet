function toggleMenu() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("active");
  }


  const cart = [];


  document.querySelectorAll('.add-to-cart').forEach((button, index) => {
    button.addEventListener('click', () => {
 
      const card = button.parentElement;
      const name = card.querySelector('.product-name').textContent;
      const price = card.querySelector('.product-price').textContent;


      cart.push({ name, price });

      console.log("Cart:", cart);
      alert(`${name} added to cart!`);
    });
  });


  const links = document.querySelectorAll('.nav-link');
  const currentPage = window.location.pathname.split("/").pop(); // gets current page file

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
