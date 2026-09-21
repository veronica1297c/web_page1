// Rotates the home-page photo carousel. Does nothing on pages without one.
(function () {
  var slides = document.querySelectorAll('.carousel-image');
  if (slides.length < 2) return;

  var current = 0;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function show(i) {
    slides[current].classList.remove('active');
    current = (i + slides.length) % slides.length;
    slides[current].classList.add('active');
  }

  // Respect visitors who ask their system to reduce motion: show the first slide only.
  if (reduceMotion) return;

  setInterval(function () { show(current + 1); }, 5000);
})();
