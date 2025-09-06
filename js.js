const BotonMenu = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

BotonMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  BotonMenu.classList.toggle("active");
});
