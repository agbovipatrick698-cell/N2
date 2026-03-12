const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll('a[href^="#"]');

function closeMenu() {
  nav.classList.remove("open");
  if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
}

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (targetId && targetId.startsWith("#")) {
      event.preventDefault();
      const el = document.querySelector(targetId);
      if (el) {
        const yOffset = -70; // account for sticky nav
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      closeMenu();
    }
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) closeMenu();
});
