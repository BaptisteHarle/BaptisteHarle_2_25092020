// On attend que la page ait fini de charger
document.addEventListener('DOMContentLoaded', function() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  let isOpen = false;
  mobileBtn.addEventListener('click', function () {
    // Mes actions pour faire apparaitre le menu vont ici
    const menu = document.getElementById('mobile-menu');
    if(isOpen) {
      menu.style.height = '0px';
      isOpen = false;
    } else {
      menu.style.height = '250px';
      isOpen = true;
    }
  });
});