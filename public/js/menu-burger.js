setTimeout(() => {
  if (typeof window === 'object') {
    const iconMenu = document.getElementById('menu-burger-icon');
    const menuBurger = document.querySelector('.menu-burger');
    iconMenu.addEventListener("click", function (e) {
      menuBurger.classList.toggle('_active');
    });
  }
}, 100)