window.onscroll = () => stickyHeader();
function stickyHeader() {
  const header = document.getElementById("header");
  if (window.innerWidth > 768) {
    if (window.scrollY > 0) header.classList.add("sticky");
    else header.classList.remove("sticky");
  } else header.classList.remove("sticky");
}
const toggleMenu = document.getElementById("toggle-menu");
const dropDown = document.querySelector(".dropdown");
const navLink = document.querySelectorAll(".dropdown li a");
const icon = toggleMenu.querySelector("i");
toggleMenu.addEventListener("click", () => {
  dropDown.classList.toggle("active");
  icon.classList.toggle("bx-x");
});
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    dropDown.classList.remove("active");
    icon.classList.remove("bx-x");
  });
});
