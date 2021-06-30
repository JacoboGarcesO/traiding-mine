const iconoMenu = document.getElementById('icono-menu'),
  menu = document.getElementById('menu');


iconoMenu.addEventListener('click', () => {
  menu.classList.toggle('header__container-menu--active');

  if (iconoMenu.className === "fas fa-bars") {
    iconoMenu.classList.remove('fa-bars');
    iconoMenu.classList.add('fa-times');
  } else {
    iconoMenu.classList.remove('fa-times');
    iconoMenu.classList.add('fa-bars');
  }
});

menu.addEventListener('click', () => {
  menu.classList.toggle('header__container-menu--active');
  if (iconoMenu.className === "fas fa-bars") {
    iconoMenu.classList.remove('fa-bars');
    iconoMenu.classList.add('fa-times');
  } else {
    iconoMenu.classList.remove('fa-times');
    iconoMenu.classList.add('fa-bars');
  }
})