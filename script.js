function toggleMenu() {
  const menuList = 
  document.getElementById('menu-list');
  menuList.classList.toggle('show');

  const menuItens = 
  document.querySelectorAll('#menu-list a');

  menuItens.forEach(item => {
    item.addEventListener('click', () => {
      const menuList =
      document.getElementById('menu-list');
      menuList.classList.remove('show');
    });
  });

}