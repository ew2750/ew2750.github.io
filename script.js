const navLinks = Array.from(document.querySelectorAll(".nav a"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
);

sections.forEach((section) => observer.observe(section));

document.querySelectorAll(".category-header").forEach((header) => {
  header.addEventListener("click", () => {
    const category = header.closest(".project-category");
    const willOpen = !category.classList.contains("open");
    category.classList.toggle("open", willOpen);
    header.setAttribute("aria-expanded", String(willOpen));
  });
});
