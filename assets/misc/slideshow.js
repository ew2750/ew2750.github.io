document.querySelectorAll('.photo-slideshow').forEach((gallery) => {
  const slides = Array.from(gallery.querySelectorAll('.photo-card'));
  const controls = gallery.querySelector('.slideshow-controls');
  const position = gallery.querySelector('.slide-position');
  let current = 0;
  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => { slide.hidden = i !== current; });
    position.textContent = (current + 1) + ' / ' + slides.length;
  }
  if (!slides.length) return;
  gallery.classList.add('slideshow-ready');
  controls.hidden = false;
  controls.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => show(current + Number(button.dataset.slideStep)));
  });
  gallery.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      show(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  let touchStart = null;
  gallery.addEventListener('touchstart', (event) => { touchStart = event.changedTouches[0].clientX; }, { passive: true });
  gallery.addEventListener('touchend', (event) => {
    if (touchStart === null) return;
    const distance = event.changedTouches[0].clientX - touchStart;
    if (Math.abs(distance) > 50) show(current + (distance < 0 ? 1 : -1));
    touchStart = null;
  }, { passive: true });
  show(0);
});
