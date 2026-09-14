document.querySelectorAll(".category-header").forEach((header) => {
  header.addEventListener("click", () => {
    const category = header.closest(".project-category");
    const willOpen = !category.classList.contains("open");
    category.classList.toggle("open", willOpen);
    header.setAttribute("aria-expanded", String(willOpen));
  });
});
