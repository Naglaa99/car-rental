const toggleMenu = document.getElementById("toggle-menu");
const navLinks = document.querySelector(".nav-links");
const navLink = document.querySelectorAll(".nav-links li a");
const icon = toggleMenu.querySelector("i");
toggleMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  icon.classList.toggle("bx-x");
});
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    icon.classList.remove("bx-x");
  });
});
const scrollRevealOption= {
  origin:'bottom',
  distance: '50px',
  duration: 1000,
  easing: 'ease-in-out',
};
ScrollReveal().reveal('.location-hero h1', scrollRevealOption);
ScrollReveal().reveal('.form-search', {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal('.location-hero img', {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".range-card", {
  duration: 1000,
  interval: 500,
});
ScrollReveal().reveal(".location-image img",{
  ...scrollRevealOption,
  origin:"right",
});
ScrollReveal().reveal(".location-details h2",{
  ...scrollRevealOption,
  delay:500,
});
ScrollReveal().reveal(".location-details p",{
  ...scrollRevealOption,
  delay:1000,
});
ScrollReveal().reveal(".location-details button",{
  ...scrollRevealOption,
  delay:1500,
})
ScrollReveal().reveal(".story-card",{
  ...scrollRevealOption,
  interval:500,
})
ScrollReveal().reveal(".download-image img",{
  ...scrollRevealOption,
  origin:"right",
})
ScrollReveal().reveal(".download-details h2",{
  ...scrollRevealOption,
 delay:500,
})
ScrollReveal().reveal(".download-link",{
  ...scrollRevealOption,
  delay:1000,
})