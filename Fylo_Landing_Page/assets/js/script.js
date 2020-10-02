const hamburgerbtn = document.getElementById("bars");
const navItems = document.getElementById("nav-items");

hamburgerbtn.addEventListener("click", () => {
  navItems.classList.toggle("show");
});
